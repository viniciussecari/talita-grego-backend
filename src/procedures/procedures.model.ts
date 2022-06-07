import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProceduresDocument = Procedures & Document;

@Schema()
export class Procedures {
    @Prop({required: false})
    title: string;

    @Prop({required: false})
    description: string;

    @Prop({required: false})
    value: number;

    @Prop({required: false})
    image: string;

    @Prop({required: false})
    created_at: Date;

    @Prop({required: false})
    deleted_at: Date;
    
    @Prop({required: false})
    updated_at: Date;
    
    @Prop({required: false})
    idResponsible: number;

    @Prop({required: false})
    idType: number;
}

export const ProcedureSchema = SchemaFactory.createForClass(Procedures);