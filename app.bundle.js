!function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var o=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[e].concat(s).concat([o]).join("\n")}var r;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(o=0;o<t.length;o++){var r=t[o];null!=r[0]&&i[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),n.push(r))}},n}},function(t,n,e){"use strict";t.exports=function(t,n){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||n?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,n,e){t.exports=e.p+"images/83a9a6f135533c2db0f7c411ec7d025d.png"},function(t,n,e){e(15),t.exports=e(4)},function(t,n,e){var i=e(5);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(13)(i,o);i.locals&&(t.exports=i.locals)},function(t,n,e){(n=t.exports=e(0)(!1)).i(e(6),""),n.i(e(7),""),n.i(e(8),""),n.i(e(9),""),n.i(e(10),""),n.i(e(11),""),n.i(e(12),""),n.push([t.i,".content-wrapper {\n    display: flex;\n    justify-content: space-around;\n}\n.instruments {\n    max-width: 155px;\n    box-sizing: border-box;\n    padding: 20px;\n    border: 1px solid #000000;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n",""])},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,".color-palette-container {\n    position: relative;\n    width: 70px;\n    height: 70px;\n}\n.color-palette-container__input {\n    z-index: 0;\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n    border: none;\n    outline: none;\n}\n.color-palette-container__input_primary {\n    top: 0;\n    left: 0;\n}\n.color-palette-container__input_secondary {\n    bottom: 0;\n    right: 0;\n}\n.color-palette-container__input_active {\n    z-index: 1;\n}\n",""])},function(t,n,e){n=t.exports=e(0)(!1);var i=e(1)(e(2));n.push([t.i,".resize-canvas {\n    cursor: pointer;\n    transition: right 0.3s;\n    position: fixed;\n    right: 0;\n    top: 300px;\n    width: 46px;\n    height: 46px;\n    background: #000000 url("+i+") no-repeat -138px -182px;\n}\n.resize-canvas:hover {\n    background-color: #444444;\n}\n.resize-canvas_open {\n    right: 200px;\n}\n.resize-canvas_open:hover {\n    background-color: #000000;\n}\n.resize-canvas__content {\n    transition: width 0.3s;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    box-sizing: border-box;\n    background-color: #000000;\n    width: 0;\n}\n.resize-canvas__content_open {\n    width: 200px;\n}\n.resize-canvas__row {\n    font-family: sans-serif;\n    padding: 10px;\n    display: flex;\n    justify-content: flex-start;\n}\n.resize-canvas__input {\n    outline: none;\n    border: 1px solid #ffffff;\n    background-color: #444444;\n    color: #ffffff;\n    line-height: 25px;\n    text-align: center;\n    padding: 0 3px;\n    margin-right: 10px;\n    height: 25px;\n    width: 50px;\n}\n.resize-canvas__text {\n    width: 50px;\n    color: #ffffff;\n    line-height: 25px;\n}\n",""])},function(t,n,e){n=t.exports=e(0)(!1);var i=e(1)(e(2));n.push([t.i,".instrument-item {\n    height: 46px;\n    padding-bottom: 10px;\n    z-index: 1;\n}\n.instrument-item:hover {\n    z-index: 5;\n}\n.instrument-item__img {\n    transition: background-color 0.3s;\n    cursor: pointer;\n    position: relative;\n    width: 46px ;\n    height: 46px;\n    margin: 5px;\n    background-color: #000000;\n    background-image: url("+i+");\n    background-repeat: no-repeat;\n}\n.instrument-item__img:hover {\n    background-color: #535353;\n}\n.instrument-item__img_active {\n    outline: 3px solid #ffbf35;\n}\n.instrument-item__shortcut-button {\n    color: #ffbf35;\n}\n\n",""])},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,".instrument-item__img_pen {\r\n    background-position: -182px -92px;\r\n}\r\n",""])},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,".instrument-item__img_eraser {\r\n    background-position: -46px -228px;\r\n}\r\n",""])},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,".instrument-item__img_bucket {\r\n    background-position: -228px -92px;\r\n}\r\n",""])},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,".main-canvas {\r\n    display: block;\r\n}\r\n",""])},function(t,n,e){var i,o,s={},r=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var i=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}n[t]=i}return n[t]}}(),c=null,l=0,u=[],h=e(14);function p(t,n){for(var e=0;e<t.length;e++){var i=t[e],o=s[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(b(i.parts[r],n))}else{var a=[];for(r=0;r<i.parts.length;r++)a.push(b(i.parts[r],n));s[i.id]={id:i.id,refs:1,parts:a}}}}function d(t,n){for(var e=[],i={},o=0;o<t.length;o++){var s=t[o],r=n.base?s[0]+n.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};i[r]?i[r].parts.push(a):e.push(i[r]={id:r,parts:[a]})}return e}function f(t,n){var e=a(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===t.insertAt)i?i.nextSibling?e.insertBefore(n,i.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),u.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,e);e.insertBefore(n,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=u.indexOf(t);n>=0&&u.splice(n,1)}function m(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return e.nc}();i&&(t.attrs.nonce=i)}return g(n,t.attrs),f(t,n),n}function g(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function b(t,n){var e,i,o,s;if(n.transform&&t.css){if(!(s="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=s}if(n.singleton){var r=l++;e=c||(c=m(n)),i=C.bind(null,e,r,!1),o=C.bind(null,e,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(n,t.attrs),f(t,n),n}(n),i=function(t,n,e){var i=e.css,o=e.sourceMap,s=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||s)&&(i=h(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}.bind(null,e,n),o=function(){v(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(n),i=function(t,n){var e=n.css,i=n.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){v(e)});return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=r()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=d(t,n);return p(e,n),function(t){for(var i=[],o=0;o<e.length;o++){var r=e[o];(a=s[r.id]).refs--,i.push(a)}t&&p(d(t,n),n);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete s[a.id]}}}};var y,S=(y=[],function(t,n){return y[t]=n,y.filter(Boolean).join("\n")});function C(t,n,e,i){var o=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=S(n,o);else{var s=document.createTextNode(o),r=t.childNodes;r[n]&&t.removeChild(r[n]),r.length?t.insertBefore(s,r[n]):t.appendChild(s)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,i=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,s=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(o=0===s.indexOf("//")?s:0===s.indexOf("/")?e+s:i+s.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,n,e){"use strict";e.r(n);var i=new class{constructor(){this.colorPrimary=document.querySelector(".color-palette-container__input_primary"),this.colorPrimaryColor=this.colorPrimary.value,this.colorSecondary=document.querySelector(".color-palette-container__input_secondary"),this.changeColor=this.changeColor.bind(this),this.colorPrimary.addEventListener("change",t=>{const n=t.target;Promise.resolve().then(()=>{this.changeColor(n.value)})})}changeColor(t){this.colorSecondary.value=this.colorPrimaryColor,this.colorPrimaryColor=t}};var o=new class{constructor(t,n){this.canvas=document.querySelector(".main-canvas"),this.canvas.width=Math.round(window.innerHeight/1.1),this.canvas.height=Math.round(window.innerHeight/1.1),this.quantitySectorsX=t,this.quantitySectorsY=n,this.totalQuantitySectors=0,this.defaultColor="#c7c7c7",this.listSectors=[],this.lastClickCoordinates=null}drawingAllElements(){this.listSectors.forEach(t=>{t.forEach(t=>{this.drawingElements(t)})})}plots(){this.listSectors=[[]],this.totalQuantitySectors=this.quantitySectorsX*this.quantitySectorsY;let t=0,n=0;const e=Math.round(this.canvas.width/this.quantitySectorsX),i=Math.round(this.canvas.height/this.quantitySectorsY);this.canvas.width=this.quantitySectorsX*e,this.canvas.height=this.quantitySectorsY*i;for(let o=0;o<this.quantitySectorsX*this.quantitySectorsY;o+=1)this.listSectors[Math.floor(n/i)].push({neighbors:[],x:t,y:n,w:e,h:i,color:this.defaultColor}),(t+=e)>=this.canvas.width&&(t=0,n+=i,this.listSectors.push([]));this.listSectors.pop(),this.drawingAllElements(),this.identifyingNeighbors()}identifyingNeighbors(){this.listSectors.forEach((t,n)=>{t.forEach((e,i)=>{let o=null,s=null,r=null,a=null;n>0&&(s=this.listSectors[n-1][i]),i>0&&(o=this.listSectors[n][i-1]),i+1<t.length&&(r=this.listSectors[n][i+1]),n+1<this.listSectors.length&&(a=this.listSectors[n+1][i]);const c=e;c.neighbors.push(o,r,s,a),c.neighbors=c.neighbors.filter(t=>t||!1)})})}changeNumberSections(){const t=[];this.listSectors.forEach((n,e)=>{n.forEach((n,i)=>{n.color!==this.defaultColor&&t.push({color:n.color,indexRow:e,indexColumn:i})})}),this.plots(),t.forEach(t=>{this.listSectors.length>t.indexRow&&this.listSectors[t.indexRow].length>t.indexColumn&&(this.listSectors[t.indexRow][t.indexColumn].color=t.color)}),this.drawingAllElements()}drawingElements(t){const n=this.canvas.getContext("2d");n.beginPath(),n.fillStyle=t.color,n.rect(t.x,t.y,t.w,t.h),n.fill()}}(0,0);var s=new class{constructor(){this.resizeButton=document.querySelector(".resize-canvas"),this.resizeContent=this.resizeButton.querySelector(".resize-canvas__content"),this.changeViewContent=this.changeViewContent.bind(this),this.changeSizeCanvas=this.changeSizeCanvas.bind(this),this.inputsSize=this.resizeContent.querySelectorAll(".resize-canvas__input"),this.inputSizeX=null,this.inputSizeY=null,[...this.inputsSize].forEach(t=>{t.classList.contains("resize-canvas__input_x")?this.inputSizeX=t:this.inputSizeY=t,t.addEventListener("keyup",this.changeSizeCanvas)}),o.quantitySectorsX=this.inputSizeX.value,o.quantitySectorsY=this.inputSizeY.value,o.plots(),this.resizeButton.addEventListener("click",this.changeViewContent)}changeViewContent(t){t.target.classList.contains("resize-canvas")&&(this.resizeButton.classList.toggle("resize-canvas_open"),this.resizeContent.classList.toggle("resize-canvas__content_open"))}changeSizeCanvas(t){const n=t.target;n.value=n.value.replace(/\D+/gi,""),+n.value<n.dataset.min&&(n.value=n.dataset.min),+n.value>n.dataset.max&&(n.value=n.dataset.max),o.quantitySectorsX=this.inputSizeX.value,o.quantitySectorsY=this.inputSizeY.value,+o.quantitySectorsX===o.listSectors[0].length&&+o.quantitySectorsY===o.listSectors.length||o.changeNumberSections()}};class r{constructor(t){this.mainCanvas=o,this.mainCanvasContent=this.mainCanvas.canvas,this.state=!1,this.mouseButtonNumber=0,this.typeEvent=null,this.colorPrimary=i.colorPrimary,this.colorSecondary=i.colorSecondary,this.toolCSSClass=t,this.toolButton=document.querySelector(`.${this.toolCSSClass}`),this.lastClickCoordinates=null,this.stateChange=this.stateChange.bind(this),this.subscribeEvents=this.subscribeEvents.bind(this),this.unsubscribeEvents=this.unsubscribeEvents.bind(this),this.useActiveTool=this.useActiveTool.bind(this),this.mainCanvasContent.addEventListener("mousedown",this.subscribeEvents),this.mainCanvasContent.addEventListener("mouseout",()=>{this.lastClickCoordinates=null}),this.mainCanvasContent.addEventListener("contextmenu",t=>{t.preventDefault()}),document.addEventListener("click",this.stateChange)}static findAllPointsLine(t,n,e,i){const o=[],s=Math.max(Math.abs(t-e),Math.abs(n-i));for(let r=0;r<s;r+=1){const a=r/s;o.push({x:a*(e-t)+t,y:a*(i-n)+n})}return o}crossingSectorCheck(t,n){const e=Math.floor(this.mainCanvasContent.width/this.mainCanvas.quantitySectorsX),i=Math.floor(this.mainCanvasContent.height/this.mainCanvas.quantitySectorsY),o=Math.floor(t/e),s=Math.floor(n/i);return this.mainCanvas.listSectors[s][o]}applicationToolSector(t,n){const e=this.crossingSectorCheck(t,n);e&&(this.use&&(this.colorPrimary=i.colorPrimary,this.colorSecondary=i.colorSecondary,this.use(e)),this.mainCanvas.drawingElements(e))}useActiveTool(t){this.typeEvent=t.type;const n=t.pageX-this.mainCanvasContent.getBoundingClientRect().left,e=t.pageY-this.mainCanvasContent.getBoundingClientRect().top;if(this.lastClickCoordinates){const t=this.lastClickCoordinates.x,i=this.lastClickCoordinates.y;r.findAllPointsLine(t,i,n,e).forEach(t=>{this.applicationToolSector(t.x,t.y)})}else this.applicationToolSector(n,e);this.lastClickCoordinates={x:n,y:e}}unsubscribeEvents(t){this.lastClickCoordinates=null,this.useActiveTool(t),this.mainCanvasContent.removeEventListener("mousemove",this.useActiveTool),document.removeEventListener("mouseup",this.unsubscribeEvents),this.lastClickCoordinates=null}subscribeEvents(t){this.mouseButtonNumber=t.button,this.state&&(this.useActiveTool(t),this.mainCanvasContent.addEventListener("mousemove",this.useActiveTool),document.addEventListener("mouseup",this.unsubscribeEvents))}stateChange(t){const n=t.target;n.classList.contains("instrument-item__img")&&(n.classList.contains(this.toolCSSClass)?(this.state=!0,this.toolButton.classList.add("instrument-item__img_active")):(this.state=!1,this.toolButton.classList.remove("instrument-item__img_active")))}}var a=new class extends r{use(t){const n=t;let e=this.colorPrimary.value;this.mouseButtonNumber>0&&(e=this.colorSecondary.value),n.color=e}}("instrument-item__img_pen");var c=new class extends r{use(t){t.color=this.mainCanvas.defaultColor}}("instrument-item__img_eraser");var l=new class extends r{use(t){"mouseup"===this.typeEvent&&(this.findingNeighborsWithSameColor=this.findingNeighborsWithSameColor.bind(this),this.chengSectorColor=this.chengSectorColor.bind(this),this.listNeighbors=[],this.checkedSectors=0,this.startingSector=t,this.sectorColor=this.startingSector.color,this.color=this.colorPrimary.value,this.mouseButtonNumber>0&&(this.color=this.colorSecondary.value),this.findingNeighborsWithSameColor(this.startingSector))}chengSectorColor(t){const n=t;n.color===this.sectorColor&&(n.color=this.color,this.mainCanvas.drawingElements(n),this.listNeighbors.push(n))}findingNeighborsWithSameColor(t){for(this.listNeighbors.push(...t.neighbors),this.listNeighbors=this.listNeighbors.filter(t=>t.color===this.sectorColor);this.listNeighbors.length>0;){if(this.checkedSectors>this.mainCanvas.totalQuantitySectors){this.listNeighbors=[];break}this.checkedSectors+=1,this.listNeighbors.shift().neighbors.forEach(this.chengSectorColor)}this.startingSector.color=this.color,this.mainCanvas.drawingElements(t)}}("instrument-item__img_bucket");console.log(a,c,i,l,s)}]);
//# sourceMappingURL=app.bundle.js.map