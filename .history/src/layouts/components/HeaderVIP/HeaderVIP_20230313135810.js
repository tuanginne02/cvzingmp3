import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeaderVIP.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

const cx = classNames.bind(styles);

function HeaderVIP() {
  const [showGoiVip, setShowGoiVip] = useState(true);
  const onClickGoiVip = () => {
    setShowGoiVip((current) => !current);
    setShowcodeVip(true);
    setShowLogout(true);
  };
  const [showcodeVip, setShowcodeVip] = useState(true);
  const onClickcodeVip = () => {
    setShowcodeVip((current) => !current);
    setShowGoiVip(true);
    setShowLogout(true);
  };
  const [supoort, setOnclickSuppor] = useState(true);
  const onClickSupport = () => {
    setShowLogout(true);
    setShowGoiVip(true);
    setShowcodeVip(true);
  };
  const [showLogout, setShowLogout] = useState(true);
  const onClickLogout = () => {
    setShowLogout((current) => !current);
    setShowGoiVip(true);
    setShowcodeVip(true);
  };
  // const currentUser = true;
  const [currentUser, setCurrentUser] = useState(false);
  const login = () => {
    setCurrentUser(true);
    setShowLogout(false);
  };
  const logout = () => {
    setCurrentUser(false);
    setShowLogout(true);
  };
  return (
    <div className={cx('header-vip')}>
      <div className={cx('header-vip-container')}>
        <div className={cx('header-vip-left')}>
          <NavLink to={config.routes.home} className={cx('img-logo')}>
            <img src="/img/zinglogo.png" alt="logo" />
          </NavLink>
          <div className={cx('left-items')}>
            <div className={cx('left-item')} onClick={onClickGoiVip}>
              <span>Gói VIP</span>
              <FontAwesomeIcon icon={faChevronDown} />
              <div className={cx('left-item-list')} style={{ display: showGoiVip ? 'none' : 'block' }}>
                <div className={cx('list-items')}>
                  <div className={cx('list-item')}>
                    <span>VIP cá nhân</span>
                  </div>
                  <div className={cx('list-item')}>
                    <span>VIP family</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('left-item')} onClick={onClickcodeVip}>
              <span>Code VIP</span>
              <FontAwesomeIcon icon={faChevronDown} />
              <div className={cx('left-item-list')} style={{ display: showcodeVip ? 'none' : 'block' }}>
                <div className={cx('list-items')}>
                  <div className={cx('list-item')}>
                    <span>Mua code VIP</span>
                  </div>
                  <div className={cx('list-item')}>
                    <span>Nhập code VIP</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('left-item')}>
              <span>Gói data</span>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </div>
            <NavLink to={config.routes.support} className={cx('left-item')} onClick=>
              <span>Hỗ trợ</span>
            </NavLink>
          </div>
        </div>
        <div className={cx('header-vip-right')} onClick={onClickLogout}>
          {currentUser ? (
            <div className={cx('user-login')}>
              <div className={cx('img-user')}>
                <img src="/img/user-login.jpg" alt="" />
              </div>
              <div className={cx('name-user')}>
                <span>Tuấn Gin</span>
                <FontAwesomeIcon icon={faChevronDown} />
                <div className={cx('right-item-list')} style={{ display: showLogout ? 'none' : 'block' }}>
                  <div className={cx('list-items')}>
                    <div className={cx('list-item')} onClick={logout}>
                      <span>Đăng xuất</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={cx('user-no-login')} onClick={login}>
              <span>Đăng nhập</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderVIP;
