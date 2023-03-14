import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeaderVIP.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function HeaderVIP() {
  return (
    <div className={cx('header-vip')}>
      <div className={cx('header-vip-container')}>
        <div className={cx('header-vip-left')}>
          <div className={cx('img-logo')}>
            <img src="/img/zinglogo.png" alt="logo" />
          </div>
          <div className={cx('left-items')}>
            <div className={cx('left-item')}>
              <span>Gói VIP</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className={cx('left-item')}>
              <span>Code VIP</span>
              <FontAwesomeIcon icon={faChevronDown} />
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
            <div className={cx()}
        </div>
      </div>
    </div>
  );
}

export default HeaderVIP;
