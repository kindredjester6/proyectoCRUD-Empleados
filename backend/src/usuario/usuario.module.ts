import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { BdService } from 'backend/src/database/database.service';

/**
 * El modulo que el controlador llama
 */
@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, BdService],
})
export class UsuarioModule {}
