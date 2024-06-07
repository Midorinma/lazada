import classNames from 'classnames/bind';
import styles from './User.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import newE from './NewEmail';
import NewOrder from './NewOrder';
import { Crud } from '~/components/Crud';

const cx = classNames.bind(styles);
function User() {
    const [data, setData] = useState([]);
    const info = useSelector((item) => item.auth.user);
    const courseApi = `${
        process.env.REACT_APP_LOCALHOST
    }/User?q=${encodeURIComponent(info)}`;
    const [lastThreeElements, setLastThreeElements] = useState([]);

    useEffect(() => {
        Crud.Get(courseApi).then((item) => setData(item));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let temp = data.map((item) => {
            return item.order;
        });
        try {
            if (temp && temp.length > 0) {
                setLastThreeElements(temp[0].slice(-3));
            }
        } catch (error) {
            console.log(error);
            window.location.reload();
        }
    }, [data]);

    const name = data.map((item) => {
        return item.name;
    });

    const email = data.map((item) => {
        return newE(item.email);
    });
    return (
        <div className={cx('lzd-playground')}>
            <div className={cx('lzd-playground-main')}>
                {/* <>Sidebar</> */}
                <div className={cx('lzd-playground-nav')}>
                    <div className={cx('member-info')}>
                        <p>
                            <span>Hello,&nbsp;</span>
                            <span className={cx('lzd_current_logon_user_name')}>
                                {name}
                            </span>
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
                                    <div className={cx('dashboard-info-item')}>
                                        {name}
                                    </div>
                                    <div className={cx('dashboard-info-item')}>
                                        {email}
                                    </div>
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
                                        { dashboard: true },
                                    )}
                                >
                                    <div className={cx('dashboard-mod-title')}>
                                        "Address Book"
                                        <span>|</span>
                                        <p>EDIT</p>
                                    </div>
                                    <div
                                        className={cx(
                                            'dashboard-address-default',
                                        )}
                                    >
                                        DEFAULT SHIPPING ADDRESS
                                    </div>
                                    <div
                                        className={cx(
                                            'dashboard-address-username',
                                        )}
                                    >
                                        {name}
                                    </div>
                                    <div
                                        className={cx(
                                            'dashboard-address-detail',
                                        )}
                                    >
                                        Hồ Chí Minh, Huyện Bình Chánh, Xã Bình
                                        Chánh
                                    </div>
                                </div>
                            </div>
                            <div className={cx('recent-orders')}>
                                <div className={cx('recent-orders-hd')}>
                                    Recent Orders
                                </div>
                                <div className={cx('only-bottom-border')}>
                                    <div className={cx('next-table-inner')}>
                                        <div
                                            className={cx('next-table-header')}
                                        >
                                            <div
                                                className={cx(
                                                    'next-table-header-inner',
                                                )}
                                            >
                                                <table>
                                                    <colgroup>
                                                        <col
                                                            style={{
                                                                width: '20%',
                                                            }}
                                                        />
                                                        <col
                                                            style={{
                                                                width: '20%',
                                                            }}
                                                        />
                                                        <col
                                                            style={{
                                                                width: '30%',
                                                            }}
                                                        />
                                                        <col
                                                            style={{
                                                                width: '20%',
                                                            }}
                                                        />
                                                        <col
                                                            style={{
                                                                width: '15%',
                                                            }}
                                                        />
                                                    </colgroup>
                                                    <tbody>
                                                        <tr>
                                                            <th
                                                                rowSpan={1}
                                                                className={cx(
                                                                    'next-table-header-node',
                                                                    {
                                                                        first: true,
                                                                    },
                                                                )}
                                                            >
                                                                <div
                                                                    className={cx(
                                                                        'next-table-cell-wrapper',
                                                                    )}
                                                                >
                                                                    Order #
                                                                </div>
                                                            </th>
                                                            <th
                                                                rowSpan={1}
                                                                className={cx(
                                                                    'next-table-header-node',
                                                                )}
                                                            >
                                                                <div
                                                                    className={cx(
                                                                        'next-table-cell-wrapper',
                                                                    )}
                                                                >
                                                                    Placed On
                                                                </div>
                                                            </th>
                                                            <th
                                                                rowSpan={1}
                                                                className={cx(
                                                                    'next-table-header-node',
                                                                )}
                                                            >
                                                                <div
                                                                    className={cx(
                                                                        'next-table-cell-wrapper',
                                                                    )}
                                                                >
                                                                    Items
                                                                </div>
                                                            </th>
                                                            <th
                                                                rowSpan={1}
                                                                className={cx(
                                                                    'next-table-header-node',
                                                                )}
                                                                style={{
                                                                    textAlign:
                                                                        'right',
                                                                }}
                                                            >
                                                                <div
                                                                    className={cx(
                                                                        'next-table-cell-wrapper',
                                                                    )}
                                                                >
                                                                    Total
                                                                </div>
                                                            </th>
                                                            <th
                                                                rowSpan={1}
                                                                className={cx(
                                                                    'next-table-header-node',
                                                                )}
                                                                style={{
                                                                    textAlign:
                                                                        'right',
                                                                }}
                                                            >
                                                                <div
                                                                    className={cx(
                                                                        'next-table-cell-wrapper',
                                                                    )}
                                                                ></div>
                                                            </th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className={cx('next-table-body')}>
                                            <table>
                                                <colgroup>
                                                    <col
                                                        style={{
                                                            width: '20%',
                                                        }}
                                                    />
                                                    <col
                                                        style={{
                                                            width: '20%',
                                                        }}
                                                    />
                                                    <col
                                                        style={{
                                                            width: '30%',
                                                        }}
                                                    />
                                                    <col
                                                        style={{
                                                            width: '20%',
                                                        }}
                                                    />
                                                    <col
                                                        style={{
                                                            width: '15%',
                                                        }}
                                                    />
                                                </colgroup>
                                                <tbody>
                                                    {lastThreeElements.map(
                                                        (item, index) => (
                                                            <NewOrder
                                                                data={item}
                                                                key={index}
                                                                numb={index}
                                                            />
                                                        ),
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
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

export default User;
