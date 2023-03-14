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
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { Theme } from './Theme/Theme';
import { Setting } from './MenuSetting/MenuSetting';
import { Login } from './Login/Login';
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

  const [currentLogin, setCurrentLogin] = useState(false);

  const [currentUser, setCurrentUser] = useState(false);
  const onClickLogOut = () => setCurrentUser(true);

  const [showLogin, setShowLogin] = useState(true);

  const onClickLogin = () => setShowLogin((current) => !current);

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
            to={config.routes.updateVip}
          >
            <FontAwesomeIcon icon={faGem} className={cx('icon-vip')} />
          </NavLink>
          <div className={cx('setting-web')} onClick={() => setShowSetting(!showSetting)}>
            <FontAwesomeIcon icon={faGear} className={cx('icon-setting')} />
            {showSetting && <Setting />}
          </div>

          <div className={cx('user-web')}>
            {currentUser ? (
              <div
                // to="https://id.zalo.me"
                className={cx('user-no-login')}
              >
                <img
                  src="/img/user.png"
                  alt="user"
                  className={cx('img-user')}
                  onClick={() => setCurrentLogin(!currentLogin)}
                />
                {currentLogin && <Login />}
              </div>
            ) : (
              <div className={cx('user-login')} onClick={onClickLogin}>
                <img src="/img/user-login.jpg" alt="user" className={cx('img-user')} />
                <div className={cx('list-login')} style={{ display: showLogin ? 'none' : 'block' }}>
                  <div className={cx('list-login-content')}>
                    <div className={cx('login-items')}>
                      <div className={cx('login-item')}>
                        <FontAwesomeIcon icon={faGem} />
                        <span>Nâng cấp VIP</span>
                      </div>
                      <div className={cx('login-item')}>
                        <FontAwesomeIcon icon={faGem} />
                        <span>Mua code VIP</span>
                      </div>
                      <div className={cx('login-item')} 
                      onClick={() => {
                        onClickLogOut();
                        console.log('out');
                      }}
                      >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span>Đăng xuất</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
