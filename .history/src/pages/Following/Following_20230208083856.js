import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from './Following.module.scss';
import FollowingVp from './FollowingVp';
import FollowingKp from './FollowingKp';
import FollowingUSK from './FollowingUSK';
import FollowingCp from './FollowingCp';
import MainFeed from './MainFeed';

const cx = className.bind(styles);

function Following() {
  const [changeShowPage, setChangeShowPage] = useState(true);
  function handleClickShowPageVn() {
    setChangeShowPage(true);
  }
  function handleClickNonePage() {
    setChangeShowPage(false);
  }
  return (
    <div className={cx('following')}>
      <div className={cx('following-container')}>
        <div className={cx('nation-top')}>
          <div className={cx('nation-top-items')}>
            <div className={cx('nation-top-item')} onClick={handleClickShowPage}>
              <span>Việt Nam</span>
            </div>
            <div className={cx('nation-top-item')} onClick={handleClickNonePage}>
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
        <div className={cx('fl-vp')} style={{ display: changeShowPage ? 'block' : 'none' }}>
          <FollowingVp />
        </div>
        <div className={cx('fl-usk')} style={{ display: changeShowPage ? 'none' : 'block' }}>
          <FollowingUSK />
        </div>
        <div className={cx('fl-kp')} style={{ display: changeShowPage ? 'none' : 'block' }}>
          <FollowingKp />
        </div>
        <div className={cx('fl-cp')} style={{ display: changeShowPage ? 'none' : 'block' }}>
          <FollowingCp />
        </div>
        <div className={cx('fl-mf')} style={{ display: changeShowPage ? 'none' : 'block' }}>
          <MainFeed />
        </div>
      </div>
    </div>
  );
}

export default Following;
