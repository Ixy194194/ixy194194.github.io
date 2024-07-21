import { FC, useEffect, useState } from 'react';

interface SplashProps {
    isLoaded: boolean;
}

const Splash: React.FC<SplashProps> = ({ isLoaded }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => (prev < 100 ? prev + 1 : prev));
		}, 10);

		const handleLoad = () => {
			setTimeout(() => {
				document.getElementById('splash')?.classList.add('fade-out');
			}, 600);
		};

		const handleVisit = () => {
			if (sessionStorage.getItem('visit')) {
				document.getElementById('splash')?.classList.add('hidden');
			} else {
				setTimeout(() => {
					document.getElementById('splash')?.classList.add('fade-out');
					sessionStorage.setItem('visit', 'true');
				}, 8000);
			}
		};

		window.addEventListener('load', handleLoad);
		handleVisit();

		return () => {
			window.removeEventListener('load', handleLoad);
			clearInterval(interval);
		};
	}, []);

	return (
		<div id="splash" className="splash">
			<div
				id="splash_text"
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					padding: '10px',
					margin: '0',
					transform: 'translate(-50%,-50%)',
					fontSize: '3rem',
					fontFamily: 'Orbitron',
					color: '#fff',
				}}
			>
				{progress} %
			</div>
		</div>
	);
};

export default Splash;