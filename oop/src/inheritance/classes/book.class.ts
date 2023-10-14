import { Duration, Rentable } from '../interfaces/rentable.interface'
import { Saleable } from '../interfaces/saleable.interface'
import { Item } from './item.class'
import { Person } from './person.class'

class Book extends Item implements Rentable, Saleable {
  private _renter: Person | null = null
  constructor(
    public readonly title: string,
    public readonly ISBN: number,
    public readonly ratePerDay: number,
    public readonly price: number,
    ownerId: number,
  ) {
    super(ownerId, title)
  }
  soldTo(buyer: Person): void {
    throw new Error('Method not implemented.')
  }
  
  isAvailableToRent(d: Duration): boolean {
    throw new Error('TODO: implement the isAvailableToRent method')
  }
  calculateRentingCost(d: Duration): number {
    throw new Error('TODO: implement the calculateRentingCost method')
  }

  public get renter(): Person | null {
    return this._renter
  }

  rent(renter: Person, duration: Duration): void {
    throw new Error('TODO: implement the rent method')
  }
}
