import { RegistroRepository } from '../../core/repositories/RegistroRepository';
import { Registro } from '../domain/Registro';

export class RegistroService {
  async getAll(): Promise<Registro[]> {
    return await RegistroRepository.find();
  }

  async getById(id: number): Promise<Registro | null> {
    return await RegistroRepository.findOneBy({ id });
  }

  async create(data: Partial<Registro>): Promise<Registro> {
    const registro = RegistroRepository.create(data);
    return await RegistroRepository.save(registro);
  }

  async update(id: number, data: Partial<Registro>): Promise<Registro | null> {
    const registro = await this.getById(id);
    if (!registro) return null;
    RegistroRepository.merge(registro, data);
    return await RegistroRepository.save(registro);
  }

  async delete(id: number): Promise<boolean> {
    const result = await RegistroRepository.delete(id);
    return result.affected !== 0;
  }
}
