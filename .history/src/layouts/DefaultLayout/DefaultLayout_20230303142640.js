import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import LoadMusic from '~/layouts/components/LoadMusic';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')} style={{
      color: "black",
    }}>
      <div className={cx('bg-web')} tyle={{
      backgroundImage: "url('/imgThemeBody/ChangWook.jpg')",
      color: "black",
    }}></div>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')} >{children}</div>
      </div>
      <LoadMusic />
    </div>
  );
}

export default DefaultLayout;
