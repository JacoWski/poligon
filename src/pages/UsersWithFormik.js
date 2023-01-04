import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import 'pages/UsersWithFormik.css';

const initialValues = {
    name: '',
    email: '',
    bio: '',
    gender: ''
};
const ERROR_MSG = 'To pole jest wymagane.';

const UsersWithFormik = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const bioRef = useRef();
    return(
        <div>
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const error = {};
                    if (!values.name) {
                        error.name = ERROR_MSG;
                        nameRef.current.style.border = '2px solid red';
                    }
                    if (!values.email) {
                        error.email = ERROR_MSG;
                        emailRef.current.style.border = '2px solid red';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        error.email = 'Invalid email address.';
                        emailRef.current.style.border = '2px solid red';
                    }
                    if (!values.bio) {
                        error.bio = ERROR_MSG;
                        bioRef.current.style.border = '2px solid red';
                    }
                    if (!values.gender) error.gender = ERROR_MSG;

                    return error;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                }}
            >
                {({ isSubmitting }) => (
                <Form className="formik-form">
                    <label>
                        Imię
                        <Field type="text" name="name" innerRef={nameRef} />
                    </label>
                    <ErrorMessage name="name" component={"div"} className={'formik-error'} />
                    <label>
                        E-mail
                        <Field type="email" name="email" innerRef={emailRef} />
                    </label>
                    <ErrorMessage name="email" component={"div"} className={'formik-error'} />
                    <label>
                        Opis
                        <Field type="textarea" name="bio" innerRef={bioRef} />
                    </label>
                    <ErrorMessage name="bio" component={"div"} className={'formik-error'} />
                    <div role={'group'}>
                        <label>
                            Męższczyzna
                            <Field type="radio" name="gender" values="men" />
                        </label>
                        <label>
                            Kobieta
                            <Field type="radio" name="gender" values="women" />
                        </label>
                    </div>
                    <ErrorMessage name="gender" component={'div'} className={'formik-error'} />
                    <button type="submit" >Submit</button>
                </Form>)}
            </Formik>
        </div>
    );
};

export default UsersWithFormik;
