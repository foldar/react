import "./weatherly.css";
import {useState, useEffect } from 'react';

let Latitude = 0;
let Longitude = 0;

function Weatherly() {
    const [data, setData] = useState(null);


    navigator.geolocation.getCurrentPosition(function(pos){
      Latitude=pos.coords.latitude;
      Longitude=pos.coords.longitude;
      console.log(pos.coords.latitude);
      console.log(pos.coords.longitude);
      console.log(Latitude);
      console.log(Longitude);
    })
    console.log(Latitude);
    console.log(Longitude);

 //   let url = new URL('http://api.weatherapi.com/v1/current.json?key=a6ddf4f347da4c3f87e104349220707&q='+Latitude +','+Longitude);
 //   console.log(url);

//        useEffect(() => {
//          fetchData();
//        }, []);

//        const fetchData = async () => {
//          try {
//            const response = await fetch(url);
//            const jsonData = await response.json();
//            setData(jsonData);
//            console.log (jsonData);
//          } catch (error) {
//            console.error('Error fetching data:', error);
//          }
//        };
//







// Function to collect jason data from url without axios
//    const getApiData = async () => {
//    try {
//        const response = await fetch(url).then((response) => response.json());
//        console.log(response);
//        }
//        catch (error) {console.log("Error fetching data.");}
    // update the state
//    setUsers(response);
//  };

    return (
        <div id="Table">
              <div>WEATHERLY</div>
        </div>
    )
//})
}

export default Weatherly;