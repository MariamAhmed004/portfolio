import React from 'react';
import { motion } from 'framer-motion';

export default function Card({
  as: Component = motion.div,
  className = '',
  leading = null,
  title = null,
  subtitle = null,
  content = null,
  footer = null,
  children,
  ...motionProps
}) {
  const Tag = Component;
  const hasHeader = title || subtitle || leading;

  return (
    <Tag className={`card-root ${className}`.trim()} {...motionProps}>
      {hasHeader && (
        <div className="card-header d-flex align-items-start gap-3 mb-3">
          {leading && <div className="card-leading">{leading}</div>}
          <div className="card-titles">
            {title && <div className="card-title h6 fw-bold">{title}</div>}
            {subtitle && <div className="card-subtitle small text-light-emphasis">{subtitle}</div>}
          </div>
        </div>
      )}

      <div className="card-body">
        {content ?? children}
      </div>

      {footer && <div className="card-footer mt-3">{footer}</div>}
    </Tag>
  );
}
