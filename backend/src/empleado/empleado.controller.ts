import { Controller, Get, Param } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { ResponseMsj } from 'backend/util/interfaces/bdResponse';
import { EmpleadoFilter } from 'backend/util/interfaces/empleadoInter';

/**
 * para hacer solicitudes desde el frontend
 */
@Controller('empleados')
export class UsuarioController {
  constructor(private empleadoService: EmpleadoService) {}

  @Get(':valor')
  async existUser(@Param('valor') data: EmpleadoFilter): Promise<ResponseMsj> {
    return this.empleadoService.filtrarEmpleados(data);
  }
}
