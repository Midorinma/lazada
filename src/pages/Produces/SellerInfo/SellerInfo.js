import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SellerInfo.module.scss';
import { useContext } from 'react';
import { DataContext } from '../Produces';

const cx = classNames.bind(styles);
function SellerInfo() {
    const data = useContext(DataContext);

    return (
        <div className={cx('module_seller_info')}>
            <div className={cx('seller-container')}>
                <div className={cx('seller-name-retail')}>
                    <div className={cx('seller-name__wrapper')}>
                        <div className={cx('seller-name__title')}>Sold by</div>
                        <div className={cx('seller-name__detail')}>
                            <NavLink className={cx('pdp-link_theme_black')}>
                                {data.store}
                            </NavLink>
                        </div>
                    </div>
                    <div className={cx('seller-im-wrapper')}>
                        <span className={cx('seller-im-content')}>
                            <span className={cx('seller-im-icon')}>
                                <FontAwesomeIcon
                                    className={cx('svgfont')}
                                    icon={faMessage}
                                />
                            </span>
                            <span>Chat</span>
                        </span>
                    </div>
                </div>
                <div className={cx('pdp-seller-info-pc')}>
                    <div className={cx('info-content')}>
                        <div className={cx('seller-info-title')}>
                            Seller Ratings
                        </div>
                        <div className={cx('seller-info-value')}>78%</div>
                    </div>
                    <div className={cx('info-content')}>
                        <div className={cx('seller-info-title')}>
                            Ship On Time
                        </div>
                        <div className={cx('seller-info-value')}>100%</div>
                    </div>
                    <div className={cx('info-content')}>
                        <div className={cx('seller-info-title')}>
                            Chat Response
                        </div>
                        <div
                            className={cx('seller-info-value gray-text', {
                                gray_text: true,
                            })}
                        >
                            Not enough data
                        </div>
                    </div>
                </div>
                <div className={cx('seller-link')}>
                    <NavLink className={cx('pdp-link_theme_blue')}>
                        GO TO STORE
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default SellerInfo;
