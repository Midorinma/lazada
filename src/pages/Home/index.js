import { HeaderMenu } from '~/Layout/DefaultLayout/HeaderMenu';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/Button/Button';
//import config from '~/config';
import ProductsItem from '~/components/ProductsItem';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Timer from '~/components/Timer/Timer';
import ProductsStore from './ProductsStore';
import Categories from './Categories';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images/images';
import Justforyou from './Justforyou';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <HeaderMenu.CartContent
                className={cx('cart-channel-btn', { cart: true })}
            />

            {/* <>Flash Sale</> */}
            <div className={cx('hp-mod-flash-card')}>
                <div className={cx('mod-card-header')}>
                    <h3 className={cx('mod-card-title')}>Flash Sale</h3>
                </div>
                <div className={cx('card-fs-content')}>
                    <div className={cx('card-fs-content-header')}>
                        <div className={cx('card-fs-content-header-left')}>
                            <div
                                className={cx(
                                    'card-fs-content-header-left-status',
                                    { pull_left: true },
                                )}
                            >
                                <div className={cx('fs-status-text')}>
                                    On Sale Now
                                </div>
                            </div>
                            {/* <>card-fs-content-header-left-timer</> */}
                            <Timer />
                        </div>
                        <Button className={cx('card-fs-content-button')} normal>
                            SHOP ALL PRODUCTS
                        </Button>
                    </div>
                    <div className={cx('card-fs-content-body')}>
                        <ProductsItem />
                    </div>
                </div>
            </div>

            {/* <>LazMall</> */}
            <div className={cx('card-official-stores')}>
                <div className={cx('hp-mod-card-header')}>
                    <h3 className={cx('hp-mod-card-title')}>LazMall</h3>

                    <Button
                        to={config.routes.lazMall}
                        className={cx('text')}
                        rightIconBlue={
                            <FontAwesomeIcon icon={faChevronRight} />
                        }
                    >
                        Shop More
                    </Button>
                </div>
                <div className={cx('card-official-stores-content')}>
                    <ProductsStore />
                </div>
            </div>

            {/* <>Categories</> */}
            <div className={cx('card-categories')}>
                <div className={cx('hp-mod-card-header')}>
                    <h3 className={cx('hp-mod-card-title')}>Categories</h3>
                </div>
                <div className={cx('hp-mod-card-content')}>
                    <Categories />
                </div>
            </div>

            {/* <>Just for you</> */}
            <Justforyou btn={true} noButton={false} />
            <hr style={{ opacity: 0.2 }} />

            {/* <>Card Bottom Bank</> */}
            <div className={cx('card-bottom-banner')}>
                <div className={cx('hp-mod-card-content')}>
                    <ul className={cx('card-bottom-banner-ul')}>
                        <li
                            className={cx('card-bottom-banner-li', {
                                pull_left: true,
                            })}
                        >
                            <NavLink
                                className={cx('card-bottom-banner-li-content')}
                            >
                                <img src={images.bank1} alt="Tổng hợp ưu đãi" />
                            </NavLink>
                        </li>
                        <li
                            className={cx('card-bottom-banner-li', {
                                pull_left: true,
                            })}
                        >
                            <NavLink
                                className={cx('card-bottom-banner-li-content')}
                            >
                                <img src={images.bank2} alt="Mở thẻ TP bank" />
                            </NavLink>
                        </li>
                        <li
                            className={cx('card-bottom-banner-li', {
                                pull_left: true,
                            })}
                        >
                            <NavLink
                                className={cx('card-bottom-banner-li-content')}
                            >
                                <img src={images.bank3} alt="Ưu đãi thẻ VIB" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
