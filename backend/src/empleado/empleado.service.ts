import { Injectable } from '@nestjs/common';
import { BdService } from 'backend/src/database/database.service';
import { ResponseMsj } from 'backend/util/interfaces/bdResponse';
import { EmpleadoFilter } from 'backend/util/interfaces/empleadoInter';

/*
    Aca se invocan los Sps
*/

@Injectable()
export class EmpleadoService {
  constructor(private dataBase: BdService) {}

  async filtrarEmpleados(data: EmpleadoFilter): Promise<ResponseMsj> {
    return this.dataBase.filtrarEmpleados(data);
  }
}
