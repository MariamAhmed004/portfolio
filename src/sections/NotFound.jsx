import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>404 — Page Not Found</h1>
      <p style={{ marginBottom: '1.25rem' }}>Sorry, the page you requested doesn't exist or an error occurred.</p>
      <p>
        <Link to="/" style={{ color: '#0366d6', textDecoration: 'underline' }}>
          Return to home
        </Link>
      </p>
    </div>
  );
}
