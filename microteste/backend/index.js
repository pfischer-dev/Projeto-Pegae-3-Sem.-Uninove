import express from 'express';
import cors from 'cors';
import pg from 'pg';

const app = express();
app.use(cors());
app.use(express.json());

const pool = new pg.Pool({
  connectionString: 'postgresql://postgres:12345678@localhost:5432/dbmicro',
});

// Teste de conexão ao iniciar o backend
pool.connect((err) => {
  if (err) {
    console.error('❌ ERRO AO CONECTAR NO POSTGRESQL:', err.message);
  } else {
    console.log('✅ Conectado ao banco dbmicro com sucesso!');
  }
});

app.post('/salvar', async (req, res) => {
  const { texto } = req.body;
  console.log('📩 Dado recebido do frontend:', texto);

  try {
    const resultado = await pool.query(
      'INSERT INTO teste1 (nota) VALUES ($1) RETURNING *', 
      [texto]
    );
    console.log('💾 Dado gravado no banco:', resultado.rows[0]);
    res.json({ status: 'ok', inserido: resultado.rows[0] });
  } catch (error) {
    console.error('❌ ERRO DE SQL AO INSERIR:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Backend rodando na porta 3000'));