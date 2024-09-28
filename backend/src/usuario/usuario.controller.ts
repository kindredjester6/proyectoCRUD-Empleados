import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from 'backend/util/interfaces/usuarioInter';
import { ResponseMsj } from 'backend/util/interfaces/bdResponse';

/**
 * para hacer solicitudes desde el frontend
 */
@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  async existUser(@Body() data: Usuario): Promise<ResponseMsj> {
    return this.usuarioService.checkCredentials(data);
  }
}
