(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{272:function(t,e,r){"use strict";r.r(e);r(12),r(4),r(1),r(11),r(58),r(70),r(9),r(17),r(30),r(14);var n={props:{filtro:{type:String,default:""},titulo:{type:String,default:""},subtitulo:{type:String,default:""},publicacao:{type:String,default:""},periodo:{type:String,default:""},secoes:{type:Array,default:function(){return[]}},chaves:{type:Object,default:function(){}}},data:function(){return{parametro:""}},computed:{fields:function(){var t=this;return Object.keys(this.chaves).map((function(e){return{key:e,label:t.chaves[e]}}))},filtrado:function(){var t=this;return this.secoes.map((function(e){var r=t.filtrarItens(e.itens,Array.prototype.concat(Object.keys(t.chaves),["revogado"]));return{codigo:e.codigo,titulo:e.titulo,explicacao:e.explicacao,revogado:e.revogado,itens:r}})).filter((function(e){var r=e.explicacao?t.normalizar(e.explicacao):"",n=e.revogado?t.normalizar(e.revogado):"",o=e.titulo?t.normalizar(e.titulo):"";return e.itens.length>0||o.includes(t.parametro)||r.includes(t.parametro)||n.includes(t.parametro)}))}},watch:{filtro:function(t){this.parametro=this.normalizar(this.filtro)}},methods:{normalizar:function(t){return t.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g,"")},stringify:function(t,e){return e.map((function(e){return Array.isArray(t[e])?t[e].join("\n"):"string"==typeof t[e]?t[e]:""})).join("\n")},filtrarItens:function(t,e){var r=this;return this.parametro.length>0?t.filter((function(t){return r.normalizar(r.stringify(t,e)).includes(r.parametro)})):t}}},o=r(60),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"mt-3 text-center",attrs:{"bg-variant":"light"}},[r("b-card-title",[r("h5",[t._v("\n        "+t._s(t.titulo)+"\n        "),r("small",[r("code",[t._v("("+t._s("D.O.U. "+t.publicacao)+")")])])])]),t._v(" "),r("b-card-text",[r("h5",[t._v(t._s(t.subtitulo))])])],1),t._v(" "),t._l(t.filtrado,(function(e){return r("div",{key:e.codigo},[r("b-table",{staticStyle:{"font-size":"small"},attrs:{bordered:"",striped:"",hover:"","caption-top":"","head-variant":"light",items:e.itens,fields:t.fields},scopedSlots:t._u([{key:"table-caption",fn:function(){return[r("b-card",{attrs:{"bg-variant":"secondary","text-variant":"white"}},[r("b-card-title",{staticClass:"my-0"},[r("h5",{staticClass:"my-0"},[t._v("\n              Código "+t._s(e.codigo)+" - "+t._s(e.titulo)+"\n            ")])]),t._v(" "),e.explicacao||e.revogado?r("b-card-body",{staticClass:"mt-3 rounded",attrs:{"body-bg-variant":"light","body-text-variant":"secondary"}},[e.revogado?r("div",t._l(e.revogado.split("\n"),(function(e){return r("p",{key:e,staticClass:"mb-0"},[r("del",[t._v(t._s(e))])])})),0):t._e(),t._v(" "),e.explicacao?r("div",t._l(e.explicacao.split("\n"),(function(e){return r("p",{key:e,staticClass:"mb-0"},[t._v("\n                "+t._s(e)+"\n              ")])})),0):t._e()]):t._e()],1)]},proxy:!0},{key:"cell(agente_nocivo)",fn:function(data){return[data.item.revogado?r("div",t._l(data.item.revogado.split("\n"),(function(e){return r("p",{key:e},[r("del",[t._v(t._s(e))])])})),0):t._e(),t._v(" "),t._l(data.value.split("\n"),(function(e){return r("p",{key:e},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),data.item.descricao?r("div",t._l(data.item.descricao.split("\n"),(function(e){return r("p",{key:e},[t._v("\n            "+t._s(e)+"\n          ")])})),0):t._e()]}}],null,!0)})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);