import classNames from 'classnames/bind';
import styles from './SelectAll.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function SelectAll({
    onHandleDelete,
    onHandleSelectAllChange,
    checked = [],
    item,
}) {
    return (
        <div className={cx('list-header')}>
            <div className={cx('list-header-container')}>
                <div className={cx('list-header-main')}>
                    <div className={cx('checkbox-wrap')}>
                        <label className={cx('list-header-checkbox')}>
                            <span className={cx('next-checkbox-inner')}>
                                <i className={cx('next-icon')}></i>
                            </span>
                            <input
                                type="checkbox"
                                checked={
                                    checked.length === item.productList.length
                                }
                                onChange={onHandleSelectAllChange}
                            />
                        </label>
                        "Select All (1 item(s))"
                    </div>
                    <div className={cx('list-header-operations')}>
                        <div
                            className={cx('automation-btn-delete')}
                            onClick={onHandleDelete}
                        >
                            <span className={cx('icon')}>
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    width={22}
                                    height={40}
                                />
                            </span>
                            <span className={cx('list-header-operation-text')}>
                                Delete
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectAll;
