import { Person } from "../classes/person.class";

export interface Saleable {
  readonly price: number;
  soldTo(buyer: Person): void;
}

