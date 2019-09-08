export const promiseExample04 = () => {
  const itemList = ['☀️', '🌙', '☯️']

  const itemsLoop = async () => {
    for await (const item of itemList) {
      console.log(item)
    }
  }

  const ifItem = async () => {
    if ((await itemList[0]) === '☀️') {
      console.log('It is a sun')
    }
  }

  // https://zellwk.com/blog/async-await-in-loops/

  itemsLoop()
  ifItem()
}
