import React from "react";

export const VeiculoList = ({ veiculos }) => {
  return (
    <div>
      <h2>Veículos</h2>
      <ul>
        {veiculos && veiculos.length > 0 ? (
          veiculos.map((v) => (
            <li key={v._id}>
              <strong>Modelo: </strong>{v.modelo} - <strong>Ano de Fabricação:</strong>  {v.anoFabricacao} - <strong>Placa:</strong>  {v.placa} 
              <span>
                 {""} - <strong>Acessórios:</strong> {" "}
                {Array.isArray(v.acessorio) && v.acessorio.length > 0? v.acessorio.map((a) => a.nome).join(", ") : "Nenhum"}
              </span>
            </li>
          ))
        ) : (
          <li>Nenhum veículo cadastrado.</li>
        )}
      </ul>
    </div>
  );
};

export const AcessorioList = ({ acessorios }) => {
  return (
    <div>
      <h2>Acessórios</h2>
      <ul>
        {acessorios && acessorios.length > 0 ? (
          acessorios.map((a) => (
            <li key={a._id}>
              <strong>Nome: </strong>{a.nome}
            </li>
          ))
        ) : (
          <li>Nenhum acessório cadastrado.</li>
        )}
      </ul>
    </div>
  );
};

