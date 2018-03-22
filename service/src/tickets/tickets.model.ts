export enum Status {
  NEW = 0,
  IN_PROGRESS = 1,
  AUTHOR_ACTION = 2,
  COMPLETED = 3,
  CONFIRMED = 4,
}

export enum Priority {
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2,
  VERY_HIGH = 3,
}

export class Attachment {
  id: string;
  mimeType: string;
  name: string;
//  ticket: Ticket;
  uri: string;
}

export class Person {
  id: string;
//  name: string;
}

export class Component {
  id: string;
  // name: string;
  // code: string;
  // description: string;
  // parent: Component;
  // subs: Component[];
  // tickets: Ticket[];
  // owner: Person;
}

export class Ticket {
  id: string;
  number: number;
  year: number;
  subject: string;
  description: string;
  version: string;
  reporter: Person;
  processor: Person;
  status: Status;
  priority: Priority;
  attachments: Attachment[];
  component: Component;
}
