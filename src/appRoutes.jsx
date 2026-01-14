import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export const routes = [
  {
    path: '/about',
    name: 'About',
    element: <About />,
  },
  {
    path: '/skills',
    name: 'Skills',
    element: <Skills />,
  },
  {
    path: '/projects',
    name: 'Projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
  },
];
