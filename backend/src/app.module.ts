import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { BdService } from './database/database.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsuarioModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [BdService],
})
export class AppModule {}
