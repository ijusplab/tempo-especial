<template>
  <div>
    <filtro v-model="filtro" :tipo="tipo" @tipochange="tipo = $event"></filtro>
    <b-container fluid>
      <b-tabs pills class="my-3">
        <b-tab v-for="tab in periodos" :key="tab" :title="tab">
          <b-row v-if="carregado">
            <b-col
              v-for="(decreto, index) in decretos.filter(
                (decreto) => decreto.periodo === tab
              )"
              :key="index"
            >
              <decreto
                :key="index"
                :filtro="filtro"
                :titulo="decreto.titulo"
                :publicacao="decreto.publicacao"
                :subtitulo="decreto.subtitulo"
                :periodo="decreto.periodo"
                :secoes="decreto.secoes"
                :chaves="decreto.rotulos"
              ></decreto>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carregado: false,
      porAgente: [],
      porCategoria: [],
      filtro: '',
      tipo: 'agente',
    };
  },
  computed: {
    decretos() {
      return this.tipo === 'categoria' ? this.porCategoria : this.porAgente;
    },
    secoes() {
      return this.porAgente.length > 0 ? this.porAgente[0].secoes : [];
    },
    rotulos() {
      return this.porAgente.length > 0 ? this.porAgente[0].rotulos : {};
    },
    periodos() {
      return this.decretos
        .map((decreto) => decreto.periodo)
        .filter((v, i, arr) => arr.indexOf(v) === i);
    },
  },
  async mounted() {
    let paths = ['53831/agentes', '83080/agentes', '2172', '3048'];
    for (let index = 0; index < paths.length; index++) {
      const dados = await this.obterDados(paths[index]);
      this.porAgente.push(dados);
    }
    paths = ['53831/ocupacoes', '83080/atividades'];
    for (let index = 0; index < paths.length; index++) {
      const dados = await this.obterDados(paths[index]);
      this.porCategoria.push(dados);
    }
    this.carregado = true;
  },
  methods: {
    periodo(inicial, final) {
      if (inicial.length === 0) {
        return `Até ${final}`;
      }
      if (final.length === 0) {
        return `A partir de ${inicial}`;
      }
      return `De ${inicial} a ${final}`;
    },
    formatarData(str) {
      return str.split('-').reverse().join('-');
    },
    async obterDados(path) {
      const dados = await this.$content(path).fetch();
      const inicial = this.formatarData(dados.periodo.inicial);
      const final = this.formatarData(dados.periodo.final);
      dados.periodo = this.periodo(inicial, final);
      dados.publicacao = this.formatarData(dados.publicacao);
      dados.secoes.map((secao) => {
        secao.explicacao = Array.isArray(secao.explicacao)
          ? secao.explicacao.join('\n')
          : secao.explicacao;
        secao.revogado = Array.isArray(secao.revogado)
          ? secao.revogado.join('\n')
          : secao.revogado;
        secao.itens = secao.itens.map((item) => {
          Object.keys(item).forEach((key) => {
            item[key] = Array.isArray(item[key])
              ? item[key].join('\n')
              : item[key];
          });
          item.revogado = Array.isArray(item.revogado)
            ? item.revogado.join('\n')
            : item.revogado;
          return item;
        });
        return secao;
      });
      return dados;
    },
  },
};
</script>
