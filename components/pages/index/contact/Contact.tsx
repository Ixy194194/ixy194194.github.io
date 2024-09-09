import { FC, useEffect, useState } from 'react';
import styles from './Contact.module.scss';

const ContactComponent: FC = () => {
  // 画面の幅に応じて動的に要素を追加し、どのデバイスでも正常にスクロールされるように設計されています。
  // useEffectフックを使用して、画面の幅が変更されたときにrepeatCountを更新し、画像の繰り返し表示を調整します。
  // ユーザーがどのデバイスを使用していても、コンタクトセクションが適切に表示されるようになります。

  // repeatCountの状態を初期化。画面幅に応じて画像を繰り返し表示するためのカウント
  const [repeatCount, setRepeatCount] = useState(1);

  useEffect(() => {
    // 画面幅に応じてrepeatCountを更新する関数
    const updateRepeatCount = () => {
      const width = window.innerWidth;
      const count = Math.ceil(width / (width > 959 ? 300 : 200)) + 1; // モバイル200px, デスクトップ300pxごとに1つの画像を表示
      setRepeatCount(count);
    };

    // 初回レンダリング時にrepeatCountを設定
    updateRepeatCount();
    // 画面サイズが変更されたときにrepeatCountを更新
    window.addEventListener('resize', updateRepeatCount);

    // ページ移管時にイベントリスナーを削除
    return () => {
      window.removeEventListener('resize', updateRepeatCount);
    };
  }, []);

  // 画像を繰り返し表示するための関数
  const renderImages = () => {
    const images = [];
    for (let i = 0; i < repeatCount; i++) {
      images.push(
        <div key={i}>
          <img src="/images/About/contact.png" alt="コンタクト" />
        </div>
      );
    }
    return images;
  };

  return (
    <div className={styles.conveyor} id="contact">
      <a href="mailto:iixyinfo333@gmail.com" target="_blank" rel="noopener noreferrer">
        <div className={styles.belt}>{renderImages()}</div>
      </a>
    </div>
  );
};

export default ContactComponent;