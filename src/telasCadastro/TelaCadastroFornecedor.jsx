import { Container } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedroes from "./tabelas/TabelaFornecedores";

export default function TelaCadastroFornecedor(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({
        codigo: '0',
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
    
    return (
        <Container>
            <Pagina>
                {
                    //dinâmica em que o usuário irá alternar entre o formulário de cadastro
                    //e a visualização do registros já cadastrados.
                    exibirFormulario ? <FormCadFornecedor exibirFormulario={setExibirFormulario}
                        fornecedorParaEdicao={fornecedorParaEdicao}
                        setFornecedorParaEdicao={setFornecedorParaEdicao}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                    /> 
                        :
                        <TabelaFornecedroes exibirFormulario={setExibirFormulario}
                            fornecedorParaEdicao={fornecedorParaEdicao}
                            setFornecedorParaEdicao={setFornecedorParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}/>
                }
            </Pagina>
        </Container>
    )
}