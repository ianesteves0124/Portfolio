'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section id='contact' className='py-20 section-animate' ref={sectionRef}>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center mt-10 mb-16 gap-4'>
          <h2 className='text-4xl font-bold'>Get in Touch</h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
            <div className='flex flex-col space-y-6'>
              <div className='flex items-center border-2 rounded-2xl w-150 backdrop-opacity-100'>
                <div className='avatar placeholder ml-5 mr-4'>
                  <Mail className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <p className='mt-1'>ianmiles.esteves@gmail.com</p>
                </div>
              </div>

              <div className='flex items-center border-2 rounded-2xl w-150 backdrop-opacity-100'>
                <div className='avatar placeholder ml-5 mr-4'>
                  <Phone className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <p className='mt-1'>{`(+63) 917-174-1117`}</p>
                </div>
              </div>

              <div className='flex items-center border-2 rounded-2xl w-150 backdrop-opacity-100'>
                <div className='avatar placeholder ml-5 mr-4'>
                  <MapPin className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <p className='mt-1'>Subic, Zambales, Philippines, 2209</p>
                </div>
              </div>
            </div>

            <div className='mt-12'>
              <h3 className='text-2xl font-semibold mb-6'>Follow Me</h3>
              <div className='flex gap-4'>
                <Link
                  to='https://github.com/ianesteves0124'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-circle btn-outline'
                >
                  <Github size={20} />
                </Link>
                <Link
                  to='https://www.linkedin.com/in/ian-miles-esteves-904138279/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-circle btn-outline'
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  to='https://www.instagram.com/iann.esteves/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-circle btn-outline'
                >
                  <Instagram size={20} />
                </Link>
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
                  className='textarea textarea-bordered w-full'
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
