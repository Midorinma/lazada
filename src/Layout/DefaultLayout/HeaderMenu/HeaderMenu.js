import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import config from '~/config';
import { icons } from '~/components/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFaceSmile,
    faHeart,
    faStar,
} from '@fortawesome/free-regular-svg-icons';
import {
    faBan,
    faBox,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Menu from '~/components/Popper/Menu/Menu';
import { useDispatch } from 'react-redux';
import { logout } from '~/components/Store/actions/authActions';
import storage from '~/components/Store/reducers/storage';
import { STORAGE_KEY } from '~/components/Store/actions/types';

const cx = classNames.bind(styles);
export const MenuLinks = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const history = useNavigate();
    const dispatch = useDispatch();

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faFaceSmile} />,
            title: 'Manage My Account',
            to: '/user',
        },
        {
            icon: <FontAwesomeIcon icon={faBox} />,
            title: 'My Orders',
        },
        {
            icon: <FontAwesomeIcon icon={faHeart} />,
            title: 'My Wishlist & Followed Stores',
        },
        {
            icon: <FontAwesomeIcon icon={faStar} />,
            title: 'My Reviews',
        },
        {
            icon: <FontAwesomeIcon icon={faBan} />,
            title: 'My Returns & Cancellations',
        },
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Logout',
            userLogout: () => {
                localStorage.removeItem('useState');
                dispatch(logout());
                storage.delete(STORAGE_KEY);
                history('/');
            },
        },
    ];

    return (
        <div className={cx('header-link')}>
            <div>
                <Button textStronger>SAVE MORE ON APP</Button>
            </div>
            <div>
                <Button textStronger>SELL ON LAZADA</Button>
            </div>
            <div>
                <Button text>CUSTOMER CARE</Button>
            </div>
            <div>
                <Button text>TRACK MY ORDER</Button>
            </div>
            <div>
                {isAuthenticated ? undefined : (
                    <Button text to={config.routes.login}>
                        LOGIN
                    </Button>
                )}
            </div>

            <div>
                {isAuthenticated && (
                    <Menu items={userMenu}>
                        <button className={cx('user-account')}>ACCOUNT</button>
                    </Menu>
                )}
            </div>

            <div>
                {isAuthenticated ? undefined : (
                    <Button text to={config.routes.signup}>
                        SIGNUP
                    </Button>
                )}
            </div>
            <div>
                <Button text>CHANGE LANGUAGE</Button>
            </div>
        </div>
    );
};

export const MenuItem = () => {
    return (
        <div className={cx('menu-links')}>
            <Button className={cx('hotItem--10sm')}>
                lego one piece minifigure
            </Button>

            <Button className={cx('hotItem--10sm')}>
                collagen nucos spa 13500
            </Button>

            <Button className={cx('hotItem--10sm')}>aptx 4869</Button>

            <Button className={cx('hotItem--10sm')}>
                lego technic ferrari 488
            </Button>

            <Button className={cx('hotItem--10sm')}>hibon d3k2</Button>
        </div>
    );
};

export const CartContent = ({ className }) => {
    return (
        <div className={cx('cart-channel-content')}>
            <Button className={className}>
                <div className={cx('box')}>
                    <div className={cx('cart-channel-img')}>
                        <img
                            className={cx('image')}
                            src={icons.cart.lazMall}
                            alt="lazMall"
                        />
                    </div>
                    <div className={cx('cart-channel-name')}> LazMall</div>
                </div>
            </Button>
            <Button className={className}>
                <div className={cx('box')}>
                    <div className={cx('cart-channel-img')}>
                        <img
                            className={cx('image')}
                            src={icons.cart.voucher}
                            alt="Vouchers"
                        />
                    </div>
                    <div className={cx('cart-channel-name')}>Vouchers</div>
                </div>
            </Button>
            <Button className={className}>
                <div className={cx('box')}>
                    <div className={cx('cart-channel-img')}>
                        <img
                            className={cx('image')}
                            src={icons.cart.topUp}
                            alt="Top Up & eCoupon"
                        />
                    </div>
                    <div className={cx('cart-channel-name')}>
                        Top Up & eCoupon
                    </div>
                </div>
            </Button>
            <Button className={className}>
                <div className={cx('box')}>
                    <div className={cx('cart-channel-img')}>
                        <img
                            className={cx('image')}
                            src={icons.cart.lazGlobal}
                            alt="LazGlobal"
                        />
                    </div>
                    <div className={cx('cart-channel-name')}>LazGlobal</div>
                </div>
            </Button>
        </div>
    );
};

export const MenuLabel = ({ className }) => {
    return (
        <div className={cx('lzd-menu-wrapper')}>
            <Button className={className}>
                <div className={cx('box')}>
                    <div className={cx('cart-channel-img-small')}>
                        <img
                            className={cx('image')}
                            src={icons.cart.lazMall}
                            alt="lazMall"
                        />
                    </div>
                    <div className={cx('lzd-menu-labels-item-text')}>
                        {' '}
                        LazMall
                    </div>
                </div>
            </Button>
            <Button className={className}>
                <div className={cx('box')}>
                    <div className={cx('cart-channel-img-small')}>
                        <img
                            className={cx('image')}
                            src={icons.cart.voucher}
                            alt="Vouchers"
                        />
                    </div>
                    <div className={cx('lzd-menu-labels-item-text')}>
                        Vouchers
                    </div>
                </div>
            </Button>
            <Button className={className}>
                <div className={cx('box')}>
                    <div className={cx('cart-channel-img-small')}>
                        <img
                            className={cx('image')}
                            src={icons.cart.topUp}
                            alt="Top Up & eCoupon"
                        />
                    </div>
                    <div className={cx('lzd-menu-labels-item-text')}>
                        Top Up & eCoupon
                    </div>
                </div>
            </Button>
            <Button className={className}>
                <div className={cx('box')}>
                    <div className={cx('cart-channel-img-small')}>
                        <img
                            className={cx('image')}
                            src={icons.cart.lazGlobal}
                            alt="LazGlobal"
                        />
                    </div>
                    <div className={cx('lzd-menu-labels-item-text')}>
                        LazGlobal
                    </div>
                </div>
            </Button>
        </div>
    );
};
