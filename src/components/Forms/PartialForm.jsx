import { object, string } from 'yup';
import { Formik, Form, Field } from 'formik';
import { ErrorMessageStyled } from './TutorForm.styled';
import { Button } from 'components';

const PartialForm = ({ placeholder, title, onSubmit, rel, id, text }) => {
  const initialValues = {
    name: text || '',

  };

  const handleSubmit = (values, { resetForm }) => {
    const data = id ? { id, rel, name: values.name } : values.name;
    onSubmit(data);
    resetForm();
  };

  const validationSchema = object().shape({ name: string() });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, handleBlur, errors }) => {
        // console.log(errors);
        return (
          <Form>
            <div>
              <h3>{title}</h3>
              <Field
                type="text"
                id={placeholder}
                name={'name'}
                placeholder={placeholder}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
              />
              <ErrorMessageStyled name={'name'} component={'div'} />
            </div>
            <Button type="submit" text={id ? "Save" : 'Add'} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default PartialForm;
