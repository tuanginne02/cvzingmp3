import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import className from 'classnames/bind';
import styles from './Following.module.scss';

const cx = className.bind(styles);

function Following() {
  const [changeClickColorNext, setChangeClickColorNext] = useState(true);

  const handlOnClickPrev = () => {
    setChangeClickColorNext(false);
  };
  const handlOnClickNext = () => {
    setChangeClickColorNext(true);
  };

  return (
    <div className={cx('following')}>
      <div className={cx('following-container')}>
      
      </div>
    </div>
  );
}

export default Following;
