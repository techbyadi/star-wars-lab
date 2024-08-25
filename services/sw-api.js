const baseUrl = 'https://swapi.dev'

export async function getAllStarships(params) {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json();
}