import React from 'react';
import className from 'classnames/bind';
import styles from './MV.module.scss';
import VN from './Vn';
import KP from './Kp';
import USK from './USK';
import HT from './Ht';

const cx = className.bind(styles);

function MV() {
  return (
    <div className={cx('mv')}>
      <div className={cx('mv-container')}>
        <div className={cx('mv-header')}>
          <div className={cx('mv-title')}>MV</div>
          <div className={cx('mv-country')}>
            <div className={cx('name-ctr')}>
              <span>Việt Nam</span>
            </div>
            <div className={cx('name-ctr')}>
              <span>US-UK</span>
            </div>
            <div className={cx('name-ctr')}>
              <span>KPOP</span>
            </div>
            <div className={cx('name-ctr')}>
              <span>Hòa Tấu</span>
            </div>
          </div>
        </div>
        <div className={cx('mv-content')}>
          <div className={cx('content-coutry')}>
            <div className={cx('mvvn')} style={{dis}}>
              <VN />
            </div>
            <div className={cx('mvkp')} style={{dis}}>
              <KP />
            </div>
            <div className={cx('mvusk') style={{dis}}}>
              <USK />
            </div>
            <div className={cx('mvht')} style={{dis}}>
              <HT />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MV;
