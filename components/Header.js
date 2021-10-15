import styles from '../styles/Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMoon} from '@fortawesome/free-regular-svg-icons'
import { faSun} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {useTheme} from 'next-themes'
const Header = () => {
    const {theme, setTheme}= useTheme()
    return (
        <div className={
            styles.Header
        }>
            <Link href='/' passHref={true}>
            <h2>Where In The World?</h2></Link>
            <h4 className={styles.darkToggle} onClick={()=> theme==='light'?setTheme('dark'):setTheme('light')}>
                <FontAwesomeIcon className={styles.MoonIcon} icon={theme==='light'?faMoon:faSun}/>
                {theme==='light'?"Dark":"Light"} Mode
            </h4>


        </div>
    )
}

export default Header
