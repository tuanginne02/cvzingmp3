import React, { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';
import classNames from 'classnames/bind';
import styles from '../';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpRightAndDownLeftFromCenter,
  faChevronDown,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { MV } from '~/assets/Icon/Icon';
import music from '~/assets/Music/ChungTaKhongThuocVeNhau.mp3';

const cx = classNames.bind(styles);

function LoadMusicBoard() {
  const [showLoadMusicBoard, setShowLoadMusicBoard] = useState(true);
//   const onClickShowBoard = () => setShowLoadMusicBoard(false);
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
    </div>
  );
}
export default LoadMusicBoard;
