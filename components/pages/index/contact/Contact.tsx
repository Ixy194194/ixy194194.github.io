import { FC, useEffect, useState } from 'react';
import styles from './Contact.module.scss';

const ContactComponent: FC = () => {
  const [repeatCount, setRepeatCount] = useState(1);

  useEffect(() => {
    const updateRepeatCount = () => {
      const width = window.innerWidth;
      const count = Math.ceil(width / 200);
      setRepeatCount(count);
    };

    updateRepeatCount();
    window.addEventListener('resize', updateRepeatCount);

    return () => {
      window.removeEventListener('resize', updateRepeatCount);
    };
  }, []);

  const renderImages = () => {
    const images = [];
    for (let i = 0; i < repeatCount; i++) {
      images.push(
        <div key={i}>
          <img src="/images/About/contact.png" alt="コンタクト" />
        </div>,
      );
    }
    return images;
  };

  return (
    <div className={styles.conveyor} id="contact">
      <a href="mailto:iixyinfo333@gmail.com" target="_blank" rel="noopener noreferrer">
        <div className={styles.belt1}>{renderImages()}</div>
      </a>
      <a href="mailto:iixyinfo333@gmail.com" target="_blank" rel="noopener noreferrer">
        <div className={styles.belt2}>{renderImages()}</div>
      </a>
    </div>
  );
};

export default ContactComponent;
