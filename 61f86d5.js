(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{2816:function(t,n,e){"use strict";e.r(n);var o=e(154),r={name:"Docs",head:function(){return this.$store.state.currentTool.head},data:function(){return{html:"",loading:!0}},mounted:function(){this.parseFile()},methods:{parseFile:function(){var t=this;this.$axios.get("".concat(this.$store.state.env.url,"/markdown/help.md"),{auth:!1}).then((function(n){t.loading=!1,t.html=Object(o.a)(n.data)})).catch((function(n){t.loading=!1,t.$notify.error({title:"获取数据失败：",message:n})}))}}},l=e(7),component=Object(l.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"docs"},[n("nya-container",{attrs:{title:"帮助文档",loading:this.loading}},[n("div",{staticClass:"typo",domProps:{innerHTML:this._s(this.html)}})])],1)}),[],!1,null,null,null);n.default=component.exports}}]);