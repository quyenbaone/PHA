import style from '../../styles.module.scss';
import React from 'react';
import cls from 'classnames';

const Stepper = ({ number, content, isDisable }) => {
    const {
        stepper,
        numberStep,
        textStep,
        isDisableNumber,
        isDisableText,
    } = style;

    return (
        <div className={stepper}>
            <div className={cls(numberStep, { [isDisableNumber]: isDisable })}>
                {number}
            </div>
            <div className={cls(textStep, { [isDisableText]: isDisable })}>
                {content}
            </div>
        </div>
    );
};

export default Stepper;
