import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData"; 

import {useState} from "react";



const Body = () => {

    const [listOfRestaurents , setListOfResraurent] = useState(resList);

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter_btn"
                      onClick={()=> {
                            const filteredRestaurent = listOfRestaurents.filter(
                                (res) => res.avgRating > 4.2
                            );
                            console.log(filteredRestaurent);
                            
                            setListOfResraurent(filteredRestaurent);
                        }
                      }  
                > Top Rated Restaurent
                </button>
            </div>
            <div className='res-container'>
                {/* <RestaurentCard 
                    // one way of creating props
                    // resName = "Burgur King" 
                    // cuisine = "Burgers, American" // props (js object)


                /> */}
                {/* <RestaurentCard resData = {resList[0]} />
                <RestaurentCard resData = {resList[1]} />
                <RestaurentCard resData = {resList[2]} />
                <RestaurentCard resData = {resList[3]} />
                <RestaurentCard resData = {resList[4]} />
                <RestaurentCard resData = {resList[5]} /> */}

                {/* loop over all cards */}

                    {
                        listOfRestaurents.map((restaurent) => {
                           return <RestaurentCard key={restaurent.id} resData = {restaurent} />
                        })

                    }

            </div>
        </div>
    )
}

export default Body;