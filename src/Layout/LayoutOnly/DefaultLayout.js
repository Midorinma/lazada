import PropTypes from 'prop-types';
import HeaderOnly from './HeaderOnly';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import FooterOnly from './FooterOnly';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderOnly />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <FooterOnly />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
