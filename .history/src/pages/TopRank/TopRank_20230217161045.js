import React from 'react';
import className from 'classnames/bind';
import styles from './TopRank.module.scss';

const cx = className.bind(styles);

function TopRank() {
  return (
    <div className={cx('topRank')}>
      <div className={cx('topRank-container')}>
        <div className={cx('backg-toprank')}>
          <div className={cx('img-back')}>
            <img src="/imgbackground/top100.png" alt=" " />
          </div>
          <div className={cx('icon-toprank')}></div>
        </div>
        <div className={cx('toprank-items')}>
          <div className={cx('item-title')}>
            <h1>Nổi Bật</h1>
          </div>
          <di className={cx('item-content')}>
            <div className={cx('toprank-item')}>
              <div className={cx('toprank-img')}>
                <img src="/imgtop/toop100/T1.webp" alt="" />
              </div>
              <div className={cx('toprank-description')}>
                <p>Top 100 Bài Nhạc Trẻ Hay Nhất</p>
                <span>Mono,</span>
                <span>Mono,</span>
                <span>Mono,</span>
                <span>Mono</span>
              </div>
            </div>
            <div className={cx('toprank-item')}>
              <div className={cx('toprank-img')}>
                <img src="/imgtop/toop100/T2.webp" alt="" />
              </div>
              <div className={cx('toprank-description')}>
                <p>Top 100 Bài Nhạc Trẻ Hay Nhất</p>
                <span>Mono,</span>
                <span>Mono,</span>
                <span>Mono,</span>
                <span>Mono</span>
              </div>
            </div>
            <div className={cx('toprank-item')}>
              <div className={cx('toprank-img')}>
                <img src="/imgtop/toop100/T3.webp" alt="" />
              </div>
              <div className={cx('toprank-description')}>
                <p>Top 100 Bài Nhạc Trẻ Hay Nhất</p>
                <span>Mono,</span>
                <span>Mono,</span>
                <span>Mono,</span>
                <span>Mono</span>
              </div>
            </div>
            <div className={cx('toprank-item')}>
              <div className={cx('toprank-img')}>
                <img src="/imgtop/toop100/T4.webp" alt="" />
              </div>
              <div className={cx('toprank-description')}>
                <p>Top 100 Bài Nhạc Trẻ Hay Nhất</p>
                <span>Mono,</span>
                <span>Mono,</span>
                <span>Mono,</span>
                <span>Mono</span>
              </div>
            </div>
            <div className={cx('toprank-item')}>
              <div className={cx('toprank-img')}>
                <img src="/imgtop/toop100/T5.webp" alt="" />
              </div>
              <div className={cx('toprank-description')}>
                <p>Top 100 Bài Nhạc Trẻ Hay Nhất</p>
                <span>Mono,</span>
                <span>Mono,</span>
                <span>Mono,</span>
                <span>Mono</span>
              </div>
            </div>
          </di>
        </div>
      </div>
    </div>
  );
}
export default TopRank;
