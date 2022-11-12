/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Formik, Form, Field } from 'formik';
import { FcBusinessman } from 'react-icons/fc';
import { RiDownload2Fill, RiSendPlaneFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import CV from '../../../files/CV Eduardo Rios.pdf';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import TitleSection from '../../containers/titleSection/TitleSection.jsx';
import validateContactFormSchema from '../../../utils/validateForm.js';
import './contactSection.css';

function ContactSection()
{
  const { themeValue } = React.useContext(ThemeContext);

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
              title: `Mensaje Enviado ${result.text}`,
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
              title: `Ocurrio un error ${error.text}`,
              showConfirmButton: false,
              timer: 2000,
            },
          );
        },
      );
  };

  return (
    <section className={`contact-section ${themeValue ? 'contact-section-lt' : 'contact-section-dt'}`} id="contact">
      <TitleSection title="Contacto" />
      <div className="contact-container">
        <Formik
          initialValues={initialState}
          validationSchema={validateContactFormSchema}
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
                      <span>Nombre</span>
                      {errors.name && touched.name && (<label>{errors.name}</label>)}
                    </div>

                    <div className="input-box">
                      <Field id="email" name="email" type="email" autoComplete="off" />
                      <span>Correo</span>
                      {errors.email && touched.email && (<label>{errors.email}</label>)}
                    </div>

                    <div className="input-box">
                      <Field id="subject" name="subject" type="text" autoComplete="off" />
                      <span>Asunto</span>
                      {errors.subject && touched.subject && (<label>{errors.subject}</label>)}
                    </div>
                  </div>
                  <div className="main-form-container-panel-right">
                    <div className="input-box-message">
                      <Field id="message" name="message" as="textarea" />
                      <span>Mensaje</span>
                      {errors.message && touched.message && (<label>{errors.message}</label>)}
                    </div>
                  </div>
                </div>

                <div className="secondary-form-container">
                  <IconContext.Provider value={{ className: 'icon-conf' }}>
                    <button type="submit" className="button-send">
                      <RiSendPlaneFill />
                      <span>Enviar</span>
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
          <a type="button" href={CV} className="button-down-cv" download="CV Eduardo Rios">
            <IconContext.Provider value={{ className: 'icon-conf' }}>
              <RiDownload2Fill />
            </IconContext.Provider>
            <span>Mi CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
