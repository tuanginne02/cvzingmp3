import React from 'react';
import className from 'classnames/bind';
import styles from '../Following.module.scss';

const cx = className.bind(styles);

function FollowingVp() {
  return (
    <div className={cx('fl-vp')}>
      <div className={cx('fl-vp-container')}></div>
    </div>
  );
}

export default FollowingVp;
