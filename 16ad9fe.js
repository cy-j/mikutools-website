(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1284:function(o,n,t){"use strict";n.a=function(content,o){var n=document.createElement("a");n.download=o,n.style.display="none";var t=new Blob([content]);n.href=URL.createObjectURL(t),n.click()}},1292:function(o,n,t){var content=t(2428);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(12).default)("fb1456c2",content,!0,{sourceMap:!1})},2427:function(o,n,t){"use strict";var r=t(1292);t.n(r).a},2428:function(o,n,t){(n=t(11)(!1)).push([o.i,".markdown{margin-bottom:.9375rem}.markdown .v-note-wrapper{border:.0625rem solid var(--color-text-placeholder)}.markdown pre{font-family:monospace,monospace}.markdown .v-note-op{box-sizing:border-box}.markdown .v-note-edit{min-height:37.5rem}.markdown .v-show-content{color:#000;background-color:var(--color-background)}.markdown .v-show-content pre{color:#fbfbfb}.markdown .v-note-op,.markdown .v-note-panel,.markdown .v-note-wrapper,.markdown textarea{background-color:var(--color-background)!important;color:var(--color-text)!important}.markdown .v-note-op,.markdown .v-note-panel{border-color:var(--color-text-placeholder)!important}.markdown .content-input-wrapper{background-color:var(--color-background)!important}.markdown .op-icon.selected{color:var(--color-text)!important}.markdown .op-icon.selected,.markdown .op-icon:hover{background-color:var(--color-background-primary)!important}.markdown .op-icon:hover{color:inherit!important}",""]),o.exports=n},2848:function(o,n,t){"use strict";t.r(n);var r=t(2419),e=(t(2420),t(303)),c=t.n(e),l=(t(494),t(1284)),d={name:"Markdown",components:{mavonEditor:r.mavonEditor},head:function(){return this.$store.state.currentTool.head},data:function(){return{content:"",html:"",markdownOption:{bold:!0},externalLink:!1,isMobile:!1}},mounted:function(){var o=this;window.innerWidth<700&&(this.isMobile=!0),this.$nextTick((function(){o.$refs.md.markdownIt.set({highlight:function(o,n){return n&&c.a.getLanguage(n)?c.a.highlight(n,o).value:""}})}))},methods:{downloadHtml:function(){Object(l.a)(this.html,"markdown.html")},downloadMd:function(){Object(l.a)(this.content,"markdown.md")},handleHtml:function(o,n){this.html=n}}},m=(t(2427),t(7)),component=Object(m.a)(d,(function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{staticClass:"markdown"},[t("nya-container",{attrs:{title:"Markdown 编辑器"}},[t("mavon-editor",{ref:"md",staticClass:"typo",attrs:{"box-shadow":!1,subfield:!0,"default-open":o.isMobile?"edit":"preview","external-link":o.externalLink},on:{change:o.handleHtml},model:{value:o.content,callback:function(n){o.content=n},expression:"content"}}),t("div",{staticClass:"mt-15"},[t("el-button",{attrs:{type:"primary"},on:{click:o.downloadHtml}},[o._v("\n                下载 HTML 文件\n            ")]),t("el-button",{attrs:{type:"primary"},on:{click:o.downloadMd}},[o._v("\n                下载 MD 文件\n            ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);