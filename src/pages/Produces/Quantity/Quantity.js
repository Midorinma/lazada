import classNames from 'classnames/bind';
import styles from './Quantity.module.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Quantity({ data }, ref) {
    const param = useParams();
    const [quantity, setQuantity] = useState(
        param.slug === undefined ? data : 1,
    );

    const handlePlus = () => {
        setQuantity((prev) => prev + 1);
    };
    const handleMinus = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1));
    };

    return (
        <div className={cx('module_quantity-input')}>
            <div className={cx('pdp-mod-product-info-section')}>
                <div className={cx('section-content')}>
                    <div className={cx('next-number-picker-inline')}>
                        <div className={cx('next-number-picker-handler-wrap')}>
                            <div
                                unselectable="unselectable"
                                className={cx('next-number-picker-handler-up')}
                                style={
                                    quantity >= 30
                                        ? {
                                              cursor: 'not-allowed',
                                              backgroundColor: '#eff0f5',
                                          }
                                        : {
                                              cursor: 'pointer',
                                          }
                                }
                                onClick={handlePlus}
                            >
                                <span
                                    unselectable="unselectable"
                                    className={cx(
                                        'next-number-picker-handler-up-inner',
                                    )}
                                    style={
                                        quantity >= 30
                                            ? {
                                                  cursor: 'not-allowed',
                                                  backgroundColor: '#eff0f5',
                                                  color: '#9e9e9e',
                                              }
                                            : {
                                                  cursor: 'pointer',
                                              }
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        className={cx('next-icon-add')}
                                    />
                                </span>
                            </div>
                            <div
                                unselectable="unselectable"
                                className={cx(
                                    'next-number-picker-handler-down',
                                )}
                                style={
                                    quantity > 1
                                        ? {
                                              cursor: 'pointer',
                                              backgroundColor: '#dadada',
                                              color: '#fff',
                                          }
                                        : {
                                              cursor: 'not-allowed',
                                          }
                                }
                                onClick={handleMinus}
                            >
                                <span
                                    className={cx(
                                        'next-number-picker-handler-down-inner',
                                    )}
                                    style={
                                        quantity > 1
                                            ? {
                                                  cursor: 'pointer',
                                                  backgroundColor: '#dadada',
                                                  color: '#fff',
                                              }
                                            : {
                                                  cursor: 'not-allowed',
                                              }
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faMinus}
                                        className={cx('next-icon-add')}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={cx('next-number-picker-input-wrap')}>
                            <span className={cx('next-input-single')}>
                                <input
                                    ref={ref}
                                    className={cx('quantity-input')}
                                    type="text"
                                    min={1}
                                    max={30}
                                    value={
                                        quantity > 30
                                            ? 30
                                            : quantity < 1
                                            ? 1
                                            : quantity
                                    }
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setQuantity(e.target.value);
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                    <span className={cx('quantity-content-default')}></span>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(Quantity);
