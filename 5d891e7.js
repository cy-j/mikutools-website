(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1145:function(t,e,r){"use strict";e.a={http:/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/,http_with_unicode:/https?:\/\/[-A-Za-z0-9\u2E80-\u9FFF+&@#/%?=~_|!:,.;]+[-A-Za-z0-9\u2E80-\u9FFF+&@#/%=~_|]/}},2894:function(t,e,r){"use strict";r.r(e);r(300);var n=r(1145),o={name:"TwitterVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{results:"",loading:!1,form:{url:"",api2:!1},regex:n.a}},methods:{download:function(){var t=this;if(this.loading)return!1;n.a.http.test(this.form.url)?(this.loading=!0,this.results="",this.form.url=this.form.url.match(n.a.http)[0],this.$axios.post("/twitter_video_downloader",{url:this.form.url,useapi2:this.form.api2}).then((function(e){t.loading=!1,t.form.api2?t.results=e.data.data:t.results=e.data.data.url})).catch((function(e){t.loading=!1,t.$notify.error({title:"解析失败",message:e})}))):this.$notify.error({title:"解析失败",message:"请输入正确的链接"})}}},l=r(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"twitter_video_downloader"},[r("nya-container",{attrs:{title:"Twitter 视频下载"}},[r("el-form",{staticClass:"nya-input-btn",attrs:{model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[r("span",{staticClass:"nya-subtitle"},[t._v("请输入视频链接")]),r("el-form-item",{attrs:{prop:"url",rules:[{required:!0,message:"链接不能为空"},{pattern:t.regex.http,message:"链接格式不合法"}]}},[r("el-input",{attrs:{disabled:t.loading,clearable:"",autofocus:"",placeholder:"https://twitter.com/Ice_Hazymoon/status/1089203872285913090"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.download(e))}},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url","string"==typeof e?e.trim():e)},expression:"form.url"}},[r("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.download},slot:"append"},[t._v("\n                        "+t._s(t.loading?"获取中":"开始获取")+"\n                    ")])],1)],1),r("el-form-item",{staticClass:"mb-0",attrs:{label:"使用接口2",prop:"delivery"}},[r("el-switch",{model:{value:t.form.api2,callback:function(e){t.$set(t.form,"api2",e)},expression:"form.api2"}})],1)],1)],1),r("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.results,expression:"results"}],attrs:{title:"获取成功"}},[r("a",{attrs:{href:t.results,target:"_blank",title:"右键另存为下载或长按保存",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.results)+"\n        ")])]),r("nya-container",{attrs:{title:"说明"}},[r("ul",{staticClass:"nya-list"},[r("li",[r("b",[t._v("欢迎关注："),r("a",{attrs:{href:"https://twitter.com/Ice_Hazymoon",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://twitter.com/Ice_Hazymoon")])])]),r("li",[t._v("\n                可以到 "),r("nuxt-link",{attrs:{to:"/video2gif"}},[t._v("\n                    /video2gif\n                ")]),t._v(" 将视频转换成GIF\n            ")],1),r("li",[t._v("注意："),r("b",[t._v("默认使用官方接口，获取速度较快和稳定，如果视频为GIF或者获取不到视频可更换为接口二尝试")])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);