(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-208768f2"],{"07f6":function(e,t,a){"use strict";var n=a("f38f"),r=a.n(n);r.a},2610:function(e,t,a){e.exports=a.p+"img/marifat.e15e0b9c.png"},b955:function(e,t,a){},f37e:function(e,t,a){"use strict";var n=a("b955"),r=a.n(n);r.a},f38f:function(e,t,a){},f593:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"c-app"},[a("TheSidebar"),a("CWrapper",[a("TheHeader"),a("div",{staticClass:"c-body"},[a("main",{staticClass:"c-main"},[a("CContainer",{attrs:{fluid:""}},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)],1),a("TheFooter")],1)],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CSidebar",{attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(t){return e.$store.commit("set",["sidebarShow",t])}}},[n("CSidebarBrand",{staticClass:"d-md-down-none",staticStyle:{"background-color":"white"},attrs:{to:"/"}},[n("img",{staticClass:"w-100",staticStyle:{height:"35px","max-width":"100px"},attrs:{src:a("2610"),alt:"Marifat Logo"}})]),n("CRenderFunction",{attrs:{flat:"","content-to-render":e.$options.nav}}),n("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(t){return e.$store.commit("set",["sidebarMinimize",!e.minimize])}}})],1)},o=[],s=[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavItem",name:"Asosiy Panel",to:"/dashboard",icon:"cil-speedometer"},{_name:"CSidebarNavTitle",_children:["Gazetalar"]},{_name:"CSidebarNavItem",name:"Gazetalar",to:"/newspaper",icon:"cil-newspaper"},{_name:"CSidebarNavTitle",_children:["To'lovlar"]},{_name:"CSidebarNavItem",name:"To'lovlar",to:"/payment",icon:"cil-money"},{_name:"CSidebarNavTitle",_children:["Foydalanuvchilar"]},{_name:"CSidebarNavItem",name:"Foydalanuvchilar",to:"/users",icon:"cil-user"}]}],c={name:"TheSidebar",nav:s,computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}}},l=c,d=a("2877"),m=Object(d["a"])(l,i,o,!1,null,null,null),u=m.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[a("CToggler",{staticClass:"ml-3 d-lg-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarMobile")}}}),a("CToggler",{staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarDesktop")}}}),a("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{to:"/"}},[a("CIcon",{attrs:{name:"logo",height:"48",alt:"Logo"}})],1),a("CHeaderNav",{staticClass:"mr-4 ml-auto"},[a("TheHeaderDropdownAccnt")],1),a("CSubheader",{staticClass:"px-3"},[a("CBreadcrumbRouter",{staticClass:"border-0 mb-0"})],1)],1)},f=[],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:e._u([{key:"toggler",fn:function(){return[a("CHeaderNavLink",[a("div",{staticClass:"c-avatar"},[a("img",{staticClass:"c-avatar-img ",attrs:{src:"img/avatars/7.jpg"}})])])]},proxy:!0}])},[a("CDropdownItem",{on:{click:function(t){return e.logout()}}},[a("CIcon",{attrs:{name:"cil-lock-locked"}}),e._v(" Chiqish ")],1)],1)},p=[],b={name:"TheHeaderDropdownAccnt",data:function(){return{itemsCount:42}},methods:{logout:function(){this.$store.dispatch("logout")}}},v=b,g=(a("07f6"),Object(d["a"])(v,C,p,!1,null,"d91040fa",null)),w=g.exports,_={name:"TheHeader",components:{TheHeaderDropdownAccnt:w}},S=_,T=Object(d["a"])(S,h,f,!1,null,null,null),x=T.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CFooter",{attrs:{fixed:!1}},[a("div",[a("a",{attrs:{href:"http://www.greatsoft.uz/",target:"_blank"}},[e._v("GreatSoft.uz")]),a("span",{staticClass:"ml-1"},[e._v("© "+e._s((new Date).getFullYear())+" Barcha huquqlar himoyalangan.")])])])},$=[],y={name:"TheFooter"},z=y,N=Object(d["a"])(z,k,$,!1,null,null,null),H=N.exports,F={name:"TheContainer",components:{TheSidebar:u,TheHeader:x,TheFooter:H}},D=F,I=(a("f37e"),Object(d["a"])(D,n,r,!1,null,"8fb9cc8a",null));t["default"]=I.exports}}]);
//# sourceMappingURL=chunk-208768f2.2fd7f3a8.js.map