import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Banco de dados PostgreSQL conectado com sucesso!');
});

pool.on('error', (err) => {
  console.error('Erro no PostgreSQL:', err);
});

export default pool;