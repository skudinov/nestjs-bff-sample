import {Person} from '../person';
import {ApiModelProperty} from '@nestjs/swagger';
import {Reference} from '../../common/common.model';

export class Component {
  @ApiModelProperty({ type: String})
  id: string;
  @ApiModelProperty({ type: String})
  name: string;
  @ApiModelProperty({ type: String})
  code: string;
  @ApiModelProperty({ type: String})
  description: string;
  @ApiModelProperty({ type: Reference})
  parent: Reference;
  @ApiModelProperty({ type: Reference, isArray: true})
  subs: Reference[];
  @ApiModelProperty({ type: Reference, isArray: true})
  tickets: Reference[];
  @ApiModelProperty({ type: Person})
  owner: Person;
}
