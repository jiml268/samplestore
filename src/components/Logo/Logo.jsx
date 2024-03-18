import logo from '../../images/your-logo-here-black.png'
import styles from './Logo.module.css'
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link className={styles.link} to="/">
            <button className={styles.logoButton}> <img className={styles.logoImage}  src={logo} alt = "logo" /> Your Store Name</button>
        </Link>
    )
}
        
    export default Logo 