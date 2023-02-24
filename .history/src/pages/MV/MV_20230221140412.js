import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from './MV.module.scss';
import VN from './Vn';
import KP from './Kp';
import USK from './USK';
import HT from './Ht';

const cx = className.bind(styles);

function MV() {
  const [changeShow, setChangeShow] = useState(false);
  const showMv = () => setChangeShow(true);
  const [showPageVn, setShowVn] = useState(true);
  const [showPageKp, setShowKp] = useState(true);
  const [showPageUsk, setShowUsk] = useState(true);
  const [showPageHt, setShowHt] = useState(true);

  function handleClickShowPageVn() {
    setChangeShowPageVn(true);
    setChangeShowPageUsk(false);
    setChangeShowPageKp(false);
    setChangeShowPageCp(false);
    setChangeShowPageMainfeed(false);
  }
  function handleClickPageUsk() {
    setChangeShowPageUsk(true);
    setChangeShowPageVn(false);
    setChangeShowPageKp(false);
    setChangeShowPageCp(false);
    setChangeShowPageMainfeed(false);
  }
  function handleClickPageKp() {
    setChangeShowPageKp(true);
    setChangeShowPageUsk(false);
    setChangeShowPageVn(false);
    setChangeShowPageCp(false);
    setChangeShowPageMainfeed(false);
  }
  function handleClickPageCp() {
    setChangeShowPageCp(true);
    setChangeShowPageUsk(false);
    setChangeShowPageVn(false);
    setChangeShowPageKp(false);
    setChangeShowPageMainfeed(false);
  }
  function handleClickPageMainfeed() {
    setChangeShowPageMainfeed(true);
    setChangeShowPageUsk(false);
    setChangeShowPageVn(false);
    setChangeShowPageKp(false);
    setChangeShowPageCp(false);
  }

  return (
    <div className={cx('mv')}>
      <div className={cx('mv-container')}>
        <div className={cx('mv-header')}>
          <div className={cx('mv-title')}>MV</div>
          <div className={cx('mv-country')}>
            <div className={cx('name-ctr')} style={{ color: changeShow ? '#ffffff8a' : '#fff' }}>
              <span>Việt Nam</span>
            </div>
            <div className={cx('name-ctr')} style={{ color: changeShow ? '#fff' : '#ffffff8a' }}>
              <span>US-UK</span>
            </div>
            <div className={cx('name-ctr')} style={{ color: changeShow ? '#fff' : '#ffffff8a' }}>
              <span>KPOP</span>
            </div>
            <div className={cx('name-ctr')} style={{ color: changeShow ? '#fff' : '#ffffff8a' }}>
              <span>Hòa Tấu</span>
            </div>
          </div>
        </div>
        <div className={cx('mv-content')}>
          <div className={cx('content-coutry')}>
            <div className={cx('mvvn')} style={{ display: changeShow ? 'none' : 'block' }}>
              <VN />
            </div>
            <div className={cx('mvkp')} style={{ display: changeShow ? 'bock' : 'none' }}>
              <KP />
            </div>
            <div className={cx('mvusk')} style={{ display: changeShow ? 'bock' : 'none' }}>
              <USK />
            </div>
            <div className={cx('mvht')} style={{ display: changeShow ? 'bock' : 'none' }}>
              <HT />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MV;
