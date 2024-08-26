import { useEffect, useState } from "react"
import { getPilotList } from "../../../services/sw-api"


const PilotList = ({ pilotUrls }) => {
  const [pilotList, setPilotList] = useState([])
  

  useEffect(()=>{
    const fetchPilotDetails = async () => {
      const pilotNames = await getPilotList(pilotUrls)
      console.log("response: ",pilotNames);
      setPilotList(pilotNames)
    }
    fetchPilotDetails()
  }, [pilotUrls])
  
  return (
    <>
      <h3>Pilot(s): </h3> 
      {pilotList.length ? pilotList.map((pilot, index) => (
      <div key={index}>
        {pilot.name}
      </div>
      )) :  <>No pilots</>}
    </>
  )
}

export default PilotList