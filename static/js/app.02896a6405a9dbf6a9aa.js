webpackJsonp([1],{"2IxI":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"uploadFile"}},[s("span",[s("input",{attrs:{type:"file"},on:{change:t.changeFile}}),t._v(" "),s("button",[t._v("Выбрать Фаил")])]),t._v(" "),s("div",[t._v("\n\t\t"+t._s(t.resultAjax)+"\n\t")])])},a=[],i={render:n,staticRenderFns:a};e.a=i},"2zYI":function(t,e,s){"use strict";function n(t){s("5jKP")}var a=s("nyRO"),i=s("U0P+"),r=s("VU/8"),o=n,c=r(a.a,i.a,o,null,null);e.a=c.exports},"3zfD":function(t,e,s){"use strict";e.a={name:"upload-file",data:function(){return{files:0,resultAjax:""}},methods:{changeFile:function(t){if("xml"===t.srcElement.files[0].name.split(".")[1]?this.files=t.srcElement.files:this.resultAjax="Неверный тип файла",this.files){var e=new FormData;for(var s in this.files)e.append(s,this.files[s]);var n=this;axios({method:"post",url:"./submit.php?uploadfiles",data:e}).then(function(t){200==t.status&&(n.resultAjax="Успешно загружен")})}}}}},"5jKP":function(t,e){},"6R7y":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"strictApp-Button",on:{click:function(e){t.upStrictOption()}}},[t._v("Strict")]),t._v(" "),s("div",{class:{ativeStrictOption:t.flagStrictOption},attrs:{id:"strictApp"}},[s("h4",[t._v("Настройки Strict мода")]),t._v(" "),s("div",{staticClass:"newWord"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),s("button",{on:{click:t.addWord}},[t._v("Добавить новое слово")])]),t._v(" "),s("ul",t._l(t.words,function(e,n){return s("li",[t._v(t._s(n+1)+". "+t._s(e)+" "),s("button",{staticClass:"icon_cancel",on:{click:function(s){t.delWord(e,n)}}})])}))])])},a=[],i={render:n,staticRenderFns:a};e.a=i},"6wkQ":function(t,e){},"9F/5":function(t,e,s){"use strict";var n=s("oedp"),a=s("OGGv"),i=s("LFzd");e.a={name:"search-app",data:function(){return{msg:"Table App"}},methods:{},components:{createTask:n.a,strictTask:a.a,workTask:i.a}}},"B+N0":function(t,e){},BdCV:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"workBoxesApp"}},[s("div",{staticClass:"raido-holder"},[s("h4",[t._v("С каким файлом взаимодествовать ?")]),t._v(" "),s("input",{attrs:{checked:"",type:"radio",name:"radioTeam",id:"uploadFileMet"},on:{click:function(e){t.useFile1()}}}),t._v(" "),s("label",{attrs:{for:"uploadFileMet"}},[t._v("Загруженый")]),t._v(" "),s("input",{attrs:{type:"radio",name:"radioTeam",id:"convertFileMet"},on:{click:function(e){t.useFile2()}}}),t._v(" "),s("label",{attrs:{for:"convertFileMet"}},[t._v("Форматированый")])]),t._v(" "),s("button",{staticClass:"icon_down_open_big createButton",on:{click:function(e){t.createBoxes()}}}),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.messege?s("span",{staticClass:"dangerMessege"},[t._v(t._s(t.messege))]):t._e()]),t._v(" "),t._l(t.words,function(e,n){return s("div",{staticClass:"workbox"},[s("button",{class:{activeStrict:e.useExceptions},on:{click:function(s){t.useExceptions(e,n)}}},[t._v("Режим Исключение данных слова")]),t._v(" "),s("transition",{attrs:{name:"fade"}},[e.strictShow?s("button",{class:{activeStrict:e.strictFlag},on:{click:function(s){t.useStrict(e,n)}}},[t._v("Использовать Strict Моде")]):t._e()]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("button",{on:{click:function(s){t.startSearch(e,n)}}},[t._v("Поиск")]),t._v(" "),t._l(e.data,function(n,a){return s("div",{staticClass:"allWords"},[s("input",{attrs:{type:"text",disabled:""},domProps:{value:n}}),t._v(" "),s("button",{staticClass:"icon_cancel1",on:{click:function(s){t.deleteWord(e,n,a)}}})])}),t._v(" "),s("div",{staticClass:"resultTable"},[e.result.length?s("span",{directives:[{name:"show",rawName:"v-show",value:!e.searchEmpty,expression:"!box.searchEmpty"}]},[t._v("\n\t\t\t\t"+t._s(e.result)+"\n\t\t\t")]):t._e(),t._v(" "),s("p",[t._v("Количество совпадений "+t._s(e.countFind))]),t._v(" "),e.searchEmpty?s("span",[t._v("\n\t\t\t\tНет совпадений\n\t\t\t")]):t._e()])],2)})],2)},a=[],i={render:n,staticRenderFns:a};e.a=i},Cz8s:function(t,e,s){"use strict";function n(t){s("VLis")}var a=s("wqBJ"),i=s("OfhC"),r=s("VU/8"),o=n,c=r(a.a,i.a,o,"data-v-c7c974d4",null);e.a=c.exports},LFzd:function(t,e,s){"use strict";function n(t){s("xi/U")}var a=s("LSIx"),i=s("BdCV"),r=s("VU/8"),o=n,c=r(a.a,i.a,o,"data-v-a86f3eaa",null);e.a=c.exports},LSIx:function(t,e,s){"use strict";var n=s("pFYg"),a=s.n(n),i=s("MICi"),r=s.n(i),o=s("NHnr");e.a={name:"work-task",data:function(){return{countWords:0,city:[],words:[],resultSearch:[],messege:"",title:"",choseTemps:[],arr:[],downloadFile:!0,convertFile:!1,strictWords:[]}},created:function(){var t=this;o.bus.$on("changeCity",function(e){t.city=e}),o.bus.$on("changeTemps",function(e){t.choseTemps=e}),o.bus.$on("changeStrictWords",function(e){t.strictWords=e});for(var e=this.getXMLDocument("upload/workSpace.xml"),s=e.getElementsByTagName("Row"),e=this.getXMLDocument("upload/workSpace.xml"),n=e.getElementsByTagName("Data"),a=[],i=0;i<n.length;i++){r()(+$(n[i]).text())?a.push($(n[i]).text()):a.push(+$(n[i]).text())}this.arr=a,this.parseArr(this.arr,$(s[0]).find("Data").length)},methods:{getXMLDocument:function(t){var e;return window.XMLHttpRequest?(e=new window.XMLHttpRequest,e.open("GET",t,!1),e.send(""),e.responseXML):window.ActiveXObject?(e=new ActiveXObject("Microsoft.XMLDOM"),e.async=!1,e.load(t),e):(console.error("Загрузка XML не поддерживается браузером"),null)},parseArr:function(t,e){for(var s=[],n=t.length/e,a=0;a<n;a++){s[a]=new Array;for(var i=0;i<e;i++)s[a][i]=t[a*e+i]}this.arr=[],this.arr=s,o.bus.$emit("changeFile",this.arr)},useFile1:function(){this.downloadFile=!0,this.convertFile=!1;var t=this.getXMLDocument("upload/workSpace.xml");this.getXml(t)},useFile2:function(){this.downloadFile=!1,this.convertFile=!0;var t=this.getXMLDocument("convertBox/convertVersion.xml");this.getXml(t)},getXml:function(t){var e=t.getElementsByTagName("Row");if(this.downloadFile)var t=this.getXMLDocument("upload/workSpace.xml");else var t=this.getXMLDocument("convertBox/convertVersion.xml");for(var s=t.getElementsByTagName("Data"),n=[],a=0;a<s.length;a++){r()(+$(s[a]).text())?n.push($(s[a]).text()):n.push(+$(s[a]).text())}this.arr=n,this.parseArr(this.arr,$(e[0]).find("Data").length)},createBoxes:function(){function t(t){this.data=t,this.result=[],this.strictFlag=!1,this.searchEmpty=!1,this.strictShow=!0,this.useExceptions=!1,this.countFind=0}this.words=[];var e=[];if(this.choseTemps.length&&!this.city.length){this.messege="";for(var s=0;s<this.choseTemps.length;s++)e.push(this.choseTemps[s].data);for(var n=0;n<e.length;n++){var a=e[n],i={};i=new t(a),this.words.push(i)}}else if(this.city.length&&!this.choseTemps.length){this.messege="";for(var r=0;r<this.city.length;r++)e.push(this.city[r]);for(var n=0;n<e.length;n++){var o=e[n],c={};c.data=[],c.data.push(o),c.result=[],c.strictFlag=!1,c.searchEmpty=!1,c.strictShow=!0,c.useExceptions=!1,c.countFind=0,this.words.push(c)}}else if(this.city.length&&this.choseTemps.length){this.messege="";for(var r=0;r<this.choseTemps.length;r++)for(var s=0;s<this.city.length;s++)e.push(this.choseTemps[r].data,this.city[s]);for(var n=0;n<e.length;n+=2){var u=(e[n],e[n].concat(e[n+1])),l={};l=new t(u),this.words.push(l)}}else this.messege="Выберите Город/Шаблон"},useStrict:function(t,e){t.strictFlag=!t.strictFlag},startSearch:function(t,e){t.countFind=0;var s,n=($(".workbox")[e],[]),i=t.data;if(t.strictFlag){s=i.length;for(var r=0;r<this.arr.length;r++){var o=this.arr[r][0];if(0==o)return console.warn("конец таблицы !");(void 0===o?"undefined":a()(o))==a()("test")?o=o.toLowerCase():o+="";for(var c=0,u=0;u<s;u++){var l=i[u];l=l.toLowerCase(),o.indexOf(l,0)>=0&&c++}for(var h=o.split(" "),d=0,v=0;v<h.length;v++)""!=h[v]&&" "!=h[v]||h.splice(v,1);for(var p=0;p<h.length;p++)for(var f=0;f<this.strictWords.length;f++)h[p]==this.strictWords[f]&&d++;s==c&&h.length-d==s?(n.push(this.arr[r]),t.searchEmpty=!1,t.countFind=t.countFind+1,this.mathSTR(n,e,t)):n.length||(t.searchEmpty=!0)}}else if(t.useExceptions){s=i.length;for(var r=0;r<this.arr.length;r++){var m=this.arr[r][0];if(0==m)return console.warn("конец таблицы !");(void 0===m?"undefined":a()(m))==a()("test")?m=m.toLowerCase():m+="";for(var g=0,u=0;u<s;u++){var _=i[u];_=_.toLowerCase(),m.indexOf(_,0)>=0&&g++}s==g?n.length||(t.searchEmpty=!0):(n.push(this.arr[r]),t.searchEmpty=!1,t.countFind=t.countFind+1,this.mathSTR(n,e,t))}}else{s=i.length;for(var r=0;r<this.arr.length;r++){var w=this.arr[r][0];if(0==w)return console.warn("конец таблицы !");(void 0===w?"undefined":a()(w))==a()("test")?w=w.toLowerCase():w+="";for(var x=0,u=0;u<s;u++){var y=i[u];y=y.toLowerCase(),w.indexOf(y,0)>=0&&x++}s==x?(n.push(this.arr[r]),t.countFind=t.countFind+1,t.searchEmpty=!1,this.mathSTR(n,e,t)):n.length||(t.searchEmpty=!0)}}},mathSTR:function(t,e,s){for(var n=[],i=t[0].length,r=0;r<i;r++)n[r]=0;if(t.length<=0);else{n.unshift(t[0][0]);for(var o="",c=0;c<t.length;c++)for(var u=1;u<t[c].length;u++)a()(t[c][u])==(void 0===o?"undefined":a()(o))&&(isNaN(parseInt(t[c][u]))||(o=t[c][u],o=o.replace(/\s+/g,""),o=o.replace(/,/g,"."),t[c][u]=parseFloat(o)/100)),n[u]+=t[c][u];n.pop(),this.viewInfo(n,e,s)}},viewInfo:function(t,e,s){t[0]="____",s.result=t},useExceptions:function(t,e){t.strictFlag=!1,t.strictShow=!t.strictShow,t.useExceptions=!t.useExceptions},deleteWord:function(t,e,s){t.data.splice(s,1)}}}},M93x:function(t,e,s){"use strict";function n(t){s("o79n")}var a=s("xJD8"),i=s("WOO+"),r=s("VU/8"),o=n,c=r(a.a,i.a,o,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),s.d(e,"bus",function(){return r});var n=s("7+uW"),a=s("M93x"),i=s("YaEn");n.a.config.productionTip=!1;var r=new n.a;new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:a.a}})},NrlC:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"searchApp"}},[s("h1",[t._v("Search App")]),t._v(" "),s("create-task"),t._v(" "),s("strict-task"),t._v(" "),s("work-task")],1)},a=[],i={render:n,staticRenderFns:a};e.a=i},OGGv:function(t,e,s){"use strict";function n(t){s("pPYg")}var a=s("e2q3"),i=s("6R7y"),r=s("VU/8"),o=n,c=r(a.a,i.a,o,"data-v-d40e2dee",null);e.a=c.exports},OfhC:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("span",[s("router-link",{attrs:{to:"/"}},[t._v(t._s(t.msk))])],1),t._v(" "),s("span",[s("router-link",{attrs:{to:"/searchApp"}},[t._v("Поиск")])],1)])},a=[],i={render:n,staticRenderFns:a};e.a=i},P3hi:function(t,e){},PHsT:function(t,e){},Su4A:function(t,e,s){"use strict";var n=s("woOf"),a=s.n(n),i=s("MICi"),r=s.n(i),o=s("pFYg"),c=s.n(o);e.a={name:"convert-table",data:function(){return{procentNew:0,countRowOld:0,oldTime:0,timeWork:0,arr:[],result:[],countColumn:0,registNeed:!1,spaceNeed:!1,widthSpan:0}},methods:{startConvert:function(){this.getXMLDocument(),this.oldTime=performance.now(),this.parseArr(this.arr,this.countColumn);var t;if(!window.XMLHttpRequest)return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.load(url),t):(alert("Загрузка XML не поддерживается браузером"),null);t=new window.XMLHttpRequest,t.open("GET","upload/workSpace.xml",!1),t.send(""),t=t.responseXML;for(var e=t.getElementsByTagName("Data"),s=$(".result-box .col"),n=0;n<e.length;n++)if(void 0==s[n])$(e[n]).text("");else{var a=$(s[n]).text();$(e[n]).text(a);var i=e[n].outerHTML,r=$(s[n]).text();isNaN(r)?(void 0===r?"undefined":c()(r))==c()("string")&&(e[n].outerHTML=i.replace('ss:Type="Number"','ss:Type="String"')):e[n].outerHTML=i.replace('ss:Type="String"','ss:Type="Number"')}var o=new XMLSerializer,u=o.serializeToString(t);$.ajax({type:"POST",url:"some.php",data:"string="+u,response:"text",cache:!1,success:function(t){console.info("success")}})},parseArr:function(t,e){for(var s=[],n=t.length/e,a=0;a<n;a++){s[a]=new Array;for(var i=0;i<e;i++)s[a][i]=t[a*e+i]}this.searchName(s)},getXMLDocument:function(){var t,t=function(){return window.XMLHttpRequest?(t=new window.XMLHttpRequest,t.open("GET","upload/workSpace.xml",!1),t.send(""),t.responseXML):window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.load(url),t):(alert("Загрузка XML не поддерживается браузером"),null)}(),e=t.getElementsByTagName("Data");this.countColumn=$(t.getElementsByTagName("Row")[0]).find("Data").length;for(var s=[],n=0;n<e.length;n++){r()(+$(e[n]).text())?s.push($(e[n]).text()):s.push(+$(e[n]).text())}this.arr=s},searchName:function(t){var e=0,s=[],n=[];this.countRowOld=t.length;var i=a()([],t.map(function(t){return a()([],t)}));if(this.spaceNeed||this.registNeed)for(var r=0;r<i.length;r++){var o=i[r];this.spaceNeed&&this.registNeed?isNaN(o)?o[0]=o[0].toLowerCase().replace(/\s/gi,""):o[0]=o[0].replace(/\s/gi,""):this.spaceNeed?o[0]=o[0].replace(/\s/gi,""):this.registNeed&&isNaN(o)&&(o[0]=o[0].toLowerCase())}for(var u=0;u<i.length;u++){0==u&&(s[0]=[],s[0].push(t[0]),n[0]=i[0][0],e++);var l=n.indexOf(i[u][0]);-1==l&&0!==u?(s[e]=[],s[e].push(t[u]),n[e]=i[u][0],e++):0!==u&&("object"==c()(s[l])||(s[l]=[]),s[l].push(t[u]))}this.MathArr(s)},MathArr:function(t){for(var e=[],s=0;s<t.length;s++){var n=[],a=t[s];n[0]=a[0][0];for(var i=0;i<a.length;i++)for(var r=1;r<a[i].length;r++)0==i?n[r]=+a[i][r]:n[r]+=+a[i][r];e.push(n)}for(var o=0;o<e.length;o++)for(var c=0;c<e[o].length;c++)0==c||(e[o][c]=(+e[o][c]).toFixed(3));this.timeWork=+(performance.now()-this.oldTime).toFixed(0)+"Мс",this.result=e,this.widthSpan=100/this.result[0].length,this.procentNew=100-this.result.length/this.countRowOld*100},createFile:function(){var t;if(!window.XMLHttpRequest)return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.load(url),t):(alert("Загрузка XML не поддерживается браузером"),null);t=new window.XMLHttpRequest,t.open("GET","upload/workSpace.xml",!1),t.send(""),t=t.responseXML;for(var e=t.getElementsByTagName("Data"),s=$(".result span"),n=0;n<e.length;n++)if(void 0==s[n])$(e[n]).text("");else{var a=$(s[n]).text().replace(/(^\s*)|(\s*)$/g,"");$(e[n]).text(a);var i=e[n].outerHTML,r=$(s[n]).text();isNaN(r)?(void 0===r?"undefined":c()(r))==c()("string")&&(e[n].outerHTML=i.replace('ss:Type="Number"','ss:Type="String"')):e[n].outerHTML=i.replace('ss:Type="String"','ss:Type="Number"')}var o=new XMLSerializer,u=o.serializeToString(t);$.ajax({type:"POST",url:"some.php",data:"string="+u,response:"text",cache:!1,success:function(t){$(".buttonDown")[0].click()}})}}}},"U0P+":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"firstStep"}},[s("h1",[t._v(" "+t._s(t.msg))]),t._v(" "),s("upload-file"),t._v(" "),s("convert-table")],1)},a=[],i={render:n,staticRenderFns:a};e.a=i},VLis:function(t,e){},"WOO+":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header-app"),t._v(" "),s("div",{staticClass:"logo"},[s("svg",{staticStyle:{"enable-background":"new 0 0 320 320"},attrs:{version:"1.1",id:"Слой_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 320 320","xml:space":"preserve"}},[s("rect",{staticClass:"st0",attrs:{x:"117.7",y:"87.7",width:"97.3",height:"219.3"}}),t._v(" "),s("rect",{staticClass:"st0",attrs:{y:"17.7",width:"320",height:"70"}}),t._v(" "),s("rect",{staticClass:"st1",attrs:{x:"130.8",y:"74.2",width:"71",height:"220"}}),t._v(" "),s("rect",{staticClass:"st1",attrs:{x:"9.7",y:"29.2",width:"300",height:"45"}})])]),t._v(" "),s("router-view")],1)},a=[],i={render:n,staticRenderFns:a};e.a=i},YaEn:function(t,e,s){"use strict";var n=s("7+uW"),a=s("/ocq"),i=s("2zYI"),r=s("m3o2");n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"first-step",component:i.a},{path:"/searchApp",name:"search",component:r.a}],mode:"history"})},ZBzp:function(t,e,s){"use strict";var n=s("NHnr");e.a={name:"create-task",data:function(){return{citys:[{name:"Карло",flag:!1},{name:"Санат",flag:!1},{name:"Лечен",flag:!1}],textCity:"",choseCitys:[],templates:[{name:"Шаблон 1",data:["лечен","вар","тур"],flag:!1,visible:!1}],newWords:[{text:""}],choseTemps:[],wordTemp:"",nameTemp:"",countHolder:1,visible:!1,showBox:!1,arr:[]}},methods:{choseCity:function(t,e){if(t.flag=!t.flag,t.flag)this.choseCitys.push(t.name);else for(var s=0;s<this.choseCitys.length;s++)this.choseCitys[s]==t.name&&this.choseCitys.splice(s,1);n.bus.$emit("changeCity",this.choseCitys)},choseTemp:function(t,e){if(t.flag=!t.flag,t.flag)this.choseTemps.push(t);else for(var s=0;s<this.choseTemps.length;s++)this.choseTemps[s]==t&&this.choseTemps.splice(s,1);n.bus.$emit("changeTemps",this.choseTemps)},addCity:function(){this.citys.push({name:this.textCity,flag:!1}),this.textCity=""},addNewWord:function(t){this.newWords.push({number:t.number})},removeNewWord:function(t){this.newWords.splice(t,1)},addTempl:function(){for(var t=[],e=0;e<this.newWords.length;e++)t.push(this.newWords[e].text);this.templates.push({name:this.nameTemp,data:t,flag:!1,visible:!1})},hoverTampl:function(t){return t.visible=!0},hoverTamplOut:function(t){return t.visible=!1}}}},e2q3:function(t,e,s){"use strict";var n=s("NHnr");e.a={name:"ctrict-task",data:function(){return{flagStrictOption:!1,words:["в","на","под"],text:""}},created:function(){n.bus.$emit("changeStrictWords",this.words)},methods:{upStrictOption:function(){this.flagStrictOption=!this.flagStrictOption},addWord:function(){this.words.push(this.text),this.text="",n.bus.$emit("changeStrictWords",this.words)},delWord:function(t,e){this.words.splice(e,1),n.bus.$emit("changeStrictWords",this.words)}}}},l2fH:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"convertApp"}},[s("button",{class:{active:t.registNeed},on:{click:function(e){t.registNeed=!t.registNeed}}},[t._v("Учитывать регистр")]),t._v(" "),s("button",{class:{active:t.spaceNeed},on:{click:function(e){t.spaceNeed=!t.spaceNeed}}},[t._v("Учитывать пробелы")]),t._v(" "),s("button",{staticClass:"Start",on:{click:function(e){t.startConvert()}}},[t._v("Конвертировать")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"info"},[s("span",[t._v("Было строк: "+t._s(t.countRowOld))]),t._v(" "),s("span",[t._v("Стало строк: "+t._s(t.result.length))]),t._v(" "),s("span",[t._v("Сокращение на: "+t._s(t.procentNew)+"%")]),t._v(" "),s("span",[t._v("Время работы: "+t._s(t.timeWork))])]),t._v(" "),s("br"),t._v(" "),s("div",[s("a",{staticClass:"buttonDown",attrs:{href:"convertBox/convertVersion.xml",download:""}},[t._v("Выгрузить")]),t._v(" "),s("button",{on:{click:function(e){t.createFile()}}},[t._v("Выгрузить")])]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("div",[s("ol",{staticClass:"result"},[s("transition-group",{attrs:{name:"list",tag:"p"}},t._l(t.result,function(e){return s("li",{key:e},t._l(e,function(e){return s("span",{style:{width:t.widthSpan+"%"}},[t._v(" "+t._s(e)+" ")])}))}))],1)])])},a=[],i={render:n,staticRenderFns:a};e.a=i},lAmy:function(t,e,s){"use strict";function n(t){s("6wkQ")}var a=s("3zfD"),i=s("2IxI"),r=s("VU/8"),o=n,c=r(a.a,i.a,o,"data-v-416b5d8e",null);e.a=c.exports},m3o2:function(t,e,s){"use strict";function n(t){s("B+N0")}var a=s("9F/5"),i=s("NrlC"),r=s("VU/8"),o=n,c=r(a.a,i.a,o,null,null);e.a=c.exports},nyRO:function(t,e,s){"use strict";var n=s("lAmy"),a=s("u/Zy");e.a={name:"first-step",data:function(){return{msg:"Table App"}},methods:{},components:{uploadFile:n.a,convertTable:a.a}}},o79n:function(t,e){},oedp:function(t,e,s){"use strict";function n(t){s("PHsT")}var a=s("ZBzp"),i=s("rukR"),r=s("VU/8"),o=n,c=r(a.a,i.a,o,"data-v-5086e200",null);e.a=c.exports},pPYg:function(t,e){},rukR:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"createTask"}},[t._m(0),t._v(" "),s("div",{staticClass:"task1"},[s("h4",[t._v("Города\\курорты")]),t._v(" "),s("div",{staticClass:"newCity"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.textCity,expression:"textCity"}],attrs:{type:"text"},domProps:{value:t.textCity},on:{input:function(e){e.target.composing||(t.textCity=e.target.value)}}}),t._v(" "),s("button",{on:{click:function(e){t.addCity()}}},[t._v("Добавить новое слово")])]),t._v(" "),s("ul",t._l(t.citys,function(e,n){return s("li",[t._v(t._s(n+1)+". "+t._s(e.name)+" "),s("button",{staticClass:"fa fa-plus",class:{icon_cancel1:e.flag},attrs:{"aria-hidden":"true"},on:{click:function(s){t.choseCity(e,n)}}})])}))]),t._v(" "),s("div",{staticClass:"task2"},[s("h4",[t._v("Шаблоны слов")]),t._v(" "),s("div",{staticClass:"addTemp-holder"},[s("strong",[t._v("Имя шаблона")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.nameTemp,expression:"nameTemp"}],attrs:{type:"text"},domProps:{value:t.nameTemp},on:{input:function(e){e.target.composing||(t.nameTemp=e.target.value)}}}),t._v(" "),s("strong",[t._v("Слова шаблона")]),t._v(" "),t._l(t.newWords,function(e,n){return s("div",{staticClass:"tempWords"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"newWord.text"}],attrs:{type:"text"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),t._v(" "),s("button",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"},on:{click:function(s){t.addNewWord(e)}}}),t._v(" "),t.newWords.length>1?s("button",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"},on:{click:function(e){t.removeNewWord(n)}}}):t._e()])}),t._v(" "),s("button",{staticClass:"addTemp",on:{click:function(e){t.addTempl()}}},[t._v("Добавить шаблон")])],2),t._v(" "),s("div",{staticClass:"allTempls"},[s("ul",t._l(t.templates,function(e,n){return s("li",[s("span",[t._v(t._s(e.name))]),t._v(" "),s("button",{staticClass:"fa fa-plus",class:{icon_cancel1:e.flag},attrs:{"aria-hidden":"true"},on:{click:function(s){t.choseTemp(e,n)}}}),t._v(" "),s("div",[t._v("\n\t\t\t\t\t\t"+t._s(e.data)+"\n\t\t\t\t\t")])])}))])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("br"),t._v(" "),s("br"),t._v(" "),s("br")])}],i={render:n,staticRenderFns:a};e.a=i},"u/Zy":function(t,e,s){"use strict";function n(t){s("P3hi")}var a=s("Su4A"),i=s("l2fH"),r=s("VU/8"),o=n,c=r(a.a,i.a,o,"data-v-c92cf012",null);e.a=c.exports},wqBJ:function(t,e,s){"use strict";e.a={name:"header-vue",data:function(){return{msk:"Главная"}}}},xJD8:function(t,e,s){"use strict";var n=s("Cz8s");e.a={name:"app",components:{"header-app":n.a}}},"xi/U":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.02896a6405a9dbf6a9aa.js.map