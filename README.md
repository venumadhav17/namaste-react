❤️ Namaste React 🙏




/*
* Header 
* - Logo
* - Nav Items
* Body
* - Search
* - Restaurant Container
*   - Restaurant Card
*      - Image
*      - Name of Res, Star Rating, Cuisisne, res location  
* Footer
*  - Copyright
*  - Links
*  - Address
*  - Contact
*/


// normal js variable
    // let listOfRestaurants;

    /* listOfRestaurants -> initialize a data to a variable
    setListOfRestaurants -> for modifying / updating list of state variable */
    // normal js variable
    /* let listOfRestaurants = [{
            "info": {
              "id": "3369",
              "name": "Truffles",
              "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
              "costForTwo": "₹450 for two",
              "cuisines": [
                "American",
                "Desserts",
                "Continental",
                "Italian"
              ],
              "avgRating": 4.5,
            },
        },
        {
            "info": {
                "id": "3380",
                "name": "Truffles",
                "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
                "costForTwo": "₹450 for two",
                "cuisines": [
                  "American",
                  "Desserts",
                  "Continental",
                  "Italian"
                ],
                "avgRating": 4.5,
              }
    }] */
      
    // behind scenes of usestate
    // update data
    // let list=[];
    // list = ["Abc"]; or // list.push(['Abc]);

    // conditional rendering
 if(listOfRestaurants.length === 0) {
    return <Shimmer />
}

 /* const listOfRestaurants = arr[0]
    const setListOfRestaurants = arr[1];
    console.log(listOfRestaurants);
    console.log(setListOfRestaurants); */

2 types of Routing
  - client side routing - only component gets refreshed / gets changed without network call on server side (not making any network call)
  - server side routing - fetches the data, gets new page data while page reloads with respect to the network call ( making network call with respect to api)

// <li>{itemCards[0].card.info.name}</li>
//    <li>{itemCards[1].card.info.name}</li>
//     <li>{itemCards[2].card.info.name}</li>
