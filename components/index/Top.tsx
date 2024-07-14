import { FC } from 'react';

const Top: FC = () => {
	return (
		<div className="section-top">
			<div className="section-top-MV">
				<div className="section-top_area_title">
					<img className="section-top__title pc" src="/images/TOP/logo_pc.png" alt="トップロゴ" />
					<img className="section-top__title sp" src="/images/TOP/logo_sp.png" alt="トップロゴ" />
				</div>
				<div className="section-top_area_image">
					<img className="section-top__image" src="/images/TOP/TOP.jpg" alt="トップ画像" />
					<div className="glitch__item"></div>
					<div className="glitch__item"></div>
					<div className="glitch__item"></div>
					<div className="glitch__item"></div>
					<div className="glitch__item"></div>
				</div>
			</div>
		</div>
	)
}

export default Top;
