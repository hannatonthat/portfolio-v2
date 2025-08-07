'use client';
import React from 'react';

export default function StaggeredLine({ children, index = 0, delay = 0.15 }) {
  return (
    <div
      className="stagger-line"
      style={{
        animationDelay: `${index * delay}s`,
      }}
    >
      {children}
    </div>
  );
}