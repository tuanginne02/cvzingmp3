import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function TopSinger() {
  return (
    <div className={cx('topsinger')}>
      <div className={cx('topsinger-container')}>
        <div className={cx('topsinger-top')}>
          <div className={cx('top-items')}>
            <div className={cx('top-item')}>
              <div className={cx('img-item')}>
                <img src="/imgzingchart/T1.jpg" alt="" />
              </div>
            </div>
            <div className={cx('top-item')}>
              <div className={cx('img-item')}>
                <img src="/imgzingchart/T2.jpg" alt="" />
              </div>
            </div>  <div className={cx('top-item')}>
              <div className={cx('img-item')}>
                <img src="/imgzingchart/T3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('topsinger-bottom')}></div>
      </div>
    </div>
  );
}

export default TopSinger;
