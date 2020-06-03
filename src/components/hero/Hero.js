import React from "react";
import './Hero.css';
import { Section, imagesUI } from '../../rakutenUI/RakutenUI';

const Hero = () => {
  return (
    <Section
      size={70}
      backgroundImage={imagesUI.IMAGE_MOCK_HERO}
    >
    </Section>
  );
};

export default Hero;