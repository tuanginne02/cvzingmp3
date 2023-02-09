import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function TopSinger() {
  const [changeClickColorNext, setChangeClickColorNext] = useState(true);

  const handlOnClickP = () => {
    setChangeClickColorNext((current) => !current);
  };
  const handlOnClickNext = () => {
    setChangeClickColorNext((current) => !current);
  };

  return (
    <div className={cx('topsinger')}>
      <div className={cx('topsinger-container')}>
        <div className={cx('topsinger-top')}>
          <div className={cx('top-items')}>
            <div className={cx('top-item')}>
              <div className={cx('img-item')}>
                <img src="/imgzingchart/T1.jpg" alt="" />
              </div>
            </div>
            <div className={cx('top-item')}>
              <div className={cx('img-item')}>
                <img src="/imgzingchart/T2.jpg" alt="" />
              </div>
            </div>{' '}
            <div className={cx('top-item')}>
              <div className={cx('img-item')}>
                <img src="/imgzingchart/T3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('topsinger-bottom')}>
          <div className={cx('prev-next')} onClick={handlOnClickNext}>
            <span
              className={cx('prev')}
              style={{
                color: changeClickColorNext ? '#fff' : 'rgba(89, 84, 96, 0.1)',
              }}
            >
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </span>
            <span className={cx('next')}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                style={{
                  color: changeClickColorNext ? 'rgba(89, 84, 96, 0.5)' : '#fff',
                }}
              />
            </span>
          </div>
          <div className={cx('topsinger-items')}>
            <div className={cx('topsinger-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/1.png" alt="radio" />
              </div>
            </div>
            <div className={cx('topsinger-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/2.png" alt="radio" />
              </div>
            </div>
            <div className={cx('topsinger-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/3.png" alt="radio" />
              </div>
            </div>
            <div className={cx('topsinger-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/4.png" alt="radio" />
              </div>
            </div>
            <div className={cx('topsinger-item')}>
                <div className={cx('item-img')}>
                    <img className={cx('img-radio')} src="/imgsinger/5.png" alt="radio" />                
                </div>   
            </div>
            <div className={cx('topsinger-item')}>
                <div className={cx('item-img')}>
                    <img className={cx('img-radio')} src="/imgsinger/6.png" alt="radio" />               
                </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSinger;
