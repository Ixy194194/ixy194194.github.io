import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import HeaderComponent from '../components/core/header/Header';
import FooterComponent from '../components/core/footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}
