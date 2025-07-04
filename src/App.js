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
    const subject = `LeadSpark Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    const mailtoLink = `mailto:inystudio1717@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const sections = [
    {
      heading: 'Your Direct Growth Engine',
      text: [
        'MailGenX powers your business with verified email lists, targeted DM marketing, and strategic email campaigns.',

       ' We help you reach your ideal audience, generate qualified leads, and drive measurable results — through the inbox and social DMs.',

        'No skipped ads. No wasted clicks. Just direct conversations that convert.'
        
      ]
    },
    {
      heading: 'Our Services',
      list: [
        'DM Marketing — Send targeted Instagram DMs that spark real conversations.',
        'Verified Email Lists — Buy accurate, niche-specific contact lists.',
        'Cold Email Campaigns — Engage your audience with effective outreach.',
        'Email Deliverability Optimization — Maximize inbox placement.',
        'Lead Nurturing — Automated follow-ups that convert.'
      ]
    },
    {
      heading: 'Why Choose MailGenX?',
      list: [
        'Verified, ready-to-use data (emails and social media contacts)',
        'Affordable pricing and transparent process',
        'Fast turnaround time for campaign launch',
        'Email and DM campaigns with high engagement',
        'CAN-SPAM & GDPR compliant practices',
        'Results-driven approach focused on real leads'
      ]
    }
  ];

  const testimonials = [
    { author: 'Alex R.', quote: 'MailGenX didn’t just promise results — they delivered. Our email responses tripled in just 2 weeks.' },
    { author: 'Priya K.', quote: 'Reliable, fast, and cost-effective email & DM lists. Helped us reach the right audience quickly. Highly recommend!' },
    { author: 'David L.', quote: 'MailGenX’s cold emails and DM outreach helped us reach leads we couldn’t find through any other channel.' }
  ];

  return (
    <div className="app-container">
      <img className="background-video" src="/glass.jpg" alt="Background" />
      <div className="video-overlay"></div>

      <header className="header">
  <div className="logo-container">
    <img src="/mgx.png" alt="MailGenX Logo" className="logo-icon" />
    <h1 className="logo-heading">
      Mail<span className="highlight">GenX</span>
    </h1>
  </div>
  <p className="header-subtitle">Fueling Your Growth with Verified Leads, Email Marketing & Direct DM Conversations</p>
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

      <section className="section-card" data-aos="fade-up">
        <h2 className="section-heading">What Our Clients Say</h2>
        {testimonials.map((testimonial, i) => (
          <div key={i} className="testimonial-card">
            <p>"{testimonial.quote}"</p>
            <p><strong>- {testimonial.author}</strong></p>
          </div>
        ))}
      </section>

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
        <h2 className="footer-heading">Let's Connect</h2>
        <p>Email us at <a href="inystudio1717@gmail.com" className="footer-link">inystudio1717@gmail.com</a></p>
        <p>&copy; 2025 MailGenX. All rights reserved.</p>
      </footer>
    </div>
  );
}
