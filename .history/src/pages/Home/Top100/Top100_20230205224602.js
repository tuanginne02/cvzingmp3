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
                <span className={cx('name-title')}>Top 100 Bài Hát Nhạc Trẻ Hay Nhất</span>
                <span className={cx('information-title')}>
                  <p>MONO, </p>
                  <p>Jack - J97</p>
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
                <span className={cx('name-title')}>Top 100 Pop Âu Mỹ Hay Nhất</span>
                <span className={cx('information-title')}>
                  <p>Adele, </p>
                  <p>Justin Bieber</p>
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
                <span className={cx('name-title')}>Top 100 Electronic/ Dance Âu Mỹ Hay Nhất</span>
                <span className={cx('information-title')}>
                  <p>Alan Walker, </p>
                  <p>K-391</p>
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
                <span className={cx('name-title')}>Top 100 Bài Hát Hoa Ngữ Hay Nhất</span>
                <span className={cx('information-title')}>
                  <p>Mộng Nhiên, </p>
                  <p>Trương Tiểu Ni</p>
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
                <span className={cx('name-title')}>Top 100 Bản Rap Hay Nhất</span>
                <span className={cx('information-title')}>
                  <p>Zombie, </p>
                  <p>Đen</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('container-bottom')}>
          <div className={cx('bottom-title')}>
            <h2>Nhạc Mới</h2>
            <div className={cx('bottom-all')}>
              <span>TẤT CẢ</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className={cx('bottom-items')}>
            <div className={cx('bottom-item')}>
              <div className={cx('item-left')}>
                <div className={cx('bottom-img')}>
                  <img src="/imgnewmusic/R1.jpg" alt="" />
                  <div className={cx('img-icon')}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </div>
                </div>
              </div>
              <div className={cx('item-right')}>
                <div className={cx('right-name')}>
                  <h1>Một Ngày Nhớ Đến Em</h1>
                  <span>Huỳnh James </span>
                  <span>Pjnboys </span>
                </div>
                <div className={cx('rank-newmusic')}>
                  <h1>#1</h1>
                  <p>02.02.2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top100;
