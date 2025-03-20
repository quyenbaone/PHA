
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getCard } from '@/apis/cartService';
import Cookies from 'js-cookie';

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
    //dùng để mở sidebar
    const [isOpen, setIsOpen] = useState(false);

    // dùng cho sidebar components
    const [type, setType] = useState('');

    const [listProductCart, setListProductCart] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [detailProduct, setDetailProduct] = useState(null);
    const userId = Cookies.get('userId');
  

    const handleGetListProductCart = (userId, type) => {
        setIsLoading(true);
        if (userId && type === 'cart') { // nếu type là cart thì mới gọi api 
            getCard(userId)
                .then((res) => {
                    setListProductCart(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setListProductCart([]); // nếu lỗi thì set list rỗng
                    setIsLoading(false);
                });
        }
    };

    const value = {
        isOpen,
        setIsOpen,
        type,
        setType,
        handleGetListProductCart,
        listProductCart,
        isLoading,
        setIsLoading,
        userId,
        detailProduct,
        setDetailProduct,
    };

    useEffect(() => {
        handleGetListProductCart(userId, 'cart'); // gọi api khi component render 
    },[])

    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};
