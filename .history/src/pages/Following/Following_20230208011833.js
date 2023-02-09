import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from './Following.module.scss';
import FollowingVp from './FollowingVp'
import FollowingKp from './FollowingKp'
import FollowingUSK from './FollowingUSK'
import FollowingCp from './FollowingCp'
import FollowingVp from './FollowingVp'


const cx = className.bind(styles);

function Following() {

  return (
    <div className={cx('following')}>
      <div className={cx('following-container')}>
        <div className={cx('nation-top')}>
          <div className={cx('nation-top-items')}>
            <div className={cx('nation-top-item')}>
              <span>Việt Nam</span>
            </div>
            <div className={cx('nation-top-item')}>
              <span>K-POP</span>
            </div>
            <div className={cx('nation-top-item')}>
              <span>US-UK</span>
            </div>
            <div className={cx('nation-top-item')}>
              <span>Hoa Ngữ</span>
            </div>
            <div className={cx('nation-top-item')}>
              <span>Nổi Bật</span>
            </div>
          </div>
        </div>
       <FollowingVp />
      </div>
    </div>
  );
}

export default Following;
