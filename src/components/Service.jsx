
import React from 'react';

export default function Services() {
  return (
    <section id="services" style={{ maxWidth: '1200px', margin: 'auto', padding: '2rem 1rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Services</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{
          flex: '1 1 300px',
          padding: '1rem',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3>Web Design</h3>
          <p>Crafting modern & responsive web designs</p>
        </div>
        <div style={{
          flex: '1 1 300px',
          padding: '1rem',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3>UI/UX</h3>
          <p>Designing user-centered experiences</p>
        </div>
      </div>
    </section>
  );
}
