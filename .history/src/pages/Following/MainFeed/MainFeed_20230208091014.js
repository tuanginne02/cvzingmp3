import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import className from 'classnames/bind';
import styles from '../Following.module.scss';


const cx = className.bind(styles);

function MainFeed () {
    return (
        <div className={cx('main-feed')}>
           <div className={cx('main-feed-conatiner')}>
           <div className={cx('fl-news')}>
          <div className={cx('fl-news-items')}>
            <div className={cx('news-item')}>
              <div className={cx('news-item-top')}>
                <div className={cx('item-top-img')}>
                  <img className={cx('img-user')} src="/imgfollowing/SThach.jpg" alt="user" />
                </div>
                <div className={cx('item-top-name')}>
                  <span>S.T Sơn Thạch</span>
                  <p>16 tháng 11 lúc 14:14</p>
                </div>
                <div className={cx('item-top-sub')}>
                  <p></p>
                  <span>Quan Tâm</span>
                </div>
              </div>
              <div className={cx('news-item-center')}>
                <div className={cx('item-center-title')}>
                  <span>Được ngày nghỉ, mà cũng không được nghỉ 💪💪💪💪💪💪</span>
                </div>
                <div className={cx('item-center-img')}>
                  <img className={cx('img-post')} src="/imgfollowing/newST.jpg" alt="ST" />
                </div>
              </div>
              <div className={cx('news-item-bottom')}>
                <div className={cx('item-bottom-left')}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p>588</p>
                </div>
                <div className={cx('item-bottom-right')}>
                  <FontAwesomeIcon icon={faComment} />
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className={cx('news-item')}>
              <div className={cx('news-item-top')}>
                <div className={cx('item-top-img')}>
                  <img className={cx('img-user')} src="/imgfollowing/SThach.jpg" alt="user" />
                </div>
                <div className={cx('item-top-name')}>
                  <span>S.T Sơn Thạch</span>
                  <p>16 tháng 11 lúc 14:14</p>
                </div>
                <div className={cx('item-top-sub')}>
                  <p></p>
                  <span>Quan Tâm</span>
                </div>
              </div>
              <div className={cx('news-item-center')}>
                <div className={cx('item-center-title')}>
                  <span>Được ngày nghỉ, mà cũng không được nghỉ 💪💪💪💪💪💪</span>
                </div>
                <div className={cx('item-center-img')}>
                  <img className={cx('img-post')} src="/imgfollowing/newST.jpg" alt="ST" />
                </div>
              </div>
              <div className={cx('news-item-bottom')}>
                <div className={cx('item-bottom-left')}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p>588</p>
                </div>
                <div className={cx('item-bottom-right')}>
                  <FontAwesomeIcon icon={faComment} />
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
           </div>

        </div>
    )
}

export default MainFeed;