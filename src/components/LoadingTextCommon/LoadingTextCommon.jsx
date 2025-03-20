import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import React from 'react';
import style from './style.module.scss';
const LoadingTextCommon = () => {
    const { rotate } = style;

    return (
        <div>
            <AiOutlineLoading3Quarters className={rotate} />
        </div>
    );
};

export default LoadingTextCommon;
