import {ApiModelProperty} from '@nestjs/swagger';
import {IsUUID} from 'class-validator';

export class Reference {
  @ApiModelProperty({ type: String})
  @IsUUID()
  id: string
}
