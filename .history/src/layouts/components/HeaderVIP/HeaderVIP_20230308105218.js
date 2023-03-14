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
  const onClickGoiVip = () => setShowGoiVip((current) => !current);
  const [showcodeVip, setShowcodeVip] = useState(true);
  const onClickcodeVip = () => setShowcodeVip((current) => !current);
  const [showLogout, setShowLogout] = useState(true);
  const onClickLogout = () => setShowLogout((current) => !current);
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
            <div className={cx('left-item')}>
              <span>Hỗ trợ</span>
            </div>
          </div>
        </div>
        <div className={cx('header-vip-right')}>
          <div className={cx('img-user')}>
            <img src="/img/user-login.jpg" alt="" />
          </div>
          <div className={cx('name-user')} onClick={onClickLogout}>
            <span>Tuấn Gin</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className={cx('right-item-list')}>
            <div className={cx('list-items')}>
              <div className={cx('list-item')}>
                <span>Đăng xuất</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderVIP;
