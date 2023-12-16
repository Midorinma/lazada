import classNames from 'classnames/bind';
import styles from './ProductsStore.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Item({ data }) {
    return (
        <Link to={`/@${data.title}`}>
            <div className={cx('wrapper')}>
                <div className={cx('card-official-stores-brand-overlay')}></div>
                <div className={cx('card-official-stores-brand-img')}>
                    <img
                        src={data.backgroundimg}
                        alt={data.name}
                        className={cx('background-img')}
                    />
                </div>
                <div className={cx('card-official-stores-shop-img')}>
                    <img
                        src={data.avatar}
                        alt={data.name}
                        className={cx('avt-img')}
                    />
                </div>
                <div className={cx('card-official-stores-h1')}>
                    {data.title}
                </div>
                <p className={cx('card-official-stores-p')}>{data.name}</p>
            </div>
        </Link>
    );
}

export default Item;
