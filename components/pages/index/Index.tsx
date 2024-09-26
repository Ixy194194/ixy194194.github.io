import { FC } from 'react';
import TopComponent from './top/Top';
import IllustrationsComponent from './illustrationSlide/IllustrationSlide';
import GamesComponent from './games/Games';
import AboutComponent from './about/About';
import ContactComponent from './contact/Contact';

const IndexComponent: FC = () => {
  return (
    <>
      <TopComponent />
      <IllustrationsComponent />
      <GamesComponent />
      <AboutComponent />
      <ContactComponent />
    </>
  );
};

export default IndexComponent;
