import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {

    // 
    // const {resName , cuisine} = props;

    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} =  resData;

    return (
        <div className='res-card' style={{backgroundColor : "#f0f0f0"}}>
            <img className="res-logo" alt='Restaurent' 
            src= { CDN_URL + cloudinaryImageId}/>
    
            {/* <h3>{resName}</h3>
            <h4>{cuisine}</h4> */}

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurentCard;