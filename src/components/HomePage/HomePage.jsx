import { getProducts } from '@/apis/productsService';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Banner from '@components/Banner/Banner';
import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import HeadingListProducts from '@components/HeadingListProduct/HeadingListProducts';
import Info from '@components/Info/Info';
import PopularProductTemp from '@components/PopularProductTemp/PopularProductTemp';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';
import { useEffect, useState } from 'react';
function HomePage() {
    const [listProducts, setListProducts] = useState([]);

    const productData = [
        {
            "_id": "7fe1061c-4078-4630-a4e3-b5e3ed04fc46",
            "name": " eleifenScelerisqued",
            "price": 435,
            "description": "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
            "type": "2",
            "size": [
                {
                    "name": "S",
                    "amount": "1000"
                },
                {
                    "name": "M",
                    "amount": "1000"
                },
                {
                    "name": "L",
                    "amount": "1000"
                }
            ],
            "material": "Jeans, Polyester, Cotton",
            "images": [
                "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.1-min.jpg",
                "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg",
                "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.3-min.jpg",
                "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.4-min.jpg"
            ],
            "deletedAt": null,
            "createdAt": "2024-07-31T04:38:49.296Z",
            "updatedAt": "2024-07-31T04:38:49.296Z",
            "__v": 0
        },
        {
            "_id": "8e5d1a42-a60f-491a-9454-457692235687",
            "name": "10K Yellow Gold",
            "price": 99.99,
            "description": "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
            "type": "2",
            "size": [
                {
                    "name": "S",
                    "amount": "1000"
                },
                {
                    "name": "M",
                    "amount": "1000"
                },
                {
                    "name": "L",
                    "amount": "1000"
                }
            ],
            "material": "Fleece",
            "images": [
                "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
                "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg",
                "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.3-min.jpg",
                "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.4-min.jpg"
            ],
            "deletedAt": null,
            "createdAt": "2024-07-31T04:41:17.176Z",
            "updatedAt": "2024-07-31T04:41:17.176Z",
            "__v": 0
        },
        {
            "_id": "2b49954d-ce18-406f-8426-112bea18d426",
            "name": "Máy ảnh",
            "price": 119.99,
            "description": "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
            "type": "1",
            "size": [
                {
                    "name": "M",
                    "amount": "1000"
                },
                {
                    "name": "L",
                    "amount": "1000"
                }
            ],
            "material": "Fleece",
            "images": [
                "https://cdn.vjshop.vn/tin-tuc/huong-dan-chon-mua-may-anh-cho-nguoi-moi-bat-dau/mua-may-anh-cho-nguoi-moi-bat-dau-5.jpg",
                "https://cdn.vjshop.vn/tin-tuc/huong-dan-chon-mua-may-anh-cho-nguoi-moi-bat-dau/mua-may-anh-cho-nguoi-moi-bat-dau-5.jpg",
                "https://cdn.vjshop.vn/tin-tuc/huong-dan-chon-mua-may-anh-cho-nguoi-moi-bat-dau/mua-may-anh-cho-nguoi-moi-bat-dau-5.jpg",
                "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.4-min.jpg"
            ],
            "deletedAt": null,
            "createdAt": "2024-07-31T04:47:48.673Z",
            "updatedAt": "2024-07-31T04:47:48.673Z",
            "__v": 0
        },
        {
            "_id": "d8f4c49e-5ba1-4cee-b5c9-a89986f1b431",
            "name": "Máy ảnh",
            "price": 879.99,
            "description": "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
            "type": "1",
            "size": [
                {
                    "name": "M",
                    "amount": "1000"
                },
                {
                    "name": "L",
                    "amount": "1000"
                }
            ],
            "material": "Fleece, Polyester, Cotton, Elastane",
            "images": [
                "https://cdn.nguyenkimmall.com/images/companies/_1/SEO/may-anh-dslr-kich-thuoc-lon.jpg",
                "https://cdn.nguyenkimmall.com/images/companies/_1/SEO/may-anh-dslr-kich-thuoc-lon.jpg",
                "https://cdn.nguyenkimmall.com/images/companies/_1/SEO/may-anh-dslr-kich-thuoc-lon.jpg",
                "https://cdn.nguyenkimmall.com/images/companies/_1/SEO/may-anh-dslr-kich-thuoc-lon.jpg"
            ],
            "deletedAt": null,
            "createdAt": "2024-07-31T04:52:26.610Z",
            "updatedAt": "2024-07-31T04:52:26.610Z",
            "__v": 0
        },
        {
            "_id": "29150ab8-c915-4c79-a75c-c6e66682d7b7",
            "name": "SUP",
            "price": 434.2,
            "description": "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
            "type": "1",
            "size": [
                {
                    "name": "M",
                    "amount": "1000"
                },
                {
                    "name": "L",
                    "amount": "1000"
                }
            ],
            "material": "Fleece, Polyester, Cotton, Elastane",
            "images": [
                "https://matbienviet.com/Uploads/images/nhung-hieu-biet-co-ban-v%C3%A0can-thiet-ve-van-cheo-sup-1.JPG",
                "https://matbienviet.com/Uploads/images/nhung-hieu-biet-co-ban-v%C3%A0can-thiet-ve-van-cheo-sup-1.JPG",
                "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.3-min.jpg",
                "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-18.4-min.jpg"
            ],
            "deletedAt": null,
            "createdAt": "2024-07-31T04:58:00.015Z",
            "updatedAt": "2024-07-31T04:58:00.015Z",
            "__v": 0
        },
        {
            "_id": "fee516e1-f0e7-4fec-beab-abe9990b4f44",
            "name": "SUP",
            "price": 120.3,
            "description": "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
            "type": "2",
            "size": [
                {
                    "name": "S",
                    "amount": "1000"
                },
                {
                    "name": "M",
                    "amount": "1000"
                },
                {
                    "name": "L",
                    "amount": "1000"
                }
            ],
            "material": "Cotton, Elastane",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDtuskJ7cvMjqtqYode0pH512Qo38uMTg_g&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDtuskJ7cvMjqtqYode0pH512Qo38uMTg_g&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDtuskJ7cvMjqtqYode0pH512Qo38uMTg_g&s"
            ],
            "deletedAt": null,
            "createdAt": "2024-07-31T06:12:21.882Z",
            "updatedAt": "2024-07-31T06:12:21.882Z",
            "__v": 0
        },
        {
            "_id": "bb35a2c4-4954-4656-b014-475d30d14d86",
            "name": "Loa",
            "price": 304.89,
            "description": "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
            "type": "1",
            "size": [
                {
                    "name": "S",
                    "amount": "1000"
                },
                {
                    "name": "M",
                    "amount": "1000"
                },
                {
                    "name": "L",
                    "amount": "1000"
                }
            ],
            "material": "Polyester, Cotton, Elastane",
            "images": [
                "https://dichvunhanh24h.net/wp-content/uploads/2024/10/loa-keo-da-nang.jpg",
                "https://dichvunhanh24h.net/wp-content/uploads/2024/10/loa-keo-da-nang.jpg",
                "https://dichvunhanh24h.net/wp-content/uploads/2024/10/loa-keo-da-nang.jpg"
            ],
            "deletedAt": null,
            "createdAt": "2024-07-31T06:35:50.005Z",
            "updatedAt": "2024-07-31T06:35:50.005Z",
            "__v": 0
        },
        {
            "_id": "3d1ed711-0282-423f-870c-a6f6d4640993",
            "name": "Loa",
            "price": 290.2,
            "description": "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
            "type": "3",
            "size": [
                {
                    "name": "S",
                    "amount": "1000"
                },
                {
                    "name": "M",
                    "amount": "1000"
                },
                {
                    "name": "L",
                    "amount": "1000"
                }
            ],
            "material": "Polyester, Cotton, Elastane",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34NTIBmfEC9mxrpS4y3ROBtxQzjajk_AJ3g&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34NTIBmfEC9mxrpS4y3ROBtxQzjajk_AJ3g&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34NTIBmfEC9mxrpS4y3ROBtxQzjajk_AJ3g&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34NTIBmfEC9mxrpS4y3ROBtxQzjajk_AJ3g&s"
            ],
            "deletedAt": null,
            "createdAt": "2024-07-31T06:38:31.747Z",
            "updatedAt": "2024-07-31T06:38:31.747Z",
            "__v": 0
        },
        {
            "_id": "1fae8e4a-4183-4581-8832-5de4517d57da",
            "name": "Lều",
            "price": 38.99,
            "description": "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
            "type": "2",
            "size": [
                {
                    "name": "S",
                    "amount": "1000"
                },
                {
                    "name": "M",
                    "amount": "1000"
                },
                {
                    "name": "L",
                    "amount": "1000"
                }
            ],
            "material": "Polyester, Cotton, Elastane",
            "images": [
                "https://www.nature-hike.vn/wp-content/uploads/2020/08/leu-cam-trai-mong-co-NatureHike-NH20ZP005.jpg",
                "https://www.nature-hike.vn/wp-content/uploads/2020/08/leu-cam-trai-mong-co-NatureHike-NH20ZP005.jpg",
                "https://www.nature-hike.vn/wp-content/uploads/2020/08/leu-cam-trai-mong-co-NatureHike-NH20ZP005.jpg"
            ],
            "deletedAt": null,
            "createdAt": "2024-07-31T06:40:18.248Z",
            "updatedAt": "2024-07-31T06:40:18.248Z",
            "__v": 0
        },
        {
            "_id": "760fe090-f049-4286-829f-d34e091a05d1",
            "name": "Lều",
            "price": 119.99,
            "description": "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
            "type": "1",
            "size": [
                {
                    "name": "M",
                    "amount": "1000"
                },
                {
                    "name": "L",
                    "amount": "1000"
                }
            ],
            "material": "Fleece, Polyester, Cotton, Elastane",
            "images": [
                "https://thueleugiare.com/wp-content/uploads/2023/06/nhung-luu-y-khi-thue-leu-cam-trai.jpg",
                "https://thueleugiare.com/wp-content/uploads/2023/06/nhung-luu-y-khi-thue-leu-cam-trai.jpg",
                "https://thueleugiare.com/wp-content/uploads/2023/06/nhung-luu-y-khi-thue-leu-cam-trai.jpg",
                "https://thueleugiare.com/wp-content/uploads/2023/06/nhung-luu-y-khi-thue-leu-cam-trai.jpg"
            ],
            "deletedAt": null,
            "createdAt": "2024-07-31T06:42:21.382Z",
            "updatedAt": "2024-07-31T06:42:21.382Z",
            "__v": 0
        }
    ]

    useEffect(() => {

        const query = {
            sortType: 0,
            page: 1,
            limit: 10
        }

        getProducts(query).then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    // console.log('List product', listProducts);

    return (
        <>
            {/* Header  */}
            <MyHeader />
            {/* End Header  */}
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts data={listProducts.slice(0, 2)} />
            {/* <PopularProduct data={listProducts.slice(2, listProducts.length)} /> */}
            <PopularProductTemp data={productData.slice(2, productData.length)} />

            <SaleHomepage />
            <MyFooter />
        </>
    );
}

export default HomePage;
