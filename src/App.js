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
    const mailtoLink = `mailto:leadsparkteam@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const sections = [
    {
      heading: 'Your Email Growth Engine',
      text: [
        'LeadSpark powers your business with verified email lists and strategic email campaigns.',
        'We help you reach your ideal audience, generate qualified leads, and drive measurable results.'
      ]
    },
    {
      heading: 'Our Services',
      list: [
        'Verified Email Lists — Buy accurate, niche-specific contact lists.',
        'Cold Email Campaigns — Engage your audience with effective outreach.',
        'Email Deliverability Optimization — Maximize inbox placement.',
        'Lead Nurturing — Automated follow-ups that convert.'
      ]
    },
    {
      heading: 'Why Choose LeadSpark?',
      list: [
        'Verified, Ready-to-Use Data',
        'Affordable Pricing & Transparent Process',
        'Fast Turnaround Time',
        'CAN-SPAM & GDPR Compliance',
        'Results-Driven Approach'
      ]
    }
  ];

  const testimonials = [
    { author: 'Alex R.', quote: 'LeadSpark helped us triple our email responses in 2 weeks.' },
    { author: 'Priya K.', quote: 'Reliable, fast, and cost-effective email lists. Highly recommend.' },
    { author: 'David L.', quote: 'Their cold email campaigns generated leads we couldn’t find elsewhere.' }
  ];

  return (
    <div className="app-container">
      <img className="background-video" src="/glass.jpg" alt="Background" />
      <div className="video-overlay"></div>

      <header className="header">
  <h1 className="tracking-in-expand-fwd-top">LeadSpark</h1>
  <p className="tracking-in-contract">Fueling Your Growth with Verified Leads & Strategic Email Campaigns</p>
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
        <p>Email us at <a href="mailto:leadsparkteam@example.com" className="footer-link">leadsparkteam@example.com</a></p>
        <p>&copy; 2025 LeadSpark. All rights reserved.</p>
      </footer>
    </div>
  );
}
