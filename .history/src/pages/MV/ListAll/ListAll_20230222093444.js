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
           >Rap Việt</p>
           >Nhạc Trữ Tình</p>
           >Nhạc Dân Ca - Quê Hương</p>
           >Nhạc Thiếu Nhi</p>
           >Nhạc Phim</p>
           >Cải Lương</p>
           >TV Show</p>
           >EDM Việt</p>
           >Tết</p>
           >Radio Online</p>
          </div>
          <div className={cx('list-item')}>
           >Rock Việt</p>
           >Nhạc Cách Mạng</p>
           >Nhạc Trịnh</p>
           >Nhạc Không Lời</p>
           >Dance Việt</p>
           >R&B ViViệt</p>
           >V-Pop</p>
           >Nhạc Tôn Giáo</p>
           >Giáng Sinh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListAll;
