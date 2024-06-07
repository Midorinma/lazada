import classNames from 'classnames/bind';
import styles from './ProductAds.module.scss';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../Produces';
import Item from '~/components/ProductsItem/item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

const cx = classNames.bind(styles);
function ProductAds() {
    const [products, setProducts] = useState([]);
    const data = useContext(DataContext);

    //Get string convert to some  word
    const name = data.name;
    const nameArray = name.split(' ');
    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_LOCALHOST}/shirt?q=${nameArray[0]}&type=less`,
        )
            .then((res) => res.json())
            .then((res) => setProducts(res));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('pdp-block__product-ads')}>
            <div className={cx('pdp-sponsored-products')}>
                <div className={cx('recommend-content')}>
                    <h6 className={cx('recommend-title')}>
                        Sponsored Products
                    </h6>
                    <div className={cx('recommend-product-list')}>
                        {products
                            .sort((a, b) => Math.random(a) - Math.random(b))
                            .slice(0, 5)
                            .map((item) => {
                                return data.id !== item.id ? (
                                    <Item
                                        key={item.id}
                                        data={item}
                                        starIcon={
                                            <FontAwesomeIcon icon={faStar} />
                                        }
                                        className={cx('change')}
                                    />
                                ) : (
                                    false
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ProductAds);
