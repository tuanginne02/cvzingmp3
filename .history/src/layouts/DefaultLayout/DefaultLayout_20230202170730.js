import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
const cx = classNames.bind(styles)

function DefaultLayout () {
    return(
        <div className={cx('warrper')}>
        </div>
    )
}

export default DefaultLayout;