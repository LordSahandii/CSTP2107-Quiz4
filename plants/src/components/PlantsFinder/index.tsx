import Styles from "@/styles/PlantsFinder.module.sass"
import SearchBar from "../SearchBar"
import Image from 'next/image'
import Plant from "@/interfaces/Plant"
import { useState } from "react"

export default function PlantsFinder(){
    const [query, setQuery] = useState("")
    let data : Plant[] = [
        {
            Plantname:"Plant A",
            plantImage: "/homrPlant1.png",
            description:"he best plant for making wishes and curse people."
        },
        {
            Plantname:"Plant B",
            plantImage: "/homePlant2.png",
            description:"he best plant for making wishes and curse people."
        },
        {
            Plantname:"Plant C",
            plantImage: "/homePlant3.png",
            description:"he best plant for making wishes and curse people."
        },
        {
            Plantname:"Plant D",
            plantImage: "/homePlant4.png",
            description:"he best plant for making wishes and curse people."
        },
        {
            Plantname:"Plant E",
            plantImage: "/homePlant5.png",
            description:"he best plant for making wishes and curse people."
        },
        {
            Plantname:"Plant F",
            plantImage: "/homePlant6.png",
            description:"he best plant for making wishes and curse people."
        },
    ]
    const searchHandler = (event) =>{
        setQuery(event.target.value)
    }
    return(
        <div>
            <SearchBar onChange={searchHandler}/>
            <h1 className={Styles.title}>PLANT'S FINDER</h1>
            <div className={Styles.plantsShow}>
                {
                    data.filter(post => {
                        if (query === '') {
                          return post;
                        } else if (post.Plantname.toLowerCase().includes(query.toLowerCase())) {
                          return post;
                        }
                      }).map((post, index) => (
                        <div className={Styles.plants} key={index}>
                            <Image src={post.plantImage} width={234} height={449}></Image>
                            <div className={Styles.captions}>
                                <h1>{post.Plantname}</h1>
                                <p>{post.description}</p>
                            </div>
                        </div>
                      ))
                }
                
                
                
            </div>
        </div>
    )

}

//reference: https://blog.logrocket.com/create-search-bar-react-from-scratch/