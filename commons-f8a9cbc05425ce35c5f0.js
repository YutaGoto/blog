(self.webpackChunkyutagoto_blog=self.webpackChunkyutagoto_blog||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!o(e[u],i[u]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],i.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!o(e[s[u]],i[s[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},7977:function(e,t,r){"use strict";r.d(t,{Tn:function(){return o},wp:function(){return f},ZP:function(){return p},Ar:function(){return d}});var n=r(7294),a=r(5444),o=function(e){var t=e.post,r=t.frontmatter.title||t.fields.slug;return n.createElement("div",{className:"px-4 py-10 mb-2 bg-gray-50 dark:bg-gray-800 shadow-lg sm:rounded-xl sm:p-5"},n.createElement(a.Link,{to:t.fields.slug,itemProp:"url",className:"has-text-black"},n.createElement("article",{className:"media",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("div",{className:""},n.createElement("div",{className:"text-2xl mb-2"},r),n.createElement("div",{className:"text-sm mb-2"},t.frontmatter.date),n.createElement("div",{className:"text-base",dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"})))))},i=r(6125),c=r(4694),u=r(7190),s=r(8014);c.library.add(u.zhw,u.mdU,s.yOZ,s.EyR),c.dom.watch();var l=function(e){var t,a,o=e.data,c=null===(t=o.site.siteMetadata)||void 0===t?void 0:t.author,u=null===(a=o.site.siteMetadata)||void 0===a?void 0:a.social;return n.createElement("div",{className:"px-4 py-10 bg-gray-50 dark:bg-gray-800 shadow-lg sm:rounded-xl sm:p-5"},n.createElement("div",{className:"flex space-x-4"},n.createElement("div",{className:"flex-none"},n.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.png",width:180,height:180,quality:95,alt:"Profile picture",__imageData:r(7538)})),n.createElement("div",{className:"flex-1 flex flex-col space-y-3"},n.createElement("div",null,n.createElement("p",{className:"text-3xl mb-2"},c.name),n.createElement("p",{className:"text-xl"},c.summary)),n.createElement("div",{className:"flex-1 flex space-x-6"},u.map((function(e){return n.createElement("a",{key:e.name,href:e.url,className:"object-bottom","area-label":e.name,target:"_blank",rel:"noreferrer noopener"},n.createElement("span",{className:"icon"},n.createElement("i",{className:"fab fa-"+e.name+" fa-lg","aria-hidden":"true"})))}))))))},f=function(){return n.createElement(a.StaticQuery,{query:"2201837728",render:function(e){return n.createElement(l,{data:e})}})},p=function(e){var t=e.text,r=e.linkTo,o=e.iconName,i=e.isLeft,c=void 0===i||i;return n.createElement(a.Link,{className:"box-border p-2 lg:mb-0 mb-1 border text-blue-400 dark:text-gray-100 border-blue-400 dark:border-blue-700 hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-700 dark:hover:text-gray-100",to:r},c&&n.createElement("i",{className:"fas fa-"+o,"aria-hidden":"true"}),n.createElement("span",null,t),!c&&n.createElement("i",{className:"fas fa-"+o,"aria-hidden":"true"}))},d=function(e){var t=e.location,r=e.title,o=e.children,i="/blog/"===t.pathname;return n.createElement("div",{className:"bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"},n.createElement("nav",{className:"sticky top-0 h-10 bg-blue-300 dark:bg-blue-900 flex z-50",role:"navigation"},n.createElement("div",null,n.createElement(a.Link,{className:"text-gray-900 dark:text-gray-100 text-3xl pl-2",to:"/"},r))),n.createElement("main",{className:"container mt-1 mx-auto w-11/12"},n.createElement("div",{"data-is-root-path":i},o)),n.createElement("footer",{className:"h-10 bg-gray-300 dark:bg-gray-400 flex"},n.createElement("div",{className:"flex-1 text-gray-900 dark:text-gray-100"},"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},3751:function(e,t,r){"use strict";r.d(t,{Z:function(){return ge}});var n,a,o,i,c=r(7294),u=r(5697),s=r.n(u),l=r(4839),f=r.n(l),p=r(2993),d=r.n(p),m=r(6494),y=r.n(m),b="bodyAttributes",h="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",E="href",A="http-equiv",x="innerHTML",O="itemprop",C="name",S="property",k="rel",N="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",B=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],q="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,v.TITLE),r=J(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,L);return t||n||void 0},Z=function(e){return J(e,_)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||r===k&&"canonical"===e[r].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==x&&c!==w&&c!==O||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=y()({},n[c],a[c]);n[c]=u}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(v.BODY,n),ue(v.HTML,a),ce(f,p);var d={baseTag:se(v.BASE,r),linkTags:se(v.LINK,o),metaTags:se(v.META,i),noscriptTags:se(v.NOSCRIPT,c),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,l)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,m,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(v.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(q),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(q):r.getAttribute(q)!==i.join(",")&&r.setAttribute(q,i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===x)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(q,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[q]=!0,a=fe(r,n),[c.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=le(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case h:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[q]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===x||r===w){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===x||e===w)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(v.BASE,t,n),bodyAttributes:pe(b,r,n),htmlAttributes:pe(h,a,n),link:pe(v.LINK,o,n),meta:pe(v.META,i,n),noscript:pe(v.NOSCRIPT,c,n),script:pe(v.SCRIPT,u,n),style:pe(v.STYLE,s,n),title:pe(v.TITLE,{title:f,titleAttributes:p},n)}},me=f()((function(e){return{baseTag:$([E,j],e),bodyAttributes:Q(b,e),defer:J(e,I),encode:J(e,M),htmlAttributes:Q(h,e),linkTags:G(v.LINK,[k,E],e),metaTags:G(v.META,[C,T,A,S,O],e),noscriptTags:G(v.NOSCRIPT,[x],e),onChangeClientState:Z(e),scriptTags:G(v.SCRIPT,[N,x],e),styleTags:G(v.STYLE,[w],e),title:W(e),titleAttributes:Q(g,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),ye=(a=me,i=o=function(e){function t(){return F(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[z({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return z({},a,((t={})[n.type]=i,t.titleAttributes=z({},o),t));case v.BODY:return z({},a,{bodyAttributes:z({},o)});case v.HTML:return z({},a,{htmlAttributes:z({},o)})}return z({},a,((r={})[n.type]=z({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=z({},t);return Object.keys(e).forEach((function(t){var n;r=z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(U(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=z({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind;var be=r(5444),he=function(e){var t,r,n,a=e.description,o=e.lang,i=e.meta,u=e.title,s=(0,be.useStaticQuery)("2137539840").site,l=a||s.siteMetadata.description,f=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(ye,{htmlAttributes:{lang:o},title:u,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:l},{property:"og:title",content:u},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=s.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:l}].concat(i)})};he.defaultProps={lang:"ja",meta:[],description:""};var ge=he},7538:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/blog/static/0246b40d98f0f937ce50b36337d45538/08d4a/profile-pic.png","srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/08d4a/profile-pic.png 180w","sizes":"180px"},"sources":[{"srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/f7e9e/profile-pic.avif 180w","type":"image/avif","sizes":"180px"},{"srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/4951d/profile-pic.webp 180w","type":"image/webp","sizes":"180px"}]},"width":180,"height":180}')}}]);
//# sourceMappingURL=commons-f8a9cbc05425ce35c5f0.js.map