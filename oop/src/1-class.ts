interface Book {
  title: string
  ISBN: number
}

type Item = Book 

class Person {
  public name: string
  private id: number
  private cash: number
  private items: Item[] = []

  constructor(name: string, id: number, cash: number) {
    this.name = name
    this.id = id
    this.cash = cash
  }

  public buyAnItem(amount: number, item: Item) {
    this.items.push(item)
    this.cash -= amount
  }
}


const person1 = new Person('Tanakorn', 1189532567888, 300)

// const buySomeBook = (ppl: Person) => {
//   const newBook: Book = {
//     title: "Structure and interpretation of computer programs",
//     ISBN: 9780262510875
//   }
//   ppl.items.push(newBook)
//   ppl.cash -= 50
// }

// buySomeBook(person1)

console.log(person1)

// const buyAnotherBook = (ppl: Person) => {
//   ppl.cash -= 10000
// }


