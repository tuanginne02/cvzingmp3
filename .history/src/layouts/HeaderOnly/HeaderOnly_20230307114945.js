import React from 'react';
import className from 'classnames/bind';
import style from './HeaderOnly.module.scss';
import Header from '../components/Header'

const cx = className.bind(style);

function HeaderOnly({ children }) {
    return (
      <div>
        <Header />
        <div className={cx('container')}>
          <div className={cx('content')}>{children}</div>
        </div>
      </div>
    );
  }
export default HeaderOnly;
