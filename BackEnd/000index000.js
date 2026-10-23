import express from 'express';
import cors from 'cors';
import pg from 'pg';

const app = express();
app.use(cors());
app.use(express.json());

// Substitua com as credenciais do seu PostgreSQL
const pool = new pg.Pool({
  connectionString: 'postgresql://usuario:senha@localhost:5432/nomedobanco',
});

// Cria a tabela se não existir ao iniciar
pool.query('CREATE TABLE IF NOT EXISTS dados (id SERIAL PRIMARY KEY, texto TEXT)');

app.post('/salvar', async (req, res) => {
  const { texto } = req.body;
  await pool.query('INSERT INTO dados (texto) VALUES ($1)', [texto]);
  res.json({ status: 'ok' });
});

app.listen(3000, () => console.log('Backend rodando na 3000'));