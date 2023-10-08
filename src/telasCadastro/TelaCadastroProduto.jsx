import { Container } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProduto from "./tabelas/TabelaProdutos";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroProduto(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaProdutos, setListaProdutos] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({
        cod_barra: '',
        descricao: '',
        validade: '',
        preco_custo: '',
        preco_venda: '',
        estoque: ''
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
                        exibirFormulario ? <FormCadProduto exibirFormulario={setExibirFormulario}
                            listaProdutos={listaProdutos}
                            setListaProdutos={setListaProdutos}
                            produtoParaEdicao={produtoParaEdicao}
                            setProdutoParaEdicao={setProdutoParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setMostrarMensagem={setMostrarMensagem}
                            setMensagem={setMensagem}
                            setTipoMensagem={setTipoMensagem}
                        />
                            :
                            <TabelaProduto exibirFormulario={setExibirFormulario}
                                listaProdutos={listaProdutos}
                                setListaProdutos={setListaProdutos}
                                produtoParaEdicao={produtoParaEdicao}
                                setProdutoParaEdicao={setProdutoParaEdicao}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao}
                            />
                    }
                </Pagina>
            </Container>
        )
    }
}