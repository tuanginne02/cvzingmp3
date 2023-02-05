import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function Zingchart() {
  return (
    <div className={cx('zingchart')}>
      <div className={cx('zingchart-content')}>
        <div className={cx('zingchart-title')}>
          <span>#zingchart</span>
          <div className={cx('zingchart-icon')}></div>
        </div>
      </div>
    </div>
  );
}

export default Zingchart;
