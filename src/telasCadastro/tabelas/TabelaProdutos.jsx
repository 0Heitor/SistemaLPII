import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProdutos(props) {
    
    function excluirProduto(produto) {
        if (window.confirm('Deseja realmente excluir esse produto?')) {
            props.setListaProdutos(
                props.listaProdutos.filter((itemLista => itemLista.cod_barra !== produto.cod_barra))
            );
        }
    }

    function editarProduto(produto){
        props.setProdutoParaEdicao(produto);
        props.setModoEdicao(true);
        props.exibirFormulario(true);
    }
    
    return (
        <Container>
            <Button type="button" onClick={()=>{
                props.exibirFormulario(true)
            }}>Novo Produto</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código de Barras</th>
                        <th>Descrição</th>
                        <th>Validade</th>
                        <th>Estoque</th>
                        <th>Preço de Custo</th>
                        <th>Preço de Venda</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaProdutos.map((produto) => {
                            return (<tr key={produto.cod_barra}>
                                <td>{produto.cod_barra}</td>
                                <td>{produto.descricao}</td>
                                <td>{produto.validade}</td>
                                <td>{produto.preco_custo}</td>
                                <td>{produto.preco_venda}</td>
                                <td>{produto.estoque}</td>
                                <td>
                                <Button variant="danger" onClick={()=> {excluirProduto(produto)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </Button>
                                <Button variant="warning" onClick={()=> {editarProduto(produto)}}>
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