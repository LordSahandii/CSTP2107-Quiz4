import Styles from "@/styles/SearchBar.module.sass";
import { ChangeEventHandler } from "react";
import {BiSearchAlt} from "react-icons/bi"
interface Props{
    onChange : (event) =>  void;
}
export default function SearchBar(props:Props){
    return(
        <div className={Styles.container}>
            <div className={Styles.box}>
                <BiSearchAlt/>
                <input type="text" placeholder="saerch" className={Styles.insideSearch} onChange={props.onChange}/>
            </div>
        </div>

    )
}