import { useState } from "react";
import { toast } from 'react-toastify';
import { Container, Form, Row, Col, Button, FloatingLabel, Spinner } from 'react-bootstrap';
import { adicionarCliente, atualizarCliente } from '../../redux/clienteReducer';
import { useSelector, useDispatch } from 'react-redux';
import ESTADO from '../../recursos/estado';

export default function FormCadCliente(props) {
    
    const clienteVazio = {
        codigo:'0',
        cpf:'',
        nome:'',
        endereco:'',
        numero:'',
        bairro:'',
        cidade:'',
        uf:'SP',
        cep:''
    }
    const estadoInicialCliente = props.clienteParaEdicao;
    const [cliente, setCliente] = useState(estadoInicialCliente);
    const [formValidado, setFormValidado] = useState(false);
    const { estado, mensagem/*, clientes */} = useSelector((state) => state.cliente);
    const dispatch = useDispatch();

    function manipularMudancas(e){
        const componente = e.currentTarget;
        setCliente({...cliente,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            if(!props.modoEdicao){
                dispatch(adicionarCliente(cliente));
            }
            else{
                dispatch(atualizarCliente(cliente));
                props.setModoEdicao(false);
                props.setClienteParaEdicao(clienteVazio);                
            }
            setCliente(clienteVazio);
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
                <h2>Cadastro de Clientes</h2>
                <Form noValidate validated={formValidado} onSubmit={manipularSubmissao} >
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
                                        value={cliente.codigo}
                                        onChange={manipularMudancas}
                                        disabled />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o código do cliente!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="CPF:"
                                    className="mb-3"
                                >
                                <Form.Control 
                                    type="text" 
                                    placeholder="000.000.000-00"
                                    id="cpf"
                                    name="cpf"
                                    value={cliente.cpf}
                                    onChange={manipularMudancas}
                                    required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o cpf!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="Nome Completo:"
                                    className="mb-3"
                                >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Informe o nome completo"
                                    id="nome"
                                    name="nome"
                                    value={cliente.nome}
                                    onChange={manipularMudancas}
                                    required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
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
                                <Form.Control 
                                    type="text" 
                                    placeholder="Avenida/Rua/Alameda/Viela ..."
                                    id="endereco"
                                    name="endereco" 
                                    value={cliente.endereco}
                                    onChange={manipularMudancas}
                                    required/>
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
                                <Form.Control 
                                    type="text" 
                                    placeholder="Nº" 
                                    id="numero" 
                                    name="numero"
                                    value={cliente.numero}
                                    onChange={manipularMudancas}
                                    required/>
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o número!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <FloatingLabel
                                    label="Bairro:"
                                    className="mb-3"
                                >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Bairro/Vila..."
                                    id="bairro" 
                                    name="bairro"
                                    value={cliente.bairro} 
                                    onChange={manipularMudancas}
                                    required/>
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <FloatingLabel
                                    label="Cidade"
                                    className="mb-3"
                                >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Cidade"
                                    id="cidade" 
                                    name="cidade"
                                    value={cliente.cidade}
                                    onChange={manipularMudancas}
                                    required/>
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel label="UF:">
                                <Form.Select aria-label="Unidades Federativas brasileiras" value={cliente.uf} id="uf" name="uf" onChange={manipularMudancas}>
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
                                    label="CEP:"
                                    className="mb-3"
                                >
                                <Form.Control 
                                    type="text" 
                                    placeholder="00000-000"
                                    id="cep"
                                    name="cep"
                                    value={cliente.cep}
                                    onChange={manipularMudancas}
                                    required/>
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
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