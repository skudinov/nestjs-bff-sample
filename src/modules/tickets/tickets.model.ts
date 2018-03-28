// TODO remove relative path
import {Person} from '../person';
import {Component} from '../components';
import {ApiModelProperty} from '@nestjs/swagger';
import {Reference} from '../../common/common.model';
import {IsInt, IsString, IsUUID, ValidateNested} from 'class-validator';

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
  @ApiModelProperty({ type: String })
  mimeType: string;
  @ApiModelProperty({ type: String })
  name: string;
  @ApiModelProperty({ type: String })
  uri: string;
}

export class Ticket {
  @ApiModelProperty({ type: String })
  @IsUUID()
  id: string;

  @ApiModelProperty({ type: Number })
  @IsInt()
  number: number;

  @ApiModelProperty({ type: Number })
  @IsInt()
  year: number;

  @ApiModelProperty({ type: String })
  @IsString()
  subject: string;

  @ApiModelProperty({ type: String })
  @IsString()
  description: string;

  @ApiModelProperty({ type: String })
  @IsString()
  version: string;

  @ApiModelProperty({ type: Reference })
  @ValidateNested()
  reporter: Reference;

  @ApiModelProperty({ type: Reference })
  @ValidateNested()
  processor: Reference;
  status: Status;
  priority: Priority;

  @ApiModelProperty({ type: Attachment, isArray: true })
  @ValidateNested()
  attachments: Attachment[];

  @ApiModelProperty({ type: Reference })
  @ValidateNested()
  component: Reference;
}

export class TicketModel {
  @ApiModelProperty({ type: String })
  id: string;
  @ApiModelProperty({ type: Number })
  number: number;
  @ApiModelProperty({ type: Number })
  year: number;
  @ApiModelProperty({ type: String })
  subject: string;
  @ApiModelProperty({ type: String })
  description: string;
  @ApiModelProperty({ type: String })
  version: string;
  @ApiModelProperty({ type: Person })
  reporter: Person;
  @ApiModelProperty({ type: Person })
  processor: Person;
  // TODO use enum for swagger type definition, see https://github.com/nestjs/swagger/pull/44
  @ApiModelProperty({ type: Status })
  status: Status;
  // TODO use enum for swagger type definition, see https://github.com/nestjs/swagger/pull/44
  @ApiModelProperty({ type: Priority })
  priority: Priority;
  @ApiModelProperty({ type: Attachment, isArray: true })
  attachments: Attachment[];
  @ApiModelProperty({ type: Component})
  component: Component;
}
