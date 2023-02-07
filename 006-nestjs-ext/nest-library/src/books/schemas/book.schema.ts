import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  public title: string;

  @Prop({ required: true })
  public description: string;

  @Prop({ required: true })
  public authors: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  public user: User;
}

export const BookSchema = SchemaFactory.createForClass(Book);
