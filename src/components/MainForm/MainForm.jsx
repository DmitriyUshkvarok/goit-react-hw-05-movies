import css from './MainForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().min(7).max(20).required(),
  email: yup.string().required(),
  password: yup.string().min(10).max(20).required(),
});

function MainForm() {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formRegistration}>
        <h2 className={css.formRegistrationTitle}>Form Registration</h2>
        <div className={css.feedbackFormGroup}>
          <Field
            className={css.inputName}
            type="text"
            name="name"
            placeholder="name"
          />
          <ErrorMessage name="name" />
        </div>
        <div className={css.feedbackFormGroup}>
          <Field
            className={css.inputEmail}
            type="email"
            name="email"
            placeholder="email"
          />
          <ErrorMessage name="email" />
        </div>
        <div className={css.feedbackFormGroup}>
          <Field
            className={css.inputPassword}
            type="password"
            name="password"
            placeholder="password"
          />
          <ErrorMessage name="password" />
        </div>
        <div className={css.btnwrapper}>
          <button className={css.btnRegister} type="submit">
            Registration
          </button>
          <button className={css.btnLogIn} type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
}
export default MainForm;
