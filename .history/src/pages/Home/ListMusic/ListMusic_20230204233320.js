import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function ListMusic() {
  return (
    <div className={cx('list-music')}>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/1.webp" alt="1" />
      </div>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/2.webp" alt="1" />
      </div>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/3.webp" alt="1" />
      </div>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/4.webp" alt="1" />
      </div>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/5.webp" alt="1" />
      </div>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/6.webp" alt="1" />
      </div>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/7.webp" alt="1" />
      </div>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/8.webp" alt="1" />
      </div>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/1.webp" alt="1" />
      </div>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/2.webp" alt="1" />
      </div>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/3.webp" alt="1" />
      </div>
      <div className={cx('list-music-img')}>
        <img src="/public/imgListMusic/1.webp" alt="1" />
      </div>
    </div>
  );
}

export default ListMusic;
