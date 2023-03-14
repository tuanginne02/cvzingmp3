import React, { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';
import classNames from 'classnames/bind';
import styles from '../LoadMusic.module.scss';
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
  faUpRightAndDownLeftFromboars,
  faChevronDown,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { MV } from '~/assets/Icon/Icon';
import music from '~/assets/Music/ChungTaKhongThuocVeNhau.mp3';

const cx = classNames.bind(styles);

function LoadMusicBoard() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState({
      min: '',
      sec: '',
    });
    const [currTime, setCurrTime] = useState({
      min: '',
      sec: '',
    });
  
    const [seconds, setSeconds] = useState();
  
    const [play, { pause, duration, sound }] = useSound(music);
  
    useEffect(() => {
      if (duration) {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        setTime({
          min: min,
          sec: secRemain,
        });
      }
    }, [isPlaying]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (sound) {
          setSeconds(sound.seek([]));
          const min = Math.floor(sound.seek([]) / 60);
          const sec = Math.floor(sound.seek([]) % 60);
          setCurrTime({
            min,
            sec,
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [sound]);
  
    const playingButton = () => {
      if (isPlaying) {
        pause();
        setIsPlaying(false);
      } else {
        play();
        setIsPlaying(true);
      }
    };
  return (
    <div classNam={cx('load-boars')}>
      <div classNam={cx('load-boars-conatiner')}>
      <div className={cx('content-boars')}>
          
          <div className={cx('boars-')}>
            <div className={cx('time')}>
              <p>
                {currTime.min}:{currTime.sec}
              </p>
            </div>
            {/* <div className={cx('boars-bottom-line')}> */}
            {/* <div className={cx('line-run')}> */}
            <input
              type="range"
              min="0"
              max={duration / 1000}
              default="0"
              value={seconds}
              className={cx('run-mouse')}
              onChange={(e) => {
                sound.seek([e.target.value]);
              }}
            />
            {/* </div> */}
            {/* </div> */}
            <div className={cx('times')}>
              <p>
                {time.min}:{time.sec}
              </p>
            </div>
          </div>
          <div className={cx('boars-top')}>
            <span className={cx('boars-top-icon', 'shuffle')}>
              <span className={cx('boars-top-icon-shuffle')}>
                <FontAwesomeIcon icon={faShuffle} />
              </span>
            </span>
            <span className={cx('boars-top-icon')}>
              <span className={cx('boars-top-icon-backward')}>
                <FontAwesomeIcon icon={faBackwardStep} />
              </span>
            </span>
            <audio id="myAudio">
              <source src="horse.ogg" type="audio/ogg" />
              <source src="horse.mp3" type="audio/mpeg" />
            </audio>
            <span className={cx('boars-top-icon', 'play')}>
              {/* <audio ref={myRef} src="/music/ChungTaKhongThuocVeNhau.mp3" /> */}
              {!isPlaying ? (
                <span>
                  <FontAwesomeIcon
                    className={cx('play-icon-play')}
                    icon={faPlay}
                    onClick={() => {
                      // startAudio();
                      // playMusic();
                      // toggleMusic();
                      playingButton();
                    }}
                    // style={{ display: playListMusic ? 'block' : 'none' }}
                  />
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon
                    className={cx('play-icon-pause')}
                    icon={faPause}
                    onClick={() => {
                      // pauseAudio();
                      // stopMusic();
                      // toggleMusic();
                      playingButton();
                    }}
                    // style={{ display: playListMusic ? 'none' : 'block' }}
                  />
                </span>
              )}
              {/* <FontAwesomeIcon className={cx('play-icon-load')} icon={faSpinner} /> */}
            </span>
            <span className={cx('boars-top-icon')}>
              <span className={cx('boars-top-icon-forward')}>
                <FontAwesomeIcon icon={faForwardStep} />
              </span>
            </span>
            <span className={cx('boars-top-icon')}>
              <span className={cx('boars-top-icon-repeat')}>
                <FontAwesomeIcon icon={faRepeat} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadMusicBoard;
