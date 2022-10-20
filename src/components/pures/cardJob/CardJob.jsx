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
      <img src={logoCompany} alt={nameCompany} />
      <div className="containerData">
        <h3>{nameCompany}</h3>
        <h4>{nameJob}</h4>
        <h5>{dateJob}</h5>
        <br />
        <div>
          {description && description.map((el) => (
            <p>
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
  dataJob: PropTypes.objectOf(PropTypes.shape(
    {
      logoCompany: PropTypes.string.isRequired,
      nameJob: PropTypes.string.isRequired,
      nameCompany: PropTypes.string.isRequired,
      dateJob: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
    },
  )).isRequired,
};

export default CardJob;
