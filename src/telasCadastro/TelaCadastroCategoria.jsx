import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCategoria  from "./formularios/FormCadCategorias";
import TabelaCategoria from "./tabelas/TabelaCategorias";
import { useState } from "react";

export default function TelaCadastroCategoria(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    return (
        <Container>
            <Pagina>
                {
                    //dinâmica em que o usuário irá alternar entre o formulário de cadastro
                    //e a visualização do registros já cadastrados.
                    exibirFormulario ? <FormCadCategoria exibirFormulario={setExibirFormulario}/> : <TabelaCategoria exibirFormulario={setExibirFormulario} />
                }
            </Pagina>
        </Container>
    )
}