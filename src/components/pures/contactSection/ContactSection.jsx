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
import validateContactFormSchema from '../../../utils/validateForm.js';
import './contactSection.css';

function ContactSection()
{
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleSubmit = (values) =>
  {
    const dataForm = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    emailjs.sendForm('gmail', 'form_contact', dataForm, 'm-lfOwPrA8C47GD0a')
      .then(
        (result) =>
        {
          Swal.fire(
            {
              icon: 'success',
              title: result.text,
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
              title: error.text,
              showConfirmButton: false,
              timer: 2000,
            },
          );
        },
      );
  };

  return (
    <section className="contactSection" id="contact">
      <h2>Contacto</h2>
      <div className="contactContainer">
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
              <Form className="form">

                <div className="mainFormContainer">
                  <div className="mainFormContainer_panelLeft">
                    <div className="inputBox">
                      <Field id="name" name="name" type="text" autocomplete="off" />
                      <span>Nombre</span>
                      {errors.name && touched.name && (<label>{errors.name}</label>)}
                    </div>

                    <div className="inputBox">
                      <Field id="email" name="email" type="email" autocomplete="off" />
                      <span>Correo</span>
                      {errors.email && touched.email && (<label>{errors.email}</label>)}
                    </div>

                    <div className="inputBox">
                      <Field id="subject" name="subject" type="text" autocomplete="off" />
                      <span>Asunto</span>
                      {errors.subject && touched.subject && (<label>{errors.subject}</label>)}
                    </div>
                  </div>
                  <div className="mainFormContainer_panelRight">
                    <div className="inputBox_message">
                      <Field id="message" name="message" as="textarea" />
                      <span>Mensaje</span>
                      {errors.message && touched.message && (<label>{errors.message}</label>)}
                    </div>
                  </div>
                </div>

                <div className="secondaryFormContainer">
                  <IconContext.Provider value={{ className: 'iconConf' }}>
                    <button type="submit" className="btnSend">
                      <RiSendPlaneFill />
                      <span>Enviar</span>
                    </button>
                  </IconContext.Provider>
                </div>
              </Form>
            )
          }
        </Formik>
        <div className="containerCV">
          <IconContext.Provider value={{ size: '15vw' }}>
            <FcBusinessman />
          </IconContext.Provider>
          <a type="button" href={CV} className="btnDownCV" download="CV Eduardo Rios">
            <IconContext.Provider value={{ className: 'iconConf' }}>
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
