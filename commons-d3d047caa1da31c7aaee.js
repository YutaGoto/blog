(self.webpackChunkyutagoto_blog=self.webpackChunkyutagoto_blog||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!o(e[u],i[u]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!o(u.value[1],i.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!o(e[l[u]],i[l[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},2166:function(e,t,r){"use strict";r.d(t,{Tn:function(){return o},wp:function(){return f},ZP:function(){return d},Ar:function(){return p}});var n=r(7294),a=r(1597),o=function(e){var t,r,o,i,c,u=e.post,l=(null===(t=u.frontmatter)||void 0===t?void 0:t.title)||(null===(r=u.fields)||void 0===r?void 0:r.slug);return n.createElement("div",{className:"px-4 py-10 mb-2 bg-gray-50 dark:bg-gray-800 shadow-lg sm:rounded-xl sm:p-5"},n.createElement(a.Link,{to:(null===(o=u.fields)||void 0===o?void 0:o.slug)||"",itemProp:"url",className:"has-text-black"},n.createElement("article",{className:"media",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("div",{className:""},n.createElement("div",{className:"text-2xl mb-2"},l),n.createElement("div",{className:"text-sm mb-2"},null===(i=u.frontmatter)||void 0===i?void 0:i.date),n.createElement("div",{className:"text-base",dangerouslySetInnerHTML:{__html:(null===(c=u.frontmatter)||void 0===c?void 0:c.description)||u.excerpt||""},itemProp:"description"})))))},i=r(396),c=r(4694),u=r(7190),l=r(8014);c.library.add(u.zhw,u.mdU,l.yOZ,l.EyR),c.dom.watch();var s=function(e){var t,a,o,c,u=e.data,l=null===(t=u.site)||void 0===t||null===(a=t.siteMetadata)||void 0===a?void 0:a.author,s=null===(o=u.site)||void 0===o||null===(c=o.siteMetadata)||void 0===c?void 0:c.social;return n.createElement("div",{className:"px-4 py-10 bg-gray-50 dark:bg-gray-800 shadow-lg sm:rounded-xl sm:p-5"},n.createElement("div",{className:"flex space-x-4"},n.createElement("div",{className:"flex-none"},n.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:180,height:180,quality:95,alt:"Profile picture",__imageData:r(7538)})),n.createElement("div",{className:"flex-1 flex flex-col space-y-3"},n.createElement("div",null,n.createElement("p",{className:"text-3xl mb-2"},null==l?void 0:l.name),n.createElement("p",{className:"text-xl"},null==l?void 0:l.summary)),n.createElement("div",{className:"flex-1 flex space-x-6"},null==s?void 0:s.map((function(e){return n.createElement("a",{key:null==e?void 0:e.name,href:null==e?void 0:e.url,className:"object-bottom","area-label":null==e?void 0:e.name,target:"_blank",rel:"noreferrer noopener"},n.createElement("span",{className:"icon"},n.createElement("i",{className:"fab fa-"+(null==e?void 0:e.name)+" fa-lg","aria-hidden":"true"})))}))))))},f=function(){var e=(0,a.useStaticQuery)("2183174749");return n.createElement(s,{data:e})},d=function(e){var t=e.text,r=e.linkTo,o=e.iconName,i=e.rel,c=e.isLeft,u=void 0===c||c;return n.createElement(a.Link,{className:"box-border p-2 lg:mb-0 mb-1 border text-blue-400 dark:text-gray-100 border-blue-400 dark:border-blue-700 hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-700 dark:hover:text-gray-100",to:r,rel:i},u&&n.createElement("i",{className:"fas fa-"+o,"aria-hidden":"true"}),n.createElement("span",null,t),!u&&n.createElement("i",{className:"fas fa-"+o,"aria-hidden":"true"}))},p=function(e){var t=e.location,r=e.title,o=e.children,i="/blog/"===t.pathname;return n.createElement("div",{className:"bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"},n.createElement("nav",{className:"sticky top-0 h-10 bg-blue-300 dark:bg-blue-900 flex z-50",role:"navigation"},n.createElement("div",null,n.createElement(a.Link,{className:"text-gray-900 dark:text-gray-100 text-3xl pl-2",to:"/"},r))),n.createElement("main",{className:"container mt-1 mx-auto w-11/12"},n.createElement("div",{"data-is-root-path":i},o)),n.createElement("footer",{className:"h-10 bg-gray-300 dark:bg-gray-400 flex"},n.createElement("div",{className:"flex-1 text-gray-900 dark:text-gray-100"},"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},8972:function(e,t,r){"use strict";r.d(t,{Z:function(){return he}});var n,a,o,i,c=r(7294),u=r(5697),l=r.n(u),s=r(4839),f=r.n(s),d=r(2993),p=r.n(d),m=r(6494),y=r.n(m),b="bodyAttributes",h="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",E="href",A="http-equiv",x="innerHTML",O="itemprop",C="name",S="property",k="rel",N="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",D=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),B=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,g.TITLE),r=J(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,L);return t||n||void 0},Z=function(e){return J(e,_)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||r===k&&"canonical"===e[r].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==x&&c!==w&&c!==O||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=y()({},n[c],a[c]);n[c]=u}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ue(g.BODY,n),ue(g.HTML,a),ce(f,d);var p={baseTag:le(g.BASE,r),linkTags:le(g.LINK,o),metaTags:le(g.META,i),noscriptTags:le(g.NOSCRIPT,c),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,s)},m={},y={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=p[e].oldTags)})),t&&t(),u(e,m,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(g.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(H),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(H):r.getAttribute(H)!==i.join(",")&&r.setAttribute(H,i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===x)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(H,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[H]=!0,a=fe(r,n),[c.createElement(g.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case h:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[H]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===x||r===w){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===x||e===w)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(g.BASE,t,n),bodyAttributes:de(b,r,n),htmlAttributes:de(h,a,n),link:de(g.LINK,o,n),meta:de(g.META,i,n),noscript:de(g.NOSCRIPT,c,n),script:de(g.SCRIPT,u,n),style:de(g.STYLE,l,n),title:de(g.TITLE,{title:f,titleAttributes:d},n)}},me=f()((function(e){return{baseTag:$([E,j],e),bodyAttributes:Q(b,e),defer:J(e,I),encode:J(e,M),htmlAttributes:Q(h,e),linkTags:G(g.LINK,[k,E],e),metaTags:G(g.META,[C,T,A,S,O],e),noscriptTags:G(g.NOSCRIPT,[x],e),onChangeClientState:Z(e),scriptTags:G(g.SCRIPT,[N,x],e),styleTags:G(g.STYLE,[w],e),title:W(e),titleAttributes:Q(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),ye=(a=me,i=o=function(e){function t(){return Y(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case g.TITLE:return F({},a,((t={})[n.type]=i,t.titleAttributes=F({},o),t));case g.BODY:return F({},a,{bodyAttributes:F({},o)});case g.HTML:return F({},a,{htmlAttributes:F({},o)})}return F({},a,((r={})[n.type]=F({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(U(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},z(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind;var be=r(1597),he=function(e){var t,r,n,a=e.description,o=void 0===a?"":a,i=e.lang,u=void 0===i?"ja":i,l=e.meta,s=void 0===l?[]:l,f=e.title,d=void 0===f?"":f,p=(0,be.useStaticQuery)("2137539840").site,m=o||p.siteMetadata.description,y=null===(t=p.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(ye,{htmlAttributes:{lang:u},title:d,titleTemplate:y?"%s | "+y:"",meta:[{name:"description",content:m},{property:"og:title",content:d},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=p.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.name)||""},{name:"twitter:title",content:d},{name:"twitter:description",content:m}].concat(s)})}},7538:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/blog/static/0246b40d98f0f937ce50b36337d45538/08d4a/profile-pic.png","srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/08d4a/profile-pic.png 180w","sizes":"180px"},"sources":[{"srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/f7e9e/profile-pic.avif 180w","type":"image/avif","sizes":"180px"},{"srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/4951d/profile-pic.webp 180w","type":"image/webp","sizes":"180px"}]},"width":180,"height":180}')}}]);
//# sourceMappingURL=commons-d3d047caa1da31c7aaee.js.map