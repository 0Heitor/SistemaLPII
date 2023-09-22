import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
export default function FormCadCliente(props) {
    //Os atributos deste objeto deve estar associados aos inputs do formulario
    const clienteVazio =({
        cpf:'',
        nome:'',
        endereco:'',
        numero:'',
        bairro:'',
        cidade:'',
        uf:'SP',
        cep:''
    });
    const estadoInicialCliente = props.clienteParaEdicao;
    const [cliente,setCliente] = useState(estadoInicialCliente);
    const [validado,setValidado] = useState(false);
    
    function manipularMudancas(e){
        const componente = e.currentTarget;
        setCliente({...cliente,[componente.name]:componente.value});
    }
    
    function manipularSubmissao(e){
        console.log(cliente);
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if(!props.modoEdicao){
                props.setListaClientes([...props.listaClientes,cliente]);
            }
            else{
                props.setListaClientes([...props.listaClientes.filter((itemCliente)=>itemCliente.cpf !== cliente.cpf),cliente]);
                props.setModoEdicao(false);
                props.setClienteParaEdicao({
                    cpf:'',
                    nome:'',
                    endereco:'',
                    numero:'',
                    bairro:'',
                    cidade:'',
                    uf:'SP',
                    cep:''
                });
            }
            //setLista([...lista,cliente]);
            setCliente(clienteVazio);
            setValidado(false);
            //props.exibirFormulario(false);
        }
        else
            setValidado(true);
        e.preventDefault();
        e.stopPropagation();
        //console.log(lista);
    }

    return (
        <Container>
            <Form noValidate validated={validado} onSubmit={manipularSubmissao} >
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CPF:"
                                className="mb-3"
                            >
                            <Form.Control 
                                type="text" 
                                placeholder="000.000.000-00" 
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
                                controlId="floatingInput"
                                label="Nome Completo:"
                                className="mb-3"
                            >
                            <Form.Control 
                                type="text" 
                                placeholder="Informe o nome completo" 
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
                                controlId="floatingInput"
                                label="Endereço:"
                                className="mb-3"
                            >
                            <Form.Control 
                                type="text" 
                                placeholder="Avenida/Rua/Alameda/Viela ..." 
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
                                controlId="floatingInput"
                                label="Número"
                                className="mb-3"
                            >
                            <Form.Control 
                                type="text" 
                                placeholder="Nº" 
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
                                controlId="floatingInput"
                                label="Bairro:"
                                className="mb-3"
                            >
                            <Form.Control 
                                type="text" 
                                placeholder="Bairro/Vila..." 
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
                                controlId="floatingInput"
                                label="Cidade"
                                className="mb-3"
                            >
                            <Form.Control 
                                type="text" 
                                placeholder="Cidade" 
                                name="cidade"
                                value={cliente.cidade}
                                onChange={manipularMudancas}
                                required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select aria-label="Unidades Federativas brasileiras" value={cliente.uf} name="uf" onChange={manipularMudancas}>
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
                                controlId="floatingInput"
                                label="CEP:"
                                className="mb-3"
                            >
                            <Form.Control 
                                type="text" 
                                placeholder="00000-000" 
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