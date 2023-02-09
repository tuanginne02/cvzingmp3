
import  className from 'classnames/bind';
import styles from './Following.module.scss'

const cx = className.bind(styles)

function Following () {
    return (
        <div className={cx('following')}>
           <div className={cx('following-container')}>
           <div className={cx('topsinger-bottom')}>
          <div className={cx('prev-next')} onClick={handlOnClickNext}>
            <span
              className={cx('prev')}
              style={{
                color: changeClickColorNext ? '#fff' : 'rgba(89, 84, 96, 0.1)',
              }}
            >
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </span>
            <span className={cx('next')}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                style={{
                  color: changeClickColorNext ? 'rgba(89, 84, 96, 0.5)' : '#fff',
                }}
              />
            </span>
          </div>
          <div className={cx('topsinger-items')}>
            <div className={cx('topsinger-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/1.png" alt="radio" />
              </div>
            </div>
            <div className={cx('topsinger-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/2.png" alt="radio" />
              </div>
            </div>
            <div className={cx('topsinger-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/3.png" alt="radio" />
              </div>
            </div>
            <div className={cx('topsinger-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/4.png" alt="radio" />
              </div>
            </div>
            <div className={cx('topsinger-item')}>
                <div className={cx('item-img')}>
                    <img className={cx('img-radio')} src="/imgsinger/5.png" alt="radio" />                
                </div>   
            </div>
            <div className={cx('topsinger-item')}>
                <div className={cx('item-img')}>
                    <img className={cx('img-radio')} src="/imgsinger/6.png" alt="radio" />               
                </div>  
            </div>
          </div>
        </div>
           </div>
        </div>
    )
}


export default Following;