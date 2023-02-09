import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlay, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
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
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/1.jpg" alt="1" />
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
                    <span className={cx('name-singer-z')}>Em Là Kẻ Đáng Thương</span>
                    <span className={cx('name-song-z')}>Phá Huy T4</span>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Em Là Kẻ Đáng Thương (Single)</p>
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
                    <FontAwesomeIcon className={cx('right-icon')} icon={faHeart} />
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
                    <span className={cx('name-singer-z')}>Quả Phụ Tướng</span>
                    <span className={cx('name-song-z')}>Dunghoangpham</span>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Quả Phụ Tướng (Single)</p>
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
                    <FontAwesomeIcon className={cx('right-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>   <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
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
                    <span className={cx('name-singer-z')}>Cuối Cùng Thì</span>
                    <span className={cx('name-song-z')}>Jack - J97</span>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Cuối Cùng Thì (Single)</p>
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
                    <FontAwesomeIcon className={cx('right-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>   <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
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
                    <span className={cx('name-singer-z')}>Khuất Lối</span>
                    <span className={cx('name-song-z')}>H-Kray</span>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Khuất Lối (Single)</p>
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
                    <FontAwesomeIcon className={cx('right-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>   <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
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
                    <span className={cx('name-singer-z')}>Đừng Lo Nhé! Có Anh Đây</span>
                    <span className={cx('name-song-z')}>Thiên Tú</span>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Đừng Lo Nhé! Có Anh Đây (Single)</p>
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
                    <FontAwesomeIcon className={cx('right-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>   <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
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
                    <span className={cx('name-singer-z')}>Trịnh Gia</span>
                    <span className={cx('name-song-z')}>Jack - J97</span>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Trịnh Gia (Single)</p>
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
                    <FontAwesomeIcon className={cx('right-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>   <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
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
                    <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng NhauNhau</span>
                    <span className={cx('name-song-z')}>O.lew</span>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng NhauNhau (Single)</p>
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
                    <FontAwesomeIcon className={cx('right-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>   <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank')}>
                    <span>8</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/1.jpg" alt="1" />
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
                    <span className={cx('name-singer-z')}>Em Là Kẻ Đáng Thương</span>
                    <span className={cx('name-song-z')}>Phá Huy T4</span>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Em Là Kẻ Đáng Thương (Single)</p>
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
                    <FontAwesomeIcon className={cx('right-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>   <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank')}>
                    <span>9</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/1.jpg" alt="1" />
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
                    <span className={cx('name-singer-z')}>Em Là Kẻ Đáng Thương</span>
                    <span className={cx('name-song-z')}>Phá Huy T4</span>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Em Là Kẻ Đáng Thương (Single)</p>
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
                    <FontAwesomeIcon className={cx('right-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>   <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
              <div className={cx('rank-item-left')}>
                <div className={cx('left-item-right')}>
                  <div className={cx('zingchart-rank')}>
                    <span>10</span>
                  </div>
                  <span className={cx('line-rank')}></span>
                </div>
                <div className={cx('left-item-left')}>
                  <div className={cx('list-zingchart-img')}>
                    <img src="/imgzingchart/1.jpg" alt="1" />
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
                    <span className={cx('name-singer-z')}>Em Là Kẻ Đáng Thương</span>
                    <span className={cx('name-song-z')}>Phá Huy T4</span>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Em Là Kẻ Đáng Thương (Single)</p>
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
                    <FontAwesomeIcon className={cx('right-icon')} icon={faHeart} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zingchart;
