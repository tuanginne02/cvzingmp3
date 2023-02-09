import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from './Following.module.scss';

const cx = className.bind(styles);

function Following() {
  const [changeClickColorNext, setChangeClickColorNext] = useState(true);

  const handlOnClickPrev = () => {
    setChangeClickColorNext(false);
  };
  const handlOnClickNext = () => {
    setChangeClickColorNext(true);
  };

  return (
    <div className={cx('following')}>
      <div className={cx('following-container')}>
        <div className={cx('nation-top')}>
          <div className={cx('nation-top-items')}>
            <NavLink className={cx('nation-top-item')} to="/">
              <span>Việt Nam</span>
            </NavLink>
            <NavLink className={cx('nation-top-item')} to="/">
              <span>K-POP</span>
            </NavLink>
            <NavLink className={cx('nation-top-item')} to="/">
              <span>US-UK</span>
            </NavLink>
            <NavLink className={cx('nation-top-item')} to="/">
              <span>Hoa Ngữ</span>
            </NavLink>
            <NavLink className={cx('nation-top-item')} to="/">
              <span>Nổi Bật</span>
            </NavLink>
          </div>
        </div>
        <div className={cx('singer-bottom')}>
          <div className={cx('prev-next')}>
            <span className={cx('prev')} onClick={handlOnClickPrev}>
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                style={{
                  color: changeClickColorNext ? '#fff' : 'rgba(89, 84, 96, 0.1)',
                }}
              />
            </span>
            <span className={cx('next')} onClick={handlOnClickNext}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                style={{
                  color: changeClickColorNext ? 'rgba(89, 84, 96, 0.5)' : '#fff',
                }}
              />
            </span>
          </div>
          <div className={cx('singer-items')}>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/1.png" alt="radio" />
              </div>
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/2.png" alt="radio" />
              </div>
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/3.png" alt="radio" />
              </div>
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/4.png" alt="radio" />
              </div>
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/5.png" alt="radio" />
              </div>
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/6.png" alt="radio" />
              </div>
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/7.png" alt="radio" />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('fl-news')}>
          <div className={cx('fl-news-items')}>
            <div className={cx('news-item')}>
              <div className={cx('news-item-top')}>
                <div className={cx('item-top-img')}>
                  <img className={cx('img-user')} src="/imgfollowing/SThach.jpg" alt="user" />
                </div>
                <div className={cx('item-top-name')}>
                  <span>S.T Sơn Thạch 
                    <p>&sdot;</p>
                  </span>
                  <p>16 tháng 11 lúc 14:14</p>
                </div>
                <div className={cx('item-top-sub')}>
                  
                  <span>Quan Tâm</span>
                </div>
              </div>
              <div className={cx('news-item-center')}></div>
              <div className={cx('news-item-bottom')}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Following;
