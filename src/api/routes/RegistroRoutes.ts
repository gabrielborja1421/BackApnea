import { Router } from 'express';
import { getAllRegistros, getRegistroById, createRegistro, updateRegistro, deleteRegistro } from '../controllers/RegistroController';

const router = Router();

router.get('/registros', getAllRegistros);
router.get('/registros/:id', getRegistroById);
router.post('/registros', createRegistro);
router.put('/registros/:id', updateRegistro);
router.delete('/registros/:id', deleteRegistro);

export default router;
