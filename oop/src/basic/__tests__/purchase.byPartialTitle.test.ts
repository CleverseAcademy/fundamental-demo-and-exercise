import { Book } from '../classes/book.class'
import { Person } from '../classes/person.class'
import { BookStore } from '../classes/store.class'
import { buyAllBooksByTitlePartialName } from '../purchase'
import { PERSON_ID, STORE_ID, booksTestCase, mockBWKdata } from './mockData'

let store: BookStore

let person: Person

beforeEach(() => {
  store = new BookStore(mockBWKdata, [1000], STORE_ID)
  person = new Person('Test user', PERSON_ID, [1000, 1000])
})

describe('buyAllBooksByTitlePartialName', () => {
  it.each([
    ['DD', 820, 2180, [4, 5]],
    ['AB', 1030, 1970, [1, 5]],
    ['AA', 500, 2500, [0, 1, 2, 3]],
  ])(
    "[Mandatory] Should purchase all books that contain '%s' within title",
    (partialName, pRemainingCash, sRemainingCash, booksIndices) => {
      buyAllBooksByTitlePartialName(person, store, partialName)
      expect(person.totalCash).toBe(pRemainingCash)
      expect(store.totalCash).toBe(sRemainingCash)
      booksIndices.forEach((index) => {
        const fieldMappedPersonalItem: Pick<
          Book,
          'ISBN' | 'title' | 'price'
        >[] = person.items.map(({ title, ISBN, price }) => ({
          title,
          ISBN,
          price,
        }))
        expect(fieldMappedPersonalItem).toContainEqual(booksTestCase[index])
        expect(store.isAvailable(booksTestCase[index].ISBN)).toBeFalsy()
      })

      const ownerIds = person.items.map((i) => i.ownerId)
      expect(ownerIds).toEqual(Array(booksIndices.length).fill(PERSON_ID))
    },
  )
})
