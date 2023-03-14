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
                <img src='/imgUpDateVIP/logo-mp-3.svg' alt='' />
            </div>
            <div className={cx('header-title')}>
                <h1></h1>
            </div>
      </div>
    </div>
    </div>
  );
}

export default UpDateVip;
