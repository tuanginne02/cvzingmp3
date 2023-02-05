import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Home() {
  const [changeHoverPrevNext, setChangeHoverPrevNext] = useState(true);

  const handlOnMouse = () => {
    setChangeHoverPrevNext(false);
  };
  const handlOutMouse = () => {
    setChangeHoverPrevNext(false);
  };

  return (
    <div className={cx('home')}>
      <div className={cx('header-home')}>
        <div className={cx('header-slider')}>
          <div
            className={cx('prev-next')}
            onMouseOver={handlOnMouse}
            onMouseOut={handlOutMouse}
            style={{
              display: changeHoverPrevNext ? 'flex' : 'none',
            }}
          >
            <span className={cx('prev')}>
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </span>
            <span className={cx('next')}>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </span>
          </div>
          <div className={cx('img-slider-items')}>
            <div className={cx('slider__img')}>
              <img className={cx('img-sl')} src="/banner-slider/sl1.jpg" alt="" />
            </div>
            <div className={cx('slider__img')}>
              <img className={cx('img-sl')} src="/banner-slider/silder2.jpg" alt="" />
            </div>
            <div className={cx('slider__img')}>
              <img className={cx('img-sl')} src="/banner-slider/sl3.jpg" alt="" />
            </div>
            <div className={cx('slider__img')}>
              <img className={cx('img-sl')} src="/banner-slider/sl4.jpg" alt="" />
            </div>
            <div className={cx('slider__img')}>
              <img className={cx('img-sl')} src="/banner-slider/sl4.jpg" alt="" />
            </div>
          </div>
          <div className={cx('nav_auto')}>
            <div className={cx('auto-btn1')}></div>
            <div className={cx('auto-btn2')}></div>
            <div className={cx('auto-btn3')}></div>
            <div className={cx('auto-btn4')}></div>
            <div className={cx('auto-btn5')}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
