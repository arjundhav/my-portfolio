import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import HomePage from '@/components/HomePage';
import Projects from '@/components/Projects';
import StarsComponent from '@/components/StarsComponent';
import RootLayout from './layout';

export default function Home() {
  return (
    <RootLayout>
      <StarsComponent />
      <HomePage />
      <Projects />
      <Experience />
      <Contact />
    </RootLayout>
  );
}
