import { Entity } from "./Entity";

export interface Person extends Entity {
  firstname: string;
  lastname: string;
}
