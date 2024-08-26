import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStarShipDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";
import PilotList from "../../src/components/PilotList/PilotList";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const {starShipNumber} = useParams()

  useEffect(()=>{
    const fetchStarshipDetails = async () => {
      const starshipDetails = await getStarShipDetails(starShipNumber)
      setStarshipDetails(starshipDetails)
    }
    fetchStarshipDetails();
  }, [starShipNumber])

  if(!starshipDetails.length) return <h1>Loading Starship's details....</h1>

  return (  
    <div className="starships-details-container"> 
      <div className="starship-details-card">
        <h3> NAME: {starshipDetails.name}</h3>
        <h3> MODEL: {starshipDetails.model}</h3>
        <PilotList pilotUrls={starshipDetails.pilots} />
        <Link to = '/'><h3>Return</h3></Link>
      </div>
    </div>
      )
}
export default StarshipDetails