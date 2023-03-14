import React from 'react';
import className from 'classnames/bind';
import style from './HeaderOnly.module.scss';

const cx = className.bind(style);

function HeaderOnly() {
  return (
    <div className={cx('header-only')}>
      <div className={cx('header-only-container')}><h1>HeaderOnly</h1></div>
    </div>
  );
}

export default HeaderOnly;
