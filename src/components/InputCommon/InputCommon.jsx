import React, { useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import styles from './styles.module.scss';

const InputCommon = ({ label, type, isRequired = false, ...props }) => {
    const { container, labelInput, boxInput, boxIcon, errMsg } = styles;

    const { formik, id } = props;

    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';

    const isShowPassword = type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isErr = formik.touched[id] && formik.errors[id];
    const messageErr = formik.errors[id];

    // console.log('props', props);

    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]} // truy xuất dynamic theo key từ thg cha \\ nếu ko dùng thì thg input nào cũng nhận giá trị default
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
                {isErr && <div className={errMsg}>{messageErr}</div>}
            </div>
        </div>
    );
};

export default InputCommon;
