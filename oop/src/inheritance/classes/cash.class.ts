import { Cash } from '../../common/types/cash.type'
import { Item } from './item.class'

export class Pocket {
  constructor(private cash: Cash[]) {}

  public payFor(item: Item): Cash[] {
    throw new Error(
      'TODO: write this function to prepare an appropiate amount of cash to purchase the item',
    )
  }

  public addCash(cash: Cash[]): void {
    this.cash.push(...cash)
  }

  public get totalCash() {
    return this.cash.reduce((sum, c) => sum + c, 0)
  }
}
