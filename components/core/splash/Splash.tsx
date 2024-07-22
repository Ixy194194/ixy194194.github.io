import { useEffect, useState } from 'react';
import styles from './Splash.module.scss';

const Splash: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 10);

    const handleLoad = () => {
      setTimeout(() => {
        document.getElementById('splash')?.classList.add(styles.fadeOut);
      }, 600);
    };

    const handleVisit = () => {
      if (sessionStorage.getItem('visit')) {
        document.getElementById('splash')?.classList.add(styles.hidden);
      } else {
        setTimeout(() => {
          document.getElementById('splash')?.classList.add(styles.fadeOut);
          sessionStorage.setItem('visit', 'true');
        }, 8000);
      }
    };

    window.addEventListener('load', handleLoad);
    handleVisit();

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

export default Splash;
