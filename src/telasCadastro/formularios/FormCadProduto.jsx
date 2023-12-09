import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Container, Form, Row, Col, Button, FloatingLabel, Spinner } from 'react-bootstrap';
import { adicionarProduto, atualizarProduto } from '../../redux/produtoReducer';
import { buscarCategorias } from '../../redux/categoriaReducer';
import { useSelector, useDispatch } from 'react-redux';
import ESTADO from '../../recursos/estado';

export default function FormCadProduto(props){
    
    const produtoVazio = {
        codigo: '0',
        descricao: '',
        dataValidade: '',
        precoCusto: '',
        precoVenda: '',
        qtdEstoque: '',
        categoria: {
            codigo: 0,
            descricao: ''
        },
    }
    const estadoInicialProduto = props.produtoParaEdicao;
    const [produto, setProduto] = useState(estadoInicialProduto);
    const [formValidado, setFormValidado] = useState(false);
    const { estado: estadoP, mensagem: mensagemP/*, produtos */} = useSelector((state) => state.produto);
    const { estado: estadoC, mensagem: mensagemC, categorias } = useSelector((state) => state.categoria);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(buscarCategorias());
    }, [dispatch]);

    function manipularMudancas(e){
        const componente = e.currentTarget;
        setProduto({...produto,[componente.name]:componente.value});
    }

    function selecionaCategoria(e){
        const componente = e.currentTarget;
        setProduto({...produto, categoria:{
            "codigo" : componente.value,
            "descricao" : componente.options[componente.selectedIndex].text
        }});
        console.log(produto);
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            if(!props.modoEdicao){
                dispatch(adicionarProduto(produto));
            }
            else{
                dispatch(atualizarProduto(produto));
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

    if(estadoP === ESTADO.ERRO /*&& estadoC === ESTADO.ERRO*/) {
        toast.error(({ closeToast }) =>
            <div>
                <p>{mensagemP}</p>
            </div>
            , { toastId: estadoP });
    }
    else 
    if(estadoP === ESTADO.PENDENTE /*&& estadoC === ESTADO.PENDENTE*/) {
        toast(({ closeToast }) =>
            <div>
                <Spinner animation="border" role="status"></Spinner>
                <p>Processando a requisição...</p>
            </div>
            , { toastId: estadoP });
    }
    else{
    //if(estadoP === ESTADO.OCIOSO && estadoC === ESTADO.OCIOSO){
        setTimeout(() => {
            toast.dismiss();
        },2000)
        
        return (
            <Container>
                <h2>Cadastro de Produtos</h2>
                <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="Código:"
                                    className="mb-3"
                                >

                                    <Form.Control
                                        type="text"
                                        placeholder="0"
                                        id="codigo"
                                        name="codigo"
                                        value={produto.codigo}
                                        onChange={manipularMudancas}
                                        disabled />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o código do produto!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
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
                                    label="Validade:"
                                    className="mb-3"
                                >
                                <Form.Control type="date" placeholder="Informe a Validade" id="dataValidade" name="dataValidade" value={produto.dataValidade} onChange={manipularMudancas} required />
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
                                <Form.Control type="text" placeholder="Informe o Preço Custo" id="precoCusto" name="precoCusto" value={produto.precoCusto} onChange={manipularMudancas} required/>
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
                                <Form.Control type="text" placeholder="Informe o Preço Venda" id="precoVenda" name="precoVenda" value={produto.precoVenda} onChange={manipularMudancas} required/>
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
                                <Form.Control type="text" placeholder="Estoque" id="qtdEstoque" name="qtdEstoque" value={produto.qtdEstoque} onChange={manipularMudancas} required/>
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o Estoque!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <FloatingLabel label="Tipo de Categoria:">
                                <Form.Select aria-label="Seleciona uma categoria" value={produto.categoria.codigo} id="categoria" name="categoria" onChange={selecionaCategoria} required>
                                    <option value="-1" selected>Selecione uma categoria</option>
                                    {
                                        categorias?.map((cat) => {
                                            return(
                                                <option key={cat.codigo} value={cat.codigo}>{cat.descricao}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                                {estadoC === ESTADO.PENDENTE ? 
                                    <Spinner animation="border" role="status">
                                        <span clssName="visually-hidden">Carregando categorias...</span>
                                    </Spinner> 
                                    :
                                    null
                                }
                                {
                                    estadoC === ESTADO.ERRO ?
                                        <p>Erro ao carregar as categorias</p>
                                    :
                                    null
                                }
                            </FloatingLabel>
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
}