import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeaderVIP.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

const cx = classNames.bind(styles);

function HeaderVIP() {
  return (
    <div className={cx('header-vip')}>
      <div className={cx('header-vip-container')}>
        <div className={cx('header-vip-left')}>
          <NavLink to={config.routes.home} className={cx('img-logo')}>
            <img src="/img/zinglogo.png" alt="logo" />
          </NavLink>
          <div className={cx('left-items')}>
            <div className={cx('left-item')}>
              <span>Gói VIP</span>
              <FontAwesomeIcon icon={faChevronDown} />
              <div className={cx('left-item-list')}>
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
            <div className={cx('left-item')}>
              <span>Code VIP</span>
              <FontAwesomeIcon icon={faChevronDown} />
              <div className={cx('left-item-list')}>
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
          <div className={cx('name-user')}>
            <span>Tuấn Gin</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderVIP;
