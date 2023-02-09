import React from 'react';
import className from 'classnames/bind';
import styles from '../Radio.module.scss';

const cx = className.bind(styles);

function Podcast() {
  return (
    <div className={cx('podcast')}>
      <div className={cx('podccast-container')}>
        <div className={cx('cont-title')}>
          <h1>Khám Phá Podcast</h1>
        </div>
        <div className={cx('cont-items')}>
          <div className={cx('cont-item')}>
            <div className={cx('cont-item-img')}>
              <img src="/imgradio/podcast/1.jpg" alt="pos" className={cx('pos-img')} />
            </div>
            <div className={cx('cont-item-title')}>
                <span>Đắp Chăn Nằm Nghe Tun Kể</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
