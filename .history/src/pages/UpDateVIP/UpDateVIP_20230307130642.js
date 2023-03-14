import React from 'react';
import className from 'classnames/bind';
import style from './UpDateVIP.module.scss';

const cx = className.bind(style);

function UpDateVip() {
  return (
    <div className={cx('update-vip')}>
      <div className={cx('img-banner')}>
        <img src="/imgUpDateVIP/bg.jpg" alt="banner" />
      </div>
      <div className={cx('update-vip-container')}>
        <div className={cx('container-header-title')}>
            <div className={cx('img-faveicon')}>
                <img src='' alt='' />
            </div>
            
      </div>
    </div>
    </
  );
}

export default UpDateVip;
