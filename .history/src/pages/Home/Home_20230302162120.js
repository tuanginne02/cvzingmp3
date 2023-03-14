import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import ListMusic from './ListMusic';
import TopList from './TopList';
import Radio from './Radio';
import NewMusic from './NewMusic';
// import Zingchart from './zingchart';
import TopSinger from './TopSinger';
import Top100 from './Top100';
import MvEvent from './MvEvent';
import PartnerMusic from './PartnerMusic';

const cx = classNames.bind(styles);

function Home() {

  const [changeSlider1, setChangeSlider1] = useState(true);
  const [changeSlider2, setChangeSlider2] = useState(true);
  const [changeSlider3, setChangeSlider3] = useState(true);
  const [changeSlider4, setChangeSlider4] = useState(true);
  const [changeSlider5, setChangeSlider5] = useState(true);
  const [changeSlider6, setChangeSlider6] = useState(true);

  const handlClickPrev1 = () => {
    setChangeSlider1((current) => !current);
  };
  const handlClickPrev2 = () => {
    setChangeSlider1((current) => !current);
   
  };  const handlClickPrev = () => {
    setChangeSlider1((current) => !current)
  };  const handlClickPrev = () => {
    setChangeSlider1((current) => !current);

    setChangeSlider6((current) => !current);
  };  const handlClickPrev = () => {
    setChangeSlider1((current) => !current);
    setChangeSlider2((current) => !current);
    setChangeSlider3((current) => !current);
    setChangeSlider4((current) => !current);
    setChangeSlider5((current) => !current);
    setChangeSlider6((current) => !current);
  };  const handlClickPrev = () => {
    setChangeSlider1((current) => !current);
    setChangeSlider2((current) => !current);
    setChangeSlider3((current) => !current);
    setChangeSlider4((current) => !current);
    setChangeSlider5((current) => !current);
    setChangeSlider6((current) => !current);
  };

  const [changeClickPlay, setChangeClickPlay] = useState(false);

  const handleClickPlay = () => {
    setChangeClickPlay(true);
  };
  const handleClickPause = () => {
    setChangeClickPlay(false);
  };



  return (
    <div className={cx('home')}>
      <div className={cx('header-home')}>
        <div className={cx('header-slider')}>
         
            <div className={cx('slide-prev')} onClick={handlClickPrev}>
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </div>
           
          <div className={cx('img-slider-items')}>
            <div
              className={cx('slider__img')}
              style={{
                left: changeSlider1 ? '0%' : '175%',
              }}
            >
              <img className={cx('img-sl')} src="/banner-slider/sl1.jpg" alt="" />
            </div>
            <div
              className={cx('slider__img')}
              style={{
                left: changeSlider2 ? '35%' : '140%',
              }}
            >
              <img className={cx('img-sl')} src="/banner-slider/sl2.jpg" alt="" />
            </div>
            <div
              className={cx('slider__img')}
              style={{
                left: changeSlider3 ? '70%' : '105%',
              }}
            >
              <img className={cx('img-sl')} src="/banner-slider/sl3.jpg" alt="" />
            </div>
            <div
              className={cx('slider__img')}
              style={{
                left: changeSlider4 ? '105%' : '70%',
              }}
            >
              <img className={cx('img-sl')} src="/banner-slider/sl4.jpg" alt="" />
            </div>
            <div
              className={cx('slider__img')}
              style={{
                left: changeSlider5 ? '140%' : '35%',
              }}
            >
              <img className={cx('img-sl')} src="/banner-slider/sl5.jpg" alt="" />
            </div>
            <div
              className={cx('slider__img')}
              style={{
                left: changeSlider6 ? '175%' : '0%',
              }}
            >
              <img className={cx('img-sl')} src="/banner-slider/sl6.jpg" alt="" />
            </div>
          </div>
          <div className={cx('nav_auto')}>
            <div className={cx('auto-btn1')}></div>
            <div className={cx('auto-btn2')}></div>
            <div className={cx('auto-btn3')}></div>
            <div className={cx('auto-btn4')}></div>
            <div className={cx('auto-btn5')}></div>
          </div>
          <div className={cx('slide-next')} onClick={handlClickPrev}>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
        </div>
        <div className={cx('zing-chart')}>
          <h2>Gần Đây</h2>
          <div className={cx('zingchar-playlist')}>
            <div className={cx('zing-chart-img')}>
              <img src="/img/homeZingchart.jpg" alt="zingchart" 
              //  style={{
              //   opacity: changeClickPlay ? '0.5' : '0.5',
              //  }}
              />
            </div>
            <div
              className={cx('zing-chart-icon')}
              // style={{
              //   display: changeClickPlay ? 'none' : 'none',
              // }}
            >
              <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
              <div className={cx('img-center')} onClick={handleClickPlay}>
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
              </div>
              <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
            </div>
            <div
              className={cx('run-play')}
              style={{
                display: changeClickPlay ? 'flex' : 'none',
               
              }}
            >
              <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
              <div className={cx('img-center')} onClick={handleClickPause}>
                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
              </div>

              <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
            </div>
          </div>
          <p>#zingchart</p>
        </div>
      </div>
      <div className={cx('content-home')}>
        
        <ListMusic />
        <TopList />
        <Radio />
        <NewMusic />
        {/* <Zingchart /> */}
        <TopSinger />
        <Top100 />
        <MvEvent />
        <PartnerMusic />
      </div>
    </div>
  );
}

export default Home;
