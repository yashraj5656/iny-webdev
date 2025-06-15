import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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

  const promoSections = [
    {
      title: 'Organic Store',
      image: 'https://via.placeholder.com/800x400?text=Organic+Store',
      url: 'https://stayyoung.netlify.app'
    },
    {
      title: 'Personal Blog',
      image: 'https://via.placeholder.com/800x400?text=Personal+Blog',
      url: 'https://theinytimes.netlify.app'
    },
    {
      title: 'Landing Page',
      image: 'https://via.placeholder.com/800x400?text=Landing+Page',
      url: '#'
    },
    {
      title: 'Custom Site',
      image: 'https://via.placeholder.com/800x400?text=Portfolio+Site',
      url: '#'
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
      padding: '70px 30px',
      textAlign: 'center',
      borderRadius: '0 0 70px 70px'
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
    promoImage: {
      width: '100%',
      borderRadius: '10px',
      marginBottom: '15px'
    },
    promoButton: {
      backgroundColor: '#2563eb',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '6px',
      textDecoration: 'none'
    },
    footer: {
      background: 'linear-gradient(to right, #1e3a8a, #2563eb)',
      color: '#ffffff',
      textAlign: 'center',
      padding: '40px 20px',
      marginTop: '40px',
      borderRadius: '50px 50px 0 0'
    },
    footerHeading: {
      fontSize: '1.8em',
      marginBottom: '10px'
    },
    footerLink: {
      color: '#60a5fa',
      textDecoration: 'underline'
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
          data-aos="fade-up"
          style={styles.sectionCard}
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

      {promoSections.map((promo, i) => (
        <section
          key={i}
          data-aos="zoom-in"
          style={styles.sectionCard}
        >
          <img src={promo.image} alt={promo.title} style={styles.promoImage} />
          <h2 style={styles.sectionHeading}>{promo.title}</h2>
          <a href={promo.url} style={styles.promoButton} target="_blank" rel="noopener noreferrer">View Site</a>
        </section>
      ))}

      <section style={styles.sectionCard} data-aos="fade-up">
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
        <p>&copy; 2025 iNY WebDev. All rights reserved.</p>
      </footer>
    </div>
  );
}            