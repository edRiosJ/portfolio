import React from 'react';
import dataCertifications from '../../../utils/dataCertifications.js';
import CardCertification from '../../containers/cardCertification/CardCertification.jsx';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './certificationsSection.css';

function CertificationsSection()
{
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <section className={`certifications-section ${themeValue ? 'certifications-section-lt' : 'certifications-section-dt'}`} id="certifications">
      <div data-aos="fade-up">
        <h2>Certificaciones</h2>
      </div>
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
