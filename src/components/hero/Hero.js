import React from "react";
import './Hero.css';
import { Section, Icon } from '../../rakutenUI/RakutenUI';

const Hero = () => {
  return (
    <Section
      size={70}
      backgroundImage={Icon.IMAGE_MOCK_HERO}
    >
    </Section>
  );
};

export default Hero;