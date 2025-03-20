import { getProducts } from '@/apis/productsService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import ProductItem from '@components/ProductItem/ProductItem';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.scss';

function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await getProducts({
                    sortType: 'default',
                    page: 1,
                    limit: 'all'
                });

                // Filter products based on search query
                const filteredProducts = response.products.filter(product =>
                    product.name.toLowerCase().includes(query.toLowerCase()) ||
                    product.description?.toLowerCase().includes(query.toLowerCase())
                );

                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchProducts();
        }
    }, [query]);

    if (loading) {
        return <LoadingTextCommon />;
    }

    return (
        <div className={styles.searchResults}>
            <h2 className={styles.searchTitle}>
                Kết quả tìm kiếm cho "{query}"
            </h2>
            {products.length === 0 ? (
                <p className={styles.noResults}>
                    Không tìm thấy sản phẩm nào phù hợp với từ khóa "{query}"
                </p>
            ) : (
                <div className={styles.productsGrid}>
                    {products.map((product) => (
                        <ProductItem
                            key={product._id}
                            src={product.images[0]}
                            prevSrc={product.images[1]}
                            name={product.name}
                            price={product.price}
                            details={product}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchResults; 