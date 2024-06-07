import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faClock,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import Justforyou from '../Home/Justforyou';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addDays, format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import storage from '~/components/Store/reducers/storage';
import { STORAGE_KEY } from '~/components/Store/actions/types';
import { fetchData } from '~/components/Store/reducers/FetchData';

const cx = classNames.bind(styles);

function Order() {
    const [arrUp, setArrUp] = useState(false);
    const [arrDown, setArrDown] = useState(true);
    const selectorShipping = useSelector((e) => e.auth.shipping);
    const selectorTotal = useSelector((e) => e.auth.saveTotal);
    const currentDate = new Date();
    const futureDate1 = addDays(currentDate, 3);
    const futureDate2 = addDays(currentDate, 4);
    const formattedFutureDate1 = format(futureDate1, 'dd/MM');
    const formattedFutureDate2 = format(futureDate2, 'dd/MM');
    let mail = localStorage.getItem('useState');
    const history = useNavigate();
    const dispatch = useDispatch();
    const sliceTotal = selectorTotal.slice(-1);
    const numbTotal = parseFloat(sliceTotal[0].total).toFixed(3);
    const numbSubtotal = parseFloat(sliceTotal[0].subTotal).toFixed(3);
    const numbShipping = parseFloat(sliceTotal[0].shippingFree).toFixed(3);
    const label = {
        fontSize: '16px',
        fontWeight: 500,
        color: '#424242',
    };

    const value = {
        fontSize: '24px',
        fontWeight: 500,
        color: '#f57224',
    };

    const handleUp = () => {
        setArrDown(false);
        setArrUp(true);
    };
    const handleDown = () => {
        setArrDown(true);
        setArrUp(false);
    };

    useEffect(() => {
        if (mail === null) {
            history('/');
        }
    }, [history, mail]);

    useEffect(() => {
        dispatch(fetchData(storage.get(STORAGE_KEY)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('lzd-playground')}>
            <div>
                <div></div>
                <div className={cx('container')}>
                    <>
                        <div className={cx('page-root')}>
                            <div className={cx('page-section')}>
                                <div
                                    className={cx(
                                        'thank-you-payment-type-offline',
                                    )}
                                >
                                    <div className={cx('thank-you-heading')}>
                                        <div className={cx('thank-you-icon')}>
                                            <FontAwesomeIcon
                                                className={cx('svgfont')}
                                                icon={faClock}
                                            />
                                        </div>
                                        Thank you for your purchase!
                                    </div>
                                    <div className={cx('thank-you-money')}>
                                        <span
                                            className={cx('thank-you-currency')}
                                        >
                                            ₫{' '}
                                        </span>
                                        <span
                                            className={cx('thank-you-amount')}
                                        >
                                            {numbTotal}
                                        </span>
                                    </div>
                                    <div
                                        className={cx(
                                            'thank-you-secondary-container',
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                'thank-you-secondary-heading',
                                            )}
                                        >
                                            {selectorShipping.map(
                                                (item, index) => (
                                                    <div
                                                        className={cx(
                                                            'thank-you-order-number-container',
                                                        )}
                                                        key={index}
                                                    >
                                                        <span>
                                                            Your order number is{' '}
                                                        </span>
                                                        <span
                                                            className={cx(
                                                                'thank-you-order-number',
                                                            )}
                                                        >
                                                            {item.order}
                                                        </span>
                                                    </div>
                                                ),
                                            )}
                                            <div
                                                className={cx(
                                                    'thank-you-order-text-arrow',
                                                )}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('page-section')}>
                                <div className={cx('payment-amount')}>
                                    <div className={cx('container')}>
                                        <div
                                            className={cx(
                                                'payment-amount-title',
                                            )}
                                        >
                                            Please have this amount ready on
                                            delivery day.
                                        </div>
                                        <div
                                            className={cx(
                                                'payment-amount-amount',
                                            )}
                                        >
                                            ₫ {numbTotal}
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('package-delivery')}>
                                    <div className={cx('title')}>
                                        Your Delivery Dates
                                    </div>
                                    {selectorShipping.map((item, index) => (
                                        <table key={index}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div
                                                            className={cx(
                                                                'item-img-container',
                                                            )}
                                                        >
                                                            <img
                                                                src={item.img}
                                                                className={cx(
                                                                    'item-img',
                                                                )}
                                                                alt="img-products"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td
                                                        className={cx('pk-des')}
                                                    >
                                                        Est.
                                                        {formattedFutureDate1} -
                                                        {formattedFutureDate2}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        className={cx(
                                                            'pk-item-line',
                                                        )}
                                                        colSpan={2}
                                                    >
                                                        <div></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}>
                                                        <div
                                                            className={cx(
                                                                'tip',
                                                            )}
                                                        >
                                                            <div
                                                                className={cx(
                                                                    'package-delivery-text-content',
                                                                )}
                                                            >
                                                                <div>
                                                                    <span>
                                                                        For more
                                                                        details,
                                                                        track
                                                                        your
                                                                        delivery
                                                                        status
                                                                        under{' '}
                                                                    </span>
                                                                    <span
                                                                        className={cx(
                                                                            'package-delivery-strong-text',
                                                                        )}
                                                                    >
                                                                        My
                                                                        Account
                                                                        &gt; My
                                                                        Order
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                className={cx(
                                                                    'next-btn-secondary',
                                                                )}
                                                            >
                                                                View Order
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    ))}
                                </div>
                                <div className={cx('payment-information')}>
                                    <div className={cx('container')}>
                                        <div className={cx('item')}>
                                            <span
                                                className={cx('lazada-Email')}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                />
                                            </span>
                                            <div className={cx('content')}>
                                                <div
                                                    className={cx(
                                                        'text-content',
                                                    )}
                                                >
                                                    <div
                                                        className={cx(
                                                            'text-line',
                                                        )}
                                                    >
                                                        <span>
                                                            A notification about
                                                            your Order Request
                                                            received has been
                                                            sent to{' '}
                                                        </span>
                                                        <span
                                                            className={cx(
                                                                'strong-text',
                                                            )}
                                                        >
                                                            vuquangduy2017@gmail.com
                                                        </span>
                                                        <span>.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('order-summary')}>
                                    <div className={cx('checkout-summary')}>
                                        {arrDown && (
                                            <div
                                                className={cx(
                                                    'checkout-summary-heading',
                                                )}
                                                onClick={handleUp}
                                            >
                                                <div
                                                    className={cx(
                                                        'checkout-summary-row',
                                                    )}
                                                >
                                                    <div
                                                        className={cx(
                                                            'checkout-summary-label-collapse',
                                                        )}
                                                    >
                                                        Order Summary
                                                    </div>
                                                    <div
                                                        className={cx(
                                                            'checkout-summary-value-collapse',
                                                        )}
                                                    >
                                                        ₫ {numbTotal}
                                                    </div>
                                                </div>
                                                <span
                                                    className={cx(
                                                        'lazada-ic-Arrow-Down',
                                                    )}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faAngleDown}
                                                    />
                                                </span>
                                            </div>
                                        )}

                                        {arrUp && (
                                            <div>
                                                <div
                                                    className={cx(
                                                        'checkout-summary-heading',
                                                    )}
                                                    onClick={handleDown}
                                                >
                                                    <div
                                                        className={cx(
                                                            'checkout-summary-title',
                                                        )}
                                                    >
                                                        Order Summary
                                                    </div>
                                                    <span
                                                        className={cx(
                                                            'checkout-summary-icon',
                                                        )}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faAngleUp}
                                                        />
                                                    </span>
                                                </div>
                                                <div
                                                    className={cx(
                                                        'checkout-summary-rows',
                                                    )}
                                                >
                                                    <div
                                                        className={cx(
                                                            'checkout-summary-row',
                                                        )}
                                                    >
                                                        <div
                                                            className={cx(
                                                                'checkout-summary-label',
                                                            )}
                                                        >
                                                            Subtotal(1 Items){' '}
                                                        </div>
                                                        <div
                                                            className={cx(
                                                                'checkout-summary-value',
                                                            )}
                                                        >
                                                            ₫ {numbSubtotal}
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={cx(
                                                            'checkout-summary-row',
                                                        )}
                                                    >
                                                        <div
                                                            className={cx(
                                                                'checkout-summary-label',
                                                            )}
                                                        >
                                                            Shipping Fee{' '}
                                                        </div>
                                                        <div
                                                            className={cx(
                                                                'checkout-summary-value',
                                                            )}
                                                        >
                                                            ₫ {numbShipping}
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={cx(
                                                            'checkout-summary-row',
                                                            { total: true },
                                                        )}
                                                    >
                                                        <div
                                                            className={cx(
                                                                'checkout-summary-label',
                                                            )}
                                                            style={label}
                                                        >
                                                            Payment Amount{' '}
                                                        </div>
                                                        <div
                                                            className={cx(
                                                                'checkout-summary-value',
                                                            )}
                                                            style={value}
                                                        >
                                                            ₫ {numbTotal}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={cx('button-container')}>
                                    <Button
                                        orange
                                        className={cx('next-btn-primary')}
                                        to={'/'}
                                    >
                                        Shop More
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Justforyou btn={false} noButton={true} />
                    </>
                </div>
            </div>
        </div>
    );
}

export default Order;
