import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import { Formik, Form } from 'formik';

import { Layout } from '../../app/components/layout';
import { Input } from '../../app/components/elements/input';
import { Button } from '../../app/components/elements/button';
import { useDispatch } from 'react-redux';
import { register } from '../../app/store/auth/slice';
import { registerSchema } from '../../app/validation/yup-register';

const SignUpPage: NextPage & { getLayout: any } = () => {
    const dispatch = useDispatch();
    const initialValues = {
        email: '',
        name: '',
        password: '',
    };
    return (
        <div className="flex h-full w-100 justify-center items-center">
            <Formik
                initialValues={initialValues}
                onSubmit={(values) =>
                    void dispatch(register({ email: values.email, name: values.name, password: values.password }))
                }
                validationSchema={registerSchema}
            >
                {({ values, handleChange, handleSubmit, touched, errors }) => (
                    <Form
                        onSubmit={handleSubmit}
                        className="w-100 xs:w-100 sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/3 bg-white shadow-xl rounded-lg flex flex-col gap-5 px-4 md:px-7 py-5"
                    >
                        <div className="font-extrabold text-3xl">SIGN UP</div>
                        <div className="text-md">All fields are required to register successfully</div>
                        <Input
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            error={touched.email && errors.email}
                        />
                        <Input
                            placeholder="Name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && errors.name}
                        />
                        <Input
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            error={touched.password && errors.password}
                        />
                        <Button className="bg-red-600 py-4 hover:bg-red-700" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default SignUpPage;
