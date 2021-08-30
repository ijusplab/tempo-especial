<template>
  <b-navbar type="dark" variant="secondary">
    <b-navbar-brand href="#">Pesquisa de Tempo Especial</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-form-input
          :value="value"
          size="sm"
          class="mr-sm-2"
          placeholder="Filtrar"
          style="width: 400px"
          @input="$emit('input', $event)"
        ></b-form-input>
        <b-button
          size="sm"
          :variant="tipo === 'agente' ? 'primary' : 'light'"
          class="mr-sm-2"
          :class="{ active: tipo === 'agente' }"
          @click="$emit('tipochange', 'agente')"
        >
          Agente
        </b-button>
        <b-button
          size="sm"
          :variant="tipo === 'categoria' ? 'primary' : 'light'"
          :class="{ active: tipo === 'categoria' }"
          @click="$emit('tipochange', 'categoria')"
        >
          Categoria
        </b-button>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    tipo: {
      type: String,
      validate: (str) => ['agente', 'categoria'].includes(str),
      default: 'agente',
    },
  },
};
</script>