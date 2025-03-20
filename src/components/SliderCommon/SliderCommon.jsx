import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import './style.css';

const SliderCommon = ({ data }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <MdKeyboardArrowRight />,
        prevArrow: <MdKeyboardArrowLeft />
    };

    console.log('data', data);

    return (
        <Slider {...settings}>
            {data.map((item, index) => {
                return <img src={item} alt='ảnh detail' key={index} />;
            })}
        </Slider>
    );
};

export default SliderCommon;
