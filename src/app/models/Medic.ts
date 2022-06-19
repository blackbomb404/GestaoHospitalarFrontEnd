import { Person } from "./Person";
import { Specialty } from "./Specialty";

export interface Medic extends Person {
  specialty: Specialty;
}
