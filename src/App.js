import React, { useState, useEffect } from 'react';

export default function App() {
  const sampleSites = [
    { title: 'Organic Store', url: 'https://example.com/organic', image: 'https://via.placeholder.com/800x300?text=Organic+Store' },
    { title: 'Fitness Blog', url: 'https://example.com/fitness', image: 'https://via.placeholder.com/800x300?text=Fitness+Blog' },
    { title: 'Startup Landing Page', url: 'https://example.com/startup', image: 'https://via.placeholder.com/800x300?text=Startup+Landing+Page' },
    { title: 'Portfolio Site', url: 'https://example.com/portfolio', image: 'https://via.placeholder.com/800x300?text=Portfolio+Site' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sampleSites.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sampleSites.length]);

  return (
    <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f0f4f8',
      padding: '0',
      margin: '0',
      color: '#1a1a1a'
    }}>
      <div style={{ textAlign: 'center', backgroundColor: '#dbeafe' }}>
        <a href={sampleSites[currentSlide].url} target="_blank" rel="noopener noreferrer">
          <img
            src={sampleSites[currentSlide].image}
            alt={sampleSites[currentSlide].title}
            style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
          />
        </a>
      </div>

      <header style={{
        backgroundColor: '#0b1120',
        padding: '30px 20px',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3em', margin: '0' }}>iNY WebDev</h1>
        <p style={{ fontSize: '1.2em', marginTop: '10px' }}>Crafting Strategic Digital Experiences for Lasting Impact</p>
      </header>

      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5em' }}>What We Offer</h2>
        <p style={{ fontSize: '1.1em', maxWidth: '800px', margin: '20px auto' }}>
          iNY WebDev is a full-service website development agency offering stunning designs, SEO-optimized content,
          lightning-fast loading speeds, and mobile responsiveness. Whether you're a startup, a small business, or an
          established enterprise, we deliver tailored digital experiences that drive results.
        </p>
        <p style={{ fontSize: '1.05em', maxWidth: '800px', margin: '10px auto' }}>
          We're not just developers — we're your digital partners. From the first consultation to post-launch support,
          we ensure your online presence reflects your brand's personality, values, and goals.
        </p>
      </section>

      <section style={{
        backgroundColor: '#ffffff',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {[{ title: 'Custom Website Design', desc: 'Unique, user-centric designs that make you stand out.' },
          { title: 'E-Commerce Solutions', desc: 'Sell online with powerful, scalable platforms.' },
          { title: 'SEO Optimization', desc: 'Rank higher and get discovered by your target audience.' },
          { title: 'Website Maintenance', desc: 'We keep your website up-to-date and secure.' }].map((service, idx) => (
          <div key={idx} style={{
            backgroundColor: '#e8edf3',
            borderRadius: '12px',
            padding: '20px',
            margin: '15px',
            width: '250px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>

      <section style={{
        padding: '50px 20px',
        backgroundColor: '#dbeafe',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2em' }}>Why Choose iNY WebDev?</h2>
        <ul style={{ listStyleType: 'none', padding: 0, margin: '30px 0', fontSize: '1.1em' }}>
          <li>✅ Experienced Developers & Designers</li>
          <li>✅ Affordable & Transparent Pricing</li>
          <li>✅ 24/7 Support & Maintenance</li>
          <li>✅ 100% Satisfaction Guarantee</li>
          <li>✅ Proven Track Record Across Industries</li>
          <li>✅ Detailed Project Planning & Execution</li>
        </ul>
      </section>

      <section style={{
        padding: '50px 20px',
        backgroundColor: '#ffffff',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>What Our Clients Say</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {[{ name: 'Sarah J.', quote: 'Working with iNY WebDev was a dream. They delivered everything on time and exceeded expectations!' },
            { name: 'Mark T.', quote: 'Amazing service! Our new website boosted traffic by 300% in just a month.' },
            { name: 'Lena D.', quote: 'Professional, reliable, and highly skilled. Highly recommended for any web project.' }].map((testimonial, index) => (
            <div key={index} style={{
              backgroundColor: '#f9fafb',
              padding: '20px',
              borderRadius: '10px',
              width: '300px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}>
              <p style={{ fontStyle: 'italic' }}>&quot;{testimonial.quote}&quot;</p>
              <p style={{ fontWeight: 'bold', marginTop: '10px' }}>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{
        backgroundColor: '#0b1120',
        color: '#ffffff',
        textAlign: 'center',
        padding: '30px 20px'
      }}>
        <h3>Let's Build Your Dream Website</h3>
        <p>Email us at <a href="mailto:inystudio1717@gmail.com" style={{ color: '#38bdf8' }}>inystudio1717@gmail.com</a></p>
        <p>&copy; 2025 iNY WebDev. All rights reserved.</p>
      </footer>
    </div>
  );
}
