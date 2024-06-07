import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assets/images/images';
import Search from '../Search';
import Banner from '../Banner/Banner';
import { HeaderMenu } from '../HeaderMenu';
import SlickSlider from '~/Layout/DefaultLayout/SlickSlider/SlickSlider';
import { useEffect, useState } from 'react';
import WrapColor from '~/components/WrapColor';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Header() {
    const [onMenu, setOnMenu] = useState(true);
    const [onHideMenu, setOnHideMenu] = useState(true);
    const [count, setCount] = useState();
    const state = useSelector((item) => item.auth.isAuthenticated);
    const products = useSelector((item) => item.auth.productList);

    useEffect(() => {
        if (!products) {
            setCount(null);
            return;
        } else {
            setCount(products.length);
        }
    }, [products]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setOnMenu(false);
                if (window.scrollY > 800) {
                    setOnHideMenu(false);
                }
            } else {
                setOnMenu(true);
                setOnHideMenu(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* <>Banner QC</> */}
            {onMenu && <Banner className={cx('header-banner-links')} />}
            <header className={cx('wrapper')}>
                {/* <>Menu link</> */}
                {onHideMenu && (
                    <WrapColor whitePray>
                        <HeaderMenu.MenuLinks className={cx('head-mn')} />
                    </WrapColor>
                )}

                {/* <>Header bar</> */}
                <div className={cx('logo-bar-content')}>
                    <div className={cx('header-logo')}>
                        <Link to={config.routes.home} className={cx('logo')}>
                            <img src={images.logo} alt="lazada" />
                        </Link>
                    </div>

                    <Search />

                    <div className={cx('header-banner')}>
                        {/* <>Cart</> */}
                        <Link
                            to={
                                state ? config.routes.cart : config.routes.login
                            }
                            className={cx('cart')}
                        >
                            <span className={cx('cart-icon')}></span>
                            <span className={cx('cart-num')}>
                                {state ? count : undefined}
                            </span>
                        </Link>

                        {/* <>Bank connect</> */}
                        <Link className={cx('image-banner')}>
                            <img src={images.banner} alt="banner" />
                        </Link>
                    </div>
                </div>
            </header>
            <div className={cx('Menu')}>
                <div className={cx('slider-show')}>
                    <SlickSlider style={{ height: '100%', width: '100%' }} />
                </div>
            </div>
        </div>
    );
}

export default Header;
