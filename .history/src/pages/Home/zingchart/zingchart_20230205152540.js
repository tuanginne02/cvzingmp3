import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function Zingchart() {
  return (
    <div className={cx('zingchart')}>
      <div className={cx('zingchart-content')}>
        <div className={cx('zingchart-title')}>
          <span>#zingchart</span>
          <div className={cx('zingchart-icon')}>
            <FontAwesomeIcon icon={faPlay}/>
          </div>
        </div>
        <div className = {cx("zingchart-left-item")}>
        <div className={cx('music-items')}>
          <div className={cx('music-item')} >
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/1.webp" alt="1" />
              <FontAwesomeIcon
                className={cx('icon-list-music')}
                icon={faPlay}
                style={{
                  display: changeHoverShow ? 'flex' : 'none',
                }}
              />
            </div>
            <div className={cx('list-music-title')}>
              <span className={cx('name-singer')}>Lặng Im</span>
              <span className={cx('name-song')}>Hakoota Dũng Hà</span>
              <span> 1 Tháng trước</span>
            </div>
            <div
              className={cx('icon-left-list')}
             
            >
              <FontAwesomeIcon className={cx('icon-left-ellipsis')} icon={faEllipsis} />
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/2.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Có Một Ngày Trời Không Nắng</span>
              <span>Thái Đinh</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/3.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Kỷ Niệm Giam Cầm Chúng Ta</span>
              <span>Thanh Hưng</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/4.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Xin Lỗi Em Không Ổn</span>
              <span>Hương Giang</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Zingchart;
