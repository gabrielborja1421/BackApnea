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
    if (!data.presion) {
      data.presion = '120/80';  // Establecer un valor por defecto si no está presente
    }
    const registro = RegistroRepository.create(data);
    return await RegistroRepository.save(registro);
  }

  async update(id: number, data: Partial<Registro>): Promise<Registro | null> {
    try {
      const registro = await this.getById(id);
      if (!registro) return null;
      RegistroRepository.merge(registro, data);
      return await RegistroRepository.save(registro);
    } catch (error) {
      console.error('Error updating registro:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const result = await RegistroRepository.delete(id);
      return result.affected !== 0;
    } catch (error) {
      console.error('Error deleting registro:', error);
      throw error;
    }
  }
}
