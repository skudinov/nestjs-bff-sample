import {Component as NestComponent} from '@nestjs/common';
import {fetch} from 'fetch-h2';
import {Component} from './components.model';

@NestComponent()
export class ComponentsService {
  findByIds(ids: string[]): Promise<Component[]> {
    return Promise.all(ids.map(id => fetch(`https://localhost:3100/components/${id}`).then(response => response.json())));
  }
}
