import React from 'react';
import className from 'classnames/bind';
import styles from '../Radio.module.scss';

const cx = className.bind(styles);

function Podcast() {
  return (
    <div className={cx('podcast')}>
      <div className={cx('podccast-container')}>
       discover
      </div>
    </div>
  );
}

export default Podcast;
