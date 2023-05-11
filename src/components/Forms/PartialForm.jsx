import { object, string } from 'yup';
import { Formik, Form, Field } from 'formik';
import { ErrorMessageStyled } from './TutorForm.styled';
import { Button } from 'components';
import { useDispatch } from 'react-redux';

const PartialForm = ({
  placeholder,
  title,
  onSubmit,
  rel,
  id,
  text,
  toggleModal,
}) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: text || '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const data = id ? { id, rel, name: values.name } : values.name;
    dispatch(onSubmit(data));
    toggleModal();
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
            <Button type="submit" text={id ? 'Save' : 'Add'} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default PartialForm;
