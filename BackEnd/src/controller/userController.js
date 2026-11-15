import pool from '../config/database.js';

export const testarConexao = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    return res.json({ mensagem: 'Banco conectado!', horaNoBanco: rows[0].now });
  } catch (error) {
    console.error('Erro na conexão:', error);
    return res.status(500).json({ 
      mensagem: 'Erro ao conectar no banco.', 
      detalhe: error.message 
    });
  }
};

export const cadastrarUsuario = async (req, res) => {
  const nome = req.body.nomeCompleto;
  const email = req.body.email;
  const cpf_ra = req.body.cpf_ra || null;
  const telefone = req.body.telephone || null;
  const senha = req.body.password;

  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos obrigatórios.' });
  }

  try {
    const query = `
      INSERT INTO usuarios (nome, email, cpf_ra, telefone, senha) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING id, nome, email, cpf_ra, telefone
    `;
    const { rows } = await pool.query(query, [nome, email, cpf_ra, telefone, senha]);

    return res.status(201).json({
      mensagem: 'Usuário inserido com sucesso!',
      usuario: rows[0]
    });
  } catch (error) {
    console.error('ERRO DETALHADO DO POSTGRES:', error.message);

    if (error.code === '23505') {
      return res.status(400).json({ mensagem: 'E-mail, CPF/RA ou telefone já cadastrado.' });
    }

    return res.status(500).json({ 
      mensagem: 'Erro interno no servidor.', 
      detalhe: error.message 
    });
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