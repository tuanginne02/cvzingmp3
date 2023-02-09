import React from 'react';
import className from 'classnames/bind';
import styles from '../Radio.module.scss';

const cx = className.bind(styles);

function TopPodcast() {
  return (
    <div className={cx('top-podcast')}>
      <div className={cx('topPod-container')}>
        <div className={cx('topPod-content')}>
          <div className={cx('topPod-header')}>
            <div className={cx('header-logo')}>
              <img src="/imgradio/logoPodcast/znews.png" alt="zn" />
            </div>
            <div className={cx('header-title')}>
              <span>PODCAST</span>
              <h2>Zing News</h2>
            </div>
          </div>
          <div className={cx('topPod-bottom')}>
            <div className={cx('bottomitems')}>
              <div className={cx('bottomitem')}>
                <div className={cx('cont-item-img')}>
                  <img src="/imgradio/imgTopPc/znw1.png" alt="zn" />
                </div>
                <div className={cx('cont-item-title')}>
                  <span>How2Money x Doctor Housing</span>
                </div>
              </div>
              <div className={cx('bottomitem')}>
                <div className={cx('cont-item-img')}>
                  <img src="/imgradio/imgTopPc/znw1.png" alt="zn" />
                </div>
                <div className={cx('cont-item-title')}>
                  <span>How2Money x Doctor Housing</span>
                </div>
              </div>
              <div className={cx('bottomitem')}>
                <div className={cx('cont-item-img')}>
                  <img src="/imgradio/imgTopPc/znw1.png" alt="zn" />
                </div>
                <div className={cx('cont-item-title')}>
                  <span>How2Money x Doctor Housing</span>
                </div>
              </div>
              <div className={cx('bottomitem')}>
                <div className={cx('cont-item-img')}>
                  <img src="/imgradio/imgTopPc/znw1.png" alt="zn" />
                </div>
                <div className={cx('cont-item-title')}>
                  <span>How2Money x Doctor Housing</span>
                </div>
              </div>
              <div className={cx('bottomitem')}>
                <div className={cx('cont-item-img')}>
                  <img src="/imgradio/imgTopPc/znw1.png" alt="zn" />
                </div>
                <div className={cx('cont-item-title')}>
                  <span>How2Money x Doctor Housing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TopPodcast;
