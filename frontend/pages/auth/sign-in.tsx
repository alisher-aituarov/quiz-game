import { ReactElement, useEffect } from 'react';
import type { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { Layout } from '../../app/components/layout';
import { Input } from '../../app/components/elements/input';
import { Button } from '../../app/components/elements/button';
import { login } from '../../app/store/auth/slice';
import { loginSchema } from '../../app/validation/yup-login';

const SignInPage: NextPage & { getLayout: any } = () => {
    const dispatch = useDispatch();
    const initialValues = {
        email: '',
        password: '',
    };
    return (
        <div className="flex h-full w-100 justify-center items-center">
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                validateOnChange={false}
                validateOnBlur
                onSubmit={(values) => void dispatch(login({ email: values.email, password: values.password }))}
            >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <Form
                        onSubmit={handleSubmit}
                        className="w-100 xs:w-100 sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/3 bg-white shadow-xl rounded-lg flex flex-col gap-5 px-4 md:px-7 py-5"
                    >
                        <div className="font-extrabold text-3xl">SIGN IN</div>
                        <div className="text-md">Please enter your credentials. Will not be shared publicly</div>
                        <Input
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            error={touched.email && errors.email}
                        />
                        <Input
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            error={touched.password && errors.password}
                        />
                        <Button className="bg-red-600 py-4 hover:bg-red-700" type="submit">
                            Sign In
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

SignInPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default SignInPage;
