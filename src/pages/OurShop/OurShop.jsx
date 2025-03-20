import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import { OurShopProvider } from '@contexts/OurShopProvider';
import Banner from '@pages/OurShop/Components/Banner';
import Filter from '@pages/OurShop/Components/Filter';
import ListProducts from '@pages/OurShop/Components/ListProducts';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';


const OurShop = () => {
    const { container, functionBox, specialText, btnBack } = styles;

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        // OurShopProvider chỉ dùng được cho các component con của OurShop
        <OurShopProvider>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home &gt; <span className={specialText}>shop</span>
                        </div>
                        <div className={btnBack} onClick={handleBack}>
                            {' '}
                            &lt; Return to previous page{' '}
                        </div>
                    </div>
                </div>
                <Banner /> {/*  Banner sử dụng OurShopProvider */}
                <div>
                    <Filter />
                    <ListProducts />
                </div>
            </MainLayout>
            <MyFooter />
        </OurShopProvider>
    );
};

export default OurShop;
