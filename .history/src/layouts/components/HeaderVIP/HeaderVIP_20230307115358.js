import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faArrowRightLong,
  faSearch,
  faDownload,
  faShirt,
  faGem,
  faGear,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Theme } from './Theme/Theme';
import { Setting } from './MenuSetting/MenuSetting';
import { Login } from './Login/Login';
const cx = classNames.bind(styles);

function HeaderVIP() {


  return (
    <div className={cx('header')}>
     <h1>HeaderVIP</h1>
    </div>
  );
}

export default HeaderVIP;
