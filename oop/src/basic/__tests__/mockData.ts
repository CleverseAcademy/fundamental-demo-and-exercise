import { Book } from "../classes/book.class"
import { IBookWithKey } from "../classes/store.class"

export const STORE_ID = 101
export const PERSON_ID = 201

interface BookInfo {
  title: string
  ISBN: number
  price: number
}

export const booksTestCase: BookInfo[] = [
  /* 0 */ { title: 'AAAA', ISBN: 1000, price: 350 },
  /* 1 */ { title: 'AAAB', ISBN: 1001, price: 450 },
  /* 2 */ { title: 'AAAC', ISBN: 1002, price: 150 },
  /* 3 */ { title: 'AAAD', ISBN: 1003, price: 550 },
  /* 4 */ { title: 'DDBC', ISBN: 1004, price: 660 },
  /* 5 */ { title: 'DDAB', ISBN: 1005, price: 520 },
]

export const mockBWKdata = booksTestCase.map<IBookWithKey>(
  ({ title, price, ISBN }) => {
    const key = Math.random() * 10
    const book = new Book(title, ISBN, STORE_ID, price, key)

    return { book, key }
  },
)