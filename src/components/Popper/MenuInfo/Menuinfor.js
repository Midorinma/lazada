import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menuinfor.module.scss';
import MenuItem from './MenuIteminfor';

const cx = classNames.bind(styles);
function Menuinfor({ children, items = [] }) {
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
            placement="right-end"
            zIndex={9999}
            appendTo={() => document.body}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

export default Menuinfor;
