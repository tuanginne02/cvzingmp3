import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
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
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </div>
        <div className={cx('zingchart-left-item')}>
          <div className={cx('zingchart-items')}>
            <div className={cx('zingchart-item')}>
              <div className={cx('zingchart-rank')}>
                <span>1</span>
              </div>
              <div className={cx('list-zingchart-img')}>
                <img src="/imgzingchart/1.jpg" alt="1" />
                <FontAwesomeIcon className={cx('icon-list-zingchart')} icon={faPlay} />
              </div>
              <div className={cx('list-zingchart-title')}>
                <span className={cx('name-singer')}>Em Là Kẻ Đáng Thương</span>
                <span className={cx('name-song')}>Phá Huy T4</span>
              </div>
              <div className={cx('icon-left-list')}>
                <span>50%</span>
              </div>
            </div>
            <div className={cx('zingchart-item')}>
              <div className={cx('zingchart-rank')}>
                <span>2</span>
              </div>
              <div className={cx('list-zingchart-img')}>
                <img src="/imgzingchart/2.jpg" alt="1" />
              </div>
              <div className={cx('list-zingchart-title')}>
                <span>Quả Phụ Tướng</span>
                <span>Dunghoangpham</span>
              </div>
              <div className={cx('icon-left-list')}>
                <span>26%</span>
              </div>
            </div>
            <div className={cx('zingchart-item')}>
              <div className={cx('zingchart-rank')}>
                <span>3</span>
              </div>
              <div className={cx('list-zingchart-img')}>
                <img src="/imgzingchart/3.jpg" alt="1" />
              </div>
              <div className={cx('list-zingchart-title')}>
                <span>Cuối Cùng Thì</span>
                <span>Jack - J97</span>
              </div>
            </div>
            <div className={cx('zingchart-item')}>
              <div className={cx('zingchart-rank')}>
                <span>4</span>
              </div>
              <div className={cx('list-zingchart-img')}>
                <img src="/imgzingchart/4.jpg" alt="1" />
              </div>
              <div className={cx('list-zingchart-title')}>
                <span>Đừng Lo Nhé! Có Anh Đây</span>
                <span>Thiên Tú</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zingchart;
