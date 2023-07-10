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
    if (typeof window !== 'undefined') {
      const stars = starsRef.current;
      const starsCtx = stars.getContext('2d');
      let screen, starsElements;
      let starsNumber = 2000; // Default number of stars for laptop screen

      if (window.innerWidth <= 768) {
        // Adjust the number of stars for mobile screen
        starsNumber = 300;
      }

      const starsParams = { speed: 3, number: starsNumber, extinction: 4 };

      function Star() {
        this.x = Math.random() * stars.width;
        this.y = Math.random() * stars.height;
        this.z = Math.random() * stars.width;

        this.move = function () {
          this.z -= starsParams.speed;
          if (this.z <= 0) {
            this.z = stars.width;
          }
        };

        this.show = function () {
          let x, y, rad, opacity;
          x = (this.x - screen.c[0]) * (stars.width / this.z);
          x = x + screen.c[0];
          y = (this.y - screen.c[1]) * (stars.width / this.z);
          y = y + screen.c[1];
          rad = stars.width / this.z;
          opacity =
            rad > starsParams.extinction ? 1.5 * (2 - rad / starsParams.extinction) : 1;

          const starColor = 'red'; // Set the star color to red

          starsCtx.beginPath();
          starsCtx.fillStyle = starColor;
          starsCtx.arc(x, y, rad, 0, Math.PI * 2);
          starsCtx.fill();
        };
      }

      function setupStars() {
        screen = {
          w: window.innerWidth,
          h: window.innerHeight,
          c: [window.innerWidth * 0.5, window.innerHeight * 0.5],
        };
        stars.width = screen.w;
        stars.height = screen.h;
        starsElements = [];
        for (let i = 0; i < starsParams.number; i++) {
          starsElements[i] = new Star();
        }
      }

      function updateStars() {
        starsCtx.fillStyle = 'black';
        starsCtx.fillRect(0, 0, stars.width, stars.height);

        // Calculate the time difference since the last frame
        const now = performance.now();
        const deltaTime = now - updateStars.lastFrameTime;
        updateStars.lastFrameTime = now;

        // Adjust the speed of the stars based on the frame rate
        const speed = starsParams.speed * (deltaTime / (1000 / 60));

        starsElements.forEach(function (s) {
          s.show();
          s.move(speed);
        });

        requestAnimationFrame(updateStars);
      }
      updateStars.lastFrameTime = performance.now();

      setupStars();
      updateStars();

      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, []);

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
