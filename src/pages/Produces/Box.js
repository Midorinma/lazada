/* eslint-disable no-sequences */
import classNames from 'classnames/bind';
import styles from './Produces.module.scss';
import Breadcrumbs from '~/components/Breadcrumbs';
import { slicks } from '~/components/Slick';
import StarRating from '~/components/StarRating';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRulerHorizontal,
    faShareNodes,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import React, {
    useState,
    useRef,
    useEffect,
    useContext,
    useCallback,
} from 'react';
import { resultItem } from './Result';
import Button from '~/components/Button';
import config from '~/config';
import SellerDelivery from './Delivery/SellerDelivery';
import SellerWarranty from './Warranty/SellerWarranty';
import { icons } from '~/components/icons';
import GuideApp from './GuideApp';
import { DataContext } from './Produces';
import SellerInfo from './SellerInfo';
import InfoProduct from './InfoProduct';
import Rating from './Rating';
import ProductAds from './ProductAds';
import PromotionTags from './Promotion/PromotionTags';
import { useDispatch, useSelector } from 'react-redux';
import { addValue } from '~/components/Store/actions/authActions';
import { format } from 'date-fns';
import Quantity from './Quantity';
import Login from './Login';
import { fetchData } from '~/components/Store/reducers/FetchData';
import storage from '~/components/Store/reducers/storage';
import { STORAGE_KEY } from '~/components/Store/actions/types';

const cx = classNames.bind(styles);

function Box() {
    const arr3 = [];
    const dispatch = useDispatch();
    const [compare, setCompare] = useState(0); //size compare to border color
    const [active, setActive] = useState(0);
    const [imgObj, setImgObj] = useState();
    const [sizeObj, setSizeObj] = useState({ type: null, sizes: null });
    const currentTime = new Date();
    const formattedTime = format(currentTime, 'dd-MM-yyyy');

    const wrapperRef = useRef();
    const quantityRef = useRef();

    const data = useContext(DataContext);
    const state = useSelector((state) => state.auth.isAuthenticated);

    const numberObj = resultItem.resultRandom();

    const handleAdd = () => {
        if (imgObj === undefined || sizeObj.sizes === null) {
            alert("You haven't selected a product image or size!");
            return;
        }
        const newProduct = {
            img: imgObj,
            title: data.title,
            colorFamily: colorText,
            size: `${sizeObj.type}:${sizeObj.sizes}`,
            time: formattedTime,
            quantity: `${quantityRef.current.value}`,
            order: numberObj,
            price: `${price}`,
            priceOld: `${data.priceOld}`,
            discount: `${data.discount}`,
        };
        dispatch(addValue(newProduct));
        dispatch(fetchData(storage.get(STORAGE_KEY)));
        alert('Added to cart successfully!');
    };
    //------Login------
    const handleLoginBlock = () => {
        const tempRef = wrapperRef.current;
        tempRef.style.display = 'block';
        document.body.style.overflowY = 'hidden';
    };
    const handleLoginNone = () => {
        const tempRef = wrapperRef.current;
        tempRef.style.display = 'none';
        document.body.style.overflowY = 'scroll';
    };

    useEffect(() => {
        const mode = wrapperRef.current;

        const resultTarget = (event) => {
            if (event.target === mode) {
                mode.style.display = 'none';
                document.body.style.overflowY = 'scroll'; /*Node Dom*/
            }
        };
        window.addEventListener('click', resultTarget);

        return () => {
            window.removeEventListener('click', resultTarget);
        };
    }, []);

    useEffect(() => {
        if (state === true) {
            handleLoginNone();
        }
    }, [state]);
    //----size_private----
    const arr1 = [];
    const arr2 = [];

    // eslint-disable-next-line no-sequences
    data.color_family.map(
        (item) => (
            arr2.push(item),
            arr1.push(item.Size_private),
            item.image_product.length < 20
                ? arr3.push(item.img)
                : arr3.push(item.image_product)
        ),
    );

    const [colorText, setColorText] = useState(
        arr2.map((item, index) => {
            return index === 0 ? item.color : false;
        }),
    );
    const [type, setType] = useState(
        arr1.map((item1, index1) =>
            index1 === 0
                ? item1.map((item2, index2) =>
                      index2 === 0 ? item2.type : null,
                  )
                : null,
        ),
    );

    const [price, setPrice] = useState(<resultItem.resultPrice arr1={arr1} />);

    const [priceOld, setPriceOld] = useState(
        <resultItem.resultPriceOld arr1={arr1} />,
    );

    const [discount, setDiscount] = useState(
        <resultItem.resultDiscount arr1={arr1} />,
    );

    //update price, discount, oldprice
    const handleClick = useCallback((item, index) => {
        arr1.forEach((item1, index1) =>
            index1 === active
                ? item1.forEach((item2, index2) =>
                      index === index2
                          ? (setPrice(item2.price),
                            setSizeObj((prev) => ({
                                ...prev,
                                type: item2.type,
                                sizes: item2.sizes,
                            })),
                            setPriceOld(item2.old_price),
                            setDiscount(item2.discount))
                          : false,
                  )
                : false,
        );
        setType(item.type);
        setCompare(index);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const variableSize = {
        border: '1px solid #f36f21',
        color: '#f57224',
        boxShadow: '0 2px 1px 0 rgba(0, 0, 0, 0.08)',
    };

    //------------Color family---------------
    const handleClickImage = useCallback((index) => {
        arr1.forEach((item1, index1) =>
            index1 === index
                ? item1.forEach((item2, index2) =>
                      index2 === compare
                          ? (setPrice(item2.price),
                            setPriceOld(item2.old_price),
                            setDiscount(item2.discount))
                          : false,
                  )
                : null,
        );
        arr3.forEach((item3, index3) => {
            if (index3 === index) {
                setImgObj(item3);
            }
        });
        setActive(index);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //-----------------------------------------------------
    return (
        <div className={cx('wrapper')}>
            <Breadcrumbs />
            <div className={cx('pdp-block__main-information')}>
                <div className={cx('pdp-block__gallery')}>
                    <slicks.SlickProducts listImg={[arr3]} />
                </div>
                <div className={cx('pdp-block__main-information-detail')}>
                    <div className={cx('pdp-block__product-detail')}>
                        <div className={cx('pdp-block')} />
                        <div className={cx('module_product_title_1')}>
                            <div className={cx('pdp-product-title')}>
                                <div
                                    className={cx(
                                        'pdp-mod-product-badge-wrapper',
                                    )}
                                >
                                    <h1
                                        className={cx(
                                            'pdp-mod-product-badge-title',
                                        )}
                                    >
                                        {data.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className={cx('pdp-block')}></div>
                        <div
                            className={cx(
                                'pdp-block__rating-questions-summary',
                            )}
                        >
                            <div className={cx('pdp-block__share')}>
                                <div className={cx('pdp-block')}>
                                    <div
                                        className={cx(
                                            'pdp-share__share-button',
                                        )}
                                    >
                                        <span
                                            className={cx(
                                                'pdp-share__share-button-icon',
                                            )}
                                        >
                                            <FontAwesomeIcon
                                                icon={faShareNodes}
                                                className={cx('lazada-icon')}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className={cx('pdp-block__heart')}>
                                    <div className={cx('pdp-mod-wishlist')}>
                                        <span className={cx('wishlist-icon')}>
                                            <icons.heartIcon />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <>star</> */}
                            <div className={cx('pdp-block__rating-questions')}>
                                <div
                                    className={cx('pdp-review-summary__stars')}
                                >
                                    <StarRating
                                        yellowstar
                                        smaller
                                        alt="image_star"
                                    />
                                    <StarRating
                                        yellowstar
                                        smaller
                                        alt="image_star"
                                    />
                                    <StarRating
                                        yellowstar
                                        smaller
                                        alt="image_star"
                                    />
                                    <StarRating
                                        yellowstar
                                        smaller
                                        alt="image_star"
                                    />
                                    <StarRating
                                        halfstar
                                        smaller
                                        alt="image_star"
                                    />
                                </div>
                                <NavLink
                                    className={cx(
                                        'pdp-review-summary__link-1',
                                        {
                                            pdp_link: true,
                                        },
                                    )}
                                >
                                    4547 Ratings
                                </NavLink>
                                <div
                                    className={cx(
                                        'pdp-review-summary__divider',
                                    )}
                                />
                                <NavLink
                                    className={cx(
                                        'pdp-review-summary__link-2',
                                        {
                                            pdp_link: true,
                                        },
                                    )}
                                >
                                    178 Answered Questions
                                </NavLink>
                            </div>
                        </div>
                        <div className={cx('module_product_brand_1')}>
                            <div className={cx('pdp-product-brand')}>
                                <span className={cx('pdp-product-brand__name')}>
                                    Brand:{' '}
                                </span>
                                <NavLink
                                    className={cx(
                                        'pdp-product-brand__brand-link-1',
                                    )}
                                >
                                    No Brand
                                </NavLink>
                                <div
                                    className={cx('pdp-product-brand__divider')}
                                ></div>
                                <NavLink
                                    className={cx(
                                        'pdp-product-brand__brand-link-2',
                                    )}
                                >
                                    More Men Clothing from No Brand
                                </NavLink>
                            </div>
                        </div>

                        <div className={cx('pdp-block module')} />

                        {/* <>Price</> */}
                        <div className={cx('module_product_price_1')}>
                            <div className={cx('pdp-mod-product-price')}>
                                <div className={cx('pdp-product-price')}>
                                    <span
                                        className={cx('pdp-price_color_orange')}
                                    >
                                        {data.currency}
                                        {price}
                                    </span>
                                    <div className={cx('origin-block')}>
                                        <span
                                            className={cx(
                                                'pdp-price_type_deleted',
                                            )}
                                        >
                                            {data.currency}
                                            {priceOld}
                                        </span>

                                        <span
                                            className={cx(
                                                'pdp-product-price__discount',
                                            )}
                                        >
                                            {discount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('module_product_attrs')} />

                        {/* <>Promotion Tags</> */}
                        <PromotionTags />

                        <div className={cx('module_installment')} />

                        {/* <>Color&Size</> */}
                        <div className={cx('module_sku-select')}>
                            <div className={cx('sku-selector')}>
                                <div className={cx('sku-prop')}>
                                    <div
                                        className={cx(
                                            'pdp-mod-product-info-section',
                                        )}
                                    >
                                        <h6 className={cx('section-title')}>
                                            Color Family
                                        </h6>
                                        <div className={cx('section-content')}>
                                            <div
                                                className={cx(
                                                    'sku-prop-content-header',
                                                )}
                                            >
                                                <span
                                                    className={cx('sku-name ')}
                                                >
                                                    {colorText}
                                                </span>
                                            </div>
                                            <div
                                                className={cx(
                                                    'sku-prop-content',
                                                )}
                                            >
                                                {arr2.map((item, index) =>
                                                    item.image_product.length >
                                                    30 ? (
                                                        <span
                                                            className={cx(
                                                                'sku-variable-img-wrap-selected',
                                                            )}
                                                            key={index}
                                                            onMouseOver={() =>
                                                                setColorText(
                                                                    item.color,
                                                                )
                                                            }
                                                            style={
                                                                index === active
                                                                    ? {
                                                                          border: '1px solid #f57224',
                                                                      }
                                                                    : {}
                                                            }
                                                            onClick={() =>
                                                                handleClickImage(
                                                                    index,
                                                                )
                                                            }
                                                        >
                                                            <div
                                                                className={cx(
                                                                    'pdp-common-image',
                                                                )}
                                                            >
                                                                <div
                                                                    className={cx(
                                                                        'lazyload-wrapper',
                                                                    )}
                                                                >
                                                                    <img
                                                                        src={
                                                                            item.image_product
                                                                        }
                                                                        alt="demo"
                                                                        width={
                                                                            32
                                                                        }
                                                                        height={
                                                                            32
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            {index ===
                                                                active && (
                                                                <span
                                                                    className={cx(
                                                                        'lzd-svg-icon',
                                                                    )}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faCheck
                                                                        }
                                                                        className={cx(
                                                                            'svgfont',
                                                                        )}
                                                                    />
                                                                </span>
                                                            )}
                                                        </span>
                                                    ) : (
                                                        <span
                                                            className={cx(
                                                                'sku-variable-name-selected',
                                                            )}
                                                            key={index}
                                                            onMouseOver={() =>
                                                                setColorText(
                                                                    item.color,
                                                                )
                                                            }
                                                            style={
                                                                index === active
                                                                    ? {
                                                                          border: '1px solid #f57224',
                                                                      }
                                                                    : {}
                                                            }
                                                            onClick={() =>
                                                                handleClickImage(
                                                                    index,
                                                                )
                                                            }
                                                        >
                                                            <span
                                                                className={cx(
                                                                    'sku-variable-name-text',
                                                                )}
                                                            >
                                                                {
                                                                    item.image_product
                                                                }
                                                            </span>
                                                            {index ===
                                                                active && (
                                                                <span
                                                                    className={cx(
                                                                        'lzd-svg-icon',
                                                                    )}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faCheck
                                                                        }
                                                                        className={cx(
                                                                            'svgfont',
                                                                        )}
                                                                    />
                                                                </span>
                                                            )}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('sku-prop')}>
                                    <div
                                        className={cx(
                                            'pdp-mod-product-info-section',
                                        )}
                                    >
                                        <h6 className={cx('section-title')}>
                                            Size
                                        </h6>
                                        <div className={cx('section-content')}>
                                            <div
                                                className={cx(
                                                    'sku-prop-content-header',
                                                )}
                                            >
                                                <span
                                                    className={cx(
                                                        'sku-size-drop-single',
                                                    )}
                                                >
                                                    <span
                                                        className={cx(
                                                            'sku-tabpath-single',
                                                        )}
                                                    >
                                                        {type}
                                                    </span>
                                                </span>
                                                <span
                                                    className={cx(
                                                        'sku-size-link',
                                                    )}
                                                >
                                                    <span
                                                        className={cx(
                                                            'sku-info-title',
                                                        )}
                                                    >
                                                        {data.Size_Guide}
                                                    </span>
                                                    <span
                                                        className={cx(
                                                            'sku-size-chart-icon',
                                                        )}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faRulerHorizontal
                                                            }
                                                            rotation={180}
                                                        />
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                className={cx(
                                                    'sku-prop-content',
                                                )}
                                            >
                                                {arr1.map((item1, index1) =>
                                                    index1 === active
                                                        ? item1.map(
                                                              (
                                                                  item2,
                                                                  index2,
                                                              ) => (
                                                                  <span
                                                                      className={cx(
                                                                          'sku-variable-size',
                                                                      )}
                                                                      key={
                                                                          index2
                                                                      }
                                                                      title={
                                                                          item2.sizes
                                                                      }
                                                                      style={
                                                                          index2 ===
                                                                          compare
                                                                              ? variableSize
                                                                              : {}
                                                                      }
                                                                      onClick={() => {
                                                                          handleClick(
                                                                              item2,
                                                                              index2,
                                                                          );
                                                                      }}
                                                                  >
                                                                      {
                                                                          item2.sizes
                                                                      }
                                                                  </span>
                                                              ),
                                                          )
                                                        : null,
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <>Quantity</> */}
                        <div className={cx('quantity-component')}>
                            <h6 className={cx('section-title')}>Quantity</h6>
                            <Quantity ref={quantityRef} />
                        </div>

                        <div className={cx('pdp-block module')}></div>
                        {/* <>Add to card</> */}
                        <div className={cx('module_add_to_cart')}>
                            <div className={cx('pdp-cart-concern')}>
                                <Button
                                    medium
                                    yellow
                                    className={cx('pdp-button_theme')}
                                    onClick={
                                        state ? handleAdd : handleLoginBlock
                                    }
                                >
                                    <span className={cx('pdp-button-text')}>
                                        Buy Now
                                    </span>
                                </Button>
                                <Button
                                    medium
                                    orange
                                    className={cx('pdp-button_theme')}
                                    onClick={
                                        state ? handleAdd : handleLoginBlock
                                    }
                                >
                                    <span className={cx('pdp-button-text')}>
                                        Add to Cart
                                    </span>
                                </Button>
                            </div>
                        </div>

                        {/* <>Login</> */}
                        <div className={cx('modal')} ref={wrapperRef}>
                            <div className={cx('modal-content')}>
                                <div className={cx('login-title-wrap')}>
                                    <div className={cx('title')}>
                                        <h3>
                                            Welcome! Please Login to continue.
                                        </h3>
                                        <p>
                                            <span>
                                                New member?&nbsp;
                                                <NavLink
                                                    to={config.routes.signup}
                                                    className={cx('fill-in')}
                                                >
                                                    <u>Register</u>
                                                </NavLink>
                                                &nbsp; here.
                                            </span>
                                        </p>
                                    </div>
                                    <span
                                        className={cx('close')}
                                        title="Close Modal"
                                        onClick={handleLoginNone}
                                    >
                                        &times;
                                    </span>
                                </div>

                                <Login />
                            </div>
                        </div>

                        <div className={cx('pdp-block module')}></div>
                    </div>

                    <div className={cx('pdp-block__delivery-seller')}>
                        <SellerDelivery />
                        <div className={cx('module_redmart_delivery')}></div>

                        <SellerWarranty />

                        <GuideApp />

                        <div className={cx('module_redmart_service')}></div>

                        <SellerInfo />

                        <div className={cx('module_redmart_seller_info')}></div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '12px', backgroundColor: '#f5f5f5' }}>
                <div>
                    <div></div>
                </div>
            </div>

            {/* <>infor Produces & Rating</> */}
            <div className={cx('pdp-block__additional-information')}>
                <div className={cx('pdp-block__product-description')}>
                    <InfoProduct />
                    <Rating />
                </div>
                <ProductAds />
            </div>
        </div>
    );
}

export default Box;
