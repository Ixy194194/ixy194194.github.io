import React, { useState, useEffect } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleHamburgerClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleNavLinkClick = () => {
		setIsMenuOpen(false);
	};


	return (
		<header className="header">
			<div className="header-logo">
				<a href="#"><img className="logo" src="/images/TOP/logo.png" alt="いくしーロゴ" /></a>
			</div>
			<div className="header-content-wrapper">
				<p className="header__menu">{isMenuOpen ? 'CLOSE' : 'MENU'}</p>
				<div onClick={handleHamburgerClick} id="hamburger" className="hamburger">
					<div className={`icon ${isMenuOpen ? 'open' : ''}`}>
						<span></span>
						<span></span>
					</div>
				</div>
				<nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
					<ul className="nav__list">
						<li className="nav__item"><a href="Illustrations/index.html" onClick={handleNavLinkClick}><span>I</span><span>l</span><span>l</span><span>u</span><span>s</span><span>t</span><span>r</span>a<span>t</span>i<span>o</span>n<span>s</span></a>
							<p>イラスト</p>
						</li>
						<li className="nav__item"><a href="#Games" onClick={handleNavLinkClick}><span>G</span><span>a</span><span>m</span><span>e</span><span>s</span></a>
							<p>ゲーム</p>
						</li>
						<li className="nav__item"><a href="#About" onClick={handleNavLinkClick}><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span></a>
							<p>いくしーについて</p>
						</li>
						<li className="nav__item"><a href="Goods/index.html" onClick={handleNavLinkClick}><span>G</span><span>o</span><span>o</span><span>d</span><span>s</span></a>
							<p>グッズ</p>
						</li>
						<li className="nav__item"><a href="mailto:iixyinfo333@gmail.com" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}><span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span></a>
							<p>お問い合わせ</p>
						</li>
					</ul>
					<ul className="nav__SNS">
						<li>Follow Me!</li>
						<li className="sns_item"><a target="_blank" href="https://x.com/Ixy"><img src="/images/nav/X.jpg" alt="ツイッター" /></a></li>
						<li className="sns_item"><a target="_blank" href="https://www.instagram.com/ixy__194/?hl=ja"><img src="/images/nav/instagram.jpg" alt="インスタグラム" /></a></li>
						<li className="sns_item"><a target="_blank" href="https://www.youtube.com/@ixy"><img src="/images/nav/Youtube.jpg" alt="ユーチューブ" /></a></li>
						<li className="sns_item"><a target="_blank" href="https://ixy.fanbox.cc/"><img src="/images/nav/FANBOX.jpg" alt="ファンボックス" /></a></li>
						<li className="sns_item"><a target="_blank" href="https://ci-en.dlsite.com/creator/5868"><img src="/images/nav/Ci-en.jpg" alt="シーエン" /></a></li>
					</ul>
					<img className="nav_img" src="/images/nav/nav_image.png" alt="いくしー" />
				</nav>
			</div>
		</header>
	);
};

export default Header;
