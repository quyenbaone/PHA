import AccordionMenu from '@components/AccordionMenu';
import Button from '@components/Button/Button';
import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoReload } from 'react-icons/io5';
import style from './styles.module.scss';

import Information from './components/Information';
import Review from './components/Review';

const DetailProduct = () => {
    const {
        container,
        navigateSection,
        contentSection,
        imgeBox,
        infoBox,
        price,
        description,
        boxSize,
        size,
        titleSize,
        functionInfo,
        incremenAmout,
        boxBtn,
        orSection,
        line,
        orText,
        boxIcon,
        boxPayment,
        boxPaymentTitle,
        boxPaymentItem,
        paymentBottom,
        boxDetail
    } = style;

    const srcMethods = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
    ];

    const [menuSelected, setMenuSelected] = useState(1);

    const accordionMenu = [
        {
            id: 1,
            titileMenu: 'Additional information',
            content: <Information />
        },
        {
            id: 2,
            titileMenu: 'REVIEWS (0)',
            content: <Review />
        }
    ];

    const handleclickSelectedMenu = (index) => {
        setMenuSelected(index);
    };

    return (
        <div>
            <MyHeader />
            <div className={container}>
                <MainLayout>
                    <div className={navigateSection}>
                        <div>Home {'>'} Men</div>
                        <div style={{ cursor: 'pointer' }}>
                            {'<'} Return to previous page
                        </div>
                    </div>

                    <div className={contentSection}>
                        <div className={imgeBox}>
                            <img
                                src='https://matbienviet.com/Uploads/images/nhung-hieu-biet-co-ban-v%C3%A0can-thiet-ve-van-cheo-sup-1.JPG'
                                alt='ten'
                            />
                            <img
                                src='https://matbienviet.com/Uploads/images/nhung-hieu-biet-co-ban-v%C3%A0can-thiet-ve-van-cheo-sup-1.JPG'
                                alt='ten'
                            />
                            <img
                                src='https://matbienviet.com/Uploads/images/nhung-hieu-biet-co-ban-v%C3%A0can-thiet-ve-van-cheo-sup-1.JPG'
                                alt='ten'
                            />
                            <img
                                src='https://matbienviet.com/Uploads/images/nhung-hieu-biet-co-ban-v%C3%A0can-thiet-ve-van-cheo-sup-1.JPG'
                                alt='ten'
                            />
                        </div>

                        <div className={infoBox}>
                            <h1>Title Product</h1>
                            <p className={price}>$1,879.99</p>
                            <p className={description}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.
                            </p>
                            {/* <div className={titleSize}>Size</div>
                            <div className={boxSize}>
                                <div className={size}>L</div>
                                <div className={size}>M</div>
                                <div className={size}>S</div>
                            </div> */}
                            <div className={functionInfo}>
                                <div className={incremenAmout}>
                                    <div>-</div>
                                    <div>1</div>
                                    <div>+</div>
                                </div>

                                <div className={boxBtn}>
                                    <Button content={'Add to cart'} />
                                </div>
                            </div>
                            <div className={orSection}>
                                <div className={line} />
                                <div className={orText}>OR</div>
                                <div className={line} />
                            </div>
                            <div className={boxBtn}>
                                <Button content={'Buy now'} isPriamry={true} />
                            </div>
                            <div className={boxIcon}>
                                <CiHeart
                                    style={{
                                        fontSize: '25px',
                                        fontWeight: '400',
                                        border: '1px solid #e1e1e1',
                                        borderRadius: '50%',
                                        padding: '10px'
                                    }}
                                />
                                <IoReload
                                    style={{
                                        fontSize: '25px',
                                        fontWeight: '400',
                                        border: '1px solid #e1e1e1',
                                        borderRadius: '50%',
                                        padding: '10px'
                                    }}
                                />
                            </div>

                            <div className={boxPayment}>
                                <div className={boxPaymentTitle}>
                                    Guaranteed <span>safe</span> checkout
                                </div>
                                <div className={boxPaymentItem}>
                                    {srcMethods.map((item, index) => (
                                        <img
                                            src={item}
                                            alt='ảnh src'
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className={paymentBottom}>
                                <span>Your Payment</span> is 100% Secure
                            </div>

                            <div className={boxDetail}>
                                Brand: <span>Brand 01</span>
                            </div>
                            <div className={boxDetail}>
                                SKU: <span>1234</span>
                            </div>
                            <div className={boxDetail}>
                                Category: <span>Men</span>
                            </div>

                            {accordionMenu.map((item, index) => (
                                <AccordionMenu
                                    key={index}
                                    titleMenu={item.titileMenu}
                                    contentMenuBox={item.content}

                                    onClick={() =>
                                        handleclickSelectedMenu(item.id)
                                    }

                                    isSelected={menuSelected === item.id}
                                />
                            ))}
                        </div>
                    </div>
                </MainLayout>
                <MyFooter />
            </div>
        </div>
    );
};

export default DetailProduct;
