import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeaderShipping.module.scss';
import config from '~/config';
import images from '~/assets/images/images';
import { HeaderMenu } from '~/Layout/DefaultLayout/HeaderMenu';
import { useEffect, useState } from 'react';
import WrapColor from '~/components/WrapColor';

const cx = classNames.bind(styles);

function HeaderShipping() {
    const [onHideMenu, setOnHideMenu] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                if (window.scrollY > 800) {
                    setOnHideMenu(false);
                }
            } else {
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
                </div>
            </header>
        </div>
    );
}

export default HeaderShipping;
