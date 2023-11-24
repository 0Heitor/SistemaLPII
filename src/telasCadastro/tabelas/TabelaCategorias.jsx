import { Button, Container, Spinner, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { buscarCategorias, removerCategoria } from "../../redux/categoriaReducer";
import ESTADO from "../../recursos/estado";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function TabelaCategorias(props) {

    const { estado, mensagem, categorias } = useSelector(state => state.categoria);
    const dispatch = useDispatch();
    function excluirCategoria(categoria) {
        if (window.confirm('Deseja realmente excluir essa categoria?')) {
            dispatch(removerCategoria(categoria));
        }
    }

    function editarCategoria(categoria) {
        props.setCategoriaParaEdicao(categoria);
        props.setModoEdicao(true);
        props.exibirFormulario(true);

    }

    useEffect(() => {
        dispatch(buscarCategorias());
    }, [dispatch]);

    if (estado === ESTADO.PENDENTE) {
        toast(({ closeToast }) =>
            <div>
                <Spinner animation="border" role="status"></Spinner>
                <p>Buscando categorias....</p>
            </div>
        ,{toastId:estado});
    }
    else if (estado === ESTADO.ERRO) {
        toast.error(({ closeToast }) =>
            <div>
                <p>{mensagem}</p>

            </div>
        , {toastId: estado});
    }
    else {
        toast.dismiss();
        return (
            <Container>
                <Button type="button" onClick={() => {
                    props.exibirFormulario(true);
                }}>Nova Categoria</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categorias.map((categoria) => {
                                return (<tr key={categoria.codigo}>
                                    <td>{categoria.codigo}</td>
                                    <td>{categoria.descricao}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => {excluirCategoria(categoria)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                            </svg>
                                        </Button> {' '}
                                        <Button variant="warning" onClick={() => {editarCategoria(categoria)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg>
                                        </Button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        );
    }
}