import { AppDataSource } from '../../config/database';
import { Registro } from '../../core/domain/Registro';

export const RegistroRepository = AppDataSource.getRepository(Registro);
