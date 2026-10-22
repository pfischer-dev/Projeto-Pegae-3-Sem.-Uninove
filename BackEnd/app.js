import express from "express";
import cors from "cors";
import authRoutes from './src/routes/authRoutes.js';

const app = express();

app.use(cors());

// Suporte para formulários HTML tradicionais (application/x-www-form-urlencoded) e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "BackEnd conectado com Sucesso!" });
});

app.use('/api', authRoutes);

export default app;