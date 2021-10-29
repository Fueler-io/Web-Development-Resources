import * as Yup from 'yup';
export const ResourceSchema = Yup.object().shape({

  name: Yup.string()

    .min(2, 'Too Short!')

    .max(20, 'Too Long!')

    .required('Required'),

  link: Yup.string()

    .min(2, 'Too Short!')

    .max(50, 'Too Long!')

    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Please enter a valid url!'
  )
  .required('Please enter a valid url!'),

  tag: Yup.string().required('Required'),

});