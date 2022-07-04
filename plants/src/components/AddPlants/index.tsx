import Styles from "@/styles/AddPlants.module.sass"
import Image from "next/image"

export default function AddPlants(){

    return(
        <div >
            <h1 className={Styles.title}>Add Plants</h1>
            <div className={Styles.forms}>
                <input type="file" placeholder="Upload your image" className={Styles.upload} />
                <input type="text" placeholder="Name" className={Styles.inputs}/>
                <input type="text" placeholder="Description" className={Styles.inputs}/>
                <button className={Styles.button}>Done</button>
            </div>
        </div>
    )
}