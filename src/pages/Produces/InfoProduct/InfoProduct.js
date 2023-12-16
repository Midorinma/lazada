import classNames from 'classnames/bind';
import styles from './InfoProduct.module.scss';
import Button from '~/components/Button';
import { useContext, useState, useRef } from 'react';
import { DataContext } from '../Produces';

const cx = classNames.bind(styles);
function InfoProduct() {
    const [view, setView] = useState('VIEW MORE');
    const [status, setStatus] = useState(true);
    const dataRef = useRef();
    const data = useContext(DataContext);
    const show = {
        height: '100%',
        overflowY: 'hidden',
    };
    const handleProperty = () => {
        if (view === 'VIEW MORE') {
            dataRef.current.style.height = show.height;
            dataRef.current.style.overflowY = show.overflowY;
            setStatus(false);
            setView('VIEW LESS');
        } else {
            dataRef.current.style.height = '600px';
            setStatus(true);
            setView('VIEW MORE');
        }
    };

    return (
        <div className={cx('infor-product-description')}>
            <h2 className={cx('outer_title')}>
                Product details of {data.title}
            </h2>
            <div className={cx('pdp-product-detail')}>
                <div className={cx('pdp-product-desc')} ref={dataRef}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.infoProduct,
                        }}
                    />
                    <div className={cx('pdp-mod-specification')}>
                        <h2 className={cx('pdp-mod-section-title')}>
                            Specifications of {data.title}
                        </h2>
                        <div
                            className={cx('specifications')}
                            dangerouslySetInnerHTML={{
                                __html: data.infoPd_Specifications,
                            }}
                        ></div>
                    </div>
                </div>
                <div
                    className={
                        status === false
                            ? cx('pdp-product-desc-hide-after')
                            : cx('pdp-product-desc-after')
                    }
                ></div>
                <div className={cx('expand-button')}>
                    <Button
                        className={cx('border_btn-blue')}
                        border_btn
                        onClick={handleProperty}
                    >
                        {view}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InfoProduct;
