(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),l=a("vhPU"),o=/"/g,c=function(e,t,a,n){var r=String(l(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},i38J:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return D}));a("f3/d");var n=a("q1tI"),r=a.n(n),l=(a("tUrg"),{default:{wrapper:"w-full relative",imgWrapper:"w-full",img:"mx-auto w-full",contentWrapper:"absolute mdl:top-25% left-0 bottom-0 mdl:w-1/2 w-full mdl:pl-50 mdl:pr-0 px-30",title:"text-18 mdl:text-18 text-white mdl:text-black mdl:font-SpartanMedium font-SpartanRegular mb-20 mdl:mb-30",shortDescription:"text-18 mdl:text-26 text-white mdl:text-black mdl:font-SpartanBold font-SpartanMedium mb-30 mdl:mb-40 leading-relaxed",link:""}}),o=(a("pIFo"),a("9VmF"),function(e,t){void 0===e&&(e=""),void 0===t&&(t="f_auto,dpr_auto");var a=e.startsWith("https:")?"https:":"",n=e.replace(a+"//images.ctfassets.net/162102b9ma2k","");return n="https://res.cloudinary.com/dee4ccasq/"+t+"/portfolio"+n}),c=function(e,t){void 0===t&&(t="f_auto,dpr_auto");var a=[];return[992,1200,1400,1600].forEach((function(n){a.push(o(e,"w_"+n+","+t)+" "+n+"w")})),a.join()},s=function(e){var t=e.srcSet,a=e.src,n=e.alt,l=e.wrapperClass,s=e.className;return r.a.createElement("picture",{className:l},r.a.createElement("source",{media:"(min-width: 992px)",srcSet:c(t)}),r.a.createElement("img",{className:s,src:o(a),alt:n}))};s.defaultProps={className:"",wrapperClass:""};var i=s,m=function(e){var t=e.children,a=e.component,n=e.className,l=a;return l||(l="div"),r.a.createElement(l,{className:n},t)};m.defaultProps={className:""};var u=m,p=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("Wbzz"));var d=function(e){var t=e.component,a=e.className,n=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["component","className"]),l=t;return l||(l="button"),"Link"===l&&(l=p.Link),r.a.createElement(l,Object.assign({className:a},n))};d.defaultProps={component:"button",className:""};var f=d,v=function(e){var t=e.title,a=e.shortDescription,n=e.desktopImage,o=e.mobileImage,c=e.variant,s=e.link,m=l.default;return l[c]&&(m=l[c]),r.a.createElement("div",{className:m.wrapper},r.a.createElement(i,{className:m.img,wrapperClass:m.imgWrapper,srcSet:n.file&&n.file.url,src:o.file&&o.file.url,alt:o.title}),r.a.createElement("div",{className:m.contentWrapper},t&&r.a.createElement(u,{className:m.title},t.body),a&&r.a.createElement(u,{className:m.shortDescription},a.body),s&&r.a.createElement(f,{className:m.link,component:"Link"})))},h=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.join(" ")},g=function(e){var t=e.className,a=e.style;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.0",style:a,className:t,viewBox:"0 0 1000.000000 750.000000",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",{transform:"translate(0.000000,750.000000) scale(0.100000,-0.100000)"},r.a.createElement("path",{d:"M4605 4840 l-1150 -1150 1017 -1017 1018 -1018 152 153 153 152 -865 865 -865 865 935 935 935 935 1730 0 1730 0 215 215 215 215 -2035 0 -2035 0 -1150 -1150z"}),r.a.createElement("path",{d:"M270 5755 l205 -205 1910 0 1910 0 -350 -350 -350 -350 -1210 0 -1210 0 1872 -1872 1873 -1873 152 153 153 152 -1515 1515 -1515 1515 790 0 790 0 760 760 760 760 -2615 0 -2615 0 205 -205z"})))};g.defaultProps={className:"fill-current text-black w-28 h-auto",style:{}};var w=g,x=function(e){var t=e.className,a=e.style;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,style:a,viewBox:"0 0 18 18"},r.a.createElement("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"}))};x.defaultProps={className:"fill-current text-black w-24 h-24",style:{}};var b=x,N="fixed z-5 top-0 left-0 right-0 w-full flex px-10 mdl:px-15",y="hamburger block px-5 py-8 mdl:px-10 mdl:py-12",E="hamburger-icon w-48 fill-current",k="nav-wrapper nav-close nav-transition bg-black fixed z-10 inset-0",C="nav-wrapper nav-open nav-transition bg-black fixed z-10 inset-0",S="w-full px-10 mdl:px-15",O="hamburger-close block px-5 py-8 mdl:px-10 mdl:py-12",P="w-48 fill-current text-white",_="w-full block mdl:mt-30",L="nav-item flex mdl:w-1/3 w-full mdl:px-30 px-20 py-20 mdl:py-30",M="nav-item-text mdl:mr-0 mx-auto text-white mdl:text-left text-center font-SpartanMedium text-20 mdl:text-36";var z=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).componentDidMount=function(){window.addEventListener("scroll",a.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",a.handleScroll)},a.handleScroll=function(){window.pageYOffset>100?a.setState({triggerColorChange:!0}):a.setState({triggerColorChange:!1})},a.handleMenuClick=function(){a.state.menuOpen?(document.body.classList.remove("overflow-hidden"),a.setState({menuOpen:!1}),setTimeout((function(){a.state.menuOpen||a.setState({hideNav:!0})}),1e3)):(document.body.classList.add("overflow-hidden"),a.setState({menuOpen:!0,hideNav:!1}))},a.state={menuOpen:!1,hideNav:!0,triggerColorChange:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.headerData,t=this.state,a=t.menuOpen,n=t.hideNav,l=t.triggerColorChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:h(N,a?"menu-open":"menu-close",l?"black-gradient":"white-gradient")},r.a.createElement(f,{type:"button",title:"hamburger icon",component:"button",className:y,onClick:this.handleMenuClick},r.a.createElement(w,{className:h(E,l?"text-white":"text-black")}))),r.a.createElement("div",{className:h(a?C:k,n?"hidden":"")},r.a.createElement("div",{className:S},r.a.createElement(f,{type:"button",title:"close icon",component:"button",className:O,onClick:this.handleMenuClick},r.a.createElement(b,{className:P}))),r.a.createElement("div",{className:_},e.menuItems&&e.menuItems.map((function(e){return r.a.createElement(f,{key:e.title,className:L,component:"Link",to:e.link&&e.link.url,activeClassName:"menu-item-active"},r.a.createElement("span",{className:M},e.title))})))))},n}(n.Component);var W=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).getPageContents=function(e){switch(e.componentType){case"ContentfulBanner":return r.a.createElement(v,e);default:return null}},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props,a=t.data,n=t.pageContext;return console.log("162102b9ma2k"),r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{headerData:n.headerData}),r.a.createElement("h1",{className:"h-0 overflow-hidden"},a.contentfulPage.title),a.contentfulPage.pageContent.map((function(t){return r.a.createElement(r.a.Fragment,{key:t.name},e.getPageContents(t))})))},n}(n.PureComponent),D="4164073231";t.default=W},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-templates-home-js-b57666ea574035f8854d.js.map