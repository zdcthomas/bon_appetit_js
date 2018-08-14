class Pantry {

  constructor(){
    this.stock = {}
  }

  restock(name, quantity){
    return this.stock[name] = quantity
  }
  
  stockCheck(name){
    return this.stock[name] ? this.stock[name] : 0
  } 

}

export default Pantry