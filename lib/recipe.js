export default class Recipe {
  constructor (name) {
    this.name = name
    this.ingredients = {}
  }

  addIngredient (ingredientName, amount) {
    return this.ingredients[ingredientName] = amount
  }

  ingredientTypes () {
    return Object.keys(this.ingredients)
  }

  amountRequired (ingredientName) {
    return this.ingredients[ingredientName] || 0
  }
}

