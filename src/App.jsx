import { useState, useEffect } from "react"
import { getAllStarships } from "../services/sw-api";
import NavBar from "./components/NavBar/NavBar";
import './App.css'

function App() {

  const [starshipsList, setstarShipsList] = useState([]);

  
  useEffect(()=> {
    const fetchStarShips = async () => {
      const starshipData = await getAllStarships()
      console.log("List of Star ships:")
      console.log("Here: ", starshipData.results )
      setstarShipsList(starshipData.results)
    }
    fetchStarShips()
  }, [])

  return (
    <>
      <NavBar />
      <div className="starships-container">
        {starshipsList.map((starShip, index) =>
          <div key={starShip.index} className="starship-card">
            <h3>{starShip.name}</h3>
          </div>
        )}
      </div>
    </>
  )
}

export default App
