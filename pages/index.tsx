import Main from '../components/pages/index/Index';
import Splash from '../components/core/splash/Splash';
import SEO from '../components/core/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Ixy Official Website"
        description="イラストレーターIxy(いくしー)のウェブサイトです。"
        ogImage="https://ixy194194.github.io/site_thumbnail.jpg"
        url="https://ixyis.com/"
      />
      <Splash />
      <Main />
    </>
  );
}
