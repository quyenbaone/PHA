import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getProducts } from '@/apis/productsService';

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
    const sortOptions = [
        { label: 'Default sorting', value: '0' },
        { label: 'Sort by popularity', value: '1' },
        { label: 'Sort by average rating', value: '2' },
        { label: 'Sort by latest', value: '3' },
        { label: 'Sort by price: low to high', value: '4' },
        { label: 'Sort by price: high to low', value: '5' }
    ];

    const showOptions = [
        { label: '8', value: '8' },
        { label: '12', value: '12' },
        { label: 'All', value: 'all' }
    ];

    const [sortId, setSortId] = useState('0');
    const [showId, setShowId] = useState('8');
    const [isShowGrid, setIsShowGrid] = useState(true);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    const handleLoadMore = () => {
        const query = {
            sortType: sortId,
            page: +page,
            limit: showId
        };
        setIsLoadMore(true);
        getProducts(query) //do getProducts là async function nên phải dùng then catch mới tránh bị promise pending
            .then((res) => {
                setProducts((prev) => {
                   return [...prev, ...res.contents];
                }); // tạo một state đưa vào value để truyền xuống các component khác
                setPage(+res.page);
                setTotal(res.total);
                setIsLoadMore(false);

            })
            .catch((err) => {
                console.log('err', err);
                setIsLoadMore(false);
            });
    };

    const values = {
        sortOptions,
        showOptions,
        setSortId,
        setShowId,
        setIsShowGrid,
        products,
        isShowGrid,
        isLoading,
        handleLoadMore,
        total,
        isLoadMore
    };

    useEffect(() => {
        const query = {
            sortType: sortId,
            page: 1,
            limit: showId
        };
        setIsLoading(true);

        getProducts(query) //do getProducts là async function nên phải dùng then catch mới tránh bị promise pending
            .then((res) => {
                setProducts(res.contents); // tạo một state đưa vào value để truyền xuống các component khác
                setIsLoading(false);
                setTotal(res.total);
            })
            .catch((err) => {
                console.log('err', err);
                setIsLoading(false);
            });
    }, [sortId, showId]);

    return (
        <OurShopContext.Provider value={values}>
            {children}
        </OurShopContext.Provider>
    );
};
