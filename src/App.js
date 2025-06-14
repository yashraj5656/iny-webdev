import React, { useState, useEffect } from 'react';

export default function App() {
  const sampleSites = [
    { title: 'Organic Store', url: 'https://example.com/organic', image: 'https://via.placeholder.com/800x300?text=Organic+Store' },
    { title: 'Fitness Blog', url: 'https://example.com/fitness', image: 'https://via.placeholder.com/800x300?text=Fitness+Blog' },
    { title: 'Startup Landing Page', url: 'https://example.com/startup', image: 'https://via.placeholder.com/800x300?text=Startup+Landing+Page' },
    { title: 'Portfolio Site', url: 'https://example.com/portfolio', image: 'https://via.placeholder.com/800x300?text=Portfolio+Site' },
    { title: 'Custom Website', url: 'https://example.com/custom', image: 'https://via.placeholder.com/800x300?text=Custom+Website' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // ✅ Add this line

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sampleSites.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sampleSites.length]);


  const testimonials = [
    { author: 'Sarah J.', quote: 'Working with iNY WebDev was a dream. They delivered everything on time and exceeded expectations!' },
    { author: 'Mark T.', quote: 'Amazing service! Our new website boosted traffic by 300% in just a month.' },
    { author: 'Lena D.', quote: 'Professional, reliable, and highly skilled. Highly recommended for any web project.' }
  ];

  const sections = [
    {
      heading: 'What We Offer',
      text: [
        'iNY WebDev is a full-service website development agency offering stunning designs, SEO-optimized content, lightning-fast loading speeds, and mobile responsiveness.',
        "We're not just developers — we're your digital partners. From the first consultation to post-launch support, we ensure your online presence reflects your brand's personality, values, and goals."
      ]
    },
    {
      heading: 'Our Services',
      text: [],
      list: [
        'Custom Website Design — Unique, user-centric designs that make you stand out.',
        'E-Commerce Solutions — Sell online with powerful, scalable platforms.',
        'SEO Optimization — Rank higher and get discovered by your target audience.',
        'Website Maintenance — We keep your website up-to-date and secure.'
      ]
    },
    {
      heading: 'Why Choose iNY WebDev?',
      text: [],
      list: [
        'Experienced Developers & Designers',
        'Affordable & Transparent Pricing',
        '24/7 Support & Maintenance',
        '100% Satisfaction Guarantee',
        'Proven Track Record Across Industries',
        'Detailed Project Planning & Execution'
      ]
    }
  ];

  const styles = {
    container: {
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f5f7fb',
      color: '#1a1a1a',
      padding: 0,
      margin: 0
    },
    header: {
      background: 'linear-gradient(to right, #1e3a8a, #2563eb)',
      color: '#ffffff',
      padding: '60px 20px',
      textAlign: 'center',
      borderRadius: '0 0 20px 20px'
    },
    heading: {
      fontSize: '3em',
      marginBottom: '10px'
    },
    subheading: {
      fontSize: '1.3em',
      fontWeight: 300
    },
    sectionCard: {
      backgroundColor: '#ffffff',
      padding: '40px 30px',
      margin: '30px auto',
      maxWidth: '1000px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s ease'
    },
    sectionHeading: {
      fontSize: '2em',
      marginBottom: '20px',
      color: '#1e3a8a'
    },
    sectionText: {
      fontSize: '1.05em',
      lineHeight: '1.6',
      marginBottom: '15px'
    },
    bulletList: {
      listStyle: 'disc',
      paddingLeft: '20px',
      fontSize: '1.05em',
      lineHeight: '1.6'
    },
    testimonialCard: {
      backgroundColor: '#f1f5f9',
      padding: '20px',
      margin: '15px 0',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
    },
    footer: {
      background: 'linear-gradient(to right, #1e3a8a, #2563eb)',
      color: '#ffffff',
      textAlign: 'center',
      padding: '60px 20px',
      marginTop: '40px',
      borderRadius: '20px 20px 0 0'
    },
    footerHeading: {
      fontSize: '1.8em',
      marginBottom: '10px'
    },
    footerLink: {
      color: '#60a5fa',
      textDecoration: 'underline'
    },
    socialIcons: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px'
    },
    iconLink: {
      color: 'white',
      fontSize: '1.5em',
      textDecoration: 'none'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>iNY WebDev</h1>
        <p style={styles.subheading}>Crafting Strategic Digital Experiences for Lasting Impact</p>
      </header>

      {sections.map((section, idx) => (
        <section
          key={idx}
          style={styles.sectionCard}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
        >
          <h2 style={styles.sectionHeading}>{section.heading}</h2>
          {section.text && section.text.map((p, i) => (
            <p key={i} style={styles.sectionText}>{p}</p>
          ))}
          {section.list && (
            <ul style={styles.bulletList}>
              {section.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          )}
        </section>
      ))}

      {sampleSites.map((site, index) => (
        <section
          key={`sample-${index}`}
          style={styles.sectionCard}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
        >
          <h2 style={styles.sectionHeading}>{site.title}</h2>
          <img src={site.image} alt={site.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />
          <p style={styles.sectionText}>Explore our custom design for a {site.title.toLowerCase()} featuring stunning visuals, responsive layout, and optimized performance.</p>
          <a href={site.url} target="_blank" rel="noopener noreferrer">
            <button style={{
              backgroundColor: '#1a3fad',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '20px',
              fontWeight: '600',
              transition: 'background-color 0.3s ease'
            }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#14318a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#1a3fad'}
            >
              View Project
            </button>
          </a>
        </section>
      ))}

      <section style={styles.sectionCard}>
        <h2 style={styles.sectionHeading}>What Our Clients Say</h2>
        {testimonials.map((testimonial, i) => (
          <div key={i} style={styles.testimonialCard}>
            <p>"{testimonial.quote}"</p>
            <p><strong>- {testimonial.author}</strong></p>
          </div>
        ))}
      </section>

      <footer style={styles.footer}>
        <h2 style={styles.footerHeading}>Get in Touch</h2>
        <p>Email us at <a href="mailto:inystudio1717@gmail.com" style={styles.footerLink}>inystudio1717@gmail.com</a></p>
        <p style={{ marginTop: '20px' }}>&copy; 2025 iNY WebDev. All rights reserved.</p>
      </footer>
    </div>
  );
}
