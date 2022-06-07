import { Body, Controller, Get, Post, Patch, Delete, Param, UseGuards, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { Procedures } from './procedures.model';
import { ProceduresService } from './procedures.service';

@Controller('procedure')
export class ProceduresController {
    constructor(private readonly procedureService:ProceduresService){}

    @Get('/')
    async getProcedures(@Query('name') name: string, @Query('type') type: number) {
        var result = await this.procedureService.getProcedures(name, type);
        return result;
    }
    
    @Post('/create')
    @UseGuards(AuthGuard("jwt"))
    async createProcedure(@Body() procedure: Procedures) {
        await this.procedureService.createProcedure(procedure);
        return 'Procedimento adicionado com sucesso !';
    }
    
    @Patch('/update/:id')
    @UseGuards(AuthGuard("jwt"))
    async updateProcedure(@Param('id') id: string, @Body() procedure: Procedures) {
        await this.procedureService.updateProcedure(id, procedure);
        return `Procedimento atualizado com sucesso !`;
    }
    
    @Delete('/delete/:id')
    @UseGuards(AuthGuard("jwt"))
    async deleteProcedure(@Param('id') id: string) {
        await this.procedureService.deleteProcedure(id);
        return `Procedimento deletado com sucesso !`;
    }
}
