import { Professor } from './professor.model';
import {SubjectEnumerationColors} from "./subject.enumeration.colors";

export interface Subject {
  id: number;
  name: string;
  color:  SubjectEnumerationColors;
  professor: Professor[];
}
