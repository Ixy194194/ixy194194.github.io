import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

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
              <Link href="/#Games">Games</Link>
            </li>
            <li>
              <Link href="/#About">About</Link>
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
      <div
        className={`${styles.topButton} ${isScrolled ? styles.active : ''}`}
        onClick={handleScrollToTop}
      >
        <Image
          src="/images/footer/top_button.png"
          alt="トップへ戻るボタン"
          width={50}
          height={50}
        />
      </div>
    </footer>
  );
};

export default Footer;
