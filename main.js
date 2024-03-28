(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 9fr;\n}\n\n.sidebar {\n    background-color: azure;\n    font-size: 25px;\n    font-weight: bold;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 50px;\n    gap: 30px;\n}\n\nul {\n    list-style-type: none;\n}\n\nul > li {\n    margin: 20px;\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.addproject {\n    font-size: 30px;\n    height: 50px;\n    width: 50px;\n}\n\n.delproject {\n    height: 15px;\n    width: 15px;\n    font-size: 10px;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 50px;\n    gap: 30px;\n    justify-content: center;\n}\n\n.form {\n    position: absolute;\n    top: 30%;\n    left: 30%;\n    height: 700px;\n    width: 400px;\n    border: 5px solid black;\n    border-radius: 50px;\n    background-color: orange;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    opacity: 0; \n}\n\n.form div {\n    display: flex;\n    justify-content: space-around;\n}",""]);const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var d=r(e,o),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),o=n.n(r),i=n(659),a=n.n(i),c=n(56),d=n.n(c),l=n(540),s=n.n(l),u=n(113),p=n.n(u),m=n(365),f={};function h(){localStorage.setItem("memory",JSON.stringify(y.list()))}function v(e,t){let n=0,r=0,o=document.querySelector(".form"),i=document.querySelector(".hide"),a=document.querySelector(".submit"),c=document.querySelector("#title"),d=document.querySelector("#description"),l=document.querySelector("#datetime"),s=document.querySelector("#priority");function u(){let i=document.querySelector(".content");i.textContent="";let a=document.createElement("button");a.classList.add("addbutton"),a.textContent="NEW TASK",i.appendChild(a);let u=document.createElement("ul");t.forEach((t=>{t.pid==e&&t.content.forEach((e=>{let i=document.createElement("li"),a=document.createElement("input");a.setAttribute("type","checkbox"),"yes"==e.completion&&a.setAttribute("checked","true"),i.textContent=`${e.title} - due date: ${e.dueDate}`,"high"==e.priority?i.setAttribute("style","color: red;"):"low"==e.priority&&i.setAttribute("style","color: green;");let p=document.createElement("button");p.textContent="X",p.classList.add("delbutton");let m=document.createElement("button");m.textContent="Change",m.classList.add("renbutton"),i.appendChild(a),i.appendChild(m),i.appendChild(p),u.appendChild(i),a.addEventListener("click",(()=>{"true"==a.getAttribute("checked")?(a.setAttribute("checked","false"),y.setComplete(t.pid,e.id),h()):(a.setAttribute("checked","true"),y.setComplete(t.pid,e.id),h())})),p.addEventListener("click",(()=>{0==n&&(y.deleteTask(t.pid,e.id),u.removeChild(i))})),m.addEventListener("click",(()=>{r=e.id,c.value=e.title,d.value=e.description,l.value=e.dueDate,s.value=e.priority,n=2,o.setAttribute("style","opacity: 1")}))}))})),i.appendChild(u),h(),a.addEventListener("click",(()=>{o.setAttribute("style","opacity: 1"),n=1}))}function p(){c.value="",d.value="",l.value="",s.value="medium",o.setAttribute("style","opacity: 0"),n=0}u(),i.addEventListener("click",(()=>{p()})),a.addEventListener("click",(()=>{""!=c.value&&1==n?(y.createTask(e,c.value,d.value,l.value,s.value),p(),u()):""!=c.value&&2==n&&(y.changeTask(e,r,c.value,d.value,l.value,s.value),p(),u())}))}f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals;const y=function(){let e=[],t=1,n=1;return{list:()=>e,createProject:n=>e.push({name:n,content:[],pid:t++}),createTask:(t,r,o,i,a)=>{e.forEach((e=>{e.pid==t&&e.content.push({title:r,description:o,dueDate:i,priority:a,completion:"no",id:n++})}))},renameProject:(t,n)=>{e.forEach((e=>{e.pid==t&&(e.name=n)}))},changeTask:(t,n,r,o,i,a)=>{e.forEach((e=>{e.pid==t&&e.content.forEach((e=>{e.id==n&&(e.title=r,e.description=o,e.dueDate=i,e.priority=a)}))}))},deleteTask:(t,n)=>{e.forEach((e=>{if(e.pid==t){let t=[];e.content.forEach((r=>{r.id!=n&&t.push(r),e.content=t}))}}))},deleteProject:t=>{let n=[];e.forEach((r=>{r.pid!=t&&n.push(r),e=n}))},currentPid:()=>t,setComplete:(t,n)=>{e.forEach((e=>{e.pid==t&&e.content.forEach((e=>{e.id==n&&("no"==e.completion?e.completion="yes":e.completion="no")}))}))},setList:t=>e=t,maxpid:()=>{let n=0;e.length>0&&e.forEach((e=>{e.pid>n&&(n=e.pid)})),t=n+1},maxtid:()=>{let t=0;e.length>0&&e.forEach((e=>{e.content.length>0&&e.content.forEach((e=>{e.id>t&&(t=e.id)}))})),n=t+1}}}();let x=JSON.parse(localStorage.getItem("memory"));""==x?y.createProject("Default"):(y.setList(x),y.maxpid(),y.maxtid()),function e(t){let n=document.querySelector(".sidebar"),r=document.createElement("button");r.classList.add("addproject"),r.textContent="+",n.textContent="",n.appendChild(r);let o=document.createElement("ul");t.forEach((n=>{let r=document.createElement("li"),i=document.createElement("p");i.textContent=n.name;let a=document.createElement("button");a.textContent="X",a.classList.add("delproject");let c=document.createElement("button");c.textContent="Rename",c.classList.add("renproject"),r.appendChild(i),r.appendChild(c),r.appendChild(a),o.appendChild(r),a.addEventListener("click",(()=>{y.deleteProject(n.pid),o.removeChild(r),h(),v(0,t)})),c.addEventListener("click",(()=>{let t=prompt("Enter new project name",n.name);y.renameProject(n.pid,t),e(y.list()),h()})),i.addEventListener("click",(()=>{v(n.pid,t)}))})),r.addEventListener("click",(()=>{let t=prompt("Enter new project name");y.createProject(t),h(),e(y.list())})),n.appendChild(o)}(y.list()),v(1,y.list())})()})();