import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    const renderResult = (attrs) => {
        return (
            <div className={cx('content')} tabIndex="-1" {...attrs}>
                {renderItems()}
            </div>
        );
    };

    return (
        <Tippy
            interactive
            placement="bottom"
            zIndex={999}
            appendTo={() => document.body}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
