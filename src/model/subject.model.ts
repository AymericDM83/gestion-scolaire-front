import { Professor } from './professor.model';

export interface Subject {
  id: number;
  name: string;
  color: string;
  professor: Professor[];
}
