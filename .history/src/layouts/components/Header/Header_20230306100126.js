import React, { useState, useRef } from 'react';
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
  faCirclePlay,
  faBan,
  faChevronRight,
  faArrowTrendUp,
  faCircleInfo,
  faPhone,
  faFileLines,
  faShield,
} from '@fortawesome/free-solid-svg-icons';
import { Theme } from './Theme/Theme';
import {Menu}
const cx = classNames.bind(styles);

function Header() {
  const [showTheme, setShowTheme] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const [showSetting, setShowSetting] = useState(false);

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
            <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} onClick={handleClear} />
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
          <div className={cx('theme-web')} onClick={() => setShowTheme(!showTheme)}>
            <FontAwesomeIcon icon={faShirt} className={cx('icon-theme')} />
          </div>
            {showTheme && <Theme />}

          <div className={cx('vip-web')}>
            <FontAwesomeIcon icon={faGem} className={cx('icon-vip')} />
          </div>
          <div className={cx('setting-web')}>
            <FontAwesomeIcon icon={faGear} className={cx('icon-setting')} onClick={() => setShowSetting(!showSetting)}/>
          </div>
          {showSetting && <MenuSetting />}

          <div className={cx('user-web')}>
            <img src="/img/user.png" alt="user" className={cx('img-user')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
