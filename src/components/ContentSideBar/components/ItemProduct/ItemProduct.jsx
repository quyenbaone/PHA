import { deleteItem } from '@/apis/cartService';
import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity,
    productId,
    userId
}) {
    const {
        container,
        boxContent,
        title,
        price,
        boxClose,
        size,
        overlayLoading
    } = styles;
    const [isDelete, setIsDelete] = useState(false);

    const { handleGetListProductCart } = useContext(SideBarContext);

    const handleRemoveItem = () => {
        console.log(productId, userId);
        setIsDelete(true);
        deleteItem({
            productId,
            userId
        })
            .then((res) => {
                setIsDelete(false);
                handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
                setIsDelete(false);
            });
    };

    return (
        <div className={container}>
            <img src={src} alt='' />

            <div className={boxClose} onClick={handleRemoveItem}>
                <IoCloseOutline
                    style={{
                        fontSize: '25px',
                        color: 'c1c1c1'
                    }}
                />
            </div>

            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={size}>Size:{sizeProduct}</div>
                <div className={price}>
                    $ {quantity} x {priceProduct}
                </div>
                <div className={price}>SKU:{skuProduct}</div>
            </div>

            {isDelete && (
                <div className={overlayLoading}>
                    <LoadingTextCommon />
                </div>
            )}
        </div>
    );
}

//#14 20:23

export default ItemProduct;
