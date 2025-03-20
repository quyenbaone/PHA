import React, { useState } from 'react';
import style from './styles.module.scss';
import cls from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
function AccordionMenu({ titleMenu, contentMenuBox, onClick, isSelected}) {
    const {
        container,
        title,
        activeTitle,
        contentMenu,
        isVisibility,
        borderBottom
    } = style;

    console.log(isSelected);

    const handleToggle = () => {
        onClick();
    };

    

    return (
        <div className={container}>
            <div
                className={cls(title, { [activeTitle]: isSelected })}
                onClick={handleToggle}
            >
                {isSelected ? <TfiLayoutLineSolid /> : <IoIosArrowDown />}
                {titleMenu}
            </div>

            <div
                className={cls(contentMenu, borderBottom, {
                    [isVisibility]: isSelected,
                    [borderBottom]: isSelected
                })}
            >
                {contentMenuBox}
            </div>
        </div>
    );
}

export default AccordionMenu;
