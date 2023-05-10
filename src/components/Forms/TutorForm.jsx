import { Button } from 'components';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { ErrorMessageStyled, FieldStyled } from './TutorForm.styled';
import { addTutorActions } from 'store/tutors/actions';
import { useDispatch } from 'react-redux';

const tutorValidationSchema = object({
  firstName: string()
    .min(2, 'Please, input at least two symbols')
    .max(25, 'The input should be not more than 25 symbols')
    .required('This field is required'),
  lastName: string().required('This field is required'),
  patronymic: string().required(),
  phone: string().required(),
  email: string().email().required(),
  city: string().required(),
});

const TutorForm = ({ addTutor }) => {
  const dispatch = useDispatch();

  const initialValues = {
    firstName: '',
    lastName: '',
    patronymic: '',
    phone: '',
    email: '',
    city: '',
  };

  const formFields = [
    { name: 'firstName', placeholder: 'First name' },
    { name: 'lastName', placeholder: 'Last name' },
    { name: 'patronymic', placeholder: 'Patronymic name' },
    { name: 'phone', placeholder: 'Phone number' },
    { name: 'email', placeholder: 'Email address' },
    { name: 'city', placeholder: 'City' },
  ];

  const handleSubmit = (values, { resetForm }) => {
    //TODO
    // console.log(values);
    dispatch(addTutorActions(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={tutorValidationSchema}
    >
      {({ values, handleChange, handleBlur, errors }) => {
        // console.log(errors);
        return (
          <Form>
            {formFields.map(({ name, placeholder }) => (
              <div key={name}>
                <FieldStyled
                  type="text"
                  id={name}
                  name={name}
                  placeholder={placeholder}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[name]}
                />
                <ErrorMessageStyled name={name} component={'div'} />
              </div>
            ))}
            <Button type="submit" text="Add" />
          </Form>
        );
      }}
    </Formik>
  );
};

// TutorForm.propTypes = {

// }

export default TutorForm;
