import { Classgroup } from './classgroup.model';
import { Classroom } from './classroom.model';
import { Professor } from './professor.model';

export interface Establishment {
  id: number;
  name: string;
  adress: string;
  type: string;
  phoneNumber: string;
  logo: string;
  professors: Professor[];
  classrooms: Classroom[];
  classgroup: Classgroup[];
}
