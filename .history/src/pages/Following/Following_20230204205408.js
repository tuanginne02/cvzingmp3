
import  className from 'className/bind';
import styles from './Following.module.scss'

const cx = className.bind(styles)

function Following () {
    return (
        <div className={cx('following')}>
            <h1>F</h1>
        </div>
    )
}