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
  const handleClick = (event) => {
    // ๐๏ธ toggle class on click
    // event.currentTarget.classList.toggle('bg-salmon');

    // ๐๏ธ add class on click
    event.currentTarget.classList.add('active-sibar');

    // ๐๏ธ remove class on click
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
                <p>Cรก Nhรขn</p>
              </div>
            </div>
            <div className={cx('sibar-top-item')} to={config.routes.home}>
              <KhamPha />
              <p>Khรกm Phรก</p>
            </div>
            <div className={cx('sibar-top-item')} onMouseOver={handlOnMouse} onMouseOut={handlOutMouse}  to={config.routes.zingchart}>
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
            </div>
            <div className={cx('sibar-top-item')} onMouseOver={handlOnMouseLive} onMouseOut={handlOutMouseLive}>
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
            </div>
            <div className={cx('sibar-top-item')}>
              <Following />
              <p>Theo Dรตi</p>
            </div>
          </div>
          <div className={cx('top-bottom')}>
            <div className={cx('sibar-shadow')}></div>
            <div className={cx('sibar-top-item')} onMouseOver={handlOnMouseNewMusic} onMouseOut={handlOutMouseNewMusic}>
              <NewMusic />
              <p>Nhแบกc Mแปi</p>
              <span>
                <FontAwesomeIcon
                  className={cx('show-play')}
                  icon={faCirclePlay}
                  style={{
                    display: changeOnMouseNewMusic ? 'block' : 'none',
                  }}
                />
              </span>
            </div>
            <div className={cx('sibar-top-item')}>
              <CategoryMusic />
              <p>Thแป Loแบกi</p>
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
                <p className={cx('adv-title')}>ฤฤng nhแบญp ฤแป khรกm phรก playlist dร?nh riรชng cho bแบกn</p>
                <span className={cx('btn-sibar-lg')}>ฤฤNG NHแบฌP</span>
              </form>
              <form className={cx('sibar-updateVip')}>
                <p className={cx('adv-title')}>Nghe nhแบกc khรดng quแบฃng cรกo cรนng kho nhแบกc VIP</p>
                <span className={cx('btn-sibar-vip')}>NรNG CแบคP VIP</span>
              </form>
            </div>
          </div>
        </div>

        <div className={cx('sidebar-bottom')}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Tแบกo playlist mแปi</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
