import { FC } from 'react';
import Top from './Top';
import Illustrations from './Illustrations';
import Games from './Games';
import About from './About';
import Contact from './Contact';

const Index: FC = () => {
	return (
		<>
			<Top />
			<Illustrations />
			<Games />
			<About />
			<Contact />
		</>
	)
}

export default Index;
