import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlay, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import className from 'classnames/bind';
import styles from './NewMusic.module.scss';

const cx = className.bind(styles);

function NewMusic() {
  const [changMouseRank, setChangeMouseRank] = useState(false);

  function handleOnMouse() {
    setChangeMouseRank(true);
  }
  function handleOutMouse() {
    setChangeMouseRank(false);
  }

  return (
    <div className={cx('newmusic')}>
      <div className={cx('newmusic-container')}>
        <div className={cx('newmusic-title')}>
          <h1>Nhạc Mới</h1>
          <div className={cx('title-icon')}>
            <FontAwesomeIcon className={cx('tit-iconplay')} icon={faPlay} />
          </div>
        </div>
        <div className={cx('newmusic-content')}>
          <div className={cx('zingchart-ranks')}>
            <div className={cx('rank-items')}>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank1')}>
                      <span>1</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank3')}>
                      <span>3</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>4</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>5</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>6</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>7</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                      <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau</span>
                      <div className={cx('name-songs')}>
                        <span className={cx('name-song-z')}>O.lew</span>
                      </div>
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
                    <div className={cx('zingchart-rank')}>
                      <span>8</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>9</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>10</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>11</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>12</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>13</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>14</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>15</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>16</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>17</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                      <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau</span>
                      <div className={cx('name-songs')}>
                        <span className={cx('name-song-z')}>O.lew</span>
                      </div>
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
                    <div className={cx('zingchart-rank')}>
                      <span>18</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>19</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>20</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>21</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>22</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>23</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>24</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>25</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>26</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>27</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                      <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau</span>
                      <div className={cx('name-songs')}>
                        <span className={cx('name-song-z')}>O.lew</span>
                      </div>
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
                    <div className={cx('zingchart-rank')}>
                      <span>28</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>29</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>30</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>31</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>32</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>33</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>34</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>35</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>36</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>37</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                      <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau</span>
                      <div className={cx('name-songs')}>
                        <span className={cx('name-song-z')}>O.lew</span>
                      </div>
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
                    <div className={cx('zingchart-rank')}>
                      <span>38</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>39</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>40</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>1</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>2</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>3</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>4</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>5</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>6</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>7</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                      <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau</span>
                      <div className={cx('name-songs')}>
                        <span className={cx('name-song-z')}>O.lew</span>
                      </div>
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
                    <div className={cx('zingchart-rank')}>
                      <span>8</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>9</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>10</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>1</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>2</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>3</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>4</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>5</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>6</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>7</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                      <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau</span>
                      <div className={cx('name-songs')}>
                        <span className={cx('name-song-z')}>O.lew</span>
                      </div>
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
                    <div className={cx('zingchart-rank')}>
                      <span>8</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>9</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>10</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>1</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>2</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>3</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>4</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>5</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>6</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>7</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                      <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau</span>
                      <div className={cx('name-songs')}>
                        <span className={cx('name-song-z')}>O.lew</span>
                      </div>
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
                    <div className={cx('zingchart-rank')}>
                      <span>8</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>9</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>10</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>1</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>2</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>3</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>4</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>5</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>6</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>7</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                      <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau</span>
                      <div className={cx('name-songs')}>
                        <span className={cx('name-song-z')}>O.lew</span>
                      </div>
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
                    <div className={cx('zingchart-rank')}>
                      <span>8</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>9</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>10</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>1</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>2</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>3</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>4</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>5</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>6</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>7</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                      <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau</span>
                      <div className={cx('name-songs')}>
                        <span className={cx('name-song-z')}>O.lew</span>
                      </div>
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
                    <div className={cx('zingchart-rank')}>
                      <span>8</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>9</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>10</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>1</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>2</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>3</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>4</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>5</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>6</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              </div>
              <div className={cx('rank-item')} onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                <div className={cx('rank-item-left')}>
                  <div className={cx('left-item-right')}>
                    <div className={cx('zingchart-rank')}>
                      <span>7</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                      <span className={cx('name-singer-z')}>Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau</span>
                      <div className={cx('name-songs')}>
                        <span className={cx('name-song-z')}>O.lew</span>
                      </div>
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
                    <div className={cx('zingchart-rank')}>
                      <span>8</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>9</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
                    <div className={cx('zingchart-rank')}>
                      <span>10</span>
                    </div>
                  </div>

                  <div className={cx('line-rank')}>
                    <span ></span>
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
              {/* <div className={cx('item-btn')}>
              <button>Xem Top 100</button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewMusic;
