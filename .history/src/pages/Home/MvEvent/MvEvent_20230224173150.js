import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const cx = className.bind(styles);

function Mv_Event() {


  return (
    <div className={cx('mv-event')}>
      <div className={cx('list-top')}>
        <div className={cx('list-items')}>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgnewmusic/MV1.jpg" alt="newmusic" />
              </div>
              <div className={cx('item-icon')} >
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Tâm Tìn Người Lính (Single)</span>
              <span className={cx('information-title')}>
                <p>Thái Học </p>
                {/* <p>Vũ Cát Tường</p> */}
              </span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgnewmusic/MV2.jpg" alt="newmusic" />
              </div>
              <div className={cx('item-icon')} >
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Em Một Không Haizzz (Single)</span>
              <span className={cx('information-title')}>
                <p>T-Tuner, </p>
                <p>C.U.A</p>
              </span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgnewmusic/MV3.jpg" alt="newmusic" />
              </div>
              <div className={cx('item-icon')} >
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Em Người Từng Yêu (Single)</span>
              <span className={cx('information-title')}>
                <p>Ngân Ngân </p>
                {/* <p>TAEYANG</p> */}
              </span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgnewmusic/MV4.jpg" alt="newmusic" />
              </div>
              <div className={cx('item-icon')} >
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Phi Vụ Rước Dâu (Single) </span>
              <span className={cx('information-title')}>
                <p>NB3 Hoài Bảo </p>
                {/* <p>Yisa Yu</p> */}
              </span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgnewmusic/MV5.jpg" alt="newmusic" />
              </div>
              <div className={cx('item-icon')} >
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Hình Nhân Cỏ </span>
              <span className={cx('information-title')}>
                <p>Nam Em, </p>
                <p>Hamlet Trương</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('list-bottom')}>
        <h1>Sự Kiện</h1>
        <div className={cx('bottom-content')}>
          <div className={cx('content-img')}>
            <img className={cx('img-ev')} src="/imgevent/EvCara.jfif" alt="eventImg" />
          </div>
          <div className={cx('content-title')}>
            <div className={cx('title-top')}>
              <span>SINH NHẬT SAO</span>
            </div>
            <div className={cx('title-bottom')}>
              <h2> Sinh Nhật Sao X CARA</h2>
              <p> 00:00 Thứ Ba, 07 tháng 2</p>
            </div>
          </div>
        </div>
        <div className={cx('bottom-happy')}>
          <div className={cx('happy-people')}>
            <span>Lượt chúc mừng</span>
            <div className={cx('people-sub')}>
              <img className={cx('img-people')} src="/img/user.png" alt="" />
              <img className={cx('img-people')} src="/img/user.png" alt="" />
              <img className={cx('img-people')} src="/img/user.png" alt="" />
              <img className={cx('img-people')} src="/img/user.png" alt="" />
              <img className={cx('img-people')} src="/img/user.png" alt="" />
              <img className={cx('img-people')} src="/img/user.png" alt="" />
              <p> +2K</p>
            </div>
          </div>
          <div className={cx('btn-happy')}>
            <button> CHÚC MỪNG </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mv_Event;
