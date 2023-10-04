import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    // Local State Variable - Super powerful variable
    // const arr = useState(resList);
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
   
   // console.log("Body rendered");

   useEffect(()=>{
    fetchData();
   }, []);
   

 const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627");
    const json = await data.json();
    // console.log(json);
    setListOfRestaurant(json.data);
    //setListOfRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
 };

 

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
            <div className="search">
                <input type="text" className="search-box" onChange={(e) => {
                    setSearchText(e.target.value);
                    
                }}/>
                <button onClick={() => {
                console.log(searchText);
                const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurants(filteredRestaurants);
                }}>Search</button>
                
            </div>
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter((item) => item.info.avgRating > 4.2);
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} > <RestaurantCard  resData={restaurant} /></Link>
                    ))}
            </div>
        </div>
    )
}

export default Body;