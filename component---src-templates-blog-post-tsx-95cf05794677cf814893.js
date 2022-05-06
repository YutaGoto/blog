/*! For license information please see component---src-templates-blog-post-tsx-95cf05794677cf814893.js.LICENSE.txt */
(self.webpackChunkyutagoto_blog=self.webpackChunkyutagoto_blog||[]).push([[7],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},6286:function(e,t,r){"use strict";r.d(t,{Tn:function(){return l},wp:function(){return f},ZP:function(){return m},Ar:function(){return p},Vp:function(){return o},PS:function(){return h}});var n=r(7294),a=r(1597),o=function(e){var t=e.tag,r=e.className,o=void 0===r?"":r,l=e.withLink,i=void 0===l||l;return n.createElement("span",{className:o+" text-gray-100 py-1 px-2 rounded text-sm bg-emerald-800"},i?n.createElement(a.Link,{to:"/tags/"+t},t):t)},l=function(e){var t,r,l,i,c,s,u=e.post,d=(null===(t=u.frontmatter)||void 0===t?void 0:t.title)||(null===(r=u.fields)||void 0===r?void 0:r.slug),f=null===(l=u.frontmatter)||void 0===l?void 0:l.tags;return n.createElement("div",{className:"px-4 py-10 mb-2 bg-gray-50 dark:bg-gray-800 shadow-lg sm:rounded-xl sm:p-5"},n.createElement(a.Link,{to:(null===(i=u.fields)||void 0===i?void 0:i.slug)||"",itemProp:"url",className:"has-text-black"},n.createElement("article",{className:"media",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("div",{className:""},n.createElement("div",{className:"text-2xl mb-2"},d),n.createElement("div",{className:"text-sm mb-2"},null===(c=u.frontmatter)||void 0===c?void 0:c.date),n.createElement("div",{className:"mb-2"},null==f?void 0:f.map((function(e){return n.createElement(o,{key:e,className:"mr-1",tag:e,withLink:!1})}))),n.createElement("div",{className:"text-base",dangerouslySetInnerHTML:{__html:(null===(s=u.frontmatter)||void 0===s?void 0:s.description)||u.excerpt||""},itemProp:"description"})))))},i=r(8945),c=r(4694),s=r(7190),u=r(8014);c.library.add(s.zhw,s.mdU,u.yOZ,u.EyR),c.dom.watch();var d=function(e){var t,a,o,l,c=e.data,s=null===(t=c.site)||void 0===t||null===(a=t.siteMetadata)||void 0===a?void 0:a.author,u=null===(o=c.site)||void 0===o||null===(l=o.siteMetadata)||void 0===l?void 0:l.social;return n.createElement("div",{className:"p-5 mb-2 bg-gray-50 dark:bg-gray-800 shadow-lg sm:rounded-xl "},n.createElement("div",{className:"flex space-x-4"},n.createElement("div",{className:"flex-none"},n.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:180,height:180,quality:95,alt:"Profile picture",__imageData:r(7538)})),n.createElement("div",{className:"flex-1 flex flex-col space-y-3"},n.createElement("div",null,n.createElement("p",{className:"text-3xl mb-2"},null==s?void 0:s.name),n.createElement("p",{className:"text-xl"},null==s?void 0:s.summary)),n.createElement("div",{className:"flex-1 flex space-x-6"},null==u?void 0:u.map((function(e){return n.createElement("a",{key:null==e?void 0:e.name,href:null==e?void 0:e.url,className:"object-bottom","area-label":null==e?void 0:e.name,target:"_blank",rel:"noreferrer noopener"},n.createElement("span",{className:"icon"},n.createElement("i",{className:"fab fa-"+(null==e?void 0:e.name)+" fa-lg","aria-hidden":"true"})))}))))))},f=function(){var e=(0,a.useStaticQuery)("2183174749");return n.createElement(d,{data:e})},m=function(e){var t=e.text,r=e.linkTo,o=e.iconName,l=e.rel,i=e.isLeft,c=void 0===i||i;return n.createElement(a.Link,{className:"box-border p-2 lg:mb-0 mb-1 border text-blue-400 dark:text-gray-100 border-blue-400 dark:border-blue-700 hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-700 dark:hover:text-gray-100",to:r,rel:l},c&&n.createElement("i",{className:"fas fa-"+o,"aria-hidden":"true"}),n.createElement("span",null,t),!c&&n.createElement("i",{className:"fas fa-"+o,"aria-hidden":"true"}))},p=function(e){var t=e.location,r=e.title,o=e.children,l="/blog/"===t.pathname;return n.createElement("div",{className:"bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"},n.createElement("nav",{className:"sticky top-0 h-10 bg-blue-300 dark:bg-blue-900 flex z-50",role:"navigation"},n.createElement("div",null,n.createElement(a.Link,{className:"text-gray-900 dark:text-gray-100 text-3xl pl-2",to:"/"},r))),n.createElement("main",{className:"container mt-1 mx-auto w-11/12"},n.createElement("div",{"data-is-root-path":l},o)),n.createElement("footer",{className:"h-10 bg-gray-300 dark:bg-gray-400 flex"},n.createElement("div",{className:"flex-1 text-gray-900 dark:text-gray-100"},"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))},v=function(e){var t=e.data.allMarkdownRemark.group;return n.createElement("div",{className:"p-5 overflow-auto lg:max-w-sm md:max-w-screen-2xl bg-gray-50 dark:bg-gray-800 shadow-lg sm:rounded-xl"},t.map((function(e){return n.createElement(o,{className:"mr-1 mb-1 float-left",key:e.fieldValue,tag:e.fieldValue})})))},h=function(){var e=(0,a.useStaticQuery)("1344224355");return n.createElement(v,{data:e})}},8320:function(e,t,r){"use strict";var n=r(7294),a=r(2055),o=r(1597);t.Z=function(e){var t,r,l,i=e.description,c=void 0===i?"":i,s=e.lang,u=void 0===s?"ja":s,d=e.meta,f=void 0===d?[]:d,m=e.title,p=void 0===m?"":m,v=(0,o.useStaticQuery)("2137539840").site,h=c||v.siteMetadata.description,b=null===(t=v.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(a.Helmet,{htmlAttributes:{lang:u},title:p,titleTemplate:b?"%s | "+b:"",meta:[{name:"description",content:h},{property:"og:title",content:p},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=v.siteMetadata)||void 0===r||null===(l=r.social)||void 0===l?void 0:l.name)||""},{name:"twitter:title",content:p},{name:"twitter:description",content:h}].concat(f)})}},7460:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n,a=r(7294),o=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return o(t,e),t}(Error);function i(e,t){if(!e)throw new l(t)}function c(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var s=r(5900),u=r.n(s),d=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)},m=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function l(e){try{c(n.next(e))}catch(t){o(t)}}function i(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}c((n=n.apply(e,t||[])).next())}))},p=function(e,t){var r,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(i){o=[6,i],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},h=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},b=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},g=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function y(e,t,r){var n=t.height,a=t.width,o=v(t,["height","width"]),l=f({height:n,width:a,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),i=window.open(e,"",Object.keys(l).map((function(e){return e+"="+l[e]})).join(", "));if(r)var c=window.setInterval((function(){try{(null===i||i.closed)&&(window.clearInterval(c),r(i))}catch(e){console.error(e)}}),1e3);return i}var w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,a=r.windowHeight,o=void 0===a?400:a,l=r.windowPosition,i=void 0===l?"windowCenter":l,c=r.windowWidth,s=void 0===c?550:c;y(e,f({height:o,width:s},"windowCenter"===i?b(s,o):g(s,o)),n)},t.handleClick=function(e){return m(t,void 0,void 0,(function(){var t,r,n,a,o,l,i,c,s,u;return p(this,(function(d){switch(d.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,a=t.networkLink,o=t.onClick,l=t.url,i=t.openShareDialogOnClick,c=t.opts,s=a(l,c),n?[2]:(e.preventDefault(),r?(u=r(),h(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return i&&this.openShareDialog(s),o&&o(e,s),[2]}}))}))},t}return d(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,o=e.disabledStyle,l=e.forwardedRef,i=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,d=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,v(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),m=u()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),p=f(f(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),n&&o);return a.createElement("button",f({},d,{"aria-label":d["aria-label"]||i,className:m,onClick:this.handleClick,ref:l,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(a.Component),x=w,k=function(){return k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},k.apply(this,arguments)};var E=function(e,t,r,n){function o(o,l){var i=r(o),c=k({},o);return Object.keys(i).forEach((function(e){delete c[e]})),a.createElement(x,k({},n,c,{forwardedRef:l,networkName:e,networkLink:t,opts:r(o)}))}return o.displayName="ShareButton-"+e,(0,a.forwardRef)(o)};var N=E("twitter",(function(e,t){var r=t.title,n=t.via,a=t.hashtags,o=void 0===a?[]:a,l=t.related,s=void 0===l?[]:l;return i(e,"twitter.url"),i(Array.isArray(o),"twitter.hashtags is not an array"),i(Array.isArray(s),"twitter.related is not an array"),"https://twitter.com/share"+c({url:e,text:r,via:n,hashtags:o.length>0?o.join(","):void 0,related:s.length>0?s.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),O=function(){return O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},O.apply(this,arguments)},S=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function j(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,o=t.iconFillColor,l=t.round,i=t.size,c=S(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return a.createElement("svg",O({viewBox:"0 0 64 64",width:i,height:i},c),l?a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):a.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),a.createElement("path",{d:e.path,fill:o}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var P=j({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var _=E("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return i(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+c({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),C=j({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"}),L=r(6286),A=r(8320),z=function(e){var t,r,n,o,l,i,c,s,u,d,f,m,p,v,h,b,g,y=e.data,w=e.location,x=y.markdownRemark,k=null===(t=y.site)||void 0===t?void 0:t.siteMetadata,E=(null===(r=y.site)||void 0===r||null===(n=r.siteMetadata)||void 0===n?void 0:n.title)||"Title",O=y.previous,S=y.next;return a.createElement(L.Ar,{location:w,title:E},a.createElement(A.Z,{title:(null==x||null===(o=x.frontmatter)||void 0===o?void 0:o.title)||"ブログポスト",description:(null==x||null===(l=x.frontmatter)||void 0===l?void 0:l.description)||(null==x?void 0:x.excerpt)}),a.createElement("div",{className:"xl:flex xl:space-x-2"},a.createElement("div",{className:"xl:flex-grow"},a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("h1",{itemProp:"headline",className:"text-4xl font-extrabold mb-2"},null==x||null===(i=x.frontmatter)||void 0===i?void 0:i.title),a.createElement("p",{className:"text-md mb-2"},null==x||null===(c=x.frontmatter)||void 0===c?void 0:c.date),a.createElement("div",null,null==x||null===(s=x.frontmatter)||void 0===s||null===(u=s.tags)||void 0===u?void 0:u.map((function(e){return a.createElement(L.Vp,{className:"mr-1",key:e,tag:e})}))),a.createElement("section",{dangerouslySetInnerHTML:{__html:(null==x?void 0:x.html)||""},itemProp:"articleBody",className:"mt-3"})),a.createElement("div",{className:"mt-5 mb-5"},a.createElement(N,{url:(null==k?void 0:k.siteUrl)+"/blog"+(null==x||null===(d=x.fields)||void 0===d?void 0:d.slug),title:(null==x||null===(f=x.frontmatter)||void 0===f?void 0:f.title)+" - .ごっちの日記",className:"m-2"},a.createElement(P,{size:"32",round:!0})),a.createElement(_,{url:(null==k?void 0:k.siteUrl)+"/blog"+(null==x||null===(m=x.fields)||void 0===m?void 0:m.slug),title:(null==x||null===(p=x.frontmatter)||void 0===p?void 0:p.title)+" - .ごっちの日記",className:"m-2"},a.createElement(C,{size:"32",round:!0})))),a.createElement("div",{className:"lg:flex-none"},a.createElement(L.wp,null))),a.createElement("div",{className:"flex lg:justify-between lg:flex-row flex-col mb-4 mt-4",role:"navigation"},O&&a.createElement(L.ZP,{text:(null===(v=O.frontmatter)||void 0===v?void 0:v.title)||"",iconName:"angle-left",isLeft:!0,linkTo:(null===(h=O.fields)||void 0===h?void 0:h.slug)||"",rel:"prev"}),S&&a.createElement(L.ZP,{text:(null===(b=S.frontmatter)||void 0===b?void 0:b.title)||"",iconName:"angle-right",isLeft:!1,linkTo:(null===(g=S.fields)||void 0===g?void 0:g.slug)||"",rel:"next"})))}},7538:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/blog/static/0246b40d98f0f937ce50b36337d45538/08d4a/profile-pic.png","srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/08d4a/profile-pic.png 180w","sizes":"180px"},"sources":[{"srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/f7e9e/profile-pic.avif 180w","type":"image/avif","sizes":"180px"},{"srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/4951d/profile-pic.webp 180w","type":"image/webp","sizes":"180px"}]},"width":180,"height":180}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-95cf05794677cf814893.js.map