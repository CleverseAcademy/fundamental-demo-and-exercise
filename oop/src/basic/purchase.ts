import { Person } from "./classes/person.class";
import { BookStore } from "./classes/store.class";


export const buyAllBooksByTitlePartialName = (p: Person, s: BookStore, partialTitle: string) => {
  // TODO: combine all logics that necessary to transfer cash from person and get an item from store, if there are insufficient cash then both cash and items in store should remain the same
}

export const buyABookByISBN = (p: Person, s: BookStore, ISBN: number) => {
  // TODO: combine all logics that necessary to transfer cash from person and get an item from store, if there are insufficient cash then both cash and items in store should remain the same
}

export const buyFirstNBookThatContainTitle = (p: Person, s: BookStore, n: number, partialTitle: string) => {
  // TODO: combine all logics that necessary to transfer cash from person and get an item from store, if there are insufficient cash then both cash and items in store should remain the same
}