import { Establishment } from './establishment.model';
import { Professor } from './professor.model';
import { SubjectEnumerationColors } from './subject.enumeration.colors';
import { Subject } from './subject.model';

export interface EventIfo {
  startHour: Date;
  endHour: Date;
  professor: Professor;
  subject: Subject;
  color: SubjectEnumerationColors;
  establishment: Establishment;
}
