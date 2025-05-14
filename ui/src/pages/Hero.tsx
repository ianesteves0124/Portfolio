'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar_cv.png';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // CLEAN UP
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row text-center lg:text-left gap-8 lg:gap-16'>
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className='avatar'>
            <div className='w-48 h-48 md:w-64 md:h-64 rounded-full ring ring-primary ring-offset-base-200 ring-offset-4 overflow-hidden animate-pulse-slow'>
              <img src={avatar} alt='Profile Picture' />
            </div>
          </div>
        </div>
        <div className='max-w-md'>
          <h1 className={`text-5xl font-bold ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>Ian Miles D. Esteves</h1>
          <p className={`py-2 text-xl ${isVisible ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
            Junior Fullstack Developer
          </p>
          <p className={`py-6 ${isVisible ? 'animate-slide-up animate-delay-200' : 'opacity-0'}`}>
            A Computer Engineer with expertise in creating responsive and user-friendly web applications. Specialized in
            modern fullstack technologies.
          </p>
          <div
            className={`flex justify-center lg:justify-start gap-4 mb-6 ${
              isVisible ? 'animate-slide-up animate-delay-300' : 'opacity-0'
            }`}
          >
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
            <Link to='mailto:ianmiles.esteves@gmail.com' className='btn btn-circle btn-outline'>
              <Mail size={20} />
            </Link>
          </div>
          <Link
            to='/contact'
            className={`btn btn-primary ${isVisible ? 'animate-slide-up animate-delay-400' : 'opacity-0'}`}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
