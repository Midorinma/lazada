import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
import config from '~/config';
import images from '~/assets/images/images';
import Search from '../Search';
import Button from '~/components/Button';
import { HeaderMenu } from '../HeaderMenu';

import { useEffect, useState } from 'react';
import Menu from '../Menu/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import WrapColor from '~/components/WrapColor';

const cx = classNames.bind(styles);

function HeaderOnly() {
    const [onHideMenu, setOnHideMenu] = useState(true);
    const [category, setCategory] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setOnHideMenu(false);
            } else {
                setOnHideMenu(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleShow = () => {
        setCategory(!category);
    };
    return (
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

                <div className={cx('layout-search-box--qK-K')}>
                    <Search />
                    <div className={cx('hotBorder--3N6k')}>
                        <HeaderMenu.MenuItem />
                    </div>
                </div>

                <div className={cx('header-banner')}>
                    {/* <>Cart</> */}
                    <Link to={config.routes.login} className={cx('cart')}>
                        <span className={cx('cart-icon')}></span>
                        <span className={cx('cart-num')}>12</span>
                    </Link>

                    {/* <>Bank connect</> */}
                    <Button
                        href={config.routes.endow}
                        className={cx('image-banner')}
                        target="_blank"
                    >
                        <img src={images.banner} alt="banner" />
                    </Button>
                </div>
            </div>

            <div className={cx('lzd-site-nav-menu')}>
                <div className={cx('lzd-site-menu-nav-container')}>
                    <div className={cx('lzd-site-menu-nav-category')}>
                        <Button
                            className={cx('btn-category')}
                            onClick={handleShow}
                            rightIconMenu={
                                category ? (
                                    <FontAwesomeIcon
                                        icon={faChevronUp}
                                        style={{ color: '#f57224' }}
                                    />
                                ) : (
                                    <FontAwesomeIcon icon={faChevronDown} />
                                )
                            }
                        >
                            <span style={category ? { color: '#f57224' } : {}}>
                                Categories
                            </span>
                        </Button>
                        {category && <Menu className={cx('menu-category')} />}
                    </div>
                    <div className={cx('lzd-menu-labels')}>
                        <HeaderMenu.MenuLabel
                            className={cx('lzd-menu-labels-item')}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderOnly;
