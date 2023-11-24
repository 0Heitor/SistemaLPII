import { Container } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadCategoria from "./formularios/FormCadCategorias";
import TabelaCategorias from "./tabelas/TabelaCategorias";

export default function TelaCadastroCategoria(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
        codigo: '0',
        descricao: ''
    });

    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadCategoria exibirFormulario={setExibirFormulario}
                        categoriaParaEdicao={categoriaParaEdicao}
                        setCategoriaParaEdicao={setCategoriaParaEdicao}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                    />
                        :
                        <TabelaCategorias exibirFormulario={setExibirFormulario}
                            categoriaParaEdicao={categoriaParaEdicao}
                            setCategoriaParaEdicao={setCategoriaParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                        />
                }
            </Pagina>
        </Container>
    )
}