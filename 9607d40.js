(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{1147:function(t,e,n){"use strict";n(38),n(39),n(19);var r=n(218).MD5;e.a=function(){return r(Math.random().toString()).toString()}},1161:function(t,e,n){!function(e){"use strict";var n=function(){return{escape:function(t){return t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return(r="application/font-woff",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var r},dataAsUrl:function(content,t){return"data:"+t+";base64,"+content},isDataUrl:function(t){return-1!==t.search(/^(data:)/)},canvasToBlob:function(canvas){return canvas.toBlob?new Promise((function(t){canvas.toBlob(t)})):function(canvas){return new Promise((function(t){for(var e=window.atob(canvas.toDataURL().split(",")[1]),n=e.length,r=new Uint8Array(n),i=0;i<n;i++)r[i]=e.charCodeAt(i);t(new Blob([r],{type:"image/png"}))}))}(canvas)},resolveUrl:function(t,e){var n=document.implementation.createHTMLDocument(),base=n.createElement("base");n.head.appendChild(base);var a=n.createElement("a");return n.body.appendChild(a),base.href=e,a.href=t,a.href},getAndEncode:function(t){f.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());return new Promise((function(e){var n,r=new XMLHttpRequest;if(r.onreadystatechange=function(){if(4!==r.readyState)return;if(200!==r.status)return void(n?e(n):c("cannot fetch resource: "+t+", status: "+r.status));var o=new FileReader;o.onloadend=function(){var content=o.result.split(/,/)[1];e(content)},o.readAsDataURL(r.response)},r.ontimeout=function(){n?e(n):c("timeout of 30000ms occured while fetching resource: "+t)},r.responseType="blob",r.timeout=3e4,r.open("GET",t,!0),r.send(),f.impl.options.imagePlaceholder){var o=f.impl.options.imagePlaceholder.split(/,/);o&&o[1]&&(n=o[1])}function c(t){console.error(t),e("")}}))},uid:(t=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+t++}),delay:function(t){return function(e){return new Promise((function(n){setTimeout((function(){n(e)}),t)}))}},asArray:function(t){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e},escapeXhtml:function(t){return t.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(t){return new Promise((function(e,n){var image=new Image;image.onload=function(){e(image)},image.onerror=n,image.src=t}))},width:function(t){var e=n(t,"border-left-width"),r=n(t,"border-right-width");return t.scrollWidth+e+r},height:function(t){var e=n(t,"border-top-width"),r=n(t,"border-bottom-width");return t.scrollHeight+e+r}};var t;function e(t){var e=/\.([^\.\/]*?)$/g.exec(t);return e?e[1]:""}function n(t,e){var n=window.getComputedStyle(t).getPropertyValue(e);return parseFloat(n.replace("px",""))}}(),r=function(){var t=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(t,n,c){return function(){return!e(t)}()?Promise.resolve(t):Promise.resolve(t).then(r).then((function(e){var r=Promise.resolve(t);return e.forEach((function(t){r=r.then((function(e){return o(e,t,n,c)}))})),r}))},shouldProcess:e,impl:{readUrls:r,inline:o}};function e(e){return-1!==e.search(t)}function r(e){for(var r,o=[];null!==(r=t.exec(e));)o.push(r[1]);return o.filter((function(t){return!n.isDataUrl(t)}))}function o(t,e,r,o){return Promise.resolve(e).then((function(t){return r?n.resolveUrl(t,r):t})).then(o||n.getAndEncode).then((function(data){return n.dataAsUrl(data,n.mimeType(e))})).then((function(r){return t.replace(function(t){return new RegExp("(url\\(['\"]?)("+n.escape(t)+")(['\"]?\\))","g")}(e),"$1"+r+"$3")}))}}(),o=function(){return{resolveAll:function(){return t(document).then((function(t){return Promise.all(t.map((function(t){return t.resolve()})))})).then((function(t){return t.join("\n")}))},impl:{readAll:t}};function t(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(t){var e=[];return t.forEach((function(t){try{n.asArray(t.cssRules||[]).forEach(e.push.bind(e))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}})),e})).then((function(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return r.shouldProcess(t.style.getPropertyValue("src"))}))})).then((function(e){return e.map(t)}));function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return r.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}}(),c=function(){return{inlineAll:function e(o){return o instanceof Element?function(t){var e=t.style.getPropertyValue("background");return e?r.inlineAll(e).then((function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"))})).then((function(){return t})):Promise.resolve(t)}(o).then((function(){return o instanceof HTMLImageElement?t(o).inline():Promise.all(n.asArray(o.childNodes).map((function(t){return e(t)})))})):Promise.resolve(o)},impl:{newImage:t}};function t(element){return{inline:function(t){return n.isDataUrl(element.src)?Promise.resolve():Promise.resolve(element.src).then(t||n.getAndEncode).then((function(data){return n.dataAsUrl(data,n.mimeType(element.src))})).then((function(t){return new Promise((function(e,n){element.onload=e,element.onerror=n,element.src=t}))}))}}}}(),l={imagePlaceholder:void 0,cacheBust:!1},f={toSvg:h,toPng:function(t,e){return d(t,e||{}).then((function(canvas){return canvas.toDataURL()}))},toJpeg:function(t,e){return d(t,e=e||{}).then((function(canvas){return canvas.toDataURL("image/jpeg",e.quality||1)}))},toBlob:function(t,e){return d(t,e||{}).then(n.canvasToBlob)},toPixelData:function(t,e){return d(t,e||{}).then((function(canvas){return canvas.getContext("2d").getImageData(0,0,n.width(t),n.height(t)).data}))},impl:{fontFaces:o,images:c,util:n,inliner:r,options:{}}};function h(t,e){return function(t){void 0===t.imagePlaceholder?f.impl.options.imagePlaceholder=l.imagePlaceholder:f.impl.options.imagePlaceholder=t.imagePlaceholder;void 0===t.cacheBust?f.impl.options.cacheBust=l.cacheBust:f.impl.options.cacheBust=t.cacheBust}(e=e||{}),Promise.resolve(t).then((function(t){return function t(e,filter,r){return r||!filter||filter(e)?Promise.resolve(e).then((function(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)})).then((function(t){return o(e,t,filter)})).then((function(t){return function(t,e){return e instanceof Element?Promise.resolve().then(r).then(o).then(c).then(l).then((function(){return e})):e;function r(){var source,r;source=window.getComputedStyle(t),r=e.style,source.cssText?r.cssText=source.cssText:function(source,t){n.asArray(source).forEach((function(e){t.setProperty(e,source.getPropertyValue(e),source.getPropertyPriority(e))}))}(source,r)}function o(){[":before",":after"].forEach((function(element){!function(element){var style=window.getComputedStyle(t,element),content=style.getPropertyValue("content");if(""===content||"none"===content)return;var r=n.uid();e.className=e.className+" "+r;var o=document.createElement("style");o.appendChild(function(t,element,style){var e="."+t+":"+element,r=style.cssText?function(style){var content=style.getPropertyValue("content");return style.cssText+" content: "+content+";"}(style):function(style){return n.asArray(style).map((function(t){return t+": "+style.getPropertyValue(t)+(style.getPropertyPriority(t)?" !important":"")})).join("; ")+";"}(style);return document.createTextNode(e+"{"+r+"}")}(r,element,style)),e.appendChild(o)}(element)}))}function c(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}function l(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach((function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)})))}}(e,t)})):Promise.resolve();function o(e,r,filter){var o=e.childNodes;return 0===o.length?Promise.resolve(r):c(r,n.asArray(o),filter).then((function(){return r}));function c(e,n,filter){var r=Promise.resolve();return n.forEach((function(n){r=r.then((function(){return t(n,filter)})).then((function(t){t&&e.appendChild(t)}))})),r}}}(t,e.filter,!0)})).then(m).then(v).then((function(t){e.bgcolor&&(t.style.backgroundColor=e.bgcolor);e.width&&(t.style.width=e.width+"px");e.height&&(t.style.height=e.height+"px");e.style&&Object.keys(e.style).forEach((function(n){t.style[n]=e.style[n]}));return t})).then((function(r){return function(t,e,r){return Promise.resolve(t).then((function(t){return t.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(t)})).then(n.escapeXhtml).then((function(t){return'<foreignObject x="0" y="0" width="100%" height="100%">'+t+"</foreignObject>"})).then((function(foreignObject){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+r+'">'+foreignObject+"</svg>"})).then((function(svg){return"data:image/svg+xml;charset=utf-8,"+svg}))}(r,e.width||n.width(t),e.height||n.height(t))}))}function d(t,e){return h(t,e).then(n.makeImage).then(n.delay(100)).then((function(image){var canvas=function(t){var canvas=document.createElement("canvas");if(canvas.width=e.width||n.width(t),canvas.height=e.height||n.height(t),e.bgcolor){var r=canvas.getContext("2d");r.fillStyle=e.bgcolor,r.fillRect(0,0,canvas.width,canvas.height)}return canvas}(t);return canvas.getContext("2d").drawImage(image,0,0),canvas}))}function m(t){return o.resolveAll().then((function(e){var n=document.createElement("style");return t.appendChild(n),n.appendChild(document.createTextNode(e)),t}))}function v(t){return c.inlineAll(t).then((function(){return t}))}t.exports=f}()},1346:function(t,e,n){"use strict";(function(t){n(38),n(39),n(19),n(121);var r=n(301),o=n(1147),c=n(1161),l=n.n(c);e.a={name:"Watermark",head:function(){return this.$store.state.currentTool.head},data:function(){return{results:"",preview:"",loading:!1,options:{fontSize:13,text:"仅供 xxx 验证使用",alpha:5,color:"#000000",rotate:23,width:10},n:null,watermark:null}},computed:{svg:function(){var e=this.options.fontSize*this.options.text.split("").length;e+=this.options.width/100*e;var n='<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(e,'px" height="').concat(e,'px">\n                <text x="50%" y="50%"\n                    alignment-baseline="middle"\n                    text-anchor="middle"\n                    stroke="').concat(this.options.color,'"\n                    opacity="').concat(this.options.alpha/10,'"\n                    transform="translate(').concat(e/2,", ").concat(e/2,") rotate(").concat(this.options.rotate,") translate(-").concat(e/2,", -").concat(e/2,')"\n                    font-weight="100"\n                    font-size="').concat(this.options.fontSize,'"\n                    font-family="microsoft yahe"\n                    >\n                    ').concat(this.options.text,"\n                </text>\n            </svg>");return"data:image/svg+xml;base64,"+t.from(n).toString("base64")}},methods:{handleChange:function(t){var e=t.target.files;if(!e.length)return!1;this.file=e[0],this.docs=[],this.preview=URL.createObjectURL(this.file)},addWatermark:function(){var t=this;this.loading=!0,l.a.toPng(this.$refs.preview).then((function(e){t.results=e,t.loading=!1,Object(r.a)(e,"".concat(Object(o.a)(),".png"))})).catch((function(e){t.loading=!1,t.$notify.error({title:"处理失败",message:e})}))}}}}).call(this,n(20).Buffer)},1347:function(t,e,n){var content=n(2722);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("818154c2",content,!0,{sourceMap:!1})},2721:function(t,e,n){"use strict";var r=n(1347);n.n(r).a},2722:function(t,e,n){(e=n(11)(!1)).push([t.i,".watermark .nya-subtitle{margin-top:.9375rem}.watermark .preview{position:relative;max-width:50rem}.watermark .preview img{width:100%;height:100%}.watermark .preview .watermark{position:absolute;left:0;top:0;width:100%;height:100%}.watermark .results{max-width:100%}.watermark .inputbtn{margin-bottom:.9375rem}",""]),t.exports=e},2920:function(t,e,n){"use strict";n.r(e);var r=n(1346).a,o=(n(2721),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"watermark"},[n("nya-container",{attrs:{title:"图片加水印"}},[n("div",{staticClass:"nya-subtitle"},[t._v("\n            请选择要添加水印的图片\n        ")]),n("el-input",{attrs:{type:"file",accept:"image/*",disabled:t.loading,placeholder:t.n?t.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件"},nativeOn:{change:function(e){return t.handleChange(e)}},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}},[n("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.addWatermark},slot:"append"},[t._v("\n                "+t._s(t.loading?"处理中":"开始处理")+"\n            ")])],1),n("div",{staticClass:"nya-subtitle"},[t._v("\n            请输入水印文字\n        ")]),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"Hello MikuTools",autofocus:"",clearable:""},model:{value:t.options.text,callback:function(e){t.$set(t.options,"text",e)},expression:"options.text"}}),n("div",{staticClass:"nya-subtitle mb-0 mt-0"},[t._v("\n            字体大小\n        ")]),n("el-slider",{attrs:{min:10,max:30},model:{value:t.options.fontSize,callback:function(e){t.$set(t.options,"fontSize",e)},expression:"options.fontSize"}}),n("div",{staticClass:"nya-subtitle mb-0 mt-0"},[t._v("\n            透明度\n        ")]),n("el-slider",{attrs:{min:0,max:10},model:{value:t.options.alpha,callback:function(e){t.$set(t.options,"alpha",e)},expression:"options.alpha"}}),n("div",{staticClass:"nya-subtitle mb-0 mt-0"},[t._v("\n            旋转角度\n        ")]),n("el-slider",{attrs:{min:0,max:360},model:{value:t.options.rotate,callback:function(e){t.$set(t.options,"rotate",e)},expression:"options.rotate"}}),n("div",{staticClass:"nya-subtitle mb-0 mt-0"},[t._v("\n            文本间距\n        ")]),n("el-slider",{attrs:{min:0,max:100},model:{value:t.options.width,callback:function(e){t.$set(t.options,"width",e)},expression:"options.width"}}),n("div",{staticClass:"nya-subtitle"},[t._v("\n            文字颜色\n        ")]),n("nya-colorpad",{model:{value:t.options.color,callback:function(e){t.$set(t.options,"color",e)},expression:"options.color"}}),t.preview?n("div",{staticClass:"nya-subtitle"},[t._v("\n            预览\n        ")]):t._e(),t.preview?n("div",{ref:"preview",staticClass:"preview"},[n("img",{attrs:{src:t.preview,alt:"preview"}}),n("div",{staticClass:"watermark",style:{background:"url("+t.svg+")"}})]):t._e()],1),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[n("b",[t._v("主要用于某些需要实名认证的情况下，避免将您的一些信息泄露出去")])]),n("li",[n("b",[t._v("全部过程均在本地进行，不会在云端存储您的任何信息")])]),n("li",[t._v("如果生成时间过长或生成失败，请使用其他浏览器，推荐使用 Chrome")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);