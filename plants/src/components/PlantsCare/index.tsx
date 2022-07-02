import Styles from "@/styles/PlantsFinder.module.sass"
import SearchBar from "../SearchBar"
import Image from 'next/image'

export default function PlantsCare(){
    return(
        <div>
            <SearchBar/>
            <h1 className={Styles.title}>PLANT'S CARE</h1>
            <div className={Styles.plantsShow}>
                <div className={Styles.plants}>
                    <Image src="/ToolPlant1.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>TOOL A</h1>
                        <p>To take good care of your plants and Toby together.</p>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/ToolPlant2.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>TOOL B</h1>
                        <p>To take good care of your plants and Toby together.</p>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/ToolPlant3.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>TOOL C</h1>
                        <p>To take good care of your plants and Toby together.</p>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/ToolPlant4.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>TOOL D</h1>
                        <p>To take good care of your plants and Toby together.</p>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/ToolPlant5.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>TOOL E</h1>
                        <p>To take good care of your plants and Toby together.</p>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/ToolPlant6.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>PLANT F</h1>
                        <p>To take good care of your plants and Toby together.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}