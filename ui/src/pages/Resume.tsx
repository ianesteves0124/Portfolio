'use client';

import { useEffect, useRef } from 'react';
import { Download, CheckCircle } from 'lucide-react';

const skills = [
  { category: 'Frontend', items: ['React', 'Vite', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Firebase'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Jira'] }
];

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2021 - Present',
    description:
      'Led the development of responsive web applications using React and Vite. Implemented state management with Redux and optimized performance.'
  },
  {
    title: 'Web Developer',
    company: 'Digital Agency',
    period: '2018 - 2021',
    description:
      'Developed and maintained client websites. Collaborated with designers to implement responsive designs and interactive features.'
  },
  {
    title: 'Junior Developer',
    company: 'Startup Inc.',
    period: '2016 - 2018',
    description:
      'Assisted in the development of web applications. Gained experience in frontend technologies and agile development methodologies.'
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
    <section id='resume' className='py-20 bg-base-200 section-animate' ref={sectionRef}>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-16 gap-4'>
          <h2 className='text-4xl font-bold'>Resume & Skills</h2>
          <a href='/resume.pdf' download className='btn btn-primary'>
            <Download size={16} className='mr-2' /> Download CV
          </a>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-2xl font-semibold mb-6'>Work Experience</h3>
            <div className='timeline timeline-vertical'>
              {experiences.map((exp, index) => (
                <div key={index} className='timeline-item'>
                  <div className='timeline-start'>{exp.period}</div>
                  <div className='timeline-middle'>
                    <div className='badge badge-primary badge-outline'>{index + 1}</div>
                  </div>
                  <div className='timeline-end timeline-box'>
                    <h4 className='font-bold'>{exp.title}</h4>
                    <p className='text-sm font-medium'>{exp.company}</p>
                    <p className='mt-2'>{exp.description}</p>
                  </div>
                  {index < experiences.length - 1 && <hr />}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-6'>Skills</h3>
            <div className='space-y-6'>
              {skills.map((skillGroup, groupIndex) => (
                <div key={groupIndex} className='card bg-base-100 shadow-md'>
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
