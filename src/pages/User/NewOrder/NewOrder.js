import classNames from 'classnames/bind';
import styles from './NewOrder.module.scss';
import { NavLink } from 'react-router-dom';
import storage from '~/components/Store/reducers/storage';

const cx = classNames.bind(styles);

function NewOrder({ data, numb }) {
    const List = storage.get('LIST');

    let numbTotal = List.saveTotal.slice(-3);
    return (
        <>
            <tr className={cx('next-table-row')}>
                <td className={cx('next-table-cell')}>
                    <div className={cx('next-table-cell-wrapper')}>
                        {data.order}
                    </div>
                </td>
                <td className={cx('next-table-cell')}>
                    <div className={cx('next-table-cell-wrapper')}>
                        {data.time}
                    </div>
                </td>
                <td className={cx('next-table-cell')}>
                    <div className={cx('next-table-cell-wrapper')}>
                        <div>
                            <div className={cx('recent-item')}>
                                <img
                                    src={data.img}
                                    title={data.title}
                                    alt="img"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                    </div>
                </td>
                <td
                    className={cx('next-table-cell')}
                    style={{ textAlign: 'right' }}
                >
                    <div className={cx('next-table-cell-wrapper')}>
                        ₫{' '}
                        {numbTotal.map((item, index) =>
                            index === numb
                                ? parseFloat(item.total).toFixed(3)
                                : '',
                        )}
                    </div>
                </td>
                <td
                    className={cx('next-table-cell')}
                    style={{ textAlign: 'right' }}
                >
                    <div className={cx('next-table-cell-wrapper')}>
                        <NavLink className={cx('manage-order')}>MANAGE</NavLink>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default NewOrder;
