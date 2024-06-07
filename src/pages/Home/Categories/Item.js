import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
function Item({ data }) {
    return (
        <div className={cx('card-categories-li')}>
            <NavLink
                to={`/@${data.title}`}
                className={cx('card-categories-li-content')}
            >
                <div className={cx('card-categories-image-container')}>
                    <img src={data.image} alt={data.title} />
                </div>
                <div className={cx('card-categories-name')}>
                    <span className={cx('text')}>{data.title}</span>
                </div>
            </NavLink>
        </div>
    );
}

export default Item;
