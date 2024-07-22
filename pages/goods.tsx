import { useEffect, useState } from 'react';

export default function Goods() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// windowが読み込まれたらtrueにする
		window.addEventListener('load', () => setIsLoaded(true));
		return () => window.removeEventListener('load', () => setIsLoaded(true));
	}, []);

	return (
		<>
			<Goods />
		</>
	);
}
