(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,t,n){e.exports=n(352)},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},206:function(e,t,n){},325:function(e,t,n){var a={"./Sinsegye.jpg":326,"./avengers.jpg":327,"./totoro-horizontal.jpg":328};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=325},326:function(e,t,n){e.exports=n.p+"static/media/Sinsegye.2d3147ca.jpg"},327:function(e,t,n){e.exports=n.p+"static/media/avengers.177e9e0b.jpg"},328:function(e,t,n){e.exports=n.p+"static/media/totoro-horizontal.bd276bcd.jpg"},349:function(e,t,n){},351:function(e,t,n){},352:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),c=n.n(o),i=(n(202),n(19)),l=n(20),s=n(23),u=n(21),p=n(24),m=(n(203),function(e){var t=e.children;return r.a.createElement("div",{className:"Header"},"Theater",t)}),d=(n(204),function(e){var t=e.children;return r.a.createElement("div",{className:"PostWrapper"},t)}),h=n(26),f=n.n(h),b=n(41),v=(n(206),n(363)),g=n(184),O=n(365),E=n(366),k=n(367),y=n(370),j=n(359),S=n(362),w=n(360),_=n(364),C=n(33),P=n.n(C);var x=n(38),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).IndividualCard=function(e,t,n){return r.a.createElement(v.a,{centered:!0},r.a.createElement(g.a,{src:n}),r.a.createElement(v.a.Content,null,r.a.createElement(v.a.Header,null,e),r.a.createElement(v.a.Description,null,t)))},a.postGen=function(e,t,o,c,i,l){var s=n(325)("./".concat(o));return window.innerWidth>766?r.a.createElement(O.a,{placeholder:!0,key:l},r.a.createElement(E.a,{columns:2,relaxed:"very",stackable:!0},r.a.createElement(E.a.Column,null,r.a.createElement(k.a,{trigger:a.IndividualCard(e,t,s)},r.a.createElement(k.a.Header,null,"User Rating"),r.a.createElement(k.a.Content,null,r.a.createElement(y.a,{icon:"star",defaultRating:c,maxRating:4})))),r.a.createElement(E.a.Column,{verticalAlign:"middle"},i)),r.a.createElement(j.a,{vertical:!0})):r.a.createElement(O.a,{placeholder:!0,key:l},r.a.createElement(k.a,{trigger:a.IndividualCard(e,t,s)},r.a.createElement(k.a.Header,null,"User Rating"),r.a.createElement(k.a.Content,null,r.a.createElement(y.a,{icon:"star",defaultRating:c,maxRating:4}))),i)},a.handleChange=function(e,t){var n=t.value;a.setState({value:n})},a.handleChecked=function(e,t){var n=t.value;return a.state.value===n},a.state={list:[],rentList:[]},Promise.resolve(P.a.get("/api/rent")).then(function(){var e=Object(b.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data.reduce(function(e,t,n,a){var r=t.movie_title;return e.hasOwnProperty(r)?e[r].push({theater_name:t.theater_name,movie_date:t.movie_date}):e[r]=[{theater_name:t.theater_name,movie_date:t.movie_date}],e},{});case 2:n=e.sent,a.setState({rentList:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(Promise.resolve(P.a.get("/api/post")).then(function(){var e=Object(b.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data.map(function(e,t){return a.postGen(e.movie_title,e.movie_desc,e.movie_image,e.movie_rating,r.a.createElement(U,{title:e.movie_title,rentList:a.state.rentList}),t)});case 2:n=e.sent,a.setState({list:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.list)}}]),t}(a.Component),H=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:null},n.handleChange=function(e,t){var a=t.value;n.setState({value:a})},n.handleSubmit=function(e){if("submit"===e.target.name){if(null===n.state.value)return;var t=n.state.value,a=t.split(",")[0],r=t.split(", ")[1],o=t.split(", ")[2];Promise.resolve(function(e,t,n,a){return P.a.post("/api/addB",{params:{movie_title:e,theater_name:t,movie_date:n,user_id:a}})}(a,r,o,n.props.redux.id)).then(function(){var e=Object(b.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,"exist"!==t.data;case 2:if(!e.sent){e.next=6;break}e.t0=n.props.onAddBooks(n.state.value),e.next=7;break;case 6:e.t0=window.alert("Already Booked");case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.rentList[n],o=null;return a?Promise.resolve(a.map(function(t,a){var o;o=e.props.redux?e.props.redux.books:null;return r.a.createElement(S.a.Field,{key:a},r.a.createElement(w.a,{label:t.theater_name+" "+t.movie_date.slice(0,10),name:"radioGroup",value:"".concat(n,", ").concat(t.theater_name,", ").concat(t.movie_date.slice(0,10)),checked:e.state.value==="".concat(n,", ").concat(t.theater_name,", ").concat(t.movie_date.slice(0,10)),onChange:e.handleChange,disabled:function(e,a){return Array.isArray(e)?e.includes(a):e==="".concat(n,", ").concat(t.theater_name,", ").concat(t.movie_date.slice(0,10))}(o,"".concat(n,", ").concat(t.theater_name,", ").concat(t.movie_date.slice(0,10)))}))})).then(function(e){return o=e}):o=r.a.createElement(r.a.Fragment,null),r.a.createElement(S.a,null,r.a.createElement(S.a.Field,null,"Selected value: ",r.a.createElement("b",null,this.state.value)),o,r.a.createElement(_.a,{content:"BOOK TICKETS",disabled:void 0===this.props.redux,icon:"film",size:"big",name:"submit",onClick:this.handleSubmit}))}}]),t}(a.Component),U=Object(x.b)(function(e){return{redux:e}},function(e){return{onAddBooks:function(t){var n;e(function(e){return{type:"ADD_BOOKS",books:e}}(t)),n=t,P.a.post("/api/bookId",{params:{id:n}})}}})(H),F=I,N=(n(349),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={closing:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;this.props.visible&&!e.visible&&(this.setState({closing:!0}),setTimeout(function(){t.setState({closing:!1})},1e3))}},{key:"render",value:function(){var e=this.props,t=e.visible,n=e.children,a=this.state.closing;return t||a?r.a.createElement("div",{className:"Popup-wrapper"},r.a.createElement("div",{className:"Popup ".concat(a?"bounceOut":"bounceIn"," animated")},n)):null}}]),t}(a.Component)),L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={fetching:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(F,null))}}]),t}(a.Component),R=n(59),A=n(361),B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).clickHandler=function(e){"close"===e.target.name?n.setState({popupVisibility:!1}):"signup"===e.target.name?n.setState({popupVisibility:!0,PopupLabel:r.a.createElement(Y,{close:n.clickHandler})}):"logout"===e.target.name?(n.setState({id:null}),setTimeout(function(){n.setState({login:!1}),n.props.onLogout()},500)):n.setState({popupVisibility:!0,PopupLabel:r.a.createElement(z,{close:n.clickHandler})})},n.state={popupVisibility:!1,login:!1,PopupLabel:null,id:null,book:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillUpdate",value:function(e,t){console.log("componentWillUpdate"),this.props.redux&&JSON.stringify(this.props.redux.books)!==JSON.stringify(this.state.book)&&(this.props.onFetch(t.book),console.log("redux changed")),JSON.stringify(this.state.book)!==JSON.stringify(t.book)&&(this.props.onFetch(t.book),console.log("state book changed"))}},{key:"componentWillReceiveProps",value:function(e){var t=this;console.log("componentWillReceiveProps"),e.redux&&console.dir(e.redux);var n,a=e.redux.id;null!=a&&(this.setState({id:a,login:!0,popupVisibility:!1}),Promise.resolve((n=a,P.a.get("/api/bookId",{params:{id:n}}))).then(function(e){if(e.data)if(Array.isArray(e.data)){var n=e.data.map(function(e,t){var n=e.movie_title,a=e.theater_name,r=e.movie_date;return"".concat(n,", ").concat(a,", ").concat(r.slice(0,10))});JSON.stringify(t.state.book)!==JSON.stringify(n)&&(t.setState({book:n}),t.props.onFetch(n),console.log("h9"))}else{var a=e.data,r=a.movie_title,o=a.theater_name,c=a.movie_date,i="".concat(r,", ").concat(o,", ").concat(c.slice(0,10));JSON.stringify(t.state.book)!==JSON.stringify(i)&&(t.setState({book:i}),console.log("h8"))}}))}},{key:"render",value:function(){var e=this.state,t=e.popupVisibility,n=e.PopupLabel;return r.a.createElement(m,null,r.a.createElement(W,{login:this.state.login,id:this.state.id,clickHandler:this.clickHandler,book:this.state.book}),r.a.createElement(N,{visible:t},n))}}]),t}(a.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(){console.log("ButtonSet R P")}},{key:"componentWillUpdate",value:function(){console.log("ButtonSet W U")}},{key:"render",value:function(){var e=this.props,t=e.login,n=e.id,a=e.clickHandler,o=e.book;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{trigger:r.a.createElement(_.a,{content:"MyStatus",icon:"user",color:"teal"}),content:r.a.createElement(v.a,null,r.a.createElement(v.a.Content,null,r.a.createElement(v.a.Header,null,r.a.createElement(R.a,{name:"user"}),"Your ID :  ",n),r.a.createElement(v.a.Meta,null,r.a.createElement("span",{className:"date"},"Book List")),r.a.createElement(J,{book:o,user_id:n})),r.a.createElement(v.a.Content,{extra:!0},r.a.createElement(_.a,{content:"Log Out",name:"logout",onClick:a,color:"teal"}),n?r.a.createElement(r.a.Fragment,null):r.a.createElement(A.a,{active:!0,inline:!0}))),on:"click",position:"top right"})):r.a.createElement(_.a.Group,null,r.a.createElement(_.a,{content:"Sign in",name:"signin",onClick:a,color:"teal"}),r.a.createElement(_.a,{content:"Get started",name:"signup",onClick:a,color:"teal"}))}}]),t}(a.Component),D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).hc=function(e,t){console.log(n.props.onRemove);var a=e.split(",")[0],r=e.split(", ")[1],o=e.split(", ")[2];Promise.resolve(function(e,t,n,a){return P.a.post("/api/deleteB",{params:{movie_title:e,theater_name:t,movie_date:n,user_id:a}})}(a,r,o,n.props.user_id)).then(n.props.onRemove(e))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillUpdate",value:function(){console.log("Book info cwu")}},{key:"componentWillReceiveProps",value:function(){console.log("Book info cwrp")}},{key:"render",value:function(){var e,t=this,n=this.props.book;return Array.isArray(n)&&(e=n.map(function(e,n){return r.a.createElement(v.a.Description,{key:n},e,r.a.createElement(R.a,{link:!0,name:"close",onClick:function(){return t.hc(e,n)}}))})),r.a.createElement(v.a.Description,null,e||n)}}]),t}(a.Component),J=Object(x.b)(null,function(e){return{onRemove:function(t){e({type:"REMOVE_BOOKS",books:t}),console.log(t)}}})(D),K=Object(x.b)(function(e){return{redux:e}},function(e){return{onLogout:function(){return e({type:"USER_LOGOUT"})},onFetch:function(t){return e({type:"FETCH_BOOKS",books:t})}}})(B),T=n(56),G=n(368),V=n(90),M=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:null,password:null,fetching:!1,login:!1,error:!1},n.fetchId=function(){var e=Object(b.a)(f.a.mark(function e(t,a){var r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({fetching:!0}),e.prev=1,e.next=4,Promise.all([(o=t,c=a,P.a.get("/api/id",{params:{id:o,password:c}}))]);case 4:r=e.sent,"OK"===r[0].data?(n.setState({login:!0,error:!1,trueId:n.state.id}),n.props.onLogin(n.state.trueId)):n.setState({error:!0}),n.setState({fetching:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.setState({fetching:!1});case 13:case"end":return e.stop()}var o,c},e,null,[[1,10]])}));return function(t,n){return e.apply(this,arguments)}}(),n.changeHandler=function(e){n.setState(Object(T.a)({},e.target.name,e.target.value))},n.signInHandler=function(e){e.target.name&&"close"!==e.target.name&&(n.fetchId(n.state.id,n.state.password),e.preventDefault())},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{as:"h2",icon:!0},r.a.createElement(R.a,{name:"user"}),"Member Login",r.a.createElement(G.a.Subheader,null,"Insert Your ID and PassWord")),r.a.createElement(S.a,{name:"form",onSubmit:this.signInHandler},t?r.a.createElement(S.a.Field,{className:"Popup-Field",error:!0},r.a.createElement(S.a.Input,{icon:"user",iconPosition:"left",label:"Username",placeholder:"Username",name:"id",onChange:function(t){return e.changeHandler(t)}}),r.a.createElement(S.a.Input,{icon:"key",iconPosition:"left",label:"Password",placeholder:"Password",name:"password",onChange:function(t){return e.changeHandler(t)},type:"password"}),r.a.createElement(V.a,{basic:!0,color:"red",pointing:!0},"   Check Again ")):r.a.createElement(S.a.Field,{className:"Popup-Field"},r.a.createElement(S.a.Input,{icon:"user",iconPosition:"left",label:"Username",placeholder:"Username",name:"id",onChange:function(t){return e.changeHandler(t)}}),r.a.createElement(S.a.Input,{icon:"key",iconPosition:"left",label:"Password",placeholder:"Password",name:"password",onChange:function(t){return e.changeHandler(t)},type:"password"})),r.a.createElement(_.a,{className:"Popup-Submit",content:"Sign in",color:"teal",type:"submit"}),r.a.createElement(_.a,{content:"Cancel",color:"red",name:"close",type:"button",onClick:this.props.close})))}}]),t}(a.Component),z=Object(x.b)(null,function(e){return{onLogin:function(t){return e(function(e){return{type:"USER_LOGIN",id:e}}(t))}}})(M),Y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:null,password:null,error:!1},n.fetchSignUp=function(){var e=Object(b.a)(f.a.mark(function e(t,a){var r,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({fetching:!0}),e.prev=1,e.next=4,Promise.all([(c=t,i=a,P.a.post("/api/id",{params:{id:c,password:i}}))]);case 4:r=e.sent,o=r[0].data,console.log(o),"OK"===o?n.setState({login:!0,error:!1}):n.setState({error:!0}),n.setState({fetching:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n.setState({fetching:!1});case 14:case"end":return e.stop()}var c,i},e,null,[[1,11]])}));return function(t,n){return e.apply(this,arguments)}}(),n.changeHandler=function(e){n.setState(Object(T.a)({},e.target.name,e.target.value)),console.dir(n.state)},n.signUpHandler=function(e){console.log("signUpHandler"),console.log(e.target.name),e.target.name&&"close"!==e.target.name&&(n.fetchSignUp(n.state.id,n.state.password),e.preventDefault())},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{as:"h2",icon:!0},r.a.createElement(R.a,{name:"signup"}),"Create Account",r.a.createElement(G.a.Subheader,null,"Insert Your ID and PassWord")),r.a.createElement(S.a,{name:"form",onSubmit:this.signUpHandler},t?r.a.createElement(S.a.Field,{className:"Popup-Field",error:!0},r.a.createElement(S.a.Input,{icon:"user",iconPosition:"left",label:"Username",placeholder:"Username",name:"id",onChange:function(t){return e.changeHandler(t)}}),r.a.createElement(S.a.Input,{icon:"key",iconPosition:"left",label:"Password",placeholder:"Password",name:"password",onChange:function(t){return e.changeHandler(t)},type:"password"}),r.a.createElement(V.a,{basic:!0,color:"red",pointing:!0},"   Check Again ")):r.a.createElement(S.a.Field,{className:"Popup-Field"},r.a.createElement(S.a.Input,{icon:"user",iconPosition:"left",label:"Username",placeholder:"Username",name:"id",onChange:function(t){return e.changeHandler(t)}}),r.a.createElement(S.a.Input,{icon:"key",iconPosition:"left",label:"Password",placeholder:"Password",name:"password",onChange:function(t){return e.changeHandler(t)},type:"password"})),r.a.createElement(_.a,{className:"Popup-Submit",content:"Sign in",color:"teal",type:"submit"}),r.a.createElement(_.a,{content:"Cancel",color:"red",name:"close",type:"button",onClick:this.props.close})))}}]),t}(a.Component),$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(L,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(350),n(351);var q=n(84),Q=n(185),X=n(60),Z={id:null,books:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return Object(X.a)({},e,{id:t.id});case"USER_LOGOUT":return Object(X.a)({},e,{id:null,books:null});case"FETCH_BOOKS":return Object(X.a)({},e,{books:t.books});case"ADD_BOOKS":return Object(X.a)({},e,{books:[].concat(Object(Q.a)(e.books),[t.books])});case"REMOVE_BOOKS":return Object(X.a)({},e,{books:e.books.filter(function(t){return t.books!==e.books})})}},te=Object(q.b)(ee);c.a.render(r.a.createElement(x.a,{store:te},r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[197,1,2]]]);
//# sourceMappingURL=main.5294c3e3.chunk.js.map