"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import './blink.css';

function HomePage() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "DevOps Engineer ", "Python Developer."];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div id='home' className='h-screen w-full text-center'>
      <div className='max-w-3xl mx-auto w-full h-full px-8 py-16 pt-24 p-4 flex flex-col
    justify-around items-center'>
        <h1 className='font-bold text-white lg:text-5xl md:text-5xl sm:text-4xl text-3xl'>
          {`Hi! I'm Arjun `}
        </h1>
        <h1 className='font-bold text-white lg:text-5xl md:text-5xl sm:text-4xl text-3xl'>
          <span className="txt-rotate">
            <span className="wrap text-orange-500">
              {text}<span className="font-bold lg:text-5xl md:text-4xl sm:text-4xl text-3xl blinking-cursor">|</span>
            </span>
          </span>
        </h1>
        <p className='text-gray-200 lg:text-xl md:text-xl sm:text-xl text-base max-w-2xl tracking-wider mx-auto mt-3'>
          I am an enthusiastic and self-motivated individual with a passion for Cloud and DevOps. With a strong foundation in DevOps Tools and Technology, I possess the ability to translate complex business requirements into effective technical solutions. My proficiency in technologies like AWS services,CI/CD,Jenkins,Docker,Terraform,Ansible,Linux,Python,SDLC,GIT,Github and MySQL. I am a quick learner, an excellent team player, and have 2+ experience working on projects involving AWS and DevOps Tools.
        </p>
        <Link href="https://drive.google.com/file/d/1AmKKXgli1yHWxEsb59Nwfs9aIQCDSjVy/view?usp=sharing" target='_blank' download={true}>
          <div className='group flex items-center justify-center my-8 bg-blue-500
          text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>
            Resume
            <span className='-rotate-90 duration-100 ease-in group-hover:translate-x-5'>
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
