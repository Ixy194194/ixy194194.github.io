import { FC } from 'react';
import styles from './About.module.scss';

const About: FC = () => {
  return (
    <section className={`${styles.about} anchor`}>
      <h2><span>About</span></h2>
      <div className={styles.wrapper}>
        <div className={styles.fixedArea}>
          <img src="/images/About/Ixy.png" alt="いくしー自己紹介" />
          <div className={styles.circleAreaMax}>
            <div className={styles.circleArea}></div>
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <section>
            <div className={styles.profileArea}>
              <h2>Ixy<span>（ いくしー ）</span></h2>
              <p>イラストレーター/ゲーム制作/キャラクターデザイン</p>
              <p>ポップでかわいいイラストが得意。<br />
                Youtubeではお絵かき雑談配信やゲーム実況などを行っている。</p>
              <img src="/images/About/address.svg" alt="" />
            </div>
          </section>
          <section>
            <div className={styles.snsArea}>
              <h2>X<span>（ 旧ツイッター ）</span></h2>
              <a className="twitter-timeline" href="https://twitter.com/Ixy?ref_src=twsrc%5Etfw"
                 data-width="85%" data-height="400">Tweets by Ixy</a>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>
          </section>
          <section>
            <div className={styles.snsArea}>
              <h2>Youtube</h2>
              <div className={styles.youtube}>
                <iframe className={styles.youtube169} loading="lazy"
                        src="https://www.youtube.com/embed/?list=UUHPfTzszxxBC2whb9vWaHPg"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;