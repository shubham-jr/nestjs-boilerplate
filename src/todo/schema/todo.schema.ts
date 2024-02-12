import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TODO } from 'common/constants/common.constant';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Todo extends Document {
  @Prop({ required: true })
  readonly name: string;

  @Prop({ required: true })
  readonly date: string;

  @Prop({ required: true })
  readonly description: string;

  @Prop({
    type: typeof TODO,
    default: TODO.IN_PROGRESS,
    enum: TODO,
  })
  readonly status: typeof TODO;

  @Prop({
    type: typeof TODO,
    default: TODO.IN_PROGRESS,
    enum: TODO,
    select: false,
  })
  readonly pastStatus: typeof TODO;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
