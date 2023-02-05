import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function TopList() {
  return (
    <div className={cx('topList')}>
      <div className={cx('list-top')}>
        <h2>Thư Thả Cuối Tuần</h2>
        <div className={cx('list-items')}>
            <div className={cx('list-item')}>
                <div className={cx('item-img')}></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TopList;
