import React, { useContext } from 'react';
import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import cls from 'classnames';
import { OurShopContext } from '@contexts/OurshopProvider';
import SelectBox from './SelectBox';
const Filter = () => {
    const { containerFilter, boxLeft, boxIcon, selectBox, sort, show } = styles;

    const { sortOptions, showOptions, setSortId, setShowId, setIsShowGrid } =
        useContext(OurShopContext);

    const getValueSelect = (value, type) => {
        if (type === 'sort') {
            setSortId(value);
        } else if (type === 'show') {
            setShowId(value);
        }
    };

    const handleGetShowGrid = (type) => {
        if (type === 'grid') {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(false);
        }
    };

    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                <SelectBox
                    options={sortOptions}
                    getValue={getValueSelect}
                    type='sort'
                />

                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{ fontSize: '25px' }}
                        onClick={() => handleGetShowGrid('grid')}
                    />
                    <div
                        style={{
                            height: '20px',
                            width: '1px',
                            backgroundColor: '#e1e1e1'
                        }}
                    ></div>
                    <CiCircleList
                        style={{ fontSize: '27px', color: '#222' }}
                        onClick={() => handleGetShowGrid('list')}
                    />
                </div>
            </div>

            <div className={boxLeft}>
                <div
                    style={{
                        fontSize: '14px',
                        color: '#555'
                    }}
                >
                    Show
                </div>
                <SelectBox
                    options={showOptions}
                    getValue={getValueSelect}
                    type='show'
                />
            </div>
        </div>
    );
};

export default Filter;
