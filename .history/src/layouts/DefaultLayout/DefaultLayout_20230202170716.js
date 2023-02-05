import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
i
const cx = classNames.bind(styles)

function DefaultLayout () {
    return(
        <div className={cx('warrper')}>
            <h1>DefaultLayout</h1>
        </div>
    )
}

export default DefaultLayout;