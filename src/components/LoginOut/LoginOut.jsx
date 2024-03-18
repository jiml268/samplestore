import styles from "./LoginOut.module.css"
import { useState } from "react";
import symboldefs from '../../images/symbol-defs.svg'

function LoginOut() {
    const [isLoggedIn, setisLoggedIn] = useState(false)

    

    const loginStatus = e => {
         e.preventDefault()
        setisLoggedIn(!isLoggedIn)
    }
    return (
        <div className={styles.login}>
            {!isLoggedIn ?
                   
                     <button onClick={loginStatus} className={styles.loginButton}>  <svg className={`${styles.svgimage}  `} >
       <use href={`${symboldefs}#icon-login`} /> 
                </svg> Sign in </button>   
                    :
                     <button onClick={loginStatus} className={styles.loginButton}>  <svg className={`${styles.svgimage}  `} >
       <use href={`${symboldefs}#icon-logout`} /> 
                </svg> Sign out </button>}
            </div>

                
  
    )

}
        
    export default LoginOut