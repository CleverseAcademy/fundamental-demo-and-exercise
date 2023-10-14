import { Book } from './classes/book.class'
import { Person } from './classes/person.class'

const person1 = new Person('Tanakorn', 1189532567888, [100, 1000])

const book = new Book(
  'Structure and interpretation of computer programs',
  9780262510875,
  1189532567888,
  50,
  74417,
)

person1.addItem(book.clone())
person1.addItem(book.clone())
person1.addItem(book.clone())

const personalItems = person1.items

personalItems.push(book.clone())

console.log(`personalItems length = ${personalItems.length} \r\n`, person1)

// console.log(person1.totalCash)

// person1.totalCash = 1200

// const newBook: Book = {
//   title: 'Structure and interpretation of computer programs',
//   ISBN: 9780262510875,
// }

// person1.buyAnItem(50, newBook)
// const buySomeBook = (ppl: Person) => {
//   const newBook: Book = {
//     title: "Structure and interpretation of computer programs",
//     ISBN: 9780262510875
//   }
//   ppl.items.push(newBook)
//   ppl.cash -= 50
// }

// buySomeBook(person1)

// const buyAnotherBook = (ppl: Person) => {
//   ppl.cash -= 10000
// }
