import { FC } from 'react';
import styles from './Top.module.scss';


const Top: FC = () => {
	return (
		<div className={styles.sectionTop}>
			<div className={styles.sectionTopMV}>
				<div className={styles.sectionTopAreaTitle}>
					<img className={`${styles.sectionTopTitle} pc`} src="/images/TOP/logo_pc.png" alt="トップロゴ" />
					<img className={`${styles.sectionTopTitle} sp`} src="/images/TOP/logo_sp.png" alt="トップロゴ" />
				</div>
				<div className={styles.sectionTopAreaImage}>
					<img className={styles.sectionTopImage} src="/images/TOP/TOP.jpg" alt="トップ画像" />
					<div className={styles.glitchItem}></div>
					<div className={styles.glitchItem}></div>
					<div className={styles.glitchItem}></div>
					<div className={styles.glitchItem}></div>
					<div className={styles.glitchItem}></div>
				</div>
			</div>
		</div>
	)
}

export default Top;