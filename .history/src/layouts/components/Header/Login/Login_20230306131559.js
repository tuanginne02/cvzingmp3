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
          <NavLink to='' className={cx('login-zalo')}>
            <img src='' al='' />
            <span></span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
