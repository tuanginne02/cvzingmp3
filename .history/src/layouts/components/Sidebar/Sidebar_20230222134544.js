import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import { MyZing, KhamPha, ZingChart, Radio, Following, NewMusic, CategoryMusic, Top100, MV } from '~/assets/Icon/Icon';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
  const [changeOnMouse, setChangeOnMouse] = useState(false);
  const [changeOnMouseLive, setChangeOnMouseLive] = useState(false);
  const [changeOnMouseNewMusic, setChangeOnMouseNewMusc] = useState(false);

  const handlOnMouse = () => {
    setChangeOnMouse(true);
  };
  const handlOutMouse = () => {
    setChangeOnMouse(false);
  };
  const handlOnMouseLive = () => {
    setChangeOnMouseLive(true);
  };
  const handlOutMouseLive = () => {
    setChangeOnMouseLive(false);
  };
  const handlOnMouseNewMusic = () => {
    setChangeOnMouseNewMusc(true);
  };
  const handlOutMouseNewMusic = () => {
    setChangeOnMouseNewMusc(false);
  };
  const [clickCaNhan, setClickCaNhan] = useState(true);
  const [clickKhamPha, setClickKhamPha] = useState(true);
  const [clickZingChart, setClickZingChart] = useState(true);
  const [clickIRadio, setClickIRadio] = useState(true);
  const [clickFollowing, setClickFollowing] = useState(true);
  const [clickNewMusic, setClickNewMusic] = useState(true);
  const [clickCategory, setClickCategory] = useState(true);
  const [clickTopRank, setClickTopRank] = useState(true);
  const [clickMV, setClickMV] = useState(true);


  const handleOnClick = () => setClickCaNhan(false);

  return (
    <div className={cx('sidebar')}>
      <NavLink className={cx('logo-zing')} to={config.routes.home}>
        <img src="/img/zinglogo.svg" alt="Zing MP3" />
      </NavLink>
      <div className={cx('sidebar-items')}>
        <div className={cx('sidebar-top')} onClick={handleOnClick}>
          <div className={cx('top-header')}>
            <NavLink
              className={cx('sibar-top-item')}
              to={config.routes.profile}
              style={{
                backgroundColor: clickItem ? 'rgb(57,49,66)' : '',
                borderLeft: clickItem ? '1px solid rgb(155,77,224) ' : '',
              }}
            >
              <MyZing />
              <div className={cx('item-title')}>
                <p>Cá Nhân</p>
              </div>
            </NavLink>
            <NavLink
              className={cx('sibar-top-item')}
              to={config.routes.home}
              style={{
                backgroundColor: clickItem ? '' : 'rgb(57,49,66)',
                borderLeft: clickItem ? '' : '1px solid rgb(155,77,224) ',
              }}
            >
              <KhamPha />
              <p>Khám Phá</p>
            </NavLink>
            <NavLink
              className={cx('sibar-top-item')}
              onMouseOver={handlOnMouse}
              onMouseOut={handlOutMouse}
              to={config.routes.zingchart}
            >
              <ZingChart />
              <p>#zingchart</p>
              <span>
                <FontAwesomeIcon
                  className={cx('show-play')}
                  icon={faCirclePlay}
                  // onMouseOver={handlOnMouse}
                  // onMouseOut={handlOnMouse}
                  style={{
                    display: changeOnMouse ? 'block' : 'none',
                  }}
                />
              </span>
            </NavLink>
            <NavLink
              className={cx('sibar-top-item')}
              to={config.routes.radio}
              onMouseOver={handlOnMouseLive}
              onMouseOut={handlOutMouseLive}
            >
              <Radio />
              <p>Radio</p>
              <div className={cx('live-primary')}>
                <span>LIVE</span>
              </div>
              <span>
                <FontAwesomeIcon
                  className={cx('show-play', 'play-live')}
                  icon={faCirclePlay}
                  style={{
                    display: changeOnMouseLive ? 'block' : 'none',
                  }}
                />
              </span>
            </NavLink>
            <NavLink className={cx('sibar-top-item')} to={config.routes.following}>
              <Following />
              <p>Theo Dõi</p>
            </NavLink>
          </div>
          <div className={cx('top-bottom')}>
            <div className={cx('sibar-shadow')}></div>
            <NavLink
              to={config.routes.newmusic}
              className={cx('sibar-top-item')}
              onMouseOver={handlOnMouseNewMusic}
              onMouseOut={handlOutMouseNewMusic}
            >
              <NewMusic />
              <p>Nhạc Mới</p>
              <span>
                <FontAwesomeIcon
                  className={cx('show-play')}
                  icon={faCirclePlay}
                  style={{
                    display: changeOnMouseNewMusic ? 'block' : 'none',
                  }}
                />
              </span>
            </NavLink>
            <NavLink to={config.routes.category} className={cx('sibar-top-item')}>
              <CategoryMusic />
              <p>Thể Loại</p>
            </NavLink>
            <NavLink to={config.routes.toprank} className={cx('sibar-top-item')}>
              <Top100 />
              <p>Top 100</p>
            </NavLink>
            <NavLink to={config.routes.mv} className={cx('sibar-top-item')}>
              <MV />
              <p>MV</p>
            </NavLink>
            <div className={cx('sidebar-advertisement')}>
              <form className={cx('sibar-login')}>
                <p className={cx('adv-title')}>Đăng nhập để khám phá playlist dành riêng cho bạn</p>
                <NavLink to="https://id.zalo.me" className={cx('btn-sibar-lg')}>
                  ĐĂNG NHẬP
                </NavLink>
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
