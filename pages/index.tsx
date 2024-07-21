import { useEffect, useState } from 'react';
import Main from '../components/index/Index';
import Splash from '../components/Splash';
import SEO from '../components/SEO';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => setIsLoaded(true));
    return () => window.removeEventListener('load', () => setIsLoaded(true));
  }, []);

  return (
    <>
      <SEO
        title="Ixy Official Website"
        description="イラストレーターIxy(いくしー)のウェブサイトです。"
        ogImage="https://ixy194194.github.io/site_thumbnail.jpg"
        url="https://ixyis.com/"
      />
      <Splash isLoaded={true} />
      <Main />
    </>
  );
}