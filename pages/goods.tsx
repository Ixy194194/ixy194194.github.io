import SEOComponent from '../components/core/SEO';
import GoodsComponent from '../components/pages/goods/Goods';

export default function Goods() {
  return (
    <>
      <SEOComponent
        title="Goods - Ixy Official Website"
        description="イラストレーターIxy(いくしー)のウェブサイトです。"
        ogImage="https://ixyis.com/ogp_image.png"
        url="https://ixyis.com/"
      />
      <GoodsComponent />
    </>
  );
}
