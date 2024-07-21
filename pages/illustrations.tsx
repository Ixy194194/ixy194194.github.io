import { useEffect, useState } from 'react';
import Main from '../components/illustrations/Illustrations';
import Splash from '../components/Splash';

export default function Illustrations() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// windowが読み込まれたらtrueにする
		window.addEventListener('load', () => setIsLoaded(true));
		return () => window.removeEventListener('load', () => setIsLoaded(true));
	}, []);

	return (
		<>
			<Main />
		</>
	);
}
