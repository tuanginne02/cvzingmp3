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
                    <img src='/imgbackground/top100.png'  alt=' ' />
                </div>
                <div className={cx('icon-toprank')}>
                </div>
            </div>
            <div classNmae={cx('toprank-items')}>
                <div classNmae={cx('toprank-item')}>
                    <div classNmae={cx('item-title')}>
                        <h1>Nổi Bật</h1>
                    </div>
                    <div className={cx('toprank-img')}>
                        <img src='' alt='' />
                    </div>
                    <div className={cx('toprank-description')}>
                        <span>Top 100 Bài Nhạc Trẻ Hay NH/span>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
export default TopRank;