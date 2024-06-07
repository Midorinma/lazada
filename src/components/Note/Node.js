import classNames from 'classnames/bind';
import styles from './Node.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
export const Loading = () => {
    return (
        <div className={cx('Loading')}>
            <div className={cx('recommend-loading')}></div>
        </div>
    );
};

export const Error = () => {
    return (
        <div className={cx('next-feedback')}>
            <i className={cx('next-icon')}>
                <FontAwesomeIcon icon={faTriangleExclamation} />
            </i>
            <div className={cx('next-feedback-content')}>
                Please select item(s).
            </div>
        </div>
    );
};

export const Remove = ({ onCancelClick, onDelClick }) => {
    return (
        <div className={cx('mod-dialog-overlay')}>
            <div className={cx('confirm')}>
                <div className={cx('mod-dialog-title')}>Remove from cart</div>
                <div className={cx('mod-dialog-cont')}>
                    Are you sure you want to delete these item(s)
                </div>
                <div className={cx('mod-dialog-ft')}>
                    <div className={cx('mod-dialog-ft-btn')}>
                        <button
                            onClick={onCancelClick}
                            className={cx('cancel')}
                        >
                            CANCEL
                        </button>
                        <button onClick={onDelClick} className={cx('ok')}>
                            REMOVE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
