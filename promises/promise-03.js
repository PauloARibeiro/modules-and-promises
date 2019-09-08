export const promiseExample03 = () => {
  /* ************************ */
  // ASYNC AWAIT
  /* ************************ */
  const getIngredients = async (name, ms = 0) => {
    const ingredients = {
      chocolate: '🍫',
      sugar: '🍬',
      flour: '🌾',
      eggs: '🥚',
      milk: '🥛'
    }

    return ingredients[name]
  }

  const makeCookies = async () => {
    const flour = await getIngredients('flour')
    const milk = await getIngredients('milk')

    return [flour, milk]
    // return Promise.all([flour, milk])
  }

  makeCookies().then(response => console.log(response))
}
