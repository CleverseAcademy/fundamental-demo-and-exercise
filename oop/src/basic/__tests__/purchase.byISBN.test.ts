import { Person } from '../classes/person.class'
import { BookStore } from '../classes/store.class'
import { buyABookByISBN } from '../purchase'
import { PERSON_ID, STORE_ID, booksTestCase, mockBWKdata } from './mockData'

let store: BookStore

let person: Person

beforeEach(() => {
  store = new BookStore(mockBWKdata, [1000], STORE_ID)
  person = new Person('Test user', PERSON_ID, [1000, 1000])
})

describe('buyABookByISBN', () => {
  it.each([
    [1000, 1650, 1350, 0],
    [1003, 1450, 1550, 3],
    [1005, 1480, 1520, 5],
  ])(
    "[Mandatory] Should purchase the book ISBN = '%d' appropiately",
    (ISBN, pRemainingCash, sRemainingCash, bookIndex) => {
      buyABookByISBN(person, store, ISBN)
      expect(person.totalCash).toBe(pRemainingCash)
      expect(store.totalCash).toBe(sRemainingCash)
      expect(person.items).toContainEqual(booksTestCase[bookIndex])
      expect(store.isAvailable(booksTestCase[bookIndex].ISBN)).toBeFalsy()
      const ownerIds = person.items.map((i) => i.ownerId)
      expect(ownerIds).toEqual([PERSON_ID])
    },
  )
})
