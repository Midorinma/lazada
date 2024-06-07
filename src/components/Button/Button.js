import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    textStronger = false,
    text = false,
    primary = false,
    leftIcon = false,
    rightIcon = false,
    rightIconBlue = false,
    rightIconMenu = false,
    border_btn = false,
    yellow = false,
    orange = false,
    blue = false,
    tomato = false,
    hollow = false,
    large = false,
    medium = false,
    normal = false,
    cart = false,
    menuTitle = false,
    children,
    className,
    onClick,
    ...passProp
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProp,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        textStronger,
        text,
        leftIcon,
        rightIcon,
        border_btn,
        hollow,
        yellow,
        orange,
        blue,
        tomato,
        cart,
        normal,
        large,
        medium,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon-left')}>{leftIcon}</span>}
            <span className={cx('title', { menuTitle })}>{children}</span>
            {rightIconBlue && (
                <span className={cx('icon-blue')}>{rightIconBlue}</span>
            )}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            {rightIconMenu && (
                <span className={cx('icon-menu')}>{rightIconMenu}</span>
            )}
        </Comp>
    );
}

export default Button;
