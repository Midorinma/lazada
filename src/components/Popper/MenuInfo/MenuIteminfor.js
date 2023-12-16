import classNames from 'classnames/bind';
import styles from './Menuinfor.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return <p className={cx('menu-item')}>{data.title}</p>;
}

export default MenuItem;
