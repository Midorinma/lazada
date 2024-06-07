import Breadcrumbs from '~/components/Breadcrumbs';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Siderbar from './Siderbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Item from '~/components/ProductsItem/item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Search() {
    const [data, setData] = useState([]);
    const param = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/shirt?q=${param.slugName}`)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, [param.slugName]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('breadcrumb_list')}>
                <Breadcrumbs />
            </div>
            <div className={cx('root')}>
                <div className={cx('FWSEp')}>
                    <div></div>
                    <div className={cx('ant-row-FrEdP')}>
                        <div className={cx('ant-col-24')}>
                            <div className={cx('ant-row')}>
                                <Siderbar />
                                <div className={cx('ant-col-push-4-Jv5R8')}>
                                    {data.map((i, n) => (
                                        <Item
                                            key={n}
                                            data={i}
                                            starIcon={
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                />
                                            }
                                            widthStar
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={cx('ant-col-24')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
