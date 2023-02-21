import React, { useState,useRef } from 'react';
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
  const [showTheme, setShowTheme] = useState(false);
  const openTheme = () => setShowTheme(true);
  const closeTheme = () => setShowTheme(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

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
            <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
            <input className={cx('inp-search')} placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." />
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
