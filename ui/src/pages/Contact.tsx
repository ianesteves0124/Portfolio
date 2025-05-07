'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 3 secondsname: "", email: "", subject: "", message: ""})

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id='contact' className='py-20 bg-base-200 section-animate' ref={sectionRef}>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-16'>Get In Touch</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='avatar placeholder mr-4'>
                  <div className='bg-primary text-primary-content rounded-full w-12'>
                    <Mail className='w-6 h-6' />
                  </div>
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <p className='mt-1'>your.email@example.com</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='avatar placeholder mr-4'>
                  <div className='bg-primary text-primary-content rounded-full w-12'>
                    <Phone className='w-6 h-6' />
                  </div>
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <p className='mt-1'>+1 (123) 456-7890</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='avatar placeholder mr-4'>
                  <div className='bg-primary text-primary-content rounded-full w-12'>
                    <MapPin className='w-6 h-6' />
                  </div>
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <p className='mt-1'>San Francisco, California</p>
                </div>
              </div>
            </div>

            <div className='mt-12'>
              <h3 className='text-2xl font-semibold mb-6'>Follow Me</h3>
              <div className='flex gap-4'>
                <a
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-circle btn-outline'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-github'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                </a>
                <a
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-circle btn-outline'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-linkedin'
                  >
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                    <rect width='4' height='12' x='2' y='9'></rect>
                    <circle cx='4' cy='4' r='2'></circle>
                  </svg>
                </a>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-circle btn-outline'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-twitter'
                  >
                    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                  </svg>
                </a>
                <a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-circle btn-outline'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-instagram'
                  >
                    <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                    <line x1='17.5' x2='17.51' y1='6.5' y2='6.5'></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-6'>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your name'
                  className='input input-bordered w-full'
                  required
                />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Your email'
                  className='input input-bordered w-full'
                  required
                />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Subject</span>
                </label>
                <input
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Subject'
                  className='input input-bordered w-full'
                  required
                />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Message</span>
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='textarea textarea-bordered h-32'
                  placeholder='Your message'
                  required
                ></textarea>
              </div>

              {success && (
                <div className='alert alert-success'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='stroke-current shrink-0 h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>Your message has been sent successfully!</span>
                </div>
              )}

              <button type='submit' className='btn btn-primary w-full' disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span> : <Send size={16} className='mr-2' />}
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
