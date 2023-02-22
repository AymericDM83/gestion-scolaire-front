import { Establishment } from './establishment.model';
import { Professor } from './professor.model';

export interface Classgroup {
  id: number;
  name: string;
  principalProfessor: Professor;
  establishment: Establishment;
}
