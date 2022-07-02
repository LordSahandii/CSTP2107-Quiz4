import Styles from "@/styles/SearchBar.module.sass";
import {BiSearchAlt} from "react-icons/bi"
export default function SearchBar(){
    return(
        <div className={Styles.container}>
            <div className={Styles.box}>
                <BiSearchAlt/>
                <input type="text" placeholder="saerch" className={Styles.insideSearch}/>
            </div>
        </div>

    )
}