import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/theme/ThemeContext.js';
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

  const { themeValue } = React.useContext(ThemeContext);

  return (
    <div className="card-certification" data-aos="zoom-out-up">
      <img src={logoCertification} alt={nameCertification} loading="lazy" />
      <div className={`card-container ${themeValue ? 'card-container-lt' : 'card-container-dt'}`}>
        <h3>{nameCertification}</h3>
        <h4>{companyCertification}</h4>
        <h5>{dateCertification}</h5>
        <p>{`Credencial certiport: ${credentialCertification}`}</p>
        <div className="button-card">
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
