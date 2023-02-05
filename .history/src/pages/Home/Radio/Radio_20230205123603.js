import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function Radio() {
  return (
    <div className={cx('radio')}>
      <div className={cx('radio-container')}>
        <h2>Raio Nổi Bậc</h2>
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
            <div className={cx('item-img')}>
              <img className={cx('img-radio')} src="/public/imgradio/1.webp" alt="radio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radio;
