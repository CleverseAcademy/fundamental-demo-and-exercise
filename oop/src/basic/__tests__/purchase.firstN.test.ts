import { Person } from '../classes/person.class'
import { BookStore } from '../classes/store.class'
import { buyFirstNBookThatContainTitle } from '../purchase'
import { PERSON_ID, STORE_ID, booksTestCase, mockBWKdata } from './mockData'

let store: BookStore

let person: Person

beforeEach(() => {
  store = new BookStore(mockBWKdata, [1000], STORE_ID)
  person = new Person('Test user', PERSON_ID, [1000, 1000])
})

describe('buyFirstNBookThatContainTitle', () => {
  it.each([
    ['DD', 1, 1340, 1660, [4]],
    ['AB', 1, 1650, 1350, [1]],
    ['AA', 2, 1200, 1800, [0, 1]],
  ])(
    "[Mandatory] Should purchase first %d books that contain '%s' within title",
    (partialName, n, pRemainingCash, sRemainingCash, booksIndices) => {
      buyFirstNBookThatContainTitle(person, store, n, partialName)
      expect(person.totalCash).toBe(pRemainingCash)
      expect(store.totalCash).toBe(sRemainingCash)
      booksIndices.forEach((index) => {
        expect(person.items).toContainEqual(booksTestCase[index])
        expect(store.isAvailable(booksTestCase[index].ISBN)).toBeFalsy()
      })
      expect(person.items.map((i) => i.ownerId)).toEqual(
        Array(booksIndices.length).fill(PERSON_ID),
      )
    },
  )
})
