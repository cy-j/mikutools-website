(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{2882:function(t,e,l){"use strict";l.r(e);var n=l(2537),o=l.n(n),r={name:"SqlFormatter",head:function(){return this.$store.state.currentTool.head},data:function(){return{sql:"",results:"",type:"sql",indent:"  "}},methods:{format:function(){this.sql?this.results=o.a.format(this.sql,{language:this.type,indent:this.indent}):this.$notify.error({title:"格式化",message:"请输入内容"})}}},c=l(7),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"template"},[l("nya-container",{attrs:{title:"SQL 格式化"}},[l("div",{staticClass:"nya-subtitle"},[t._v("\n            输入 SQL 语句开始格式化\n        ")]),l("el-input",{staticClass:"mb-15",attrs:{placeholder:"SELECT * FROM table1",autofocus:"",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.format(e)}},model:{value:t.sql,callback:function(e){t.sql=e},expression:"sql"}},[l("el-button",{attrs:{slot:"append"},on:{click:t.format},slot:"append"},[t._v("\n                格式化\n            ")])],1),l("div",{staticClass:"nya-subtitle"},[t._v("\n            缩进符号（默认为两个空格）\n        ")]),l("el-input",{staticClass:"mb-15",attrs:{placeholder:"输入空格或 TAB",clearable:""},model:{value:t.indent,callback:function(e){t.indent=e},expression:"indent"}}),l("div",{staticClass:"nya-subtitle"},[t._v("\n            选择格式化方式\n        ")]),l("el-select",{staticClass:"full-width",model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[l("el-option",{attrs:{label:"sql",value:"sql"}}),l("el-option",{attrs:{label:"n1ql",value:"n1ql"}}),l("el-option",{attrs:{label:"db2",value:"db2"}}),l("el-option",{attrs:{label:"pl/sql",value:"pl/sql"}})],1)],1),t.results?l("nya-container",{attrs:{title:"处理成功"}},[l("nya-copy",{attrs:{copy:t.results}},[l("div",{domProps:{textContent:t._s(t.results)}})])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);