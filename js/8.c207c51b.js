"use strict";(self["webpackChunkvue_template"]=self["webpackChunkvue_template"]||[]).push([[8],{3008:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(3396);const o={class:"container p-5"},u=(0,a._)("h1",null,"Store 練習",-1),r=(0,a._)("hr",null,null,-1);function s(e,t,n,s,l,i){const d=(0,a.up)("AView1"),c=(0,a.up)("AView2"),m=(0,a.up)("IsLoading");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",o,[u,(0,a.Wm)(d),r,(0,a.Wm)(c)]),(0,a.Wm)(m,{active:e.isLoading,"onUpdate:active":t[0]||(t[0]=t=>e.isLoading=t)},null,8,["active"])],64)}var l=n(7139);const i=(0,a._)("h2",null,"A1 元件的資料",-1),d=(0,a.Uk)("actions："),c=(0,a.Uk)("資料響應式： "),m=(0,a._)("br",null,null,-1),p=(0,a.Uk)(" 所有狀態都是由 Store 提供，所以 Store 的狀態被改變，所有使用該狀態的值都會被改變 ");function g(e,t,n,o,u,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("p",null,"state："+(0,l.zw)(e.name),1),(0,a._)("p",null,"getters："+(0,l.zw)(e.getReverse),1),(0,a._)("p",null,[d,(0,a._)("button",{type:"button",onClick:t[0]||(t[0]=(...t)=>e.getRandomuser&&e.getRandomuser(...t))},"取得 Randomuser 資料")]),(0,a._)("p",null,[c,(0,a._)("button",{type:"button",onClick:t[1]||(t[1]=(...t)=>e.updateName&&e.updateName(...t))},"點我，並查看其他 state 的Name"),m,p])],64)}var v=n(4301),_=(0,v.Q_)("loadingStore",{state:()=>({isLoading:!1})}),R=n(6265),k=n.n(R);const h=_();console.log(h);var w=(0,v.Q_)("aStore",{state:()=>({name:"Mizu",dataReverse:["AA","BB","CC","DD"]}),getters:{getReverse:e=>e.dataReverse.reverse()},actions:{updateName(){this.name="名字被更改了"},getRandomuser(){h.isLoading=!0,k().get("https://randomuser.me/api/").then((e=>{console.log(e),h.isLoading=!1})).catch((e=>{h.isLoading=!1,console.log(e)}))}}}),b={computed:{...(0,v.rn)(w,["name","getReverse"])},methods:{...(0,v.nv)(w,["getRandomuser","updateName"])}},N=n(89);const f=(0,N.Z)(b,[["render",g]]);var A=f;const C=(0,a._)("h2",null,"A2 元件的資料",-1),L=(0,a.Uk)("actions："),S=(0,a.Uk)("資料響應式： "),U=(0,a._)("br",null,null,-1),z=(0,a.Uk)(" 所有狀態都是由 Store 提供，所以 Store 的狀態被改變，所有使用該狀態的值都會被改變 ");function D(e,t,n,o,u,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[C,(0,a._)("p",null,"state："+(0,l.zw)(e.name),1),(0,a._)("p",null,"getters："+(0,l.zw)(e.getReverse),1),(0,a._)("p",null,[L,(0,a._)("button",{type:"button",onClick:t[0]||(t[0]=(...t)=>e.getRandomuser&&e.getRandomuser(...t))},"取得 Randomuser 資料")]),(0,a._)("p",null,[S,(0,a._)("button",{type:"button",onClick:t[1]||(t[1]=(...t)=>e.updateName&&e.updateName(...t))},"點我，並查看其他 state 的Name"),U,z])],64)}var y={computed:{...(0,v.rn)(w,["name","getReverse"])},methods:{...(0,v.nv)(w,["getRandomuser","updateName"])}};const V=(0,N.Z)(y,[["render",D]]);var H=V,W={components:{AView1:A,AView2:H},computed:{...(0,v.rn)(_,["isLoading"])}};const Y=(0,N.Z)(W,[["render",s]]);var Z=Y}}]);
//# sourceMappingURL=8.c207c51b.js.map