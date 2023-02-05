import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function Radio() {
  return (
    <div className={cx('radio')}>
      <div className={cx('radio-container')}>
        <h2>Raio Nổi Bật</h2>
        <div className={cx('prev-next')}>
          <span className={cx('prev')}>
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </span>
          <span className={cx('next')}>
            <FontAwesomeIcon icon={faChevronCircleRight} />
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
              <FontAwesomeIcon className= {cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx()}>LIVE</span>
            </div>
            <span className={cx('radio-name')}>Bolero</span>
            <span className={cx('radio-listen')}>356 đang nghe</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radio;
