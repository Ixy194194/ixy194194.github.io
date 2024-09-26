import SEOComponent from '../components/core/SEO';
import IllustrationsComponent from '../components/pages/illustrations/Illustrations';

export default function Illustrations() {
  return (
    <>
      <SEOComponent
        title="Illustrations - Ixy Official Website"
        description="イラストレーターIxy(いくしー)のウェブサイトです。"
        ogImage="https://ixyis.com/ogp_image.png"
        url="https://ixyis.com/"
      />
      <IllustrationsComponent />
    </>
  );
}
