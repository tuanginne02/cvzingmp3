import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const cx = className.bind(styles);

function Top100() {
  const [changeHoverShow, setChangeHoverShow] = useState(false);

  const handlOnMouse = () => {
    setChangeHoverShow(true);
  };
  const handlOutMouse = () => {
    setChangeHoverShow(false);
  };
  return (
    <div className={cx('top100')}>
      <div className={cx('top100-container')}>
        <div className={cx('conatainer-top')}>
          <div className={cx('top-title')}>
            <h2>Top 100</h2>
            <div className={cx('top-all')}>
              <span>TẤT CẢ</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className={cx('list-items')}>
            <div className={cx('list-item')}>
              <div className={cx('item-img')} onMouseOver={handlOnMouse} onMouseOut={handlOutMouse}>
                <div className={cx('img-topweek')}>
                  <img className={cx('img-1')} src="/imgtop/T1.jpg" alt="top100" />
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
                <span className={cx('name-title')}>V-Pop Tháng 2/2023</span>
                <span className={cx('information-title')}>
                  <p>Hoàng Thùy Linh, </p>
                  <p>Vũ Cát Tường</p>
                </span>
              </div>
            </div>
            <div className={cx('list-item')}>
              <div className={cx('item-img')} onMouseOver={handlOnMouse} onMouseOut={handlOutMouse}>
                <div className={cx('img-topweek')}>
                  <img className={cx('img-1')} src="/imgtop/T2.jpg" alt="top100" />
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
                  <img className={cx('img-1')} src="/imgtop/T3.jpg" alt="top100" />
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
                  <img className={cx('img-1')} src="/imgtop/T4.jpg" alt="top100" />
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
                <span className={cx('name-title')}>Top 100 Bài Hát Nhạc Trẻ Hay Nhất</span>
                <span className={cx('information-title')}>
                  <p>Mon, </p>
                  <p>Yisa Yu</p>
                </span>
              </div>
            </div>
            <div className={cx('list-item')}>
              <div className={cx('item-img')} onMouseOver={handlOnMouse} onMouseOut={handlOutMouse}>
                <div className={cx('img-topweek')}>
                  <img className={cx('img-1')} src="/imgtop/T5.jpg" alt="top100" />
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
    </div>
  );
}

export default Top100;
