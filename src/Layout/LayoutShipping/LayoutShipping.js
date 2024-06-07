import FooterOnly from '../LayoutOnly/FooterOnly';
import HeaderShipping from './HeaderShipping';
import classNames from 'classnames/bind';
import styles from './LayoutShipping.module.scss';

const cx = classNames.bind(styles);
function LayoutShipping({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderShipping />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <FooterOnly />
        </div>
    );
}

export default LayoutShipping;
