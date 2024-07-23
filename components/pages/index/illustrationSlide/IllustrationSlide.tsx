import { FC } from 'react';
import styles from './IllustrationSlide.module.scss';
import Link from 'next/link';

const IllustrationSlideComponent: FC = () => {
  const images = [
    { src: '/images/Illustrations/image_1.webp', alt: 'イラスト' },
    { src: '/images/Illustrations/image_2.webp', alt: 'イラスト' },
    { src: '/images/Illustrations/image_3.webp', alt: 'イラスト' },
    { src: '/images/Illustrations/image_4.webp', alt: 'イラスト' },
    { src: '/images/Illustrations/image_5.webp', alt: 'イラスト' },
    { src: '/images/Illustrations/image_6.webp', alt: 'イラスト' },
    { src: '/images/Illustrations/image_7.webp', alt: 'イラスト' },
    { src: '/images/Illustrations/image_8.webp', alt: 'イラスト' },
    { src: '/images/Illustrations/image_9.webp', alt: 'イラスト' },
    { src: '/images/Illustrations/image_10.webp', alt: 'イラスト' },
  ];

  const half = Math.ceil(images.length / 2);
  const leftColumn = images.slice(0, half);
  const rightColumn = images.slice(half);

  return (
    <section className={`${styles.illustrations} anchor`} id="illustrations">
      <h2>
        <span>Illustrations</span>
      </h2>
      <div className={styles.illustrationsImages}>
        <div className={styles.imageScrollL}>
          <ul className={styles.imageContainerLeft}>
            {leftColumn.map((image, index) => (
              <li key={index}>
                <img src={image.src} loading="lazy" className="lazyload" alt={image.alt} />
              </li>
            ))}
          </ul>
          <ul className={styles.imageContainerLeft}>
            {leftColumn.map((image, index) => (
              <li key={index}>
                <img src={image.src} loading="lazy" className="lazyload" alt={image.alt} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imageScrollR}>
          <ul className={styles.imageContainerRight}>
            {rightColumn.map((image, index) => (
              <li key={index}>
                <img src={image.src} loading="lazy" className="lazyload" alt={image.alt} />
              </li>
            ))}
          </ul>
          <ul className={styles.imageContainerRight}>
            {rightColumn.map((image, index) => (
              <li key={index}>
                <img src={image.src} loading="lazy" className="lazyload" alt={image.alt} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.button}>
        <Link href="/illustrations">
          <button className={`${styles.btnHover} ${styles.color1}`}>More</button>
        </Link>
      </div>
    </section>
  );
};

export default IllustrationSlideComponent;
