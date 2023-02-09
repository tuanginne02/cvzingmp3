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
  function handleClickShowPage() {
    setChangeShowPage(false);
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
        <FollowingVp style={{ display: changeShowPage ? 'block' : 'none' }}></F
        <FollowingUSK style={{ display: changeShowPage ? 'none' : 'block' }} />
        <FollowingKp style={{ display: changeShowPage ? 'none' : 'block' }} />
        <FollowingCp style={{ display: changeShowPage ? 'none' : 'block' }} />
        <MainFeed style={{ display: changeShowPage ? 'none' : 'block' }} />
      </div>
    </div>
  );
}

export default Following;
