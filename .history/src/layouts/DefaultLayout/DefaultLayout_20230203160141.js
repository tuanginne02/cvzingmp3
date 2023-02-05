import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import LoadMusic from '~/layouts/components/LoadMusic';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}    style={{
      backgroundImage: 'url(/img/bgr-colone.jfif)',
      backgroundRepeat: 'no-repeat',
  width:'250px' 
    }}>
      <Header />
      <div
        className={cx('container')}
     
      >
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
      <LoadMusic />
    </div>
  );
}

export default DefaultLayout;
