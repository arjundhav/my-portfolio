import React, { useState } from 'react';
import './style.css';
import gsap from 'gsap';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const tl = gsap.timeline();

    if (!isOpen) {
      tl.to('.logo', { scale: 0.8, opacity: 0, ease: 'power2.out' })
        .to('.menu-trigger-bar.top', { x: '+=80px', y: '-=80px', delay: 0.1, ease: 'power4.in', onComplete: () => {
          document.querySelector('.close-trigger').style.zIndex = '25';
        } }, 'preOpen')
        .to('.menu-trigger-bar.middle', { x: '+=80px', y: '-=80px', ease: 'power4.in', onComplete: () => {
          document.querySelector('.menu-trigger').style.visibility = 'hidden';
        } }, 'preOpen')
        .to('.menu-trigger-bar.bottom', { x: '+=80px', y: '-=80px', delay: 0.2, ease: 'power4.in' }, 'preOpen')
        .add('open', '-=0.4')
        .to('.menu-bg.top', { y: '13%', ease: 'power4.inOut' }, 'open')
        .to('.menu-bg.middle', { scaleY: 1, ease: 'power4.inOut' }, 'open')
        .to('.menu-bg.bottom', { y: '-114%', ease: 'power4.inOut' }, 'open')
        .fromTo('.menu', { y: 30, opacity: 0, visibility: 'hidden' },
          { y: 0, opacity: 1, visibility: 'visible', ease: 'power4.out' }, '-=0.2');
    } else {
      tl.to('.menu-bg.top', { backgroundColor: '#6295ca', ease: 'power4.inOut', onComplete: () => {
          document.querySelector('.logo').style.zIndex = '26';
          document.querySelector('.close-trigger').style.zIndex = '5';
          document.querySelector('.menu-trigger').style.visibility = 'visible';
        } }, 'close')
        .to('.menu-bg.middle', { backgroundColor: '#6295ca', ease: 'power4.inOut' }, 'close')
        .to('.menu-bg.bottom', { backgroundColor: '#6295ca', ease: 'power4.inOut' }, 'close')
        .to('.menu', { y: 20, opacity: 0, ease: 'power4.out', onComplete: () => {
          document.querySelector('.menu').style.visibility = 'hidden';
        } }, 'close')
        .to('.logo', { scale: 1, opacity: 1, ease: 'power4.inOut' }, 'close')
        .to('.menu-bg.top', { y: '-113%', ease: 'power4.inOut' }, 'close')
        .to('.menu-bg.middle', { scaleY: 0, ease: 'power4.inOut' }, 'close')
        .to('.menu-bg.bottom', { y: '23%', ease: 'power4.inOut', onComplete: () => {
          document.querySelector('.menu-bg.top').style.backgroundColor = '#ffffff';
          document.querySelector('.menu-bg.middle').style.backgroundColor = '#ffffff';
          document.querySelector('.menu-bg.bottom').style.backgroundColor = '#ffffff';
        } }, 'close')
        .to('.close-trigger-bar.left', { x: '+=100px', y: '-=100px', ease: 'power4.in' }, 'close')
        .to('.close-trigger-bar.right', { x: '-=100px', y: '-=100px', delay: 0.1, ease: 'power4.in' }, 'close')
        .to('.menu-trigger-bar.top', { x: '-=80px', y: '+=80px', delay: 0.2, ease: 'power4.out' }, 'close')
        .to('.menu-trigger-bar.middle', { x: '-=80px', y: '+=80px', ease: 'power4.out' }, 'close')
        .to('.menu-trigger-bar.bottom', { x: '-=80px', y: '+=80px', delay: 0.1, ease: 'power4.out' }, 'close');
    }
  };

  return (
    <div className="container">
      <span className="menu-trigger" onClick={toggleMenu}>
        <i className="menu-trigger-bar top"></i>
        <i className="menu-trigger-bar middle"></i>
        <i className="menu-trigger-bar bottom"></i>
      </span>
      <span className="close-trigger" onClick={toggleMenu}>
        <i className="close-trigger-bar left"></i>
        <i className="close-trigger-bar right"></i>
      </span>
      <span className="logo"></span>
      <div className="inner-container">
        <i className="menu-bg top"></i>
        <i className="menu-bg middle"></i>
        <i className="menu-bg bottom"></i>
        <div className="menu-container">
          <ul className="menu">
            <li><a href="#">Login</a></li>
            <li><a href="#">Create account</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
