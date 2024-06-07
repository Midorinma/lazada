import classNames from 'classnames/bind';
import styles from './ProductsItem.module.scss';
import Item from './item';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function ProductsItem() {
    const [productsItem, setProductsItem] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/shirt`)
            .then((res) => res.json())
            .then((res) => setProductsItem(res));
    }, []);

    return (
        <div className={cx('product-item')}>
            {productsItem.slice(0, 6).map((item) => (
                <Item key={item.id} data={item} />
            ))}
        </div>
    );
}

export default ProductsItem;
