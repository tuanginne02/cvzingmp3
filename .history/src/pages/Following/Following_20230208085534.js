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
  const [changeShowPageVn, setChangeShowPageVn] = useState(true);
  const [changeShowPageKp, setChangeShowPageKp] = useState(false);
  const [changeShowPageUsk, setChangeShowPageUsk] = useState(false);
  const [changeShowPageCp, setChangeShowPageCp] = useState(false);
  const [changeShowPageMainfeed, setChangeShowPageMainfeed] = useState(false);

  function handleClickShowPageVn() {
    setChangeShowPageVn(true);
  }
  function handleClickPageUsk() {
    setChangeShowPageUsk(true);
    setChangeShowPageVn(false);
    setChangeShowPageKp(false);
    setChangeShowPageCp(false);
    setChangeShowPageMainfeed(false);
  }
  function handleClickPageKp() {
    setChangeShowPageKp(false);
  }
  function handleClickPageCp() {
    setChangeShowPageCp(false);
  }
  function handleClickPageMainfeed() {
    setChangeShowPageMainfeed(false);
  }
  return (
    <div className={cx('following')}>
      <div className={cx('following-container')}>
        <div className={cx('nation-top')}>
          <div className={cx('nation-top-items')}>
            <div className={cx('nation-top-item')} onClick={handleClickShowPageVn}>
              <span>Việt Nam</span>
            </div>
            <div className={cx('nation-top-item')} onClick={handleClickPageUsk}>
              <span>US-UK</span>
            </div>
            <div className={cx('nation-top-item')} onClick={handleClickPageKp}>
              <span>K-POP</span>
            </div>
            <div className={cx('nation-top-item')} onClick={handleClickPageCp}>
              <span>Hoa Ngữ</span>
            </div>
            <div className={cx('nation-top-item')} onClick={handleClickPageMainfeed}>
              <span>Nổi Bật</span>
            </div>
          </div>
        </div>
        <div className={cx('fl-vp')} style={{ display: changeShowPageVn ? 'block' : 'none' }}>
          <FollowingVp />
        </div>
        <div className={cx('fl-usk')} style={{ display: changeShowPageUsk ? 'block' : 'none' }}>
          <FollowingUSK />
        </div>
        <div className={cx('fl-kp')} style={{ display: changeShowPageKp ? 'block' : 'none' }}>
          <FollowingKp />
        </div>
        <div className={cx('fl-cp')} style={{ display: changeShowPageCp ? 'block' : 'none' }}>
          <FollowingCp />
        </div>
        <div className={cx('fl-mf')} style={{ display: changeShowPageMainfeed ? 'block' : 'none' }}>
          <MainFeed />
        </div>
      </div>
    </div>
  );
}

export default Following;
