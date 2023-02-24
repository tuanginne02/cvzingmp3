import React from 'react';
import className from 'classnames/bind';
import styles from '../MV.module.scss';

const cx = className.bind(styles);

function ListenMore() {
  return (
    <div className={cx('listenMore')}>
      <div className={cx('list-all-container')}>
        <div className={cx('list-items')}>
          <div className={cx('list-item')}>
            <p>Nghe Nhiều</p>
            <p>Nổi Bật</p>
            <p>Mới Nhất</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListenMore;
