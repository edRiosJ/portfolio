import React from 'react';
import ImageParallax from '../../containers/imageParallax/ImageParallax.jsx';
import ScrollContext from '../../../context/scroll/ScrollContext.js';
import LanguageContext from '../../../context/language/LanguageContext.js';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './parallaxSection.css';
import moon from '../../../img/moon.svg';
import mountain from '../../../img/mountain.svg';
import rocks from '../../../img/rocks.svg';
import sky from '../../../img/sky.svg';
import stars from '../../../img/stars.png';
import sun from '../../../img/sun.svg';
import water from '../../../img/water.png';
import wolf from '../../../img/wolf.svg';

function ParallaxSection()
{
  const { languageValue } = React.useContext(LanguageContext);
  const { scrollValue, setScroll } = React.useContext(ScrollContext);
  const { themeValue } = React.useContext(ThemeContext);

  React.useEffect(() => {
    window.addEventListener('scroll', setScroll);
  }, []);

  return (
    <section className={`parallax-section ${themeValue ? 'parallax-section-lt' : 'parallax-section-dt'}`} id="home">
      <h2
        id="text"
        style={{ top: `${50 + scrollValue * -0.3}%` }}
      >
        {languageValue ? 'Hola!!' : 'Hello!!'}
      </h2>
      <ImageParallax image={themeValue ? sky : stars} />
      <ImageParallax
        image={mountain}
        styleValue={{ top: `${scrollValue * 0.25}px` }}
      />
      <ImageParallax
        image={themeValue ? sun : moon}
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
