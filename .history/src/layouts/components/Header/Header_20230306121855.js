import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
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
import { Setting } from './MenuSetting/MenuSetting';
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

  const [currentUser, setCurrentUser] = useState(true);

  const loginUser = () => {
    setCurrentUser(false);
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

          <NavLink
            className={cx('vip-web')}
            to="https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=icon-header"
          >
            <FontAwesomeIcon icon={faGem} className={cx('icon-vip')} />
          </NavLink>
          <div className={cx('setting-web')} onClick={() => setShowSetting(!showSetting)}>
            <FontAwesomeIcon icon={faGear} className={cx('icon-setting')} />
            {showSetting && <Setting />}
          </div>

          <div className={cx('user-web')}>
            <div
              // to="https://id.zalo.me"
              onClick={loginUser}
              className={cx('user-no-login')}
              style={{
                display: currentUser ? 'block' : 'none',
              }}
            >
              <img src="/img/user.png" alt="user" className={cx('img-user')} />
            </div>
            <div
              className={cx('user-login')}
              style={{
                display: currentUser ? 'none' : 'block',
              }}
            >
              <img src="/img/user-login.jpg" alt="user" className={cx('img-user')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
