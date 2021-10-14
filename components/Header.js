import styles from '../styles/Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMoon} from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
const Header = () => {
    return (
        <div className={
            styles.Header
        }>
            <Link href='/' passHref={true}>
            <h2>Where In The World?</h2></Link>
            <h4 className={styles.darkToggle}>
                <FontAwesomeIcon className={styles.MoonIcon} icon={faMoon}/>
                Dark Mode
            </h4>


        </div>
    )
}

export default Header
