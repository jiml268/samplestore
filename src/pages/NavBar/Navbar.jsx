import Cart from "../../components/Cart/Cart"
import CatHamburger from "../../components/CatHamburger/CatHamburger"
import Categories from "../../components/Categories/Categories"
import SearchBar from "../../components/SearchBar/SearchBar"
import LoginOut from "../../components/LoginOut/LoginOut"
import Logo from "../../components/Logo/Logo"
import styles from "./NavBar.module.css"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setWidth } from "../../redux/inventory/inventorySlice"
import { getWidth } from "../../redux/inventory/inventorySelectors"


function NavBar() {
    const dispatch = useDispatch()
    const currWidth = useSelector(getWidth)
   const [w, setW] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setW(window.innerWidth)
        }

       window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useEffect(() => {
         dispatch(setWidth(w))
        }, [dispatch, w, ])



    return (
        <div>
        <div className={styles.nav}>
            <Logo />
            {currWidth < 900 ?
                <CatHamburger /> :
                < Categories />
            }
            {currWidth >= 775 &&
                <SearchBar />}
            <LoginOut />
                    <Cart />
            </div>
            <div className={styles.searchline}>
                {currWidth < 775 &&
                <SearchBar />} 
            </div>
       </div>
        
    )

}
        
    export default NavBar