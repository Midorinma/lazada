import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import { icons } from '~/components/icons';

const cx = classNames.bind(styles);
function Footer() {
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

            <div className={cx('footer-third')}>
                <div className={cx('lzd-footer-inner')}>
                    <div
                        className={cx('lzd-footer-width-50', {
                            lzd_footer_left: true,
                        })}
                    >
                        <div className={cx('lzd-footer-about')}>
                            <h1 className={cx('lzd-footer-title')}>
                                LAZADA - LEADING ONLINE SHOPPING CHANNEL!
                            </h1>
                            <p>
                                <span>
                                    Lazada is Asia’s leading online department
                                    store offering a fast, secure and convenient
                                    online shopping experience with a broad
                                    product offering in categories ranging from
                                    fashion, consumer electronics to household
                                    goods, toys and sports equipment. Lazada is
                                    always striving to offer its customers the
                                    best possible offering – including multiple
                                    payment options, free returns and extensive
                                    customer service and warranty commitments.
                                    Lazada has a number of brand named products
                                    including various categories for customers
                                    to choose from i.e. Fashion, Electronics,
                                    Toys, Sporting goods and Home Appliances.
                                    Lazada aims to provide the best products and
                                    impeccable service to the customer with
                                    privileges including Free Return, Cash On
                                    Delivery and Customer Service in order to
                                    deliver a valuable shopping experience.
                                </span>
                            </p>
                            <p>
                                <span>
                                    Be the first to hear of our exciting sales &
                                    promos and get updates on the latest
                                    products and campaigns featured in Lazada.
                                    Gain insights to current and upcoming sales
                                    and promotions followed by taking part in
                                    our mobile and social media campaigns to win
                                    free prizes and vouchers. All at your
                                    fingertips, simply shop- anywhere, at
                                    anytime!
                                </span>
                            </p>
                            <p>
                                <span>
                                    Because you are important to us, we are
                                    dedicated to providing you the best shopping
                                    experience. If you have any questions,
                                    please feel free to contact us through phone
                                    calls or Emails.
                                </span>
                            </p>
                        </div>
                        <div className={cx('lzd-footer-about')}>
                            <h3 className={cx('lzd-footer-title')}>
                                WHAT'S NEW?
                            </h3>
                            <p>
                                <NavLink className={cx('style-phone-1')}>
                                    <span>samsung</span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink className={cx('style-phone-2')}>
                                    <span>Apple</span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-3')}>
                                        Xiaomi
                                    </span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-4')}>
                                        Bluestone
                                    </span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-5')}>
                                        L'oreal
                                    </span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-6')}>
                                        Maybeline
                                    </span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-7')}>
                                        Enfa
                                    </span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-8')}>
                                        Boddy
                                    </span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-9')}>
                                        Huggies
                                    </span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-10')}>
                                        Adidas
                                    </span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-11')}>
                                        Casio
                                    </span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-12')}>
                                        Mediamart
                                    </span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-13')}>
                                        Juno
                                    </span>
                                    <label> , </label>
                                </NavLink>
                                <NavLink>
                                    <span className={cx('style-phone-14')}>
                                        GUMAC.
                                    </span>
                                </NavLink>
                            </p>
                        </div>
                        <div className={cx('lzd-footer-new')}></div>
                    </div>
                    <div className={cx('lzd-footer-width-25')}>
                        <div className={cx('lzd-footer-top-category')}>
                            <h3 className={cx('lzd-footer-title')}>
                                TOP CATEGORIES &amp; BRANDS
                            </h3>
                            <div className={cx('lzd-footer-categoty-margin')} />
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    SMARTPHONE
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-1', {
                                    phone: true,
                                })}
                            >
                                iPhone
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-2', {
                                    phone: true,
                                })}
                            >
                                Samsung
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-3', {
                                    phone: true,
                                })}
                            >
                                Xiaomi
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-4', {
                                    phone: true,
                                })}
                            >
                                Vivo
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-5', {
                                    phone: true,
                                })}
                            >
                                Samsung
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-6', {
                                    phone: true,
                                })}
                            >
                                Vsmart
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-7', {
                                    phone: true,
                                })}
                            >
                                Oppo
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-8', {
                                    phone: true,
                                })}
                            >
                                Huawei
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-9', {
                                    phone: true,
                                })}
                            >
                                Samsung
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-10', {
                                    phone: true,
                                })}
                            >
                                iPhone12
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-11', {
                                    phone: true,
                                })}
                            >
                                iPhone11
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-12', {
                                    phone: true,
                                })}
                            >
                                Samsung
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-13', {
                                    phone: true,
                                })}
                            >
                                Redmi Note 8
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-14', {
                                    phone: true,
                                })}
                            >
                                Redmi Note 8
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-15', {
                                    phone: true,
                                })}
                            >
                                Galaxy Note
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-16', {
                                    phone: true,
                                })}
                            >
                                Galaxy A51
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-17', {
                                    phone: true,
                                })}
                            >
                                Galaxy A51
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-18', {
                                    phone: true,
                                })}
                            >
                                Galaxy S21 Ultra
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-19', {
                                    phone: true,
                                })}
                            >
                                Vsmart Live 4
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-20', {
                                    phone: true,
                                })}
                            >
                                Vsmart Joy 3
                            </NavLink>
                            <div
                                className={cx('lzd-footer-categoty-margin')}
                            ></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    TABLETS
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-21', {
                                    phone: true,
                                })}
                            >
                                iPad
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-22', {
                                    phone: true,
                                })}
                            >
                                Samsung
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-23', {
                                    phone: true,
                                })}
                            >
                                Huawei
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-24', {
                                    phone: true,
                                })}
                            >
                                Lenovo
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-25', {
                                    phone: true,
                                })}
                            >
                                Kindle
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-26', {
                                    phone: true,
                                })}
                            >
                                iPad Pro
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-27', {
                                    phone: true,
                                })}
                            >
                                iPad mini
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-28', {
                                    phone: true,
                                })}
                            >
                                Masstel
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-29', {
                                    phone: true,
                                })}
                            >
                                iPad Air 2
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-30', {
                                    phone: true,
                                })}
                            >
                                iPad Mini 5
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-31', {
                                    phone: true,
                                })}
                            >
                                LAPTOPS
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-32', {
                                    phone: true,
                                })}
                            >
                                Dell
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-33', {
                                    phone: true,
                                })}
                            >
                                Asus
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-34', {
                                    phone: true,
                                })}
                            >
                                Macbook
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-35', {
                                    phone: true,
                                })}
                            >
                                HP
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-36', {
                                    phone: true,
                                })}
                            >
                                Lenovo
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-37', {
                                    phone: true,
                                })}
                            >
                                Acer
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-38', {
                                    phone: true,
                                })}
                            >
                                MSI
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-39', {
                                    phone: true,
                                })}
                            >
                                Microsoft Surface
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-40', {
                                    phone: true,
                                })}
                            >
                                Macbook Pro
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-41', {
                                    phone: true,
                                })}
                            >
                                Macbook Air 2018
                            </NavLink>
                            <div
                                className={cx('lzd-footer-categoty-margin')}
                            ></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    TELEVISIONS
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-42', {
                                    phone: true,
                                })}
                            >
                                Sony
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-43', {
                                    phone: true,
                                })}
                            >
                                LG
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-44', {
                                    phone: true,
                                })}
                            >
                                Vsmart
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-45', {
                                    phone: true,
                                })}
                            >
                                Xiaomi
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-46', {
                                    phone: true,
                                })}
                            >
                                Toshiba
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-47', {
                                    phone: true,
                                })}
                            >
                                Samsung
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-48', {
                                    phone: true,
                                })}
                            >
                                Panasonic
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-49', {
                                    phone: true,
                                })}
                            >
                                Sharp
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-50', {
                                    phone: true,
                                })}
                            >
                                Asanzo
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-51', {
                                    phone: true,
                                })}
                            >
                                Asano
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-52', {
                                    phone: true,
                                })}
                            >
                                TCL
                            </NavLink>
                            <div
                                className={cx('lzd-footer-categoty-margin')}
                            ></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    AUDIO
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-53', {
                                    phone: true,
                                })}
                            >
                                Bluetooth Speakers
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-54', {
                                    phone: true,
                                })}
                            >
                                Karaoke Speakers
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-55', {
                                    phone: true,
                                })}
                            >
                                JBL
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-56', {
                                    phone: true,
                                })}
                            >
                                Sony
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-57', {
                                    phone: true,
                                })}
                            >
                                Harman Kardon
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-58', {
                                    phone: true,
                                })}
                            >
                                Bose
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-59', {
                                    phone: true,
                                })}
                            >
                                Tronsmart
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-60', {
                                    phone: true,
                                })}
                            >
                                Kiomic
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-61', {
                                    phone: true,
                                })}
                            >
                                Zealot
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-62', {
                                    phone: true,
                                })}
                            >
                                LG
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-63', {
                                    phone: true,
                                })}
                            >
                                Temeisheng
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-64', {
                                    phone: true,
                                })}
                            >
                                Hoco
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-65', {
                                    phone: true,
                                })}
                            >
                                Kimiso
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-66', {
                                    phone: true,
                                })}
                            >
                                Kimiso
                            </NavLink>
                            <div
                                className={cx('lzd-footer-categoty-margin')}
                            ></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    REFRIGERATORS
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-67', {
                                    phone: true,
                                })}
                            >
                                Mini Refrigerators
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-68', {
                                    phone: true,
                                })}
                            >
                                Sanyo
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-69', {
                                    phone: true,
                                })}
                            >
                                Electrolux
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-70', {
                                    phone: true,
                                })}
                            >
                                Panasonic
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-71', {
                                    phone: true,
                                })}
                            >
                                Toshiba
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-72', {
                                    phone: true,
                                })}
                            >
                                Samsung
                            </NavLink>
                            <div
                                className={cx('lzd-footer-categoty-margin')}
                            ></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    HEALTH &amp; BEAUTY
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-73', {
                                    phone: true,
                                })}
                            >
                                La Roche Posay
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-74', {
                                    phone: true,
                                })}
                            >
                                MAC
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-75', {
                                    phone: true,
                                })}
                            >
                                Maybelline
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-76', {
                                    phone: true,
                                })}
                            >
                                Laneige
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-77', {
                                    phone: true,
                                })}
                            >
                                Innisfree
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-78', {
                                    phone: true,
                                })}
                            >
                                Vichy
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-79', {
                                    phone: true,
                                })}
                            >
                                Hadalabo
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-80', {
                                    phone: true,
                                })}
                            >
                                Senka
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-81', {
                                    phone: true,
                                })}
                            >
                                Anessa
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-82', {
                                    phone: true,
                                })}
                            >
                                The Face Shop
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-83', {
                                    phone: true,
                                })}
                            >
                                Black Rouge Lipsticks
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-84', {
                                    phone: true,
                                })}
                            >
                                Kiehl’s
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-85', {
                                    phone: true,
                                })}
                            >
                                Suncreams
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-86', {
                                    phone: true,
                                })}
                            >
                                Cleanser
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-87', {
                                    phone: true,
                                })}
                            >
                                Micellar Water
                            </NavLink>
                            <div
                                className={cx('lzd-footer-categoty-border')}
                            ></div>
                        </div>
                    </div>
                    <div className={cx('lzd-footer-width-25')}>
                        <div className={cx('lzd-footer-top-category')}>
                            <div className={cx('lzd-footer-tag-margin')}></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    Cameras
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-88', {
                                    phone: true,
                                })}
                            >
                                Fujifilm
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-89', {
                                    phone: true,
                                })}
                            >
                                Nikon
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-90', {
                                    phone: true,
                                })}
                            >
                                Nikon
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-91', {
                                    phone: true,
                                })}
                            >
                                Canon
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-92', {
                                    phone: true,
                                })}
                            >
                                Sony
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-93', {
                                    phone: true,
                                })}
                            >
                                Camcorder
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-94', {
                                    phone: true,
                                })}
                            >
                                GoPro
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-95', {
                                    phone: true,
                                })}
                            >
                                Flycam
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-96', {
                                    phone: true,
                                })}
                            >
                                Xiaomi
                            </NavLink>
                            <div className={cx('lzd-footer-tag-margin')}></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    WASHING MACHINES
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-97', {
                                    phone: true,
                                })}
                            >
                                Electrolux
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-98', {
                                    phone: true,
                                })}
                            >
                                Sanyo
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-99', {
                                    phone: true,
                                })}
                            >
                                Toshiba
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-100', {
                                    phone: true,
                                })}
                            >
                                Aqua
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-101', {
                                    phone: true,
                                })}
                            >
                                Hitachi
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-102', {
                                    phone: true,
                                })}
                            >
                                Panasonic
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-103', {
                                    phone: true,
                                })}
                            >
                                Samsung
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-104', {
                                    phone: true,
                                })}
                            >
                                LG
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-105', {
                                    phone: true,
                                })}
                            >
                                Bosch
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-106', {
                                    phone: true,
                                })}
                            >
                                Midea
                            </NavLink>
                            <div className={cx('lzd-footer-tag-margin')}></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    MICROWAVES
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-107', {
                                    phone: true,
                                })}
                            >
                                Sharp
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-108', {
                                    phone: true,
                                })}
                            >
                                Electrolux
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-109', {
                                    phone: true,
                                })}
                            >
                                Bluestone
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-110', {
                                    phone: true,
                                })}
                            >
                                Samsung
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-111', {
                                    phone: true,
                                })}
                            >
                                Xiaomi
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-112', {
                                    phone: true,
                                })}
                            >
                                Beko
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-113', {
                                    phone: true,
                                })}
                            >
                                Panasonic
                            </NavLink>
                            <div className={cx('lzd-footer-tag-margin')}></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    AUTOMOTIVE &amp; MOTORCYCLES
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-114', {
                                    phone: true,
                                })}
                            >
                                Honda
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-115', {
                                    phone: true,
                                })}
                            >
                                Yamaha
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-116', {
                                    phone: true,
                                })}
                            >
                                Taya Motor
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-117', {
                                    phone: true,
                                })}
                            >
                                Suzuki
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-118', {
                                    phone: true,
                                })}
                            >
                                Piaggio
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-119')}
                            >
                                Electric Motorcycles
                            </NavLink>
                            <div className={cx('lzd-footer-tag-margin')}></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    Best Comics 2021
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-120', {
                                    phone: true,
                                })}
                            >
                                Detective Conan
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-121', {
                                    phone: true,
                                })}
                            >
                                Kimetsu Yaiba
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-122', {
                                    phone: true,
                                })}
                            >
                                One Piece
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-123', {
                                    phone: true,
                                })}
                            >
                                Đảo hải tặc
                            </NavLink>
                            <div className={cx('lzd-footer-tag-margin')}></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <NavLink
                                    className={cx('lzd-footer-title-small')}
                                >
                                    ONLINE GROCERY STORE
                                </NavLink>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-124', {
                                    phone: true,
                                })}
                            >
                                Alcoholic Beverag
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-125', {
                                    phone: true,
                                })}
                            >
                                Strongbow
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-126', {
                                    phone: true,
                                })}
                            >
                                Heineken
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-127', {
                                    phone: true,
                                })}
                            >
                                Tiger
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-128', {
                                    phone: true,
                                })}
                            >
                                Bia 333
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-129', {
                                    phone: true,
                                })}
                            >
                                Budweiser
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-130', {
                                    phone: true,
                                })}
                            >
                                Corona
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-131', {
                                    phone: true,
                                })}
                            >
                                Hoegaarden
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-132', {
                                    phone: true,
                                })}
                            >
                                Soft Drinks
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-133', {
                                    phone: true,
                                })}
                            >
                                Coca-cola
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-134', {
                                    phone: true,
                                })}
                            >
                                7Up
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-135', {
                                    phone: true,
                                })}
                            >
                                Pepsi
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-136', {
                                    phone: true,
                                })}
                            >
                                La Vie
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-137', {
                                    phone: true,
                                })}
                            >
                                Star Kombucha
                            </NavLink>
                            <div className={cx('lzd-footer-tag-margin')}></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <span className={cx('lzd-footer-title-small')}>
                                    SEARCH TRENDS 2021
                                </span>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-138', {
                                    phone: true,
                                })}
                            >
                                Anti Covid-19
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-139', {
                                    phone: true,
                                })}
                            >
                                Mask 3M
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-140', {
                                    phone: true,
                                })}
                            >
                                Mask Unicharm
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-141', {
                                    phone: true,
                                })}
                            >
                                Medical Mask
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-142', {
                                    phone: true,
                                })}
                            >
                                Handwash
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-143', {
                                    phone: true,
                                })}
                            >
                                Coffee
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-144', {
                                    phone: true,
                                })}
                            >
                                Electric Cooke
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-145', {
                                    phone: true,
                                })}
                            >
                                Bed
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-146', {
                                    phone: true,
                                })}
                            >
                                Female Watches
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-147', {
                                    phone: true,
                                })}
                            >
                                Male Watches
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-148', {
                                    phone: true,
                                })}
                            >
                                Electric Treadmill
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-149', {
                                    phone: true,
                                })}
                            >
                                Guitar
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-150', {
                                    phone: true,
                                })}
                            >
                                Piano
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-151', {
                                    phone: true,
                                })}
                            >
                                Massage Chair
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-152', {
                                    phone: true,
                                })}
                            >
                                Crocs
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-153', {
                                    phone: true,
                                })}
                            >
                                Chess
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-154', {
                                    phone: true,
                                })}
                            >
                                Hat
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-155', {
                                    phone: true,
                                })}
                            >
                                Xe cẩu
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-156', {
                                    phone: true,
                                })}
                            >
                                Crane
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-157', {
                                    phone: true,
                                })}
                            >
                                Flower
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-158', {
                                    phone: true,
                                })}
                            >
                                Alphabet
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-159', {
                                    phone: true,
                                })}
                            >
                                Soccer
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-160', {
                                    phone: true,
                                })}
                            >
                                Football Shirt
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-161', {
                                    phone: true,
                                })}
                            >
                                Bikini
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-162', {
                                    phone: true,
                                })}
                            >
                                Elsa
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-163', {
                                    phone: true,
                                })}
                            >
                                Ivy Moda
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-164', {
                                    phone: true,
                                })}
                            >
                                MLB
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-165', {
                                    phone: true,
                                })}
                            >
                                Dirty coin
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-166', {
                                    phone: true,
                                })}
                            >
                                Baggy Pants
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-167', {
                                    phone: true,
                                })}
                            >
                                Vascara
                            </NavLink>
                            <div className={cx('lzd-footer-tag-margin')}></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <span className={cx('lzd-footer-title-small')}>
                                    Shop worldwide with AliExpress
                                </span>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-168', {
                                    phone: true,
                                })}
                            >
                                Russia
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-169', {
                                    phone: true,
                                })}
                            >
                                Spain
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-170', {
                                    phone: true,
                                })}
                            >
                                France
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-171', {
                                    phone: true,
                                })}
                            >
                                Germany
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-172', {
                                    phone: true,
                                })}
                            >
                                Poland
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-173', {
                                    phone: true,
                                })}
                            >
                                Brazil
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-174', {
                                    phone: true,
                                })}
                            >
                                Saudi Arabia
                            </NavLink>
                            <div className={cx('lzd-footer-tag-margin')}></div>
                            <h4 className={cx('lzd-footer-title-small')}>
                                <span className={cx('lzd-footer-title-small')}>
                                    Shop worldwide with Daraz
                                </span>
                            </h4>
                            <NavLink
                                className={cx('lzd-footer-category-tag-175', {
                                    phone: true,
                                })}
                            >
                                Pakistan
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-176', {
                                    phone: true,
                                })}
                            >
                                Bangladesh
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-177', {
                                    phone: true,
                                })}
                            >
                                Sri Lanka
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-178', {
                                    phone: true,
                                })}
                            >
                                Myanmar
                            </NavLink>
                            <label> , </label>
                            <NavLink
                                className={cx('lzd-footer-category-tag-179', {
                                    phone: true,
                                })}
                            >
                                Nepal
                            </NavLink>
                            <textarea
                                style={{ display: 'none' }}
                                className={cx('J_MoreCategoryRight')}
                            ></textarea>
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

export default Footer;
