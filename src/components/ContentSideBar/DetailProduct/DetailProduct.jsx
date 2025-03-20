import React, { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

import style from './styles.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import SelectBox from '@/pages/OurShop/Components/SelectBox';
import Button from '@components/Button/Button';
import { PiShoppingCart } from 'react-icons/pi';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';

import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
import cls from 'classnames';
import { addProductToCart } from '@/apis/cartService';
const DetailProduct = () => {
    const { detailProduct, userId, setType, handleGetListProductCart,  setIsLoading, setIsOpen } =
        useContext(SideBarContext);

    console.log('detailProduct', detailProduct);

    const {
        container,
        title,
        price,
        desc,
        boxSize,
        boxItem,
        label,
        boxAddToCart,
        boxOr,
        line,
        or,
        boxAddOther,
        boxFooter,
        isActive
    } = style;

    const showOptions = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 }
    ];

    const [chooseSize, setChooseSize] = useState('');
    const [quantity, setQuantity] = useState('1');

    const handleGetSize = (value) => {
        setChooseSize(value);
    };

    const handleClearSize = () => {
        setChooseSize('');
    };

    const handleGetQuantity = (value) => {
        setQuantity(value);
    };

    const handleAddToCart = () => {
        const data = {
            userId: userId,
            productId: detailProduct._id,
            quantity: quantity,
            size: chooseSize,
            isMultiple: true // để thay thế lại số lượng khi thêm vào giỏ hàng
        };
        setIsLoading(true);
        setIsOpen(false);// đóng modal khi thêm vào giỏ hàng
        addProductToCart(data)
            .then((res) => {
                setIsOpen(true); // mở modal khi thêm vào giỏ hàng thành công
                setType('cart');
               handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
                console.log('err', err);
            });
    };

    return (
        <div className={container}>
            <SliderCommon data={detailProduct.images} />
            <div className={title}>{detailProduct.name}</div>
            <div className={price}>${detailProduct.price}</div>
            <div className={desc}>{detailProduct.description}</div>
            <div className={label}>
                Size <span>{chooseSize}</span>
            </div>
            <div className={boxSize}>
                {detailProduct.size.map((item, index) => (
                    <div
                        key={index}
                        className={cls(boxItem, {
                            [isActive]: chooseSize === item.name // điều kiện để active ô lên
                        })}
                        onClick={() => handleGetSize(item.name)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            {chooseSize && (
                <div
                    style={{
                        fontSize: '12px',
                        marginTop: '3px',
                        cursor: 'pointer'
                    }}
                    onClick={() => handleClearSize()}
                >
                    Clear
                </div>
            )}

            <div className={boxAddToCart}>
                <SelectBox
                    options={showOptions}
                    defaultValue={quantity}
                    getValue={handleGetQuantity}
                />
                <div>
                    <Button
                        style={{ width: '190px' }}
                        content={
                            <>
                                <PiShoppingCart /> ADD TO CART
                            </>
                        }
                        onClick={handleAddToCart}
                    />
                </div>
            </div>

            <div className={boxOr}>
                <div className={line} />
                <div className={or}>OR</div>
                <div className={line} />
            </div>

            <Button
                style={{ marginTop: '10px' }}
                content={
                    <>
                        <PiShoppingCart /> BUY NOW
                    </>
                }
            />

            <div className={boxAddOther}>
                <TfiReload style={{ fontSize: '18px' }} />
                <div> Add to compare</div>
            </div>

            <div className={boxAddOther}>
                <CiHeart style={{ fontSize: '20px' }} />
                <div>Add to wishlist</div>
            </div>

            <div className={boxFooter}>
                SKU: <span>12346</span>
            </div>
            <div className={boxFooter}>
                Category:{' '}
                <span>
                    {detailProduct.category
                        ? detailProduct.category
                        : 'default'}
                </span>
            </div>
            <div className={boxFooter}>
                Estimated delivery: <span>3 - 5 days</span>
            </div>
            <div className={boxFooter}>
                Share:{' '}
                <span>
                    <FaXTwitter />
                    <FaFacebookF />
                </span>
            </div>
        </div>
    );
};

export default DetailProduct;
