import React from 'react';
import dataCertifications from '../../../utils/dataCertifications.js';
import CardCertification from '../../containers/cardCertification/CardCertification.jsx';
import './certificationsSection.css';

function CertificationsSection()
{
  return (
    <section className="certificationsSection">
      <h2>Certificaciones</h2>
      <div className="certificationsContainer">
        {
          dataCertifications && dataCertifications.map((certification) => (
            <CardCertification
              key={certification.credentialCertification}
              certification={certification}
            />
          ))
        }
      </div>
    </section>
  );
}

export default CertificationsSection;