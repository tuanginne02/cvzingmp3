
import  className from 'classname/bind';
import styles from './Following.module.scss'

const cx = className.bind(styles)

function Following () {
    return (
        <div className={cx('following')}>
            <h1>Following</h1>
        </div>
    )
}


export default Following;