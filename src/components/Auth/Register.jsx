import Button from '@components/Button/Button';
import { useState } from 'react';
import { FiLock, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

function Register({ onSwitchToLogin }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) {
            newErrors.fullName = 'Họ tên là bắt buộc';
        }
        if (!formData.email) {
            newErrors.email = 'Email là bắt buộc';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }
        if (!formData.phone) {
            newErrors.phone = 'Số điện thoại là bắt buộc';
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = 'Số điện thoại không hợp lệ';
        }
        if (!formData.password) {
            newErrors.password = 'Mật khẩu là bắt buộc';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            // TODO: Implement actual registration API call here
            console.log('Register with:', formData);
            // Redirect after successful registration
            navigate('/');
        } catch (error) {
            console.error('Registration error:', error);
            setErrors({ submit: 'Đăng ký thất bại. Vui lòng thử lại.' });
        }
    };

    return (
        <div className={styles.authContainer}>
            <h2 className={styles.title}>Đăng ký</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <div className={styles.inputWithIcon}>
                        <FiUser className={styles.icon} />
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Họ tên"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={errors.fullName ? styles.errorInput : ''}
                        />
                    </div>
                    {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <div className={styles.inputWithIcon}>
                        <FiMail className={styles.icon} />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? styles.errorInput : ''}
                        />
                    </div>
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <div className={styles.inputWithIcon}>
                        <FiPhone className={styles.icon} />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Số điện thoại"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? styles.errorInput : ''}
                        />
                    </div>
                    {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <div className={styles.inputWithIcon}>
                        <FiLock className={styles.icon} />
                        <input
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? styles.errorInput : ''}
                        />
                    </div>
                    {errors.password && <span className={styles.error}>{errors.password}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <div className={styles.inputWithIcon}>
                        <FiLock className={styles.icon} />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Xác nhận mật khẩu"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={errors.confirmPassword ? styles.errorInput : ''}
                        />
                    </div>
                    {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
                </div>

                {errors.submit && <div className={styles.error}>{errors.submit}</div>}

                <Button
                    type="submit"
                    content="ĐĂNG KÝ"
                    style={{ width: '100%', marginTop: '20px' }}
                />

                <p className={styles.switchText}>
                    Đã có tài khoản?{' '}
                    <span onClick={onSwitchToLogin} className={styles.switchLink}>
                        Đăng nhập ngay
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Register; 