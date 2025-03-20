import React from 'react';
import { FaStar } from 'react-icons/fa';
import style from '../styles.module.scss';
const FormItem = ({ label, tyeChildren, isRequired }) => {
    const { formItem, boxItemStart } = style;

    const renderStar = (length) => {
        return Array.from({ length: length }, (item, index) => (
            <FaStar
                key={index}
                style={{
                    color: 'gold'
                }}
            />
        ));
    };

    const renderChildren = () => {
        switch (tyeChildren) {
            case 'rating':
                return (
                 <div className={boxItemStart}>
                    <div>{renderStar(1)}</div>
                    <div>{renderStar(2)}</div>
                    <div>{renderStar(3)}</div>
                    <div>{renderStar(4)}</div>
                    <div>{renderStar(5)}</div>
                 </div>
                )
            case 'input':
                return <input type='text' />;
            case 'textarea':
                return <textarea rows={10}></textarea>;
        }
    };

    return (
        <div className={formItem}>
            <label htmlFor=''>
                {label} {isRequired && <span>*</span>}
            </label>
            {renderChildren()}
        </div>
    );
};

export default FormItem;
