import Styles from "@/styles/PlantsFinder.module.sass"
import SearchBar from "../SearchBar"
import Image from 'next/image'

export default function PlantsFinder(){
    return(
        <div>
            <SearchBar/>
            <h1 className={Styles.title}>PLANT'S FINDER</h1>
            <div className={Styles.plantsShow}>
                <div className={Styles.plants}>
                    <Image src="/HomrPlant1.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>PLANT A</h1>
                        <p>The best plant for making wishes and curse people.</p>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/HomePlant2.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>PLANT B</h1>
                        <p>The best plant for making wishes and curse people.</p>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/HomePlant3.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>PLANT C</h1>
                        <p>The best plant for making wishes and curse people.</p>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/HomePlant4.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>PLANT D</h1>
                        <p>The best plant for making wishes and curse people.</p>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/HomePlant5.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>PLANT E</h1>
                        <p>The best plant for making wishes and curse people.</p>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/HomePlant6.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                        <h1>PLANT F</h1>
                        <p>The best plant for making wishes and curse people.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}