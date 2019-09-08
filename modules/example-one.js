export default class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

export const sayName = cat => {
  return `Meow, my name is ${cat.name} 🐱`;
};

export const sayColor = cat => {
  return `Meow, my color is ${cat.color} 🐱`;
};

/* **************************** */
// CAN EXPORT LIKE THIS AS WELL
/* *************************** */

// export default Cat;
// export { sayName, sayColor };
