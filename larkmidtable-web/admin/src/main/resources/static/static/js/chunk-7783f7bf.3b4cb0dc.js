(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7783f7bf"],{"09f4":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),Math.easeInOutQuad=function(e,t,r,a){return e/=a/2,e<1?r/2*e*e+t:(e--,-r/2*(e*(e-2)-1)+t)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(e,t,r){var i=l(),n=e-i,s=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=s;var l=Math.easeInOutQuad(c,i,n,t);o(l),c<t?a(e):r&&"function"===typeof r&&r()};u()}},"1f3a":function(e,t,r){"use strict";r("7f3d")},"2b10":function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"j",(function(){return l})),r.d(t,"h",(function(){return i})),r.d(t,"i",(function(){return n})),r.d(t,"c",(function(){return s})),r.d(t,"k",(function(){return c})),r.d(t,"b",(function(){return u})),r.d(t,"g",(function(){return p})),r.d(t,"f",(function(){return d})),r.d(t,"d",(function(){return m})),r.d(t,"a",(function(){return b}));var a=r("b775");function o(e){return Object(a["a"])({url:"api/job/pageList",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/api/job/trigger",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/api/job/start?id="+e,method:"post"})}function n(e){return Object(a["a"])({url:"/api/job/stop?id="+e,method:"post"})}function s(){return Object(a["a"])({url:"api/jobGroup/list",method:"get"})}function c(e){return Object(a["a"])({url:"/api/job/update",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/api/job/add/",method:"post",data:e})}function p(e){return Object(a["a"])({url:"/api/job/remove/"+e,method:"post"})}function d(e){return Object(a["a"])({url:"/api/job/nextTriggerTime?cron="+e,method:"get"})}function m(e){return Object(a["a"])({url:"api/job/list",method:"get",params:e})}function b(e){return Object(a["a"])({url:"/api/job/batchAdd",method:"post",data:e})}},"39ed":function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"f",(function(){return l})),r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return n})),r.d(t,"b",(function(){return s}));var a=r("b775");function o(){return Object(a["a"])({url:"/api/jobGroup/list",method:"get"})}function l(e){return Object(a["a"])({url:"/api/jobGroup/update",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/api/jobGroup/save",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/api/jobGroup/loadById?id="+e,method:"post"})}function s(e){return Object(a["a"])({url:"/api/jobGroup/remove?id="+e,method:"post"})}},6724:function(e,t,r){"use strict";r("8d41");var a="@@wavesContext";function o(e,t){function r(r){var a=Object.assign({},t.value),o=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),l=o.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var i=l.getBoundingClientRect(),n=l.querySelector(".waves-ripple");switch(n?n.className="waves-ripple":(n=document.createElement("span"),n.className="waves-ripple",n.style.height=n.style.width=Math.max(i.width,i.height)+"px",l.appendChild(n)),o.type){case"center":n.style.top=i.height/2-n.offsetHeight/2+"px",n.style.left=i.width/2-n.offsetWidth/2+"px";break;default:n.style.top=(r.pageY-i.top-n.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",n.style.left=(r.pageX-i.left-n.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return n.style.backgroundColor=o.color,n.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=r:e[a]={removeHandle:r},r}var l={bind:function(e,t){e.addEventListener("click",o(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",o(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},i=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(i)),l.install=i;t["a"]=l},"7e39":function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"g",(function(){return i})),r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s})),r.d(t,"f",(function(){return c})),r.d(t,"d",(function(){return u}));var a=r("b775");function o(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/"+e,method:"get"})}function i(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"put",data:e})}function n(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"delete",params:e})}function c(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/test",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/all",method:"get",params:e})}},"7f3d":function(e,t,r){},"8d41":function(e,t,r){},a53d:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return l})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s}));var a=r("b775");function o(e){return Object(a["a"])({url:"/api/jobProject",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/api/jobProject",method:"put",data:e})}function i(e){return Object(a["a"])({url:"/api/jobProject",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/api/jobProject",method:"delete",params:e})}function s(e){return Object(a["a"])({url:"api/jobProject/list",method:"get",params:e})}},dbe2:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"filter-container"},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"任务名称"},model:{value:e.listQuery.jobDesc,callback:function(t){e.$set(e.listQuery,"jobDesc",t)},expression:"listQuery.jobDesc"}}),e._v(" "),r("el-select",{staticClass:"filter-item",attrs:{multiple:"",placeholder:"所属项目"},model:{value:e.projectIds,callback:function(t){e.projectIds=t},expression:"projectIds"}},e._l(e.jobProjectList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),e._v(" "),r("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"任务类型"},model:{value:e.listQuery.glueType,callback:function(t){e.$set(e.listQuery,"glueType",t)},expression:"listQuery.glueType"}},e._l(e.glueTypes,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      搜索\n    ")]),e._v(" "),r("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      添加\n    ")])],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",size:"medium"}},[r("el-table-column",{attrs:{align:"center",label:"编号",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jobDesc))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"描述",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.projectName))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"SQL语句",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.jobCron))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("el-dropdown",{attrs:{trigger:"click"}},[r("span",{staticClass:"el-dropdown-link"},[e._v("\n            操作"),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.handlerUpdate(a)}}},[e._v("修改")]),e._v(" "),r("el-dropdown-item",{nativeOn:{click:function(t){return e.handlerDelete(a)}}},[e._v("删除")])],1)],1)]}}])})],1),e._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),r("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"1000px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"110px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"执行器",prop:"jobGroup"}},[r("el-select",{attrs:{placeholder:"请选择执行器"},model:{value:e.temp.jobGroup,callback:function(t){e.$set(e.temp,"jobGroup",t)},expression:"temp.jobGroup"}},e._l(e.executorList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"任务名称",prop:"jobDesc"}},[r("el-input",{attrs:{size:"medium",placeholder:"请输入任务描述"},model:{value:e.temp.jobDesc,callback:function(t){e.$set(e.temp,"jobDesc",t)},expression:"temp.jobDesc"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"路由策略",prop:"executorRouteStrategy"}},[r("el-select",{attrs:{placeholder:"请选择路由策略"},model:{value:e.temp.executorRouteStrategy,callback:function(t){e.$set(e.temp,"executorRouteStrategy",t)},expression:"temp.executorRouteStrategy"}},e._l(e.routeStrategies,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-dialog",{attrs:{title:"提示",visible:e.showCronBox,width:"60%","append-to-body":""},on:{"update:visible":function(t){e.showCronBox=t}}},[r("cron",{model:{value:e.temp.jobCron,callback:function(t){e.$set(e.temp,"jobCron",t)},expression:"temp.jobCron"}}),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.showCronBox=!1}}},[e._v("关闭")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showCronBox=!1}}},[e._v("确 定")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Cron",prop:"jobCron"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入Cron表达式"},model:{value:e.temp.jobCron,callback:function(t){e.$set(e.temp,"jobCron",t)},expression:"temp.jobCron"}},[e.showCronBox?r("el-button",{attrs:{slot:"append",icon:"el-icon-open",title:"关闭图形配置"},on:{click:function(t){e.showCronBox=!1}},slot:"append"}):r("el-button",{attrs:{slot:"append",icon:"el-icon-turn-off",title:"打开图形配置"},on:{click:function(t){e.showCronBox=!0}},slot:"append"})],1)],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"阻塞处理",prop:"executorBlockStrategy"}},[r("el-select",{attrs:{placeholder:"请选择阻塞处理策略"},model:{value:e.temp.executorBlockStrategy,callback:function(t){e.$set(e.temp,"executorBlockStrategy",t)},expression:"temp.executorBlockStrategy"}},e._l(e.blockStrategies,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"报警邮件"}},[r("el-input",{attrs:{placeholder:"请输入报警邮件，多个用逗号分隔"},model:{value:e.temp.alarmEmail,callback:function(t){e.$set(e.temp,"alarmEmail",t)},expression:"temp.alarmEmail"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"任务类型",prop:"glueType"}},[r("el-select",{attrs:{placeholder:"任务脚本类型"},model:{value:e.temp.glueType,callback:function(t){e.$set(e.temp,"glueType",t)},expression:"temp.glueType"}},e._l(e.glueTypes,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"失败重试次数"}},[r("el-input-number",{attrs:{min:0,max:20},model:{value:e.temp.executorFailRetryCount,callback:function(t){e.$set(e.temp,"executorFailRetryCount",t)},expression:"temp.executorFailRetryCount"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"所属项目",prop:"projectId"}},[r("el-select",{staticClass:"filter-item",attrs:{placeholder:"所属项目"},model:{value:e.temp.projectId,callback:function(t){e.$set(e.temp,"projectId",t)},expression:"temp.projectId"}},e._l(e.jobProjectList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"超时时间(分钟)"}},[r("el-input-number",{attrs:{min:0,max:120},model:{value:e.temp.executorTimeout,callback:function(t){e.$set(e.temp,"executorTimeout",t)},expression:"temp.executorTimeout"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"子任务"}},[r("el-select",{attrs:{multiple:"",placeholder:"子任务","value-key":"id"},model:{value:e.temp.childJobId,callback:function(t){e.$set(e.temp,"childJobId",t)},expression:"temp.childJobId"}},e._l(e.jobIdList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.jobDesc,value:e}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}})],1),e._v(" "),"BEAN"===e.temp.glueType?r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"辅助参数",prop:"incrementType"}},[r("el-select",{attrs:{placeholder:"请选择参数类型",value:""},model:{value:e.temp.incrementType,callback:function(t){e.$set(e.temp,"incrementType",t)},expression:"temp.incrementType"}},e._l(e.incrementTypes,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1):e._e(),e._v(" "),"BEAN"===e.temp.glueType&&1===e.temp.incrementType?r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"增量主键开始ID",prop:"incStartId"}},[r("el-input",{staticStyle:{width:"56%"},attrs:{placeholder:"首次增量使用"},model:{value:e.temp.incStartId,callback:function(t){e.$set(e.temp,"incStartId",t)},expression:"temp.incStartId"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"ID增量参数",prop:"replaceParam"}},[r("el-input",{attrs:{placeholder:"-DstartId='%s' -DendId='%s'"},model:{value:e.temp.replaceParam,callback:function(t){e.$set(e.temp,"replaceParam",t)},expression:"temp.replaceParam"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"reader数据源",prop:"datasourceId"}},[r("el-select",{staticClass:"filter-item",attrs:{placeholder:"reader数据源"},model:{value:e.temp.datasourceId,callback:function(t){e.$set(e.temp,"datasourceId",t)},expression:"temp.datasourceId"}},e._l(e.dataSourceList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.datasourceName,value:e.id}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:7}},[r("el-form-item",{attrs:{label:"reader表",prop:"readerTable"}},[r("el-input",{attrs:{placeholder:"读表的表名"},model:{value:e.temp.readerTable,callback:function(t){e.$set(e.temp,"readerTable",t)},expression:"temp.readerTable"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:5}},[r("el-form-item",{attrs:{label:"主键","label-width":"40px",prop:"primaryKey"}},[r("el-input",{attrs:{placeholder:"请填写主键字段名"},model:{value:e.temp.primaryKey,callback:function(t){e.$set(e.temp,"primaryKey",t)},expression:"temp.primaryKey"}})],1)],1)],1):e._e(),e._v(" "),"BEAN"===e.temp.glueType&&2===e.temp.incrementType?r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"增量开始时间",prop:"incStartTime"}},[r("el-date-picker",{staticStyle:{width:"57%"},attrs:{type:"datetime",placeholder:"首次增量使用",format:"yyyy-MM-dd HH:mm:ss"},model:{value:e.temp.incStartTime,callback:function(t){e.$set(e.temp,"incStartTime",t)},expression:"temp.incStartTime"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"增量时间字段",prop:"replaceParam"}},[r("el-input",{attrs:{placeholder:"-DlastTime='%s' -DcurrentTime='%s'"},model:{value:e.temp.replaceParam,callback:function(t){e.$set(e.temp,"replaceParam",t)},expression:"temp.replaceParam"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"增量时间格式",prop:"replaceParamType"}},[r("el-select",{attrs:{placeholder:"增量时间格式"},on:{change:e.incStartTimeFormat},model:{value:e.temp.replaceParamType,callback:function(t){e.$set(e.temp,"replaceParamType",t)},expression:"temp.replaceParamType"}},e._l(e.replaceFormatTypes,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1):e._e(),e._v(" "),"BEAN"===e.temp.glueType&&3===e.temp.incrementType?r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"分区字段",prop:"partitionField"}},[r("el-input",{staticStyle:{width:"56%"},attrs:{placeholder:"请输入分区字段"},model:{value:e.partitionField,callback:function(t){e.partitionField=t},expression:"partitionField"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:7}},[r("el-form-item",{attrs:{label:"分区时间"}},[r("el-select",{attrs:{placeholder:"分区时间格式"},model:{value:e.timeFormatType,callback:function(t){e.timeFormatType=t},expression:"timeFormatType"}},e._l(e.timeFormatTypes,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:5}},[r("el-input-number",{staticStyle:{width:"65%"},attrs:{min:-20,max:0},model:{value:e.timeOffset,callback:function(t){e.timeOffset=t},expression:"timeOffset"}})],1)],1):e._e(),e._v(" "),"BEAN"===e.temp.glueType?r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"JVM启动参数"}},[r("el-input",{attrs:{placeholder:"-Xms1024m -Xmx1024m -XX:+HeapDumpOnOutOfMemoryError"},model:{value:e.temp.jvmParam,callback:function(t){e.$set(e.temp,"jvmParam",t)},expression:"temp.jvmParam"}})],1)],1)],1):e._e()],1),e._v(" "),"BEAN"===e.temp.glueType?r("json-editor",{ref:"jsonEditor",model:{value:e.jobJson,callback:function(t){e.jobJson=t},expression:"jobJson"}}):e._e(),e._v(" "),"GLUE_SHELL"===e.temp.glueType?r("shell-editor",{ref:"shellEditor",model:{value:e.glueSource,callback:function(t){e.glueSource=t},expression:"glueSource"}}):e._e(),e._v(" "),"GLUE_PYTHON"===e.temp.glueType?r("python-editor",{ref:"pythonEditor",model:{value:e.glueSource,callback:function(t){e.glueSource=t},expression:"glueSource"}}):e._e(),e._v(" "),"GLUE_POWERSHELL"===e.temp.glueType?r("powershell-editor",{ref:"powershellEditor",model:{value:e.glueSource,callback:function(t){e.glueSource=t},expression:"glueSource"}}):e._e(),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        确定\n      ")])],1)],1)],1)},o=[],l=(r("28a5"),r("6b54"),r("39ed")),i=r("2b10"),n=r("6724"),s=r("5ec8"),c=r("333d"),u=r("fa7e"),p=r("0207"),d=r("7dc9"),m=r("0e1f"),b=r("7e39"),f=r("a53d"),h=r("61f7"),v={name:"JobInfo",components:{Pagination:c["a"],JsonEditor:u["a"],ShellEditor:p["a"],PythonEditor:d["a"],PowershellEditor:m["a"],Cron:s["a"]},directives:{waves:n["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){var e=this,t=function(e,t,r){t||r(new Error("Increment parameters is required")),r()},r=function(t,r,a){e.partitionField||a(new Error("Partition parameters is required")),a()};return{projectIds:"",list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,jobGroup:0,projectIds:"",triggerStatus:-1,jobDesc:"",glueType:""},showCronBox:!1,dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{jobGroup:[{required:!0,message:"jobGroup is required",trigger:"change"}],executorRouteStrategy:[{required:!0,message:"executorRouteStrategy is required",trigger:"change"}],executorBlockStrategy:[{required:!0,message:"executorBlockStrategy is required",trigger:"change"}],glueType:[{required:!0,message:"jobType is required",trigger:"change"}],projectId:[{required:!0,message:"projectId is required",trigger:"change"}],jobDesc:[{required:!0,message:"jobDesc is required",trigger:"blur"}],jobProject:[{required:!0,message:"jobProject is required",trigger:"blur"}],jobCron:[{required:!0,message:"jobCron is required",trigger:"blur"}],incStartId:[{trigger:"blur",validator:t}],replaceParam:[{trigger:"blur",validator:t}],primaryKey:[{trigger:"blur",validator:t}],incStartTime:[{trigger:"change",validator:t}],replaceParamType:[{trigger:"change",validator:t}],partitionField:[{trigger:"blur",validator:r}],datasourceId:[{trigger:"change",validator:t}],readerTable:[{trigger:"blur",validator:t}]},temp:{id:void 0,jobGroup:"",jobCron:"",jobDesc:"",executorRouteStrategy:"",executorBlockStrategy:"",childJobId:"",executorFailRetryCount:"",alarmEmail:"",executorTimeout:"",userId:0,jobConfigId:"",executorHandler:"",glueType:"",glueSource:"",jobJson:"",executorParam:"",replaceParam:"",replaceParamType:"Timestamp",jvmParam:"",incStartTime:"",partitionInfo:"",incrementType:0,incStartId:"",primaryKey:"",projectId:"",datasourceId:"",readerTable:""},resetTemp:function(){this.temp=this.$options.data().temp,this.jobJson="",this.glueSource="",this.timeOffset=0,this.timeFormatType="yyyy-MM-dd",this.partitionField=""},executorList:"",jobIdList:"",jobProjectList:"",dataSourceList:"",blockStrategies:[{value:"SERIAL_EXECUTION",label:"单机串行"},{value:"DISCARD_LATER",label:"丢弃后续调度"},{value:"COVER_EARLY",label:"覆盖之前调度"}],routeStrategies:[{value:"FIRST",label:"第一个"},{value:"LAST",label:"最后一个"},{value:"ROUND",label:"轮询"},{value:"RANDOM",label:"随机"},{value:"CONSISTENT_HASH",label:"一致性HASH"},{value:"LEAST_FREQUENTLY_USED",label:"最不经常使用"},{value:"LEAST_RECENTLY_USED",label:"最近最久未使用"},{value:"FAILOVER",label:"故障转移"},{value:"BUSYOVER",label:"忙碌转移"}],glueTypes:[{value:"BEAN",label:"FlinkX任务"},{value:"GLUE_SHELL",label:"Shell任务"},{value:"GLUE_PYTHON",label:"Python任务"},{value:"GLUE_POWERSHELL",label:"PowerShell任务"}],incrementTypes:[{value:0,label:"无"},{value:1,label:"主键自增"},{value:2,label:"时间自增"},{value:3,label:"HIVE分区"}],triggerNextTimes:"",registerNode:[],jobJson:"",glueSource:"",timeOffset:0,timeFormatType:"yyyy-MM-dd",partitionField:"",timeFormatTypes:[{value:"yyyy-MM-dd",label:"yyyy-MM-dd"},{value:"yyyyMMdd",label:"yyyyMMdd"},{value:"yyyy/MM/dd",label:"yyyy/MM/dd"}],replaceFormatTypes:[{value:"yyyy/MM/dd",label:"yyyy/MM/dd"},{value:"yyyy-MM-dd",label:"yyyy-MM-dd"},{value:"HH:mm:ss",label:"HH:mm:ss"},{value:"yyyy/MM/dd HH:mm:ss",label:"yyyy/MM/dd HH:mm:ss"},{value:"yyyy-MM-dd HH:mm:ss",label:"yyyy-MM-dd HH:mm:ss"},{value:"Timestamp",label:"时间戳"}],statusList:[{value:500,label:"失败"},{value:502,label:"失败(超时)"},{value:200,label:"成功"},{value:0,label:"无"}]}},created:function(){this.fetchData(),this.getExecutor(),this.getJobIdList(),this.getJobProject(),this.getDataSourceList()},methods:{handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},getExecutor:function(){var e=this;i["c"]().then((function(t){var r=t.content;e.executorList=r}))},getJobIdList:function(){var e=this;i["d"]().then((function(t){var r=t.content;e.jobIdList=r}))},getJobProject:function(){var e=this;f["c"]().then((function(t){e.jobProjectList=t}))},getDataSourceList:function(){var e=this;b["d"]().then((function(t){e.dataSourceList=t}))},fetchData:function(){var e=this;this.listLoading=!0,this.projectIds?this.listQuery.projectIds=this.projectIds.toString():this.listQuery.projectIds="",i["e"](this.listQuery).then((function(t){var r=t.content;e.total=r.recordsTotal,e.list=r.data,e.listLoading=!1}))},incStartTimeFormat:function(e){},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;"BEAN"!==this.temp.glueType||Object(h["c"])(this.jobJson)?this.$refs["dataForm"].validate((function(t){if(t){if(e.temp.childJobId){var r=[];for(var a in e.temp.childJobId)r.push(e.temp.childJobId[a].id);e.temp.childJobId=r.toString()}e.temp.jobJson=e.jobJson,e.temp.glueSource=e.glueSource,e.temp.executorHandler="BEAN"===e.temp.glueType?"executorJobHandler":"",e.partitionField&&(e.temp.partitionInfo=e.partitionField+","+e.timeOffset+","+e.timeFormatType),i["b"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))}})):this.$notify({title:"Fail",message:"json格式错误",type:"error",duration:2e3})},handlerUpdate:function(e){var t=this;this.resetTemp(),this.temp=Object.assign({},e),this.temp.jobJson&&(this.jobJson=JSON.parse(this.temp.jobJson)),this.glueSource=this.temp.glueSource;var r=[],a=[];if(this.jobIdList){for(var o in this.jobIdList)this.jobIdList[o].id!==this.temp.id&&a.push(this.jobIdList[o]);this.JobIdList=a}if(this.temp.childJobId){var l=this.temp.childJobId.split(",");for(var i in l)for(var n in this.jobIdList)this.jobIdList[n].id===parseInt(l[i])&&r.push(this.jobIdList[n]);this.temp.childJobId=r}if(this.temp.partitionInfo){var s=this.temp.partitionInfo.split(",");this.partitionField=s[0],this.timeOffset=s[1],this.timeFormatType=s[2]}this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.temp.jobJson="string"!==typeof this.jobJson?JSON.stringify(this.jobJson):this.jobJson,"BEAN"!==this.temp.glueType||Object(h["c"])(this.temp.jobJson)?this.$refs["dataForm"].validate((function(t){if(t){if(e.temp.childJobId){var r=[];for(var a in e.temp.childJobId)r.push(e.temp.childJobId[a].id);e.temp.childJobId=r.toString()}e.temp.executorHandler="BEAN"===e.temp.glueType?"executorJobHandler":"",e.temp.glueSource=e.glueSource,e.partitionField&&(e.temp.partitionInfo=e.partitionField+","+e.timeOffset+","+e.timeFormatType),i["k"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}})):this.$notify({title:"Fail",message:"json格式错误",type:"error",duration:2e3})},handlerDelete:function(e){var t=this;this.$confirm("确定删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i["g"](e.id).then((function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))}))},handlerExecute:function(e){var t=this;this.$confirm("确定执行吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r={};r.jobId=e.id,r.executorParam=e.executorParam,i["j"](r).then((function(e){t.$notify({title:"Success",message:"Execute Successfully",type:"success",duration:2e3})}))}))},handlerViewLog:function(e){this.$router.push({path:"/data/log",query:{jobId:e.id}})},handlerStart:function(e){var t=this;i["h"](e.id).then((function(e){t.$notify({title:"Success",message:"Start Successfully",type:"success",duration:2e3})}))},handlerStop:function(e){var t=this;i["i"](e.id).then((function(e){t.$notify({title:"Success",message:"Start Successfully",type:"success",duration:2e3})}))},changeSwitch:function(e){1===e.triggerStatus?this.handlerStart(e):this.handlerStop(e)},nextTriggerTime:function(e){var t=this;i["f"](e.jobCron).then((function(e){var r=e.content;t.triggerNextTimes=r.join("<br>")}))},loadById:function(e){var t=this;l["e"](e.jobGroup).then((function(e){t.registerNode=[];var r=e.content;t.registerNode.push(r)}))}}},y=v,g=(r("1f3a"),r("2877")),j=Object(g["a"])(y,a,o,!1,null,null,null);t["default"]=j.exports}}]);