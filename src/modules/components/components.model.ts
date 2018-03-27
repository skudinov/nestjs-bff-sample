import {Person} from '../person';

export class Component {
  id: string;
  name: string;
  code: string;
  description: string;
  parent: {id: string};
  subs: [{id: string}];
  tickets: {id: string};
  owner: Person;
}
