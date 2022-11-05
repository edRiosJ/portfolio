import React from 'react';
import PropTypes from 'prop-types';
import './cardCertification.css';

function CardCertification({ certification })
{
  const {
    logoCertification,
    nameCertification,
    companyCertification,
    dateCertification,
    credentialCertification,
    verificationLink,
  } = certification;

  return (
    <div className="cardCertification" data-aos="zoom-out-up">
      <img src={logoCertification} alt={nameCertification} />
      <div className="cardContainer">
        <h3>{nameCertification}</h3>
        <h4>{companyCertification}</h4>
        <h5>{dateCertification}</h5>
        <p>{`Credencial certiport: ${credentialCertification}`}</p>
        <div className="btnCard">
          <a href={verificationLink[0]} target="_blank" rel="noopener noreferrer">Certiport</a>
          <a href={verificationLink[1]} target="_blank" rel="noopener noreferrer">Credly</a>
        </div>
      </div>
    </div>
  );
}

CardCertification.propTypes = {
  certification: PropTypes.objectOf(
    PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.array,
      ],
    ),
  ).isRequired,
};

export default CardCertification;
