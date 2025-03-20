import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import React from 'react';
import Steps from './components/steps/steps';
import Content from './components/content/content';
import style from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';

const Cart = () => {
    const { container } = style;

    return (
        <div>
            <MyHeader />
            <div className={container}>
                <Steps />
                <MainLayout>
                    <Content />
                </MainLayout>
            </div>

            <MyFooter />
        </div>
    );
};

export default Cart;
