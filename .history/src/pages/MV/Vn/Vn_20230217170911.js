import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faList, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faCirlr} from '@fortawesome/free-regular-svg-icons';

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
              <div className={cx('icon-search')}>
                <FontAwesomeIcon className={cx('list-search')} icon={faChevronDown} />
                <FontAwesomeIcon className={cx('list-search')} icon={faChevronUp} />
              </div>
            </div>
            <div className={cx('btn-listien')}>
              <FontAwesomeIcon icon={faList} />
              <p>Nghe Nhiều</p>
              <div className={cx('icon-search')}>
                <FontAwesomeIcon className={cx('list-search')} icon={faChevronDown} />
                <FontAwesomeIcon className={cx('list-search')} icon={faChevronUp} />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('vn-content')}>

        </div>
      </div>
    </div>
  );
}
export default MVVN;
