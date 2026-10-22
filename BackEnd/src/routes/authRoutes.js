import { Router } from 'express';
import { cadastrarUsuario, testarConexao, validarUsuario } from '../controller/userController.js';
import { autenticarUsuario } from '../controller/authController.js';

const router = Router();

router.get('/testar-conexao', testarConexao);
router.post('/register', cadastrarUsuario);
router.post('/validar-usuario', validarUsuario);
router.post('/login', autenticarUsuario);

export default router;