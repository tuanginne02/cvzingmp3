import React, { useState } from 'react';
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
        <div className={cx('nation')}
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
      </div>
    </div>
  );
}

export default Following;
