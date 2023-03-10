import React, { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';
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
  faUpRightAndDownLeftFromCenter,
  faChevronDown,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { MV } from '~/assets/Icon/Icon';
import music from '~/assets/Music/ChungTaKhongThuocVeNhau.mp3';
import LoadMusicBoard from './LoadMusicBoard';

const cx = classNames.bind(styles);

function LoadMusic() {
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
  const [changeVolumOn, setChangeVolumOn] = useState(50);
  // const [changeVolumOff, setChangeVolumOff] = useState(0);
  const [changeVolumToglegToggle, setChangeVolumToggle] = useState(true);

  const ClickVolumOff = () => {
    setChangeVolumToggle(true);
    setChangeVolumOn(50);
  };
  const ClickVolumOn = () => {
    setChangeVolumOn(0);
    setChangeVolumToggle(false);
  };
  const [showLoadMusicBoard, setShowLoadMusicBoard] = useState(false);
  const onClickShowBoard = () => setShowLoadMusicBoard(false);
  const onClickHiddenBoard = () => setShowLoadMusicBoard(true);
  const [showPlayListBoard, setShowPlayListBoard] = useState(false);
  const [showKaraokeBoard, setShowKaraokeBoard] = useState(false);
  const [showLyricsBoard, setShowLyricsBoard] = useState(true);

  const OnClickPlayList = () => {
    setShowPlayListBoard(true);
    setShowKaraokeBoard(false);
    setShowLyricsBoard(false);
  };
  const OnClickKaraoke = () => {
    setShowPlayListBoard(false);
    setShowKaraokeBoard(true);
    setShowLyricsBoard(false);
  };
  const OnClickLyrics = () => {
    setShowPlayListBoard(false);
    setShowKaraokeBoard(false);
    setShowLyricsBoard(true);
  };

  return (
    <div className={cx('loadMusic')}>
      <div className={cx('loadMusic-content')}>
        <div className={cx('content-left')}>
          <div className={cx('left-img')}>
            <img className={cx('img-mus')} src="/imgmusic/ctktvn.jpg" alt="Ch??ng Ta Kh??ng Thu???c V??? Nhau" />
          </div>
          <div className={cx('left-name-music')}>
            <span>Ch??ng Ta Kh??ng Thu???c V??? Nhau</span>
            <span className={cx('name-singer')}>S??n T??ng M-TP</span>
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
            <span className={cx('top-icon', 'play')}>
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
            <div className={cx('time')}>
              <p>
                {currTime.min}:{currTime.sec}
              </p>
            </div>
            {/* <div className={cx('center-bottom-line')}> */}
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
        </div>
        <div className={cx('content-right')}>
          {/* <span className={cx('right-icon')}>
            <MV />
          </span> */}
          <span className={cx('right-icon')} onClick={onClickShowBoard}>
            <FontAwesomeIcon icon={faMicrophone} />
          </span>
          <span className={cx('right-icon')}>
            <FontAwesomeIcon icon={faWindowRestore} />
          </span>

          <div className={cx('icon-line-vl')}>
            <span className={cx('right-icon')}>
              <FontAwesomeIcon
                className={cx('right-vl')}
                icon={faVolumeHigh}
                style={{ display: changeVolumToglegToggle ? 'block' : 'none' }}
                onClick={ClickVolumOn}
              />
              <FontAwesomeIcon
                className={cx('right-vl')}
                icon={faVolumeXmark}
                style={{ display: changeVolumToglegToggle ? 'none' : 'block' }}
                onClick={ClickVolumOff}
              />
            </span>
            <div className={cx('line-volum')}>
              <input type="range" min="0" max={changeVolumOn} className={cx('run-volum')} />
            </div>
          </div>
          <span className={cx('icon-line')}></span>
          <span className={cx('right-icon')}>
            <FontAwesomeIcon icon={faHeadset} />
          </span>
        </div>
      </div>
      <div
        className={cx('loadMusic-board')}
        style={{
          transform: showLoadMusicBoard ? ' translateY(100%)' : 'translateY(0%) ',
          transition: showLoadMusicBoard ? ' 1s ease-in 0.3s' : '1s ease-in 0.3s',
        }}
      >
        <div className={cx('board-header')}>
          <div className={cx('board-header-left')}>
            <div className={cx('header-left-items')}>
              <img src="/favicon.ico" alt="" />
            </div>
            <div className={cx('header-left-items')}>
              <span>T??? playlist</span>
              <p>#zingchart</p>
            </div>
          </div>
          <div className={cx('board-header-center')}>
            <div
              className={cx('header-center-items')}
              style={{
                backgroundColor: showPlayListBoard ? 'rgba(89, 84, 96, 0.8)' : 'transparent',
                color: showPlayListBoard ? '#fff' : '#ada4a4',
              }}
              onClick={OnClickPlayList}
            >
              <span>Danh s??ch ph??t</span>
            </div>
            <div
              className={cx('header-center-items')}
              style={{
                backgroundColor: showKaraokeBoard ? 'rgba(89, 84, 96, 0.8)' : 'transparent',
                color: showKaraokeBoard ? '#fff' : '#ada4a4',
              }}
              onClick={OnClickKaraoke}
            >
              <span>Karaoke</span>
            </div>
            <div
              className={cx('header-center-items')}
              style={{
                backgroundColor: showLyricsBoard ? 'rgba(89, 84, 96, 0.8)' : 'transparent',
                color: showLyricsBoard ? '#fff' : '#ada4a4',
              }}
              onClick={OnClickLyrics}
            >
              <span>L???i b??i h??t</span>
            </div>
          </div>
          <div className={cx('board-header-right')}>
            <div className={cx('header-right-items')}>
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </div>
            <div className={cx('header-right-items')}>
              <FontAwesomeIcon icon={faGear} />
            </div>
            <div className={cx('header-right-items')} onClick={onClickHiddenBoard}>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
        <div className={cx('board-body')}>
          <div className={cx('board-body-playlist')}></div>
          <div
            className={cx('board-body-karaoke')}
            style={{
              display: showKaraokeBoard ? 'block' : 'none',
            }}
          >
            <h1>Ch??ng Ta Kh??ng Thu???c V??? Nhau</h1>
            <h3>S??n T??ng MT-P</h3>
          </div>
          <div className={cx('board-body-lyrics')}>
            <div className={cx('lyrics-img')}>
              <img src="/imgmusic/ctktvn.jpg" alt="Ch??ng Ta Kh??ng Thu???c V??? Nhau" />
            </div>
            <div className={cx('lyrics-songs')}>
              <span>
              Ni???m tin ???? m???t, gi???t n?????c m???t cu???n k?? ???c anh ch??m s??u
<p>T??nh v??? n??i ????u, c?? ????n ????i ch??n l???c tr??i gi???a b???u tr???i</p>
<p>M??n ????m che gi???u, t???ng g??c t???i khu???t l???p ph??a sau b??? m??i!</p>
<p>T???i v?? anh th??i, y??u say m?? n??n ????i khi qu?? d???i kh???!</p>

<p>Nh???m m???t ?? th??? anh kh??ng mu???n l???c v??o trong n???i ??au n??y</p>
<p>Ph??a tr?????c b??y gi??? ai ??ang n???m ch???t b??n tay c???a em v???y ...</p>
<p>Ai v???y ???</p>
<p>M??ng lung nh?? m???t tr?? ????a</p>
<p>Anh xin gi?? tay r??t lui th??i</p>
<p>Do ai ???</p>
<p>Tr??ch ai b??y gi??? ????y ????</p>
<p>Uhhhhhh ....</p>

<p>Ch??ng ta kh??ng thu???c v??? nhau</p>
<p>Ch??ng ta kh??ng thu???c v??? nhau</p>
<p>Ch??ng ta kh??ng thu???c v??? nhau</p>
<p>Em h??y c??? ??i b??n ng?????i m?? em c???n</p>
<p>Tr??i tim kh??ng thu???c v??? nhau</p>
<p>Gi???c m?? kh??ng l?? c???a nhau</p>
<p>Xo?? c??u ca bu???n chi???u m??a</p>
<p>Anh l??? xo?? lu??n y??u th????ng ng??y x??a r???i</p>
<p>Ch??ng ta kh??ng thu???c v??? nhau</p>

<p>Hey... T???ng ????m qua ...</p>
<p>C??n m??a bao v??y chia r???i ????i ta</p>
<p>Em ... Ng??y h??m qua ...</p>
<p>Cu???n gi?? theo m??y ??i v??? n??i xa</p>
<p>Tr???i xanh r???ng bao la</p>
<p>Anh l?? ????i ch??n m??nh,</p>
<p>B?? v?? lang thang c?? l???</p>
<p>Em ??ang y??n vui b??n nh??n t??nh</p>
<p>Qu??n ??i ????? anh nh???</p>
<p>H??i men ????? anh m??</p>
<p>N??i ????u ????? anh gi???u</p>
<p>M???t n???i bu???n v??o trong th??</p>

<p>Nh???m m???t ?? th??? anh kh??ng mu???n l???c v??o trong n???i ??au n??y</p>
<p>Ph??a tr?????c b??y gi??? ai ??ang n???m ch???t b??n tay c???a em v???y</p>
<p>M??ng lung nh?? m???t tr?? ????a</p>
<p>Anh xin gi?? tay r??t lui th??i</p>
<p>Do ai ???</p>
<p>Tr??ch ai b??y gi??? ????y ????</p>
<p>Uhhhhhh ....</p>

<p>Ch??ng ta kh??ng thu???c v??? nhau</p>
<p>Ch??ng ta kh??ng thu???c v??? nhau</p>
<p>Ch??ng ta kh??ng thu???c v??? nhau</p>
<p>Em h??y c??? ??i b??n ng?????i m?? em c???n</p>
<p>Tr??i tim kh??ng thu???c v??? nhau</p>
<p>Gi???c m?? kh??ng l?? c???a nhau</p>
<p>Xo?? c??u ca bu???n chi???u m??a</p>
<p>Anh l??? xo?? lu??n y??u th????ng ng??y x??a r???i</p>
<p>Ch??ng ta kh??ng thu???c v??? nhau</p>

<p>Ch??ng ta kh??ng thu???c v??? nhau</p>
<p>Kh??ng thu???c v??? nhau ... Kh??ng thu???c v??? nhau ...</p>
<p>Ch??ng ta kh??ng thu???c v??? nhau</p>
<p>Kh??ng thu???c v??? nhau ... Kh??ng thu???c v??? nhau ...</p>

<p>Ch??ng ta kh??ng thu???c v??? nhau</p>
<p>Ch??ng ta kh??ng thu???c v??? nhau</p>
<p>Ch??ng ta kh??ng thu???c v??? nhau</p>
<p>Em h??y c??? ??i b??n ng?????i m?? em c???n</p>
<p>Tr??i tim kh??ng thu???c v??? nhau</p>
<p>Gi???c m?? kh??ng l?? c???a nhau</p>
<p>Xo?? c??u ca bu???n chi???u m??a</p>
<p>Anh l??? xo?? lu??n y??u th????ng ng??y x??a r???i</p>
Ch??ng ta kh??ng thu???c v??? nhau !!!
              </span>
            </div>
          </div>
        </div>
        <div className={cx('board-bottom')}>
          <LoadMusicBoard />
        </div>
      </div>
    </div>
  );
}

export default LoadMusic;
