import classNames from 'classnames/bind';
import styles from './User.module.scss';

const cx = classNames.bind(styles);
function User() {
    return (
        <div className={cx('lzd-playground')}>
            <div className={cx('lzd-playground-main')}>
                {/* <>Sidebar</> */}
                <div className={cx('lzd-playground-nav')}>
                    <div className={cx('member-info')}>
                        <p>
                            <span>Hello,&nbsp;</span>
                            <span
                                className={cx('lzd_current_logon_user_name')}
                            ></span>
                        </p>
                    </div>

                    <ul className={cx('nav-container')}>
                        <li className={cx('Manage-My-Account', { item: true })}>
                            <h3 style={{ color: '#1a9cb7' }}>
                                Manage My Account
                            </h3>
                            <ul className={cx('item-container')}>
                                <li>
                                    <p>My Profile</p>
                                </li>
                                <li>
                                    <p>Address Book</p>
                                </li>
                                <li>
                                    <p>My Payment Options</p>
                                </li>
                                <li>
                                    <p>eM Wallet</p>
                                </li>
                            </ul>
                        </li>
                        <li className={cx('My-Orders', { item: true })}>
                            <h3>My Orders</h3>
                            <ul className={cx('item-container')}>
                                <li>
                                    <p>My Returns</p>
                                </li>
                                <li>
                                    <p>My Cancellations</p>
                                </li>
                            </ul>
                        </li>
                        <li className={cx('My-Reviews', { item: true })}>
                            <h3>My Reviews</h3>
                            <ul className={cx('item-container')}></ul>
                        </li>
                        <li className={cx('My-Wishlists', { item: true })}>
                            <h3>My Wishlist & Followed Stores</h3>
                            <ul className={cx('item-container')}></ul>
                        </li>
                        <li className={cx('Sell-On-Lazada', { item: true })}>
                            <h3>Sell On Lazada</h3>
                            <ul className={cx('item-container')}></ul>
                        </li>
                    </ul>
                </div>

                {/* <>Content</> */}
                <div className={cx('lzd-playground-right')}>
                    <div className={cx('breadcrumb')}>
                        <h3>Manage My Account</h3>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('dashboard')}>
                            <div className={cx('dashboard-profile')}>
                                <div className={cx('dashboard-mod-title')}>
                                    "Personal Profile"
                                    <span>|</span>
                                    <p>EDIT</p>
                                </div>
                                <div className={cx('dashboard-info')}>
                                    <div
                                        className={cx('dashboard-info-item')}
                                    ></div>
                                    <div
                                        className={cx('dashboard-info-item')}
                                    ></div>
                                    <div
                                        className={cx(
                                            'dashboard-info-item-check',
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                'dashboard-info-item-check-sub',
                                            )}
                                        >
                                            <label>
                                                <span
                                                    className={cx(
                                                        'next-checkbox',
                                                    )}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        aria-checked="false"
                                                        value="on"
                                                    />
                                                </span>
                                                <span
                                                    className={cx(
                                                        'next-checkbox-label',
                                                    )}
                                                >
                                                    Receive marketing emails
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('dashboard-address')}>
                                <div
                                    className={cx(
                                        'dashboard-address-item-shipping',
                                    )}
                                >
                                    <div className={cx('dashboard-mod-title')}>
                                        "Address Book"
                                        <span>|</span>
                                        <p>EDIT</p>
                                    </div>
                                    <div>
                                        <strong className={cx('name')}></strong>
                                        <p></p>
                                    </div>
                                </div>
                                <div
                                    className={cx(
                                        'dashboard-address-item-billing',
                                    )}
                                >
                                    <div
                                        className={cx('dashboard-mod-title')}
                                    ></div>
                                    <div>
                                        <strong className={cx('name')}></strong>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('recent-orders')}>
                                <div className={cx('recent-orders-hd')}>
                                    Recent Orders
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
