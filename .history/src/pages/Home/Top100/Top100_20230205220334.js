import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function Top100() {
  return <div className={cx('top100')}>
    < div className={cx('top100-conatiner')}>
        <div className={cx('conatiner-top')}></div>
    </div>
  </div>;
}

export default Top100;
