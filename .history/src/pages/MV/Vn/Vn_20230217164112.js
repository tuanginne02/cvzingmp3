import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faList, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../MV.module.scss';

const cx = className.bind(style);

function MVVN() {
  return (
    <div className={cx('mvvn')}>
      <div className={cx('mvvn-container')}>
        <div className={cx('vn-header')}>
          <div className={cx('header-filler')}>
            <div className={cx('btn-all')}>
                <FontAwesomeIcon icon={faMusic} />
                <p>Tất Cả</p>
                <div className={cx('')}><FontAwesomeIcon icon={faChevronDown} /></div >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MVVN;
