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
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
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

  const [changeClickColorNext, setChangeClickColorNext] = useState(true);
  const [changeClickColorPrev, setChangeClickColorPrev] = useState(true);

  const handlOnClickPrev = () => {
    setChangeClickColorNext(true);
    setChangeClickColorPrev(true);
  };
  const handlOnClickNext = () => {
    setChangeClickColorNext(true);
    setChangeClickColorPrev(false);
  };

  return (
    <div className={cx('loadMusic')}>
      <div className={cx('loadMusic-content')}>
        <div className={cx('content-left')}>
          <div className={cx('left-img')}>
            <img className={cx('img-mus')} src="/imgmusic/ctktvn.jpg" alt="Chúng Ta Không Thuộc Về Nhau" />
          </div>
          <div className={cx('left-name-music')}>
            <span>Chúng Ta Không Thuộc Về Nhau</span>
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
              <span>Từ playlist</span>
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
              <span>Danh sách phát</span>
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
              <span>Lời bài hát</span>
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
          <div
            className={cx('board-body-playlist')}
            style={{
              display: showPlayListBoard ? 'block' : 'none',
            }}
          >
            <div className={cx('prev-boardMusic')} onClick={handlOnClickPrev}>
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                style={{
                  color: changeClickColorPrev ? 'rgba(89, 84, 96, 0.1)' : '#fff',
                }}
              />
            </div>
            <div className={cx('body-playlist-items')}>
              <div className={cx('playlist-item')}>
                <div className={cx('pl-item-img')}>
                  <img src="/imgmusic/ctktvn.jpg" alt="Chúng Ta Không Thuộc Về Nhau" />
                </div>
                <div className={cx('pl-item-icon')}>
                  <span className={cx('pl-icon-heart')}>
                    <p>
                      <FontAwesomeIcon icon={faHeart} />
                    </p>
                  </span>
                  <span className={cx('pl-icon-play')}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </span>
                </div>
              </div>
              <div className={cx('playlist-item')}>
                <div className={cx('pl-item-img')}>
                  <img src="/imgmusic/ctktvn.jpg" alt="Chúng Ta Không Thuộc Về Nhau" />
                </div>
                <div className={cx('pl-item-icon')}>
                  <span className={cx('pl-icon-heart')}>
                    <p>
                      <FontAwesomeIcon icon={faHeart} />
                    </p>
                  </span>
                  <span className={cx('pl-icon-play')}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </span>
                </div>
              </div>  <div className={cx('playlist-item')}>
                <div className={cx('pl-item-img')}>
                  <img src="/imgmusic/ctktvn.jpg" alt="Chúng Ta Không Thuộc Về Nhau" />
                </div>
                <div className={cx('pl-item-icon')}>
                  <span className={cx('pl-icon-heart')}>
                    <p>
                      <FontAwesomeIcon icon={faHeart} />
                    </p>
                  </span>
                  <span className={cx('pl-icon-play')}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </span>
                </div>
              </div>  <div className={cx('playlist-item')}>
                <div className={cx('pl-item-img')}>
                  <img src="/imgmusic/ctktvn.jpg" alt="Chúng Ta Không Thuộc Về Nhau" />
                </div>
                <div className={cx('pl-item-icon')}>
                  <span className={cx('pl-icon-heart')}>
                    <p>
                      <FontAwesomeIcon icon={faHeart} />
                    </p>
                  </span>
                  <span className={cx('pl-icon-play')}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </span>
                </div>
              </div>
            </div>
            <div className={cx('next-boardMusic')} onClick={handlOnClickNext}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                style={{
                  color: changeClickColorNext ? '#fff' : 'rgba(89, 84, 96, 0.5)',
                }}
              />
            </div>
          </div>
          <div
            className={cx('board-body-karaoke')}
            style={{
              display: showKaraokeBoard ? 'block' : 'none',
            }}
          >
            <h1>Chúng Ta Không Thuộc Về Nhau</h1>
            <h3>Sơn Tùng MT-P</h3>
          </div>
          <div
            className={cx('board-body-lyrics')}
            style={{
              display: showLyricsBoard ? 'flex' : 'none',
            }}
          >
            <div className={cx('lyrics-img')}>
              <img src="/imgmusic/ctktvn.jpg" alt="Chúng Ta Không Thuộc Về Nhau" />
            </div>
            <div className={cx('lyrics-songs')}>
              <span>
                Niềm tin đã mất, giọt nước mắt cuốn kí ức anh chìm sâu
                <p>Tình về nơi đâu, cô đơn đôi chân lạc trôi giữa bầu trời</p>
                <p>Màn đêm che giấu, từng góc tối khuất lấp phía sau bờ môi!</p>
                <p>Tại vì anh thôi, yêu say mê nên đôi khi quá dại khờ!</p>
                <p>Nhắm mắt ơ thờ anh không muốn lạc vào trong nỗi đau này</p>
                <p>Phía trước bây giờ ai đang nắm chặt bàn tay của em vậy ...</p>
                <p>Ai vậy ???</p>
                <p>Mông lung như một trò đùa</p>
                <p>Anh xin giơ tay rút lui thôi</p>
                <p>Do ai ???</p>
                <p>Trách ai bây giờ đây ????</p>
                <p>Uhhhhhh ....</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Em hãy cứ đi bên người mà em cần</p>
                <p>Trái tim không thuộc về nhau</p>
                <p>Giấc mơ không là của nhau</p>
                <p>Xoá câu ca buồn chiều mưa</p>
                <p>Anh lỡ xoá luôn yêu thương ngày xưa rồi</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Hey... Từng đêm qua ...</p>
                <p>Cơn mưa bao vây chia rời đôi ta</p>
                <p>Em ... Ngày hôm qua ...</p>
                <p>Cuốn gió theo mây đi về nơi xa</p>
                <p>Trời xanh rộng bao la</p>
                <p>Anh lê đôi chân mình,</p>
                <p>Bơ vơ lang thang có lẽ</p>
                <p>Em đang yên vui bên nhân tình</p>
                <p>Quên đi để anh nhớ</p>
                <p>Hơi men để anh mơ</p>
                <p>Nơi đâu để anh giấu</p>
                <p>Một nỗi buồn vào trong thơ</p>
                <p>Nhắm mắt ơ thờ anh không muốn lạc vào trong nỗi đau này</p>
                <p>Phía trước bây giờ ai đang nắm chặt bàn tay của em vậy</p>
                <p>Mông lung như một trò đùa</p>
                <p>Anh xin giơ tay rút lui thôi</p>
                <p>Do ai ???</p>
                <p>Trách ai bây giờ đây ????</p>
                <p>Uhhhhhh ....</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Em hãy cứ đi bên người mà em cần</p>
                <p>Trái tim không thuộc về nhau</p>
                <p>Giấc mơ không là của nhau</p>
                <p>Xoá câu ca buồn chiều mưa</p>
                <p>Anh lỡ xoá luôn yêu thương ngày xưa rồi</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Không thuộc về nhau ... Không thuộc về nhau ...</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Không thuộc về nhau ... Không thuộc về nhau ...</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Chúng ta không thuộc về nhau</p>
                <p>Em hãy cứ đi bên người mà em cần</p>
                <p>Trái tim không thuộc về nhau</p>
                <p>Giấc mơ không là của nhau</p>
                <p>Xoá câu ca buồn chiều mưa</p>
                <p>Anh lỡ xoá luôn yêu thương ngày xưa rồi</p>
                <p>Chúng ta không thuộc về nhau !!!</p>
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
