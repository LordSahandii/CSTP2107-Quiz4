import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function HomePage() {
  
  return (
    <div className={styles.container}>
      <div className={styles.upperBody}>
        <div className={styles.upperPlant}>
        <Image src="/homePagePlant.png" height={300} width={500} />
        </div>
        <h1 className={styles.head1}>T O B Y ' S PLANTS BROS</h1>
        
        <p className={styles.paragraph}>Discover what you need to know about plants. Take care of Toby and his friends, otherwise, they will not treat you with kindness.</p>

      </div>
      <div className={styles.mainBody}>
        <div>
        <h1>PLANTS FINDER</h1>
        <p className={styles.mainParagraph}>Find the plants in our store and take them home for your Toby.</p>
        </div>
        <div className={styles.zeroPlant}>
        <Image src="/HomeUpperPlant.png" width={180} height={250}></Image>
        </div>
      </div>
      <div className={styles.mainBody2}>
        <div className={styles.firstPic}>
        <Image src="/HomeMainPlant.png" width={1100} height={400} ></Image>
        </div>
        <div className={styles.secondPic}>
        <Image src="/HomeMainPlant2.png" width={300} height={300}></Image>
        </div>
        
      </div>
      <div className={styles.postedPlants}>
        <div className={styles.plants}>
          <Image src="/HomrPlant1.png" width={234} height={449}></Image>
          <div>
            <h1>PLANT A</h1>
            <p>The best plant for making wishes and curse people.</p>
          </div>
        </div>
        <div>
          <Image src="/HomePlant2.png" width={234} height={449}></Image>
          <div>
            <h1>PLANT B</h1>
            <p>The best plant for making wishes and curse people.</p>
          </div>
        </div>

      </div>
      <div className={styles.moreButton}>
        <button className={styles.greenButton}>MORE PLANTS</button>
      </div>

      
    </div>
  )
}
