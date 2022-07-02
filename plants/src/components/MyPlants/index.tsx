import Styles from "@/styles/myPlants.module.sass";
import SearchBar from "../SearchBar";
import Image from "next/image"

export default function MyPlants(){

    return(
        <div>
            <SearchBar/>
            <div className={Styles.box1}>
                <h1 className={Styles.title}>MY PLANTS</h1>
                <button className={Styles.AddButton}>ADD PLANTS</button>
            </div>
            <div className={Styles.plantsShow}>
                <div className={Styles.plants}>
                    <Image src="/ToolPlant1.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>TOOL A</h1>
                        <p>To take good care of your plants and Toby together.</p>
                        <button className={Styles.editButton}>EDIT</button>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/ToolPlant2.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>TOOL B</h1>
                        <p>To take good care of your plants and Toby together.</p>
                        <button className={Styles.editButton}>EDIT</button>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/ToolPlant3.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>TOOL C</h1>
                        <p>To take good care of your plants and Toby together.</p>
                        <button className={Styles.editButton}>EDIT</button>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/ToolPlant4.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>TOOL D</h1>
                        <p>To take good care of your plants and Toby together.</p>
                        <button className={Styles.editButton}>EDIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}