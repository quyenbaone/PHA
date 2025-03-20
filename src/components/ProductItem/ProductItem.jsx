import { addProductToCart } from '@/apis/cartService';
import { OurShopContext } from '@/contexts/OurShopProvider';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import Button from '@components/Button/Button';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import cls from 'classnames'; // này là thư viện giúp mình thêm class vào 1 element và thêm điều kiện vào class
import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { LiaEyeSolid, LiaShoppingBagSolid } from 'react-icons/lia';
import { TfiReload } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomepage = true
}) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largeImg,
        isActiveSize,
        btnClear
    } = styles;

    // const { isShowGrid } = useContext(OurShopContext);

    // console.log('isShowGrid', isShowGrid);

    const navigate = useNavigate();

    const [sizeChoose, setSizeChoose] = useState('');

    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);

    const userId = Cookies.get('userId');

    const { setIsOpen, setType, handleGetListProductCart, setDetailProduct } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleChooseSize = (size) => {
        console.log('size', size);
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };


    const handleAddtoCart = () => {
        console.log('userId', userId);
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Please login to add product to cart');
            return;
        }

        if (!sizeChoose) {
            toast.warning('Please choose size');
            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose
        };
        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                console.log('res', res);
                setIsOpen(true);
                setType('cart');
                toast.success('Add product to cart successfully');
                setIsLoading(false);
                handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
                console.log('err', err);
                setIsLoading(false);
            });
    };

    const handleShowDetailProductSideBar = () => {
        setIsOpen(true);
        setType('detail');
        // console.log('details', details);
        setDetailProduct(details);
    };

    const handleToDetailProduct = () => {
        console.log('details', details._id);

        const path = `/product/${details._id}`;
        navigate(path);
    };


    useEffect(() => {
        if (isHomepage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomepage, ourShopStore?.isShowGrid]);

    return (
        <div className={isShowGrid ? '' : containerItem} onClick={handleToDetailProduct}>
            <div className={cls(boxImg, { [largeImg]: !isShowGrid })}>
                <img src={src} alt='' />
                <img src={prevSrc} alt='' className={showImgWhenHover} />

                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <LiaShoppingBagSolid style={{ fontSize: '20px' }} />
                    </div>
                    <div className={boxIcon}>
                        <CiHeart style={{ fontSize: '20px' }} />
                    </div>
                    <div className={boxIcon}>
                        <TfiReload style={{ fontSize: '15px' }} />
                    </div>
                    <div className={boxIcon}>
                        <LiaEyeSolid
                            style={{ fontSize: '20px' }}
                            onClick={handleShowDetailProductSideBar}
                        />
                    </div>
                </div>
            </div>

            <div className={isShowGrid ? '' : content}>
                {!isHomepage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => (
                            <div
                                className={cls(size, {
                                    [isActiveSize]: item.name === sizeChoose // nếu item.name === sizeChoose thì thêm class isActiveSize vào
                                })}
                                key={index}
                                onClick={() => handleChooseSize(item.name)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}

                {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        clear
                    </div>
                )}

                <div
                    className={cls(title, {
                        [textCenter]: !isHomepage
                    })}
                >
                    {name}
                </div>

                {!isHomepage && (
                    <div
                        className={cls(textCenter)}
                        style={{
                            color: '#888'
                        }}
                    >
                        Brand 01
                    </div>
                )}

                <div
                    className={cls(priceCl, { [textCenter]: !isHomepage })}
                    style={{
                        color: isHomepage ? '#333' : '#888'
                    }}
                >
                    {price}$
                </div>

                {!isHomepage && (
                    <div className={cls(boxBtn, { [leftBtn]: !isHomepage })}>
                        <Button
                            content={
                                isLoading ? (
                                    <LoadingTextCommon />
                                ) : (
                                    'ADD TO CART'
                                )
                            }
                            onClick={handleAddtoCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
