export const promiseExample02 = () => {
  /* ************************ */
  // PROMISE ALL AND RACE
  /* ************************ */

  const getFlour = new Promise((resolve, reject) => {
    const isThereFlour = true

    isThereFlour ? resolve('I got the 🌾') : reject('No 🌾')
  })

  const getSugar = new Promise((resolve, reject) => {
    const isThereSugar = true

    isThereSugar ? resolve('I got the 🍬') : reject('No 🍬')
  })

  const getChocolate = new Promise((resolve, reject) => {
    const isThereChocolate = true

    isThereChocolate ? resolve('I got the 🍫') : reject('No 🍫')
  })

  // WAIT FOR ALL
  Promise.all([getFlour, getSugar, getChocolate])
    .then(response => console.log(response))
    .catch(response => console.log(response))

  // FIRST ONE TO RESOLVE
  Promise.race([getFlour, getSugar, getChocolate])
    .then(response => console.log(response))
    .catch(response => console.log(response))

  //WAITS FOR ALL PROMISES TO BE SETTLED
  Promise.allSettled([getFlour, getSugar, getChocolate]).then(response => console.log(response))
}
