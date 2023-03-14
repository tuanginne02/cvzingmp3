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

const cx = classNames.bind(styles);

function LoadMusicBoard () {
    const [showLoadMusicBoard, setShowLoadMusicBoard] = useState(true);
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
    return(

    )
}
export default LoadMusicBoard;