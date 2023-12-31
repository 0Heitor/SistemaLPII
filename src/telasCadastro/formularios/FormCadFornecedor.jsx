import { useState } from "react";
import { toast } from 'react-toastify';
import { Container, Form, Row, Col, Button, FloatingLabel, Spinner } from 'react-bootstrap';
import { adicionarFornecedor, atualizarFornecedor } from '../../redux/fornecedorReducer';
import { useSelector, useDispatch } from 'react-redux';
import ESTADO from '../../recursos/estado';

export default function FormCadFornecedor(props){
    
    const fornecedorVazio = {
        codigo: '0',
        nome: '',
        cnpj: '',
        cidade: '',
        uf: 'SP',
        endereco: '',
        numero: '',
        cpf: '',
        rg: '',
        email:'',
        telefone:''
    }
    const estadoInicialFornecedor = props.fornecedorParaEdicao;
    const [fornecedor, setFornecedor] = useState(estadoInicialFornecedor);
    const [formValidado, setFormValidado] = useState(false);
    const { estado, mensagem/*, fornecedor*/ } = useSelector((state) => state.fornecedor);
    const dispatch = useDispatch();

    function manipularMudancas(e){
        const componente = e.currentTarget;
        setFornecedor({...fornecedor,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            if(!props.modoEdicao){
                dispatch(adicionarFornecedor(fornecedor));
            }
            else{
                dispatch(atualizarFornecedor(fornecedor));
                props.setModoEdicao(false);
                props.setFornecedorParaEdicao(fornecedorVazio);                
            }
            setFornecedor(fornecedorVazio);
            setFormValidado(false);
        }
        else{
            setFormValidado(true);
        }
        e.stopPropagation();
        e.preventDefault();
    }

    if (estado === ESTADO.ERRO) {
        toast.error(({ closeToast }) =>
            <div>
                <p>{mensagem}</p>

            </div>
            , { toastId: estado });
    }
    else if (estado === ESTADO.PENDENTE) {
        toast(({ closeToast }) =>
            <div>
                <Spinner animation="border" role="status"></Spinner>
                <p>Processando a requisição...</p>
            </div>
            , { toastId: estado });
    }
    else {
        toast.dismiss();
        return (

            <Container>
                <h2>Cadastro de Fornecedores</h2>
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
                                        value={fornecedor.codigo}
                                        onChange={manipularMudancas}
                                        disabled />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o código do fornecedor!</Form.Control.Feedback>
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
                                <Form.Control type="text" placeholder="Informe o nome completo" id="nome" name="nome" value={fornecedor.nome} onChange={manipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="Cnpj:"
                                    className="mb-3"
                                >
                                <Form.Control type="text" placeholder="Informe o seu CNPJ" id="cnpj" name="cnpj" value={fornecedor.cnpj} onChange={manipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o CNPJ!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <Form.Group>
                                <FloatingLabel
                                    label="Endereço:"
                                    className="mb-3"
                                >
                                <Form.Control type="text" placeholder="Avenida/Rua/Alameda/Viela ..." id="endereco" name="endereco" value={fornecedor.endereco} onChange={manipularMudancas} required/>
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <FloatingLabel
                                    label="Número"
                                    className="mb-3"
                                >
                                <Form.Control type="text" placeholder="Nº" id="numero" name="numero" value={fornecedor.numero} onChange={manipularMudancas} required/>
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o número!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Form.Group>
                                <FloatingLabel
                                    label="Cidade"
                                    className="mb-3"
                                >
                                <Form.Control type="text" placeholder="Cidade" id="cidade" name="cidade" value={fornecedor.cidade} onChange={manipularMudancas} required/>
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel label="UF:">
                                <Form.Select aria-label="Unidades Federativas brasileiras" value={fornecedor.uf} id="uf" name="uf" onChange={manipularMudancas}>
                                    <option value="SP">São Paulo</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <FloatingLabel
                                    label="CPF:"
                                    className="mb-3"
                                >
                                <Form.Control type="text" placeholder="000.000.000-00" id="cpf" name="cpf" value={fornecedor.cpf} onChange={manipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o cpf!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <FloatingLabel
                                    label="RG:"
                                    className="mb-3"
                                >
                                <Form.Control type="text" placeholder="Informe o RG" id="rg" name="rg" value={fornecedor.rg} onChange={manipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o rg!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <FloatingLabel
                                    label="E-Mail:"
                                    className="mb-3"
                                >
                                <Form.Control type="text" placeholder="Informe o Email" id="email" name="email" value={fornecedor.email} onChange={manipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o email!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <FloatingLabel
                                    label="Telefone:"
                                    className="mb-3"
                                >
                                <Form.Control type="text" placeholder="Informe o Telefone" id="telefone" name="telefone" value={fornecedor.telefone} onChange={manipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o Telefone!</Form.Control.Feedback>
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
}