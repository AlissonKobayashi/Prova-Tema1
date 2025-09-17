import React, { useState } from "react";

export const CriarAcessorioForm = ({ backendUrl, onSuccess }) => {
  const [nome, setNome] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${backendUrl}/acessorio`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome }),
      });
      setNome("");
      onSuccess(); 
    }catch (err) {
    console.error("Erro ao criar acessório:", err);
  }
};

return (<form onSubmit={handleSubmit}>
    <h2>Criar Acessório</h2>
    <input
      placeholder="Nome do Acessório"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      required
    />
    <button type="submit">Criar Acessório</button>
  </form>);
};

export const AcessorioForm = ({ backendUrl, veiculos, onSuccess }) => {
  const [veiculoId, setVeiculoId] = useState("");
  const [nome, setNome] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${backendUrl}/acessorio`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome }),
      });
      const acessorio = await res.json();

      await fetch(`${backendUrl}/veiculo/${veiculoId}/acessorio/${acessorio._id}`, { 
        method: "POST" 
      });

      setNome("");
      setVeiculoId("");
      onSuccess();
    } catch (err) {
      console.error("Erro ao adicionar acessório:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Acessório a Veículo</h2>
      <select 
        value={veiculoId} 
        onChange={(e) => setVeiculoId(e.target.value)} 
        required
      >
        <option value="">Selecione um veículo</option>
        {veiculos.map((v) => (
          <option key={v._id} value={v._id}>
            {v.modelo}
          </option>
        ))}
      </select>
      <input
        placeholder="Nome do Acessório"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      
      <button type="submit">Adicionar ao Veículo</button>
    </form> 

  );
};


export const DeleteAcessorioForm = ({ backendUrl, veiculos, onSuccess }) => {
  const [veiculoId, setVeiculoId] = useState("");
  const [acessorioId, setAcessorioId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${backendUrl}/veiculo/${veiculoId}/acessorio/${acessorioId}`, { method: "DELETE" });
      setVeiculoId("");
      setAcessorioId("");
      onSuccess();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <h2>Remover Acessório de Veículo</h2>
      <select value={veiculoId} onChange={(e) => setVeiculoId(e.target.value)} required>
        <option value="">Selecione um veículo</option>
        {veiculos.map((v) => (
          <option key={v._id} value={v._id}>
            {v.modelo} 
          </option>
        ))}
      </select>
      <select value={acessorioId} onChange={(e) => setAcessorioId(e.target.value)} required>
        <option value="">Selecione um acessório</option>
        {veiculos
          .find((v) => v._id === veiculoId)
          ?.acessorio?.map((a) => (
            <option key={a._id} value={a._id}>
              {a.nome}
            </option>
          ))}
      </select>
      <button type="submit">Remover Acessório</button>
    </form>
  );
};

 