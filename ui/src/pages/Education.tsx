'use client';

import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'Lyceum of Subic Bay, Inc.',
    location: 'Subic Bay Freeport Zone',
    period: '2019-2023',
    description: 'Specialized in Logic and Designs, Computer Security, and Circuits & Electronics fundamentals.'
  },
  {
    degree: 'Information and Communication Technology (SHS)',
    institution: 'Comteq Computer and Business College',
    location: 'Olongapo City',
    period: '2017-2019',
    description:
      'Focused on programming fundamentals, network fundamentals, and basic software and hardware troubleshooting.'
  }
];

const certifications = [
  {
    name: 'Advanced React and Redux',
    issuer: 'Udemy',
    date: 'January 2022'
  },
  {
    name: 'Full Stack Web Development',
    issuer: 'Coursera',
    date: 'June 2021'
  },
  {
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: 'March 2020'
  }
];

export default function Education() {
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

  return (
    <section id='education' className='py-20 bg-base-100 section-animate' ref={sectionRef}>
      <div className='container mt-10 mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-16'>Education & Certifications</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-2xl font-semibold mb-6 flex items-center'>
              <GraduationCap size={24} className='mr-2' /> Academic Education
            </h3>
            <div className='space-y-8'>
              {education.map((edu, index) => (
                <div key={index} className='card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300'>
                  <div className='card-body'>
                    <h4 className='card-title'>{edu.degree}</h4>
                    <p className='font-medium'>{edu.institution}</p>
                    <div className='flex flex-col sm:flex-row sm:justify-between text-sm opacity-75 mt-1'>
                      <div className='flex items-center'>
                        <MapPin size={14} className='mr-1' /> {edu.location}
                      </div>
                      <div className='flex items-center mt-1 sm:mt-0'>
                        <Calendar size={14} className='mr-1' /> {edu.period}
                      </div>
                    </div>
                    <p className='mt-3'>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-6'>Certifications</h3>
            <div className='space-y-4'>
              {certifications.map((cert, index) => (
                <div key={index} className='card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300'>
                  <div className='card-body py-4'>
                    <h4 className='card-title text-lg'>{cert.name}</h4>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm'>
                      <span>{cert.issuer}</span>
                      <span className='badge badge-primary mt-1 sm:mt-0'>{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-12'>
              <h3 className='text-2xl font-semibold mb-6'>Languages</h3>
              <div className='space-y-4'>
                <div>
                  <div className='flex justify-between mb-1'>
                    <span className='font-medium'>Filipino</span>
                    <span>Native / Fluent</span>
                  </div>
                  <progress className='progress progress-primary w-full' value='100' max='100'></progress>
                </div>
                <div>
                  <div className='flex justify-between mb-1'>
                    <span className='font-medium'>English</span>
                    <span>Fluent</span>
                  </div>
                  <progress className='progress progress-primary w-full' value='50' max='100'></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
