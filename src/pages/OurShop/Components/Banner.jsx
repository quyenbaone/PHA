// import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import React, { useContext } from 'react';
import Button from '@components/Button/Button';
import { OurShopContext } from '@/contexts/OurshopProvider';

import styles from '../styles.module.scss';

const Banner = () => {
    const { containerBanner, contentBox, title, boxBtn, countDownbox } = styles;

    const targetDate = '2025-12-31T00:00:00';

    const a = useContext(OurShopContext);


    console.log('useContext', a);

    return (

        <div className={containerBanner}>
            <div className={contentBox}>
                <div className={countDownbox}>
                    {/* <CountdownTimer targetDate={targetDate} /> */}
                </div>
                <div className={title}>The Classisics Make A Comeback</div>
                <div className={boxBtn}>
                    <Button content={'Buy now'} />
                </div>
            </div>
        </div>
    );
};

export default Banner;
