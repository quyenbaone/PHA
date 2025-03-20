import { OurShopContext } from '@/contexts/OurShopProvider';
import Button from '@components/Button/Button';
import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import { useContext } from 'react';
import styles from '../styles.module.scss';

import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';


const ListProducts = () => {
    const {
        products,
        isShowGrid,
        isLoading,
        handleLoadMore,
        total,
        isLoadMore
    } = useContext(OurShopContext);

    const { containerProduct, sectionListProducts, rotate } = styles;


    return (
        <div className={sectionListProducts}>
            <MainLayout>
                {isLoading ? (
                    <>Loading.......</>
                ) : (
                    <>
                        <div
                            className={isShowGrid ? containerProduct : ''}
                            style={{ cursor: 'pointer' }}
                        >
                            {products.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    // src={item.images[0]}
                                    src="https://matbienviet.com/Uploads/images/nhung-hieu-biet-co-ban-v%C3%A0can-thiet-ve-van-cheo-sup-1.JPG"
                                    // prevSrc={item.images[1]}
                                    prevSrc={"https://matbienviet.com/Uploads/images/nhung-hieu-biet-co-ban-v%C3%A0can-thiet-ve-van-cheo-sup-1.JPG"}
                                    name={item.name}
                                    price={item.price}
                                    details={item}
                                    isHomepage={false}
                                />
                            ))}
                        </div>

                        {products.length < total && (
                            <div
                                style={{
                                    width: '180px',
                                    margin: '50px auto'
                                }}
                            >
                                <Button
                                    content={
                                        isLoadMore ? (
                                            <LoadingTextCommon />
                                        ) : (
                                            'LOAD MORE PRODUCT'
                                        )
                                    }
                                    onClick={handleLoadMore}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    );
};

export default ListProducts;
