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
            <>Rap Việt</sp>
            <>Nhạc Trữ Tình</sp>
            <>Nhạc Dân Ca - Quê Hương</sp>
            <>Nhạc Thiếu Nhi</sp>
            <>Nhạc Phim</sp>
            <>Cải Lương</sp>
            <>TV Show</sp>
            <>EDM Việt</sp>
            <>Tết</sp>
            <>Radio Online</sp>
          </div>
          <div className={cx('list-item')}>
            <>Rock Việt</sp>
            <>Nhạc Cách Mạng</sp>
            <>Nhạc Trịnh</sp>
            <>Nhạc Không Lời</sp>
            <>Dance Việt</sp>
            <>R&B ViViệt</sp>
            <>V-Pop</sp>
            <>Nhạc Tôn Giáo</sp>
            <>Giáng Sinh</sp>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListAll;
