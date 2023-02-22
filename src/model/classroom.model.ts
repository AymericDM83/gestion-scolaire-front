import { Establishment } from './establishment.model';

export interface Classroom {
  id: number;
  name: string;
  capacity: number;
  establishment: Establishment;
}
