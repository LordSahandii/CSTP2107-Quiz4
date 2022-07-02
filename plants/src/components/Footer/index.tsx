import Styles from "@/styles/Footer.module.sass"

export default function Footer(){

    return(
        <div className={Styles.container}>
            <div className={Styles.firstLine}>
            <button className={Styles.buttons}>contact us</button>
            <button className={Styles.buttons}>about us</button>
            <button className={Styles.buttons}>subscribe us</button>
            </div>
            <div className={Styles.secondLine}>
                <button className={Styles.backtotop}>back to top</button>
                <span className={Styles.toby}>@ Toby's Plant Bros Company</span>
            </div>
            
        </div>
    )
}