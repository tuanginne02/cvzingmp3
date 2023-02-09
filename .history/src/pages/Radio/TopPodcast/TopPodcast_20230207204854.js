import React from 'react';
import className from 'classnames/bind';
import styles from '../Radio.module.scss';

const cx = className.bind(styles);

function TopPodcast() {
  return (
    <div className={cx('top-podcast')}>
      <div className={cx('topPod-container')}>
        <div className={cx('topPod-zingnews')}>
            <div className={cx('topPod-header')}>
                <div className={cx('zingnew-logo')}>
                    <img 
                    </div>
                <div className={cx('zingnew-title')}>
                    <span>PODCAST</span>
                    <h2>Zing News</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TopPodcast;
