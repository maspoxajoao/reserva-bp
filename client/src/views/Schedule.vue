<!-- src/views/Schedule.vue -->
<template>
  <div>
    <h2>Agendamento</h2>
    <label>
      Consultor:
      <select v-model="selectedConsultant">
        <!-- Opções de consultores -->
      </select>
    </label>
    <label>
      Data:
      <input type="date" v-model="selectedDate" />
    </label>
    <label>
      Duração (em minutos):
      <input type="number" v-model="selectedDuration" />
    </label>
    <button @click="scheduleMeeting">Agendar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedConsultant: null,
      selectedDate: null,
      selectedDuration: null,
    };
  },
  methods: {
    scheduleMeeting() {
      // Implemente a lógica de agendamento aqui.
      // Verifique a disponibilidade do consultor, etc.
      // Exiba mensagem de sucesso ou erro.
    },
  },
};
</script>
