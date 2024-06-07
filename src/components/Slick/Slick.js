import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './Slick.module.scss';
import { useState, useEffect, useRef } from 'react';
import Menu from '~/Layout/DefaultLayout/Menu/MenuItem';

const cx = classNames.bind(styles);

function SampleNextArrow({
    onClick,
    hide = false,
    arrowNext = false,
    disabled = false,
}) {
    const props = { onClick };
    const classes = cx('slick-next', { hide, arrowNext, disabled });
    return <div className={classes} {...props} />;
}

function SamplePrevArrow({
    onClick,
    hide = false,
    arrowPrev = false,
    disabled = false,
}) {
    const props = { onClick };
    const classes = cx('slick-prev', { hide, arrowPrev, disabled });
    return <div className={classes} {...props} />;
}

const ARRAY_COLOR = [
    '#010c43',
    '#04109f',
    '#e5accd',
    '#e0d4a5',
    '#c2573c',
    '#e1d836',
    '#e11660',
    '#8d87e3',
    '#0a02ac',
    '#e4476e',
    '#d1e4af',
    '#d8d1cf',
];

export const SlickHome = ({ children, className }) => {
    const [state, setState] = useState({});
    const colorRef = useRef();

    useEffect(() => {
        let changeColor = colorRef.current;
        if (ARRAY_COLOR[0]) {
            changeColor.style.backgroundColor = ARRAY_COLOR[0];
        }
        ARRAY_COLOR.map((item, index) =>
            index === state.currentSlide
                ? (changeColor.style.backgroundColor = item)
                : '',
        );
        return () => {
            delete changeColor.style.backgroundColor;
            delete state.currentSlide;
        };
    }, [state.currentSlide]);

    const testSettings = {
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: '10px',
        height: '10px',
        color: '#fff',
        fontSize: '0px',
    };
    const setDefault = {
        backgroundColor: '#DDD',
        borderRadius: '50%',
        width: '10px',
        height: '10px',
        color: '#DDD',
        fontSize: '0px',
    };
    /*--------SLICK--------*/
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow hide />,
        prevArrow: <SamplePrevArrow hide />,
        beforeChange: (prev, next) => {
            setState({ currentSlide: next });
        },
        // afterChange: (index) => this.setState({ currentSlide: index }),
        appendDots: (dots) => {
            return (
                <div style={{ position: 'absolute', bottom: '12px' }}>
                    <ul style={{ paddingInlineStart: '0px' }}>
                        {dots.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    style={{ listStyleType: 'none' }}
                                >
                                    {item.props.children}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        },

        customPaging: (index) => {
            return (
                <div
                    style={
                        index === state.currentSlide ? testSettings : setDefault
                    }
                >
                    {index + 1}
                </div>
            );
        },
    };

    const lasses = cx('slick-slider', { [className]: className });
    return (
        <div className={cx('wrapper')} ref={colorRef}>
            <div className={cx('banner-show')}>
                <Menu />
                <Slider className={lasses} {...settings}>
                    {children}
                </Slider>
            </div>
        </div>
    );
};
//-----------------------------------------------------------------
export const SlickProducts = ({ listImg = [] }) => {
    const [state, setState] = useState({});
    const [show, setShow] = useState(false);
    const images = [];
    listImg.forEach((item) => item.forEach((i) => images.push(i)));

    const [hoveredImage, setHoveredImage] = useState(images[0]);
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 4,
        infinite: false,
        nextArrow:
            state.currentSlide > 1 ? (
                <SampleNextArrow arrowNext disabled />
            ) : (
                <SampleNextArrow arrowNext />
            ),
        prevArrow:
            state.currentSlide === 0 ? (
                <SamplePrevArrow arrowPrev disabled />
            ) : (
                <SamplePrevArrow arrowPrev />
            ),
        beforeChange: (prev, next) => {
            setState({ currentSlide: next });
        },
    };

    const handleMouseOver = (image) => {
        setHoveredImage(image);
    };

    const handleEnter = () => {
        setShow(true);
    };

    const handleLeave = () => {
        setShow(false);
    };
    return (
        <div className={cx('react-image-zoom-slickProducts-wrapper')}>
            <div className={cx('react-image-zoom')}>
                <div className={cx('react-image-zoom-slickProducts1')}>
                    <div>
                        <img
                            src={hoveredImage}
                            alt="img-prd"
                            width={330}
                            height={330}
                            onMouseEnter={handleEnter}
                            onMouseLeave={handleLeave}
                            style={{ cursor: 'zoom-in' }}
                        />
                    </div>
                    {show && (
                        <div className={cx('img-zoom')}>
                            <img
                                src={hoveredImage}
                                alt="img-prd"
                                width={830}
                                height={500}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className={cx('react-image-zoom-slickSlider')}>
                <Slider className={cx('slickProduct-slider2')} {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            {/* Hiển thị các ảnh */}
                            <img
                                src={image}
                                alt={`img ${index + 1}`}
                                width={50}
                                height={50}
                                className={cx('slickSlider-image')}
                                onMouseOver={() => handleMouseOver(image)} // Gửi sự kiện hover cho ảnh đó
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
