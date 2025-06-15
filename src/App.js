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
      image:'/stayyoung.png',
      url: 'https://stayyoung.netlify.app'
    },
    {
      title: 'Personal Blog',
      image: '/tyj.png',
      url: 'https://theinytimes.netlify.app'
    },
    {
      title: 'Landing Page',
      image: '/land.png',
      url: 'https://samplelandingpagel.netlify.app/'
    },
    {
      title: 'Custom Site',
      image: 'https://via.placeholder.com/800x400?text=Portfolio+Site',
      url: '#'
    }
  ];

  return (
    <div className="app-container">
      <style>{`
        .app-container {
          font-family: 'Segoe UI', sans-serif;
          background-color: #f5f7fb;
          color: #1a1a1a;
          padding: 0;
          margin: 0;
        }
        .header {
          background: linear-gradient(to right, #1e3a8a, #2563eb);
          color: #ffffff;
          padding: 70px 30px;
          text-align: center;
          border-radius: 0 0 70px 70px;
        }
        .heading {
          font-size: 3em;
          margin-bottom: 10px;
        }
        .subheading {
          font-size: 1.3em;
          font-weight: 300;
        }
        .section-card {
          background-color: #ffffff;
          padding: 40px 30px;
          margin: 30px auto;
          max-width: 1000px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .section-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .section-heading {
          font-size: 2em;
          margin-bottom: 20px;
          color: #1e3a8a;
        }
        .section-text {
          font-size: 1.05em;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        .bullet-list {
          list-style: disc;
          padding-left: 20px;
          font-size: 1.05em;
          line-height: 1.6;
        }
        .testimonial-card {
          background-color: #f1f5f9;
          padding: 20px;
          margin: 15px 0;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .promo-image {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 15px;
        }
        .promo-button {
          background-color: #2563eb;
          color: #fff;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.3s ease;
        }
        .promo-button:hover {
          background-color: #1e40af;
        }
        .footer {
          background: linear-gradient(to right, #1e3a8a, #2563eb);
          color: #ffffff;
          text-align: center;
          padding: 40px 20px;
          margin-top: 40px;
          border-radius: 50px 50px 0 0;
        }
        .footer-heading {
          font-size: 1.8em;
          margin-bottom: 10px;
        }
        .footer-link {
          color: #60a5fa;
          text-decoration: underline;
        }
      `}</style>

      <header className="header">
        <h1 className="heading">iNY WebDev</h1>
        <p className="subheading">Crafting Strategic Digital Experiences for Lasting Impact</p>
      </header>

      {sections.map((section, idx) => (
        <section key={idx} data-aos="fade-up" className="section-card">
          <h2 className="section-heading">{section.heading}</h2>
          {section.text && section.text.map((p, i) => (
            <p key={i} className="section-text">{p}</p>
          ))}
          {section.list && (
            <ul className="bullet-list">
              {section.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          )}
        </section>
      ))}

      {promoSections.map((promo, i) => (
        <section key={i} data-aos="zoom-in" className="section-card">
          <img src={promo.image} alt={promo.title} className="promo-image" />
          <h2 className="section-heading">{promo.title}</h2>
          <a
            href={promo.url}
            className="promo-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </a>
        </section>
      ))}

      <section className="section-card" data-aos="fade-up">
        <h2 className="section-heading">What Our Clients Say</h2>
        {testimonials.map((testimonial, i) => (
          <div key={i} className="testimonial-card">
            <p>"{testimonial.quote}"</p>
            <p><strong>- {testimonial.author}</strong></p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <h2 className="footer-heading">Get in Touch</h2>
        <p>Email us at <a href="mailto:inystudio1717@gmail.com" className="footer-link">inystudio1717@gmail.com</a></p>
        <p>&copy; 2025 iNY WebDev. All rights reserved.</p>
      </footer>
    </div>
  );
}
