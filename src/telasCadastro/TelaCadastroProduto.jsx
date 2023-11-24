import { Container } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProduto from "./tabelas/TabelaProdutos";

export default function TelaCadastroProduto(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({
        codigo: '0',
        descricao: '',
        dataValidade: '',
        precoCusto: '',
        precoVenda: '',
        qtdEstoque: '',
        categoria: '',
    });
    
    return (
        <Container>
            <Pagina>
                {
                    //dinâmica em que o usuário irá alternar entre o formulário de cadastro
                    //e a visualização do registros já cadastrados.
                    exibirFormulario ? <FormCadProduto exibirFormulario={setExibirFormulario}
                        produtoParaEdicao={produtoParaEdicao}
                        setProdutoParaEdicao={setProdutoParaEdicao}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                    />
                        :
                        <TabelaProduto exibirFormulario={setExibirFormulario}
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