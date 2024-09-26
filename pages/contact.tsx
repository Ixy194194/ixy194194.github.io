import SEOComponent from '../components/core/SEO';
import ContactComponent from '../components/pages/contact/Contact';

export default function Contact() {
  return (
    <>
      <SEOComponent
        title="Contact - Ixy Official Website"
        description="イラストレーターIxy(いくしー)のウェブサイトです。"
        ogImage="https://ixyis.com/ogp_image.png"
        url="https://ixyis.com/"
      />
      <ContactComponent />
    </>
  );
}
