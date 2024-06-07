import classNames from 'classnames/bind';
import styles from './Siderbar.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faStar } from '@fortawesome/free-solid-svg-icons';
import StarRating from '~/components/StarRating';

const cx = classNames.bind(styles);
function Siderbar() {
    return (
        <div className={cx('ant-col-pull-20-8URhT')}>
            <div className={cx('see')}>
                <div className={cx('gJ98q')}>
                    <div className={cx('_9xWFp')}>Category</div>
                    <div className={cx('y9-OE')}>
                        <div>
                            <div className={cx('uM5g9-GyKoD')}>
                                <div>
                                    <NavLink className={cx('DMfHy')}>
                                        Men's T-Shirts
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('gJ98q')}>
                    <div className={cx('_9xWFp')}>Brand</div>
                    <div className={cx('y9-OE')}>
                        <div>
                            <div className={cx('uM5g9-GyKoD')}>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Thái Khang</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>PigoFashion</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>City Cycle</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>FHD.</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Guzado</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>MENTORIS</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Zenko</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>DONMAN</span>
                                </label>
                            </div>
                            <div className={cx('iSqXl')}>VIEW MORE</div>
                        </div>
                    </div>
                </div>

                <div className={cx('gJ98q')}>
                    <div className={cx('_9xWFp')}>Size</div>
                    <div className={cx('y9-OE')}>
                        <div className={cx('ant-select')}>
                            <div className={cx('ant-select-selector')}>
                                <select>
                                    <option>INT</option>
                                </select>
                            </div>
                            <span></span>
                        </div>
                        <div className={cx('_9q6lF')}>
                            <div>
                                <div className={cx('uM5g9-GyKoD')}>
                                    <label
                                        className={cx('ant-checkbox-wrapper')}
                                    >
                                        <span className={cx('ant-checkbox')}>
                                            <input
                                                className={cx(
                                                    'ant-checkbox-input',
                                                )}
                                                type="checkbox"
                                            />
                                        </span>
                                        <span>S</span>
                                    </label>
                                    <label
                                        className={cx('ant-checkbox-wrapper')}
                                    >
                                        <span className={cx('ant-checkbox')}>
                                            <input
                                                className={cx(
                                                    'ant-checkbox-input',
                                                )}
                                                type="checkbox"
                                            />
                                        </span>
                                        <span>M</span>
                                    </label>
                                    <label
                                        className={cx('ant-checkbox-wrapper')}
                                    >
                                        <span className={cx('ant-checkbox')}>
                                            <input
                                                className={cx(
                                                    'ant-checkbox-input',
                                                )}
                                                type="checkbox"
                                            />
                                        </span>
                                        <span>L</span>
                                    </label>
                                    <label
                                        className={cx('ant-checkbox-wrapper')}
                                    >
                                        <span className={cx('ant-checkbox')}>
                                            <input
                                                className={cx(
                                                    'ant-checkbox-input',
                                                )}
                                                type="checkbox"
                                            />
                                        </span>
                                        <span>XL</span>
                                    </label>
                                    <label
                                        className={cx('ant-checkbox-wrapper')}
                                    >
                                        <span className={cx('ant-checkbox')}>
                                            <input
                                                className={cx(
                                                    'ant-checkbox-input',
                                                )}
                                                type="checkbox"
                                            />
                                        </span>
                                        <span>XXL</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('gJ98q')}>
                    <div className={cx('_9xWFp')}>Service & Promotion</div>
                    <div className={cx('y9-OE')}>
                        <div>
                            <div className={cx('uM5g9-GyKoD')}>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Best Price</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>LazMall Sale</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>LazPick</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>LazFlash Sale</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Fulfilled By Lazada</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Instant Delivery</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>LazMall</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Priority Delivery</span>
                                </label>
                            </div>
                            <div className={cx('iSqXl')}>VIEW MORE</div>
                        </div>
                    </div>
                </div>

                <div className={cx('gJ98q')}>
                    <div className={cx('_9xWFp')}>Location</div>
                    <div className={cx('y9-OE')}>
                        <div>
                            <div className={cx('uM5g9-GyKoD')}>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Local</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Hồ Chí Minh</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Overseas</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Hà Nội</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Đồng Nai</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Bình Dương</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Bắc Ninh</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Tuyên Quang</span>
                                </label>
                            </div>
                            <div className={cx('iSqXl')}>VIEW MORE</div>
                        </div>
                    </div>
                </div>

                <div className={cx('gJ98q')}>
                    <div className={cx('_9xWFp')}>Price</div>
                    <div className={cx('y9-OE')}>
                        <div className={cx('_1lPeN')}>
                            <input
                                className={cx('q9tZB')}
                                placeholder="Min"
                                type="number"
                                min={0}
                                pattern="[0-9]*"
                            />
                            <div className={cx('n9LhC')}>-</div>
                            <input
                                className={cx('q9tZB')}
                                placeholder="Max"
                                type="number"
                                min={0}
                                pattern="[0-9]*"
                            />
                            <button className={cx('ant-btn-primary')}>
                                <span>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={cx('gJ98q')}>
                    <div className={cx('_9xWFp')}>Rating</div>
                    <div className={cx('y9-OE')}>
                        <div className={cx('dumOn')}>
                            <ul
                                className={cx('ant-rate')}
                                tabIndex={-1}
                                role="radiogroup"
                            >
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                            </ul>
                        </div>
                        <div className={cx('dumOn')}>
                            <ul
                                className={cx('ant-rate')}
                                tabIndex={-1}
                                role="radiogroup"
                            >
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating
                                        prayStar={
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={cx('pray-star')}
                                            />
                                        }
                                        medium
                                    />
                                </li>
                            </ul>
                            <span
                                style={{
                                    marginLeft: '2rem',
                                    paddingTop: '0px',
                                }}
                            >
                                And Up
                            </span>
                        </div>
                        <div className={cx('dumOn')}>
                            <ul
                                className={cx('ant-rate')}
                                tabIndex={-1}
                                role="radiogroup"
                            >
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating
                                        prayStar={
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={cx('pray-star')}
                                            />
                                        }
                                        medium
                                    />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating
                                        prayStar={
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={cx('pray-star')}
                                            />
                                        }
                                        medium
                                    />
                                </li>
                            </ul>
                            <span
                                style={{
                                    marginLeft: '2rem',
                                    paddingTop: '0px',
                                }}
                            >
                                And Up
                            </span>
                        </div>
                        <div className={cx('dumOn')}>
                            <ul
                                className={cx('ant-rate')}
                                tabIndex={-1}
                                role="radiogroup"
                            >
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating
                                        prayStar={
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={cx('pray-star')}
                                            />
                                        }
                                        medium
                                    />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating
                                        prayStar={
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={cx('pray-star')}
                                            />
                                        }
                                        medium
                                    />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating
                                        prayStar={
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={cx('pray-star')}
                                            />
                                        }
                                        medium
                                    />
                                </li>
                            </ul>
                            <span
                                style={{
                                    marginLeft: '2rem',
                                    paddingTop: '0px',
                                }}
                            >
                                And Up
                            </span>
                        </div>

                        <div className={cx('dumOn')}>
                            <ul
                                className={cx('ant-rate')}
                                tabIndex={-1}
                                role="radiogroup"
                            >
                                <li className={cx('ant-rate-star')}>
                                    <StarRating yellowstar medium />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating
                                        prayStar={
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={cx('pray-star')}
                                            />
                                        }
                                        medium
                                    />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating
                                        prayStar={
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={cx('pray-star')}
                                            />
                                        }
                                        medium
                                    />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating
                                        prayStar={
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={cx('pray-star')}
                                            />
                                        }
                                        medium
                                    />
                                </li>
                                <li className={cx('ant-rate-star')}>
                                    <StarRating
                                        prayStar={
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={cx('pray-star')}
                                            />
                                        }
                                        medium
                                    />
                                </li>
                            </ul>
                            <span
                                style={{
                                    marginLeft: '2rem',
                                    paddingTop: '0px',
                                }}
                            >
                                And Up
                            </span>
                        </div>
                    </div>
                </div>

                <div className={cx('gJ98q')}>
                    <div className={cx('_9xWFp')}>Color Family</div>
                    <div className={cx('y9-OE')}>
                        <div>
                            <div className={cx('uM5g9-GyKoD')}>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Black</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>White</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Deep Blue</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Grey</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Red</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Blue</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Green</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Brown</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('gJ98q')}>
                    <div className={cx('_9xWFp')}>Neckline</div>
                    <div className={cx('y9-OE')}>
                        <div>
                            <div className={cx('uM5g9-GyKoD')}>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Crew Neck</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Polo Collar</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>Button Down</span>
                                </label>
                                <label className={cx('ant-checkbox-wrapper')}>
                                    <span className={cx('ant-checkbox')}>
                                        <input
                                            className={cx('ant-checkbox-input')}
                                            type="checkbox"
                                        />
                                    </span>
                                    <span>V-NECK</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Siderbar;
