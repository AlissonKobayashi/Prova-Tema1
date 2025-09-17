import React, { useState } from "react";

export const VeiculoForm = ({ backendUrl, onSuccess }) => {
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");
  const [anoFabricacao, setAnoFabricacao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${backendUrl}/veiculo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modelo, placa, anoFabricacao }),
      });
      setModelo("");
      setPlaca("");
      setAnoFabricacao("");
      onSuccess(); 
    } catch (err) {
      console.error("Erro ao criar veículo:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>Adicionar Veículo</h2>
      <input
        placeholder="Modelo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        required
      />
      <input
        placeholder="Placa"
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
        required
      />
      <input
        placeholder="Ano de Fabricação"
        type="number"
        value={anoFabricacao}
        onChange={(e) => setAnoFabricacao(e.target.value)}
        required
      />
      <button type="submit">Adicionar Veículo</button>
    </form>
  );
};
