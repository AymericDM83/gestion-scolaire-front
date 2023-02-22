import { Classgroup } from './classgroup.model';
import { Establishment } from './establishment.model';
import { Subject } from './subject.model';

export interface Professor {
  id: number;
  lastname: string;
  firstname: string;
  dateOfBirth: Date;
  subjects: Subject[];
  principalClass: Classgroup;
  establishment: Establishment;
}
