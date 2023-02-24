import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './LoadMusic.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faHeart,
  faEllipsis,
  faShuffle,
  faForwardStep,
  faBackwardStep,
  faRepeat,
  faPlay,
  faMicrophone,
  faWindowRestore,
  faVolumeHigh,
  faVolumeXmark,
  faPause,
  faSpinner,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { MV } from '~/assets/Icon/Icon';

const cx = classNames.bind(styles);

function LoadMusic() {
  // const [changeLoadVl, setChangeLoadVl] = useState(0);

  // function ChangeLoadVl() {
  //   setChangeLoadVl(50);
  // }

  const [playListMusic, setPlayListMusic] = useState(true);
  const playMusic = () => setPlayListMusic(false);
  const stopMusic = () => setPlayListMusic(true);
  // const togglePlayMusic = () => setPlayListMusic((current)=>(!current));


  // let audio = new Audio('/music/ChungTaKhongThuocVeNhau.mp3');
  const [audioStatus, changeAudioStatus] = useState(true);
  const myRef = useRef();

  const startAudio = () => {
    console.log('play');
    myRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    console.log('pause');
    myRef.current.pause();
    changeAudioStatus(false);
  };

  return (
    <div className={cx('loadMusic')}>
      <div className={cx('loadMusic-content')}>
        <div className={cx('content-left')}>
          <div className={cx('left-img')}>
            <img className={cx('img-mus')} src="/imgmusic/ctcht.jpg" alt="Chúng Ta Của Hiện Tại" />
          </div>
          <div className={cx('left-name-music')}>
            <span>Chúng Ta Của Hiện Tại</span>
            <span className={cx('name-singer')}>Sơn Tùng M-TP</span>
          </div>
          <div className={cx('left-icon')}>
            <span className={cx('left-icon-heart')}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span className={cx('left-icon-ellipsis')}>
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </div>
        </div>
        <div className={cx('content-center')}>
          <div className={cx('center-top')}>
            <span className={cx('top-icon', 'shuffle')}>
              <span className={cx('top-icon-shuffle')}>
                <FontAwesomeIcon icon={faShuffle} />
              </span>
            </span>
            <span className={cx('top-icon')}>
              <span className={cx('top-icon-backward')}>
                <FontAwesomeIcon icon={faBackwardStep} />
              </span>
            </span>
            <audio id="myAudio">
              <source src="horse.ogg" type="audio/ogg" />
              <source src="horse.mp3" type="audio/mpeg" />
            </audio>
            <span className={cx('top-icon', 'play')}  >
              <audio ref={myRef} src="/music/ChungTaKhongThuocVeNhau.mp3" />
              {audioStatus ? (
                <FontAwesomeIcon
                  className={cx('play-icon-play')}
                  icon={faPlay}
                  onClick={() => {
                    startAudio();
                    playMusic();
                    // toggleMusic();
                  }}
                  style={{ display: playListMusic ? 'block' : 'none' }}
                />
              ) : (
           <span>
                  <FontAwesomeIcon
                    className={cx('play-icon-pause')}
                    icon={faPause}
                    onClick={() => {
                      pauseAudio();
                      stopMusic();
                      // toggleMusic();
                    }}
                    // style={{ display: playListMusic ? 'none' : 'block' }}
                  />
           </span>
              )}
              {/* <FontAwesomeIcon className={cx('play-icon-load')} icon={faSpinner} /> */}
            </span>
            <span className={cx('top-icon')}>
              <span className={cx('top-icon-forward')}>
                <FontAwesomeIcon icon={faForwardStep} />
              </span>
            </span>
            <span className={cx('top-icon')}>
              <span className={cx('top-icon-repeat')}>
                <FontAwesomeIcon icon={faRepeat} />
              </span>
            </span>
          </div>
          <div className={cx('center-bottom')}>
            <p>
              <span id="minute"></span>
              <span>:</span>
              <span id="second"></span>
            </p>
            <div className={cx('center-bottom-line')}>
              <div className={cx('line-run')} 
              // style={{ animation: playListMusic ? 'none' : '' }}
              >
                <input type="range" min="0" max="50" className={cx('run-mouse')} />
              </div>
            </div>
            <span>05:02</span>
          </div>
        </div>
        <div className={cx('content-right')}>
          <span className={cx('right-icon')}>
            <MV />
          </span>
          <span className={cx('right-icon')}>
            <FontAwesomeIcon icon={faMicrophone} />
          </span>
          <span className={cx('right-icon')}>
            <FontAwesomeIcon icon={faWindowRestore} />
          </span>
          <span className={cx('right-icon')}>
            <FontAwesomeIcon className={cx('right-vl')} icon={faVolumeHigh} />
            <FontAwesomeIcon className={cx('right-vl')} icon={faVolumeXmark} />
          </span>
          <div className={cx('icon-line-vl')}>
            <div className={cx('line-volum')}>
              <input type="range" min="0" max="50" className={cx('run-volum')} />
            </div>
          </div>
          <span className={cx('icon-line')}></span>
          <span className={cx('right-icon')}>
            <FontAwesomeIcon icon={faHeadset} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoadMusic;
