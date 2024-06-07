import classNames from 'classnames/bind';
import styles from './ProductsStar.module.scss';
import { useEffect, useState } from 'react';
import Item from '../item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function ProductsStar() {
    const [star, setStar] = useState([]);
    const [number, setNumber] = useState(24);
    const [loading, setLoading] = useState(false);
    const [hideButton, setHideButton] = useState(true);

    useEffect(() => {
        try {
            fetch(`${process.env.REACT_APP_LOCALHOST}/shirt`)
                .then((res) => res.json())
                .then((res) => setStar(res));
        } catch (error) {
            console.error('Error:', error.message);
        }
    }, []);

    const handleShow = () => {
        setHideButton(false);
        setLoading(true);
        setTimeout(() => {
            setHideButton(true);
            setLoading(false);
            setNumber(number + 5);
        }, 1000);
    };

    return (
        <div className={cx('product-item')}>
            {star.slice(0, number).map((item) => (
                <Item
                    key={item.id}
                    data={item}
                    starIcon={<FontAwesomeIcon icon={faStar} />}
                    widthStar
                />
            ))}

            {hideButton && (
                <div className={cx('card-jfy-load-more')}>
                    {number <= star.length ? (
                        <Button large onClick={handleShow}>
                            load more
                        </Button>
                    ) : (
                        <span className={cx('end-text')}>
                            &emsp; You have reached the end.
                            <br />
                            Do a search to keep exploring!
                        </span>
                    )}
                </div>
            )}

            {loading && (
                <div className={cx('card-jfy-loading', { hidden: true })}>
                    <div className={cx('lazada-loading-container')}></div>
                </div>
            )}
        </div>
    );
}

export default ProductsStar;
