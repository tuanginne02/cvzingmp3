import React, { useState } from 'react';
import {NavLink} from 'react-router-dom' ;
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ListMusic from './ListMusic';
import TopList from './TopList'
import Radio from './Radio'
import NewMusic from './NewMusic'
import Zingchart from './zingchart';
import TopSinger from './TopSinger'
import Top100 from './Top100'
import MvEvent from './MvEvent';
import PartnerMusic from './PartnerMusic';

const cx = classNames.bind(styles);

function Home() {
  const [changeHoverPrevNext, setChangeHoverPrevNext] = useState(false);

  const handlOnMouse = () => {
    setChangeHoverPrevNext(true);
  };
  const handlOutMouse = () => {
    setChangeHoverPrevNext(false);
  };

  return (
    <div className={cx('home')}>
      <div className={cx('header-home')}>
        <div className={cx('header-slider')} onMouseOver={handlOnMouse} onMouseOut={handlOutMouse}>
          <div
            className={cx('prev-next')}
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
        <div className={cx('zing-chart')}>
          <h2>G???n ????y</h2>
          <div className={cx('zing-chart-img')}>
            <img src="/img/homeZingchart.jpg" alt="zingchart" />
        
          </div>
          <p>#zingchart</p>
        </div>
      </div>
      <div className={cx('content-home')}>
        <div className={cx('content-header')}>
          <h2>M???i Ph??t H??nh</h2>
          <div className={cx('header-filler')} l>
            <div className={cx('header-filler-left')}>
              <button className={cx('btn-filler', 'actve-filler-color')}>T???T C???</button>
              <button className={cx('btn-filler')}>VI???T NAM</button>
              <button className={cx('btn-filler')}>QU???C T???</button>
            </div>
            <div className={cx('header-filler-right')}>
              <div className={cx('all-filler')}>T???T C???</div>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
        <ListMusic />
        <TopList />
        <Radio />
        <NewMusic />
        <Zingchart />
        <TopSinger />
        <Top100 />
        < MvEvent />
        <PartnerMusic />
      </div>
    </div>
  );
}

export default Home;
