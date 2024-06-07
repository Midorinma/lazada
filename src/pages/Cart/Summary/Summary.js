import classNames from 'classnames/bind';
import styles from './Summary.module.scss';
import Button from '~/components/Button';
import Voucher from '../Voucher';

const cx = classNames.bind(styles);
function Summary({
    onHandleConfirm,
    subTotal,
    shippingFree,
    total,
    showBtn = false,
}) {
    return (
        <div className={cx('summary-section')}>
            <div className={cx('summary-section-heading')}>Order Summary</div>
            <div className={cx('summary-section-content')}>
                <div className={cx('checkout-summary')}>
                    <div className={cx('checkout-summary-rows')}>
                        <div className={cx('checkout-summary-row1')}>
                            <div className={cx('checkout-summary-main')}>
                                <div className={cx('checkout-summary-label')}>
                                    Subtotal (0 items)
                                </div>
                                <div className={cx('checkout-summary-value')}>
                                    <span
                                        className={cx(
                                            'checkout-summary-noline-value',
                                        )}
                                    >
                                        ₫ {parseFloat(subTotal).toFixed(3)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('checkout-summary-row2')}>
                            <div className={cx('checkout-summary-main')}>
                                <div className={cx('checkout-summary-label')}>
                                    Shipping Fee
                                </div>
                                <div className={cx('checkout-summary-value')}>
                                    <span
                                        className={cx(
                                            'checkout-summary-noline-value',
                                        )}
                                    >
                                        ₫ {parseFloat(shippingFree).toFixed(3)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showBtn && <Voucher />}
                    <div className={cx('checkout-order-total')}>
                        <div className={cx('checkout-order-total-row')}>
                            <div className={cx('checkout-order-total-title')}>
                                Total
                            </div>
                            <div className={cx('checkout-order-total-fee')}>
                                ₫ {parseFloat(total).toFixed(3)}
                                <small
                                    className={cx(
                                        'checkout-order-total-fee-tip',
                                    )}
                                >
                                    VAT included, where applicable
                                </small>
                            </div>
                        </div>
                        {showBtn && (
                            <Button
                                orange
                                className={cx('comfirm-cart')}
                                onClick={onHandleConfirm}
                            >
                                CONFIRM CART(0)
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summary;
