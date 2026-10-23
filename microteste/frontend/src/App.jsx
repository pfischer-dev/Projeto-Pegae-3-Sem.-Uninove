import { useState } from 'react';

export default function App() {
  const [texto, setTexto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3000/salvar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto }),
      });
      alert('Salvo no banco!');
      setTexto('');
    } catch {
      alert('Erro ao conectar no backend');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input 
          value={texto} 
          onChange={(e) => setTexto(e.target.value)} 
          placeholder="Digite algo..."
          required 
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}