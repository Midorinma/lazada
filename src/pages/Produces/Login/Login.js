import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '~/components/Store/actions/authActions';
import { useState, useContext, useEffect } from 'react';
import { validates } from '~/components/Validate';
import Menuinfor from '~/components/Popper/MenuInfo/Menuinfor';
import Button from '~/components/Button';
import { NavLink } from 'react-router-dom';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { DataContext } from '../Produces';
import { notes } from '~/components/Note';
import storage from '~/components/Store/reducers/storage';
import { STORAGE_KEY } from '~/components/Store/actions/types';
import { fetchData } from '~/components/Store/reducers/FetchData';

const cx = classNames.bind(styles);
const menuEmail = [
    {
        title: 'Begin the string with alphabetical characters, numbers, period (.), underscore (_), or hyphen (-).',
    },
    {
        title: '@: Contains the @ symbol.',
    },
    {
        title: 'Followed by the domain, consisting of alphabetical characters, numbers, period (.), or hyphen (-).',
    },
    {
        title: ' . : Dot preceding the domain part.',
    },
    {
        title: 'End the string with 2 to 4 alphabetical characters (the extension part, like .com, .net).',
    },
];
const menuPassword = [
    {
        title: 'At least one lowercase letter (a-z)',
    },
    {
        title: 'At least one uppercase letter (A-Z)',
    },
    {
        title: 'At least one digit (0-9)',
    },
    {
        title: 'A minimum total of 8 characters.',
    },
];

function Login() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const dataApi = useContext(DataContext);
    const [loading, setLoading] = useState(false);
    const [errEmail, setErrorEmail] = useState('');
    const [local, setLocal] = useState([]);
    const [errPassword, setErrorPassword] = useState('');
    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const disable = !input.email || !input.password;

    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/User?q=${input.email}`)
            .then((res) => res.json())
            .then((res) => setLocal(res));
    }, [input.email]);

    var temp = {
        user: null,
        isAuthenticated: false,
        productList: [],
        shipping: [],
        total: [],
        order: [],
        saveTotal: [],
    };

    local.map(
        (item) =>
            (temp = {
                user: item.user,
                isAuthenticated: item.isAuthenticated,
                productList: item.productList,
                order: item.order,
                saveTotal: item.saveTotal,
                shipping: [],
                total: [],
            }),
    );

    const handleChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = input;
        if (validates.validateEmail(email) === false) {
            setErrorEmail('Invalid value!');
            if (!email.includes('@')) {
                setErrorEmail('@: Contain the @ symbol.');
            }
        } else if (validates.validatePassword(password) === false) {
            setErrorPassword('Invalid value!');
        } else {
            if (local && local.length) {
                const userLogin = local.map((item) =>
                    item.email === email && item.password === password
                        ? true
                        : false,
                );

                if (userLogin === false) {
                    alert('invalid details');
                } else {
                    localStorage.setItem('useState', JSON.stringify(email));
                    dispatch(loginSuccess(email));
                    storage.set(STORAGE_KEY, temp);
                    dispatch(fetchData(storage.get(STORAGE_KEY)));
                    if (dataApi) {
                        alert('Login success!');
                        setLoading(true);
                        setTimeout(() => {
                            setLoading(false);
                            //window.location.reload(false);
                        }, 500);
                    } else {
                        setLoading(true);
                        setTimeout(() => {
                            setLoading(false);
                            history('/user');
                        }, 500);
                    }
                }
            } else {
                alert('Email does not exist');
            }
        }
    };
    return (
        <div>
            <form action="" method="post">
                <div className={cx('mod-login')}>
                    <div className={cx('mod-login-col1')}>
                        <div
                            className={cx('mod-input-loginName', {
                                mod_input: true,
                            })}
                        >
                            <label>Email</label>
                            <Menuinfor items={menuEmail}>
                                <input
                                    type="text"
                                    placeholder="Please enter your Email"
                                    data-meta="Field"
                                    name="email"
                                    value={input.email}
                                    onChange={handleChange}
                                />
                            </Menuinfor>
                            <b></b>
                            <span>{errEmail}</span>
                        </div>
                        <div
                            className={cx('mod-input-password', {
                                mod_input: true,
                            })}
                        >
                            <label>Password</label>
                            <Menuinfor items={menuPassword}>
                                <input
                                    type="password"
                                    placeholder="Please enter your password"
                                    data-meta="Field"
                                    name="password"
                                    value={input.password}
                                    onChange={handleChange}
                                />
                            </Menuinfor>
                            <b></b>
                            <span>{errPassword}</span>
                        </div>
                        <div className={cx('mod-login-forgot')}>
                            <NavLink className={cx('fill-in')}>
                                Forgot Password?
                            </NavLink>
                        </div>
                    </div>
                    <div className={cx('mod-login-col2')}>
                        <div className={cx('mod-login-btn')}>
                            <Button
                                type="submit"
                                className={
                                    disable
                                        ? cx('disable-next-btn-primary')
                                        : cx('next-btn-primary')
                                }
                                onClick={handleSubmit}
                                disabled={disable}
                            >
                                LOGIN
                            </Button>
                        </div>
                        <div className={cx('mod-login-third')}>
                            <div className={cx('mod-login-third-btns')}>
                                <div
                                    className={cx('mod-third-party-login-line')}
                                >
                                    <span>Or, login with</span>
                                </div>
                                <div className={cx('mod-third-party-login-bd')}>
                                    <Button
                                        className={cx(
                                            'mod-third-party-login-fb',
                                        )}
                                        leftIcon={
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                            />
                                        }
                                        blue
                                    >
                                        Facebook
                                    </Button>
                                    <Button
                                        className={cx(
                                            'mod-third-party-login-google',
                                        )}
                                        leftIcon={
                                            <FontAwesomeIcon
                                                icon={faGooglePlusG}
                                            />
                                        }
                                        tomato
                                    >
                                        Google
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {loading && <notes.Loading />}
        </div>
    );
}

export default Login;
