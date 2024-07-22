import { FC } from 'react';
import styles from './GoodsPopup.module.scss';

const GoodsPopup: FC = () => {
	return (
		<div className={styles.fixedBanner}>
			<p className={styles.close}><img src="/images/footer/close.png" alt="閉じる" /><span>とじる</span></p>
			<a href="goods"><img className={styles.closeImage} src="/images/footer/goods.png" alt="グッズアイコン" /></a>
		</div>
	)
}

export default GoodsPopup;