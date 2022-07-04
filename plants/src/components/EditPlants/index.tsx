import Image from "next/image"
import Styles from "@/styles/EditPlants.module.sass"
export default function EditPlants(){

    return(
        <div>
            <h1 className={Styles.title}>Edit Plants</h1>
            <div className={Styles.edit}>
                <Image  src="/HomePlant2.png" width={300} height={300} />
                <div className={Styles.form}>
                    <div >
                        <h2>Name</h2>
                        <input type="text" className={Styles.inputs}/>
                    </div>
                    <div >
                        <h2>Description</h2>
                        <input type="text" className={Styles.inputs} />
                    </div>
                    <br/>
                    <button className={Styles.button}>Done</button>
                    <br/>
                    <button className={Styles.button}>Delete</button>

                </div>
            </div>
        </div>
    )
}