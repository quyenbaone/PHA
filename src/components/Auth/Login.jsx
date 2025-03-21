import { useAuth } from '@/contexts/AuthProvider';
import Button from '@components/Button/Button';
import { useState } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

function Login({ onSwitchToRegister }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { login } = useAuth();

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
        if (!formData.email) {
            newErrors.email = 'Email là bắt buộc';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }
        if (!formData.password) {
            newErrors.password = 'Mật khẩu là bắt buộc';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
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
            // TODO: Implement actual login API call here
            // Giả lập response từ API
            const userData = {
                email: formData.email,
                name: formData.email.split('@')[0], // Tạm thời lấy phần trước @ làm tên
            };

            login(userData);
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            setErrors({ submit: 'Đăng nhập thất bại. Vui lòng thử lại.' });
        }
    };

    return (
        <div className={styles.authContainer}>
            <h2 className={styles.title}>Đăng nhập</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
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

                {errors.submit && <div className={styles.error}>{errors.submit}</div>}

                <Button
                    type="submit"
                    content="ĐĂNG NHẬP"
                    style={{ width: '100%', marginTop: '20px' }}
                />

                <p className={styles.switchText}>
                    Chưa có tài khoản?{' '}
                    <span onClick={onSwitchToRegister} className={styles.switchLink}>
                        Đăng ký ngay
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Login; 