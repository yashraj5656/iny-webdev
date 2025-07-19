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
    const subject = `WebGenX Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    const mailtoLink = `mailto:inystudio1717@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const sections = [
    {
      heading: 'Your Digital Success Partner',
      text: [
        'WebGenX empowers your business with cutting-edge web development, custom designs, and scalable solutions.',
        'We craft stunning websites, optimize user experiences, and build robust applications to elevate your online presence.',
        'No outdated templates. No cookie-cutter designs. Just tailored digital solutions that drive growth.'
      ]
    },
    {
      heading: 'Our Services',
      list: [
        'Custom Website Development — Build responsive, high-performance websites.',
        'UI/UX Design — Create intuitive and engaging user experiences.',
        'E-Commerce Solutions — Develop secure, scalable online stores.',
        'Web Application Development — Build powerful, custom web apps.',
        'SEO Optimization — Boost your site’s visibility and rankings.'
      ]
    },
    {
      heading: 'Why Choose WebGenX?',
      list: [
        'Tailored, high-quality web solutions for all industries',
        'Affordable pricing with transparent development process',
        'Fast project delivery with ongoing support',
        'Responsive designs optimized for all devices',
        'SEO-friendly websites for better search rankings',
        'Client-focused approach to achieve your business goals'
      ]
    }
  ];

  const testimonials = [
    { author: 'Alex R.', quote: 'WebGenX transformed our online presence with a stunning website. Our traffic doubled in just a month!' },
    { author: 'Priya K.', quote: 'Their team delivered a seamless e-commerce platform. Fast, reliable, and exactly what we needed!' },
    { author: 'David L.', quote: 'WebGenX’s custom web app streamlined our operations and boosted user engagement significantly.' }
  ];

  return (
    <div className="app-container">
      <img className="background-video" src="/glass.jpg" alt="Background" />
      <div className="video-overlay"></div>

      <header className="header">
        <div className="logo-container">
          <img src="/WGX.png" alt="WebGenX Logo" className="logo-icon" />
          <h1 className="logo-heading">
            Web<span className="highlight">GenX</span>
          </h1>
        </div>
        <p className="header-subtitle">Building Your Future with Custom Web Development, Stunning Designs & Scalable Solutions</p>
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
        <p>Email us at <a href="mailto:inystudio1717@gmail.com" className="footer-link">inystudio1717@gmail.com</a></p>
        <p>© 2025 WebGenX. All rights reserved.</p>
      </footer>
    </div>
  );
}
