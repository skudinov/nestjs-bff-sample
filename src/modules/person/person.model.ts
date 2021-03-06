import {ApiModelProperty} from '@nestjs/swagger';

export class Person {
  @ApiModelProperty({ type: String})
  id: string;
  @ApiModelProperty({ type: String})
  name: string;
}
