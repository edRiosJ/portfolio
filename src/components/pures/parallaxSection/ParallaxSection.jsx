import React from 'react';
import ImageParallax from '../../containers/imageParallax/ImageParallax';
import './parallaxSection.css';
import moon from '../../../img/moon.svg';
import mountain from '../../../img/mountain.svg';
import rocks from '../../../img/rocks.png';
import stars from '../../../img/stars.png';
import water from '../../../img/water.png';
import wolf from '../../../img/wolf.svg';

function ParallaxSection()
{
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(window.scrollY);

  React.useEffect(() =>
  {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallaxSection">
      <h2
        id="text"
        style={{ top: `${50 + scroll * -1.0}%` }}
      >
        Hola!!
      </h2>
      <ImageParallax image={stars} />
      <ImageParallax
        image={mountain}
        styleValue={{ top: `${scroll * 0.25}px` }}
      />
      <ImageParallax
        image={moon}
        styleValue={{ top: `${scroll * -3}px` }}
      />
      <ImageParallax
        image={rocks}
        styleValue={{ top: `${scroll * -0.12}px` }}
      />
      <ImageParallax
        image={wolf}
        styleValue={{ left: `${scroll * 2}px` }}
      />
      <ImageParallax image={water} />
    </section>
  );
}

export default ParallaxSection;
