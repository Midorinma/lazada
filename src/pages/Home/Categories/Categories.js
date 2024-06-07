import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import { useEffect, useState } from 'react';
import Item from './Item';

const cx = classNames.bind(styles);
function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/Categories`)
            .then((res) => res.json())
            .then((res) => setCategories(res));
    }, []);
    return (
        <div className={cx('card-categories-ul')}>
            {categories.map((item) => (
                <Item key={item.id} data={item} />
            ))}
        </div>
    );
}

export default Categories;
