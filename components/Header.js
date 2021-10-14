import styles from '../styles/Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMoon} from '@fortawesome/free-regular-svg-icons'
const Header = () => {
    return (
        <div className={
            styles.Header
        }>
            <h2>Where In The World?</h2>
            <h4 className={styles.darkToggle}>
                <FontAwesomeIcon className={styles.MoonIcon} icon={faMoon}/>
                Dark Mode
            </h4>


        </div>
    )
}

export default Header
