(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(A,o,e){},61:function(A,o,e){"use strict";e.r(o);var t=e(0),g=e.n(t),n=e(28),c=e.n(n),C=e(5),a=e(11),r=e(22),K=e(1);function i(){return Object(K.jsx)("div",{className:"full-screen-loader-container",children:Object(K.jsx)("div",{className:"loader-container",children:Object(K.jsx)("div",{className:"loader-bar-wrapper",children:Object(K.jsx)("div",{className:"loader-bar"})})})})}var s=e(10),l=e(8),d=e(39),j=e(13),u="User",B="Planets",Q="Contacts",b=Object(d.a)({reducerPath:"api",baseQuery:Object(j.d)({baseUrl:"/api",prepareHeaders:function(A,o){var e=(0,o.getState)().auth.token;return e&&A.set("authorization",e),A}}),tagTypes:[u,B,Q],endpoints:function(A){return{getUser:A.query({query:function(A){return{url:"user/".concat(A)}},providesTags:[u]}),getPlanets:A.query({query:function(){return{url:"homepage/planets"}},providesTags:[B]}),getContacts:A.query({query:function(A){return{url:"homepage/contacts/".concat(A)}},providesTags:[Q]})}}}),O=b.useGetUserQuery,U=b.useGetPlanetsQuery,F=b.useGetContactsQuery,h=b.injectEndpoints({endpoints:function(A){return{login:A.mutation({query:function(A){return{url:"auth/login",method:"POST",body:A,validateStatus:function(A,o){return 200===A.status&&o.token}}}})}}}),m=h.useLoginMutation,x=e(3),p=Object(x.d)({name:"auth",initialState:{userid:localStorage.getItem("userid")||"",token:localStorage.getItem("token")||"",user:void 0},reducers:{setToken:function(A,o){A.token=o.payload},logout:function(A){A.user=void 0,A.token="",A.userid=""}},extraReducers:function(A){A.addMatcher(h.endpoints.login.matchFulfilled,(function(A,o){A.token=o.payload.token,A.userid=o.payload.userid})),A.addMatcher(h.endpoints.getUser.matchFulfilled,(function(A,o){A.user=o.payload.user}))}}),f=p.reducer,v=function(A){return A.auth.user},N=function(A){return A.auth.userid},E=function(A){return A.auth.token},D=p.actions,S=(D.setToken,D.logout),G=function(){var A=Object(C.g)().push,o=Object(l.d)(),e=Object(l.e)(E),g=Object(l.e)(N);Object(t.useEffect)((function(){localStorage.setItem("token",e),localStorage.setItem("userid",g)}),[e,g]);var n=O(null!==g&&void 0!==g?g:"",{skip:!g}),c=n.data,a=n.isLoading,r=n.error,K=n.isError,i=m(),d=Object(s.a)(i,2),j=d[0],u=d[1],B=u.isError,Q=u.isSuccess;Object(t.useEffect)((function(){Q&&A("/")}),[Q,A]);return{loggedUser:Object(t.useMemo)((function(){return{token:e,user:null===c||void 0===c?void 0:c.user,isLoading:a,error:r,isError:K}}),[e,c,a,K,r]),tryLogin:{login:j,isLoginRejected:B,isLoginSuccessful:Q},logout:function(){localStorage.clear(),o(S()),A("/")}}},T=["children"];function y(A){var o=A.children,e=Object(r.a)(A,T),t=G().loggedUser,g=t.token,n=t.user,c=t.isLoading,s=t.isError;return Object(K.jsx)(C.b,Object(a.a)(Object(a.a)({},e),{},{render:function(A){var e=A.location;return c?Object(K.jsx)(i,{}):!s&&g&&null!==n&&void 0!==n&&n.username?o:Object(K.jsx)(C.a,{to:{pathname:"/login",state:{from:e}}})}}))}var H=e.p+"static/media/clear-icon.700a1c95.svg";var P=function(){return Object(K.jsx)("img",{src:H,alt:"clear-icon"})};var k=function(){return Object(K.jsx)("img",{src:"data:image/png;base64,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",alt:"github-icon"})},w=e.p+"static/media/menu.9628c80c.svg";var L=function(){return Object(K.jsx)("img",{src:w,alt:"hamburger-icon"})},q=e.p+"static/media/user.b5989910.svg";var Z=function(){return Object(K.jsx)("img",{src:q,alt:"user-icon"})},V=e.p+"static/media/logout.42d05bf8.svg";var I=function(){return Object(K.jsx)("img",{src:V,alt:"logout-icon"})};function M(A){var o=A.name,e=A.size,t=void 0===e?"m":e,g=A.onClick;return Object(K.jsx)("div",{className:"icon-".concat(t," ").concat(g?"button-icon":""),onClick:g,children:J(o)})}function J(A){switch(A){case"clear":return Object(K.jsx)(P,{});case"github":return Object(K.jsx)(k,{});case"hamburger-icon":return Object(K.jsx)(L,{});case"user":return Object(K.jsx)(Z,{});case"logout":return Object(K.jsx)(I,{});default:return}}var R=function(A){var o=A.onClick,e=G().loggedUser.user;return Object(K.jsxs)("div",{className:"user-badge-wrapper",onClick:o,children:[null===e||void 0===e?void 0:e.username,Object(K.jsx)("div",{className:"user-badge","data-testid":"user-badge",children:Object(K.jsx)(M,{name:"user"})})]})},Y=e(21),z=[{subgroup:"HOME",links:[{label:"Home",link:"/"}]},{subgroup:"PLANET",links:[{label:"Planets",link:"/planets"},{label:"Contacts",link:"/contacts"}]}];var W=function(){var A=Object(C.g)(),o=G().loggedUser,e=o.token,g=o.user,n=o.isError,c=Object(C.h)().pathname;return Object(t.useEffect)((function(){(!function(A){var o=A.match(/^\/(\w*-?)*/g)||[]||[],e=Object(s.a)(o,1)[0];return""===e||"/login"===e||!!z.find((function(A){return A.links.find((function(A){return A.link===e}))}))}(c)||"/login"===c&&!n&&e&&null!==g&&void 0!==g&&g.username)&&A.push("/")}),[A,n,c,e,null===g||void 0===g?void 0:g.username]),{routes:z,pathname:c}};var X=function(){return Object(K.jsx)("div",{className:"github-badge",children:Object(K.jsx)("a",{href:"https://github.com/leandroercoli",target:"_blank",rel:"noreferrer","aria-current":"true",children:Object(K.jsx)(k,{})})})},_=function(A){var o=A.isOpen,e=A.onClose,g=void 0===e?function(){}:e,n=Object(C.g)(),c=W().routes,a=G().logout;return Object(K.jsxs)("div",{className:"dashboard-sidebar ".concat(o?"active":""),"data-testid":"dashboard-sidebar",children:[Object(K.jsxs)("div",{className:"sidebar-header",onClick:function(){n.push("/")},children:[Object(K.jsx)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAA8CgAwAEAAAAAQAAAKMAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAKMDwAMBEQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//3QAEAHj/2gAMAwEAAhEDEQA/APMaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//9DzGgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP//R8xoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//0vMaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//9PzGgAoAKACgBcHGcUAJigAxQAYoAMUALigBMUAGKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoACKADFAARigAoAKACgAoAKACgAoAMUAGKACgAoAKACgAoAKACgAoAKACgAoA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/M0AH/C09W/58rb8zQAf8LT1b/nytvzNAB/wtPVv+fK2/M0AH/C09VwR9its+uWpAZmofEDXb2MxrOIFbr5Y/rTA5m4uZrmQyTyvIxOSXYmgCPNACZoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAekjRsGjZkYd1ODQBvaZ4z13TVVIrxpIx/BJ8wxQB0EfxV1FUAfTrZj3O5hmkAy6+KOqSx7ILOCFj/ECTigDmdU8TaxqvF5fSMo6Ip2j9KYGQTkk+tACZoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAFFAHXap48utR0D+yXsYVQxqhkDHPAxmgDkD1oAKACgAoAKACgAoAKAOv0Dx1daLoo02OyhlUFsOzEHnrQByMjF5GY9WJNACUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAGRQBNb3U9q++3mkif1RiDQB1Om/ETXLHYJZEuUX+GQYz+IoA1f8Aha98B/yDLb/vtqQB/wALYv8A/oF23/fbUWAP+FsX/wD0C7b/AL7aiwB/wte//wCgZbf99tQAf8LXv+2l23/fbUAYninxnP4ks4YJ7OKEROXBRiecYoA5Y9aYBQAUAFABQAUAFABQAUAFABQAUAFAH//X8xoAKACgAzxigAoAKACgAzQAZoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAzQAUABNABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAC5oASgAoAKACgAoAKACgAoAM0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFACg+1ACZoAKACgYZ9qBC5oAQmgAoAKACgAoAKACgAoAKACgAoAKACgAoA//9DzGgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP//R8xoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//0vMaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//9PzGgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP//Z",alt:"logo",className:"header-logo"}),Object(K.jsx)("div",{className:"close-button",onClick:g,children:Object(K.jsx)(M,{name:"clear"})})]}),Object(K.jsx)("div",{className:"sidebar-content",children:c.map((function(A,o){var e=A.links,n=void 0===e?[]:e;return Object(K.jsxs)(t.Fragment,{children:[n.map((function(A,o){var e=A.label,t=A.link;return Object(K.jsx)(Y.b,{to:t,exact:"/"===t,onClick:function(){g()},children:Object(K.jsx)("span",{children:e})},"navlink-".concat(o))})),o<c.length-1&&Object(K.jsx)("div",{className:"separator"},"separator=".concat(o))]},"route-".concat(o))}))}),Object(K.jsx)(X,{}),Object(K.jsxs)("button",{className:"button-logout",onClick:a,children:["Log Out",Object(K.jsx)(M,{name:"logout"})]})]})},$=function(){var A=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=Object(t.useState)(A),e=Object(s.a)(o,2),g=e[0],n=e[1],c=function(){n(!g)};return[g,c]};var AA=function(){var A=$(!1),o=Object(s.a)(A,2),e=o[0],t=o[1];return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)("div",{className:"header",children:[Object(K.jsx)(M,{name:"hamburger-icon",onClick:t}),Object(K.jsx)("div",{children:Object(K.jsx)(R,{})})]}),Object(K.jsx)(_,{isOpen:e,onClose:t})]})},oA=e.p+"static/media/dune-logo.cef91294.png",eA=e(41),tA=e.n(eA),gA=e(42),nA=e.n(gA),cA=e(43),CA=e.n(cA),aA=["endAdornment","label","onChange","onBlur"];function rA(A){var o=A.endAdornment,e=A.label,t=A.onChange,g=void 0===t?function(){}:t,n=A.onBlur,c=void 0===n?function(){}:n,C=Object(r.a)(A,aA);return Object(K.jsxs)("div",{className:"input-wrapper ".concat(e?"input-with-label":""," ").concat(C.disabled?"input-disabled":""),children:[e&&Object(K.jsx)("label",{children:e}),Object(K.jsx)("input",Object(a.a)(Object(a.a)({},C),{},{onChange:function(A){A.preventDefault(),g(A.target.value)},onBlur:function(A){A.preventDefault(),c(A.target.value)}})),o?Object(K.jsx)("div",{className:"end-adornment",children:o}):null]})}var KA=e.p+"static/media/arrakis-poster.4735b342.jpg",iA=e.p+"static/media/arrakis-poster-2.f61dfd50.jpg",sA=function(){switch((new Date).getTime()%2){case 0:default:return KA;case 1:return iA}},lA=function(A){var o=A.severity,e=A.className,t=A.children;return Object(K.jsx)("div",{className:"alert-container ".concat(o," ").concat(e),"data-testid":"alert",children:t})};var dA=function(){var A=Object(t.useState)(""),o=Object(s.a)(A,2),e=o[0],g=o[1],n=Object(t.useState)(""),c=Object(s.a)(n,2),C=c[0],a=c[1],r=e&&C,i=$(!1),l=Object(s.a)(i,2),d=l[0],j=l[1],u=G().tryLogin,B=u.login,Q=u.isLoginRejected;return Object(K.jsxs)("div",{className:"login-container",children:[Object(K.jsxs)("div",{className:"form",children:[Object(K.jsx)("img",{src:oA,alt:"logo arrakis",className:"login-logo"}),Object(K.jsx)("h1",{children:"Sign in"}),Object(K.jsxs)("form",{children:[Object(K.jsx)(rA,{placeholder:"User",value:e||"",onChange:function(A){return g(A)},required:!0,endAdornment:Object(K.jsx)("div",{style:{display:"contents",opacity:e?1:.5},children:Object(K.jsx)(M,{name:"user"})})}),Object(K.jsx)(rA,{endAdornment:Object(K.jsx)("div",{className:"end-adornment-clickable",style:{display:"contents",opacity:d?1:.5},onClick:j,children:d?Object(K.jsx)(tA.a,{}):Object(K.jsx)(nA.a,{})}),onChange:function(A){return a(A)},required:!0,placeholder:"Password",type:d?"text":"password"}),Object(K.jsxs)("button",{type:"submit",className:"button-submit",disabled:!r,onClick:function(A){A.preventDefault(),B({email:e,password:C})},children:["Sign in",Object(K.jsx)(CA.a,{})]}),Q&&Object(K.jsx)(lA,{severity:"fail",className:"no-margin",children:"Incorrect user or password."})]})]}),Object(K.jsx)("img",{src:sA(),alt:"login background",className:"background"})]})};function jA(A){var o=Object.assign({},A);return Object(K.jsx)("div",Object(a.a)({className:"space-divider"},o))}function uA(A){var o=A.title,e=void 0===o?"":o,t=A.children;return Object(K.jsxs)("div",{className:"content-view padded-view-horizontal padded-view-vertical",children:[Object(K.jsx)("h2",{children:e}),Object(K.jsx)("div",{className:"padded-view-horizontal padded-view-vertical",children:t})]})}var BA=["iconLabel","label","children","className"];function QA(A){var o=A.iconLabel,e=A.label,t=A.children,g=A.className,n=void 0===g?"":g,c=Object(r.a)(A,BA);return Object(K.jsxs)("div",Object(a.a)(Object(a.a)({className:"form-card ".concat(n)},c),{},{children:[Object(K.jsx)("div",{className:"form-card-title-icon",children:Object(K.jsx)("h3",{children:o})}),Object(K.jsx)("h2",{children:e}),Object(K.jsx)("div",{className:"form-card-content",children:t})]}))}var bA,OA=function(){var A,o,e=Object(l.e)(v),t=U(null),g=t.data,n=void 0===g?{}:g,c=t.isLoading,C=n[null!==(A=null===e||void 0===e?void 0:e.planet)&&void 0!==A?A:""]||{},a=F(null!==(o=null===e||void 0===e?void 0:e.id)&&void 0!==o?o:-1,{skip:!e}),r=a.data,K=void 0===r?[]:r,i=a.isLoading;return{isLoading:c||i,user:e,planets:n,myPlanet:C,contacts:K}},UA=e(18),FA=Object(x.d)({name:"profile",initialState:{friends:(null===(bA=localStorage.getItem("friends"))||void 0===bA?void 0:bA.split(" ").map((function(A){return Number(A)})))||[]},reducers:{addFriend:function(A,o){A.friends=Object(UA.a)(new Set(A.friends.concat([o.payload])))},removeFriend:function(A,o){A.friends=A.friends.filter((function(A){return A!==o.payload}))}}}),hA=FA.reducer,mA=function(A){return A.profile.friends},xA=FA.actions,pA=xA.addFriend,fA=xA.removeFriend,vA=function(){var A=Object(l.d)(),o=Object(l.e)(mA),e=Object(t.useCallback)((function(o){return A(pA(o))}),[A]),g=Object(t.useCallback)((function(o){return A(fA(o))}),[A]);return Object(t.useEffect)((function(){o.length?localStorage.setItem("friends",o.join(" ")):localStorage.removeItem("friends")}),[o]),{friends:o,addFriend:e,removeFriend:g}};var NA=function(){var A,o=Object(C.g)(),e=OA(),g=e.contacts,n=e.myPlanet,c=vA().friends,a=Object(t.useMemo)((function(){return g.filter((function(A){return c.includes(A.id)}))}),[g,c]);return Object(K.jsxs)(uA,{children:[Object(K.jsxs)(QA,{iconLabel:null===(A=n.name)||void 0===A?void 0:A.slice(0,1),label:"My planet, ".concat(n.name,"."),onClick:function(){o.push("/planets")},style:{cursor:"pointer"},children:[Object(K.jsx)("em",{children:n.quote}),Object(K.jsxs)("span",{children:["Environment: ",n.environment]}),Object(K.jsxs)("span",{children:["Day length: ",n.day_length]}),Object(K.jsx)(jA,{}),Object(K.jsx)("div",{className:"form-card-image-container",children:Object(K.jsx)("img",{src:n.img,alt:"".concat(n.name)})})]}),Object(K.jsxs)(QA,{iconLabel:c.length,label:"My friends",onClick:function(){o.push("/contacts")},style:{cursor:"pointer"},children:[Object(K.jsxs)("em",{children:["You have ",c.length," friend",1!==c.length?"s":"","."]}),Object(K.jsx)("div",{className:"scrollable-list-horizontal",children:a.map((function(A){return Object(K.jsxs)("div",{className:"scrollable-list-thumbnail-item",children:[Object(K.jsx)("div",{children:Object(K.jsx)("img",{src:A.img,alt:"contact"})}),Object(K.jsx)("span",{children:A.username})]},"friend-".concat(A.id))}))})]})]})};var EA=function(){var A=OA(),o=A.planets,e=A.myPlanet;return console.log("planets, my planet",o,e),Object(K.jsx)(uA,{title:"Planets",children:Object.values(o).sort((function(A,o){return A.name>o.name?1:-1})).map((function(A){var o;return Object(K.jsxs)(QA,{iconLabel:null===(o=A.name)||void 0===o?void 0:o.slice(0,1),label:A.name,className:e.id===A.id?"form-card-accent":"",children:[Object(K.jsx)("em",{children:A.quote}),Object(K.jsxs)("span",{children:["Environment: ",A.environment]}),Object(K.jsxs)("span",{children:["Day length: ",A.day_length]}),Object(K.jsx)(jA,{}),Object(K.jsx)("div",{className:"form-card-image-container",children:Object(K.jsx)("img",{src:A.img,alt:"".concat(A.name)})})]},"planet-card-".concat(A.id))}))})},DA=e(44),SA=e.n(DA),GA=e(45),TA=e.n(GA);function yA(A){var o=A.data,e=void 0===o?[]:o,g=A.withSave;return Object(K.jsx)("ul",{className:"items-list-container",children:e.map((function(A,o){var n;return Object(K.jsxs)(t.Fragment,{children:[Object(K.jsxs)("li",{children:[Object(K.jsx)("div",{children:Object(K.jsx)("img",{src:A.img,alt:"contact"})}),Object(K.jsx)("h2",{children:A.name}),Object(K.jsx)("em",{children:A.subtitle}),Object(K.jsx)("div",{children:Object(K.jsx)("span",{children:null===(n=A.info)||void 0===n?void 0:n.join(" - ")})}),g&&Object(K.jsx)("div",{style:{cursor:"pointer"},onClick:A.onSaveClick,children:A.saved?Object(K.jsx)(SA.a,{}):Object(K.jsx)(TA.a,{})})]}),o<e.length-1&&Object(K.jsx)("div",{className:"separator"})]},"contact-".concat(o))}))})}var HA=function(){var A=OA(),o=A.contacts,e=A.planets,t=vA(),g=t.friends,n=t.addFriend,c=t.removeFriend;return Object(K.jsx)(uA,{title:"Contacts",children:Object(K.jsx)(yA,{data:o.map((function(A){var o,t=g.includes(A.id);return{name:A.username,subtitle:A.email,img:A.img,info:["".concat(A.title),"House ".concat(A.house),"Planet ".concat(null===e||void 0===e||null===(o=e[A.planet])||void 0===o?void 0:o.name)],saved:t,onSaveClick:t?function(){return c(A.id)}:function(){return n(A.id)}}})),withSave:!0})})};e(59);function PA(){var A=G().loggedUser.isLoading;return Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)(AA,{}),Object(K.jsxs)("div",{className:"content",children:[A&&Object(K.jsx)(i,{}),Object(K.jsx)(C.b,{exact:!0,path:"/",children:Object(K.jsx)(NA,{})}),Object(K.jsx)(C.b,{exact:!0,path:"/planets",children:Object(K.jsx)(EA,{})}),Object(K.jsx)(C.b,{exact:!0,path:"/contacts",children:Object(K.jsx)(HA,{})})]})]})}var kA,wA=function(){return W(),Object(K.jsxs)(C.d,{children:[Object(K.jsx)(C.b,{exact:!0,path:"/login",component:dA}),Object(K.jsx)(y,{path:"/*/:serialNumber",children:Object(K.jsx)(PA,{})}),Object(K.jsx)(y,{path:"/",children:Object(K.jsx)(PA,{})}),Object(K.jsx)(C.a,{from:"*",to:"/"})]})},LA=e(9),qA=Object(x.a)({reducer:(kA={},Object(LA.a)(kA,b.reducerPath,b.reducer),Object(LA.a)(kA,"auth",f),Object(LA.a)(kA,"profile",hA),kA),middleware:function(A){return A().concat(b.middleware)}}),ZA=function(A){A&&A instanceof Function&&e.e(3).then(e.bind(null,68)).then((function(o){var e=o.getCLS,t=o.getFID,g=o.getFCP,n=o.getLCP,c=o.getTTFB;e(A),t(A),g(A),n(A),c(A)}))};c.a.render(Object(K.jsx)(g.a.StrictMode,{children:Object(K.jsx)(l.a,{store:qA,children:Object(K.jsx)(Y.a,{children:Object(K.jsx)(wA,{})})})}),document.getElementById("root")),ZA()}},[[61,1,2]]]);
//# sourceMappingURL=main.9aaef3f2.chunk.js.map