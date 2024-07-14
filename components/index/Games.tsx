import { FC } from 'react';

const Games: FC = () => {
	return (
		<section className="Games anchor" id="Games">
			<div className="decoration_area">
				<h2><span>Games</span></h2>
				<div className="Games_link">
					<a className="button_Games" target="_blank" href="https://ixy.fanbox.cc/">
						<img className="btn1" src="/images/Games/button1.png" alt="ファンボックスへ" />
						<img className="btn1_bg" src="/images/Games/button.bg.png" alt="ボタン背景" />
					</a>
					<a className="button_Games" target="_blank" href="https://ci-en.dlsite.com/creator/5868">
						<img className="btn2" src="/images/Games/button2.png" alt="シーエんへ" />
						<img className="btn2_bg" src="/images/Games/button.bg.png" alt="ボタン背景" />
					</a>
				</div>
				<img className="Games_decoration_1" src="/images/Games/Games_decoration1.png" alt="あしらい" />
				<img className="Games_decoration_2" src="/images/Games/Games_decoration2.png" alt="あしらい" />
				<img className="Games_decoration_3" src="/images/Games/guru.png" alt="あしらい" />
				<img className="Games_decoration_4" src="/images/Games/rope.png" alt="あしらい" />
				<img className="Games_decoration_5" src="/images/Games/Ellipse1.png" alt="あしらい" />
				<img className="Games_decoration_6" src="/images/Games/Ellipse2.png" alt="あしらい" />
			</div>
		</section>
	)
}

export default Games;
