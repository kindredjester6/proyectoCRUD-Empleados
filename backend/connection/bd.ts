import { connect, ConnectionPool, Int, VarChar } from 'mssql';
import { ResponseMsj } from 'backend/util/interfaces/bdResponse';
import { Usuario } from 'backend/util/interfaces/usuarioInter';
/**
 * DataBaseClient
 * @abstract Es una clase de la cual el cliente
 * pueda realizar su conexión y peticiones a la base
 * de datos y realizar sus respectiva solicitudes
 */
export class DataBaseClient {
  private pool: ConnectionPool;
  private config = {};
  /**
   * @constructor Este puede recibir 1 o 5 parametros,
   * de los cuales serán escenciales a la hora de iniciar sesión
   * en la base de datos.
   */
  constructor(config);
  constructor(user, password, server, database, options);
  constructor(...args: string[]) {
    if (args.length == 5) {
      this.config = {
        user: args[0],
        password: args[1],
        server: args[2],
        database: args[3],
        options: args[4],
      };
    } else {
      this.config = args[0];
    }
  }

  /**
   * Conexión con la base de datos
   * @description Se conecta por medio del atributo config o
   * por los atributos de
   */
  public async connect() {
    this.pool = await connect(this.config);
  }
  public async checkCredentials(request: Usuario) {
    const result: ResponseMsj = await this.pool
      .request()
      .input('Username', VarChar(64), request.Username)
      .input('Password', VarChar(64), request.Password)
      .output('outResult', Int)
      .execute('checkCredentials');
    return result;
  }
}
