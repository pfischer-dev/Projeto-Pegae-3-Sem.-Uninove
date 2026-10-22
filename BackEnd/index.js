import express from "express";
import cors from "cors";
import authRoutes from './src/routes/authRoutes.js';

const app = express();
const PORT = 3001;

app.use(cors());

// Permite ler requisições de formulários HTML tradicionais e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota de teste
app.get("/api", (req, res) => {
  res.json({ message: "BackEnd conectado com Sucesso!" });
});

// Importante: Registra as rotas de autenticação sob o prefixo /api
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor conectado na porta ${PORT}`);
});