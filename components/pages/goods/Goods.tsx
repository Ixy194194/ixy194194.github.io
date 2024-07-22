import { FC, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Goods.module.scss';

const Main: FC = () => {
  useEffect(() => {
    document.body.classList.add('fixedLogo');

    return () => {
      document.body.classList.remove('fixedLogo');
    };
  }, []);

  return (
    <section className={styles.goods}>
      <div className={styles.goodContainer}>
        <h2>
          <span>Goods</span>
        </h2>
        <div className={styles.goodsItem}>
          <Image
            className={styles.goodImg}
            src="/images/goods/acryl.jpg"
            alt="アクリルスタンド"
            width={300}
            height={300}
          />
          <h3>いくしーちゃんアクリルスタンド</h3>
          <Image
            className={styles.star}
            src="/images/goods/star.png"
            alt="スター"
            width={50}
            height={50}
          />
        </div>
        <div className={styles.button}>
          <Link href="https://booth.pm/ja/items/5241065" target="_blank">
            <button className={`${styles.btnHover} ${styles.color1}`}>
              BOOTHで購入する
              <Image src="/images/goods/link.png" alt="リンク" width={20} height={20} />
            </button>
          </Link>
        </div>
        <div className={styles.goodsItem}>
          <Image
            className={styles.goodImg}
            src="/images/goods/stamp.png"
            alt="スタンプ"
            width={300}
            height={300}
          />
          <Image
            className={styles.guru}
            src="/images/goods/guru.png"
            alt="ぐる"
            width={50}
            height={50}
          />
          <h3>いくしーちゃんスタンプ</h3>
        </div>
        <div className={styles.button}>
          <Link href="https://store.line.me/stickershop/product/15125162/ja" target="_blank">
            <button className={`${styles.btnHover} ${styles.color1}`}>
              LINEストアで購入する
              <Image src="/images/goods/link.png" alt="リンク" width={20} height={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
