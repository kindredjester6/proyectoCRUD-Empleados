import { Injectable } from '@nestjs/common';
import { BdService } from 'backend/src/database/database.service';
import { Usuario } from '../../util/interfaces/usuarioInter';
import { ResponseMsj } from 'backend/util/interfaces/bdResponse';

/*
    Aca se invocan los Sps
*/

@Injectable()
export class UsuarioService {
  constructor(private dataBase: BdService) {}

  async checkCredentials(data: Usuario): Promise<ResponseMsj> {
    return this.dataBase.checkCredentials(data);
  }
}
