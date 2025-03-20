import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from './styles.module.scss';

function PopularProductTemp({ data = [] }) {
    const container = styles.container;
    return (
        <MainLayout>
            <div className={container}>
                {data.map((item, index) => (
                    <ProductItem
                        key={index}
                        src={item.images[0]}
                        prevSrc={item.images[1]}
                        name={item.name}
                        price={item.price}
                        details={item}

                    />
                ))}
            </div>
        </MainLayout>
    );
}

export default PopularProductTemp;
