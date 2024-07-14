import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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

		// Stickyfill処理 (仮に StickyfillをReactで使用すると仮定して)
		if (windowWidth >= 768) {
			// Stickyfill.add(elements); // 仮に使用しているとする
		} else {
			// Stickyfill.remove(elements); // 仮に使用しているとする
		}

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
						<li><a href="illustrations/index.html">Illustrations</a></li>
						<li><a href="#Games">Games</a></li>
						<li><a href="#About">About</a></li>
						<li><a href="Goods/index.html">Goods</a></li>
						<li><a href="mailto:iixyinfo333@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
						</li>
					</ul>
					<small>All Rights Reserved 2024&copy;Ixy</small>
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
