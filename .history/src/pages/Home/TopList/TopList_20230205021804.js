import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const cx = className.bind(styles);

function TopList() {
  return (
    <div className={cx('topList')}>
      <div className={cx('list-top')}>
        <h2>Thư Thả Cuối Tuần</h2>
        <div className={cx('list-items')}>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <img src="/imgtop/1.jpg" alt="topWeek" />
              <div className={cx('item-icon')}>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faCirclePlay} />
                <FontAwesomeIcon icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopList;
