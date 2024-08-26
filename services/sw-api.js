const baseUrl = 'https://swapi.dev'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json();
}

export const getStarshipNumberFromUrl = (url) => {
  const lastSlashIndex = url.lastIndexOf('/', url.length-2)
  return url.substring(lastSlashIndex+1, url.length-1);
};

export async function getStarShipDetails(starShipNumber) {
  const res = await fetch(`${baseUrl}/api/starships/${starShipNumber}`)
  return res.json();
}

export async function getPilotList(pilotList) {
  const pilotData = []
  for(const pilot of pilotList){
    const res = await fetch(pilot)
    const data = await res.json()
    pilotData.push(data)
  }
  return pilotData
}