import HeadlessTippy from '@tippyjs/react/headless';
import { wrapper as PopperWrapper } from '~/components/Popper';
import { icons } from '~/components/icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useState, useEffect, useRef } from 'react';
import ItemSearch from '~/components/ItemSearch';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        fetch(
            `${process.env.REACT_APP_LOCALHOST}/shirt?q=${encodeURIComponent(
                searchValue,
            )}&type=less`,
        )
            .then((res) => res.json())
            .then((res) => setSearchResult(res));
    }, [searchValue]);

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        <HeadlessTippy
            interactive
            placement="bottom"
            appendTo={() => document.body}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('pop-wrap')}>
                        {searchResult.map((result) => (
                            <ItemSearch key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('search-cart')}>
                <input
                    className={cx('search-input')}
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search in Lazada"
                    spellCheck={false}
                    onChange={handleSearch}
                    onFocus={() => setShowResult(true)}
                />
                <button
                    className={cx('search-btn')}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <icons.SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
