(this["webpackJsonpfrontend-react"]=this["webpackJsonpfrontend-react"]||[]).push([[0],{124:function(e,t,a){},126:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(12),o=a.n(r),s=(a(124),a(125),a(126),a(2));function i(e){return Object(s.jsx)("h1",{children:"This is the about page"})}var l=a(8),j=a(69),d=a(27),b=a.n(d),u=a(98),O=a.n(u),h=a(97),g=a.n(h),p=a(193),f=a(195),x=a(196),m=a(197),v=a(191),S=a(99),w=a.n(S),C=Object(v.a)((function(e){return{root:{display:"flex",flexwrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{width:1500},icon:{color:"white"}}}));function k(e){var t=C(),a=Object(c.useState)(Object(j.a)(e.wallpaper)),n=Object(l.a)(a,2),r=n[0],o=n[1],i=600*r.length;return Object(s.jsx)("div",{className:t.root,children:Object(s.jsx)(p.a,{cellHeight:600,className:t.gridList,height:i,cols:6,children:r.map((function(e,a){return Object(s.jsxs)(f.a,{cols:3,children:[Object(s.jsx)("img",{src:e.image,alt:e.name}),Object(s.jsx)(x.a,{title:e.name,actionIcon:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(m.a,{className:t.icon,onClick:function(){return function(e,t){if(!localStorage.getItem("loggedIn"))return alert("Please Login or Sign Up to use this feature");console.log(localStorage.getItem("token"));var a={favorites:e._id},c={token:localStorage.getItem("token")};if(e.favorite){b.a.put("http://localhost:5000/api/user/unfavorite",a,{headers:c}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response.data)}));var n=Object(j.a)(r);e.favorite=!1,n[t]=e,o(n)}else{b.a.put("http://localhost:5000/api/user/favorite",a,{headers:c}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response.data)}));var s=Object(j.a)(r);e.favorite=!0,s[t]=e,o(s)}}(e,a)},children:e.favorite?Object(s.jsx)(g.a,{}):Object(s.jsx)(O.a,{})}),Object(s.jsx)(m.a,{className:t.icon,children:Object(s.jsx)(w.a,{})})]})})]},e.image)}))})})}function y(e){var t=Object(c.useState)({isLoading:!0,data:null}),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){b.a.get("http://localhost:5000/api/wallpapers").then((function(e){r({isLoading:!1,data:e.data}),console.log(e.data[0])}))}),[]),Object(s.jsx)(s.Fragment,{children:n.isLoading?Object(s.jsx)("h1",{children:"Loading..."}):Object(s.jsx)(k,{wallpaper:n.data})})}var N=a(16),L=a(158),I=a(100),F=a(210);function E(e){var t=Object(c.useState)(null),a=Object(l.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(null),i=Object(l.a)(o,2),j=(i[0],i[1]);return Object(s.jsxs)("div",{children:[Object(s.jsx)(L.a,{onClick:function(e){r(e.currentTarget)},children:"Account"}),Object(s.jsxs)(I.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){r(null)},children:[Object(s.jsx)(F.a,{onClick:function(){window.location.href="http://localhost:3000/user/profile"},children:"My Account"}),Object(s.jsx)(F.a,{onClick:function(){window.location.href="http://localhost:3000/user/favorites"},children:"Favorites"}),Object(s.jsx)(F.a,{onClick:function(){localStorage.clear(),j(!1),window.location.href="http://localhost:3000/home"},children:"Logout"})]})]})}var P=a(57),A=a(58),T=a(204),_=a(207),B=a(49);function W(e){return Object(s.jsx)(_.a,Object(B.a)(Object(B.a)({border:1,borderColor:"#e53935",borderRadius:16},{bgcolor:"#ff8a80",color:"white",m:1,border:1,padding:1}),{},{children:Object(s.jsx)(_.a,{children:e.errors})}))}var q=a(206),U=a(209),M=a(202),R=a(200),G=a(201),H=a(199);function J(e){var t=Object(c.useState)(e.open),a=Object(l.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],d=i[1],u=Object(c.useState)(""),O=Object(l.a)(u,2),h=O[0],g=O[1],p=Object(c.useState)(!1),f=Object(l.a)(p,2),x=f[0],m=f[1],v=Object(c.useState)([]),S=Object(l.a)(v,2),w=S[0],C=S[1],k=Object(c.useState)({}),y=Object(l.a)(k,2),N=(y[0],y[1]),I=Object(c.useState)(null),F=Object(l.a)(I,2),E=(F[0],F[1]),P=Object(c.useState)(null),A=Object(l.a)(P,2),T=(A[0],A[1]);function B(){r(!1),m(!1)}return Object(s.jsxs)(_.a,{children:[Object(s.jsx)(L.a,{variant:"outlined",color:"primary",onClick:function(){r(!0),m(!1)},children:"Login"}),Object(s.jsxs)(U.a,{open:n,onClose:B,"aria-labelledby":"for-dialog-title",children:[Object(s.jsx)(H.a,{id:"form-dialog-title",children:"Login"}),Object(s.jsxs)(R.a,{children:[Object(s.jsxs)(G.a,{children:[x?Object(s.jsx)(W,{errors:w}):null,"Please login to your account."]}),Object(s.jsx)(q.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0,onChange:function(e){d(e.target.value)}}),Object(s.jsx)(q.a,{autoFocus:!0,margin:"dense",id:"name",label:"Password",type:"password",fullWidth:!0,onChange:function(e){g(e.target.value)}})]}),Object(s.jsxs)(M.a,{children:[Object(s.jsx)(L.a,{onClick:B,color:"primary",children:"Cancel"}),Object(s.jsx)(L.a,{onClick:function(){var e={email:j,password:h};b.a.post("http://localhost:5000/api/user/login",e).then((function(e){r(!1),localStorage.setItem("loggedIn",e.data.LoggedIn),localStorage.setItem("token",e.data.token),E(localStorage.getItem("loggedIn")),T(localStorage.getItem("token")),window.location.href="http://localhost:3000/home"})).catch((function(e){if(e.response.data.errors.length>1)var t=e.response.data.errors.map((function(e){return e.msg})).join(" "),a=e.response.data.errors.map((function(e){return e.param})).join(" ");else t=e.response.data.errors.msg,a=e.response.data.errors.param;C(t),N(a),m(!0)}),[])},color:"primary",children:"Login"})]})]})]})}function D(e){var t=e.message;return Object(s.jsx)(_.a,Object(B.a)(Object(B.a)({border:1,borderColor:"success.main",borderRadius:16},{bgcolor:"success.main",color:"white",m:1,border:1,padding:1}),{},{children:Object(s.jsx)(_.a,{children:t})}))}var z=a(203);function K(e){var t=Object(c.useState)(!1),a=Object(l.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],d=i[1],u=Object(c.useState)(""),O=Object(l.a)(u,2),h=O[0],g=O[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),x=f[0],m=f[1],v=Object(c.useState)(""),S=Object(l.a)(v,2),w=S[0],C=S[1],k=Object(c.useState)(!1),y=Object(l.a)(k,2),N=y[0],I=y[1],F=Object(c.useState)([]),E=Object(l.a)(F,2),P=E[0],A=E[1],T=Object(c.useState)([]),B=Object(l.a)(T,2),J=(B[0],B[1]),K=Object(c.useState)(!1),Q=Object(l.a)(K,2),V=Q[0],X=Q[1],Y=Object(c.useState)(""),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1];function te(){r(!1)}return Object(s.jsxs)(_.a,{children:[Object(s.jsx)(L.a,{variant:"outlined",color:"primary",onClick:function(){r(!0)},children:"Sign Up"}),Object(s.jsxs)(U.a,{open:n,onClose:te,"aria-labelledby":"for-dialog-title",children:[Object(s.jsx)(H.a,{id:"form-dialog-title",children:"Sign Up"}),Object(s.jsxs)("form",{children:[Object(s.jsxs)(R.a,{children:[Object(s.jsx)(G.a,{children:"Create an Account"}),V?Object(s.jsx)(D,{message:$}):null,N?Object(s.jsx)(W,{errors:P}):null,Object(s.jsxs)(z.a,{container:!0,spacing:3,children:[Object(s.jsx)(z.a,{item:!0,xs:6,children:Object(s.jsx)(q.a,{required:!0,autoFocus:!0,margin:"dense",id:"first_name",label:"First Name",type:"text",value:j,onChange:function(e){d(e.target.value)}})}),Object(s.jsx)(z.a,{item:!0,xs:6,children:Object(s.jsx)(q.a,{required:!0,margin:"dense",id:"last_name",label:"Last Name",type:"text",value:h,onChange:function(e){g(e.target.value)}})})]}),Object(s.jsx)(q.a,{required:!0,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,value:x,onChange:function(e){m(e.target.value)}}),Object(s.jsx)(q.a,{required:!0,margin:"dense",id:"password",label:"Password",type:"password",fullWidth:!0,value:w,onChange:function(e){C(e.target.value)}})]}),Object(s.jsxs)(M.a,{children:[Object(s.jsx)(L.a,{onClick:te,color:"primary",children:"Cancel"}),Object(s.jsx)(L.a,{onClick:function(){var e={first_name:j,last_name:h,email:x,password:w};b.a.post("http://localhost:5000/api/users",e).then((function(e){console.log(e),X(!0),I(!1),ee(e.data.message)})).catch((function(e){A(e.response.data.messages),J(e.response.data.fields),I(!0),X(!1)}))},color:"primary",children:"Sign Up"})]})]})]})]})}var Q=Object(v.a)((function(e){return{root:{flexGrow:1,background:"white"}}}));function V(){var e=Q(),t=Object(c.useState)(!1),a=Object(l.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(!1),i=Object(l.a)(o,2),j=(i[0],i[1],Object(c.useState)(!1)),d=Object(l.a)(j,2);d[0],d[1];Object(c.useEffect)((function(){var e=localStorage.getItem("loggedIn");r(e)}),[]);return Object(s.jsx)(_.a,{children:Object(s.jsxs)(P.a,{className:e.root,children:[Object(s.jsx)(P.a.Brand,{href:"home",children:"Wallpaper Engine"}),Object(s.jsx)(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsxs)(P.a.Collapse,{id:"basic-navbar-nav",children:[Object(s.jsx)(A.a,{className:"mr-auto",children:Object(s.jsxs)(T.a,{variant:"text",color:"primary",children:[Object(s.jsx)(L.a,{children:Object(s.jsx)(A.a.Link,{href:"/",children:"Home"})}),Object(s.jsx)(L.a,{children:Object(s.jsx)(A.a.Link,{href:"/about",children:"About"})})]})}),Object(s.jsx)(A.a,{className:"ml-auto",children:n?Object(s.jsx)(E,{}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(J,{}),Object(s.jsx)(K,{})]})})]})]})})}var X=a(205),Y=a(198),Z=Object(v.a)((function(e){return{root:{flexGrow:1,marginTop:100,borderStyle:"solid"},grid:{padding:e.spacing(2)},paper:{textAlign:"left",padding:e.spacing(2),marginBottom:e.spacing(2),height:70}}}));function $(e){var t=Object(c.useState)({loading:!0,data:null}),a=Object(l.a)(t,2),n=a[0],r=a[1],o=Z();return Object(c.useEffect)((function(){var e={headers:{token:localStorage.getItem("token")}};b.a.get("http://localhost:5000/api/user/profile",e).then((function(e){console.log(e.data),r({loading:!1,data:e.data})})).catch((function(e){console.log(e.response)}))}),[]),Object(s.jsx)(X.a,{className:o.root,children:n.loading?Object(s.jsx)("h1",{children:"Loading..."}):Object(s.jsxs)(z.a,{container:!0,className:o.grid,spacing:2,children:[Object(s.jsx)(z.a,{item:!0,xs:6,children:Object(s.jsxs)(Y.a,{className:o.paper,children:["First Name: ",n.data.first_name]})}),Object(s.jsx)(z.a,{item:!0,xs:6,children:Object(s.jsxs)(Y.a,{className:o.paper,children:["Last Name: ",n.data.last_name]})}),Object(s.jsx)(z.a,{item:!0,xs:12,children:Object(s.jsxs)(Y.a,{className:o.paper,children:["Email: ",n.data.email]})}),Object(s.jsx)(z.a,{item:!0,xs:6,children:Object(s.jsxs)(Y.a,{className:o.paper,children:["New Password: ",n.data.password]})}),Object(s.jsx)(z.a,{item:!0,xs:6,children:Object(s.jsx)(Y.a,{className:o.paper,children:"Re-Enter New Password: "})})]})})}function ee(){return Object(s.jsx)("h1",{children:"This is the favorites page"})}var te=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(V,{}),Object(s.jsxs)(N.c,{children:[Object(s.jsx)(N.a,{path:"/about",component:i}),Object(s.jsx)(N.a,{path:"/user/profile",component:$}),Object(s.jsx)(N.a,{path:"/user/favorites",component:ee}),Object(s.jsx)(N.a,{path:"/",component:y})]})]})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,212)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))},ce=a(76);o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(ce.a,{children:Object(s.jsx)(te,{})})}),document.getElementById("root")),ae()}},[[155,1,2]]]);
//# sourceMappingURL=main.7b6cae8d.chunk.js.map