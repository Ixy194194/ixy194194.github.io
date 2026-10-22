import React, { useState, useEffect, useRef, FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';
import styles from './Header.module.scss';

const HeaderComponent: FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューの開閉状態をトグルする
  const handleHamburgerClick = () => setIsMenuOpen(!isMenuOpen);

  // リンクをクリックしたときにメニューを閉じる
  const handleNavLinkClick = () => setIsMenuOpen(false);

  // スクロール位置に応じてロゴを表示
  const handleScroll = () => {
    const logo = document.querySelector('.logo');
    if (window.scrollY > 500) {
      logo?.classList.add('active');
    } else {
      logo?.classList.remove('active');
    }
  };

  useEffect(() => {
    // スクロールイベントのリスナーを追加
    window.addEventListener('scroll', handleScroll);

    // ページ移動時にイベントリスナーを削除
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // テキストを一文字ずつ分割し、アニメーションのために遅延を設定
  const splitText = (text: string) =>
    text.split('').map((char, index) => (
      <span key={index} style={{ transitionDelay: `${index * 0.04}s` }}>
        {char}
      </span>
    ));

  return (
    <header className={styles.header}>
      <div className="headerLogo">
        <Link href="/">
          <img className="logo" src="/images/TOP/logo.png" alt="いくしーロゴ" />
        </Link>
      </div>
      <div className={styles.headerContentWrapper}>
        <div className={styles.menuContainer}>
          <p className={styles.headerMenu} onClick={handleHamburgerClick}>
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </p>
          <div id={styles.hamburger} onClick={handleHamburgerClick}>
            <div className={`${styles.icon} ${isMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <CSSTransition nodeRef={navRef} in={isMenuOpen} timeout={500} classNames="nav-transition">
          <nav ref={navRef} className={`nav ${isMenuOpen ? styles.open : ''}`}>
            <ul className={styles.navList}>
              {[
                { name: 'Illustrations', nameKana: 'イラスト', link: '/illustrations' },
                { name: 'Games', nameKana: 'ゲーム', link: '/#games' },
                { name: 'About', nameKana: 'いくしーについて', link: '/#about' },
                { name: 'Goods', nameKana: 'グッズ', link: '/goods' },
                { name: 'Contact', nameKana: 'お問い合わせ', link: '/contact' },
              ].map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <Link href={`${item.link}`} onClick={handleNavLinkClick}>
                    {splitText(item.name)}
                  </Link>
                  <p>{item.nameKana}</p>
                </li>
              ))}
            </ul>
            <ul className={styles.navSNS}>
              <li>Follow Me!</li>
              {[
                { href: 'https://x.com/Ixy', src: '/images/nav/X.jpg', alt: 'ツイッター' },
                {
                  href: 'https://www.instagram.com/ixy__194/?hl=ja',
                  src: '/images/nav/instagram.jpg',
                  alt: 'インスタグラム',
                },
                {
                  href: 'https://www.youtube.com/@ixy',
                  src: '/images/nav/Youtube.jpg',
                  alt: 'ユーチューブ',
                },
                {
                  href: 'https://ixy.fanbox.cc/',
                  src: '/images/nav/FANBOX.jpg',
                  alt: 'ファンボックス',
                },
                {
                  href: 'https://ci-en.dlsite.com/creator/5868',
                  src: '/images/nav/Ci-en.jpg',
                  alt: 'シエン',
                },
              ].map((sns, index) => (
                <li key={index} className={styles.snsItem}>
                  <a target="_blank" href={sns.href}>
                    <img src={sns.src} alt={sns.alt} />
                  </a>
                </li>
              ))}
            </ul>
            <img className={styles.navImg} src="/images/nav/nav_image.png" alt="いくしー" />
          </nav>
        </CSSTransition>
      </div>
    </header>
  );
};

export default HeaderComponent;