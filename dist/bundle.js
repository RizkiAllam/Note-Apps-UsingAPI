(()=>{"use strict";var t={249:(t,n,e)=>{e.d(n,{A:()=>c});var o=e(601),r=e.n(o),a=e(314),i=e.n(a)()(r());i.push([t.id,"body {\n    font-family: 'Roboto', sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f0f0f0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n\n#app {\n    background-color: #fff;\n    border-radius: 10px;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n    width: 90%;\n    max-width: 600px;\n    padding: 20px;\n}\n\n.note-input-wrapper {\n    margin-bottom: -1.5em;\n}\n\n#noteTitle {\n    width: calc(100% - 24px);\n    margin-bottom: 12px;\n    border: none;\n    border-bottom: 1px solid #ccc;\n    outline: none;\n    font-size: 28px;\n    padding: 6px 0;\n    font-weight: bold;\n}\n\n#noteBody {\n    width: 100%;\n    border: 1px 0 solid #ccc ;\n    border-radius: 8px ;\n    outline: none;\n    font-size: 16px;\n    padding: 10px 0;\n    min-height: 100px ;\n    resize: horizontal;\n}\n\n#noteTitle:focus,\n#noteBody:focus {\n    border-color: #007bff; /* Warna border saat fokus */\n}\n\n#noteTitle::placeholder,\n#noteBody::placeholder {\n    color: #999;\n}\n\n.add-note {\n    margin: 2em 0;\n}\n\n.notes-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 20px;\n}\n\n.note {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    padding: 12px;\n    position: relative;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n    transition: transform 0.3s ease;\n}\n\n.note:hover {\n    transform: translateY(-5px);\n}\n\n.note h2 {\n    margin: 0 0 8px;\n    color: #333;\n    font-size: 20px;\n}\n\n.note p {\n    margin: 0;\n    color: #555;\n    font-size: 16px;\n}\n\n.edit-buttons {\n    display: flex;\n    justify-content: flex-end;\n    gap: 8px;\n}\n\n#editedTitle:focus {\n    border-color: #007bff; \n    outline: none;\n}\n\n#editedBody:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.edit-buttons button {\n    border: none;\n    background: none;\n    cursor: pointer;\n    color: #555;\n    font-size: 18px;\n    transition: color 0.3s ease;\n}\n\n.edit-buttons button:hover {\n    color: #333;\n}\n",""]);const c=i},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],l=o.base?s[0]+o.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=e(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var h=r(p,o);o.byIndex=c,n.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=o(t,r),l=0;l<a.length;l++){var u=e(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},659:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return t[o](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(72),n=e.n(t),o=e(825),r=e.n(o),a=e(659),i=e.n(a),c=e(56),s=e.n(c),l=e(540),u=e.n(l),d=e(113),f=e.n(d),p=e(249),h={};function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function v(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,g(o.key),o)}}function b(t,n,e){return n&&v(t.prototype,n),e&&v(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function g(t){var n=function(t,n){if("object"!=y(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==y(n)?n:n+""}function x(t,n,e){return n=O(n),function(t,n){if(n&&("object"===y(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,T()?Reflect.construct(n,e||[],O(t).constructor):n.apply(t,e))}function w(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&k(t,n)}function E(t){var n="function"==typeof Map?new Map:void 0;return E=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(T())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,n);var r=new(t.bind.apply(t,o));return e&&k(r,e.prototype),r}(t,arguments,O(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),k(e,t)},E(t)}function T(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(T=function(){return!!t})()}function k(t,n){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},k(t,n)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}h.styleTagTransform=f(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=u(),n()(p.A,h),p.A&&p.A.locals&&p.A.locals;var C=document.createElement("div");function S(){C.style.display="block"}function j(){C.style.display="none"}C.id="loadingIndicator",C.style.display="none",C.textContent="Loading...",document.body.appendChild(C);var B=[];function M(){var t=document.getElementById("noteContainer");t.innerHTML="",B.forEach((function(n){var e=document.createElement("note-element");e.dataset.id=n.id,e.dataset.title=n.title,e.dataset.body=n.body,t.appendChild(e)}))}var P=function(t){function n(){return m(this,n),x(this,n,arguments)}return w(n,t),b(n,[{key:"connectedCallback",value:function(){this.innerHTML="\n      <header>\n        <h1>Notes App</h1>\n      </header>\n    "}}])}(E(HTMLElement));customElements.define("header-apps",P);var L=function(t){function n(){return m(this,n),x(this,n,arguments)}return w(n,t),b(n,[{key:"connectedCallback",value:function(){this.innerHTML='\n      <div class="note-input-wrapper">\n        <textarea id="noteTitle" name="story" rows="2" cols="33" placeholder="Title"></textarea>\n        <textarea id="noteBody" name="story" rows="10" cols="50" placeholder="Note Body"></textarea>\n      </div>\n      <button class="add-note">Tambah Catatan</button>\n    ',this.querySelector(".add-note").addEventListener("click",H)}}])}(E(HTMLElement));customElements.define("note-input",L);var I=function(t){function n(){var t;return m(this,n),(t=x(this,n)).addEventListener("click",(function(n){var e,o;if(console.log("Element clicked:",t.dataset.id),n.target.classList.contains("fa-edit"))!function(t){var n=B.findIndex((function(n){return n.id===t}));if(-1!==n){var e=B[n].title,o=B[n].body;swal({title:"Edit Catatan",content:{element:"div",attributes:{innerHTML:'\n          <div>\n            <input id="editedTitle" value="'.concat(e,'" placeholder="Masukkan judul" style="margin: 10px;">\n          </div>\n          <div>\n            <textarea id="editedBody" placeholder="Masukkan isi catatan" style="height: 150px;">').concat(o,"</textarea>\n          </div>\n          ")}},buttons:{confirm:{text:"Simpan",closeModal:!1,value:!0,visible:!0},cancel:"Batal"}}).then((function(t){if(t){var e=document.getElementById("editedTitle").value,o=document.getElementById("editedBody").value;if(!e||!o)return void swal("Oops...","Mohon masukkan judul dan isi catatan.","error");B[n].title=e,B[n].body=o,A(),M(),swal("Berhasil","Catatan berhasil diperbarui","success")}else swal("Perubahan Dibatalkan")}))}else swal("Oops...","Catatan tidak ditemukan.","error")}(t.dataset.id.toString());else if(n.target.classList.contains("fa-trash-alt")){var r=t.dataset.id.toString();e=r,o=document.querySelector('.note[data-id="'.concat(e,'"]')),swal({title:"Apakah Anda yakin?",text:"Catatan akan dihapus secara permanen dan tidak dapat dipulihkan.",icon:"warning",buttons:{cancel:"Batal",confirm:{text:"Hapus",value:!0,visible:!0}},dangerMode:!0,closeOnClickOutside:!1}).then((function(t){t?fetch("https://notes-api.dicoding.dev/v2/notes/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(t){if(!t.ok)throw new Error("Failed to delete note");o.remove(),B=B.filter((function(t){return t.id!==e})),A(),swal({title:"Berhasil",text:"Catatan sudah dihapus",icon:"success",button:!1})})).catch((function(t){swal("Oops...",t.message||"Failed to delete note. Please try again later.","error")})):swal("Penghapusan Catatan Dibatalkan")}))}})),t}return w(n,t),b(n,[{key:"connectedCallback",value:function(){var t=this.dataset,n=t.id,e=t.title,o=t.body;this.innerHTML='\n      <div class="note" data-id="'.concat(n,'">\n        <h2>').concat(e,"</h2>\n        <hr>\n        <p>").concat(o,'</p>\n        <div class="edit-buttons">\n          <button class="edit-button"><i class="fas fa-edit"></i></button>\n          <button class="remove-button"><i class="fas fa-trash-alt"></i></button>\n        </div>\n      </div>\n    ')}}])}(E(HTMLElement));function A(){localStorage.setItem("notesData",JSON.stringify(B))}function H(){var t=document.getElementById("noteTitle").value,n=document.getElementById("noteBody").value;if(t&&n){var e={title:t,body:n},o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};S(),fetch("https://notes-api.dicoding.dev/v2/notes",o).then((function(t){if(j(),!t.ok)throw new Error("Failed to create note");return t.json()})).then((function(e){var o=e.id,r=document.createElement("note-element");r.dataset.id=o,r.dataset.title=t,r.dataset.body=n,document.getElementById("noteContainer").appendChild(r),B.push({id:o,title:t,body:n}),A(),document.getElementById("noteTitle").value="",document.getElementById("noteBody").value="",swal("Success","Note created successfully.","success")})).catch((function(t){j(),swal("Oops...",t.message||"Failed to create note. Please try again later.","error")}))}else swal("Oops...","Please enter both title and body for the note.","error")}customElements.define("note-element",I),document.addEventListener("DOMContentLoaded",(function(){S(),fetch("https://notes-api.dicoding.dev/v2/notes",{method:"GET"}).then((function(t){if(j(),!t.ok)throw new Error("Failed to fetch notes");return t.json()})).then((function(t){if("success"!==t.status)throw new Error("Failed to fetch notes");B=t.data,M()})).catch((function(t){j(),console.error("Error fetching notes:",t),swal("Oops...","Failed to fetch notes. Please try again later.","error")}))}))})()})();