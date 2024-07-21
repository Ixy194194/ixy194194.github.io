import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);


	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		// クライアントサイドでのみ実行するコード
		setWindowWidth(window.innerWidth);

		const onScroll = () => {
			setIsScrolled(window.scrollY > 1000);
		};
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, [windowWidth]);
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-container-image">
					<img src="/images/footer/footer_Ixy.png" alt="フッターアイコン" />
				</div>
				<div className="footer-container-text">
					<ul>
						<li><Link href="/illustrations">Illustrations</Link></li>
						<li><Link href="/#Games">Games</Link></li>
						<li><Link href="/#About">About</Link></li>
						<li><Link href="/goods">Goods</Link></li>
						<li><a href="mailto:iixyinfo333@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
						</li>
					</ul>
					<small>&copy; 2024 Ixy</small>
				</div>
			</div>
			<div className={`top_button ${isScrolled ? 'active' : ''}`}
				 onClick={handleScrollToTop}
			>
				<Image src="/images/footer/top_button.png" alt="トップへ戻るボタン" width={50} height={50} />
			</div>
		</footer>
	)
}

export default Footer;
