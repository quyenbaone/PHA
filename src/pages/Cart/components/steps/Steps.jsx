import React from 'react';
import style from '../../styles.module.scss';
import Stepper from './Stepper';
import { number } from 'yup';

const Steps = () => {
    const { containerSteps, steps, line, textNoti } = style;

    const dataStep = [
        { number: 1, content: 'shopping cart' },
        { number: 2, content: 'Check out' },
        { number: 3, content: 'Order Status' }
    ];

    return (
        <div className={containerSteps}>
            <div className={steps}>
                {dataStep.map((item, index) => {
                    return (
                        <>
                            <Stepper
                                key={index}
                                number={item.number}
                                content={item.content}
                                isDisable={index !== 0}
                            />
                            {index !== dataStep.length - 1 && (
                                <div className={line}></div>
                            )}
                        </>
                    );
                })}
            </div>

            <div className={textNoti}>
                You are out of time! Checkout now to avoid losing your order!
            </div>
        </div>
    );
};

export default Steps;
