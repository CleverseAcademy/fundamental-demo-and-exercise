import { Person } from "../classes/person.class"

export type Duration = [Date, Date]

export interface Rentable {
  readonly ratePerDay: number
  readonly renter: Person | null
  rent(renter: Person, duration: Duration): void
  isAvailableToRent(d: Duration): boolean
  calculateRentingCost(d: Duration): number
}
