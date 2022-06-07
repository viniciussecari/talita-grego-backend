import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcedureSchema, Procedures } from './procedures.model';
import { ProceduresController } from './procedures.controller';
import { ProceduresService } from './procedures.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Procedures.name, schema: ProcedureSchema }]),
  ],
  providers: [ProceduresService],
  controllers: [ProceduresController]
})

export class ProceduresModule { }
