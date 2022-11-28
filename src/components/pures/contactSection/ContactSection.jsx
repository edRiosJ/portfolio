import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Formik, Form, Field } from 'formik';
import { FcBusinessman } from 'react-icons/fc';
import {
  HiArchiveBox,
  HiArrowDownCircle,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiPaperAirplane,
  HiUser,
} from 'react-icons/hi2';
import { IconContext } from 'react-icons';
import CV from '../../../files/CV Eduardo Rios.pdf';
import CVEnglish from '../../../files/CV Eduardo Rios English.pdf';
import LanguageContext from '../../../context/language/LanguageContext.js';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import TitleSection from '../../containers/titleSection/TitleSection.jsx';
import { dataContact } from '../../../utils/dataPortfolio.js';
import { validateFormSpanish, validateFormEnglish } from '../../../utils/validateForm.js';
import './contactSection.css';

function ContactSection()
{
  const { languageValue } = React.useContext(LanguageContext);
  const { themeValue } = React.useContext(ThemeContext);

  const dataSection = languageValue ? { ...dataContact.spanish } : { ...dataContact.english };

  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleSubmit = (values) =>
  {
    emailjs.send('gmail', 'form_contact', values, 'm-lfOwPrA8C47GD0a')
      .then(
        (result) =>
        {
          Swal.fire(
            {
              icon: 'success',
              title: `${dataSection.msgSuccess} ${result.text}`,
              showConfirmButton: false,
              timer: 2000,
            },
          );
        },
        (error) =>
        {
          Swal.fire(
            {
              icon: 'error',
              title: `${dataSection.msgError} ${error.text}`,
              showConfirmButton: false,
              timer: 2000,
            },
          );
        },
      );
  };

  return (
    <section className={`contact-section ${themeValue ? 'contact-section-lt' : 'contact-section-dt'}`} id="contact">
      <TitleSection title={dataSection.title} />
      <div className="contact-container">
        <Formik
          initialValues={initialState}
          validationSchema={languageValue ? validateFormSpanish : validateFormEnglish}
          onSubmit={(values, { resetForm }) =>
          {
            handleSubmit(values);
            resetForm();
          }}
        >
          {
            ({ errors, touched }) => (
              <Form className="form" data-aos="zoom-in-right">

                <div className="main-form-container">
                  <div className="main-form-container-panel-left">
                    <div className="input-box">
                      <Field id="name" name="name" type="text" autoComplete="off" />
                      <IconContext.Provider value={{ className: 'icon-input' }}>
                        <HiUser />
                      </IconContext.Provider>
                      <span>{dataSection.labelName}</span>
                      {errors.name && touched.name && (<label>{errors.name}</label>)}
                    </div>

                    <div className="input-box">
                      <Field id="email" name="email" type="email" autoComplete="off" />
                      <IconContext.Provider value={{ className: 'icon-input' }}>
                        <HiEnvelope />
                      </IconContext.Provider>
                      <span>{dataSection.labelEmail}</span>
                      {errors.email && touched.email && (<label>{errors.email}</label>)}
                    </div>

                    <div className="input-box">
                      <Field id="subject" name="subject" type="text" autoComplete="off" />
                      <IconContext.Provider value={{ className: 'icon-input' }}>
                        <HiArchiveBox />
                      </IconContext.Provider>
                      <span>{dataSection.labelSubject}</span>
                      {errors.subject && touched.subject && (<label>{errors.subject}</label>)}
                    </div>
                  </div>
                  <div className="main-form-container-panel-right">
                    <div className="input-box-message">
                      <Field id="message" name="message" as="textarea" />
                      <IconContext.Provider value={{ className: 'icon-input' }}>
                        <HiChatBubbleBottomCenterText />
                      </IconContext.Provider>
                      <span>{dataSection.labelMessage}</span>
                      {errors.message && touched.message && (<label>{errors.message}</label>)}
                    </div>
                  </div>
                </div>

                <div className="secondary-form-container">
                  <IconContext.Provider value={{ className: 'icon-conf icon-send' }}>
                    <button type="submit" className="button-contact-section">
                      <HiPaperAirplane />
                      <span>{dataSection.textButtonSend}</span>
                    </button>
                  </IconContext.Provider>
                </div>
              </Form>
            )
          }
        </Formik>
        <div className="container-cv" data-aos="zoom-in-left">
          <IconContext.Provider value={{ size: '15vw' }}>
            <FcBusinessman />
          </IconContext.Provider>
          <a type="button" href={languageValue ? CV : CVEnglish} className="button-contact-section" download="CV Eduardo Rios">
            <IconContext.Provider value={{ className: 'icon-conf icon-down' }}>
              <HiArrowDownCircle />
            </IconContext.Provider>
            <span>{dataSection.textButtonCV}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
