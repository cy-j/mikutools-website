(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1153:function(t,e,n){var l=n(15),o=n(28),r=n(82),c=/"/g,f=function(t,e,n,l){var o=String(r(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+String(l).replace(c,"&quot;")+'"'),f+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(f),l(l.P+l.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},1164:function(t,e,n){"use strict";n(1153)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},1239:function(t,e,n){var content=n(2254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("c42f077a",content,!0,{sourceMap:!1})},2253:function(t,e,n){"use strict";var l=n(1239);n.n(l).a},2254:function(t,e,n){(e=n(11)(!1)).push([t.i,".cdnjs .show-info ul{margin:0;padding:0}.cdnjs .show-info ul li{list-style:none}.cdnjs .show-info ul.info{margin:.9375rem 0}.cdnjs .show-info ul.info li{line-height:1.3}.cdnjs .show-info ul.info li .title{font-weight:700}.cdnjs .show-info .view-cdn-list li{cursor:pointer}",""]),t.exports=e},2795:function(t,e,n){"use strict";n.r(e);n(1164),n(46);var l=n(9),o=(n(54),{name:"Template",head:function(){return this.$store.state.currentTool.head},data:function(){return{query:"",results:null,allInfo:"",loading:!1,currentJs:"",viewall:!1,cdnjsUrl:[{name:"css.loli.net",link:"https://cdnjs.loli.net/ajax/libs/"},{name:"cdnjs.net",link:"https://libs.cdnjs.net/"},{name:"www.bootcdn.cn",link:"https://cdn.bootcss.com/"},{name:"cdn.baomitu.com",link:"https://lib.baomitu.com/"},{name:"www.staticfile.org",link:"https://cdn.staticfile.org/"}],speed:{},showInfo:!1}},methods:{search:function(){var t=this;this.query&&(this.loading=!0,this.$axios.post("/proxy",{url:"https://api.cdnjs.com/libraries?search=".concat(this.query)}).then((function(e){e.data.total>0?(e.data.results=e.data.results.filter((function(t){return t.latest})),t.results=e.data):t.$notify.error({title:"查询失败",message:"没有找到相关库，请确认名称是否正确"}),t.loading=!1})).catch((function(e){t.$notify.error({title:"查询失败",message:e}),t.loading=!1})))},queryAll:function(t){var e=this;this.$store.commit("SET_STORE",{key:"globalLoading",value:!0}),this.$axios.post("/proxy",{url:"https://api.cdnjs.com/libraries/".concat(t)}).then((function(t){e.$store.commit("SET_STORE",{key:"globalLoading",value:!1}),e.allInfo=t.data,e.showInfo=!0})).catch((function(t){e.$store.commit("SET_STORE",{key:"globalLoading",value:!1}),e.$notify.error({title:"查询失败",message:t})}))},catUrl:function(t){return t.latest.replace("https://cdnjs.cloudflare.com/ajax/libs/","")},viewAll2:function(t,e,n){this.currentJs="".concat(t,"/").concat(e,"/").concat(n),this.viewall=!0},viewAll:function(t){this.currentJs=t,this.viewall=!0},startSpeed:function(){var t=this;this.cdnjsUrl.forEach(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(n){var l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=n.link+t.currentJs,o=(new Date).getTime(),t.$set(t.speed,l,"测速中"),t.$axios.get("".concat(l,"?timestamp=").concat((new Date).getTime()),{auth:!1}).then((function(){var e=(new Date).getTime();t.$set(t.speed,l,e-o+"ms")})).catch((function(){t.speed[l]="失败"}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getSpeedClass:function(time){var t=parseInt(time);return isNaN(t)?"":t<=100?"nya-c-success":t>100&&t<300?"nya-c-wrning":"nya-c-danger"},doCopy:function(text){var t=this;this.$copyText(text).then((function(){t.$message.success("复制成功")}),(function(){t.$message.error("复制失败，请手动选择复制")}))}}}),r=(n(2253),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cdnjs"},[n("el-dialog",{attrs:{title:"请自行选择一个速度最佳的使用",visible:t.viewall,fullscreen:t.$store.state.isMobile,width:"600px"},on:{"update:visible":function(e){t.viewall=e}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.cdnjsUrl}},[n("el-table-column",{attrs:{prop:"name",label:"提供者",width:"130"}}),n("el-table-column",{attrs:{label:"点击复制CDN地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",title:t.currentJs},on:{click:function(n){return t.doCopy(e.row.link+t.currentJs)}}},[t._v("\n                        "+t._s(e.row.link+t.currentJs)+"\n                    ")])]}}])}),n("el-table-column",{attrs:{label:"速度",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.speed[e.row.link+t.currentJs]?n("span",{class:t.getSpeedClass(t.speed[e.row.link+t.currentJs])},[t._v(t._s(t.speed[e.row.link+t.currentJs]))]):n("span",[t._v("未测试")])]}}])},[n("template",{slot:"header"},[n("el-button",{attrs:{size:"mini",round:""},on:{click:t.startSpeed}},[t._v("\n                        测速\n                    ")])],1)],2)],1)],1),n("nya-container",{attrs:{title:"前端CDN查询"}},[n("div",{staticClass:"nya-subtitle"},[t._v("\n            请输入要获取CDN的库名\n        ")]),n("el-input",{attrs:{placeholder:"jquery",autofocus:"",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}},[n("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.search},slot:"append"},[t._v("\n                "+t._s(t.loading?"搜索中":"开始搜索")+"\n            ")])],1)],1),t.results?n("nya-container",{attrs:{title:"查询成功"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showInfo,expression:"!showInfo"}]},[n("h2",[t._v("共找到 "+t._s(t.results.total)+" 个库")]),n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.results.results}},[n("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"300"}}),n("el-table-column",{attrs:{prop:"name",label:"Latest","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{title:t.catUrl(e.row),type:"text"},on:{click:function(n){t.viewAll(t.catUrl(e.row))}}},[t._v("\n                            "+t._s(t.catUrl(e.row))+"\n                        ")])]}}],null,!1,945349008)}),n("el-table-column",{attrs:{prop:"name",label:"全部信息",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.queryAll(e.row.name)}}},[t._v("\n                            所有版本\n                        ")])]}}],null,!1,1278249374)})],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showInfo,expression:"showInfo"}],staticClass:"show-info"},[n("el-page-header",{attrs:{content:t.allInfo.name},on:{back:function(e){t.showInfo=!1}}}),t.allInfo?n("ul",{staticClass:"info"},[t.allInfo.name?n("li",[n("span",{staticClass:"title"},[t._v("名称：")]),n("span",[t._v(t._s(t.allInfo.name))])]):t._e(),t.allInfo.homepage?n("li",[n("span",{staticClass:"title"},[t._v("主页：")]),n("a",{attrs:{href:t.allInfo.homepage,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.allInfo.homepage))])]):t._e(),t.allInfo.description?n("li",[n("span",{staticClass:"title"},[t._v("简介：")]),n("span",[t._v(t._s(t.allInfo.description))])]):t._e(),t.allInfo.repository?n("li",[n("span",{staticClass:"title"},[t._v("仓库：")]),n("span",[t._v(t._s(t.allInfo.repository.type)+" / "+t._s(t.allInfo.repository.url))])]):t._e(),t.allInfo.license?n("li",[n("span",{staticClass:"title"},[t._v("协议：")]),n("span",[t._v(t._s(t.allInfo.license))])]):t._e(),t.allInfo.author?n("li",[n("span",{staticClass:"title"},[t._v("作者：")]),n("span",[t._v(t._s(t.allInfo.author.name)+" / "),n("a",{attrs:{href:t.allInfo.author.url,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.allInfo.author.url))])])]):t._e(),t.allInfo.autoupdate?n("li",[n("span",{staticClass:"title"},[t._v("自动更新：")]),n("span",[t._v(t._s(t.allInfo.autoupdate.type)+" / "+t._s(t.allInfo.autoupdate.target))])]):t._e()]):t._e(),n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.allInfo.assets}},[n("el-table-column",{attrs:{prop:"version",label:"版本号",width:"100"}}),n("el-table-column",{attrs:{prop:"name",label:"文件名（点击文件名查看CDN地址）"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.files,(function(l){return n("div",{key:l,on:{click:function(n){return t.viewAll2(t.allInfo.name,e.row.version,l)}}},[n("el-button",{attrs:{type:"text"}},[t._v("\n                                "+t._s(l)+"\n                            ")])],1)}))}}],null,!1,1150767973)})],1)],1)]):t._e(),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("数据来自："),n("a",{attrs:{href:"https://cdnjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cdnjs.com/")])]),n("li",[t._v("如果你有其他的 "),n("b",[t._v("CDNJS")]),t._v(" CDN 地址推荐可发送至 "+t._s(t.$store.state.env.admin)+" 联系我添加")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);