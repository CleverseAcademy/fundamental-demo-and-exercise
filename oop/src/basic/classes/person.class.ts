import { Cash } from '../../common/types/cash.type'
import { Book } from './book.class'

export class Person {
  private _items: Book[] = []

  constructor(
    public name: string,
    public readonly id: number,
    private cash: Cash[],
  ) {}

  // public changeId(newId: number) {
  //   this.id = newId
  // }

  public payFor(item: Book): Cash[] {
    throw new Error(
      'TODO: write this function to prepare an appropiate amount of cash to purchase the item',
    )
  }

  private prepareCashForAmount(amt: number): Cash[] {
    // TODO: Add logic to return an array of cash that is adequate but not excessive for the specified amount.
    return []
  }

  public addItem(item: Book): void {
    this._items.push(item)
  }

  public addCash(cash: Cash[]): void {
    this.cash.push(...cash)
  }

  public get totalCash() {
    return this.cash.reduce((sum, c) => sum + c, 0)
  }

  public get items() {
    return [...this._items]
  }

  // public buyAnItem(amount: number, item: Book) {
  //   this._items.push(item)
  //   this.cash -= amount
  // }
}
