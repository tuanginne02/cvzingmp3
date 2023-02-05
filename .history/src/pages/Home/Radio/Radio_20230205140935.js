import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function Radio() {
//   const [changeClickColorPrev, setChangeClickColorPrev] = useState(false);
  const [changeClickColorNext, setChangeClickColorNext] = useState(true);

//   const handlOnClickPrev = () => {
//     setChangeClickColorPrev(true);
//   };
  const handlOnClickNext = () => {
    setChangeClickColorNext(false);
  };

  return (
    <div className={cx('radio')}>
      <div className={cx('radio-container')}>
        <h2>Raio Nổi Bật</h2>
        <div className={cx('prev-next')}>
          <span
            className={cx('prev')}
            style={{
              backgroundColor: changeClickColorNext ? '' : 'rgba(89, 84, 96, 0.1)',
            }}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </span>
          <span className={cx('next')} onClick={handlOnClickNext}>
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              style={{
                color: changeClickColorNext ? 'rgba(89, 84, 96, 0.5)' : '',
              }}
            />
          </span>
        </div>
        <div className={cx('radio-items')}>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/1.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s1.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>Bolero</span>
              <span className={cx('radio-listen')}>356 đang nghe</span>
            </div>
          </div>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/2.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s2.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>V-POP</span>
              <span className={cx('radio-listen')}>1K đang nghe</span>
            </div>
          </div>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/3.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s3.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>Chạm</span>
              <span className={cx('radio-listen')}>254 đang nghe</span>
            </div>
          </div>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/4.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s4.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>US-UK</span>
              <span className={cx('radio-listen')}>104 đang nghe</span>
            </div>
          </div>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/5.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s5.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>K-POP</span>
              <span className={cx('radio-listen')}>38 đang nghe</span>
            </div>
          </div>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/6.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s6.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
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
  );
}

export default Radio;
