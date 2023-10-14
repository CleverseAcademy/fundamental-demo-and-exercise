import { Saleable } from "../interfaces/saleable.interface";
import { Item } from "./item.class";
import { Person } from "./person.class";

class Stationary extends Item implements Saleable {
  constructor(
    public readonly price: number,
    ownerId: number,
    name: string
  ) {
    super(ownerId, name);
  }
  soldTo(buyer: Person): void {
    throw new Error("Method not implemented.");
  }
  
}