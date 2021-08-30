<template>
  <div>
    <b-card bg-variant="light" class="mt-3 text-center">
      <b-card-title>
        <h5>
          {{ titulo }}
          <small
            ><code>({{ `D.O.U. ${publicacao}` }})</code></small
          >
        </h5>
      </b-card-title>
      <b-card-text>
        <h5>{{ subtitulo }}</h5>
      </b-card-text>
    </b-card>
    <div v-for="secao in filtrado" :key="secao.codigo">
      <b-table
        bordered
        striped
        hover
        caption-top
        head-variant="light"
        :items="secao.itens"
        :fields="fields"
        style="font-size: small"
      >
        <template #table-caption>
          <b-card bg-variant="secondary" text-variant="white">
            <b-card-title class="my-0">
              <h5 class="my-0">
                Código {{ secao.codigo }} - {{ secao.titulo }}
              </h5>
            </b-card-title>
            <b-card-body
              v-if="secao.explicacao || secao.revogado"
              body-bg-variant="light"
              body-text-variant="secondary"
              class="mt-3 rounded"
            >
              <div v-if="secao.revogado">
                <p
                  v-for="linha in secao.revogado.split('\n')"
                  :key="linha"
                  class="mb-0"
                >
                  <del>{{ linha }}</del>
                </p>
              </div>
              <div v-if="secao.explicacao">
                <p
                  v-for="linha in secao.explicacao.split('\n')"
                  :key="linha"
                  class="mb-0"
                >
                  {{ linha }}
                </p>
              </div>
            </b-card-body>
          </b-card>
        </template>
        <template #cell(agente_nocivo)="data">
          <div v-if="data.item.revogado">
            <p v-for="linha in data.item.revogado.split('\n')" :key="linha">
              <del>{{ linha }}</del>
            </p>
          </div>
          <p v-for="linha in data.value.split('\n')" :key="linha">
            {{ linha }}
          </p>
          <div v-if="data.item.descricao">
            <p v-for="linha in data.item.descricao.split('\n')" :key="linha">
              {{ linha }}
            </p>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filtro: {
      type: String,
      default: '',
    },
    titulo: {
      type: String,
      default: '',
    },
    subtitulo: {
      type: String,
      default: '',
    },
    publicacao: {
      type: String,
      default: '',
    },
    periodo: {
      type: String,
      default: '',
    },
    secoes: {
      type: Array,
      default: () => [],
    },
    chaves: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      parametro: '',
    };
  },
  computed: {
    fields() {
      return Object.keys(this.chaves).map((chave) => {
        return {
          key: chave,
          label: this.chaves[chave],
        };
      });
    },
    filtrado() {
      return this.secoes
        .map((secao) => {
          const itens = this.filtrarItens(
            secao.itens,
            Array.prototype.concat(Object.keys(this.chaves), ['revogado'])
          );
          return {
            codigo: secao.codigo,
            titulo: secao.titulo,
            explicacao: secao.explicacao,
            revogado: secao.revogado,
            itens,
          };
        })
        .filter((secao) => {
          const explicacao = secao.explicacao
            ? this.normalizar(secao.explicacao)
            : '';
          const revogado = secao.revogado
            ? this.normalizar(secao.revogado)
            : '';
          const titulo = secao.titulo ? this.normalizar(secao.titulo) : '';
          return (
            secao.itens.length > 0 ||
            titulo.includes(this.parametro) ||
            explicacao.includes(this.parametro) ||
            revogado.includes(this.parametro)
          );
        });
    },
  },
  watch: {
    filtro(val) {
      this.parametro = this.normalizar(this.filtro);
    },
  },
  methods: {
    normalizar(str) {
      return str
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '');
    },
    stringify(item, chaves) {
      return chaves
        .map((chave) => {
          return Array.isArray(item[chave])
            ? item[chave].join('\n')
            : typeof item[chave] === 'string'
            ? item[chave]
            : '';
        })
        .join('\n');
    },
    filtrarItens(itens, chaves) {
      if (this.parametro.length > 0) {
        return itens.filter((item) => {
          const str = this.normalizar(this.stringify(item, chaves));
          return str.includes(this.parametro);
        });
      }
      return itens;
    },
  },
};
</script>