const baseUrl = 'https://swapi.dev'

export async function getAllStarships(params) {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json();
}

export const getStarshipNumberFromUrl = (url) => {
  return url.substring(url.lastIndexOf('/'), url.length-2);
};


export async function getStarShipDetails(starShipNumber) {
  const res = await fetch(`${baseUrl}/api/starships/${starShipNumber}`)
  return res.json();
}