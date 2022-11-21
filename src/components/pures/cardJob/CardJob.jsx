/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React from 'react';
import { BiDetail } from 'react-icons/bi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './cardJob.css';

function CardJob({ dataJob })
{
  const {
    logoCompany,
    nameJob,
    nameCompany,
    dateJob,
    description,
  } = dataJob;

  const { themeValue } = React.useContext(ThemeContext);

  const [descriptionIsVisible, setDescriptionIsVisible] = React.useState(false);

  return (
    <div data-aos="fade-up">
      <article className={`container-data ${themeValue ? 'container-data-lt' : 'container-data-dt'}`}>
        <img src={logoCompany} alt={nameCompany} loading="lazy" />
        <div className={`job-information ${descriptionIsVisible ? 'information-disabled' : 'information-active'} `}>
          <h3>{nameCompany}</h3>
          <h4>{nameJob}</h4>
          <h5>{dateJob}</h5>
          <button
            type="button"
            className="button-job"
            onClick={() => setDescriptionIsVisible(true)}
          >
            <IconContext.Provider value={{ className: 'icon-conf-job' }}>
              <BiDetail />
            </IconContext.Provider>
            <span>Detalles</span>
          </button>
        </div>
        <div className={`job-description ${descriptionIsVisible ? 'description-active' : 'description-disabled'}`}>
          {
            description && description.map((el) => (
              <p key={el.slice(10)}>
                {el}
                <br />
              </p>
            ))
          }
          <button
            type="button"
            className="button-job-close"
            onClick={() => setDescriptionIsVisible(false)}
          >
            <IconContext.Provider value={{ className: 'icon-conf-job' }}>
              <IoMdArrowRoundBack />
            </IconContext.Provider>
            <span>Regresar</span>
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
