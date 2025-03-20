import Login from '@components/Auth/Login';
import Register from '@components/Auth/Register';
import { useState } from 'react';
import styles from './styles.module.scss';

function Auth() {
    const [isLoginView, setIsLoginView] = useState(true);

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