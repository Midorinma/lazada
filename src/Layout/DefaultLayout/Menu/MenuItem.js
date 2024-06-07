import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
const MenuItem = ({ title, subItems, to }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        if (subItems === null || subItems === undefined) {
            setIsOpen(false);
        } else {
            setIsOpen(!isOpen);
        }
    };

    return (
        <li className={cx('menu-item')}>
            <Button
                className={cx('menu-item__button')}
                onClick={handleToggle}
                hollow
                rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
            >
                <Link to={to} className={cx('title')}>
                    {title}
                </Link>
            </Button>

            {isOpen && (
                <ul className={cx('submenu')}>
                    {subItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            title={item.title}
                            subItems={item.subItems}
                            to={item.to}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

const Menu = ({ className }) => {
    const classes = cx('menu', { [className]: className });
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/menuItems`)
            .then((res) => res.json())
            .then((res) => setMenuItems(res));
    }, []);

    return (
        <ul className={classes}>
            {menuItems.map((item, index) => (
                <MenuItem
                    key={index}
                    title={item.title}
                    subItems={item.subItems}
                    to={item.to}
                />
            ))}
        </ul>
    );
};

export default Menu;
