(this["webpackJsonpamazon-full-clone"]=this["webpackJsonpamazon-full-clone"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(24),i=c.n(s),r=(c(45),c(36)),o=c(12),l=(c(46),c(20)),j=(c(47),c(37)),d=c.n(j),u=c(38),h=c.n(u),m=c(2),b=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(m.jsx)(b.Provider,{value:Object(n.useReducer)(t,c),children:a})},g=function(){return Object(n.useContext)(b)},_=c(30),p=(_.a.initializeApp({apiKey:"AIzaSyB0ed-zn4io241-yE2AgzcAhftRzx719m0",authDomain:"full-clone-cd754.firebaseapp.com",projectId:"full-clone-cd754",storageBucket:"full-clone-cd754.appspot.com",messagingSenderId:"503390215767",appId:"1:503390215767:web:81c4923018480f1b5c4d12"}).firestore(),_.a.auth()),x=function(){var e=g(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;t[1];return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(l.b,{to:"/",children:Object(m.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(m.jsxs)("div",{className:"header__search",children:[Object(m.jsx)("input",{type:"text",className:"header__searchInput"}),Object(m.jsx)(d.a,{className:"header__searchIcon"})]}),Object(m.jsxs)("div",{className:"header__nav",children:[Object(m.jsx)(l.b,{to:!a&&"/login",children:Object(m.jsxs)("div",{onClick:function(){a&&p.signOut()},className:"header__option",children:[Object(m.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",a?a.email:"Guest"]}),Object(m.jsx)("span",{className:"header__optionLineTwo",children:a?"Sign Out":"Sign In"})]})}),Object(m.jsxs)("div",{className:"header__option",children:[Object(m.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(m.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(m.jsxs)("div",{className:"header__option",children:[Object(m.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(m.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(m.jsx)(l.b,{to:"/checkout",children:Object(m.jsxs)("div",{className:"header__optionBasket",children:[Object(m.jsx)(h.a,{}),Object(m.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})},f=(c(61),c(62),function(e){var t=e.id,c=e.title,n=e.image,a=e.price,s=e.rating,i=g(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(m.jsxs)("div",{className:"product",children:[Object(m.jsxs)("div",{className:"product__info",children:[Object(m.jsx)("p",{children:c}),Object(m.jsxs)("p",{className:"product__price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:a})]}),Object(m.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(m.jsx)("img",{src:n,alt:""}),Object(m.jsx)("button",{className:"product__button",onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:a,rating:s}})},children:"Add to Basket"})]})}),v=function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsxs)("div",{className:"home__container",children:[Object(m.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(m.jsxs)("div",{className:"home__row",children:[Object(m.jsx)(f,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5}),Object(m.jsx)(f,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(m.jsxs)("div",{className:"home__row",children:[Object(m.jsx)(f,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(m.jsx)(f,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(m.jsx)(f,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(m.jsx)("div",{className:"home__row",children:Object(m.jsx)(f,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},N=c(9),k=(c(63),c(64),c(39)),S=c.n(k),C=c(31),A=c(19),E=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},w=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id}));console.log(c);var n=Object(C.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(A.a)(Object(A.a)({},e),{},{basket:n});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:t.user});default:return e}},y=function(){var e=g(),t=Object(o.a)(e,2),c=t[0].basket;t[1];return Object(m.jsxs)("div",{className:"subtotal",children:[Object(m.jsx)(S.a,{renderText:function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(m.jsx)("strong",{children:e})]}),Object(m.jsxs)("small",{className:"subtotal__gift",children:[Object(m.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:E(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(m.jsx)("button",{children:"Proceed to Checkout"})]})},B=(c(66),function(e){var t=e.id,c=e.image,n=e.title,a=e.price,s=e.rating,i=g(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(m.jsxs)("div",{className:"checkoutProduct",children:[Object(m.jsx)("img",{className:"checkoutProduct__image",src:c,alt:""}),Object(m.jsxs)("div",{className:"checkoutProduct__info",children:[Object(m.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(m.jsxs)("p",{className:"checkoutProduct__price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:a})]}),Object(m.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\ud83c\udf1f"})}))}),Object(m.jsx)("button",{className:"checkoutProduct__button",onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})}),L=function(){var e=g(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;t[1];return Object(m.jsxs)("div",{className:"checkout",children:[Object(m.jsxs)("div",{className:"checkout__left",children:[Object(m.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:null===a||void 0===a?void 0:a.email}),Object(m.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),n.map((function(e){return Object(m.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(m.jsx)("div",{className:"checkout__right",children:Object(m.jsx)(y,{})})]})},P=(c(67),function(){var e=Object(N.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),j=r[0],d=r[1];return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)(l.b,{to:"/",children:Object(m.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"login logo"})}),Object(m.jsxs)("div",{className:"login__container",children:[Object(m.jsx)("h1",{children:"Sign in"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("h5",{children:"E-mail"}),Object(m.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(m.jsx)("h5",{children:"Password"}),Object(m.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(m.jsx)("button",{className:"login__signInButton",onClick:function(t){t.preventDefault(),p.signInWithEmailAndPassword(a,j).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(m.jsx)("p",{children:"By signing-in you agree to AMAZON FULL CLONE's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(m.jsx)("button",{className:"login__registerButton",onClick:function(t){t.preventDefault(),p.createUserWithEmailAndPassword(a,j).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create your amazon account"})]})]})});var T=function(){var e=g(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){console.log("THE USER IS >>>",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(m.jsx)(l.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(N.c,{children:[Object(m.jsx)(N.a,{path:"/login",children:Object(m.jsx)(P,{})}),Object(m.jsxs)(N.a,{path:"/checkout",children:[Object(m.jsx)(x,{}),Object(m.jsx)(L,{})]}),Object(m.jsxs)(N.a,{path:"/",children:[Object(m.jsx)(x,{}),Object(m.jsx)(v,{})]})]})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,81)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{initialState:{basket:[],user:null},reducer:w,children:Object(m.jsx)(T,{})})}),document.getElementById("root")),z(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.e81bc69e.chunk.js.map