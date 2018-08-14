import { expect } from "chai"
import Pantry from "../lib/pantry"
describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry
    it('should have empty stock', ()=>{
      expect(pantry.stock).to.be.empty
    })

  })

  describe('functions', ()=>{
    describe('restock', ()=>{
      it('should change the quantity of the specified item', ()=>{
        const pantry = new Pantry
        expect(pantry.stock).to.be.empty

        let name = "cheese"
        let quantity = 10

        pantry.restock(name, quantity)

        expect(pantry.stock[name]).to.equal(quantity)
      })
    })
    describe('stockCheck', ()=>{
      it('should return the quantity in stock of a given item', ()=>{
        const pantry = new Pantry
        expect(pantry.stock).to.be.empty

        let name = "cheese"
        let quantity = 10

        pantry.restock(name, quantity)

        expect(pantry.stockCheck(name)).to.equal(quantity)
      })
    })
  })
})