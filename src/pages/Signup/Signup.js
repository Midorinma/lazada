import classNames from 'classnames/bind';
import styles from './Signup.module.scss';
import { NavLink } from 'react-router-dom';
import config from '~/config';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerSuccess } from '~/components/Store/actions/authActions';
import { validates } from '~/components/Validate';
import { Crud } from '~/components/Crud';
import Menuinfor from '~/components/Popper/MenuInfo/Menuinfor';
import { notes } from '~/components/Note';

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
const menuName = [
    {
        title: 'Name must be capitalized at the beginning of the line.',
    },
];
function Signup({ data }) {
    const [items, setItems] = useState([]);
    const [indexs, setIndexs] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    const checkEmail = [];
    //const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [input, setInput] = useState({
        email: '',
        password: '',
        name: '',
        month: '',
        day: 0,
        year: 0,
        gender: '',
    });

    const apiUrl = `${process.env.REACT_APP_LOCALHOST}/User`;
    data.map((item) => checkEmail.push(item.email));

    const checkName = /^[A-Z]*$/;

    const [errEmail, setErrorEmail] = useState('');
    const [errPassword, setErrorPassword] = useState('');
    const [errName, setErrorName] = useState('');

    //redux store
    const dispatch = useDispatch();
    //submit button
    const disable = !input.email || !input.password || !input.name;

    const handleChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const { email, password, name } = input;

        if (validates.validateEmail(email) === false) {
            setErrorEmail('Invalid value!');
            if (!email.includes('@')) {
                setErrorEmail('@: Contain the @ symbol.');
            }
        } else if (validates.validatePassword(password) === false) {
            setErrorPassword('Invalid value!');
        } else if (validates.validateName(name) === false) {
            setErrorName('Invalid value!');
            if (checkName.test(name) === false) {
                setErrorName('Initial characters must be in uppercase.');
            }
        } else if (checkEmail.includes(email)) {
            alert('Email already exists!');
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                Crud.Post(apiUrl, input);
                localStorage.setItem('useState', JSON.stringify(email));
                dispatch(registerSuccess(email));
                window.location.reload();
                history('/user');
            }, 500);
        }
    };

    //change value year and day
    useEffect(() => {
        const arr = [];
        for (let i = 1900; i < 2024; i++) {
            arr.push(i);
        }
        setItems(arr);
    }, []);

    useEffect(() => {
        const tempArr = [];
        for (let j = 1; j < 32; j++) {
            tempArr.push(j);
        }
        setIndexs(tempArr);
    }, []);

    return (
        <div className={cx('lzd-playground')}>
            <div className={cx('lzd-playground-main')}>
                <div></div>
                <div className={cx('container')}>
                    <div className={cx('register')}>
                        <div className={cx('login-title')}>
                            <h3>Create your Lazada Account</h3>
                            <div className={cx('login-other')}>
                                <span>
                                    Already member?{' '}
                                    <NavLink
                                        to={config.routes.login}
                                        style={{ color: '#1a9cb7' }}
                                    >
                                        Login
                                    </NavLink>{' '}
                                    here.
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className={cx('mod-login')}>
                                <form>
                                    <div className={cx('mod-login-col1')}>
                                        <div
                                            className={cx(
                                                'mod-login-input-email',
                                            )}
                                        >
                                            <label>Email Address</label>
                                            <Menuinfor items={menuEmail}>
                                                <input
                                                    autoComplete="off"
                                                    type="text"
                                                    placeholder="Please enter your email address"
                                                    value={input.email}
                                                    name="email"
                                                    onChange={handleChange}
                                                />
                                            </Menuinfor>

                                            <b></b>
                                            <span>{errEmail}</span>
                                        </div>
                                        <div
                                            className={cx(
                                                'mod-login-input-password',
                                            )}
                                        >
                                            <label>Password</label>

                                            <Menuinfor items={menuPassword}>
                                                <input
                                                    type="password"
                                                    placeholder="Please enter your password"
                                                    value={input.password}
                                                    name="password"
                                                    onChange={handleChange}
                                                    autoComplete="off"
                                                />
                                            </Menuinfor>

                                            <b></b>
                                            <span>{errPassword}</span>
                                        </div>

                                        <div className={cx('mod-login-row')}>
                                            <div
                                                className={cx(
                                                    'mod-login-birthday',
                                                )}
                                            >
                                                <div
                                                    className={cx(
                                                        'mod-login-birthday-hd',
                                                    )}
                                                >
                                                    Birthday
                                                </div>
                                                <div
                                                    className={cx(
                                                        'mod-birthday',
                                                    )}
                                                >
                                                    <select
                                                        className={cx(
                                                            'mod-birthday-month',
                                                        )}
                                                        style={{
                                                            paddingLeft: '5px',
                                                        }}
                                                        value={input.month}
                                                        name="month"
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">
                                                            Month
                                                        </option>
                                                        <option value="January">
                                                            January
                                                        </option>
                                                        <option value="February">
                                                            February
                                                        </option>
                                                        <option value="March">
                                                            March
                                                        </option>
                                                        <option value="April">
                                                            April
                                                        </option>
                                                        <option value="May">
                                                            May
                                                        </option>
                                                        <option value="June">
                                                            June
                                                        </option>
                                                        <option value="July">
                                                            July
                                                        </option>
                                                        <option value="August">
                                                            August
                                                        </option>
                                                        <option value="September">
                                                            September
                                                        </option>
                                                        <option value="October">
                                                            October
                                                        </option>
                                                        <option value="November">
                                                            November
                                                        </option>
                                                        <option value="December">
                                                            December
                                                        </option>
                                                    </select>

                                                    <select
                                                        className={cx(
                                                            'mod-birthday-day',
                                                        )}
                                                        style={{
                                                            paddingLeft: '5px',
                                                        }}
                                                        value={input.day}
                                                        name="day"
                                                        onChange={handleChange}
                                                    >
                                                        <option value={0}>
                                                            Day
                                                        </option>
                                                        {indexs.map(
                                                            (item, index) => {
                                                                return (
                                                                    <option
                                                                        value={
                                                                            item
                                                                        }
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </option>
                                                                );
                                                            },
                                                        )}
                                                    </select>
                                                    <select
                                                        className={cx(
                                                            'mod-birthday-year',
                                                        )}
                                                        style={{
                                                            paddingLeft: '5px',
                                                        }}
                                                        value={input.year}
                                                        name="year"
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">
                                                            Year
                                                        </option>
                                                        {items.map(
                                                            (item, index) => {
                                                                return (
                                                                    <option
                                                                        value={
                                                                            item
                                                                        }
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </option>
                                                                );
                                                            },
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                            <div
                                                className={cx(
                                                    'mod-login-gender',
                                                )}
                                            >
                                                <div
                                                    className={cx('mod-gender')}
                                                >
                                                    <div
                                                        className={cx(
                                                            'mod-gender-hd',
                                                        )}
                                                    >
                                                        Gender
                                                    </div>
                                                    <select
                                                        className={cx(
                                                            'mod-gender-gender',
                                                        )}
                                                        style={{
                                                            paddingLeft: '5px',
                                                        }}
                                                        value={input.gender}
                                                        name="gender"
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">
                                                            Select
                                                        </option>
                                                        <option value="male">
                                                            male
                                                        </option>
                                                        <option value="female">
                                                            female
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('mod-login-col2')}>
                                        <div
                                            className={cx(
                                                'mod-login-input-name',
                                            )}
                                        >
                                            <label>Full name</label>

                                            <Menuinfor items={menuName}>
                                                <input
                                                    type="text"
                                                    placeholder="First Last"
                                                    name="name"
                                                    value={input.name}
                                                    onChange={handleChange}
                                                    autoComplete="off"
                                                />
                                            </Menuinfor>

                                            <b></b>
                                            <span>{errName}</span>
                                        </div>
                                        <div
                                            className={cx('mod-login-receive')}
                                        >
                                            <label
                                                className={cx('next-checkbox')}
                                            >
                                                <input type="checkbox" />
                                            </label>
                                            <p>
                                                I'd like to receive exclusive
                                                offers and promotions via SMS
                                            </p>
                                        </div>
                                        <div className={cx('mod-login-btn')}>
                                            <Button
                                                className={
                                                    disable
                                                        ? cx('style-disable')
                                                        : cx('next-btn-primary')
                                                }
                                                onClick={handleRegister}
                                                disabled={disable}
                                                type="submit"
                                            >
                                                SIGN UP
                                            </Button>
                                        </div>
                                        <div className={cx('mod-login-policy')}>
                                            <span>
                                                By proceeding to sign up, I
                                                acknowledge that I have read and
                                                consented to Lazada’s
                                                <NavLink
                                                    style={{
                                                        color: '#1a9cb7',
                                                    }}
                                                >
                                                    Terms of Use
                                                </NavLink>{' '}
                                                and{' '}
                                                <NavLink
                                                    style={{
                                                        color: '#1a9cb7',
                                                    }}
                                                >
                                                    Privacy Policy
                                                </NavLink>{' '}
                                                , which sets out how Lazada
                                                collects, uses and discloses my
                                                personal data, and the rights
                                                that I have under applicable
                                                law.
                                            </span>
                                        </div>
                                        <div
                                            className={cx(
                                                'mod-login-change-register',
                                            )}
                                        >
                                            <p
                                                className={cx(
                                                    'mod-change-register-title',
                                                )}
                                            >
                                                Or, sign up with
                                            </p>
                                            <div
                                                className={cx(
                                                    'mod-change-register-btn',
                                                )}
                                            >
                                                <Button
                                                    normal
                                                    className={cx(
                                                        'next-btn-secondary',
                                                    )}
                                                >
                                                    Sign up with Email
                                                </Button>
                                            </div>
                                        </div>
                                        <div className={cx('mod-login-third')}>
                                            <div
                                                className={cx(
                                                    'mod-third-party-login',
                                                )}
                                            >
                                                <div
                                                    className={cx(
                                                        'mod-third-party-login-line',
                                                    )}
                                                >
                                                    <span></span>
                                                </div>
                                                <div
                                                    className={cx(
                                                        'mod-third-party-login-bd',
                                                    )}
                                                >
                                                    <Button
                                                        className={cx(
                                                            'mod-third-party-login-fb',
                                                        )}
                                                        leftIcon={
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faFacebookF
                                                                }
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
                                                                icon={
                                                                    faGooglePlusG
                                                                }
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loading && <notes.Loading />}
        </div>
    );
}

export default Signup;
