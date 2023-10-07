import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaCadastroProduto from "./telasCadastro/TelaCadastroProduto";
import TelaCadastroFornecedor from "./telasCadastro/TelaCadastroFornecedor";
import TelaCadastroCategoria from "./telasCadastro/TelaCadastroCategoria";
import TelaMenu from './telasCadastro/TelaMenu';
import Tela404 from './telasCadastro/Tela404';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="SistemaLPII/clientes" element={<TelaCadastroCliente/>} />
          <Route path="SistemaLPII/produtos" element={<TelaCadastroProduto/>} />
          <Route path="SistemaLPII/fornecedores" element={<TelaCadastroFornecedor/>} />
          <Route path="SistemaLPII/categorias" element={<TelaCadastroCategoria/>} />
          <Route path="/SistemaLPII" element={<TelaMenu/>} />
          <Route path="*" element={<Tela404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
