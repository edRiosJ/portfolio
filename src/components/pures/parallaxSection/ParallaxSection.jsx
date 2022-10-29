import React from 'react';
import ImageParallax from '../../containers/imageParallax/ImageParallax';
import ScrollContext from '../../../context/scroll/ScrollContext.js';
import './parallaxSection.css';
import moon from '../../../img/moon.svg';
import mountain from '../../../img/mountain.svg';
import rocks from '../../../img/rocks.png';
import stars from '../../../img/stars.png';
import water from '../../../img/water.png';
import wolf from '../../../img/wolf.svg';

function ParallaxSection()
{
  const { scrollValue, setScroll } = React.useContext(ScrollContext);

  React.useEffect(() => {
    window.addEventListener('scroll', setScroll);
  }, []);

  return (
    <section className="parallaxSection">
      <h2
        id="text"
        style={{ top: `${50 + scrollValue * -0.3}%` }}
      >
        Hola!!
      </h2>
      <ImageParallax image={stars} />
      <ImageParallax
        image={mountain}
        styleValue={{ top: `${scrollValue * 0.25}px` }}
      />
      <ImageParallax
        image={moon}
        styleValue={{ top: `${scrollValue * -1}px` }}
      />
      <ImageParallax
        image={rocks}
        styleValue={{ top: `${scrollValue * -0.12}px` }}
      />
      <ImageParallax
        image={wolf}
        styleValue={{ left: `${scrollValue * 2}px` }}
      />
      <ImageParallax image={water} />
    </section>
  );
}

export default ParallaxSection;
