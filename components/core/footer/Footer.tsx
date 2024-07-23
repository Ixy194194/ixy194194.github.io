import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

const FooterComponent: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const closeBanner = () => {
    document.body.classList.remove('index-page');
  };

  useEffect(() => {
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
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerImage}>
          <img src="/images/footer/footer_Ixy.png" alt="フッターアイコン" />
        </div>
        <div className={styles.footerContainerText}>
          <ul>
            <li>
              <Link href="/illustrations">Illustrations</Link>
            </li>
            <li>
              <Link href="/#games">Games</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/goods">Goods</Link>
            </li>
            <li>
              <a href="mailto:iixyinfo333@gmail.com" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </li>
          </ul>
          <small>&copy; {new Date().getFullYear()} Ixy</small>
        </div>
      </div>
      <div className={`topButton ${isScrolled ? 'active' : ''}`} onClick={handleScrollToTop}>
        <Image
          src="/images/footer/top_button.png"
          alt="トップへ戻るボタン"
          width={50}
          height={50}
        />
      </div>
      <div className={`fixedBanner ${isScrolled ? 'active' : ''}`}>
        <p className="close">
          <img src="/images/footer/close.png" alt="閉じる" />
          <span onClick={closeBanner}>とじる</span>
        </p>
        <Link href="/goods">
          <img className="closeImg" src="/images/footer/goods.png" alt="グッズアイコン" />
        </Link>
      </div>
    </footer>
  );
};

export default FooterComponent;
