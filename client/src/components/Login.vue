<!-- src/components/Login.vue -->
<template>
    <div>
      <h2>Login</h2>
      <label>
        <input type="radio" v-model="userType" value="client" /> Cliente
      </label>
      <label>
        <input type="radio" v-model="userType" value="consultant" /> Consultor
      </label>
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userType: 'client',
      };
    },
    methods: {
      login() {
        // Implemente a lógica de login aqui com base no tipo de usuário selecionado.
        // Redirecione para a página de agendamento após o login.
        this.$router.push('/schedule');
      },
    },
  };
  </script>
  