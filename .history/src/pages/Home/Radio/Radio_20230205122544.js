import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function Radio () {
    return (
        <div className={cx('radio')}>
           <div className = {cx('radio-container')}>
           <div
            className={cx('prev-next')}
            style={{
              display: changeHoverPrevNext ? 'flex' : 'none',
            }}
          >
            <span className={cx('prev')}>
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </span>
            <span className={cx('next')}>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </span>
          </div>
           </div>
        </div>
    )
}

export default Radio;