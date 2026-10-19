import express from "express";
import cors from "cors";


const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("api/", (req, res) => {
    res.json({message: "BackEnd conectado com Sucesso!"})
});


app.listen(PORT, () => {
    console.log(`Servidor conectado na porta ${PORT}`);
})