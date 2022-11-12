/* eslint-disable react/prop-types */
import React from 'react';
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

  return (
    <article className="card-job">
      <img src={logoCompany} alt={nameCompany} data-aos="fade-right" loading="lazy" />
      <div data-aos="fade-left">
        <div className={`container-data ${themeValue ? 'container-data-lt' : 'container-data-dt'}`}>
          <h3>{nameCompany}</h3>
          <h4>{nameJob}</h4>
          <h5>{dateJob}</h5>
          <br />
          <div>
            {description && description.map((el) => (
              <p key={el.slice(10)}>
                {el}
                <br />
                <br />
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
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
