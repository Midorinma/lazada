import classNames from 'classnames/bind';
import styles from './Rating.module.scss';
import { useContext } from 'react';
import { DataContext } from '../Produces';
import StarRating from '~/components/StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpDown, faFilter } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Rating() {
    const data = useContext(DataContext);
    return (
        <div className={cx('Ratting-comment')}>
            <div>
                <div className={cx('mod-title')}>
                    <h2 className={cx('pdp-mod-section-title')}>
                        Ratings &amp; Reviews of {data.title}
                    </h2>
                </div>
                <div className={cx('mod-rating')}>
                    <div className={cx('content')}>
                        <div className={cx('left')}>
                            <div className={cx('summary')}>
                                <div className={cx('score')}>
                                    <span className={cx('score-average')}>
                                        4.8
                                    </span>
                                    <span className={cx('score-max')}>/5</span>
                                </div>
                                <div className={cx('average')}>
                                    <div
                                        style={{
                                            width: '166.25px',
                                            height: '33.25px',
                                        }}
                                    >
                                        <StarRating yellowstar larger />
                                        <StarRating yellowstar larger />
                                        <StarRating yellowstar larger />
                                        <StarRating yellowstar larger />
                                        <StarRating halfstar larger />
                                    </div>
                                </div>
                                <div className={cx('count')}>
                                    4809&nbsp;Ratings
                                </div>
                            </div>
                            <div className={cx('detail')}>
                                <ul>
                                    <li>
                                        <div className={cx('container-star')}>
                                            <StarRating yellowstar medium />
                                            <StarRating yellowstar medium />
                                            <StarRating yellowstar medium />
                                            <StarRating yellowstar medium />
                                            <StarRating yellowstar medium />
                                        </div>
                                        <span className={cx('progress-wrap')}>
                                            <div
                                                className={cx(
                                                    'pdp-review-progress',
                                                )}
                                            >
                                                <div
                                                    className={cx('bar-bg')}
                                                ></div>
                                                <div
                                                    className={cx('bar-fg')}
                                                    style={{
                                                        width: '91.3288%',
                                                    }}
                                                ></div>
                                            </div>
                                        </span>
                                        <span className={cx('percent')}>
                                            4392
                                        </span>
                                    </li>
                                    <li>
                                        <div className={cx('container-star')}>
                                            <StarRating yellowstar medium />
                                            <StarRating yellowstar medium />
                                            <StarRating yellowstar medium />
                                            <StarRating yellowstar medium />
                                            <StarRating prayStar medium />
                                        </div>
                                        <span className={cx('progress-wrap')}>
                                            <div
                                                className={cx(
                                                    'pdp-review-progress',
                                                )}
                                            >
                                                <div
                                                    className={cx('bar-bg')}
                                                ></div>
                                                <div
                                                    className={cx('bar-fg')}
                                                    style={{
                                                        width: '4.24205%',
                                                    }}
                                                ></div>
                                            </div>
                                        </span>
                                        <span className={cx('percent')}>
                                            204
                                        </span>
                                    </li>
                                    <li>
                                        <div className={cx('container-star')}>
                                            <StarRating yellowstar medium />
                                            <StarRating yellowstar medium />
                                            <StarRating yellowstar medium />
                                            <StarRating prayStar medium />
                                            <StarRating prayStar medium />
                                        </div>
                                        <span className={cx('progress-wrap')}>
                                            <div
                                                className={cx(
                                                    'pdp-review-progress',
                                                )}
                                            >
                                                <div
                                                    className={cx('bar-bg')}
                                                ></div>
                                                <div
                                                    className={cx('bar-fg')}
                                                    style={{
                                                        width: '2.12102%',
                                                    }}
                                                ></div>
                                            </div>
                                        </span>
                                        <span className={cx('percent')}>
                                            102
                                        </span>
                                    </li>
                                    <li>
                                        <div className={cx('container-star')}>
                                            <StarRating yellowstar medium />
                                            <StarRating yellowstar medium />
                                            <StarRating prayStar medium />
                                            <StarRating prayStar medium />
                                            <StarRating prayStar medium />
                                        </div>
                                        <span className={cx('progress-wrap')}>
                                            <div
                                                className={cx(
                                                    'pdp-review-progress',
                                                )}
                                            >
                                                <div
                                                    className={cx('bar-bg')}
                                                ></div>
                                                <div
                                                    className={cx('bar-fg')}
                                                    style={{
                                                        width: '0.707008%',
                                                    }}
                                                ></div>
                                            </div>
                                        </span>
                                        <span className={cx('percent')}>
                                            34
                                        </span>
                                    </li>
                                    <li>
                                        <div className={cx('container-star')}>
                                            <StarRating yellowstar medium />
                                            <StarRating prayStar medium />
                                            <StarRating prayStar medium />
                                            <StarRating prayStar medium />
                                            <StarRating prayStar medium />
                                        </div>
                                        <span className={cx('progress-wrap')}>
                                            <div
                                                className={cx(
                                                    'pdp-review-progress',
                                                )}
                                            >
                                                <div
                                                    className={cx('bar-bg')}
                                                ></div>
                                                <div
                                                    className={cx('bar-fg')}
                                                    style={{
                                                        width: '1.60116%',
                                                    }}
                                                ></div>
                                            </div>
                                        </span>
                                        <span className={cx('percent')}>
                                            77
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={cx('pdp-mod-filterSort')}>
                    <span className={cx('title')}>Product Reviews</span>
                    <div className={cx('oper')}>
                        <svg className={cx('oper-icon')}>
                            <FontAwesomeIcon icon={faFilter} />
                        </svg>
                        <span>Filter:&nbsp;</span>
                        <span className={cx('condition')}>All star</span>
                    </div>
                    <div className={cx('oper')}>
                        <svg className={cx('oper-icon')}>
                            <FontAwesomeIcon icon={faArrowsUpDown} />
                        </svg>
                        <span>Sort:</span>
                        <span className={cx('condition')}>Relevance</span>
                    </div>
                </div>
            </div>

            <div>
                <div className={cx('mod-reviews')}>
                    <div className={cx('input-rating')}>
                        <input
                            type="text"
                            placeholder="Comment here..."
                            style={{ padding: '2rem', cursor: 'not-allowed' }}
                            disabled="disabled"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;
