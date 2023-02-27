import { EventInput } from '@fullcalendar/core';
import { isFormGroup } from '@angular/forms';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
  },
  {
    id: createEventId(),
  },
  {
    id: createEventId(),
  },
];

export function createEventId() {
  return String(eventGuid++);
}
