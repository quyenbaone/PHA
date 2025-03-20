import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/StoreProvider';
import { useNavigate } from 'react-router-dom';

function Menu({ content, href }) {
    const { menu, subMenu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);

    const { userInfo, handleLogOut } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    // console.log('userInfo', userInfo);

    const navigate = useNavigate();

    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsOpen(true);
            // bắt sự kiện nhấn sign in
            setType('login');
        }

        if (content === 'Our Shop') {
            navigate('/shop');
        }

    };

    const handleRenderContent = (content) => {
        if (content === 'Sign in' && userInfo) {
            return `Hello: ${userInfo.username}`;
        } else {
            return content;
        }
    };

    const handleHover = () => {
        if (content === 'Sign in' && userInfo) {
            setIsShowSubMenu(true);
        }
    };

    return (
        <div
            className={menu}
            onClick={handleClickShowLogin}
            onMouseEnter={handleHover}   // onMouseEnter là sự kiện khi hover vào element
        >
            {handleRenderContent(content)}

            {isShowSubMenu && (
                <div
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    className={subMenu}
                    onClick={handleLogOut}
                >
                    LOG OUT
                </div>
            )}
        </div>
    );
}

export default Menu;
