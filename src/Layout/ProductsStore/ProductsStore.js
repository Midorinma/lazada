import classNames from 'classnames/bind';
import styles from './ProductsStore.module.scss';
import Item from './Item';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function ProductsStore() {
    const [storeItem, setStoreItem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/lazMall?q=&type=less`)
            .then((res) => res.json())
            .then((res) => setStoreItem(res));
    }, []);
    return (
        <div className={cx('card-official-stores-wrapper')}>
            {storeItem.map((item) => (
                <Item key={item.id} data={item} />
            ))}
        </div>
    );
}

export default ProductsStore;
