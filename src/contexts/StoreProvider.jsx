import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getInfo } from '@/apis/authService';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [userId, setUserId] = useState(Cookies.get('userId'));
   
    const handleLogOut = () => { //xử lý đăng xuất
        Cookies.remove('userId');
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        setUserInfo(null);
        window.location.reload();
    }

    useEffect(() => {
        if (userId) {
            getInfo(userId)
                .then((res) => {
                    console.log('res', res);
                    setUserInfo(res.data.data);
                })
                .catch((err) => {
                    console.log('err', err);
                });
        }
    }, [userId]); 

    console.log('userInfo', userInfo);
    return (
        <StoreContext.Provider value={{ userInfo, handleLogOut, setUserId }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
