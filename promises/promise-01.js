export const promiseExample01 = () => {
  /* ************************ */
  // BASIC PROMISE
  /* ************************ */

  // Example one
  const makeCookie = new Promise((resolve, reject) => {
    const isCookieGood = true

    isCookieGood ? resolve('Succes ✔️') : reject('Error ⚠️')
  })

  makeCookie.then(response => console.log(response)).catch(error => console.log(error))

  console.log('This code will run first 🚗')

  // Example Two
  const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/1/') //NOTE: fetch returns a promise so therefore you must resolve it
    .then(response => response.json()) //NOTE: response.json() also returns a promise
    .then(response => console.log(`Name: ${response.name} 🐕`))
    .catch(error => console.log('Could not catch the pokemon '))
}
