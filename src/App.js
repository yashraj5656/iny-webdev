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
      title: 'Landing Page',
      video: '/land.mp4',
      url: 'https://samplelandingpagel.netlify.app/'
    },
    {
      title: 'Personal Blog',
      video: '/tyj.mp4',
      url: 'https://theinytimes.netlify.app'
    },

    {
      title: 'Organic Store',
      video: '/stayyoung.mp4',
      url: 'https://stayyoung.netlify.app'
    },
  ];

  return (
    <div className="app-container">
      <img className="background-video" src="/glass.jpg" alt="Background" />
      <div className="video-overlay"></div>

      <header className="header">
        <h1 className="tracking-in-expand-fwd-top">iNY WebDev</h1>
        <p className="tracking-in-contract">Crafting Strategic Digital Experiences for Lasting Impact</p>
      </header>

      {sections.map((section, idx) => (
        <section key={idx} data-aos="fade-up" className="section-card">
          <h2 className="section-heading">{section.heading}</h2>
          {section.text?.map((p, i) => (
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
          <video
            src={promo.video}
            autoPlay
            loop
            muted
            playsInline
            className="promo-image"
          />
          <h2 className="section-heading">{promo.title}</h2>
          <br></br>
          <a
            href={promo.url}
            className="glow-button"
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

      <style>{`
        .background-video {
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          pointer-events: none;
        }
        .video-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.3);
          z-index: 0;
        }
        .app-container {
          position: relative;
          z-index: 1;
          font-family: 'Segoe UI', sans-serif;
          color: #1a1a1a;
        }
        .header {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 70px 30px;
          text-align: center;
          border-radius: 0 0 70px 70px;
          backdrop-filter: blur(6px);
        }
        .tracking-in-expand-fwd-top {
          animation: tracking-in-expand-fwd-top 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
          font-size: 3em;
          margin-bottom: 10px;
        }
        .tracking-in-contract {
          animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
          font-size: 1.3em;
          font-weight: 300;
        }
        @keyframes tracking-in-expand-fwd-top {
          0% {
            letter-spacing: -0.5em;
            transform: translateZ(-700px) translateY(-500px);
            opacity: 0;
          }
          40% { opacity: 0.6; }
          100% {
            transform: translateZ(0) translateY(0);
            opacity: 1;
          }
        }
        @keyframes tracking-in-contract {
          0% {
            letter-spacing: 1em;
            opacity: 0;
          }
          40% { opacity: 0.6; }
          100% {
            letter-spacing: normal;
            opacity: 1;
          }
        }
        .section-card {
          background: rgba(255, 255, 255, 0.08);
          padding: 40px 30px;
          margin: 30px auto;
          max-width: 1000px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          backdrop-filter: blur(10px);
        }
        .section-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .section-heading {
          font-size: 2em;
          margin-bottom: 20px;
          color: #ffffff;
        }
        .section-text {
          font-size: 1.05em;
          line-height: 1.6;
          margin-bottom: 15px;
          color: #e0e0e0;
        }
        .bullet-list {
          list-style: disc;
          padding-left: 20px;
          font-size: 1.05em;
          line-height: 1.6;
          color: #e0e0e0;
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
          .glow-button {
  --glow-color: #e4f6f7;
  --glow-spread-color: rgba(0, 255, 255, 0.3);
  --enhanced-glow-color: #7af8ff;
  --btn-color: #0c0c1b;
  
  border: 0.25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 16px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow:
    0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s ease-in-out;
}

.glow-button::after {
  pointer-events: none;
  content: "";
  position: absolute;
  top: 120%;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--glow-spread-color);
  filter: blur(2em);
  opacity: 0.7;
  transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
}

.glow-button:hover {
  color: var(--btn-color);
  background-color: var(--glow-color);
  box-shadow:
    0 0 1em 0.25em var(--glow-color),
    0 0 4em 2em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
}

.glow-button:active {
  box-shadow:
    0 0 0.6em 0.25em var(--glow-color),
    0 0 2.5em 2em var(--glow-spread-color),
    inset 0 0 0.5em 0.25em var(--glow-color);
}
    a {
  text-decoration: none;
}


        .footer {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
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
    </div>
  );
}
