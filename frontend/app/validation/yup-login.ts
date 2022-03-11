import * as yup from 'yup';
import { EMAIL_REGEX } from '../regex';

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required('Required field')
        .test('test/email', 'Invalid email', (value) => {
            return EMAIL_REGEX.test(value as string);
        }),
    password: yup.string().required('Required field'),
});
