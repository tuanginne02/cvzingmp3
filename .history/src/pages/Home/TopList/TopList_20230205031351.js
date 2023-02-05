import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const cx = className.bind(styles);

function TopList() {
  const [changeHoverShow, setChangeHoverShow] = useState(false);

  const handlOnMouse = () => {
    setChangeHoverShow(true);
  };
  const handlOutMouse = () => {
    setChangeHoverShow(false);
  };

  return (
    <div className={cx('topList')}>
      <div className={cx('list-top')}>
        <h2>Thư Thả Cuối Tuần</h2>
        <div className={cx('list-items')}>
          <div className={cx('list-item')}>
            <div className={cx('item-img')} onMouseOver={handlOnMouse} onMouseOut={handlOutMouse}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgtop/1.jpg" alt="topWeek"  />
              </div>
              <div
                className={cx('item-icon')}
                style={{
                  display: changeHoverShow ? 'flex' : 'none',
                  transform: changeHoverShow ? ' scale(1.1)' : '',
                }}
              >
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Nhạc Cho Chủ Nhật</span>
              <span className={cx('information-title')}>Thư thả ngày Chủ Nhật bên những giai điệu Acoustic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopList;
