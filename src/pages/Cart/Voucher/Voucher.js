import classNames from 'classnames/bind';
import styles from './Voucher.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Voucher({ title = '' }) {
    return (
        <div className={cx('voucher-input')}>
            <p className={cx('voucher-title')}>{title}</p>
            <div className={cx('voucher-input-inner')}>
                <div className={cx('voucher-input-col1')}>
                    <span className={cx('next-input')}>
                        <input type="text" placeholder="Enter Voucher Code" />
                    </span>
                </div>
                <div className={cx('voucher-input-col2')}>
                    <Button className={cx('next-btn-normal')}>APPLY</Button>
                </div>
            </div>
        </div>
    );
}

export default Voucher;
