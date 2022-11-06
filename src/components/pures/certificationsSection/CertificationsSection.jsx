import React from 'react';
import dataCertifications from '../../../utils/dataCertifications.js';
import CardCertification from '../../containers/cardCertification/CardCertification.jsx';
import './certificationsSection.css';

function CertificationsSection()
{
  return (
    <section className="certifications-section" id="certifications">
      <h2 data-aos="fade-up">Certificaciones</h2>
      <div className="certifications-container">
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
