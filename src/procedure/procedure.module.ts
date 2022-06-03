import { Module } from '@nestjs/common';
import { ProcedureController } from './procedure.controller';
import { ProcedureSChema } from './procedure.schema';
import { ProcedureService } from './procedure.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Procedures', schema: ProcedureSChema }]),
  ],
  controllers: [ProcedureController],
  providers: [ProcedureService]
})
export class ProcedureModule {}
