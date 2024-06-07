import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductsItem.module.scss';

const cx = classNames.bind(styles);
function Item({ data, starIcon, widthStar = false, className }) {
    const classes = cx('wrapper', {
        [className]: className,
        starIcon,
        widthStar,
    });
    return (
        <Link to={`/produces/${data.slug}`}>
            <div className={classes}>
                <div className={cx('fs-card-img-container')}>
                    <img
                        src={data.image}
                        alt={data.title}
                        className={cx('fs-card-img')}
                    />
                </div>
                <div className={cx('fs-card-text')}>
                    <p className={cx('fs-card-title')}>{data.title}</p>
                    <div className={cx('fs-card-price')}>
                        <span
                            className={cx('currency')}
                            style={{ paddingTop: '2px' }}
                        >
                            {data.currency}
                        </span>
                        <span className={cx('price')}>{data.price}</span>
                    </div>
                    <div className={cx('fs-card-origin-price')}>
                        <span className={cx('fs-origin-price')}>
                            <span className={cx('currency')}>
                                {data.currency}
                            </span>
                            <span className={cx('price')}>{data.priceOld}</span>
                        </span>
                        <span className={cx('fs-discount')}>
                            {data.discount}
                        </span>
                    </div>
                    {starIcon && <span className={cx('icon')}>{starIcon}</span>}
                    {starIcon && <span className={cx('icon')}>{starIcon}</span>}
                    {starIcon && <span className={cx('icon')}>{starIcon}</span>}
                    {starIcon && <span className={cx('icon')}>{starIcon}</span>}
                    {starIcon && <span className={cx('icon')}>{starIcon}</span>}
                    {starIcon && (
                        <span className={cx('quantity')}>
                            ({data.quantitystart})
                        </span>
                    )}
                </div>
                <div className={cx('fs-card-sold')}></div>
            </div>
        </Link>
    );
}
export default Item;
