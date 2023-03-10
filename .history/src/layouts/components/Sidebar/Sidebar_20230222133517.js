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
  const [clickItem, setClickItem] = useState(true);

  const handleOnClick = () => setClickItem(false);

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
                border: clickItem ? 'rgb(57,49,66)' : '',
              }}
            >
              <MyZing />
              <div className={cx('item-title')}>
                <p>C?? Nh??n</p>
              </div>
            </NavLink>
            <NavLink className={cx('sibar-top-item')} to={config.routes.home}>
              <KhamPha />
              <p>Kh??m Ph??</p>
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
              <p>Theo D??i</p>
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
              <p>Nh???c M???i</p>
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
              <p>Th??? Lo???i</p>
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
                <p className={cx('adv-title')}>????ng nh???p ????? kh??m ph?? playlist d??nh ri??ng cho b???n</p>
                <NavLink to="https://id.zalo.me" className={cx('btn-sibar-lg')}>
                  ????NG NH???P
                </NavLink>
              </form>
              <form className={cx('sibar-updateVip')}>
                <p className={cx('adv-title')}>Nghe nh???c kh??ng qu???ng c??o c??ng kho nh???c VIP</p>
                <span className={cx('btn-sibar-vip')}>N??NG C???P VIP</span>
              </form>
            </div>
          </div>
        </div>

        <div className={cx('sidebar-bottom')}>
          <FontAwesomeIcon icon={faPlus} />
          <span>T???o playlist m???i</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
