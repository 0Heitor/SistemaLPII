import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaCadastroProduto from "./telasCadastro/TelaCadastroProduto";
import TelaCadastroFornecedor from "./telasCadastro/TelaCadastroFornecedor";
import TelaCadastroCategoria from "./telasCadastro/TelaCadastroCategoria";
import TelaMenu from './telasCadastro/TelaMenu';
import Tela404 from './telasCadastro/Tela404';
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer/*, toast*/ } from "react-toastify";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
      <ToastContainer/>
    </div>
  );
}

export default App;
