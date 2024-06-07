import classNames from 'classnames/bind';
import styles from './FooterOnly.module.scss';
import { NavLink } from 'react-router-dom';
import { icons } from '~/components/icons';

const cx = classNames.bind(styles);
function FooterOnly() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-first')}>
                <div className={cx('lzd-footer-inner')}>
                    <div className={cx('lzd-footer-width-25')}>
                        <h3 className={cx('footer-title')}>CONTACT US</h3>
                        <ul className={cx('footer-list')}>
                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Hotline & Online chat (24/7)
                                </NavLink>
                            </li>
                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Help Center
                                </NavLink>
                            </li>
                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    How to Buy
                                </NavLink>
                            </li>
                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Shipping & Delivery
                                </NavLink>
                            </li>
                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    International Product Policy
                                </NavLink>
                            </li>
                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    How to Return
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('lzd-footer-width-25')}>
                        <h3 className={cx('footer-title')}>LAZADA VIETNAM</h3>
                        <ul className={cx('footer-list')}>
                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    All Categories
                                </NavLink>
                            </li>

                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    About Lazada
                                </NavLink>
                            </li>

                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Sell on Lazada
                                </NavLink>
                            </li>

                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Affiliate Program
                                </NavLink>
                            </li>

                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Careers
                                </NavLink>
                            </li>

                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Terms &amp; Conditions
                                </NavLink>
                            </li>

                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Privacy Policy
                                </NavLink>
                            </li>

                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Press &amp; Media
                                </NavLink>
                            </li>

                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Intellectual Property Protection
                                </NavLink>
                            </li>

                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Operating Regulation
                                </NavLink>
                            </li>

                            <li className={cx('footer-li')}>
                                <NavLink className={cx('link-style')}>
                                    Procedure of claim and dispute handling
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('lzd-footer-width-50')}>
                        <div className={cx('lzd-footer-app-downloads')}>
                            <div
                                className={cx('icon-logo-lazada-footer', {
                                    pull_left: true,
                                })}
                            >
                                <img src={icons.cart.iconLaz} alt="Lazada" />
                            </div>
                            <div
                                className={cx('lzd-app-download-text', {
                                    pull_left: true,
                                })}
                            >
                                <div className={cx('title')}>
                                    Go where your heart beats
                                </div>
                                <div className={cx('text')}>
                                    Download the App
                                </div>
                            </div>
                            <div
                                className={cx('pull_left')}
                                style={{ width: 290 }}
                            >
                                <NavLink
                                    className={cx('icon-appstore-footer', {
                                        pull_left: true,
                                    })}
                                >
                                    <img
                                        className={cx('lzd-footer-appStore')}
                                        src={icons.cart.appStore}
                                        alt="AppStore"
                                    />
                                </NavLink>
                                <NavLink
                                    className={cx('icon-appstore-footer', {
                                        pull_left: true,
                                    })}
                                >
                                    <img
                                        className={cx('icon-android-footer')}
                                        src={icons.cart.googlePlay}
                                        alt="Google Play"
                                    />
                                </NavLink>
                                <NavLink
                                    className={cx('icon-huawei-footer', {
                                        pull_left: true,
                                    })}
                                >
                                    <img
                                        className={cx('lzd-footer-sprit')}
                                        src={icons.cart.appGalery}
                                        alt="AppGallery"
                                    />
                                </NavLink>
                            </div>
                        </div>
                        <div className={cx('clear')}></div>
                        <div className={cx('lzd-footer-app-supplement')}></div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-second')}>
                <div className={cx('lzd-footer-inner')}>
                    <div className={cx('lzd-footer-width-32')}>
                        <h3 className={cx('lzd-footer-h3')}>Payment Methods</h3>
                        <span className={cx('lzd-icon-payment')}>
                            <img
                                src={icons.cart.visa}
                                alt="visa"
                                className={cx('lzd-footer-sprit')}
                            />
                        </span>
                        <span className={cx('lzd-icon-payment')}>
                            <img
                                src={icons.cart.mystery}
                                alt="mystery"
                                className={cx('lzd-footer-sprit')}
                            />
                        </span>
                        <span className={cx('lzd-icon-payment')}>
                            <img
                                src={icons.cart.jcb}
                                alt="jcb"
                                className={cx('lzd-footer-sprit')}
                            />
                        </span>
                        <span className={cx('lzd-icon-payment')}>
                            <img
                                src={icons.cart.delivery}
                                alt="delivery"
                                className={cx('lzd-footer-sprit')}
                            />
                        </span>
                        <span className={cx('lzd-icon-payment')}>
                            <img
                                src={icons.cart.napas}
                                alt="napas"
                                className={cx('lzd-footer-sprit')}
                            />
                        </span>
                        <span className={cx('lzd-icon-payment')}>
                            <img
                                src={icons.cart.pig}
                                alt="pig"
                                className={cx('lzd-footer-sprit')}
                                style={{ width: 32 }}
                            />
                        </span>
                        <span className={cx('lzd-icon-payment')}>
                            <img
                                src={icons.cart.zaloPay}
                                alt="ZaloPay"
                                className={cx('lzd-footer-zm')}
                            />
                        </span>
                        <span className={cx('lzd-icon-payment')}>
                            <img
                                src={icons.cart.momo}
                                alt="momo"
                                className={cx('lzd-footer-zm')}
                            />
                        </span>
                    </div>
                    <div
                        className={cx('lzd-footer-width-32', {
                            lzd_footer_spacing: true,
                        })}
                    >
                        <h3 className={cx('lzd-footer-h3')}>
                            Delivery Services
                        </h3>
                        <img
                            className={'lzd-icon-delivery'}
                            src={icons.cart.logistics}
                            alt="Lazada logistics"
                        />
                        <img
                            className={'lzd-icon-delivery'}
                            src={icons.cart.ghn}
                            alt="GHN"
                        />
                        <img
                            className={'lzd-icon-delivery'}
                            src={icons.cart.ninjaVan}
                            alt="NinjaVan"
                        />
                        <img
                            className={'lzd-icon-delivery'}
                            src={icons.cart.ship60}
                            alt="ship"
                        />
                        <img
                            className={'lzd-icon-delivery'}
                            src={icons.cart.bestInc}
                            alt="bestInc"
                        />
                        <img
                            className={'lzd-icon-delivery'}
                            src={icons.cart.ahamove}
                            alt="ahamove"
                        />
                        <img
                            className={'lzd-icon-delivery'}
                            src={icons.cart.jt}
                            alt="jt"
                        />
                    </div>
                    <div className={cx('lzd-footer-width-32')}>
                        <h3 className={cx('lzd-footer-h3')}>Verified by</h3>
                        <div className={cx('pull_left')}>
                            <a
                                href="https://lzd-img-global.slatic.net/g/tps/imgextra/i4/O1CN01f0h0WI1FBEDveWL8o_!!6000000000448-2-tps-1190-1684.png"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className={cx('img-verify', {
                                        img_pointer: true,
                                    })}
                                    src={icons.cart.dds}
                                    alt="pci_dss"
                                    style={{ height: 60 }}
                                />
                            </a>
                            <a href="/" target="_blank" rel="noreferrer">
                                <img
                                    className={cx('img-verify', {
                                        img_pointer: true,
                                    })}
                                    src={icons.cart.finger}
                                    alt="vn-verified-1"
                                    style={{ height: 80 }}
                                />
                            </a>
                            <a
                                href="https://lzd-img-global.slatic.net/g/tps/imgextra/i4/O1CN01bvSldX1gkULXWGauo_!!6000000004180-2-tps-1190-1683.png"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className={cx('img-verify', {
                                        img_pointer: true,
                                    })}
                                    src={icons.cart.bsi}
                                    alt="ISO"
                                    style={{ height: 42 }}
                                />
                            </a>
                        </div>
                        <div className={cx('pull_left')}>
                            <a href="/" target="_blank">
                                <img
                                    className={cx('img-verify', {
                                        img_pointer: true,
                                    })}
                                    src={icons.cart.ddk}
                                    alt="register-0"
                                    height={40}
                                />
                            </a>
                            <a href="/" target="_blank">
                                <img
                                    className={cx('img-verify', {
                                        img_pointer: true,
                                    })}
                                    src={icons.cart.dtb}
                                    alt="announced"
                                    height={40}
                                />
                            </a>
                            <a href="/" target="_blank">
                                <img
                                    className={cx('img-verify', {
                                        img_pointer: true,
                                    })}
                                    src={icons.cart.ddk}
                                    alt="register-1"
                                    height={40}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('footer-fourth')}>
                <div className={cx('lzd-footer-inner')}>
                    <div className={cx('lzd-footer-width-50')}>
                        <h3 className={cx('lzd-footer-title')}>
                            Lazada Southeast Asia
                        </h3>
                        <NavLink>
                            <img
                                className={cx('lzd-footer-country')}
                                src={icons.cart.country_lao}
                                alt="lao"
                            />
                        </NavLink>
                        <NavLink>
                            <img
                                className={cx('lzd-footer-country')}
                                src={icons.cart.country_usa}
                                alt="USA"
                                style={{ marginLeft: '10px' }}
                            />
                        </NavLink>
                        <NavLink>
                            <img
                                className={cx('lzd-footer-country')}
                                src={icons.cart.country_cap}
                                alt="cap"
                                style={{ marginLeft: '10px' }}
                            />
                        </NavLink>
                        <NavLink>
                            <img
                                className={cx('lzd-footer-country')}
                                src={icons.cart.country_china}
                                alt="china"
                                style={{ marginLeft: '10px' }}
                            />
                        </NavLink>
                        <NavLink>
                            <img
                                className={cx('lzd-footer-country')}
                                src={icons.cart.country_thailand}
                                alt="Thailand"
                                style={{ marginLeft: '10px' }}
                            />
                        </NavLink>
                        <NavLink>
                            <img
                                className={cx('lzd-footer-country')}
                                src={icons.cart.country_vietnam}
                                alt="VietNamese"
                                style={{ marginLeft: '10px' }}
                            />
                        </NavLink>
                    </div>
                    <div className={cx('lzd-footer-width-25')}>
                        <h3 className={cx('lzd-footer-title')}>Follow Me</h3>
                        <a
                            href="https://www.facebook.com/DuyIT258/"
                            target="_blank"
                            rel="noreferrer"
                            style={{ display: 'inline-block' }}
                        >
                            <img
                                src={icons.cart.facebook}
                                alt="facebook"
                                style={{ width: 32, height: 32 }}
                            />
                        </a>
                        <a
                            href="https://github.com/Midorinma"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'inline-block',
                                paddingLeft: '3px',
                            }}
                        >
                            <icons.gitIcon />
                        </a>
                        <a
                            href="https://vuquangduy2017@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'inline-block',
                                paddingLeft: '3px',
                            }}
                        >
                            <img
                                src={icons.cart.gmail}
                                alt="gmail"
                                style={{ width: 32, height: 32 }}
                            />
                        </a>
                    </div>
                    <div className={cx('lzd-footer-width-25')}>
                        <div className={cx('lzd-footer-copyright')}>
                            <p>Candidate name: Vũ Quang Duy</p>
                            <p>Phone: 0971053102</p>
                            <p>Email: vuquangduy2017@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterOnly;
