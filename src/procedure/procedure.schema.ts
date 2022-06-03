import { timeStamp } from 'console';
import * as mongoose from 'mongoose';

export const ProcedureSChema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    value: { type: Number, required: true },
    imagem: { type: String, required: true },
    created_at: { type: Date, required: true },
    deleted_at: { type: Date, required: false },
    updated_at: { type: Date, required: false },
    idResponsible: { type: Number, required: true },
    idType: { type: Number, required: true },
});

export interface Student {
    id: number,
    title: string,
    description: string,
    value: number,
    imagem: string,
    created_at: Date,
    deleted_at: Date,
    updated_at: Date,
}