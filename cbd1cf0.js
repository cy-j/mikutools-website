(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1245:function(t,e,n){var content=n(2304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("33f91995",content,!0,{sourceMap:!1})},2303:function(t,e,n){"use strict";var o=n(1245);n.n(o).a},2304:function(t,e,n){(e=n(11)(!1)).push([t.i,".convert_force .el-select .el-input{width:8.125rem}.convert_force .el-input-group__prepend{background-color:#fff}.convert_force .el-input{width:calc(50% - 1.875rem)}.convert_force .eva{width:1.875rem;text-align:center}@media (max-width:850px){.convert_force .el-input{width:100%}.convert_force .eva{width:100%;text-align:center;margin:1.25rem auto;font-size:1.25rem}}",""]),t.exports=e},2802:function(t,e,n){"use strict";n.r(e);var o=n(47),r=n.n(o),l={name:"ConvertForce",head:function(){return this.$store.state.currentTool.head},data:function(){return{fromValue:0,fromUnit:0,toValue:0,toUnit:1,items:[{name:"牛",unit:"N",value:0,m:1e3},{name:"千牛",unit:"kN",value:0,m:1},{name:"千克力",unit:"kgf",value:0,m:101.971621},{name:"克力",unit:"gf",value:0,m:101971.621},{name:"公吨力",unit:"tf",value:0,m:.102},{name:"磅力",unit:"lbf",value:0,m:224.808943},{name:"千磅力",unit:"kip",value:0,m:.224808943},{name:"达因",unit:"dyn",value:0,m:1e8},{name:"磅达",unit:"pdl",value:0,m:7233.01146}]}},methods:{convert:function(t,e){if(!r.a.isNumber(parseFloat(t)))return this.clear(),!1;var n=this.items[this.fromUnit],o=this.items[this.toUnit];e?(this.fromValue=t/o.m*n.m,this.toValue=t):(this.toValue=t/n.m*o.m,this.fromValue=t)},clear:function(){this.fromValue=0,this.toValue=0,this.items.forEach((function(i){i.value=0}))}}},c=(n(2303),n(7)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"convert_force"},[n("nya-container",{attrs:{title:"力单位转换"}},[n("el-input",{attrs:{type:"number",autofocus:"",value:t.fromValue},on:{input:function(e){return t.convert(e,0)}}},[n("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},on:{input:function(e){return t.convert(t.fromValue,0)}},slot:"prepend",model:{value:t.fromUnit,callback:function(e){t.fromUnit=e},expression:"fromUnit"}},t._l(t.items,(function(e,o){return n("el-option",{key:o,attrs:{label:e.name,value:o}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{float:"right",color:"var(--color-text-placeholder)","font-size":"13px"}},[t._v(t._s(e.unit))])])})),1)],1),n("div",{staticClass:"eva eva-swap-outline"}),n("el-input",{attrs:{type:"number",value:t.toValue},on:{input:function(e){return t.convert(e,1)}}},[n("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},on:{input:function(e){return t.convert(t.fromValue,0)}},slot:"prepend",model:{value:t.toUnit,callback:function(e){t.toUnit=e},expression:"toUnit"}},t._l(t.items,(function(e,o){return n("el-option",{key:o,attrs:{label:e.name,value:o}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{float:"right",color:"var(--color-text-placeholder)","font-size":"13px"}},[t._v(t._s(e.unit))])])})),1)],1)],1),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("如果转换数据有问题，请在首页【留言板】中进行反馈")]),n("li",[t._v("结果以实际为准，本数据仅供参考，由于转换单位不同可能会有一定误差，本工具以【平方米(㎡)】作为基准单位")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);