import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faCheck } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from './Login.module.scss';

const cx = className.bind(styles);

export function Login() {
  const [closeModal, setCloseModal] = useState(false);
  const close = () => setCloseModal(true);
  return (
    <div
      className={cx('login')}
      style={{
        display: closeModal ? 'none' : '',
      }}
    >
      <div
        className={cx('login-conatiner')}
        style={{
          display: closeModal ? 'block' : '',
        }}
      >
        <div className={cx('login-content')}>
          
          <div className={cx('img-lg')}>
         <di className={cx('img-itmes')}>
              <div className={cx('login-img', 'first')}>
                <img src="/imgUser/login-img1.jpg" alt="" />
              </div>
              <div className={cx('login-img', 'second')}>
                <img src="/imgUser/login-img2.jpg" alt="" />
              </div>
              <div className={cx('login-img', 'third')}>
                <img src="/imgUser/login-img3.jpg" alt="" />
              </div>
              <div className={cx('login-img', 'four')}>
                <img src="/imgUser/login-img4.jpg" alt="" />
              </div>
         </di >
            <NavLink to="" className={cx('login-zalo')}>
            <div className={cx('zalo-img')}>
              <img className={cx('img-zalo')} src="/imgUser/login-zalo.jpg" alt="" />
            </div>
            <div className={cx('zalo-title')}>
              <span>Đăng nhập bằng Zalo</span>
            </div>
          </NavLink>
          <div className={cx('login-on')} onClick={() => {
            close();
            console.log('close')
          }}>
            <span>Đăng nhập thử</span>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
