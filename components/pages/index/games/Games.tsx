import styles from './Games.module.scss';
import { FC } from 'react';

const Games: FC = () => {
	return (
		<section className={styles.games} id="Games">
			<div className={styles.decorationArea}>
				<h2><span>Games</span></h2>
				<div className={styles.gamesLink}>
					<a className={styles.buttonGames} target="_blank" href="https://ixy.fanbox.cc/">
						<img className={styles.btn1} src="/images/Games/button1.png" alt="ファンボックスへ" />
						<img className={styles.btn1Bg} src="/images/Games/button.bg.png" alt="ボタン背景" />
					</a>
					<a className={styles.buttonGames} target="_blank" href="https://ci-en.dlsite.com/creator/5868">
						<img className={styles.btn2} src="/images/Games/button2.png" alt="シエンへ" />
						<img className={styles.btn2Bg} src="/images/Games/button.bg.png" alt="ボタン背景" />
					</a>
				</div>
				<img className={styles.gamesDecoration1} src="/images/Games/Games_decoration1.png" alt="あしらい" />
				<img className={styles.gamesDecoration2} src="/images/Games/Games_decoration2.png" alt="あしらい" />
				<img className={styles.gamesDecoration3} src="/images/Games/guru.png" alt="あしらい" />
				<img className={styles.gamesDecoration4} src="/images/Games/rope.png" alt="あしらい" />
				<img className={styles.gamesDecoration5} src="/images/Games/Ellipse1.png" alt="あしらい" />
				<img className={styles.gamesDecoration6} src="/images/Games/Ellipse2.png" alt="あしらい" />
			</div>
		</section>
	)
}

export default Games;