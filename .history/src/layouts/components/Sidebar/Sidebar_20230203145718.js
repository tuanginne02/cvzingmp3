import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import { MyZing, KhamPha, ZingChart, Radio, Following, NewMusic, CategoryMusic, Top100, MV } from '~/assets/Icon/Icon';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
  const [changeBackground, setChangeBackground] = useState(false);
  const handlOnMouse = () => {
    setChangeBackground((current) => !current);
  };
  const handleClick = (event) => {
    // 👇️ toggle class on click
    // event.currentTarget.classList.toggle('bg-salmon');

    // 👇️ add class on click
    event.currentTarget.classList.add('active-sibar');

    // 👇️ remove class on click
    event.currentTarget.classList.remove('active-sibar');
  };

  return (
    <div className={cx('sidebar')}>
      <div className={cx('logo-zing')} to={config.routes.home}>
        <img src="/img/zinglogo.svg" alt="Zing MP3" />
      </div>
      <div className={cx('sidebar-items')}>
        <div className={cx('sidebar-top')}>
          <div className={cx('top-header')}>
            <div className={cx('sibar-top-item')} onClick={handleClick} to={config.routes.profile}>
              <MyZing />
              <div className={cx('item-title')}>
                <p>Cá Nhân</p>
              </div>
            </div>
            <div className={cx('sibar-top-item')} to={config.routes.home}>
              <KhamPha />
              <p>Khám Phá</p>
            </div>
            <div className={cx('sibar-top-item')} onMouseOver={handlOnMouse} onMouseOut>
              <ZingChart />
              <p>#zingchart</p>
              <span>
                <FontAwesomeIcon
                  className={cx('show-play')}
                  icon={faCirclePlay}
                  // onMouseOut={handleMouseOut}
                  style={{
                    display: changeBackground ? 'block' : '',
                  }}
                />
              </span>
            </div>
            <div className={cx('sibar-top-item')}>
              <Radio />
              <p>Radio</p>
              <div className={cx('live-primary')}>
                <span>LIVE</span>
              </div>
              <span>
                <FontAwesomeIcon className={cx('show-play', 'play-live')} icon={faCirclePlay} />
              </span>
            </div>
            <div className={cx('sibar-top-item')}>
              <Following />
              <p>Theo Dõi</p>
            </div>
          </div>
          <div className={cx('top-bottom')}>
            <div className={cx('sibar-shadow')}></div>
            <div className={cx('sibar-top-item')}>
              <NewMusic />
              <p>Nhạc Mới</p>
              <span>
                <FontAwesomeIcon className={cx('show-play')} icon={faCirclePlay} />
              </span>
            </div>
            <div className={cx('sibar-top-item')}>
              <CategoryMusic />
              <p>Thể Loại</p>
            </div>
            <div className={cx('sibar-top-item')}>
              <Top100 />
              <p>Top 100</p>
            </div>
            <div className={cx('sibar-top-item')}>
              <MV />
              <p>MV</p>
            </div>
            <div className={cx('sidebar-advertisement')}>
              <form className={cx('sibar-login')}>
                <p className={cx('adv-title')}>Đăng nhập để khám phá playlist dành riêng cho bạn</p>
                <span className={cx('btn-sibar-lg')}>ĐĂNG NHẬP</span>
              </form>
              <form className={cx('sibar-updateVip')}>
                <p className={cx('adv-title')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                <span className={cx('btn-sibar-vip')}>NÂNG CẤP VIP</span>
              </form>
            </div>
          </div>
        </div>

        <div className={cx('sidebar-bottom')}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Tạo playlist mới</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
