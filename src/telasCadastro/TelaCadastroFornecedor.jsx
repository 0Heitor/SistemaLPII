import { Container } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedroes from "./tabelas/TabelaFornecedores";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroFornecedor(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaFornecedores, setListaFornecedores] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({
        nome: '',
        cnpj: '',
        cidade: '',
        uf: 'SP',
        endereco: '',
        numero: '',
        cpf: '',
        rg: '',
        email:'',
        telefone:''
    });
    
    if (mostrarMensagem) {
        return (
            <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/>
        )
    }
    else{
        return (
            <Container>
                <Pagina>
                    {
                        //dinâmica em que o usuário irá alternar entre o formulário de cadastro
                        //e a visualização do registros já cadastrados.
                        exibirFormulario ? <FormCadFornecedor exibirFormulario={setExibirFormulario}
                            listaFornecedores={listaFornecedores}
                            setListaFornecedores={setListaFornecedores}
                            fornecedorParaEdicao={fornecedorParaEdicao}
                            setFornecedorParaEdicao={setFornecedorParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setMostrarMensagem={setMostrarMensagem}
                            setMensagem={setMensagem}
                            setTipoMensagem={setTipoMensagem}/> : 
                            
                            <TabelaFornecedroes exibirFormulario={setExibirFormulario}
                                listaFornecedores={listaFornecedores}
                                setListaFornecedores={setListaFornecedores}
                                fornecedorParaEdicao={fornecedorParaEdicao}
                                setFornecedorParaEdicao={setFornecedorParaEdicao}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao}/>
                    }
                </Pagina>
            </Container>
        )
    }
}