import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from './MV.module.scss';
import VN from './Vn';
import KP from './Kp';
import USK from './USK';
import HT from './Ht';

const cx = className.bind(styles);

function MV() {
  // const [changeShow, setChangeShow] = useState(false);
  // const showMv = () => setChangeShow(true);
  const [showPageVn, setShowVn] = useState(false);
  const [showPageKp, setShowKp] = useState(true);
  const [showPageUsk, setShowUsk] = useState(true);
  const [showPageHt, setShowHt] = useState(true);

  function handleClickShowPageVn() {
    setShowVn(true);
    setShowUsk(false);
    setShowKp(false);
    setShowHt(false);
  }
  function handleClickPageUsk() {
    setShowUsk(true);
    setShowVn(false);
    setShowKp(false);
    setShowHt(false);
  }
  function handleClickPageKp() {
    setShowKp(true);
    setShowUsk(false);
    setShowVn(false);
    setShowHt(false);
  }
  function handleClickPageHt() {
    setShowHt(true);
    setShowUsk(false);
    setShowVn(false);
    setShowKp(false);
  }

  return (
    <div className={cx('mv')}>
      <div className={cx('mv-container')}>
        <div className={cx('mv-header')}>
          <div className={cx('mv-title')}>MV</div>
          <div className={cx('mv-country')}>
            <div
              onClick={{ handleClickShowPageVn }
              className={cx('name-ctr')}
              style={{ color: showPageVn ? '#ffffff8a' : '#fff' }}
            >
              <span>Việt Nam</span>
            </div>
            <div
              onClick={{ handleClickPageUsk }}
              className={cx('name-ctr')}
              style={{ color: showPageUsk ? '#ffffff8a' : '#fff' }}
            >
              <span>US-UK</span>
            </div>
            <div
              onClick={{ handleClickPageKp }}
              className={cx('name-ctr')}
              style={{ color: showPageKp ? '#ffffff8a' : '#fff' }}
            >
              <span>KPOP</span>
            </div>
            <div
              onClick={{ handleClickPageHt }}
              className={cx('name-ctr')}
              style={{ color: showPageHt ? '#ffffff8a' : '#fff' }}
            >
              <span>Hòa Tấu</span>
            </div>
          </div>
        </div>
        <div className={cx('mv-content')}>
          <div className={cx('content-coutry')}>
            <div className={cx('mvvn')} style={{ display: showPageVn ? 'block' : 'none' }}>
              <VN />
            </div>
            <div className={cx('mvkp')} style={{ display: showPageKp ? 'bock' : 'none' }}>
              <KP />
            </div>
            <div className={cx('mvusk')} style={{ display: showPageUsk ? 'bock' : 'none' }}>
              <USK />
            </div>
            <div className={cx('mvht')} style={{ display: showPageHt ? 'bock' : 'none' }}>
              <HT />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MV;
