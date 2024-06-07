import classNames from 'classnames/bind';
import styles from './NoBtn.module.scss';
import { useEffect, useState } from 'react';
import Item from '../../item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function NoBtn() {
    const [star, setStar] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/shirt`)
            .then((res) => res.json())
            .then((res) => setStar(res));
    }, []);

    return (
        <div className={cx('product-item')}>
            {star.map((item) => (
                <Item
                    key={item.id}
                    data={item}
                    starIcon={<FontAwesomeIcon icon={faStar} />}
                    widthStar
                />
            ))}
        </div>
    );
}

export default NoBtn;
