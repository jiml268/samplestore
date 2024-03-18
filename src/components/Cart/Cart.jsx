import styles from "./Cart.module.css"
import { useState } from "react";
import symboldefs from '../../images/symbol-defs.svg'

function Cart() {
    const [showCart, setShowCart] = useState(false)

    

    const displayCart = e => {
         e.preventDefault()
        setShowCart(!showCart)
    }
    return (
        <div className={styles.cart}>
                     <button className={styles.cartButton} onClick={displayCart}>  <svg className={`${styles.svgimage}  `} >
       <use href={`${symboldefs}#icon-cart`} /> 
                </svg> <span className={styles.cartText}>Cart</span> </button>   
                   
                
            {showCart && <h3> show cart</h3>}
             </div> 
    )

}
        
    export default Cart