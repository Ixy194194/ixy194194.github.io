import { FC } from 'react';

const GoodsPopup: FC = () => {
	return (
		<div className="sw-Fixedbnr_Closebnr">
			<p className="close"><img src="/images/footer/close.png" alt="閉じる" /><span>とじる</span></p>
			<a href="Goods/index.html"><img className="sw-Fixedbnr_Closeimg" src="/images/footer/goods.png"
																			alt="グッズアイコン" /></a>
		</div>
	)
}

export default GoodsPopup;
