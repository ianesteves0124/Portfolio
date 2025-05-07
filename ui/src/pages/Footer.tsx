'use client';

export default function Footer() {
  return (
    <footer className='footer footer-center p-5 bg-base-300 text-base-content'>
      <div className='animate-fade-in'>
        <p className='font-bold'>Ian Miles Esteves - Junior Fullstack Developer</p>
      </div>
      <div>
        <p className='opacity-75 hover:opacity-100 transition-opacity'>
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
}
