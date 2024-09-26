import { useEffect, useState } from 'react';
import styles from './Splash.module.scss';

const SplashComponent: React.FC = () => {
  // プログレスバーの進行状況を管理するための状態
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // プログレスバーを進行させるためのインターバル
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 10);

    // ページロード時にスプラッシュ画面をフェードアウトさせる関数
    const handleLoad = () => {
      setTimeout(() => {
        document.getElementById('splash')?.classList.add(styles.fadeOut);
      }, 600);
    };

    // 初回訪問かどうかを確認し、スプラッシュ画面の表示を制御する関数
    const handleVisit = () => {
      if (sessionStorage.getItem('visit')) {
        // 既に訪問済みの場合、スプラッシュ画面を非表示にする
        document.getElementById('splash')?.classList.add(styles.hidden);
      } else {
        // 何らかの問題で読み込みに問題が発生している場合は、8秒後にスプラッシュ画面をフェードアウトさせる
        setTimeout(() => {
          document.getElementById('splash')?.classList.add(styles.fadeOut);
          sessionStorage.setItem('visit', 'true');
        }, 8000);
      }
    };

    // ページロードイベントにhandleLoad関数を追加
    window.addEventListener('load', handleLoad);
    // 初回訪問かどうかを確認
    handleVisit();

    // ページ移管時にイベントリスナーを削除
    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="splash" className={styles.splash}>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          padding: '10px',
          margin: '0',
          transform: 'translate(-50%,-50%)',
          fontSize: '3rem',
          fontFamily: 'Orbitron',
          color: '#fff',
        }}
      >
        {progress} %
      </div>
    </div>
  );
};

export default SplashComponent;