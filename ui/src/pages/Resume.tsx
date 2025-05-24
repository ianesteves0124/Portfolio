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
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize'] },
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
      'Developed a responsive web application using Vite React, implemented PERN Stack along with Redux for state management, Axios for HTTP requests, and TailwindCSS and Ant Design for the user interface.'
  },
  {
    title: 'Programmer I',
    company: 'United Auctioneers, Inc.',
    period: 'Jan 2024 - Present',
    description: 'Developing and maintaining in-house web application, following Agile methodology.'
  }
];

export default function Resume() {
  const sectionRef = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Animate section when visible
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

  // Auto-scroll carousel
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let isUserScrolling = false;

    const handleUserScroll = () => {
      isUserScrolling = true;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isUserScrolling = false;
      }, 3000); // pause auto-scroll for 3 seconds after user scrolls
    };

    const interval = setInterval(() => {
      if (carouselRef.current && !isUserScrolling) {
        const items = carouselRef.current.querySelectorAll('.carousel-item');
        const total = items.length;
        const width = carouselRef.current.offsetWidth;
        const currentScroll = carouselRef.current.scrollLeft;
        const currentIndex = Math.round(currentScroll / width);
        const nextIndex = (currentIndex + 1) % total;

        carouselRef.current.scrollTo({
          left: width * nextIndex,
          behavior: 'smooth'
        });
      }
    }, 4000);

    const carouselElement = carouselRef.current;
    carouselElement?.addEventListener('scroll', handleUserScroll);

    return () => {
      clearInterval(interval);
      carouselElement?.removeEventListener('scroll', handleUserScroll);
    };
  }, []);

  return (
    <section className='py-20 bg-transparent section-animate' ref={sectionRef}>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center mt-10 mb-16 gap-4'>
          <h2 className='text-4xl font-bold'>Resume & Skills</h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Work Experience */}
          <div>
            <h3 className='text-2xl text-center font-semibold mb-6'>Work Experience</h3>
            <div className='timeline timeline-vertical'>
              {experiences.map((exp, index) => (
                <div key={index} className='timeline-item'>
                  <div className='timeline-middle'>
                    <div className='badge badge-primary badge-outline'>{index + 1}</div>
                  </div>
                  <div className='timeline-end timeline-box shadow-2xl'>
                    <h4 className='font-bold text-lg'>{exp.title}</h4>
                    <p className='text-sm font-medium'>
                      {exp.company} <span className='text-primary'>({exp.period})</span>
                    </p>
                    <p className='mt-2'>{exp.description}</p>
                  </div>
                </div>
              ))}
              <a href='/resume.pdf' download className='btn btn-primary rounded-xl mt-4'>
                <Download size={16} className='mr-2' /> Download Resume
              </a>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className='text-2xl text-center font-semibold mb-6'>Skills</h3>
            <div
              ref={carouselRef}
              className='carousel w-full mt-20 min-h-[200px] rounded-lg overflow-x-auto scroll-smooth snap-x snap-mandatory'
            >
              {skills.map((skillGroup, index) => (
                <div key={index} className='carousel-item w-full justify-center snap-start'>
                  <div className='card bg-base-100 w-full'>
                    <div className='card-body'>
                      <h4 className='card-title'>
                        <span className='p-1 rounded-lg text-primary'>{skillGroup.category}</span>
                      </h4>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
