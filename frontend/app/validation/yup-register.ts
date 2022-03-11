import * as yup from 'yup';
import { EMAIL_REGEX } from '../regex';

export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .required('Required field')
        .test('test/email', 'Invalid email', (value) => {
            return EMAIL_REGEX.test(value as string);
        }),
    name: yup.string().min(3).max(20).required('Required field'),
    password: yup.string().required('Required field'),
});
