import { Router } from 'express';
import { testarConexao, cadastrarUsuario, validarUsuario } from '../controller/authController.js';

const router = Router();

router.get('/teste-db', testarConexao);
router.post('/cadastro', cadastrarUsuario);
router.post('/validar', validarUsuario);

export default router;