import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import LoginComponent from '../Produces/Login';
import { NavLink } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
function Login() {
    return (
        <div>
            <div />
            <div className={cx('container')}>
                <div className={cx('login-title')}>
                    <h3>Welcome to Lazada! Please login.</h3>
                    <div className={cx('login-other')}>
                        <span>
                            New member?&nbsp;
                            <NavLink
                                to={config.routes.signup}
                                className={cx('fill-in')}
                            >
                                Register
                            </NavLink>
                            &nbsp; here.
                        </span>
                    </div>
                </div>
                <LoginComponent className={cx('setup-login')} />
            </div>
        </div>
    );
}

export default Login;

// ban cho mình xem vấn de voi
//// demo di ban
//ok bạn xem được chưa
// ý bạn là trang product detail của ban nó kh4ng render theo sản phẩm mà nó bị cố dịnh hả
//đúng rồi có khi thì dùng thẻ img , có khi lại thẻ ul nên mình không biết code html như nào
// cho minh xem code ben do
