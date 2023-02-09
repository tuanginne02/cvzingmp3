import React from 'react';
import { NavLink } from 'react-router-dom';

import className from 'classnames/bind';
import styles from './Following.module.scss';

const cx = className.bind(styles);

function Following() {

  return (
    <div className={cx('following')}>
      <div className={cx('following-container')}>
        <div className={cx('nation-top')}>
          <div className={cx('nation-top-items')}>
            <NavLink className={cx('nation-top-item')}>
              <span>Việt Nam</span>
            </NavLink>
            <NavLink className={cx('nation-top-item')}>
              <span>K-POP</span>
            </NavLink>
            <NavLink className={cx('nation-top-item')}>
              <span>US-UK</span>
            </NavLink>
            <NavLink className={cx('nation-top-item')}>
              <span>Hoa Ngữ</span>
            </NavLink>
            <NavLink className={cx('nation-top-item')}>
              <span>Nổi Bật</span>
            </NavLink>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Following;
