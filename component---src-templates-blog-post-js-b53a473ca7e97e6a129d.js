/*! For license information please see component---src-templates-blog-post-js-b53a473ca7e97e6a129d.js.LICENSE.txt */
(self.webpackChunkyutagoto_blog=self.webpackChunkyutagoto_blog||[]).push([[989],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},9535:function(e,t,r){"use strict";r.d(t,{w:function(){return l}});var n=r(7294),o=r(5444),a=r(6125),i=(r(6491),function(e){var t,o,i=e.data,l=null===(t=i.site.siteMetadata)||void 0===t?void 0:t.author,c=null===(o=i.site.siteMetadata)||void 0===o?void 0:o.social;return n.createElement("div",{className:"px-4 py-10 bg-gray-50 dark:bg-gray-800 shadow-lg sm:rounded-xl sm:p-5"},n.createElement("div",{className:"flex space-x-4"},n.createElement("div",{className:"flex-none"},n.createElement(a.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.png",width:180,height:180,quality:95,alt:"Profile picture",__imageData:r(7538)})),n.createElement("div",{className:"flex-1 flex flex-col space-y-3"},n.createElement("div",null,n.createElement("p",{className:"text-3xl mb-2"},l.name),n.createElement("p",{className:"text-xl"},l.summary)),n.createElement("div",{className:"flex-1 flex space-x-6"},c.map((function(e){return n.createElement("a",{key:e.name,href:e.url,className:"object-bottom","area-label":e.name,target:"_blank",rel:"noreferrer noopener"},n.createElement("span",{className:"icon"},n.createElement("i",{className:"fab fa-"+e.name+" fa-lg","aria-hidden":"true"})))}))))))}),l=function(){return n.createElement(o.StaticQuery,{query:"2201837728",render:function(e){return n.createElement(i,{data:e})}})}},6491:function(e,t,r){"use strict";var n=r(4694),o=r(7190),a=r(8014);n.library.add(o.zhw,o.mdU,a.yOZ,a.EyR),n.dom.watch()},531:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return B}});var n,o=r(7294),a=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return a(t,e),t}(Error);function l(e,t){if(!e)throw new i(t)}function c(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var s=r(5900),u=r.n(s),f=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),d=function(){return d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)},p=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(t){a(t)}}function l(e){try{c(n.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}c((n=n.apply(e,t||[])).next())}))},h=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},w=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},b=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},y=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function g(e,t,r){var n=t.height,o=t.width,a=m(t,["height","width"]),i=d({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),l=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(r)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),r(l))}catch(e){console.error(e)}}),1e3);return l}var v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,o=r.windowHeight,a=void 0===o?400:o,i=r.windowPosition,l=void 0===i?"windowCenter":i,c=r.windowWidth,s=void 0===c?550:c;g(e,d({height:a,width:s},"windowCenter"===l?b(s,a):y(s,a)),n)},t.handleClick=function(e){return p(t,void 0,void 0,(function(){var t,r,n,o,a,i,l,c,s,u;return h(this,(function(f){switch(f.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,l=t.openShareDialogOnClick,c=t.opts,s=o(i,c),n?[2]:(e.preventDefault(),r?(u=r(),w(u)?[4,u]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return l&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return f(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,a=e.disabledStyle,i=e.forwardedRef,l=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,f=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,m(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=u()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),h=d(d(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),n&&a);return o.createElement("button",d({},f,{"aria-label":f["aria-label"]||l,className:p,onClick:this.handleClick,ref:i,style:h}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),x=v,k=function(){return k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)};var O=function(e,t,r,n){function a(a,i){var l=r(a),c=k({},a);return Object.keys(l).forEach((function(e){delete c[e]})),o.createElement(x,k({},n,c,{forwardedRef:i,networkName:e,networkLink:t,opts:r(a)}))}return a.displayName="ShareButton-"+e,(0,o.forwardRef)(a)};var E=O("twitter",(function(e,t){var r=t.title,n=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,s=void 0===i?[]:i;return l(e,"twitter.url"),l(Array.isArray(a),"twitter.hashtags is not an array"),l(Array.isArray(s),"twitter.related is not an array"),"https://twitter.com/share"+c({url:e,text:r,via:n,hashtags:a.length>0?a.join(","):void 0,related:s.length>0?s.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),S=function(){return S=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},S.apply(this,arguments)},N=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function j(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,a=t.iconFillColor,i=t.round,l=t.size,c=N(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.createElement("svg",S({viewBox:"0 0 64 64",width:l,height:l},c),i?o.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):o.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),o.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var C=j({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var _=O("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return l(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+c({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),P=j({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"}),z=r(9535),A=r(5444),L=(r(6491),function(e){var t=e.text,r=e.linkTo,n=e.iconName,a=e.isLeft,i=void 0===a||a;return o.createElement(A.Link,{className:"box-border p-2 lg:mb-0 mb-1 border text-blue-400 dark:text-gray-100 border-blue-400 dark:border-blue-700 hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-700 dark:hover:text-gray-100",to:r},i&&o.createElement("i",{className:"fas fa-"+n,"aria-hidden":"true"}),o.createElement("span",null,t),!i&&o.createElement("i",{className:"fas fa-"+n,"aria-hidden":"true"}))}),R=r(7198),W=r(3751),B=function(e){var t,r=e.data,n=e.location,a=r.markdownRemark,i=r.site.siteMetadata,l=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=r.previous,s=r.next;return o.createElement(R.Z,{location:n,title:l},o.createElement(W.Z,{title:a.frontmatter.title,description:a.frontmatter.description||a.excerpt}),o.createElement("div",{className:"lg:flex lg:space-x-2"},o.createElement("div",{className:"lg:flex-grow max-w-screen-xl"},o.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("h1",{itemProp:"headline",className:"text-3xl mb-2"},a.frontmatter.title),o.createElement("p",{className:"text-sm"},a.frontmatter.date),o.createElement("section",{dangerouslySetInnerHTML:{__html:a.html},itemProp:"articleBody",className:"mt-3"})),o.createElement("div",{className:"mt-5 mb-5"},o.createElement(E,{url:i.siteUrl+"/blog"+a.fields.slug,title:a.frontmatter.title+" - .ごっちの日記",className:"m-2"},o.createElement(C,{size:"32",round:!0})),o.createElement(_,{url:i.siteUrl+"/blog"+a.fields.slug,title:a.frontmatter.title+" - .ごっちの日記",className:"m-2"},o.createElement(P,{size:"32",round:!0})))),o.createElement("div",{className:"lg:flex-none"},o.createElement(z.w,null))),o.createElement("div",{className:"flex lg:justify-between lg:flex-row flex-col mb-4 mt-4",role:"navigation"},c&&o.createElement(L,{tag:"Link",text:c.frontmatter.title,iconName:"angle-left",isLeft:!0,linkTo:c.fields.slug,rel:"prev"}),s&&o.createElement(L,{tag:"Link",text:s.frontmatter.title,iconName:"angle-right",isLeft:!1,linkTo:s.fields.slug,rel:"next"})))}},7538:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/blog/static/0246b40d98f0f937ce50b36337d45538/08d4a/profile-pic.png","srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/08d4a/profile-pic.png 180w","sizes":"180px"},"sources":[{"srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/f7e9e/profile-pic.avif 180w","type":"image/avif","sizes":"180px"},{"srcSet":"/blog/static/0246b40d98f0f937ce50b36337d45538/4951d/profile-pic.webp 180w","type":"image/webp","sizes":"180px"}]},"width":180,"height":180}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b53a473ca7e97e6a129d.js.map