import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const cx = className.bind(styles);

function Mv_Event() {
  const [changeHoverShow, setChangeHoverShow] = useState(false);

  const handlOnMouse = () => {
    setChangeHoverShow(true);
  };
  const handlOutMouse = () => {
    setChangeHoverShow(false);
  };

  return (
    <div className={cx('mv-event')}>
      <div className={cx('list-top')}>
        <div className={cx('list-items')}>
          <div className={cx('list-item')}>
            <div className={cx('item-img')} onMouseOver={handlOnMouse} onMouseOut={handlOutMouse}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgnewmusic/MV1.jpg" alt="newmusic" />
              </div>
              <div
                className={cx('item-icon')}
                style={{
                  display: changeHoverShow ? 'flex' : 'none',
                }}
              >
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
            <div className={cx('item-img')} onMouseOver={handlOnMouse} onMouseOut={handlOutMouse}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgnewmusic/MV2.jpg" alt="newmusic" />
              </div>
              <div
                className={cx('item-icon')}
                style={{
                  display: changeHoverShow ? 'flex' : 'none',
                }}
              >
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>US-UK Tháng 2/2023</span>
              <span className={cx('information-title')}>
                <p>Miley Cyrus, </p>
                <p>Sam SmitSmith</p>
              </span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')} onMouseOver={handlOnMouse} onMouseOut={handlOutMouse}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgnewmusic/MV3.jpg" alt="newmusic" />
              </div>
              <div
                className={cx('item-icon')}
                style={{
                  display: changeHoverShow ? 'flex' : 'none',
                }}
              >
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>K-Pop Tháng 2/2023</span>
              <span className={cx('information-title')}>
                <p>NCT 127, </p>
                <p>TAEYANG</p>
              </span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')} onMouseOver={handlOnMouse} onMouseOut={handlOutMouse}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgnewmusic/MV4.jpg" alt="newmusic" />
              </div>
              <div
                className={cx('item-icon')}
                style={{
                  display: changeHoverShow ? 'flex' : 'none',
                }}
              >
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>C-Pop Tháng 2/2023</span>
              <span className={cx('information-title')}>
                <p>Yihuik, </p>
                <p>Yisa Yu</p>
              </span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')} onMouseOver={handlOnMouse} onMouseOut={handlOutMouse}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgnewmusic/MV5.jpg" alt="newmusic" />
              </div>
              <div
                className={cx('item-icon')}
                style={{
                  display: changeHoverShow ? 'flex' : 'none',
                }}
              >
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Indie Việt Tháng 2/2023</span>
              <span className={cx('information-title')}>
                <p>Thái Đinh, </p>
                <p>NamKun</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mv_Event;
