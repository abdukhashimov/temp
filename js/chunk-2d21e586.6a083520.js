(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e586"],{d4bb:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"university"},[a("div",{staticClass:"container country"},[t.loader?a("CRow",[a("CCol",{attrs:{md:"12"}},[a("CForm",[a("CCollapse",{attrs:{show:t.collapse}},[a("CRow",[a("CCol",{attrs:{md:"12"}},[a("CInput",{attrs:{label:"Sarlovha","valid-feedback":"Yaxshi :)","invalid-feedback":"Kamida bitta so'z kiriting.","is-valid":t.validator,required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("CCol",{attrs:{md:"12"}},[a("CInputFile",{ref:"inputFile",attrs:{label:"Gazeta fayli",horizontal:"",custom:"",required:""},on:{change:t.getFile}})],1)],1)],1),a("CRow",{staticClass:"mt-4"},[a("CCol",{attrs:{md:"12"}},[t.buttonToggle?a("CButton",{staticClass:"float-right mb-3",attrs:{color:"success"},on:{click:function(e){return t.showTable()}}},[t._v("Qo'shish")]):a("CButton",{staticClass:"float-right mb-3",attrs:{color:"success",disabled:t.submitLoader},on:{click:function(e){return t.addNewspaper()}}},[t.submitLoader?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" Saqlash ")])],1)],1)],1)],1),a("CCol",{attrs:{md:"10"}},[a("CInput",{attrs:{placeholder:"Sarlavha bo'yicha qidirish."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("CCol",{attrs:{md:"2"}},[a("CButton",{staticClass:"w-100",attrs:{color:"primary"},on:{click:function(e){return t.searchNewspaper()}}},[t._v("Qidirish")])],1),a("CCol",{staticClass:"mb-3",attrs:{md:"5"}},[a("CIcon",{staticClass:"mr-3",attrs:{name:"cil-calendar"}}),a("date-pick",{model:{value:t.from,callback:function(e){t.from=e},expression:"from"}})],1),a("CCol",{staticClass:"mb-3",attrs:{md:"5"}},[a("CIcon",{staticClass:"mr-3",attrs:{name:"cil-calendar"}}),a("date-pick",{model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1),a("CCol",{attrs:{md:"2"}},[a("CButton",{staticClass:"w-100",attrs:{color:"primary"},on:{click:function(e){return t.searchNewspaperByCalendar()}}},[t._v("Qidirish")])],1),a("CCol",{attrs:{md:"12"}},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover table-striped table-light"},[a("thead",[a("tr",[a("th",[t._v("ID")]),a("th",[t._v("Sarlovha")]),a("th",[t._v("Sana")]),a("th",[t._v("O'zgartirish")]),a("th",[t._v("O'chirish")])])]),a("tbody",t._l(t.listing,(function(e,r){return a("tr",{key:r},[a("td",[t._v(" "+t._s(e.pk)+" ")]),a("td",[t._v(" "+t._s(e.title)+" ")]),a("td",[t._v(" "+t._s(e.created_at.substr(0,10))+" ")]),a("td",[a("button",{staticClass:"btn btn-warning mx-auto d-block",on:{click:function(a){return t.updateListNewspaper(e.pk)}}},[t._v(" O'zgartirish ")]),e.pk==t.pk?a("CModal",{attrs:{title:"O'zgartirish",color:"warning",show:t.warningModal,closeOnBackdrop:!1},on:{"update:show":function(e){t.warningModal=e}}},[t.editLoader?a("CRow",[a("CCol",{attrs:{md:"12"}},[a("orbit-spinner",{staticClass:"d-block mx-auto",attrs:{"animation-duration":1e3,size:120,color:"#0E1E52"}})],1)],1):a("CRow",[a("CCol",{attrs:{md:"12"}},[a("CInput",{attrs:{label:"Sarlovha","valid-feedback":"Yaxshi :)","invalid-feedback":"Kamida bitta so'z kiriting.","is-valid":t.validator},model:{value:t.update.title,callback:function(e){t.$set(t.update,"title",e)},expression:"update.title"}})],1),a("CCol",{attrs:{md:"12"}},[a("CInputFile",{ref:"updateInputFile",refInFor:!0,attrs:{label:"Gazeta fayli",horizontal:"",custom:"",required:""},on:{change:t.updateFile}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("div",{attrs:{slot:"footer-wrapper"},slot:"footer-wrapper"},[a("CButton",{staticClass:"btn btn-warning float-right",on:{click:function(a){return t.saveUpdatedNewspaper(e.pk)}}},[t._v(" Saqlash ")])],1)])],1):t._e()],1),a("td",[a("button",{staticClass:"btn btn-danger mx-auto d-block",on:{click:function(a){return t.deleteNewspaper(e.pk)}}},[t._v(" O'chirish ")]),e.pk==t.deletePk?a("CModal",{attrs:{title:"O'chirmoqchimisiz?",color:"danger",show:t.deleteHandler},on:{"update:show":function(e){t.deleteHandler=e}}},[a("h3",[t._v(t._s(e.title))]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("div",{attrs:{slot:"footer-wrapper"},slot:"footer-wrapper"},[a("CButton",{staticClass:"btn btn-danger mr-3",on:{click:function(a){return t.deleteFile(e.pk)}}},[t._v(" Ok ")]),a("CButton",{staticClass:"btn btn-primary",on:{click:function(e){t.deleteHandler=!1}}},[t._v(" Bekor qilish ")])],1)])]):t._e()],1)])})),0)])])]),a("CCol",{staticClass:"mb-4",attrs:{md:"12"}},[a("div",{staticClass:"mx-auto d-block text-center"},[a("CButton",{staticClass:"btn btn-primary mr-3",attrs:{disabled:t.left},on:{click:function(e){return t.listNewspaper(-1)}}},[t._v("Oldingisi")]),a("CButton",{staticClass:"btn btn-primary mr-3",attrs:{disabled:t.next},on:{click:function(e){return t.listNewspaper(1)}}},[t._v("Keyingisi")])],1)])],1):a("CRow",[a("CCol",{attrs:{md:"12"}},[a("div",{staticClass:"orb"},[a("orbit-spinner",{staticClass:"d-block mx-auto",attrs:{"animation-duration":1e3,size:120,color:"#0E1E52"}})],1)])],1)],1)])},n=[];function i(t,e,a,r,n,i,s){try{var o=t[i](s),l=o.value}catch(c){return void a(c)}o.done?e(l):Promise.resolve(l).then(r,n)}function s(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function o(t){i(s,r,n,o,l,"next",t)}function l(t){i(s,r,n,o,l,"throw",t)}o(void 0)}))}}var o={data:function(){return{form:{title:"",file:null},update:{title:"",file:null},from:null,to:"",buttonToggle:!0,collapse:!1,left:!1,next:!1,sum:1,listing:[],pk:0,deletePk:0,warningModal:!1,editLoader:!0,search:"",loader:!1,loaderEdit:!0,submitLoader:!1,clicked:!1,deleteHandler:!1,validation:!1}},methods:{validator:function(t){return(t&&t.length)>0},getFile:function(t){t[0]&&"application/pdf"==t[0].type?this.form.file=t[0]:this.$toast.error("Faqat pdf formatda faylni yuklang.")},updateFile:function(t){t[0]&&"application/pdf"==t[0].type?(this.clicked=!0,this.validation=!0,this.update.file=t[0]):(this.validation=!1,this.clicked=!0,this.$toast.error("Faqat pdf formatda faylni yuklang."))},deleteNewspaper:function(t){this.deletePk=t,this.deleteHandler=!0},deleteFile:function(t){var e=this;return s(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.delete("newspaper/".concat(t,"/")).then((function(){e.$toast.success("Muvaffaqiyatli o'chirildi."),e.listNewspaper(0)})).catch((function(){e.$toast.error("O'chirishdada xatolik yuz berdi.")}));case 2:case"end":return a.stop()}}),a)})))()},saveUpdatedNewspaper:function(t){var e=this;return s(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=new FormData,!e.clicked){a.next=12;break}if(!e.validation){a.next=9;break}return r.append("title",e.update.title),r.append("file",e.update.file),a.next=7,e.$http.patch("newspaper/".concat(t,"/"),r).then((function(){e.$toast.success("Muvaffaqiyatli o'zgartirildi."),e.warningModal=!1,e.clicked=!1,e.update={title:"",file:null},e.listNewspaper(0)})).catch((function(){e.$toast.error("O'zgartirishda xatolik yuz berdi.")}));case 7:a.next=10;break;case 9:e.$toast.error("O'zgartirishda xatolik yuz berdi.");case 10:a.next=15;break;case 12:return r.append("title",e.update.title),a.next=15,e.$http.patch("newspaper/".concat(t,"/"),r).then((function(){e.$toast.success("Muvaffaqiyatli o'zgartirildi."),e.warningModal=!1,e.clicked=!1,e.update={title:"",file:null},e.listNewspaper(0)})).catch((function(){e.$toast.error("O'zgartirishda xatolik yuz berdi.")}));case 15:case"end":return a.stop()}}),a)})))()},updateListNewspaper:function(t){var e=this;return s(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.warningModal=!0,e.pk=t,a.next=4,e.$http.get("newspaper/".concat(t,"/")).then((function(t){e.editLoader=!1,e.update=t.data})).catch((function(t){console.log(t)}));case 4:case"end":return a.stop()}}),a)})))()},searchNewspaperByCalendar:function(){var t=this;return s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.from){e.next=6;break}return t.loader=!1,e.next=4,t.$http.get("newspaper/search/?date1=".concat(t.from,"&date2=").concat(t.to)).then((function(e){e.data.results.length?(t.loader=!0,t.listing=e.data.results):(t.listNewspaper(0),t.$toast.error("Qidirilayotgan gazeta topilmadi."))})).catch((function(){t.$toast.error("Qidirilayotgan gazeta topilmadi.")}));case 4:e.next=8;break;case 6:t.loader=!0,t.listNewspaper(0);case 8:case"end":return e.stop()}}),e)})))()},searchNewspaper:function(){var t=this;return s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.search){e.next=6;break}return t.loader=!1,e.next=4,t.$http.get("newspaper/search/?search=".concat(t.search)).then((function(e){e.data.results.length?(t.loader=!0,t.listing=e.data.results):(t.listNewspaper(0),t.$toast.error("Qidirilayotgan gazeta topilmadi."))})).catch((function(){t.$toast.error("Qidirilayotgan gazeta topilmadi.")}));case 4:e.next=7;break;case 6:t.listNewspaper(0);case 7:case"end":return e.stop()}}),e)})))()},showTable:function(){this.buttonToggle=!1,this.collapse=!0},addNewspaper:function(){var t=this;return s(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.form.title||!t.form.file){e.next=8;break}return a=new FormData,a.append("title",t.form.title),a.append("file",t.form.file),e.next=6,t.$http.post("newspaper/",a).then((function(){t.form={},t.collapse=!1,t.$toast.success("Muvaffaqiyatli qo'shildi."),t.buttonToggle=!0,t.listNewspaper(0)})).catch((function(){t.$toast.error("Xatolik yuz berdi.")}));case 6:e.next=9;break;case 8:t.$toast.error("Ma'lumotlarni to'liq kirgizing.");case 9:case"end":return e.stop()}}),e)})))()},listNewspaper:function(t){var e=this;return s(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loader=!1,e.sum=0==t?e.sum:e.sum+t,a.next=4,e.$http.get("newspaper/?page=".concat(e.sum)).then((function(t){e.loader=!0,e.listing=t.data.results,e.left=null==t.data.previous,e.next=null==t.data.next})).catch((function(t){console.log(t)}));case 4:case"end":return a.stop()}}),a)})))()}},mounted:function(){this.listNewspaper(0)}},l=o,c=a("2877"),u=Object(c["a"])(l,r,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21e586.6a083520.js.map