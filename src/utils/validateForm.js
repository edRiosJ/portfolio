import * as Yup from 'yup';

const REGEX_NAME = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;

const validateContactFormSchema = Yup.object().shape(
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

export default validateContactFormSchema;
