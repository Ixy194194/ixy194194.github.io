import IndexComponent from '../components/pages/index/Index';
import SplashComponent from '../components/core/splash/Splash';
import SEOComponent from '../components/core/SEO';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('index-page');
    return () => {
      document.body.classList.remove('index-page');
    };
  }, []);

  return (
    <>
      <SEOComponent
        title="Ixy Official Website"
        description="イラストレーターIxy(いくしー)のウェブサイトです。"
        ogImage="https://ixyis.com/ogp_image.png"
        url="https://ixyis.com/"
      />
      <SplashComponent />
      <IndexComponent />
    </>
  );
}
