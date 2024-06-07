import images from '~/assets/images/images';
import classNames from 'classnames/bind';
import styles from './GuideApp.module.scss';

const cx = classNames.bind(styles);
function GuideApp() {
    return (
        <div className={cx('module_guide_app')}>
            <div className={cx('guideApp')}>
                <div style={{ display: 'flex' }}>
                    <div className={cx('guideApp-qrcode')}>
                        <img
                            src={images.Qrcode}
                            alt="Qr-code"
                            height={111}
                            width={111}
                            style={{ display: 'inline-block' }}
                        />
                    </div>
                    <div className={cx('wrap-guideApp')}>
                        <img
                            src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1f4HzFbH1gK0jSZFwXXc7aXXa-96-96.png"
                            alt="lazada app"
                            style={{
                                width: '43px',
                                height: '43px',
                            }}
                        />
                        <p>Download app to enjoy exclusive discounts!</p>
                    </div>
                </div>
                <p>
                    <i className={cx('guideApp-mobile')}></i>
                    Scan with mobile
                </p>
            </div>
        </div>
    );
}

export default GuideApp;
