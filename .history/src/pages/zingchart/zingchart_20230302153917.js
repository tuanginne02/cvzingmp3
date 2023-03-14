import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlay, faMicrophone, faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './zingchart.module.scss';

const cx = classNames.bind(styles);

function Zingchart() {
  const [clickPlayMusic, setClickPlayMusic] = useState(false);
  const clickPlay = () => setClickPlayMusic((current) => !current);

  const [changeColorHeart, setChangeColorHeart] = useState(false);
  // const colorHeart = () => setChangeColorHeart((current) => !current);
  funcition colorHeart () 

  return (
    <div className={cx('zingchart')}>
      <div className={cx('zingchart-conatiner')}>
        <div className={cx('zingchart-title')}>
          <h1>#zingchart</h1>
          <div className={cx('title-icon')}>
            <FontAwesomeIcon className={cx('iconPlay')} icon={faPlay} />
          </div>
        </div>
        <div className={cx('zingchart-ranks')}>
          <div className={cx('rank-items')}>
            <div className={cx('rank-item')}>
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
                      <FontAwesomeIcon className={cx('icon-center')} icon={faPlay} />
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
                    <span className={cx('name-singer-z')}>Em Là Kẻ Đáng Thương</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Phá Huy T4</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Em Là Kẻ Đáng Thương (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div className={cx('right-title')}>
                  <p>04:18</p>
                </div>
                <div className={cx('item-right-icon')}>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon
                      className={cx('right-icon')}
                      icon={faHeart}
                      onClick={() => {
                        colorHeart();
                        console.log('heart');
                      }}
                      style={{ color: changeColorHeart ? 'red' : '' }}
                    />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')}>
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
                      <FontAwesomeIcon className={cx('icon-center')} icon={faPlay} />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Quả Phụ Tướng</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Dunghoangpham</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Quả Phụ Tướng (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div className={cx('right-title')}>
                  <p>03:30</p>
                </div>
                <div className={cx('item-right-icon')}>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon
                      className={cx('right-icon')}
                      icon={faHeart}
                      onClick={() => {
                        colorHeart();
                        console.log('heart');
                      }}
                      style={{ color: changeColorHeart ? 'red' : '' }}
                    />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')}>
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
                      <FontAwesomeIcon className={cx('icon-center')} icon={faPlay} />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Cuối Cùng Thì</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Jack - J97</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Cuối Cùng Thì (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div className={cx('right-title')}>
                  <p>03:33</p>
                </div>
                <div className={cx('item-right-icon')}>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon
                      className={cx('right-icon')}
                      icon={faHeart}
                      onClick={() => {
                        colorHeart();
                        console.log('heart');
                      }}
                      style={{ color: changeColorHeart ? 'red' : '' }}
                    />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')}>
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
                      <FontAwesomeIcon className={cx('icon-center')} icon={faPlay} />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Khuất Lối</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>H-Kray</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Khuất Lối (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div className={cx('right-title')}>
                  <p>04:24</p>
                </div>
                <div className={cx('item-right-icon')}>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon
                      className={cx('right-icon')}
                      icon={faHeart}
                      onClick={() => {
                        colorHeart();
                        console.log('heart');
                      }}
                      style={{ color: changeColorHeart ? 'red' : '' }}
                    />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')}>
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
                      <FontAwesomeIcon className={cx('icon-center')} icon={faPlay} />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Đừng Lo Nhé! Có Anh Đây</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Thiên Tú</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Đừng Lo Nhé! Có Anh Đây (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div className={cx('right-title')}>
                  <p>04:41</p>
                </div>
                <div className={cx('item-right-icon')}>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon
                      className={cx('right-icon')}
                      icon={faHeart}
                      onClick={() => {
                        colorHeart();
                        console.log('heart');
                      }}
                      style={{ color: changeColorHeart ? 'red' : '' }}
                    />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')}>
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
                      <FontAwesomeIcon className={cx('icon-center')} icon={faPlay} />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Trịnh Gia</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Jack - J97</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Trịnh Gia (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div className={cx('right-title')}>
                  <p>03:00</p>
                </div>
                <div className={cx('item-right-icon')}>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon
                      className={cx('right-icon')}
                      icon={faHeart}
                      onClick={() => {
                        colorHeart();
                        console.log('heart');
                      }}
                      style={{ color: changeColorHeart ? 'red' : '' }}
                    />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')}>
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
                      <FontAwesomeIcon className={cx('icon-center')} icon={faPlay} />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>O.lew</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div className={cx('right-title')}>
                  <p>04:39</p>
                </div>
                <div className={cx('item-right-icon')}>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon
                      className={cx('right-icon')}
                      icon={faHeart}
                      onClick={() => {
                        colorHeart();
                        console.log('heart');
                      }}
                      style={{ color: changeColorHeart ? 'red' : '' }}
                    />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')}>
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
                      <FontAwesomeIcon className={cx('icon-center')} icon={faPlay} />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Tráo Trao Duyên</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>NB3 Hoài Bảo,</span>
                      <span className={cx('name-song-z')}>CT</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Tráo Trao Duyên (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div className={cx('right-title')}>
                  <p>04:18</p>
                </div>
                <div className={cx('item-right-icon')}>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon
                      className={cx('right-icon')}
                      icon={faHeart}
                      onClick={() => {
                        colorHeart();
                        console.log('heart');
                      }}
                      style={{ color: changeColorHeart ? 'red' : '' }}
                    />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')}>
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
                      <FontAwesomeIcon className={cx('icon-center')} icon={faPlay} />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Thủy Chung</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Thương Võ,</span>
                      <span className={cx('name-song-z')}>K-KICM,</span>
                      <span className={cx('name-song-z')}>ACV</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Thủy Chung (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div className={cx('right-title')}>
                  <p>04:18</p>
                </div>
                <div className={cx('item-right-icon')}>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon
                      className={cx('right-icon')}
                      icon={faHeart}
                      onClick={() => {
                        colorHeart();
                        console.log('heart');
                      }}
                      style={{ color: changeColorHeart ? 'red' : '' }}
                    />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faEllipsis} />
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('rank-item')}>
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
                      <FontAwesomeIcon className={cx('icon-center')} icon={faPlay} />
                      {/* <div className={cx('img-center')}>
                        <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                      </div> */}
                    </div>
                  </div>
                  <div className={cx('list-zingchart-title')}>
                    <span className={cx('name-singer-z')}>Sao Cũng Được</span>
                    <div className={cx('name-songs')}>
                      <span className={cx('name-song-z')}>Thành Đạt</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('rank-item-center')}>
                <div className={cx('center-title')}>
                  <p>Sao Cũng Được (Single)</p>
                </div>
              </div>
              <div className={cx('rank-item-right')}>
                <div className={cx('right-title')}>
                  <p>04:18</p>
                </div>
                <div className={cx('item-right-icon')}>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon className={cx('right-icon')} icon={faMicrophone} />
                  </p>
                  <p className={cx('p-icon')}>
                    <FontAwesomeIcon
                      className={cx('right-icon')}
                      icon={faHeart}
                      onClick={() => {
                        colorHeart();
                        console.log('heart');
                      }}
                      style={{ color: changeColorHeart ? 'red' : '' }}
                    />
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
        <div className={cx('bottom-content')}>
          <div className={cx('zingchart-rank-week')}>
            <div className={cx('rank-week-title')}></div>
            <h1>Bảng Xếp Hạng Tuần</h1>
          </div>
          <div className={cx('rank-week-items')}>
            <div className={cx('rank-week-item')}>
              <div className={cx('week-item-title')}>
                <h1 className={cx('ct-title')}>Việt Nam</h1>
                <div className={cx('week-title-icon')}>
                  <FontAwesomeIcon className={cx('week-iconPlay')} icon={faPlay} />
                </div>
              </div>
              <div className={cx('week-items')}>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Em Là Kẻ Đáng Thương</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Phát Huy T4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>04:18</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Quả Phụ Tướng</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Dunghoangpham</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>03:30</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Cuối Cùng Thì</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Jack - J97</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>03:33</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Đừng Lo Nhé! Có Anh Đây</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Thiên Tú</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>04:41</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Khuất Lối</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>H-Kray</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>04:24</p>
                    </div>
                    <div className={cx('week-right-icon')}>
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
                  <button>Xem Tất Cả</button>
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
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Em Là Kẻ Đáng Thương</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Phát Huy T4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>04:18</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Quả Phụ Tướng</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Dunghoangpham</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>03:30</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Cuối Cùng Thì</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Jack - J97</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>03:33</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Đừng Lo Nhé! Có Anh Đây</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Thiên Tú</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>04:41</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Khuất Lối</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>H-Kray</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>04:24</p>
                    </div>
                    <div className={cx('week-right-icon')}>
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
                  <button>Xem Tất Cả</button>
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
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Em Là Kẻ Đáng Thương</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Phát Huy T4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>04:18</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Quả Phụ Tướng</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Dunghoangpham</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>03:30</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Cuối Cùng Thì</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Jack - J97</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>03:33</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Đừng Lo Nhé! Có Anh Đây</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>Thiên Tú</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>04:41</p>
                    </div>
                    <div className={cx('week-right-icon')}>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faMicrophone} />
                      </p>
                      <p className={cx('week-p-icon')}>
                        <FontAwesomeIcon className={cx('right-icon-week')} icon={faEllipsis} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx('week-item')}>
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
                        <div className={cx('icon-rankweek')}>
                          <FontAwesomeIcon className={cx('rankweek-icon-center')} icon={faPlay} />
                          {/* <div className={cx('rankweek-img-center')}>
                                <img className={cx('gif-img')} src="/img/homeList.gif" alt="gif" />
                              </div> */}
                        </div>
                      </div>
                      <div className={cx('music-rank-title')}>
                        <span className={cx('name-rank-singer')}>Khuất Lối</span>
                        <div className={cx('name-rank-songs')}>
                          <span className={cx('song-rank')}>H-Kray</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('week-item-right')}>
                    <div className={cx('week-right-time')}>
                      <p>04:24</p>
                    </div>
                    <div className={cx('week-right-icon')}>
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
                  <button>Xem Tất Cả</button>
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
