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
                <img src="//1.webp" alt="1" />
                <FontAwesomeIcon className={cx('icon-list-zingchart')} icon={faPlay} />
              </div>
              <div className={cx('list-zingchart-title')}>
                <span className={cx('name-singer')}>Lặng Im</span>
                <span className={cx('name-song')}>Hakoota Dũng Hà</span>
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
                <img src="//2.webp" alt="1" />
              </div>
              <div className={cx('list-zingchart-title')}>
                <span>Có Một Ngày Trời Không Nắng</span>
                <span>Thái Đinh</span>
              </div>
            </div>
            <div className={cx('zingchart-item')}>
            <div className={cx('zingchart-rank')}>
                    <span>3</span>
                </div>
              <div className={cx('list-zingchart-img')}>
                <img src="//3.webp" alt="1" />
              </div>
              <div className={cx('list-zingchart-title')}>
                <span>Kỷ Niệm Giam Cầm Chúng Ta</span>
                <span>Thanh Hưng</span>
              </div>
            </div>
            <div className={cx('zingchart-item')}>
            <div className={cx('zingchart-rank')}>
                    <span>4</span>
                </div>
              <div className={cx('list-zingchart-img')}>
                <img src="//4.webp" alt="1" />
              </div>
              <div className={cx('list-zingchart-title')}>
                <span>Xin Lỗi Em Không Ổn</span>
                <span>Hương Giang</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zingchart;
