import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from'react-router-dom';


export default function Menu(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/SistemaLPII">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/SistemaLPII/clientes">Clientes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/SistemaLPII/fornecedores">Fornecedores</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/SistemaLPII/produtos">Produtos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/SistemaLPII/categorias">Categorias</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Operações" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/SistemaLPII/pedidos">Pedido de Compra</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/SistemaLPII/vendas">Vendas</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}