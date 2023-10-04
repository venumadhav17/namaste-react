import { CDN_URL } from "../utilis/constants";

const RestaurantCard = (props) => {
    const {resData} = props

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData?.info;

    return (
        <div className='res-card' style={{ backgroundColor: "#f0f0f0",}}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className='name'>{name}</h3>
            <h4 className='cuisines'>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo.replace('₹','').split(' ').map(rupee => rupee.includes(Number(rupee))?rupee:'')}</h4>
        </div>
    )
}

export default RestaurantCard;