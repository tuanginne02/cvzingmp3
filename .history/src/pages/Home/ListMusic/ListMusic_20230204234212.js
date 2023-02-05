import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function ListMusic() {
  return (
    <div className={cx('list-music')}>
      <div className={cx('list-music-content')}>
        <div className={cx('music-items')}>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/1.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Lặng Im</span>
              <span>hakoota Dũng Hà</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('list-music-img')}>
            <img src="/imgListMusic/2.webp" alt="1" />
          </div>
          <div className={cx('list-music-img')}>
            <img src="/imgListMusic/3.webp" alt="1" />
          </div>
          <div className={cx('list-music-img')}>
            <img src="/imgListMusic/4.webp" alt="1" />
          </div>
        </div>
       <div className = {cx('music-items')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/5.webp" alt="1" />
            </div>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/6.webp" alt="1" />
            </div>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/7.webp" alt="1" />
            </div>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/8.webp" alt="1" />
            </div>
       </div>
      <div className={cx('M')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/1.webp" alt="1" />
            </div>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/2.webp" alt="1" />
            </div>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/3.webp" alt="1" />
            </div>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/4.webp" alt="1" />
            </div>
      </div >
      </div>
    </div>
  );
}

export default ListMusic;
