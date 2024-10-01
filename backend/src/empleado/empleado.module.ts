import { Module } from '@nestjs/common';
import { UsuarioController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { BdService } from 'backend/src/database/database.service';

/**
 * El modulo que el controlador llama
 */
@Module({
  controllers: [UsuarioController],
  providers: [EmpleadoService, BdService],
})
export class EmpleadoModule {}
