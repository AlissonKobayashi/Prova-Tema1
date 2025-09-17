import React, { useState, useEffect } from "react";
import { VeiculoForm } from "./components/VeiculoForm";
import { 
  AcessorioForm, 
  CriarAcessorioForm, 
  DeleteAcessorioForm 
} from "./components/AcessorioForm";
import { VeiculoList, AcessorioList } from "./components/List";

const backendUrl = "http://localhost:3000";

const App = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [acessorios, setAcessorios] = useState([]);
  const [reload, setReload] = useState(0);

  const fetchVeiculos = async () => {
    try {
      const res = await fetch(`${backendUrl}/veiculo`);
      const data = await res.json();
      setVeiculos(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Erro ao buscar veículos:", err);
      setVeiculos([]);
    }
  };

  const fetchAcessorios = async () => {
    try {
      const res = await fetch(`${backendUrl}/acessorio`);
      const data = await res.json();
      setAcessorios(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Erro ao buscar acessórios:", err);
      setAcessorios([]);
    }
  };

  useEffect(() => {
    fetchVeiculos();
    fetchAcessorios();
  }, [reload]);

  const handleReload = () => setReload((prev) => prev + 1);

  return (
    <div>
      <VeiculoList veiculos={veiculos} />
      <AcessorioList acessorios={acessorios} />
      <VeiculoForm backendUrl={backendUrl} onSuccess={handleReload} />
      <CriarAcessorioForm backendUrl={backendUrl} onSuccess={handleReload} />
      <AcessorioForm backendUrl={backendUrl} veiculos={veiculos} onSuccess={handleReload} />
      <DeleteAcessorioForm backendUrl={backendUrl} veiculos={veiculos} onSuccess={handleReload} />
    </div>
  );
};

export default App;
