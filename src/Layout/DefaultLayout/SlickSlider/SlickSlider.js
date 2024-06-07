import { slicks } from '~/components/Slick';
import classNames from 'classnames/bind';
import styles from './SlickSlider.module.scss';
import slick from '~/assets/imagesSlick/imagesSlick';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function SlickSlider() {
    return (
        <slicks.SlickHome>
            <Link to={'/sell'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner1}
                        alt="voucher8.8"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
            <Link to={'/vinamilk'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner2}
                        alt="vinamilk"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
            <Link to={'/vitamin'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner3}
                        alt="face cream"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
            <Link to={'/milk-bottle'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner4}
                        alt="milk bottle"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
            <Link to={'/fast-food'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner5}
                        alt="fast-food"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
            <Link to={'/grow-plus'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner6}
                        alt="grow-plus"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
            <Link to={'/beauty-trending'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner7}
                        alt="beauty-trending"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
            <Link to={'/shopping-beauty'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner8}
                        alt="shopping-beauty"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
            <Link to={'/learning-tools'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner9}
                        alt="learning-tools"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
            <Link to={'/sell-under-49k'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner10}
                        alt="sell-under-49k"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
            <Link to={'/Houseware'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner11}
                        alt="Houseware"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
            <Link to={'/laz-sale'}>
                <div className={cx('image-customize')}>
                    <img
                        src={slick.banner12}
                        alt="laz-sale"
                        width={988}
                        height={344}
                        className={cx('img-banner')}
                    />
                </div>
            </Link>
        </slicks.SlickHome>
    );
}

export default SlickSlider;
