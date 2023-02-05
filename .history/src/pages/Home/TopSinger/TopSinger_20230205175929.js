import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function TopSinger() {
  const [changeClickColorNext, setChangeClickColorNext] = useState(true);

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
                    <img className={cx('img-radio')} src="/imgradio/1.webp" alt="radio" />
                </div>
            </div>
            <div className={cx('topsinger-item')}>
                   <p> <img className={cx('img-radio')} src="/imgradio/2.webp" alt="radio" /></p>
                </div>
              </div>
            </div>
            <div className={cx('topsinger-item')}>
                <div className={cx('item-img')}>
                    <img className={cx('img-radio')} src="/imgradio/3.webp" alt="radio" />            
                </div>
            </div>
            <div className={cx('topsinger-item')}>
              <div className={cx('item-content')}>
                <div className={cx('item-img')}>
                  <div className={cx('img-lare')}>
                    <img className={cx('img-radio')} src="/imgradio/4.webp" alt="radio" />
                  </div>
                  <div className={cx('img-small')}>
                    <img className={cx('img-radio-sm')} src="/imgradio/s4.webp" alt="radio-s" />
                  </div>
                </div>

                <span className={cx('live-radio')}>LIVE</span>
              </div>
              <div className={cx('radio-title')}>
                <span className={cx('radio-name')}>US-UK</span>
                <span className={cx('radio-listen')}>104 đang nghe</span>
              </div>
            </div>
            <div className={cx('topsinger-item')}>
              <div className={cx('item-content')}>
                <div className={cx('item-img')}>
                  <div className={cx('img-lare')}>
                    <img className={cx('img-radio')} src="/imgradio/5.webp" alt="radio" />
                  </div>
                  <div className={cx('img-small')}>
                    <img className={cx('img-radio-sm')} src="/imgradio/s5.webp" alt="radio-s" />
                  </div>
                </div>

                <span className={cx('live-radio')}>LIVE</span>
              </div>
              <div className={cx('radio-title')}>
                <span className={cx('radio-name')}>K-POP</span>
                <span className={cx('radio-listen')}>38 đang nghe</span>
              </div>
            </div>
            <div className={cx('topsinger-item')}>
              <div className={cx('item-content')}>
                <div className={cx('item-img')}>
                  <div className={cx('img-lare')}>
                    <img className={cx('img-radio')} src="/imgradio/6.webp" alt="radio" />
                  </div>
                  <div className={cx('img-small')}>
                    <img className={cx('img-radio-sm')} src="/imgradio/s6.webp" alt="radio-s" />
                  </div>
                </div>

                <span className={cx('live-radio')}>LIVE</span>
              </div>
              <div className={cx('radio-title')}>
                <span className={cx('radio-name')}>Acoustic</span>
                <span className={cx('radio-listen')}>68 đang nghe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSinger;
