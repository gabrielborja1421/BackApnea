import { Request, Response } from 'express';
import { RegistroService } from '../../core/services/RegistroService';

const registroService = new RegistroService();

export const getAllRegistros = async (req: Request, res: Response) => {
  const registros = await registroService.getAll();
  res.json(registros);
};

export const getRegistroById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const registro = await registroService.getById(Number(id));
  if (!registro) return res.status(404).json({ message: 'Registro not found' });
  res.json(registro);
};

export const createRegistro = async (req: Request, res: Response) => {
  const registro = await registroService.create(req.body);
  res.status(201).json(registro);
};

export const updateRegistro = async (req: Request, res: Response) => {
  const { id } = req.params;
  const registro = await registroService.update(Number(id), req.body);
  if (!registro) return res.status(404).json({ message: 'Registro not found' });
  res.json(registro);
};

export const deleteRegistro = async (req: Request, res: Response) => {
  const { id } = req.params;
  const success = await registroService.delete(Number(id));
  if (!success) return res.status(404).json({ message: 'Registro not found' });
  res.status(204).send();
};
