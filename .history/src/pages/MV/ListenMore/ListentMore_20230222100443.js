import React from 'react';
import className from 'classnames/bind';
import styles from '../MV.module.scss';

const cx = className.bind(styles);

function ListenMore() {
  return (
    <div classNam={cx('listenMore')}>
      <div className={cx('list-all-container')}>
        <div className={cx('list-items')}>
          <div className={cx('list-item')}>
            <p>Rap Việt</p>
            <p>Nhạc Trữ Tình</p>
            <p>Nhạc Dân Ca - Quê Hương</p>
            
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default ListenMore;
