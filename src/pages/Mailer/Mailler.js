import classNames from 'classnames/bind';
import styles from './Mailer.module.scss';

const cx = classNames.bind(styles);
function Mailer({ name }) {
    return (
        <div className={cx('wrapper')}>
            <div style={{ marginTop: '20px' }}></div>
            <div className={cx('section')}>
                <div className={cx('header-title')}>Thanks for your order!</div>
                <div className={cx('section-content')}>
                    <h2>Hello {name} ,</h2>
                    <p>
                        Your order&nbsp;has been received and is being
                        processed. We will notify you when the parcel is ready
                    </p>
                    <div className={cx('two-col')}>
                        <img
                            src="https://ci3.googleusercontent.com/meips/ADKq_NYMpy_rxZEtNCI1rCSCLAiZwaiInv3E-RbyEcQvAc6x4uu_InBinUTekfu0YELqKFCM74XPo1Cw5hXyFbmc2H3D2nCzT0kD-SUWqizFPQLxkqhaNvgM3w=s0-d-e1-ft#https://img.alicdn.com/tfs/TB1myaqJkL0gK0jSZFtXXXQCXXa-300-51.png"
                            alt="img"
                        />
                    </div>
                    <p>
                        Please only agree to receive the package if the order’s
                        status has been updated to "<b>Out for Delivery</b>".
                        Don’t forget to double check your Order number, Sender
                        information and Tracking number to ensure you receive
                        the right package.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Mailer;
