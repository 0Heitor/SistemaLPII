import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProdutos(props) {
    return (
        <Container>
            <Button type="button" onClick={()=>{
                props.exibirFormulario(true)
            }}>Novo Produto</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Validade</th>
                        <th>Estoque</th>
                        <th>Código de Barras</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Amendoim</td>
                        <td>32/08/2023</td>
                        <td>100</td>
                        <td>1010010100101111010</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}