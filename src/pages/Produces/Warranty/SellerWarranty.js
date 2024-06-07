import classNames from 'classnames/bind';
import styles from './SellerWarranty.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleExclamation,
    faArrowRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import { icons } from '~/components/icons';

const cx = classNames.bind(styles);
function SellerWarranty() {
    return (
        <div className={cx('module_seller_warranty')}>
            <div className={cx('warranty')}>
                <div className={cx('delivery-header')}>
                    <div className={cx('delivery-header__title')}>
                        Return & Warranty
                    </div>
                    <div className={cx('delivery-header__tooltip')}>
                        <FontAwesomeIcon
                            icon={faCircleExclamation}
                            className={cx('delivery-tooltip__icon')}
                        />
                    </div>
                </div>
                <div className={cx('warranty__options')}>
                    <div className={cx('warranty__option-item')}>
                        <div
                            className={cx(
                                'delivery-option-item_type_change_mind_available',
                            )}
                        >
                            <div className={cx('delivery-option-item__body')}>
                                <i className={cx('delivery-option-item__icon')}>
                                    <img
                                        src="https://lzd-img-global.slatic.net/g/tps/imgextra/i4/O1CN01HLFg791eRalDVt0XN_!!6000000003868-2-tps-54-54.png"
                                        width={24}
                                        alt="change of mind"
                                    />
                                </i>
                                <div
                                    className={cx('delivery-option-item__info')}
                                >
                                    <div
                                        className={cx(
                                            'delivery-option-item__title',
                                        )}
                                    >
                                        Change of Mind
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('warranty__option-item')}>
                        <div
                            className={cx(
                                'delivery-option-item_type_returnPolicy7',
                            )}
                        >
                            <div className={cx('delivery-option-item__body')}>
                                <span
                                    className={cx('delivery-option-item__icon')}
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowRotateRight}
                                        className={cx(
                                            'lzd-svg-icon_name_7days',
                                        )}
                                    />
                                </span>
                                <div
                                    className={cx('delivery-option-item__info')}
                                >
                                    <div
                                        className={cx(
                                            'delivery-option-item__title',
                                        )}
                                    >
                                        7 days return to seller
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('warranty__option-item')}>
                        <div
                            className={cx(
                                'delivery-option-item_type_noWarranty',
                            )}
                        >
                            <div className={cx('delivery-option-item__body')}>
                                <span
                                    className={cx('delivery-option-item__icon')}
                                >
                                    <img
                                        src={icons.cart.shield}
                                        alt="shield-slash"
                                        className={cx(
                                            'lzd-svg-icon_name_nowarrant',
                                        )}
                                    />
                                </span>
                                <div
                                    className={cx('delivery-option-item__info')}
                                >
                                    <div
                                        className={cx(
                                            'delivery-option-item__title',
                                        )}
                                    >
                                        Warranty not available
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

export default SellerWarranty;
