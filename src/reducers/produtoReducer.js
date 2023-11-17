import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ESTADO from '../recursos/estado';
const urlBase = "http://localhost:4000/produto";

export const buscarProdutos = createAsyncThunk('buscarProdutos', async ()=>{
    try{
        const resposta = await fetch(urlBase, {method:"GET"});
        const dados = await resposta.json();
        if(dados.status){
            return{
                status: dados.status,
                mensagem: "",
                listaProdutos: dados.listaProdutos
            }
        }
        else{
            return{
                status: dados.status,
                mensagem: dados.mensagem,
                listaProdutos: []
            }
        }        
    }catch(erro){
        return {
            status: false,
            mensagem: "Erro ao recuperar produtos "+ erro.message,
            listaProdutos: []
        }
    }
})

export const incluirProdutos = createAsyncThunk('incluirProdutos', async (produto) =>{
    try{
        const resposta = await fetch(urlBase, {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:produto
        });
        const dados = await resposta.json();
        if(dados.status){
            produto.codigo = dados.codigoGerado;
            return {
                status: dados.status,
                produto,
                mensagem: dados.mensagem
            }
        }
        else{
            return{
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
    }catch(erro){
        return{
            status: false,
            mensagem: "Não foi possível cadastrar o produto "+ erro.message
        }
    }
})

export const atualizarProdutos = createAsyncThunk('atualizarProdutos', async (produto) =>{
    try{
        const resposta = await fetch(urlBase, {
            method:"PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body:produto
        });
        const dados = await resposta.json();
        if(dados.status){
            return {
                status: dados.status,
                produto,
                mensagem: dados.mensagem
            }
        }
        else{
            return{
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
    }catch(erro){
        return{
            status: false,
            mensagem: "Não foi possível atualizar o produto "+ erro.message
        }
    }
})

export const excluirProdutos = createAsyncThunk('excluirProdutos', async (produto) =>{
    try{
        const resposta = await fetch(urlBase, {
            method:"DELETE",
            headers: {
                "Content-Type":"application/json"
            },
            body:produto
        });
        const dados = await resposta.json();
        if(dados.status){
            return {
                status: dados.status,
                produto,
                mensagem: dados.mensagem
            }
        }
        else{
            return{
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
    }catch(erro){
        return{
            status: false,
            mensagem: "Não foi possível deletar o produto "+ erro.message
        }
    }
})

const produtoSlice = createSlice({
    name:'produto',
    initialState:estadoInicial,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(buscarProdutos.pending, (state, action) => {
            state.estado = ESTADO.PENDENTE;
            state.mensagem = "Buscando produtos...";
        })
        .addCase(buscarProdutos.fulfilled, (state, action) => {
            if(action.payload.status){
                state.estado = ESTADO.OCIOSO;
                state.mensagem = "Produtos recuperados do backend !";
                state.produtos = action.payload.listaProdutos;
            }
            else{
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
                state.produtos = [];
            }
        })
        .addCase(buscarProdutos.rejected, (state, action) => {
            state.estado = ESTADO.ERRO;
            state.mensagem = action.payload.mensagem;
            state.produtos = [];
        })
        .addCase(incluirProdutos.pending, (state, action) => {
            state.estado = ESTADO.PENDENTE;
            state.mensagem = "Processando a requisição...";
        })
        .addCase(incluirProdutos.fulfilled, (state, action) => {
            if(action.payload.status){
                state.estado = ESTADO.OCIOSO;
                state.mensagem = action.payload.mensagem;
                state.produto.push(action.payload.produto);
            }
            else{
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
                state.produtos = [];
            }
        })
        .addCase(incluirProdutos.rejected, (state, action) => {
            state.estado = ESTADO.ERRO;
            state.mensagem = action.payload.mensagem;
            state.produtos = [];
        })
        .addCase(atualizarProdutos.pending, (state, action) => {
            state.estado = ESTADO.PENDENTE;
            state.mensagem = "Processando a requisição...";
        })
        .addCase(atualizarProdutos.fulfilled, (state, action) => {
            if(action.payload.status){
                state.estado = ESTADO.OCIOSO;
                state.mensagem = action.payload.mensagem;
                const indice = state.produtos.findIndex((produto) => {produto.codigo === action.payload.produto.codigo});
                state.produto[indice] = action.payload.produto;
            }
            else{
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
                state.produtos = [];
            }
        })
        .addCase(atualizarProdutos.rejected, (state, action) => {
            state.estado = ESTADO.ERRO;
            state.mensagem = action.payload.mensagem;
            state.produtos = [];
        })
        .addCase(excluirProdutos.pending, (state, action) => {
            state.estado = ESTADO.PENDENTE;
            state.mensagem = "Processando a requisição...";
        })
        .addCase(excluirProdutos.fulfilled, (state, action) => {
            if(action.payload.status){
                state.estado = ESTADO.OCIOSO;
                state.mensagem = action.payload.mensagem;
                state.produtos = state.produtos.filter((produto) => {produto.codigo !== action.payload.produto.codigo});
            }
            else{
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
                state.produtos = [];
            }
        })
        .addCase(excluirProdutos.rejected, (state, action) => {
            state.estado = ESTADO.ERRO;
            state.mensagem = action.payload.mensagem;
            state.produtos = [];
        })
    }
})

export default produtoSlice.reducer;