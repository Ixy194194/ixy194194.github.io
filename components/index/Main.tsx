import { FC } from 'react';
import Top from './Top';
import Illustrations from './Illustrations';
import Games from './Games';
import About from './About';
import Contact from './Contact';

const Main: FC = () => {
	return (
		<main className="main">
			<Top />
			<div className="grid-background">
				<Illustrations />
				<Games />
				<About />
				<Contact />
			</div>
		</main>
	)
}

export default Main;
