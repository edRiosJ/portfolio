import * as Yup from 'yup';

const REGEX_NAME = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;

const validateFormSpanish = Yup.object().shape(
  {
    name: Yup.string()
      .min(3, 'El nombre es muy corto')
      .max(25, 'El nombre es muy largo')
      .matches(REGEX_NAME, 'El nombre solo debe tener letras')
      .required('El nombre es obligatorio'),
    email: Yup.string()
      .email('Email no valido')
      .required('El correo es obligatorio'),
    subject: Yup.string()
      .min(4, 'El asunto es muy corto')
      .max(20, 'El asunto es muy largo')
      .required('El asunto es obligatorio'),
    message: Yup.string()
      .min(5, 'El mensaje es muy corto')
      .required('El mensaje es obligatorio'),
  },
);

const validateFormEnglish = Yup.object().shape(
  {
    name: Yup.string()
      .min(3, 'The name is so short')
      .max(25, 'The name is so long')
      .matches(REGEX_NAME, 'The name must has only letters')
      .required('The name is required'),
    email: Yup.string()
      .email('The email is not valid')
      .required('The email is required'),
    subject: Yup.string()
      .min(4, 'The subject is so short')
      .max(20, 'The subject is so long')
      .required('The subject is required'),
    message: Yup.string()
      .min(5, 'The message is so short')
      .required('The message is required'),
  },
);

export { validateFormSpanish, validateFormEnglish };
