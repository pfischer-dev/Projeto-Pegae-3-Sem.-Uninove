import pool from '../config/database.js';

export const autenticarUsuario = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'Informe e-mail e senha.' });
  }

  try {
    const { rows } = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (rows.length === 0) {
      return res.status(401).json({ mensagem: 'Usuário ou senha inválidos.' });
    }

    const usuario = rows[0];

    if (usuario.senha !== senha) {
      return res.status(401).json({ mensagem: 'Usuário ou senha inválidos.' });
    }

    return res.status(200).json({
      mensagem: 'Login realizado com sucesso!',
      usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email }
    });
  } catch (error) {
    console.error('Erro na autenticação:', error);
    return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
  }
};