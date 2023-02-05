import React, {useState} from 'react';
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
            <div className={cx('item-img')}>
              <div className={cx('img-tơp')}><img src="/imgtop/1.jpg" alt="topWeek" /></div className>
              <div className={cx('item-icon')}>
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
