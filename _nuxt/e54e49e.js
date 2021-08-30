(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{271:function(t,e,r){"use strict";r.r(e);r(58);var n={props:{value:{type:String,default:""},tipo:{type:String,validate:function(t){return["agente","categoria"].includes(t)},default:"agente"}}},o=r(60),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{type:"dark",variant:"secondary"}},[r("b-navbar-brand",{attrs:{href:"#"}},[t._v("Pesquisa de Tempo Especial")]),t._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",staticStyle:{width:"400px"},attrs:{value:t.value,size:"sm",placeholder:"Filtrar"},on:{input:function(e){return t.$emit("input",e)}}}),t._v(" "),r("b-button",{staticClass:"mr-sm-2",class:{active:"agente"===t.tipo},attrs:{size:"sm",variant:"agente"===t.tipo?"primary":"light"},on:{click:function(e){return t.$emit("tipochange","agente")}}},[t._v("\n        Agente\n      ")]),t._v(" "),r("b-button",{class:{active:"categoria"===t.tipo},attrs:{size:"sm",variant:"categoria"===t.tipo?"primary":"light"},on:{click:function(e){return t.$emit("tipochange","categoria")}}},[t._v("\n        Categoria\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,r){"use strict";r.r(e);r(12),r(4),r(1),r(11),r(58),r(70),r(9),r(17),r(30),r(14);var n={props:{filtro:{type:String,default:""},titulo:{type:String,default:""},subtitulo:{type:String,default:""},publicacao:{type:String,default:""},periodo:{type:String,default:""},secoes:{type:Array,default:function(){return[]}},chaves:{type:Object,default:function(){}}},data:function(){return{parametro:""}},computed:{fields:function(){var t=this;return Object.keys(this.chaves).map((function(e){return{key:e,label:t.chaves[e]}}))},filtrado:function(){var t=this;return this.secoes.map((function(e){var r=t.filtrarItens(e.itens,Array.prototype.concat(Object.keys(t.chaves),["revogado"]));return{codigo:e.codigo,titulo:e.titulo,explicacao:e.explicacao,revogado:e.revogado,itens:r}})).filter((function(e){var r=e.explicacao?t.normalizar(e.explicacao):"",n=e.revogado?t.normalizar(e.revogado):"",o=e.titulo?t.normalizar(e.titulo):"";return e.itens.length>0||o.includes(t.parametro)||r.includes(t.parametro)||n.includes(t.parametro)}))}},watch:{filtro:function(t){this.parametro=this.normalizar(this.filtro)}},methods:{normalizar:function(t){return t.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g,"")},stringify:function(t,e){return e.map((function(e){return Array.isArray(t[e])?t[e].join("\n"):"string"==typeof t[e]?t[e]:""})).join("\n")},filtrarItens:function(t,e){var r=this;return this.parametro.length>0?t.filter((function(t){return r.normalizar(r.stringify(t,e)).includes(r.parametro)})):t}}},o=r(60),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"mt-3 text-center",attrs:{"bg-variant":"light"}},[r("b-card-title",[r("h5",[t._v("\n        "+t._s(t.titulo)+"\n        "),r("small",[r("code",[t._v("("+t._s("D.O.U. "+t.publicacao)+")")])])])]),t._v(" "),r("b-card-text",[r("h5",[t._v(t._s(t.subtitulo))])])],1),t._v(" "),t._l(t.filtrado,(function(e){return r("div",{key:e.codigo},[r("b-table",{staticStyle:{"font-size":"small"},attrs:{bordered:"",striped:"",hover:"","caption-top":"","head-variant":"light",items:e.itens,fields:t.fields},scopedSlots:t._u([{key:"table-caption",fn:function(){return[r("b-card",{attrs:{"bg-variant":"secondary","text-variant":"white"}},[r("b-card-title",{staticClass:"my-0"},[r("h5",{staticClass:"my-0"},[t._v("\n              Código "+t._s(e.codigo)+" - "+t._s(e.titulo)+"\n            ")])]),t._v(" "),e.explicacao||e.revogado?r("b-card-body",{staticClass:"mt-3 rounded",attrs:{"body-bg-variant":"light","body-text-variant":"secondary"}},[e.revogado?r("div",t._l(e.revogado.split("\n"),(function(e){return r("p",{key:e,staticClass:"mb-0"},[r("del",[t._v(t._s(e))])])})),0):t._e(),t._v(" "),e.explicacao?r("div",t._l(e.explicacao.split("\n"),(function(e){return r("p",{key:e,staticClass:"mb-0"},[t._v("\n                "+t._s(e)+"\n              ")])})),0):t._e()]):t._e()],1)]},proxy:!0},{key:"cell(agente_nocivo)",fn:function(data){return[data.item.revogado?r("div",t._l(data.item.revogado.split("\n"),(function(e){return r("p",{key:e},[r("del",[t._v(t._s(e))])])})),0):t._e(),t._v(" "),t._l(data.value.split("\n"),(function(e){return r("p",{key:e},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),data.item.descricao?r("div",t._l(data.item.descricao.split("\n"),(function(e){return r("p",{key:e},[t._v("\n            "+t._s(e)+"\n          ")])})),0):t._e()]}}],null,!0)})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(59),r(1),r(12),r(11),r(14),r(9),r(22),r(2),r(4),{data:function(){return{carregado:!1,porAgente:[],porCategoria:[],filtro:"",tipo:"agente"}},computed:{decretos:function(){return"categoria"===this.tipo?this.porCategoria:this.porAgente},secoes:function(){return this.porAgente.length>0?this.porAgente[0].secoes:[]},rotulos:function(){return this.porAgente.length>0?this.porAgente[0].rotulos:{}},periodos:function(){return this.decretos.map((function(t){return t.periodo})).filter((function(t,i,e){return e.indexOf(t)===i}))}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=["53831/agentes","83080/agentes","2172","3048"],n=0;case 2:if(!(n<r.length)){e.next=10;break}return e.next=5,t.obterDados(r[n]);case 5:o=e.sent,t.porAgente.push(o);case 7:n++,e.next=2;break;case 10:r=["53831/ocupacoes","83080/atividades"],c=0;case 12:if(!(c<r.length)){e.next=20;break}return e.next=15,t.obterDados(r[c]);case 15:l=e.sent,t.porCategoria.push(l);case 17:c++,e.next=12;break;case 20:t.carregado=!0;case 21:case"end":return e.stop()}}),e)})))()},methods:{periodo:function(t,e){return 0===t.length?"Até ".concat(e):0===e.length?"A partir de ".concat(t):"De ".concat(t," a ").concat(e)},formatarData:function(t){return t.split("-").reverse().join("-")},obterDados:function(path){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content(path).fetch();case 2:return r=e.sent,n=t.formatarData(r.periodo.inicial),o=t.formatarData(r.periodo.final),r.periodo=t.periodo(n,o),r.publicacao=t.formatarData(r.publicacao),r.secoes.map((function(t){return t.explicacao=Array.isArray(t.explicacao)?t.explicacao.join("\n"):t.explicacao,t.revogado=Array.isArray(t.revogado)?t.revogado.join("\n"):t.revogado,t.itens=t.itens.map((function(t){return Object.keys(t).forEach((function(e){t[e]=Array.isArray(t[e])?t[e].join("\n"):t[e]})),t.revogado=Array.isArray(t.revogado)?t.revogado.join("\n"):t.revogado,t})),t})),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))()}}}),c=r(60),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("filtro",{attrs:{tipo:t.tipo},on:{tipochange:function(e){t.tipo=e}},model:{value:t.filtro,callback:function(e){t.filtro=e},expression:"filtro"}}),t._v(" "),r("b-container",{attrs:{fluid:""}},[r("b-tabs",{staticClass:"my-3",attrs:{pills:""}},t._l(t.periodos,(function(e){return r("b-tab",{key:e,attrs:{title:e}},[t.carregado?r("b-row",t._l(t.decretos.filter((function(t){return t.periodo===e})),(function(e,n){return r("b-col",{key:n},[r("decreto",{key:n,attrs:{filtro:t.filtro,titulo:e.titulo,publicacao:e.publicacao,subtitulo:e.subtitulo,periodo:e.periodo,secoes:e.secoes,chaves:e.rotulos}})],1)})),1):t._e()],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Filtro:r(271).default,Decreto:r(272).default})}}]);