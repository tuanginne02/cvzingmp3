import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlay, faMicrophone,faHeart  } from '@fortawesome/free-solid-svg-icons';
// ,'heart-icon'import { faHeart } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './zingchart.module.scss';

const cx = classNames.bind(styles);

function Zingchart() {
  const [changMouseRank, setChangeMouseRank] = useState(false);
  function handleOnMouse() {
    setChangeMouseRank(true);
  }
  function handleOutMouse() {
    setChangeMouseRank(false);
  }
  const [changRankWeek, setChangeRankWeek] = useState(false);
  function handleOnMouseWeek() {
    setChangeRankWeek(true);
  }
  function handleOutMouseWeek() {
    setChangeRankWeek(false);
  }
  const [clickPlayMusic, setClickPlayMusic] = useState(false);
  const clickPlay = () => setClickPlayMusic((current) => !current);

  const[changeColorHeart, setChnageColorHeart] = useState(false);
const colorHeart = () => setChange


  return (
    <div className={cx('zingchart')}>
      <div className={cx('zingchart-conatiner')}>
        <div className={cx('zingchart-title')}>
          <h1>#zingchart</h1>
          <div className={cx('title-icon')}>
            <FontAwesomeIcon className={cx('iconPlay')} icon={faPlay} />
          </div>
        </div>
        <div className={cx('zingchart-data')}>
          <div
            className={cx('backg-zing', 'backg-ap', 'backg-ap1')}
            style={{
              backgroundImage: 'url(/imgbackground/zingrank.jpg)',
              width: '100%',
              height: '100%',
              filter: ' brightness(0.5)',
            }}
          ></div>
          <div className={cx('row-rank')}>
            <div className={cx('row')}></div>
            <div className={cx('row')}></div>
            <div className={cx('row')}></div>
            <div className={cx('row')}></div>
            <div className={cx('row')}></div>
          </div>
          <div className={cx('chart-container')}></div>
          <div className={cx('chart-data')}>
            <ul className={cx('line-chart', 'line-top1')}>
              <li className={cx('line-li')}>
                <div className={cx('data-point', 'color-1')}></div>
                <div className={cx('data-line', 'color-1')}></div>
              </li>
            </ul>
            <ul className={cx('line-chart', 'line-top2')}></ul>
            <ul className={cx('line-chart', 'line-top3')}></ul>
          </div>
          <div className={cx('time-rank')}>
            <div className={cx('time')}>17:00</div>
            <div className={cx('time')}>19:00</div>
            <div className={cx('time')}>21:00</div>
            <div className={cx('time')}>23:00</div>
            <div className={cx('time')}>01:00</div>
            <div className={cx('time')}>03:00</div>
            <div className={cx('time')}>05:00</div>
            <div className={cx('time')}>07:00</div>
            <div className={cx('time')}>09:00</div>
            <div className={cx('time')}>11:00</div>
            <div className={cx('time')}>13:00</div>
            <div className={cx('time')}>15:00</div>
          </div>
        </div>
        <div className={cx('zingchart-ranks')}>
          <div className={cx('rank-items')}>
            <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank1')}>
                    <span>1</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')} onClick={clickPlay}>
                    <img src="/imgzingchart/1.jpg" alt="1" />
                    <div className={cx('icon-list-zingchart')}>
                      <FontAwesomeIcon
                        className={cx('icon-center')}
                        icon={faPlay}
                        style={{
                          display: changMouseRank ? 'block' : 'none',
                        }}
                      />
                      <div
                        className={cx('img-center')}
                        style={{
                          display: clickPlayMusic ? 'block' : 'none',
                        }}
                      >
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div>
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Em L?? K??? ????ng Th????ng</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Ph?? Huy T4</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Em L?? K??? ????ng Th????ng (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div
                  className={cx('right-title')}
                  style={{
                    display: changMouseRank ? 'none' : 'block',
                  }}
                >
                  <p>04:18</p>
                </div>
                <div
                  className={cx('item-right-icon')}
                  style={{
                    display: changMouseRank ? 'flex' : 'none',
                  }}
                >
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon','heart-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank2')}>
                    <span>2</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/2.jpg" alt="1" />
                    <div className={cx('icon-list-zingchart')}>
                      <FontAwesomeIcon
                        className={cx('icon-center')}
                        icon={faPlay}
                        style={{
                          display: changMouseRank ? 'block' : 'none',
                        }}
                      />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Qu??? Ph??? T?????ng</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Dunghoangpham</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Qu??? Ph??? T?????ng (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div
                  className={cx('right-title')}
                  style={{
                    display: changMouseRank ? 'none' : 'block',
                  }}
                >
                  <p>03:30</p>
                </div>
                <div
                  className={cx('item-right-icon')}
                  style={{
                    display: changMouseRank ? 'flex' : 'none',
                  }}
                >
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon','heart-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank3')}>
                    <span>3</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/3.jpg" alt="1" />
                    <div className={cx('icon-list-zingchart')}>
                      <FontAwesomeIcon
                        className={cx('icon-center')}
                        icon={faPlay}
                        style={{
                          display: changMouseRank ? 'block' : 'none',
                        }}
                      />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Cu???i C??ng Th??</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Jack - J97</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Cu???i C??ng Th?? (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div
                  className={cx('right-title')}
                  style={{
                    display: changMouseRank ? 'none' : 'block',
                  }}
                >
                  <p>03:33</p>
                </div>
                <div
                  className={cx('item-right-icon')}
                  style={{
                    display: changMouseRank ? 'flex' : 'none',
                  }}
                >
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon','heart-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank')}>
                    <span>4</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/4.jpg" alt="1" />
                    <div className={cx('icon-list-zingchart')}>
                      <FontAwesomeIcon
                        className={cx('icon-center')}
                        icon={faPlay}
                        style={{
                          display: changMouseRank ? 'block' : 'none',
                        }}
                      />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Khu???t L???i</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>H-Kray</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Khu???t L???i (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div
                  className={cx('right-title')}
                  style={{
                    display: changMouseRank ? 'none' : 'block',
                  }}
                >
                  <p>04:24</p>
                </div>
                <div
                  className={cx('item-right-icon')}
                  style={{
                    display: changMouseRank ? 'flex' : 'none',
                  }}
                >
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon','heart-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank')}>
                    <span>5</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/5.jpg" alt="1" />
                    <div className={cx('icon-list-zingchart')}>
                      <FontAwesomeIcon
                        className={cx('icon-center')}
                        icon={faPlay}
                        style={{
                          display: changMouseRank ? 'block' : 'none',
                        }}
                      />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>?????ng Lo Nh??! C?? Anh ????y</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Thi??n T??</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>?????ng Lo Nh??! C?? Anh ????y (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div
                  className={cx('right-title')}
                  style={{
                    display: changMouseRank ? 'none' : 'block',
                  }}
                >
                  <p>04:41</p>
                </div>
                <div
                  className={cx('item-right-icon')}
                  style={{
                    display: changMouseRank ? 'flex' : 'none',
                  }}
                >
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon','heart-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank')}>
                    <span>6</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/6.jpg" alt="1" />
                    <div className={cx('icon-list-zingchart')}>
                      <FontAwesomeIcon
                        className={cx('icon-center')}
                        icon={faPlay}
                        style={{
                          display: changMouseRank ? 'block' : 'none',
                        }}
                      />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Tr???nh Gia</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Jack - J97</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Tr???nh Gia (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div
                  className={cx('right-title')}
                  style={{
                    display: changMouseRank ? 'none' : 'block',
                  }}
                >
                  <p>03:00</p>
                </div>
                <div
                  className={cx('item-right-icon')}
                  style={{
                    display: changMouseRank ? 'flex' : 'none',
                  }}
                >
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon','heart-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank')}>
                    <span>7</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/7.jpg" alt="1" />
                    <div className={cx('icon-list-zingchart')}>
                      <FontAwesomeIcon
                        className={cx('icon-center')}
                        icon={faPlay}
                        style={{
                          display: changMouseRank ? 'block' : 'none',
                        }}
                      />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>R???i Ta S??? Ng???m Ph??o Hoa C??ng Nhau</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>O.lew</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>R???i Ta S??? Ng???m Ph??o Hoa C??ng Nhau (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div
                  className={cx('right-title')}
                  style={{
                    display: changMouseRank ? 'none' : 'block',
                  }}
                >
                  <p>04:39</p>
                </div>
                <div
                  className={cx('item-right-icon')}
                  style={{
                    display: changMouseRank ? 'flex' : 'none',
                  }}
                >
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon','heart-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank')}>
                    <span>8</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/8.jpg" alt="1" />
                    <div className={cx('icon-list-zingchart')}>
                      <FontAwesomeIcon
                        className={cx('icon-center')}
                        icon={faPlay}
                        style={{
                          display: changMouseRank ? 'block' : 'none',
                        }}
                      />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Tr??o Trao Duy??n</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>NB3 Ho??i B???o,</span>
                      <span className={cx('name-song-z')}>CT</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Tr??o Trao Duy??n (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div
                  className={cx('right-title')}
                  style={{
                    display: changMouseRank ? 'none' : 'block',
                  }}
                >
                  <p>04:18</p>
                </div>
                <div
                  className={cx('item-right-icon')}
                  style={{
                    display: changMouseRank ? 'flex' : 'none',
                  }}
                >
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon','heart-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank')}>
                    <span>9</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/9.jpg" alt="1" />
                    <div className={cx('icon-list-zingchart')}>
                      <FontAwesomeIcon
                        className={cx('icon-center')}
                        icon={faPlay}
                        style={{
                          display: changMouseRank ? 'block' : 'none',
                        }}
                      />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Th???y Chung</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Th????ng V??,</span>
                      <span className={cx('name-song-z')}>K-KICM,</span>
                      <span className={cx('name-song-z')}>ACV</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Th???y Chung (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div
                  className={cx('right-title')}
                  style={{
                    display: changMouseRank ? 'none' : 'block',
                  }}
                >
                  <p>04:18</p>
                </div>
                <div
                  className={cx('item-right-icon')}
                  style={{
                    display: changMouseRank ? 'flex' : 'none',
                  }}
                >
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon','heart-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank')}>
                    <span>10</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/10.jpg" alt="1" />
                    <div className={cx('icon-list-zingchart')}>
                      <FontAwesomeIcon
                        className={cx('icon-center')}
                        icon={faPlay}
                        style={{
                          display: changMouseRank ? 'block' : 'none',
                        }}
                      />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Sao C??ng ???????c</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Th??nh ?????t</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Sao C??ng ???????c (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div
                  className={cx('right-title')}
                  style={{
                    display: changMouseRank ? 'none' : 'block',
                  }}
                >
                  <p>04:18</p>
                </div>
                <div
                  className={cx('item-right-icon')}
                  style={{
                    display: changMouseRank ? 'flex' : 'none',
                  }}
                >
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon','heart-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('item-btn')}>
              <button>Xem Top 100</button>
            </div>
          </div>
        </div>
        <div className={cx('zingchart-rank-week')}>
          <div className={cx('rank-week-title')}></div>
          <h1>B???ng X???p H???ng Tu???n</h1>
        </div>

        <div className={cx('rank-week-items')}>
          <div className={cx('rank-week-item')}>
            <div className={cx('week-item-title')}>
              <h1 className={cx('ct-title')}>Vi???t Nam</h1>
              <div className={cx('week-title-icon')}>
                <FontAwesomeIcon className={cx('week-iconPlay')} icon={faPlay} />
              </div>
            </div>
            <div className={cx('week-items')}>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>1</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/1.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Em L?? K??? ????ng Th????ng</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Ph??t Huy T4</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>04:18</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>2</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/2.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Qu??? Ph??? T?????ng</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Dunghoangpham</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>03:30</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>3</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/3.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Cu???i C??ng Th??</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Jack - J97</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>03:33</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>4</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/4.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>?????ng Lo Nh??! C?? Anh ????y</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Thi??n T??</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>04:41</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>5</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/5.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Khu???t L???i</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>H-Kray</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>04:24</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('bnt-all-rankweek')}>
                <button>Xem T???t C???</button>
              </div>
            </div>
          </div>
          <div className={cx('rank-week-item')}>
            <div className={cx('week-item-title')}>
              <h1 className={cx('ct-title')}>US-UK</h1>
              <div className={cx('week-title-icon')}>
                <FontAwesomeIcon className={cx('week-iconPlay')} icon={faPlay} />
              </div>
            </div>
            <div className={cx('week-items')}>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>1</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/1.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Em L?? K??? ????ng Th????ng</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Ph??t Huy T4</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>04:18</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>2</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/2.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Qu??? Ph??? T?????ng</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Dunghoangpham</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>03:30</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>3</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/3.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Cu???i C??ng Th??</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Jack - J97</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>03:33</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>4</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/4.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>?????ng Lo Nh??! C?? Anh ????y</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Thi??n T??</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>04:41</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>5</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/5.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Khu???t L???i</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>H-Kray</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>04:24</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('bnt-all-rankweek')}>
                <button>Xem T???t C???</button>
              </div>
            </div>
          </div>
          <div className={cx('rank-week-item')}>
            <div className={cx('week-item-title')}>
              <h1 className={cx('ct-title')}>K-Pop</h1>
              <div className={cx('week-title-icon')}>
                <FontAwesomeIcon className={cx('week-iconPlay')} icon={faPlay} />
              </div>
            </div>
            <div className={cx('week-items')}>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>1</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/1.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Em L?? K??? ????ng Th????ng</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Ph??t Huy T4</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>04:18</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>2</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/2.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Qu??? Ph??? T?????ng</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Dunghoangpham</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>03:30</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>3</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/3.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Cu???i C??ng Th??</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Jack - J97</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>03:33</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>4</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/4.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>?????ng Lo Nh??! C?? Anh ????y</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>Thi??n T??</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>04:41</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('week-item')} onMouseOver={handleOnMouseWeek} onMouseOut={handleOutMouseWeek}>
                <div className={cx('week-item-left')}>
                  <div className={cx('top-rank')}>
                    <div className={cx('zingchart-rankweek1')}>
                      <span>5</span>
                    </div>
                    <span className={cx('line-rankweek')}></span>
                  </div>
                  <div className={cx('music-rank')}>
                    <div className={cx('rankweek-img')}>
                      <img src="/imgzingchart/5.jpg" alt="1" />
                      <div
                        className={cx('icon-rankweek')}
                        style={{
                          display: changRankWeek ? 'flex' : 'none',
                        }}
                      >
                        <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                        {/* <div className={cx('rankweek-img-center')}>
                              <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                            </div> */}
                      </div>
                    </div>
                    <div className={cx('music-rank-title')}>
                      <span className={cx('name-rank-singer')}>Khu???t L???i</span>
                      <div className={cx('name-rank-songs')}>
                        <span className={cx('song-rank')}>H-Kray</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item-right')}>
                  <div
                    className={cx('week-right-time')}
                    style={{
                      display: changRankWeek ? 'none' : 'block',
                    }}
                  >
                    <p>04:24</p>
                  </div>
                  <div
                    className={cx('week-right-icon')}
                    style={{
                      display: changRankWeek ? 'flex' : 'none',
                    }}
                  >
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                    </p>
                    <p className={cx('week-p-icon')}>
                      <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx('bnt-all-rankweek')}>
                <button>Xem T???t C???</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zingchart;
