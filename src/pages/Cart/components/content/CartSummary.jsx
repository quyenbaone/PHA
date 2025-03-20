import Button from '@components/Button/Button';
import style from '../../styles.module.scss';
import cls from 'classnames';
import React, { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingCart from '../LoadingCart';
import { useNavigate } from 'react-router-dom';

const CartSummary = () => {
    const {
        containerSummary,
        title,
        boxTotal,
        subTotal,
        price,
        total,
        empty,
        containerMethods,
        containerRight,
        titleMethods,
        boxImgMethods,
        imgMethods,
        textSecure
    } = style;

    const { listProductCart, isLoading } = useContext(SideBarContext);

    const nagivate = useNavigate();

    const srcMethods = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
    ];

    const totalCart = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const formatTotalCart = totalCart.toFixed(2);

    const handleNavigateToShopping = () => {
        nagivate('/shop');
    };

    return (
        <div className={containerRight}>
            <div className={containerSummary}>
                <div className={title}>CART TOTALS</div>

                <div className={cls(boxTotal, subTotal)}>
                    <div>Subtotal</div>
                    <div className={price}>{formatTotalCart}$</div>
                </div>

                <div className={cls(boxTotal, total)}>
                    <div>TOTAL</div>
                    <div>{formatTotalCart}$</div>
                </div>

                <Button content={'PROCEED TO CHECKOUT'} />
                <div className={empty}></div>
                <Button
                    content={'CONTINUE SHOPPING'}
                    isPriamry={false}
                    onClick={handleNavigateToShopping}
                />

                {isLoading && (
                    <div>
                        <LoadingCart />
                    </div>
                )}
            </div>

            <div className={containerMethods}>
                <div className={titleMethods}>
                    Guaranteed <span>safe</span> checkout
                </div>

                <div className={boxImgMethods}>
                    {srcMethods.map((item, index) => (
                        <img
                            src={item}
                            alt='ảnh src'
                            className={imgMethods}
                            key={index}
                        />
                    ))}
                </div>
            </div>

            <div className={textSecure}>
                Your payment is <span>100% Secure</span>
            </div>
        </div>
    );
};

export default CartSummary;
