import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

export default function FormCadProduto(props){
    
    const produtoVazio = {
        cod_barra: '',
        descricao: '',
        validade: '',
        preco_custo: '',
        preco_venda: '',
        estoque: ''
    }
    const estadoInicialProduto = props.produtoParaEdicao;
    const [produto, setProduto] = useState(estadoInicialProduto);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e){
        const componente = e.currentTarget;
        setProduto({...produto,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            if(!props.modoEdicao){
                props.setListaProdutos([...props.listaProdutos,produto]);
                props.setMensagem('Produto incluído com sucesso');
                props.setTipoMensagem('success');
                props.setMostrarMensagem(true);
            }
            else{
                props.setListaProdutos([...props.listaProdutos.filter((itemProduto)=>itemProduto.cod_barra !== props.produtoParaEdicao.cod_barra),produto]);
                props.setModoEdicao(false);
                props.setProdutoParaEdicao(produtoVazio);                
            }
            setProduto(produtoVazio);
            setFormValidado(false);
        }
        else{
            setFormValidado(true);
        }
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Descrição:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe a descricão" id="descricao" name="descricao" value={produto.descricao} onChange={manipularMudancas} required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descrição!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Validae:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe a Validade" id="validade" name="validade" value={produto.validade} onChange={manipularMudancas} required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a Validade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                label="Preço Custo:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe o Preço Custo" id="preco_custo" name="preco_custo" value={produto.preco_custo} onChange={manipularMudancas} required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Preço Custo!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                label="Preço Venda:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe o Preço Venda" id="preco_venda" name="preco_venda" value={produto.preco_venda} onChange={manipularMudancas} required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Preço Venda!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                label="Estoque:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Estoque" id="estoque" name="estoque" value={produto.estoque} onChange={manipularMudancas} required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Estoque!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Código de Barras:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe o Código de Barras" id="cod_barra" name="cod_barra" value={produto.cod_barra} onChange={manipularMudancas} required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Código de Barras!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                    <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={()=>{
                            props.exibirFormulario(false);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}