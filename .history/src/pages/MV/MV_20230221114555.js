import React from 'react';
import className from 'classnames/bind';
import styles from './MV.module.scss';
import VN from './Vn';
const cx = className.bind(styles);

function MV() {
  return (
    <div className={cx('mv')}>
      <div className={cx('mv-container')}>
        <div className={cx('mv-header')}>
          <div className={cx('mv-title')}>MV</div>
          <div className={cx('mv-country')}>
           <p> <span>Việt Nam</span></p>
            <span>US-UK</span>
            <span>KPOP</span>
            <span>Hòa Tấu</span>
          </div>
        </div>
        <div className={cx('mv-content')}>
          <div className={cx('content-coutry')}>
            <VN />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MV;
