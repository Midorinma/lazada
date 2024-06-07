import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import images from '~/assets/images/images';
import { faAngleRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import Quantity from '../Produces/Quantity';
import Justforyou from '../Home/Justforyou';
import {
    updateProduct,
    totalCoin,
    deleteValue,
} from '~/components/Store/actions/authActions';

import { notes } from '~/components/Note';
import SelectAll from './SelectAll';
import Summary from './Summary';
import { fetchData } from '~/components/Store/reducers/FetchData';
import storage from '~/components/Store/reducers/storage';
import { STORAGE_KEY } from '~/components/Store/actions/types';

const cx = classNames.bind(styles);

function Cart() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [remove, setRemove] = useState(false);

    const [data, setData] = useState([]);
    const [checked, setChecked] = useState([]);
    const info = useSelector((item) => item.auth.user);
    const courseApi = `${
        process.env.REACT_APP_LOCALHOST
    }/User?q=${encodeURIComponent(info)}`;
    const List = useSelector((item) => item.auth.productList);
    const dispatch = useDispatch();

    let mail = localStorage.getItem('useState');
    const quantityRef = useRef();
    const history = useNavigate();
    const [price, setPrice] = useState([]);
    const subTotal = price.reduce((result, prod) => result + prod, 0);
    const shippingFree = 17500 * checked.length * 0.001;
    const total = subTotal + shippingFree;

    const value = {
        subTotal: `${subTotal}`,
        shippingFree: `${shippingFree}`,
        total: `${total}`,
    };

    useEffect(() => {
        dispatch(fetchData(storage.get(STORAGE_KEY)));
    }, [List, dispatch]);

    useEffect(() => {
        fetch(courseApi)
            .then((res) => res.json())
            .then((res) => setData(res));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        data.map((items) =>
            setPrice(
                items.productList.map((i, n) => {
                    let temp = 0;
                    if (checked.includes(n) === true) {
                        temp += parseFloat(i.price) * parseInt(i.quantity);
                    } else {
                        temp = 0;
                    }
                    return temp;
                }),
            ),
        );
    }, [checked, data]);

    useEffect(() => {
        if (mail === null) {
            history('/');
        }
    }, [history, mail]);

    const handleChecked = (id) => {
        setChecked((temp) => {
            const isChecked = checked.includes(id);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 200);
            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...temp, id];
            }
        });
    };

    const handleSelectAllChange = (arrLength) => {
        const arr = [];
        for (let i = 0; i < arrLength; i++) {
            arr.push(i);
        }
        if (checked.length === arrLength) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setChecked([]);
            }, 200);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setChecked(arr);
            }, 200);
        }
    };

    const handleDelete = () => {
        if (
            checked.length === null ||
            checked === undefined ||
            checked.length === 0
        ) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 4000);
        } else {
            setRemove(true);
        }
    };

    const handleConfirm = () => {
        dispatch(totalCoin(value));
        if (
            checked.length === null ||
            checked === undefined ||
            checked.length === 0
        ) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 4000);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                dispatch(updateProduct(checked));
                dispatch(fetchData(storage.get(STORAGE_KEY)));
                history('/shipping');
            }, 300);
        }
    };
    //---Child component---
    const handleClickCancel = () => {
        setRemove(false);
    };

    const handleClickDelete = (data) => {
        setLoading(true);
        dispatch(deleteValue(checked));
        checked.map((i) =>
            data.map((j) => j.productList.splice(i, checked.length)),
        );
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setRemove(false);
    };

    return (
        <div className={cx('lzd-playground-main')}>
            <div></div>
            {data.map((item) =>
                item.productList === undefined ||
                item.productList.length === 0 ? (
                    <div key={item.id} className={cx('container')}>
                        <p>There are no items in this cart</p>
                        <Button
                            to={config.routes.home}
                            normal
                            className={cx('continue-shopping')}
                        >
                            CONTINUE SHOPPING
                        </Button>
                    </div>
                ) : (
                    <div className={cx('content')} key={item.id}>
                        <div className={cx('product')}>
                            <div
                                className={cx('product')}
                                style={{ width: '788px', float: 'left' }}
                            >
                                <SelectAll
                                    item={item}
                                    checked={checked}
                                    onHandleDelete={handleDelete}
                                    onHandleSelectAllChange={() =>
                                        handleSelectAllChange(
                                            item.productList.length,
                                        )
                                    }
                                />
                                {data.map((items) =>
                                    items.productList.map((i, numb) => (
                                        <div
                                            className={cx(
                                                'checkout-shop-outer',
                                            )}
                                            style={{ zIndex: '2' }}
                                            key={numb}
                                        >
                                            <div
                                                className={cx(
                                                    'checkout-shop-fix-top',
                                                )}
                                            >
                                                <div
                                                    className={cx(
                                                        'checkout-shop',
                                                    )}
                                                >
                                                    <div
                                                        className={cx(
                                                            'checkout-shop-left',
                                                        )}
                                                    >
                                                        <label
                                                            className={cx(
                                                                'checkout-shop-checkbox',
                                                            )}
                                                        >
                                                            <span
                                                                className={cx(
                                                                    'next-checkbox-inner',
                                                                )}
                                                            >
                                                                <i
                                                                    className={cx(
                                                                        'next-icon',
                                                                    )}
                                                                ></i>
                                                            </span>
                                                            <input
                                                                type="checkbox"
                                                                checked={checked.includes(
                                                                    numb,
                                                                )}
                                                                onChange={() =>
                                                                    handleChecked(
                                                                        numb,
                                                                    )
                                                                }
                                                            />
                                                        </label>
                                                        <div
                                                            className={cx(
                                                                'checkout-shop-title',
                                                            )}
                                                        >
                                                            <img
                                                                src={
                                                                    images.logo2
                                                                }
                                                                className={cx(
                                                                    'checkout-shop-logo',
                                                                )}
                                                                alt="logo-shop"
                                                            />
                                                            <span
                                                                className={cx(
                                                                    'checkout-shop-name',
                                                                )}
                                                            >
                                                                Tổng Kho Minh
                                                                Khôi
                                                            </span>
                                                            <span
                                                                className={cx(
                                                                    'lazada-btn-arrow',
                                                                )}
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faAngleRight
                                                                    }
                                                                />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={cx(
                                                    'checkout-shop-children',
                                                )}
                                            >
                                                <div
                                                    className={cx('cart-item')}
                                                    style={
                                                        numb === 0
                                                            ? {
                                                                  backgroundColor:
                                                                      'rgb(255, 237, 231)',
                                                              }
                                                            : {
                                                                  backgroundColor:
                                                                      '#fff',
                                                              }
                                                    }
                                                >
                                                    <div
                                                        className={cx(
                                                            'cart-item-inner',
                                                        )}
                                                    >
                                                        <div
                                                            className={cx(
                                                                'cart-item-left',
                                                            )}
                                                        >
                                                            <label
                                                                className={cx(
                                                                    'cart-item-checkbox',
                                                                )}
                                                            >
                                                                <span
                                                                    className={cx(
                                                                        'next-checkbox-inner',
                                                                    )}
                                                                >
                                                                    <i
                                                                        className={cx(
                                                                            'next-icon',
                                                                        )}
                                                                    ></i>
                                                                </span>
                                                                <input
                                                                    type="checkbox"
                                                                    checked={checked.includes(
                                                                        numb,
                                                                    )}
                                                                    onChange={() =>
                                                                        handleChecked(
                                                                            numb,
                                                                        )
                                                                    }
                                                                />
                                                            </label>
                                                            <div
                                                                className={cx(
                                                                    'img-wrap',
                                                                )}
                                                            >
                                                                <Link>
                                                                    <img
                                                                        className={cx(
                                                                            'img',
                                                                        )}
                                                                        src={
                                                                            i.img
                                                                        }
                                                                        alt="item"
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div
                                                                className={cx(
                                                                    'content',
                                                                )}
                                                            >
                                                                <NavLink
                                                                    className={cx(
                                                                        'automation-link-from-title-to-prod',
                                                                    )}
                                                                >
                                                                    {i.title}
                                                                </NavLink>
                                                                <NavLink
                                                                    className={cx(
                                                                        'automation-link',
                                                                    )}
                                                                >
                                                                    No Brand
                                                                    &nbsp;
                                                                    <span>
                                                                        Color
                                                                        Family:&nbsp;
                                                                        {
                                                                            i.colorFamily
                                                                        }
                                                                        &nbsp;
                                                                    </span>
                                                                    <span>
                                                                        Size:&nbsp;
                                                                        {i.size}
                                                                    </span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={cx(
                                                                'cart-item-middle',
                                                            )}
                                                        >
                                                            <div>
                                                                <p
                                                                    className={cx(
                                                                        'current-price',
                                                                    )}
                                                                >
                                                                    ₫&nbsp;
                                                                    {i.price}
                                                                </p>
                                                            </div>
                                                            <div
                                                                className={cx(
                                                                    'operations',
                                                                )}
                                                            >
                                                                <span
                                                                    className={cx(
                                                                        'automation-btn-wishlist',
                                                                    )}
                                                                >
                                                                    <span
                                                                        className={cx(
                                                                            'lazada-ic-MyWishlist',
                                                                        )}
                                                                    >
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faHeart
                                                                            }
                                                                        />
                                                                    </span>
                                                                </span>
                                                                <span
                                                                    className={cx(
                                                                        'automation-btn-delete',
                                                                    )}
                                                                >
                                                                    <span
                                                                        className={cx(
                                                                            'lazada-ic-Delete',
                                                                        )}
                                                                        onClick={
                                                                            handleDelete
                                                                        }
                                                                    >
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faTrashCan
                                                                            }
                                                                        />
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={cx(
                                                                'cart-item-right',
                                                            )}
                                                        >
                                                            <Quantity
                                                                data={
                                                                    i.quantity
                                                                }
                                                                ref={
                                                                    quantityRef
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )),
                                )}
                            </div>
                            <div className={cx('right_product')}>
                                <div className={cx('summary-section')}>
                                    <div
                                        className={cx(
                                            'summary-section-content',
                                        )}
                                    >
                                        <div className={cx('location')}>
                                            <div
                                                className={cx(
                                                    'location__current',
                                                )}
                                            >
                                                <div
                                                    className={cx(
                                                        'location__label',
                                                    )}
                                                >
                                                    Location
                                                </div>
                                                <div
                                                    className={cx(
                                                        'location__body',
                                                    )}
                                                >
                                                    <i
                                                        className={cx(
                                                            'location__icon',
                                                        )}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faLocationDot}
                                                            className={cx(
                                                                'icon',
                                                            )}
                                                        />
                                                    </i>
                                                    <div
                                                        className={cx(
                                                            'location__address',
                                                        )}
                                                    >
                                                        Hồ Chí Minh, Huyện Bình
                                                        Chánh, Xã Bình Chánh
                                                    </div>
                                                    <div
                                                        className={cx(
                                                            'location__link-change',
                                                        )}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Summary
                                    onHandleConfirm={handleConfirm}
                                    subTotal={subTotal}
                                    shippingFree={shippingFree}
                                    total={total}
                                    showBtn
                                />
                            </div>
                        </div>
                        <Justforyou btn={true} noButton={false} />
                    </div>
                ),
            )}
            {loading && <notes.Loading />}
            {error && <notes.Error />}
            {remove && (
                <notes.Remove
                    onCancelClick={handleClickCancel}
                    onDelClick={() => handleClickDelete(data)}
                />
            )}
        </div>
    );
}

export default Cart;
