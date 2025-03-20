import React, { useContext, useEffect, useState } from 'react';
import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik'; //formik giúp xử lý form
import * as Yup from 'yup';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn, getInfo } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/StoreProvider';



function Login() {
    const { container, title, boxRememberMe, lostPw, errors } = styles;

    //Register
    const [openRegister, setOpenRegister] = useState(false);

    const { toast } = useContext(ToastContext);

    // chặn người dùng nhấn spam
    const [loading, setLoading] = useState(false);

    const {setIsOpen,   handleGetListProductCart} = useContext(SideBarContext);

    const {setUserId} = useContext(StoreContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Password must match'
            )
        }),

        
        onSubmit: async (values) => {
            // Handle form submission
            // console.log(values);

            if (loading) return;
            const { email: username, password } = values;
            setLoading(true);

            if (openRegister) {
                await register({ username, password })
                    .then((res) => {
                        toast.error(res.data.message);
                        setLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setLoading(false);
                    });
            }

            if (!openRegister) {
                await signIn({ username, password })
                    .then((res) => {
                        setLoading(false);
                        const { id, refreshToken, token } = res.data;
                        setUserId(id);
                        // console.log('Res', res);
                        Cookies.set('userId', id);
                        Cookies.set('token', token);
                        Cookies.set('refreshToken', refreshToken);
                        toast.success('Sign in successfully!');
                        setIsOpen(false);
                        handleGetListProductCart(id, 'cart');
                    })
                    .catch((err) => {
                        setLoading(false);
                        toast.error("Sign in failed! Please check your account's information");
                    });
            }
        }
    });

    const handleToggle = () => {
        setOpenRegister(!openRegister);
    };



    return (
        <div className={container}>
            <div className={title}>{openRegister ? 'SIGN UP' : 'SiGN IN'}</div>

            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    name='email'
                    label='Email'
                    type='text'
                    isRequired
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                    formik={formik}
                />
                {/* touched là out khỏi forcus tức đang nhập xong chuyển ô có lỗi thì báo
                {formik.touched.email && formik.errors.email && (
                    <div className={errors}>{formik.errors.email}</div>
                )} */}
                <InputCommon
                    id='password'
                    name='password'
                    label='Password'
                    type='password'
                    isRequired
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values.password}
                    formik={formik}
                />
                {/* {formik.touched.password && formik.errors.password && (
                    <div className={errors}>{formik.errors.password}</div>
                )} */}

                {openRegister && (
                    <InputCommon
                        id='confirmPassword'
                        name='confirmPassword'
                        label='Confirm password'
                        type='password'
                        isRequired
                        formik={formik}
                    />
                )}

                {!openRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}

                <Button
                    content={
                        loading
                            ? 'LOADING.....'
                            : openRegister
                            ? 'REGISTER'
                            : 'LOGIN'
                    }
                    type='submit'
                    // onClick={() => toast.success('Sign in successfully!')}
                />
            </form>

            <Button
                type='submit'
                content={
                    openRegister
                        ? 'Already have an account?'
                        : 'Do not have an account?'
                }
                isPriamry={false}
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />
            {!openRegister && <div className={lostPw}>Lost your password?</div>}
        </div>
    );
}

export default Login;
