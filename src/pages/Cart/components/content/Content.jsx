import React, { useContext } from 'react';
import style from '../../styles.module.scss';
import CartTable from './CartTable';
import CartSummary from './CartSummary';
import Button from '@components/Button/Button';
import { FaRegTrashCan } from 'react-icons/fa6';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { addProductToCart, deleteItem, deleteCart } from '@/apis/cartService';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ToastContext } from '@/contexts/ToastProvider';
const Content = () => {
    const {
        containerContents,
        fotterContent,
        couponCode,
        btnFotterContent,
        boxEmptyCart,
        titleEmpty,
        desEmpty
    } = style;

    const navigate = useNavigate();

    const {toast} = useContext(ToastContext);

    const {
        listProductCart,
        handleGetListProductCart,
        isLoading,
        setIsLoading,
        userId
    } = useContext(SideBarContext);

    const handleReplaceQuantity = (data) => {
        setIsLoading(true); // thay vì nhấn rồi chờ thì set loading cho load lại khi set quantity
        addProductToCart(data)
            .then((res) => {
                toast.success('Update quantity success');
                handleGetListProductCart(data.userId, 'cart');
            })
            .catch((err) => {
                toast.error('Update quantity fail!');
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleDeleteItemCart = (data) => {
        setIsLoading(true);
        deleteItem(data)
            .then((res) => {
                toast.success('Delete item success');
                handleGetListProductCart(data.userId, 'cart');
            })
            .catch((err) => {
                toast.error('Delete item fail');
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleDeleteCart = () => {
        console.log('userId', userId);
        setIsLoading(true);
        deleteCart({ userId })
            .then((res) => {
                toast.success('Delete all item in cart success!');
                handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
                toast.error('Delete all item in cart fail!');
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleNavigateToShop = () => {
        navigate('/shop');
    };

    return (
        <>
            {listProductCart.length > 0 && userId ? (
                <div className={containerContents}>
                    <div>
                        <CartTable
                            listProductCart={listProductCart}
                            getData={handleReplaceQuantity}
                            isLoading={isLoading}
                            getDataDelete={handleDeleteItemCart}
                        />
                        <div className={fotterContent}>
                            <div className={couponCode}>
                                <input type='text' placeholder='Coupon Code' />
                                <Button
                                    content={'OK'}
                                    isPriamry={false}
                                    style={{
                                        width: '36px',
                                        height: '36.99px',
                                        borderRadius: '0'
                                    }}
                                />
                            </div>

                            <div className={btnFotterContent}>
                                <Button
                                    content={
                                        <>
                                            <FaRegTrashCan /> Clear Shopping
                                            Cart
                                        </>
                                    }
                                    isPriamry={false}
                                    style={{
                                        width: '100%',
                                        height: '34px',
                                        padding: '10.5px 34.5px'
                                    }}
                                    onClick={handleDeleteCart}
                                />
                            </div>
                        </div>
                    </div>

                    <CartSummary />
                </div>
            ) : (
                <div className={boxEmptyCart}>
                    <AiOutlineShoppingCart style={{ fontSize: '50px' }} />
                    <div className={titleEmpty}>
                        YOUR SHOPPING CART IS EMPTY
                    </div>
                    <div className={desEmpty}>
                        We invite you to get acquainted with an assortment of
                        our shop. Surely you can find something for yourself!
                    </div>
                    <div>
                        <Button
                            content={'RETURN TO SHOP'}
                            style={{
                                width: '164px',
                                height: '35px',
                                padding: '6px',
                                fontSize: '12px'
                            }}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Content;
