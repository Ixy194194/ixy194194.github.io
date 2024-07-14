import { FC } from 'react';

const Illustrations: FC = () => {
	const images = [
		{ src: '/images/Illustrations/image_1.webp', alt: 'イラスト' },
		{ src: '/images/Illustrations/image_2.webp', alt: 'イラスト' },
		{ src: '/images/Illustrations/image_3.webp', alt: 'イラスト' },
		{ src: '/images/Illustrations/image_4.webp', alt: 'イラスト' },
		{ src: '/images/Illustrations/image_5.webp', alt: 'イラスト' },
		{ src: '/images/Illustrations/image_6.webp', alt: 'イラスト' },
		{ src: '/images/Illustrations/image_7.webp', alt: 'イラスト' },
		{ src: '/images/Illustrations/image_8.webp', alt: 'イラスト' },
		{ src: '/images/Illustrations/image_9.webp', alt: 'イラスト' },
		{ src: '/images/Illustrations/image_10.webp', alt: 'イラスト' },
	];

	// split those images into two columns (1/2)
	const half = Math.ceil(images.length / 2);
	const leftColumn = images.slice(0, half);
	const rightColumn = images.slice(half);

	return (
		<section className="Illustrations anchor" id="Illustrations">
			<h2><span>Illustrations</span></h2>
			<div className="Illustrations_images">
				<ul className="image_container_left">
					{leftColumn.map((image, index) => (
						<li key={index}>
							<img src={image.src} loading="lazy" className="lazyload" alt={image.alt} />
						</li>
					))}
				</ul>
				<ul className="image_container_rigth" dir="rtl">
					{rightColumn.map((image, index) => (
						<li key={index}>
							<img src={image.src} loading="lazy" className="lazyload" alt={image.alt} />
						</li>
					))}
				</ul>
			</div>
			<div className="button">
				<a href="Illustrations/index.html">
					<button className="btn-hover color-1">More</button>
				</a>
			</div>
		</section>
	)
}

export default Illustrations;
