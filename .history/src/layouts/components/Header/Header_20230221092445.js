import React, { useState, useDebounce, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faArrowRightLong,
  faSearch,
  faDownload,
  faShirt,
  faGem,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { Theme } from './Theme/Theme';
const cx = classNames.bind(styles);

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);

      // const result = await searchServices.search(debouncedValue);

      // setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  const [showTheme, setShowTheme] = useState(false);
  const openTheme = () => setShowTheme(true);
  const closeTheme = () => setShowTheme(false);

  return (
    <div className={cx('header')}>
      <div className={cx('header-items')}>
        <div className={cx('header-left-item')}>
          <div className={cx('icon-left')}>
            <span className={cx('icon-item-left')}>
              <FontAwesomeIcon className={cx('left')} icon={faArrowLeftLong} />
            </span>
            <span className={cx('icon-item-left')}>
              <FontAwesomeIcon className={cx('right')} icon={faArrowRightLong} />
            </span>
          </div>
          <div className={cx('header-search')}>
            <FontAwesomeIcon className={cx('icon-search')} icon={faSearch}  />
            <input
              ref={inputRef}
              value={searchValue}
              spellCheck={false}
              onChange={handleChange}
              onFocus={() => setShowResult(true)}
              className={cx('inp-search')}
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
          </div>
        </div>
        <div className={cx('header-right-item')}>
          <div className={cx('download-wd')}>
            <div className={cx('dl-body')}>
              <FontAwesomeIcon icon={faDownload} className={cx('icon-download')} />
              <div className={cx('download-title')}>Tải bản Windows</div>
            </div>
          </div>
          <div className={cx('theme-web')}>
            <FontAwesomeIcon
              icon={faShirt}
              className={cx('icon-theme')}
              onClick={() => {
                openTheme();
              }}
            />
          </div>
          <div className={cx('vip-web')}>
            <FontAwesomeIcon icon={faGem} className={cx('icon-vip')} />
          </div>
          <div className={cx('setting-web')}>
            <FontAwesomeIcon icon={faGear} className={cx('icon-setting')} />
          </div>
          <div className={cx('user-web')}>
            <img src="/img/user.png" alt="user" className={cx('img-user')} />
          </div>
        </div>
      </div>
      {/* <div
        className={cx('theme')}
        style={{
          display: showTheme ? 'block' : 'none',
        }}
      > */}
      <Theme show={showTheme} onHide={closeTheme} />
      {/* </div> */}
    </div>
  );
}

export default Header;
