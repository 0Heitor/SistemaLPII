import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
//codigo: "",
//descricao: "",
//validade: "",
//preco_custo: "",
//preco_venda: "",
//estoque: "",
//cod_barra: "",
export default function FormCadProduto(props){
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Descrição:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe a descricão" id="descricao" name="descricao" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descrição!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Validae:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe a Validade" id="validade" name="validade" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a Validade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Preço Custo:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe o Preço Custo" id="preco_custo" name="preco_custo" required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Preço Custo!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Preço Venda:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe o Preço Venda" id="preco_venda" name="preco_venda" required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Preço Venda!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Estoque:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Estoque" id="estoque" name="estoque" required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Estoque!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Código de Barras:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe o Código de Barras" id="cod_barra" name="cod_barra" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Código de Barras!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={()=>{
                            props.exibirFormulario(false)
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}