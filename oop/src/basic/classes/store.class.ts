import { Cash } from '../../common/types/cash.type'
import { Book } from './book.class'

interface ICashCheckOut {
  item: Book | null
  change: Cash[]
}

export interface IBookWithKey {
  book: Book
  key: number
}

export class BookStore {
  public static NotFoundISBN: number = -1
  private booksWithKey: IBookWithKey[] = []

  private cash: Cash[] = []
  public readonly id: number

  constructor(booksWithKey: IBookWithKey[], cash: Cash[], id: number) {
    this.booksWithKey = booksWithKey
    this.cash = cash
    this.id = id
  }

  public get totalCash() {
    return this.cash.reduce((sum, c) => sum + c, 0)
  }


  public find(keyword: string): number[] {
    return this.booksWithKey
      .filter(({ book: { title } }) => title.includes(keyword))
      .map(({ book: { ISBN } }) => ISBN)
  }

  public isAvailable(targetISBN: number): boolean {
    return (
      this.booksWithKey.findIndex(({ book: { ISBN } }) => ISBN === targetISBN) >
      -1
    )
  }

  public checkOutByCash(ISBN: number, cash: Cash[]): ICashCheckOut {
    throw new Error("TODO: implement checkout logic from given cash appropiately");
  }
}
