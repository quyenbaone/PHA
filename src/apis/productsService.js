import axiosClient from './axiosClient';

const getProducts = async (query) => {

    const {sortType, page, limit} = query;

    const queryLimit = limit === 'all' ? '' : `&limit=${limit}`; //ở đây do all trên api là interger vì vậy nếu mình sẽ mặt định limit là số truyền vào 

    const res = await axiosClient.get(`/product?sort0Type=${sortType}&page=${page}&${queryLimit}`);

    return res.data;
};

export { getProducts };
