import classNames from 'classnames/bind';
import styles from './SellerDelivery.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleExclamation,
    faLocationDot,
    faMoneyCheckDollar,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function SellerDelivery() {
    return (
        <div className={cx('module_seller_delivery')}>
            <div>
                <div className={cx('delivery')}>
                    <div className={cx('delivery-header')}>
                        <div className={cx('delivery-header__title')}>
                            Delivery Options
                        </div>
                        <div className={cx('delivery-header__tooltip')}>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </div>
                    <div className={cx('delivery__header')}>
                        <div className={cx('delivery__location')}>
                            <div className={cx('location__current')}>
                                <div className={cx('location__body')}>
                                    <span className={cx('location-dot')}>
                                        <FontAwesomeIcon
                                            icon={faLocationDot}
                                            className={cx('location-icon')}
                                        />
                                    </span>
                                    <div className={cx('location__address')}>
                                        Hồ Chí Minh, Huyện Bình Chánh, Xã Bình
                                        Chánh
                                    </div>
                                    <div
                                        className={cx('location__link-change')}
                                    >
                                        <NavLink
                                            className={cx('fill-in', {
                                                link_change: true,
                                            })}
                                        >
                                            CHANGE
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('delivery__content')}>
                        <div className={cx('delivery__options')}>
                            <div className={cx('delivery__option')}>
                                <div
                                    className={cx(
                                        'delivery-option-item_type_standard',
                                    )}
                                >
                                    <div
                                        className={cx(
                                            'delivery-option-item__body',
                                        )}
                                    >
                                        <span
                                            className={cx(
                                                'delivery-option-item__icon',
                                            )}
                                        >
                                            <img
                                                src="https://img.icons8.com/pastel-glyph/64/delivery-person.png"
                                                alt="delivery-person"
                                            />
                                        </span>
                                        <div
                                            className={cx(
                                                'delivery-option-item__info',
                                            )}
                                        >
                                            <div
                                                className={cx(
                                                    'delivery-option-item__title',
                                                )}
                                            >
                                                Priority Delivery
                                            </div>
                                            <div
                                                className={cx(
                                                    'delivery-option-item__time',
                                                )}
                                            >
                                                Guaranteed by Fri, 20 Oct
                                            </div>
                                        </div>
                                        <div
                                            className={cx(
                                                'delivery-option-item__shipping-fee',
                                            )}
                                        >
                                            ₫17,500
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('delivery__option')}>
                                <div
                                    className={cx(
                                        'delivery-option-item_type_COD',
                                    )}
                                >
                                    <div
                                        className={cx(
                                            'delivery-option-item__body',
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                'delivery-option-item__icon',
                                            )}
                                        >
                                            <FontAwesomeIcon
                                                icon={faMoneyCheckDollar}
                                                style={{
                                                    width: '24px',
                                                    height: '24px',
                                                    color: 'gray',
                                                }}
                                            />
                                        </div>
                                        <div
                                            className={cx(
                                                'delivery-option-item__info',
                                            )}
                                        >
                                            <div
                                                className={cx(
                                                    'delivery-option-item__title',
                                                )}
                                            >
                                                Cash on Delivery Available (No
                                                mutual check)
                                            </div>
                                        </div>
                                        <div
                                            className={cx(
                                                'delivery-option-item__shipping-fee',
                                            )}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerDelivery;
