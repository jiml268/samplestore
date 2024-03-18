import styles from "./SearchBar.module.css"
import { useState } from "react";
import symboldefs from '../../images/symbol-defs.svg'

function SearchBar() {
    const [searchInfo, setSearchInfo] = useState("");

    const searchEntered = e => {
        setSearchInfo(e.target.value)
    }

    

    const SeachClick = e => {

        if (searchInfo === '') { return }
        e.preventDefault()
}

    return (
        <div className={styles.searchBar}>
           
       <form className={styles.searchForm}>
                
      <label>
        <input
          type="text" 
          value={searchInfo}
                        onChange= {searchEntered}
                            placeholder="What can we help you find?"
                            className={styles.searchBox}
        />
                </label>
                {/* <svg className={`${styles.svgimage}  ${styles.micOn}`} >
       <use href={`${symboldefs}#icon-mic`} />
   </svg> */}
                
                <button className={styles.seachButton}  onClick={SeachClick}>  <svg className={`${styles.svgimage}  `} >
       <use href={`${symboldefs}#icon-search`} /> 
                    </svg>  </button>
                 
    </form>
        </div>
    )

}
        
    export default SearchBar