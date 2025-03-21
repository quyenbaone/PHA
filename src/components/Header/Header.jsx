// import Logo from '@/assets/icons/images/Anhpha_logo.jpg';
import { useAuth } from '@/contexts/AuthProvider';
import { SideBarContext } from '@/contexts/SideBarProvider';
import useScrollHandling from '@/hooks/useScrollHandling';
import Search from '@components/Search/Search';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCart } from 'react-icons/pi';
import { TfiReload } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader,
        boxCart,
        quantityCart,
        authButtons,
        loginButton,
        registerButton,
        userInfo,
        userName,
        logoutButton
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const { setIsOpen, setType, listProductCart } = useContext(SideBarContext);
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    const handleLogin = () => {
        navigate('/auth');
    };

    const handleRegister = () => {
        navigate('/auth?register=true');
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon
                                    key={item.type}
                                    type={item.type}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu
                                    key={item.content}
                                    content={item.content}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                </div>
                
                <div className={containerBox}>
                    <Search />
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px'
                            }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <BsHeart
                            style={{
                                fontSize: '20px'
                            }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <div className={boxCart}>
                            <PiShoppingCart
                                style={{
                                    fontSize: '25px'
                                }}
                                onClick={() => handleOpenSideBar('cart')}
                            />
                            <div className={quantityCart}>
                                {listProductCart.length}
                            </div>
                        </div>
                    </div>
                    <div className={authButtons}>
                        {user ? (
                            <div className={userInfo}>
                                <span className={userName}>Xin chào, {user.name}</span>
                                <button className={logoutButton} onClick={handleLogout}>
                                    Đăng xuất
                                </button>
                            </div>
                        ) : (
                            <>
                                <button className={loginButton} onClick={handleLogin}>
                                    Đăng nhập
                                </button>
                                <button className={registerButton} onClick={handleRegister}>
                                    Đăng ký
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
