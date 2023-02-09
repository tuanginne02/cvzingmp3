import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlay} from '@fortawesome/free-solid-svg-icons';

import className from 'classnames/bind';
import styles from '../Radio.module.scss';

const cx = className.bind(styles);

function Podcast() {
  return (
    <div className={cx('podcast')}>
      <div className={cx('podccast-container')}>
        <div className={cx('podcast-discover')}>
          <div className={cx('cont-title')}>
            <h1>Thể Loại Podcast</h1>
            <div className={cx('pos-icon')}>
              <span>TẤT CẢ</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className={cx('cont-items')}>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/1.jpg" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
                <span>Đắp Chăn Nằm Nghe Tun Kể</span>
              </div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/2.png" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
                <span>How2Money x Doctor Housing</span>
                <span></span>
              </div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/3.png" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
                <span>XONE with Starts</span>
              </div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/4.jfif" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
                <span>HIEU.TV</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('podcast-category')}>
          <div className={cx('cont-title')}>
            <h1>Thể Loại Podcast</h1>
            <div className={cx('pos-icon')}>
              <span>TẤT CẢ</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className={cx('cont-items')}>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/1.jpg" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}></div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/2.png" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}></div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/3.png" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}></div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/4.jfif" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}></div>
            </div>
          </div>
        </div>
        <div className={cx('podcast-rank')}>
          <div className={cx('cont-title')}>
            <h1>Bảng Xếp Hạng Podcast</h1>
            <div className={cx('pos-icon')}>
              <span>TẤT CẢ</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className={cx('podcast-rank-items')}>
           <div className={cx('rank-items')}>
                <div className={cx('rank-item')}>
                  <div className={cx('rank-item-left')}>
                    <div className={cx('nub-rank')}>
                      <p>1</p>
                    </div>
                    <div className={cx('img-rank')}>
                      <img className={cx('img-rankTop')} src="/imgradio/podcast/1.jpg" alt="img-Rank" />
                      <div className={cx('icon-rank')}>
                        <FontAwesomeIcon className={cx('play-rank')} icon={faPlay} />
                      </div>
                    </div>
                  </div>
                  <div className={cx('rank-item-right')}>
                    <span>#34 Tình bạn là một sự đầu tư khôn ngoan | Đắp Chăn Nằm Nghe Tun Kể</span>
                    <p className={cx('active-rankCas')}>Đắp Chăn Nằm Nghe Tun Kể</p>
                    <p>08/01/2023 . 10 phút</p>
                  </div>
                </div>
           </div>
           <div className={cx('rank-items')}>
                <div className={cx('rank-item')}>
                  <div className={cx('rank-item-left')}>
                    <div className={cx('nub-rank')}>
                      <p>1</p>
                    </div>
                    <div className={cx('img-rank')}>
                      <img className={cx('img-rankTop')} src="/imgradio/podcast/1.jpg" alt="img-Rank" />
                      <div className={cx('icon-rank')}>
                        <FontAwesomeIcon className={cx('play-rank')} icon={faPlay} />
                      </div>
                    </div>
                  </div>
                  <div className={cx('rank-item-right')}>
                    <span>#34 Tình bạn là một sự đầu tư khôn ngoan | Đắp Chăn Nằm Nghe Tun Kể</span>
                    <p className={cx('active-rankCas')}>Đắp Chăn Nằm Nghe Tun Kể</p>
                    <p>08/01/2023 . 10 phút</p>
                  </div>
                </div>
           </div>
          </div>
        </div>
        <div className={cx('podcast-practice')}>
        <div className={cx('cont-title')}>
            <h1>Các Tập Nổi Bật</h1>
            {/* <div className={cx('pos-icon')}>
              <span>TẤT CẢ</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </div> */}
          </div>
          <div className={cx('podcast-practice-items')} 
          style={{ backgroundImage: }}
          >
           <div className={cx('practice-items')}>
                <div className={cx('practice-item')}>
                  <div className={cx('practice-item-left')}>
                    <div className={cx('nub-practice')}>
                      <p>1</p>
                    </div>
                    <div className={cx('img-practice')}>
                      <img className={cx('img-practice-Top')} src="/imgradio/podcast/1.jpg" alt="img-practice-" />
                      <div className={cx('icon-practice')}>
                        <FontAwesomeIcon className={cx('play-practice')} icon={faPlay} />
                      </div>
                    </div>
                  </div>
                  <div className={cx('practice-item-right')}>
                    <span>#34 Tình bạn là một sự đầu tư khôn ngoan | Đắp Chăn Nằm Nghe Tun Kể</span>
                    <p className={cx('active-practice-Cas')}>Đắp Chăn Nằm Nghe Tun Kể</p>
                    <p>08/01/2023 . 10 phút</p>
                  </div>
                </div>
           </div>
           <div className={cx('practice-items')}>
                <div className={cx('practice-item')}>
                  <div className={cx('practice-item-left')}>
                    <div className={cx('nub-practice')}>
                      <p>1</p>
                    </div>
                    <div className={cx('img-practice')}>
                      <img className={cx('img-practice-Top')} src="/imgradio/podcast/1.jpg" alt="img-practice-" />
                      <div className={cx('icon-practice')}>
                        <FontAwesomeIcon className={cx('play-practice')} icon={faPlay} />
                      </div>
                    </div>
                  </div>
                  <div className={cx('practice-item-right')}>
                    <span>#34 Tình bạn là một sự đầu tư khôn ngoan | Đắp Chăn Nằm Nghe Tun Kể</span>
                    <p className={cx('active-practice-Cas')}>Đắp Chăn Nằm Nghe Tun Kể</p>
                    <p>08/01/2023 . 10 phút</p>
                  </div>
                </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
