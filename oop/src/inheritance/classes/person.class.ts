import { Cash } from '../../common/types/cash.type'
import { Item } from './item.class'

export class Person {
  private _items: Item[] = []

  constructor(
    public name: string,
    public readonly id: number,
    private cash: Cash[],
  ) {}

  public payFor(item: Item): Cash[] {
    throw new Error(
      'TODO: write this function to prepare an appropiate amount of cash to purchase the item',
    )
  }

  public addItem(item: Item): void {
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

  // public buyAnItem(amount: number, item: Item) {
  //   this.items.push(item)
  //   this.cash -= amount
  // }
}
