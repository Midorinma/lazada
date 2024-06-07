import classNames from 'classnames/bind';
import styles from './Shipping.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    orderReceived,
    totalSave,
    updateCart,
} from '~/components/Store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { deleteUpdate } from '~/components/Store/actions/authActions';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faCircleCheck,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import images from '~/assets/images/images';
import Voucher from '../Cart/Voucher';
import Summary from '../Cart/Summary';
import { notes } from '~/components/Note';
import ReactDOMServer from 'react-dom/server';
import Mailer from '../Mailer';
import { SendEmail } from '~/components/Store/reducers/SendEmail';

const cx = classNames.bind(styles);

function Shipping() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const info = useSelector((item) => item.auth.user);
    const shipping = useSelector((item) => item.auth.shipping);
    const total = useSelector((item) => item.auth.total);
    const courseApi = `${
        process.env.REACT_APP_LOCALHOST
    }/User?q=${encodeURIComponent(info)}`;
    const ref = useRef();
    const dispatch = useDispatch();
    const history = useNavigate();
    let mail = localStorage.getItem('useState');
    const componentHTML = ReactDOMServer.renderToStaticMarkup(
        <Mailer name={mail} />,
    );

    useEffect(() => {
        fetch(courseApi)
            .then((res) => res.json())
            .then((res) => setData(res));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (mail === null) {
            history('/');
        }
    }, [history, mail]);

    const totalSlice = total.slice(-1);

    const handleDelete = (index) => {
        dispatch(deleteUpdate(index));
    };

    const handlePurchase = () => {
        setLoading(true);
        const sendEmailData = {
            email: mail,
            subject: 'Order has been delivered',
            content: componentHTML,
        };

        shipping.map((i) =>
            shipping.length > 0
                ? (dispatch(orderReceived(i)), dispatch(updateCart(i.order)))
                : false,
        );
        totalSlice.map((i) => {
            for (let j = 0; j < shipping.length; j++) {
                dispatch(totalSave(i));
            }
            return 0;
        });
        dispatch(SendEmail(sendEmailData));
        setTimeout(() => {
            setLoading(false);
            history('/order-received-new');
        }, 300);
    };
    return (
        <div className={cx('container')}>
            {data.map((items) => (
                <div className={cx('leftContainer')} key={items.id}>
                    <div className={cx('v2-checkout-address')}>
                        <div className={cx('v2-title-wrapper')}>
                            <p className={cx('v2-address-hat')}>
                                Shipping Address
                            </p>
                            <NavLink className={cx('v2-title-wrapper-edit')}>
                                Edit
                            </NavLink>
                        </div>
                        <div className={cx('v2-checkout-address-inner')}>
                            <div>
                                <div
                                    className={cx('v2-address-title-container')}
                                >
                                    <span className={cx('v2-address-title')}>
                                        {items.name}
                                    </span>
                                    <span className={cx('v2-email')}>
                                        {items.email}
                                    </span>
                                </div>
                            </div>
                            <div className={cx('v2-address-info-item')}>
                                <span className={cx('v2-address-tag-label')}>
                                    HOME
                                </span>
                                <span>
                                    Hồ Chí Minh, Huyện Bình Chánh, Xã Bình Chánh
                                </span>
                            </div>
                            <div className={cx('v2-checkout-address-cp')}>
                                <div
                                    className={cx(
                                        'v2-checkout-address-cp-view',
                                    )}
                                >
                                    <div
                                        className={cx(
                                            'v2-checkout-address-cp-header',
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                'v2-checkout-address-cp-text',
                                            )}
                                        >
                                            Choose Collection Point as the
                                            easiest way to collect package
                                        </div>
                                        <span className={cx('lazada-arrow')}>
                                            <FontAwesomeIcon
                                                icon={faAngleRight}
                                            />
                                        </span>
                                    </div>
                                    <div
                                        className={cx(
                                            'v2-checkout-address-cp-footer',
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                'v2-checkout-address-cp-text-sug',
                                            )}
                                        >
                                            20 suggested collection point(s)
                                            nearby
                                        </div>

                                        <span className={cx('lazada-toolpit')}>
                                            <FontAwesomeIcon
                                                icon={faCircleQuestion}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {shipping.map((item, index) => (
                        <div className={cx('package')} key={index}>
                            <div className={cx('package-title')}>
                                <div className={cx('package-title-left')}>
                                    <span className={cx('package-title-name')}>
                                        Package {index + 1} of {shipping.length}
                                    </span>
                                </div>
                                <div className={cx('package-title-right')}>
                                    <span className={cx('package-title-tips')}>
                                        Shipped by
                                    </span>
                                    <span className={cx('package-title-brand')}>
                                        clara bluetooth
                                    </span>
                                </div>
                            </div>
                            <div className={cx('delivery-option')}>
                                <div>
                                    <div className={cx('delivery-option-body')}>
                                        <div className={cx('delivery-slider')}>
                                            <div
                                                className={cx(
                                                    'delivery-slider-content',
                                                )}
                                            >
                                                <p
                                                    className={cx(
                                                        'delivery-slider-title',
                                                    )}
                                                >
                                                    Delivery options
                                                </p>
                                            </div>
                                            <div
                                                className={cx(
                                                    'delivery-slider-wrap',
                                                )}
                                            >
                                                <div
                                                    className={cx(
                                                        'next-slick-horizontal',
                                                    )}
                                                >
                                                    <div
                                                        className={cx(
                                                            'next-slick-inner',
                                                        )}
                                                    >
                                                        <div
                                                            className={cx(
                                                                'next-slick-list',
                                                            )}
                                                        >
                                                            <div
                                                                className={cx(
                                                                    'next-slick-track',
                                                                )}
                                                            >
                                                                <div
                                                                    className={cx(
                                                                        'next-slick-slide',
                                                                    )}
                                                                >
                                                                    <div
                                                                        className={cx(
                                                                            'delivery-item-selected',
                                                                        )}
                                                                    >
                                                                        <div
                                                                            className={cx(
                                                                                'delivery-item-top',
                                                                            )}
                                                                        >
                                                                            <div
                                                                                className={cx(
                                                                                    'delivery-item-content',
                                                                                )}
                                                                            >
                                                                                <div
                                                                                    className={cx(
                                                                                        'delivery-item-first-line',
                                                                                    )}
                                                                                >
                                                                                    <span
                                                                                        className={cx(
                                                                                            'lazada-icon',
                                                                                        )}
                                                                                    >
                                                                                        <FontAwesomeIcon
                                                                                            icon={
                                                                                                faCircleCheck
                                                                                            }
                                                                                        />
                                                                                    </span>
                                                                                    <div
                                                                                        className={cx(
                                                                                            'delivery-item-price',
                                                                                        )}
                                                                                    >
                                                                                        <span
                                                                                            className={cx(
                                                                                                'delivery-item-current-price',
                                                                                            )}
                                                                                        >
                                                                                            ₫
                                                                                            17,500
                                                                                        </span>
                                                                                        <span
                                                                                            className={cx(
                                                                                                'delivery-item-origin-price',
                                                                                            )}
                                                                                        ></span>
                                                                                    </div>
                                                                                </div>
                                                                                <p
                                                                                    className={cx(
                                                                                        'delivery-item-name-wrap',
                                                                                    )}
                                                                                >
                                                                                    <span
                                                                                        className={cx(
                                                                                            'delivery-item-name',
                                                                                        )}
                                                                                    >
                                                                                        Standard
                                                                                        Delivery
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className={cx(
                                                                                'delivery-item-bottom',
                                                                            )}
                                                                        >
                                                                            <p
                                                                                className={cx(
                                                                                    'delivery-item-time',
                                                                                )}
                                                                            >
                                                                                Get
                                                                                by&nbsp;
                                                                                {
                                                                                    item.time
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                style={{
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                }}
                                ref={ref}
                            >
                                <div className={cx('cart-item')}>
                                    <div className={cx('cart-item-inner')}>
                                        <div className={cx('cart-item-left')}>
                                            <div className={cx('img-wrap')}>
                                                <NavLink
                                                    className={cx(
                                                        'automation-link-from-image-to-prod',
                                                    )}
                                                >
                                                    <img
                                                        className={cx('img')}
                                                        src={item.img}
                                                        alt="item"
                                                    />
                                                </NavLink>
                                            </div>
                                            <div className={cx('content')}>
                                                <NavLink
                                                    className={cx(
                                                        'automation-link-from-title-to-prod',
                                                    )}
                                                >
                                                    {item.title}
                                                </NavLink>
                                                <NavLink className={cx('sku')}>
                                                    No Brand , Size: {item.size}
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className={cx('cart-item-middle')}>
                                            <p className={cx('current-price')}>
                                                ₫ {item.price}
                                            </p>
                                            <p className={cx('origin-price')}>
                                                ₫ {item.priceOld}
                                            </p>
                                            <p
                                                className={cx(
                                                    'promotion-ratio',
                                                )}
                                            >
                                                {item.discount}
                                            </p>
                                            <div className={cx('operations')}>
                                                <span
                                                    className={cx(
                                                        'automation-btn-delete',
                                                    )}
                                                >
                                                    <span
                                                        className={cx(
                                                            'lazada-ic-Delete',
                                                        )}
                                                        onClick={() =>
                                                            handleDelete(index)
                                                        }
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTrashCan}
                                                        />
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('cart-item-right')}>
                                            <div
                                                className={cx(
                                                    'automation-item-quantity',
                                                )}
                                            >
                                                <span
                                                    className={cx(
                                                        'item-quantity-prefix',
                                                    )}
                                                >
                                                    Qty:{' '}
                                                </span>
                                                <span
                                                    className={cx(
                                                        'item-quantity-value',
                                                    )}
                                                >
                                                    {item.quantity}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <div className={cx('rightContainer')}>
                <div className={cx('clearfix')}>
                    <Button
                        className={cx('btn_proceed-to-payment')}
                        onClick={handlePurchase}
                    >
                        PROCEED TO PAYMENT
                    </Button>
                </div>
                <div className={cx('payment-card-container')}>
                    <div className={cx('payment-card-header-wrapper')}>
                        <span className={cx('payment-card-header-title')}>
                            Select Payment Method
                        </span>
                        <span className={cx('payment-card-header-action')}>
                            View all methods &gt;
                        </span>
                    </div>
                    <div className={cx('card-list-wrapper')}>
                        <div className={cx('card-container')}>
                            <div>
                                <span className={cx('lazada-ic-sucess')}>
                                    <input type="radio" defaultChecked={true} />
                                </span>
                                <div className={cx('card-main-content')}>
                                    <img
                                        className={cx('card-icon')}
                                        src={images.cash}
                                        alt="Cash on delivery"
                                    />
                                    <div
                                        className={cx(
                                            'card-main-content-text-container',
                                        )}
                                    >
                                        <p className={cx('card-title')}>
                                            Cash On Delivery
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('card-footer')}>
                                    <div className={cx('card-footer-left')}>
                                        <div
                                            className={cx(
                                                'card-complex-description-wrapper',
                                            )}
                                        >
                                            <p
                                                className={cx(
                                                    'card-complex-description-head-text',
                                                )}
                                            >
                                                Pay when you receive
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={cx('card-container')}
                            style={{
                                borderColor: '#dadada',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                            }}
                        >
                            <div>
                                <span className={cx('lazada-ic-sucess')}>
                                    <input type="radio" />
                                </span>
                                <div className={cx('card-main-content')}>
                                    <img
                                        className={cx('card-icon')}
                                        src={images.zalo}
                                        alt="img"
                                    />
                                    <div
                                        className={cx(
                                            'card-main-content-text-container',
                                        )}
                                    >
                                        <p className={cx('card-title')}>
                                            ZaloPay Wallet
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('card-footer')}>
                                    <div className={cx('card-footer-left')}>
                                        <div
                                            className={cx(
                                                'card-complex-description-wrapper',
                                            )}
                                        >
                                            <p
                                                className={
                                                    'card-complex-description-head-text'
                                                }
                                            >
                                                Link your ZaloPay E-Wallet
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Voucher title="Voucher" />
                <div className={cx('additional-info-wrapper')}>
                    <p className={cx('additional-info-title')}>
                        Invoice and Contact Info
                    </p>
                    <p className={cx('additional-info-action')}>Edit</p>
                </div>
                <div className={cx('additional-detail-wrapper')}></div>
                <Summary
                    subTotal={totalSlice[0].subTotal}
                    shippingFree={totalSlice[0].shippingFree}
                    total={parseInt(totalSlice[0].subTotal)}
                />
                <div className={cx('clearfix')}>
                    <Button
                        className={cx('btn_proceed-to-payment')}
                        onClick={handlePurchase}
                    >
                        PROCEED TO PAYMENT
                    </Button>
                </div>
            </div>
            {loading && <notes.Loading />}
        </div>
    );
}

export default Shipping;
