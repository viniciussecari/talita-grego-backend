import { Injectable, NotFoundException, PreconditionFailedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Procedures, ProceduresDocument } from './procedures.model';

@Injectable()
export class ProceduresService {
    constructor(
        @InjectModel(Procedures.name) private procedureModel: Model<ProceduresDocument>,
    ) { }

    async getProcedures(name: string, type: number) {
        const procedureModel = await this.procedureModel.find({ title: name, type: type }).exec();
        return procedureModel.map(procedure => ({
            id: procedure._id,
            title: procedure.title,
            description: procedure.description,
            value: procedure.value,
            image: procedure.image
        }));
    }

    async createProcedure(procedure: Procedures): Promise<Procedures> {
        const procedureModel = new this.procedureModel({
            title: procedure.title,
            description: procedure.description,
            value: procedure.value,
            image: procedure.image,
            created_at: new Date(),
            idResponsible: procedure.idResponsible,
            idType: procedure.idType,
        })

        return await procedureModel.save();
    }

    async updateProcedure(id: string, procedure: Procedures): Promise<Procedures> {
        const updatedProcedure = await this.procedureModel.findById(id);

        if (!updatedProcedure) {
            throw new NotFoundException('Could not find procedure.');
        }

        if (procedure.title) {
            updatedProcedure.title = procedure.title;
        }

        if (procedure.description) {
            updatedProcedure.description = procedure.description;
        }

        if (procedure.value) {
            updatedProcedure.value = procedure.value;
        }

        if (procedure.image) {
            updatedProcedure.image = procedure.image;
        }

        if (procedure.idResponsible) {
            updatedProcedure.idResponsible = procedure.idResponsible;
        }

        if (procedure.idType) {
            updatedProcedure.idType = procedure.idType;
        }

        updatedProcedure.save();

        return {
            title: updatedProcedure.title,
            description: updatedProcedure.description,
            image: updatedProcedure.image,
            updated_at: new Date(),
            value: updatedProcedure.value,
            idType: updatedProcedure.idType,
            idResponsible: updatedProcedure.idResponsible,
            created_at: updatedProcedure.created_at,
            deleted_at: updatedProcedure.deleted_at,
        };
    }

    async deleteProcedure(id: string) {
        const result = await this.procedureModel
            .deleteOne({ _id: id })
            .exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not remove teacher.');
        }
    }
};