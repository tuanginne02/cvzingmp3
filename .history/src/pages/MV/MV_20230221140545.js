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
  const [showPageKp, setShowKp] = useState(fase);
  const [showPageUsk, setShowUsk] = useState(fase);
  const [showPageHt, setShowHt] = useState(fase);

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
