import { Formik } from 'formik';
import { StyledForm, StyledField, StyleError } from './QuizForm.styled';
import * as Yup from 'yup'; //для валідації форми

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
// });

const schema = Yup.object().shape({
  topic: Yup.string().min(2, 'Too Short!').required('Required'),
  level: Yup.string()
    .oneOf(['beginer', 'intermediate', 'advanced'])
    .required('Required'),
  time: Yup.number()
    .positive()
    .min(10, 'Not enough time!')
    .required('Required'),
  questions: Yup.number()
    .positive('Mast be > 0')
    .min(3, 'Min 3 q!')
    .required('Required'),
});

export const QuizForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          topic: '',
          level: 'intermediate',
          time: 0,
          questions: 0,
        }}
        validationSchema={schema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <StyledForm>
          <label>
            Topic
            <StyledField name="topic" placeholder="Quize topic" />
            <StyleError name="topic" />
          </label>

          <label>
            Level
            <StyledField as="select" name="level">
              <option value="beginer">Beginer</option>
              <option value="intermediate">intermediate</option>
              <option value="advanced">Advanced</option>
            </StyledField>
            <StyleError name="level" />
          </label>

          <label>
            Time
            <StyledField name="time" type="number" />
            <StyleError name="time" />
          </label>

          <label>
            Questions
            <StyledField name="questions" type="number" />
            <StyleError name="questions" />
          </label>

          <button type="submit">Submit</button>
        </StyledForm>
      </Formik>
    </div>
  );
};
