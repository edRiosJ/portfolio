import React from 'react';
import { HiBackspace, HiQueueList } from 'react-icons/hi2';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import { dataAbout } from '../../../utils/dataPortfolio.js';
import LanguageContext from '../../../context/language/LanguageContext.js';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './cardJob.css';

function CardJob({ dataJob })
{
  const { languageValue } = React.useContext(LanguageContext);
  const { themeValue } = React.useContext(ThemeContext);

  const [descriptionIsVisible, setDescriptionIsVisible] = React.useState(false);

  const dataSection = languageValue ? {
    ...dataAbout.spanish, ...dataJob.general, ...dataJob.spanish,
  } : {
    ...dataAbout.english, ...dataJob.general, ...dataJob.english,
  };

  return (
    <div data-aos="fade-up">
      <article className={`container-data ${themeValue ? 'container-data-lt' : 'container-data-dt'}`}>
        <img src={dataSection.logoCompany} alt={dataSection.nameCompany} loading="lazy" />
        <div className={`job-information ${descriptionIsVisible ? 'information-disabled' : 'information-active'} `}>
          <h3>{dataSection.nameCompany}</h3>
          <h4>{dataSection.nameJob}</h4>
          <h5>{dataSection.dateJob}</h5>
          <button
            type="button"
            className="button-job"
            onClick={() => setDescriptionIsVisible(true)}
          >
            <IconContext.Provider value={{ className: 'icon-conf-job' }}>
              <HiQueueList />
            </IconContext.Provider>
            <span>
              {dataSection.buttonDetails}
            </span>
          </button>
        </div>
        <div className={`job-description ${descriptionIsVisible ? 'description-active' : 'description-disabled'}`}>
          {
            dataSection.description && dataSection.description.map((el) => (
              <p key={el.slice(10)}>
                {el}
                <br />
              </p>
            ))
          }
          <button
            type="button"
            className={`button-job-close ${!languageValue ? 'button-english' : null}`}
            onClick={() => setDescriptionIsVisible(false)}
          >
            <IconContext.Provider value={{ className: 'icon-conf-job' }}>
              <HiBackspace />
            </IconContext.Provider>
            <span>
              {dataSection.buttonBack}
            </span>
          </button>
        </div>
      </article>
    </div>
  );
}

CardJob.propTypes = {
  dataJob: PropTypes.objectOf(
    PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.array,
      ],
    ),
  ).isRequired,
};

export default CardJob;
