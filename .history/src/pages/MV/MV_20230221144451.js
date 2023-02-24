import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from './MV.module.scss';
import VN from './Vn';
import KP from './Kp';
import USK from './USK';
import HT from './Ht';

const cx = className.bind(styles);

function MV() {
  const [showPageVn, setShowVn] = useState(false);
  const [showPageKp, setShowKp] = useState(true);
  const [showPageUsk, setShowUsk] = useState(true);
  const [showPageHt, setShowHt] = useState(true);

  function handleClickShowPageVn() {
    setShowVn(false);
    setShowUsk(true);
    setShowKp(true);
    setShowHt(true);
  }
  function handleClickPageUsk() {
    setShowUsk(false);
    setShowVn(true);
    setShowKp(true);
    setShowHt(true);
  }
  function handleClickPageKp() {
    setShowKp(false);
    setShowUsk(true);
    setShowVn(true);
    setShowHt(true);
  }
  function handleClickPageHt() {
    setShowHt(false);
    setShowUsk(true);
    setShowVn(true);
    setShowKp(true);
  }

  return (
    <div className={cx('mv')}>
      <div className={cx('mv-container')}>
        <div className={cx('mv-header')}>
          <div className={cx('mv-title')}>MV</div>
          <div className={cx('mv-country')}>
            <div
              onClick={handleClickShowPageVn}
              className={cx('name-ctr')}
              style={{ color: showPageVn ? '#ffffff8a' : '#fff' }}
            >
              <span>Việt Nam</span>
              <div className={cx('ctr-vn')}></div>
            </div>
            <div
              onClick={handleClickPageUsk}
              className={cx('name-ctr')}
              style={{ color: showPageUsk ? '#ffffff8a' : '#fff' }}
            >
              <span>US-UK</span>
              <div className={cx('ctr-usk')}></div>
              <div
                onClick={handleClickPageKp}
                className={cx('name-ctr')}
                style={{ color: showPageKp ? '#ffffff8a' : '#fff' }}
              >
                <span>KPOP</span>
                <div className={cx('ctr-kp')}></div>
                <div
                  onClick={handleClickPageHt}
                  className={cx('name-ctr')}
                  style={{ color: showPageHt ? '#ffffff8a' : '#fff' }}
                >
                  <span>Hòa Tấu</span>
                  <div className={cx('ctr-ht')}></div>
                </div>
              </div>
              <div className={cx('mv-content')}>
                <div className={cx('content-coutry')}>
                  <div className={cx('mvvn')} style={{ display: showPageVn ? 'none' : 'block' }}>
                    <VN />
                  </div>
                  <div className={cx('mvusk')} style={{ display: showPageUsk ? 'none' : 'block' }}>
                    <USK />
                  </div>
                  <div className={cx('mvkp')} style={{ display: showPageKp ? 'none' : 'block' }}>
                    <KP />
                  </div>
                  <div className={cx('mvht')} style={{ display: showPageHt ? 'none' : 'block' }}>
                    <HT />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MV;
