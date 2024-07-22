import { FC } from 'react';
import Top from './top/Top';
import Illustrations from './illustrations/Illustrations';
import Games from './games/Games';
import About from './about/About';
import Contact from './contact/Contact';

const Index: FC = () => {
  return (
    <>
      <Top />
      <Illustrations />
      <Games />
      <About />
      <Contact />
    </>
  );
};

export default Index;
