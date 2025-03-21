import Login from '@components/Auth/Login';
import Register from '@components/Auth/Register';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.scss';

function Auth() {
    const [isLoginView, setIsLoginView] = useState(true);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const register = searchParams.get('register');
        if (register === 'true') {
            setIsLoginView(false);
        }
    }, [searchParams]);

    return (
        <div className={styles.authPage}>
            {isLoginView ? (
                <Login onSwitchToRegister={() => setIsLoginView(false)} />
            ) : (
                <Register onSwitchToLogin={() => setIsLoginView(true)} />
            )}
        </div>
    );
}

export default Auth; 