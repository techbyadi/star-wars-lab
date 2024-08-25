import { useState, useEffect } from "react"
import { getAllStarships, getStarshipNumberFromUrl } from "../services/sw-api";
import NavBar from "./components/NavBar/NavBar";
import { Link } from "react-router-dom"
import StarshipDetails from "../pages/StarshipDetails/StarshipDetails";
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

function App() {

  const [starshipsList, setstarShipsList] = useState([]);
  
  useEffect(()=> {
    const fetchStarShips = async () => {
      const starshipData = await getAllStarships()
      setstarShipsList(starshipData.results)
    }
    fetchStarShips()
  }, [])

  if(!starshipsList.length) return <h1>Loading Star Wars Starships</h1>

  return (
    <>
      <NavBar />
      <Routes>

      <Route 
          path="/" 
          element={
            <div className="starships-container">
              {starshipsList.map((starShip, index) => {
                const starShipNumber = getStarshipNumberFromUrl(starShip.url)
                return (
                  <Link key={index} to={`/starshipDetails/${starShipNumber}`}>
                    <div className="starship-card">
                      <h3>{starShip.name}</h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          } 
        />

          <Route path="/starshipDetails/:starShipNumber" element = {<StarshipDetails/>}/>
        
      </Routes>


      
    </>
  )
}

export default App
