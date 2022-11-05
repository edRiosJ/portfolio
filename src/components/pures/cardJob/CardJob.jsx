/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
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
  return (
    <article className="cardJob">
      <img src={logoCompany} alt={nameCompany} data-aos="fade-right" />
      <div className="containerData" data-aos="fade-left">
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
