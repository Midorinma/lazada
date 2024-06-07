import ProductsStar from '~/components/ProductsItem/ProductsStar';
import classNames from 'classnames/bind';
import styles from './Justforyou.module.scss';
import NoBtn from '~/components/ProductsItem/ProductsStar/NoBtn';

const cx = classNames.bind(styles);
function Just({ btn = Boolean, noButton = Boolean }) {
    return (
        <div className={cx('card-jfy')}>
            <div className={cx('hp-mod-card-header')}>
                <h3 className={cx('hp-mod-card-title')}>Just For You</h3>
            </div>
            <div className={cx('hp-mod-card-content')}>
                <div className={cx('card-jfy-grid')}>
                    {btn && <ProductsStar />}
                    {noButton && <NoBtn />}
                </div>
            </div>
        </div>
    );
}

export default Just;
