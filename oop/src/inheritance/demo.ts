import { Item } from './classes/item.class'
import { Person } from './classes/person.class'
import { Duration, Rentable } from './interfaces/rentable.interface'
import { Saleable } from './interfaces/saleable.interface'

class Pencil extends Item {
  constructor(public readonly color: string, ownerId: number) {
    super(ownerId, 'Pencil')
  }

  giveTo(p: Person) {
    this.ownerId = p.id
  }
}

const pencil = new Pencil('red', 302)

console.log(pencil.name, pencil.color)
console.log(pencil.ownerId)
pencil.ownerId = 201

class Monitor implements Saleable {

  constructor(public readonly price: number) {
    
  }
  soldTo(buyer: Person): void {
    console.log(`Sold to ${buyer.name}!`)
  }
}


class Tractor implements Rentable {
  constructor(
    public readonly renter: Person | null,
    public readonly ratePerDay: number
  ) {}
  
  isAvailableToRent(d: Duration): boolean {
    return true
  }
  calculateRentingCost(d: Duration): number {
    return 0
  }
  rent(renter: Person, duration: Duration): void {
    
  }
}


