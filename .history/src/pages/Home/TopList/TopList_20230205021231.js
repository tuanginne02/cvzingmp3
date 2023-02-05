import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart,fa } from '@fortawesome/free-regular-svg-icons';

const cx = className.bind(styles);

function TopList() {
  return (
    <div className={cx('topList')}>
      <div className={cx('list-top')}>
        <h2>Thư Thả Cuối Tuần</h2>
        <div className={cx('list-items')}>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <img src="" alt="topWeek" />
              <div className={cx('item-icon')}>
                <FontAwesomeIcon icon={faHeart}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopList;
