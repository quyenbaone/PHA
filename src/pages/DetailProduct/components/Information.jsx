import React from 'react';
import style from '../styles.module.scss';
const Information = () => {
    const { itemInfo, containerInfo, title, content } = style;

    const dataInfo = [
        {
            id: 1,
            title: 'Size:',
            content: 'L, M, S, XL'
        },
        {
            id: 2,
            title: 'Material:',
            content: 'Fleece'
        },
        {
            id: 3,
            title: 'Color:',
            content: 'Black, Blue, Grey, Green'
        }
    ];

    return (
        <div className={containerInfo}>
            {dataInfo.map((item, index) => (
                <div key={item.id} className={itemInfo}>
                    <div className={title}>{item.title}</div>
                    <div className={content}>{item.content}</div>
                </div>
            ))}
        </div>
    );
};

export default Information;
