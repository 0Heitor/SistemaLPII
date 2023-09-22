import { Button, Container, Table } from "react-bootstrap";

export default function TabelaFornecedores(props) {
    return (
        <Container>
            <Button type="button" onClick={()=>{
                props.exibirFormulario(true)
            }}>Novo Fornecedor</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Endereço/Nº</th>
                        <th>Cidade/UF</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maria Aparecida Fake</td>
                        <td>Rua das Flores, n° 2569</td>
                        <td>Presidente Prudente/SP</td>
                        <td>000.000.000-00</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}