'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for managing daily tasks and projects',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive maps',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['JavaScript', 'Weather API', 'Chart.js'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'frontend'
  },
  {
    id: 4,
    title: 'Blog API',
    description: 'RESTful API for a blog platform with authentication',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'backend'
  }
];

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Full Stack' }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === filter));
    }
  }, [filter]);

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
    <section id='projects' className='py-20 bg-base-100 section-animate' ref={sectionRef}>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-8'>My Projects</h2>

        <div className='flex justify-center mb-8'>
          <div className='join'>
            {categories.map((category) => (
              <button
                key={category.value}
                className={`btn join-item ${filter === category.value ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setFilter(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className='card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <figure className='relative overflow-hidden group'>
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute top-2 right-2'>
                  <div className='badge badge-primary'>{project.category}</div>
                </div>
              </figure>
              <div className='card-body'>
                <h3 className='card-title'>{project.title}</h3>
                <p>{project.description}</p>
                <div className='flex flex-wrap gap-2 my-2'>
                  {project.tags.map((tag, index) => (
                    <span key={index} className='badge badge-outline'>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='card-actions justify-end mt-4'>
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-outline btn-sm'
                  >
                    <Github size={16} className='mr-1' /> Code
                  </a>
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary btn-sm'
                  >
                    <ExternalLink size={16} className='mr-1' /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
