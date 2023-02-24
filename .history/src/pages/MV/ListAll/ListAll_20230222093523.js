import React from 'react';
import className from 'classnames/bind';
import styles from '../MV.module.scss';

const cx = className.bind(styles);

function ListAll() {
  return (
    <div className={cx('list-all')}>
      <div className={cx('list-all-container')}>
        <div className={cx('list-items')}>
          <div className={cx('list-item')}>
            <span>Rap Việt</span>
            <span>Nhạc Trữ Tình</span>
            <span>Nhạc Dân Ca - Quê Hương</span>
            <span>Nhạc Thiếu Nhi</span>
            <span>Nhạc Phim</span>
            <span>Cải Lương</span>
            <span>TV Show</span>
            <span>EDM Việt</span>
            <span>Tết</span>
            <span>Radio Online</span>
          </div>
          <div className={cx('list-item')}>
            <span>Rock Việt</span>
            <span>Nhạc Cách Mạng</span>
            <span>Nhạc Trịnh</span>
            <span>Nhạc Không Lời</span>
            <span>Dance Việt</span>
            <span>R&B ViViệt</span>
            <span>V-Pop</span>
            <span>Nhạc Tôn Giáo</span>
            <span>Giáng Sinh</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListAll;
