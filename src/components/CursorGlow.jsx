import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

function CursorGlow({
  color = '#4f8cff',
  opacity = 0.2,
  trailLength = 360,
  trailThickness = 6,
  blur = 8,
  idleDelay = 2000,
  idleOpacity = 0.35,
}) {
  const prefersReducedMotion = useReducedMotion();
  const canvasRef = useRef(null);
  const points = useRef([]);
  const lastPoint = useRef(null);
  const lastMoveTime = useRef(0);
  const pointerInside = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrame;

    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const clearCanvas = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    const drawPath = (path, baseOpacity) => {
      if (path.length < 2) return;

      for (let index = 0; index < path.length; index += 1) {
        const point = path[index];
        const progress = index / (path.length - 1);
        const radius = trailThickness * (0.7 + progress * 1.4);
        const glowRadius = radius + blur;
        const pointGradient = context.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          glowRadius,
        );

        pointGradient.addColorStop(0, color);
        pointGradient.addColorStop(0.35, color);
        pointGradient.addColorStop(1, 'transparent');
        context.fillStyle = pointGradient;
        context.globalAlpha = baseOpacity * (0.08 + progress * 0.92);
        context.beginPath();
        context.arc(point.x, point.y, glowRadius, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;
    };

    const drawIdlePath = (time) => {
      const path = [];
      const centerX = window.innerWidth * 0.55 + Math.sin(time * 0.00018) * window.innerWidth * 0.2;
      const centerY = window.innerHeight * 0.5 + Math.cos(time * 0.00022) * window.innerHeight * 0.24;

      for (let index = 0; index < 38; index += 1) {
        const phase = time * 0.0007 - index * 0.16;
        path.push({
          x: centerX + Math.cos(phase) * (index * 22),
          y: centerY + Math.sin(phase) * 80,
        });
      }

      drawPath(path, idleOpacity);
    };

    const render = (time) => {
      clearCanvas();
      const inactivity = time - lastMoveTime.current;

      if (pointerInside.current && inactivity < idleDelay) {
        points.current = points.current.filter((point) => time - point.time < 900);
        drawPath(points.current, opacity);
      } else if (!prefersReducedMotion && inactivity >= idleDelay) {
        drawIdlePath(time);
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event) => {
      const point = { x: event.clientX, y: event.clientY, time: performance.now() };
      const previous = lastPoint.current;

      if (previous) {
        const distance = Math.hypot(point.x - previous.x, point.y - previous.y);
        const steps = Math.max(1, Math.ceil(distance / 10));

        for (let step = 1; step <= steps; step += 1) {
          const progress = step / steps;
          points.current.push({
            x: previous.x + (point.x - previous.x) * progress,
            y: previous.y + (point.y - previous.y) * progress,
            time: point.time,
          });
        }
      } else {
        points.current.push(point);
      }

      let distance = 0;
      for (let index = points.current.length - 1; index > 0; index -= 1) {
        distance += Math.hypot(
          points.current[index].x - points.current[index - 1].x,
          points.current[index].y - points.current[index - 1].y,
        );
        if (distance > trailLength) {
          points.current = points.current.slice(index);
          break;
        }
      }

      lastPoint.current = point;
      lastMoveTime.current = point.time;
      pointerInside.current = true;
    };

    const reset = () => {
      points.current = [];
      lastPoint.current = null;
      pointerInside.current = false;
      lastMoveTime.current = performance.now();
      clearCanvas();
    };

    const handlePointerEnter = () => {
      points.current = [];
      lastPoint.current = null;
      pointerInside.current = true;
      lastMoveTime.current = performance.now();
      clearCanvas();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerenter', handlePointerEnter, { passive: true });
    window.addEventListener('pointerleave', reset, { passive: true });
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerenter', handlePointerEnter);
      window.removeEventListener('pointerleave', reset);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [blur, color, idleDelay, idleOpacity, opacity, prefersReducedMotion, trailLength, trailThickness]);

  return <canvas ref={canvasRef} aria-hidden="true" className="cursor-trail-canvas" />;
}

export default CursorGlow;
