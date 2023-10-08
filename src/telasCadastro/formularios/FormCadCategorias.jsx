import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState } from 'react';

export default function FormCadCategoria(props) {
    
    const categoriaVazio = {
        codigo:'',
        nome:'',
        descricao:''
    }
    const estadoInicialCategoria = props.categoriaParaEdicao;
    const [categoria, setCategoria] = useState(estadoInicialCategoria);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e){
        const componente = e.currentTarget;
        setCategoria({...categoria,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            if(!props.modoEdicao){
                props.setListaCategorias([...props.listaCategorias,categoria]);
                props.setMensagem('Categoria incluído com sucesso');
                props.setTipoMensagem('success');
                props.setMostrarMensagem(true);
            }
            else{
                props.setListaCategorias([...props.listaCategorias.filter((itemCategoria)=>itemCategoria.codigo !== props.categoriaParaEdicao),categoria]);
                props.setModoEdicao(false);
                props.setCategoriaParaEdicao(categoriaVazio);
            }
            setCategoria(categoriaVazio);
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
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao} >
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Código:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe o código da Categoria" id="codigo" name="codigo" value={categoria.codigo} onChange={manipularMudancas} required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o codigo da categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe o nome da Categoria" id="nome" name="nome" value={categoria.nome} onChange={manipularMudancas} required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome da categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Descricao:"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Informe a descricao" id="descricao" name="descricao" value={categoria.descricao} onChange={manipularMudancas} required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descricao!</Form.Control.Feedback>
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