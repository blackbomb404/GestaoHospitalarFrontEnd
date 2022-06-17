import { Person } from "./Person";

export interface Medic extends Person {
  specialty: { id: number, value: string};
}
