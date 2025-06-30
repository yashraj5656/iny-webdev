import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMailto = () => {
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    const mailtoLink = `mailto:inystudio1717@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

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

  const promoVideos = ['/land.mp4', '/tyj.mp4', '/stayyoung.mp4'];

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

      {promoVideos.map((video, i) => (
        <section key={i} data-aos="zoom-in" className="section-card">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="promo-image"
          />
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

      {/* Contact Form Section */}
      <section className="section-card" data-aos="fade-up">
        <h2 className="section-heading">Contact Us</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="button" className="contact-button" onClick={handleMailto}>
            Send 
          </button>
        </form>
      </section>

      <footer className="footer">
        <h2 className="footer-heading">Get in Touch</h2>
        <p>Email us at <a href="mailto:inystudio1717@gmail.com" className="footer-link">inystudio1717@gmail.com</a></p>
        <p>&copy; 2025 iNY WebDev. All rights reserved.</p>
      </footer>
    </div>
  );
}
