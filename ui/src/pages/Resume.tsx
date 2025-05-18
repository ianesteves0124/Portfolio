'use client';

import { useEffect, useRef } from 'react';
import { Download, CheckCircle } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    items: [
      'React',
      'Vite',
      'Ionic React',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Ant Design',
      'DaisyUI'
    ]
  },
  { category: 'Backend', items: ['Node.js', 'Express', 'Postgresql', 'Sequelize'] },
  { category: 'Tools', items: ['GitHub', 'VS Code', 'Vercel', 'Postman', 'XCode', 'Capacitor'] }
];

const experiences = [
  {
    title: 'Part Time Instructor',
    company: 'Lyceum of Subic Bay, Inc.',
    period: 'Aug 2023 - Dec 2023',
    description:
      'Worked as a part time instructor under the Department of Engineering. Taught Programming Logic and Design, Basic Fundamentals of Network Security and Engineering Ergonomics'
  },
  {
    title: 'Programmer',
    company: 'United Auctioneers, Inc.',
    period: 'Jul 2023 - Jan 2024',
    description:
      'Developing a responsive web application using Vite React, implemented PERN Stack along with Redux for state management, Axios for HTTPS Requests, and TailwindCSS and Ant Design for the user interface.'
  },
  {
    title: 'Programmer I',
    company: 'United Auctioneers, Inc.',
    period: 'Jan 2024 - Present',
    description: 'Developing and maintaining in-house web application, Following Agile Methodology'
  }
];

export default function Resume() {
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
    <section className='py-20 bg-transparent section-animate' ref={sectionRef}>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center mt-10 mb-16 gap-4'>
          <h2 className='text-4xl font-bold'>Resume & Skills</h2>
          {/* <a href='/resume.pdf' download className='btn btn-primary'>
            <Download size={16} className='mr-2' /> Download CV
          </a> */}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            {/* <h3 className='text-2xl font-semibold mb-6'>Work Experience</h3> */}
            <div className='timeline timeline-vertical'>
              {experiences.map((exp, index) => (
                <div key={index} className='timeline-item'>
                  {/* <div className='timeline-start'>{exp.period}</div> */}
                  <div className='timeline-middle'>
                    <div className='badge badge-primary badge-outline'>{index + 1}</div>
                  </div>
                  <div className='timeline-end timeline-box'>
                    <h4 className='font-bold text-lg'>{exp.title}</h4>
                    <p className='text-sm font-medium'>
                      {exp.company} <span className='text-primary'>({exp.period})</span>
                    </p>
                    <p className='mt-2'>{exp.description}</p>
                  </div>
                  {/*  {index < experiences.length - 1 && <hr />} */}
                </div>
              ))}
              <a href='/resume.pdf' download className='btn btn-primary'>
                <Download size={16} className='mr-2' /> Download CV
              </a>
            </div>
          </div>

          <div>
            {/* <h3 className='text-2xl font-semibold mb-6'>Skills</h3> */}
            <div className='space-y-6'>
              {skills.map((skillGroup, groupIndex) => (
                <div key={groupIndex} className='card bg-transparent shadow-md'>
                  <div className='card-body'>
                    <h4 className='card-title'>{skillGroup.category}</h4>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className='flex items-center gap-2 p-2 rounded-md hover:bg-base-300 transition-colors'
                        >
                          <CheckCircle size={16} className='text-primary' />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
