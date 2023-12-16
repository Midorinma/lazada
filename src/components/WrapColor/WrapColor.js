import classNames from 'classnames/bind';
import styles from './WrapColor.module.scss';

const cx = classNames.bind(styles);
function WrapColor({ children, whitePray = false, className }) {
    const lasses = cx('wrap-color', {
        [className]: className,
        whitePray,
    });
    return <div className={lasses}>{children}</div>;
}

export default WrapColor;
