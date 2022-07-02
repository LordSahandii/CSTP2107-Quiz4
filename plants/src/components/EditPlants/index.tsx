import Image from "next/image"
export default function AddPlants(){

    return(
        <div>
            <h1>Edit PLants</h1>
            <div >
                <Image  src="./HomePlant2"/>
                <div>
                    <div>
                        <h2>Name</h2>
                        <input type="text"/>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <input type="text"/>
                    </div>
                    <button>Done</button>
                    <button>Delete</button>

                </div>
            </div>
        </div>
    )
}