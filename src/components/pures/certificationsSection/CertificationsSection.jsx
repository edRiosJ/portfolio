import React from 'react';
import dataCertifications from '../../../utils/dataCertifications.js';
import CardCertification from '../../containers/cardCertification/CardCertification.jsx';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import TitleSection from '../../containers/titleSection/TitleSection.jsx';
import './certificationsSection.css';

function CertificationsSection()
{
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <section className={`certifications-section ${themeValue ? 'certifications-section-lt' : 'certifications-section-dt'}`} id="certifications">
      <TitleSection title="Certificaciones" />
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
