import { Button, Container, Table } from "react-bootstrap";

export default function TabelaCategorias(props) {
    return (
        <Container>
            <Button type="button" onClick={()=>{
                props.exibirFormulario(true)
            }}>Nova Categoria</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sei lá</td>
                        <td>Não faço ideia também</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}