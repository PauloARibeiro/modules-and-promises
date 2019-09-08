export const promiseExample04 = () => {
  const ingredients = {
    chocolate: '🍫',
    sugar: '🍬',
    flour: '🌾',
    eggs: '🥚',
    milk: '🥛'
  }

  const getIngredient = name => {
    return delay(1000).then(() => ingredients[name])
  }

  const delay = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const loopIngredients = async () => {
    for (let index = 0; index < ingredients.length; index++) {
      const ingredient = await getIngredient(ingredients[index])
      console.log(ingredient)
    }
  }

  loopIngredients()
}
