import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function PartnerMusic() {
  return (
    <div className={cx('partner-music')}>
      <div className={cx('parmusic-container')}>
        <h1>ĐỐI TÁC ÂM NHẠC</h1>
        <div className={cx('parmusic-content')}>
          <div className={cx('content-items')}>
            <div className={cx('content-item')}>
              <img src="/imgpartner/1.png" alt="Dt" />
            </div>
            <div className={cx('content-item')}>
              <img src="/imgpartner/2.png" alt="Dt" />
            </div>{' '}
            <div className={cx('content-item')}>
              <img src="/imgpartner/3.png" alt="Dt" />
            </div>{' '}
            <div className={cx('content-item')}>
              <img src="/imgpartner/4.png" alt="Dt" />
            </div>
          </div>
          <div className={cx('content-items')}>
            <div className={cx('content-item')}>
              <img src="/imgpartner/5.png" alt="Dt" />
            </div>
            <div className={cx('content-item')}>
              <img src="/imgpartner/6.png" alt="Dt" />
            </div>{' '}
            <div className={cx('content-item')}>
              <img src="/imgpartner/7.png" alt="Dt" />
            </div>{' '}
            <div className={cx('content-item')}>
              <img src="/imgpartner/8.png" alt="Dt" />
            </div>
          </div>{' '}
          <div className={cx('content-items')}>
            <div className={cx('content-item')}>
              <img src="/imgpartner/.png" alt="Dt" />
            </div>
            <div className={cx('content-item')}>
              <img src="/imgpartner/1.png" alt="Dt" />
            </div>{' '}
            <div className={cx('content-item')}>
              <img src="/imgpartner/1.png" alt="Dt" />
            </div>{' '}
            <div className={cx('content-item')}>
              <img src="/imgpartner/1.png" alt="Dt" />
            </div>
          </div>{' '}
          <div className={cx('content-items')}>
            <div className={cx('content-item')}>
              <img src="/imgpartner/1.png" alt="Dt" />
            </div>
            <div className={cx('content-item')}>
              <img src="/imgpartner/1.png" alt="Dt" />
            </div>{' '}
            <div className={cx('content-item')}>
              <img src="/imgpartner/1.png" alt="Dt" />
            </div>{' '}
            <div className={cx('content-item')}>
              <img src="/imgpartner/1.png" alt="Dt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerMusic;
