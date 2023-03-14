import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faCheck } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from './Login.module.scss';

const cx = className.bind(styles);

export function Login() {
  return (
    <div className={cx('login')}>
      <div className={cx('login-conatiner')}>
        <div className={cx('login-content')}>
          <div className={cx('login-icon')}>
            <FontAwesomeIcon className={cx('icon-close')} icon={faClose} />
          </div>
          <div className={cx('login-img')}>
            <img src="/imgUser/login1.jfif" alt="" />
          </div>
          <div className={cx('login-img')}>
            <img src="/imgUser/login2.jpg" alt="" />
          </div>
          <div className={cx('login-img')}>
            <img src="/imgUser/login3.jpg" alt="" />
          </div>
          <div className={cx('login-img')}>
            <img src="/imgUser/login4.jpg" alt="" />
          </div>
          <NavLink to="" className={cx('login-zalo')}>
            <div className={cx('zalo-img')}>
              <img className={cx('img-zalo')} src="/imgUser/login-zalo.jpg" alt="" />
            </div>
            <div className={cx('zalo-title')}>
              <span>Đăng nhập bằng Zalo</span>
            </div>
          </NavLink>
          <div className={cx}
        </div>
      </div>
    </div>
  );
}
