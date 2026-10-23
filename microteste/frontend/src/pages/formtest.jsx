import { useState } from 'react';

export default function FormTeste() {
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
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-white rounded-lg shadow">
        <input 
          type="text"
          value={texto} 
          onChange={(e) => setTexto(e.target.value)} 
          placeholder="Digite algo..."
          className="border border-gray-300 p-2 rounded outline-none"
          required 
        />
        <button className="bg-blue-900 text-white p-2 rounded cursor-pointer">
          Enviar
        </button>
      </form>
    </div>
  );
}