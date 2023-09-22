import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
export default function FormCadCategoria(props) {
    //codigo
    //nome
    //descricao
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe o nome da Categoria" id="nome" name="nome" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome da categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Descricao:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe a descricao" id="descricao" name="descricao" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descricao!</Form.Control.Feedback>
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