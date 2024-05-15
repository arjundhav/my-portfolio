'use client';
import React, { useEffect, useRef, useState } from 'react';

const StarsComponent = () => {
  const starsRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    // If the window object is not defined, we can't render the stars.
    if (typeof window === 'undefined') return;
  
    // Fetch the canvas and its context for rendering the stars.
    const stars = starsRef.current;
    const starsCtx = stars.getContext('2d');
  
    // Variables for screen properties and star elements.
    let screen, starsElements;
  
    // Determine the number of stars based on screen size.
    let starsNumber = window.innerWidth <= 768 ? 300 : 3000;
  
    // Set parameters for stars, like speed and extinction factor.
    let starsParams = { speed: 30, number: starsNumber, extinction: 4 };
  
    // Class representing a single star in the sky.
    class Star {
      constructor() {
        // Randomize initial position and depth.
        this.x = Math.random() * stars.width;
        this.y = Math.random() * stars.height;
        this.z = Math.random() * stars.width;
      }
  
      // Move the star according to its speed.
      move() {
        this.z -= starsParams.speed;
        if (this.z <= 0) {
          this.z = stars.width;
        }
      }
  
      // Render the star on the canvas.
      show() {
        let x = (this.x - screen.c[0]) * (stars.width / this.z) + screen.c[0];
        let y = (this.y - screen.c[1]) * (stars.width / this.z) + screen.c[1];
        let rad = stars.width / this.z;
        let opacity = rad > starsParams.extinction ? 1.5 * (2 - rad / starsParams.extinction) : 1;
  
        const starColor = 'red';
        starsCtx.beginPath();
        starsCtx.fillStyle = starColor;
        starsCtx.arc(x, y, rad, 0, Math.PI * 2);
        starsCtx.fill();
      }
    }
  
    // Initialize the stars setup.
    function setupStars() {
      screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [window.innerWidth * 0.5, window.innerHeight * 0.5], // Center of the screen.
      };
      stars.width = screen.w;
      stars.height = screen.h;
      // Create an array of star objects.
      starsElements = Array.from({ length: starsParams.number }, () => new Star());
    }
  
    // Update the position of stars and render them.
    function updateStars() {
      // Clear the canvas for the next frame.
      starsCtx.fillStyle = 'black';
      starsCtx.fillRect(0, 0, stars.width, stars.height);
  
      // Calculate time difference between frames for smooth animation.
      const now = performance.now();
      const deltaTime = now - updateStars.lastFrameTime;
      updateStars.lastFrameTime = now;
  
      // Adjust the speed of stars based on the frame rate.
      const speed = starsParams.speed * (deltaTime / (1000 / 60));
  
      // Render each star and update its position.
      starsElements.forEach(s => {
        s.show();
        s.move(speed);
      });
  
      // Request the next frame for continuous animation.
      requestAnimationFrame(updateStars);
    }
    updateStars.lastFrameTime = performance.now();
  
    // Set up stars and start animation loop.
    setupStars();
    updateStars();
  
    // Scroll event listener to adjust star speed.
    const onScroll = () => {
      const scrollSpeed = (window.scrollY / (window.innerHeight * 0.5)) * 10; // Adjust 10 to control the sensitivity
      starsParams.speed = 30 - scrollSpeed; // Adjust speed based on scroll
    };
    window.addEventListener('scroll', onScroll);
  
    // Clean up event listener when component unmounts.
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  

  
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const stars = starsRef.current;
  //     const starsCtx = stars.getContext('2d');
  //     let screen, starsElements;
  //     let starsNumber = 3000; // Default number of stars for laptop screen

  //     if (window.innerWidth <= 768) {
  //       // Adjust the number of stars for mobile screen
  //       starsNumber = 300;
  //     }

  //     const starsParams = { speed: 30, number: starsNumber, extinction: 4 };

  //     function Star() {
  //       this.x = Math.random() * stars.width;
  //       this.y = Math.random() * stars.height;
  //       this.z = Math.random() * stars.width;

  //       this.move = function () {
  //         this.z -= starsParams.speed;
  //         if (this.z <= 0) {
  //           this.z = stars.width;
  //         }
  //       };

  //       this.show = function () {
  //         let x, y, rad, opacity;
  //         x = (this.x - screen.c[0]) * (stars.width / this.z);
  //         x = x + screen.c[0];
  //         y = (this.y - screen.c[1]) * (stars.width / this.z);
  //         y = y + screen.c[1];
  //         rad = stars.width / this.z;
  //         opacity =
  //           rad > starsParams.extinction ? 1.5 * (2 - rad / starsParams.extinction) : 1;

  //         const starColor = 'white'; // Set the star color to red

  //         starsCtx.beginPath();
  //         starsCtx.fillStyle = starColor;
  //         starsCtx.arc(x, y, rad, 0, Math.PI * 2);
  //         starsCtx.fill();
  //       };
  //     }

  //     function setupStars() {
  //       screen = {
  //         w: window.innerWidth,
  //         h: window.innerHeight,
  //         c: [window.innerWidth * 0.5, window.innerHeight * 0.5],
  //       };
  //       stars.width = screen.w;
  //       stars.height = screen.h;
  //       starsElements = [];
  //       for (let i = 0; i < starsParams.number; i++) {
  //         starsElements[i] = new Star();
  //       }
  //     }

  //     function updateStars() {
  //       starsCtx.fillStyle = 'black';
  //       starsCtx.fillRect(0, 0, stars.width, stars.height);

  //       // Calculate the time difference since the last frame
  //       const now = performance.now();
  //       const deltaTime = now - updateStars.lastFrameTime;
  //       updateStars.lastFrameTime = now;

  //       // Adjust the speed of the stars based on the frame rate
  //       const speed = starsParams.speed * (deltaTime / (1000 / 60));

  //       starsElements.forEach(function (s) {
  //         s.show();
  //         s.move(speed);
  //       });

  //       requestAnimationFrame(updateStars);
  //     }
  //     updateStars.lastFrameTime = performance.now();

  //     setupStars();
  //     updateStars();

  //     window.addEventListener('scroll', onScroll);

  //     return () => {
  //       window.removeEventListener('scroll', onScroll);
  //     };
  //   }
  // }, []);

  return (
    <div className="stars-container">
      {typeof window !== 'undefined' && (
        <canvas key='1' id="stars" ref={starsRef}></canvas>
      )}
      <style jsx>{`
        .stars-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          background-color: black;
        }

        #stars {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default StarsComponent;
