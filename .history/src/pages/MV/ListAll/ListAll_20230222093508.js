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
            h4>Rap Việt</sp>
            h4>Nhạc Trữ Tình</sp>
            h4>Nhạc Dân Ca - Quê Hương</sp>
            h4>Nhạc Thiếu Nhi</sp>
            h4>Nhạc Phim</sp>
            h4>Cải Lương</sp>
            h4>TV Show</sp>
            h4>EDM Việt</sp>
            h4>Tết</sp>
            h4>Radio Online</sp>
          </div>
          <div className={cx('list-item')}>
            h4>Rock Việt</sp>
            h4>Nhạc Cách Mạng</sp>
            h4>Nhạc Trịnh</sp>
            h4>Nhạc Không Lời</sp>
            h4>Dance Việt</sp>
            h4>R&B ViViệt</sp>
            h4>V-Pop</sp>
            h4>Nhạc Tôn Giáo</sp>
            h4>Giáng Sinh</sp>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListAll;
