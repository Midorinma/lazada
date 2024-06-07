import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ItemSearch.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function ItemSearch({ data }) {
    return (
        <Link to={`/catalog/${data.slugName}`} className={cx('wrapper')}>
            <div className={cx('user-tab')}>
                <span className={cx('username')}>{data.name}</span>
            </div>
        </Link>
    );
}
ItemSearch.propTypes = {
    data: PropTypes.object.isRequired,
};
export default ItemSearch;
