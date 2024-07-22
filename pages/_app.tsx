import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from '../components/core/header/Header';
import Footer from '../components/core/footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
	return(
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />

		</>
	);
}
