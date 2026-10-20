import pool from '../config/database.js';

export const testarConexao = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    return res.json({ mensagem: 'Banco conectado!', horaNoBanco: rows[0].now });
  } catch (error) {
    console.error('Erro na conexão:', error);
    return res.status(500).json({ mensagem: 'Erro ao conectar no banco' });
  }
};



export const testarConexao = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    return res.json({ mensagem: 'Banco conectado!', horaNoBanco: rows[0].now });
  } catch (error) {
    console.error('Erro na conexão:', error);
    // Retorna a mensagem de erro exata do Postgres para facilitar o diagnóstico
    return res.status(500).json({ 
      mensagem: 'Erro ao conectar no banco.', 
      detalhe: error.message 
    });
  }
};





export const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
  }

  try {
    const query = `
      INSERT INTO usuarios (nome, email, senha) 
      VALUES ($1, $2, $3) 
      RETURNING id, nome, email, criado_em
    `;
    const { rows } = await pool.query(query, [nome, email, senha]);

    return res.status(201).json({
      mensagem: 'Usuário inserido com sucesso!',
      usuario: rows[0]
    });
  } catch (error) {
    if (error.code === '23505') {
      return res.status(400).json({ mensagem: 'E-mail já cadastrado.' });
    }
    console.error(error);
    return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
  }
};

export const validarUsuario = async (req, res) => {
  const { email } = req.body;

  try {
    const { rows } = await pool.query('SELECT id, nome, email FROM usuarios WHERE email = $1', [email]);

    if (rows.length === 0) {
      return res.status(404).json({ existe: false, mensagem: 'Usuário não encontrado.' });
    }

    return res.status(200).json({ existe: true, usuario: rows[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
  }
};