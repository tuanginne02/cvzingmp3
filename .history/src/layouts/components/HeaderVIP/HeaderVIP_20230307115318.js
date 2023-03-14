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

function Header() {
  const [showTheme, setShowTheme] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const [showSetting, setShowSetting] = useState(false);

  const [currentLogin, setCurrentLogin] = useState(false);

  const currentUser = false;
  // const onClickLogOut = () => currentUser(true);

  const [showLogin, setShowLogin] = useState(true);

  const onClickLogin = () => setShowLogin((current) => !current);

  return (
    <div className={cx('header')}>
     
    </div>
  );
}

export default Header;
