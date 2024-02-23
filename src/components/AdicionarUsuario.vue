<template>
      <div>
        <br><br>
        <label for="nome">Nome:</label>
        <input type="text" v-model="usuario.nome" id="nome"/>
      </div>
      <div>
        <label for="email">E-mail:</label>
        <input type="text" v-model="usuario.email" id="email" /></div>
      <div>
        <label for="telefone">Telefone:</label>
        <input type="text" v-model="usuario.telefone" id="telefone" />
      </div>
      <div>
        <label for="bairro">Bairro:</label>
        <input type="text" v-model="usuario.bairro" id="bairro" />
      </div>
      <div>
        <label for="cep">CEP:</label>
        <input type="text" v-model="usuario.cep" id="cep" />
      </div>
      <div>
        <label for="logradouro">Logradouro:</label>
        <input type="text" v-model="usuario.logradouro" id="logradouro" />
      </div>
      <div>
        <label for="numero">Número:</label>
        <input type="text" v-model="usuario.numero" id="numero" />
      </div>
      <div>
        <label for="uf">UF:</label>
        <input type="text" v-model="usuario.uf" id="uf" />
      </div>
      <div><br><button v-on:click="cadastrarUsuario">Cadastrar</button></div>
  </template>

<script setup>
    import MensageiroService from '../service/MensageiroService'
    import { reactive } from 'vue'

    const usuario = reactive({
        nome: '',
        email: '',
        telefone: '',
        bairro:'',
        cep: '',
        logradouro: '',
        numero:'',
        uf:'',
    });

    function cadastrarUsuario(){
        MensageiroService.create(usuario);
    }
</script>