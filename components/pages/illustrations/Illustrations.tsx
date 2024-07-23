import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Illustrations.module.scss';

const illustrations = [
  { src: '/images/Illustrations/anime/1_image_1.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_2.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_3.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_4.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_5.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_6.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_7.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_8.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_9.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_10.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_11.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_12.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_13.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_14.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_15.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_16.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_17.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_18.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_19.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_20.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_21.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_22.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_23.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_24.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_25.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_26.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_27.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_28.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_29.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_30.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_31.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_32.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_34.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_35.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_36.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_37.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_38.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_39.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_40.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_41.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_42.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_44.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_45.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_46.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_47.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_48.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_49.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_50.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_51.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_52.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_53.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_54.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_55.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_56.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_57.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_58.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_59.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_60.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_61.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_62.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_63.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_64.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_65.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_66.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_67.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_68.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_69.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_70.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_71.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_72.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_73.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_74.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_75.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_76.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_77.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_78.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_79.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_80.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_81.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_82.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_83.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_84.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_85.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_86.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_87.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_88.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_89.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_90.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_91.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_92.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_93.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_94.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_95.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_96.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_97.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_98.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_99.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_100.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_101.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_102.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_103.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_104.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_105.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_106.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_107.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_108.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_109.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_110.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_111.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_112.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/anime/1_image_113.webp', category: ['アニメ'] },
  { src: '/images/Illustrations/Vtuber/2_image_1.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_2.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_3.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_4.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_5.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_6.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_7.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_8.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_9.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_10.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_11.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_12.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_13.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_14.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_15.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_16.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_17.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_18.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_19.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_20.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_21.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_22.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_23.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_24.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_25.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_26.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_27.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/Vtuber/2_image_28.webp', category: ['Vtuber'] },
  { src: '/images/Illustrations/VOCALOID/3_image_1.webp', category: ['ボカロ'] },
  { src: '/images/Illustrations/VOCALOID/3_image_2.webp', category: ['ボカロ'] },
  { src: '/images/Illustrations/VOCALOID/3_image_3.webp', category: ['ボカロ'] },
  { src: '/images/Illustrations/VOCALOID/3_image_4.webp', category: ['ボカロ'] },
  { src: '/images/Illustrations/VOCALOID/3_image_5.webp', category: ['ボカロ'] },
  { src: '/images/Illustrations/VOCALOID/3_image_6.webp', category: ['ボカロ'] },
  { src: '/images/Illustrations/VOCALOID/3_image_7.webp', category: ['ボカロ'] },
  { src: '/images/Illustrations/VOCALOID/3_image_8.webp', category: ['ボカロ'] },
  { src: '/images/Illustrations/game/3_image_1.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_2.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_3.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_4.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_5.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_6.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_7.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_8.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_9.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_10.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_11.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_12.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_13.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_14.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_15.webp', category: ['ゲーム'] },
  { src: '/images/Illustrations/game/3_image_16.webp', category: ['ゲーム'] },
];

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const IllustrationsComponent: FC = () => {
  const [filter, setFilter] = useState('all');
  const [shuffledIllustrations, setShuffledIllustrations] = useState(illustrations);
  const [isGrayDisplayVisible, setIsGrayDisplayVisible] = useState(false);
  const [grayDisplaySrc, setGrayDisplaySrc] = useState('');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setShuffledIllustrations(shuffleArray([...illustrations]));
    document.body.classList.add('fixedLogo');

    return () => {
      document.body.classList.remove('fixedLogo');
    };
  }, []);

  const handleFilterClick = (category: string) => {
    setIsFading(true);
    setTimeout(() => {
      setFilter(category);
      setIsFading(false);
    }, 200);
  };

  const filteredIllustrations =
    filter === 'all'
      ? shuffledIllustrations
      : shuffledIllustrations.filter((illustration) => illustration.category.includes(filter));

  const handleImageClick = (src: string) => {
    setGrayDisplaySrc(src);
    setIsGrayDisplayVisible(true);
  };

  const handleOverlayClick = () => {
    setIsGrayDisplayVisible(false);
  };

  return (
    <section className={styles['filter-list__container']}>
      <h2>
        <span>Illustrations</span>
      </h2>
      <div className={styles['filter-list-box']}>
        <ul className={styles['filter-list']}>
          <li
            data-filter="all"
            className={filter === 'all' ? styles['is-active'] : ''}
            onClick={() => handleFilterClick('all')}
          >
            <span>#すべて</span>
          </li>
          <li
            data-filter="anime"
            className={filter === 'アニメ' ? styles['is-active'] : ''}
            onClick={() => handleFilterClick('アニメ')}
          >
            <span>#アニメ</span>
          </li>
          <li
            data-filter="Vtuber"
            className={filter === 'Vtuber' ? styles['is-active'] : ''}
            onClick={() => handleFilterClick('Vtuber')}
          >
            <span>#Vtuber</span>
          </li>
          <li
            data-filter="VOCALOID"
            className={filter === 'ボカロ' ? styles['is-active'] : ''}
            onClick={() => handleFilterClick('ボカロ')}
          >
            <span>#ボカロ</span>
          </li>
          <li
            data-filter="game"
            className={filter === 'ゲーム' ? styles['is-active'] : ''}
            onClick={() => handleFilterClick('ゲーム')}
          >
            <span>#ゲーム</span>
          </li>
        </ul>
      </div>
      <ul className={`${styles['filter-item']} ${!isFading ? styles['fade-in'] : ''}`}>
        {filteredIllustrations.map((illustration, index) => (
          <li key={index} onClick={() => handleImageClick(illustration.src)}>
            <Image src={illustration.src} width={300} height={400} alt="イラスト" />
          </li>
        ))}
      </ul>
      <div
        id={styles.grayDisplay}
        className={`${styles.grayDisplay} ${isGrayDisplayVisible ? styles.visible : ''}`}
        onClick={handleOverlayClick}
      >
        <img src={grayDisplaySrc} alt="拡大イラスト" style={{ width: '400px' }} />
      </div>
    </section>
  );
};

export default IllustrationsComponent;
