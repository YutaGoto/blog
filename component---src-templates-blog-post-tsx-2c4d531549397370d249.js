/*! For license information please see component---src-templates-blog-post-tsx-2c4d531549397370d249.js.LICENSE.txt */
(self.webpackChunkyutagoto_blog=self.webpackChunkyutagoto_blog||[]).push([[7],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},4856:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r,o=n(7294),i=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return i(t,e),t}(Error);function a(e,t){if(!e)throw new l(t)}function c(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var u=n(5900),s=n.n(u),d=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},f.apply(this,arguments)},p=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function l(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}c((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},y=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},b=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function m(e,t,n){var r=t.height,o=t.width,i=w(t,["height","width"]),l=f({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),a=window.open(e,"",Object.keys(l).map((function(e){return e+"="+l[e]})).join(", "));if(n)var c=window.setInterval((function(){try{(null===a||a.closed)&&(window.clearInterval(c),n(a))}catch(e){console.error(e)}}),1e3);return a}var g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,l=n.windowPosition,a=void 0===l?"windowCenter":l,c=n.windowWidth,u=void 0===c?550:c;m(e,f({height:i,width:u},"windowCenter"===a?y(u,i):b(u,i)),r)},t.handleClick=function(e){return p(t,void 0,void 0,(function(){var t,n,r,o,i,l,a,c,u,s;return h(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,l=t.url,a=t.openShareDialogOnClick,c=t.opts,u=o(l,c),r?[2]:(e.preventDefault(),n?(s=n(),v(s)?[4,s]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return a&&this.openShareDialog(u),i&&i(e,u),[2]}}))}))},t}return d(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,i=e.disabledStyle,l=e.forwardedRef,a=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),u=e.style,d=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,w(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=s()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),h=f(f(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),r&&i);return o.createElement("button",f({},d,{"aria-label":d["aria-label"]||a,className:p,onClick:this.handleClick,ref:l,style:h}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),O=g,k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)};var x=function(e,t,n,r){function i(i,l){var a=n(i),c=k({},i);return Object.keys(a).forEach((function(e){delete c[e]})),o.createElement(O,k({},r,c,{forwardedRef:l,networkName:e,networkLink:t,opts:n(i)}))}return i.displayName="ShareButton-"+e,(0,o.forwardRef)(i)};var S=x("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,i=void 0===o?[]:o,l=t.related,u=void 0===l?[]:l;return a(e,"twitter.url"),a(Array.isArray(i),"twitter.hashtags is not an array"),a(Array.isArray(u),"twitter.related is not an array"),"https://twitter.com/share"+c({url:e,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:u.length>0?u.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),j=function(){return j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},j.apply(this,arguments)},E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function C(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,i=t.iconFillColor,l=t.round,a=t.size,c=E(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.createElement("svg",j({viewBox:"0 0 64 64",width:a,height:a},c),l?o.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):o.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),o.createElement("path",{d:e.path,fill:i}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var P=C({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var _=x("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return a(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+c({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),N=C({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"}),A=n(2166),R=n(8972),H=function(e){var t,n,r,i,l,a,c,u,s,d,f,p,h,w,v,y=e.data,b=e.location,m=y.markdownRemark,g=null===(t=y.site)||void 0===t?void 0:t.siteMetadata,O=(null===(n=y.site)||void 0===n||null===(r=n.siteMetadata)||void 0===r?void 0:r.title)||"Title",k=y.previous,x=y.next;return o.createElement(A.Ar,{location:b,title:O},o.createElement(R.Z,{title:(null==m||null===(i=m.frontmatter)||void 0===i?void 0:i.title)||"ブログポスト",description:(null==m||null===(l=m.frontmatter)||void 0===l?void 0:l.description)||(null==m?void 0:m.excerpt)}),o.createElement("div",{className:"xl:flex xl:space-x-2"},o.createElement("div",{className:"xl:flex-grow"},o.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("h1",{itemProp:"headline",className:"text-4xl font-extrabold mb-2"},null==m||null===(a=m.frontmatter)||void 0===a?void 0:a.title),o.createElement("p",{className:"text-md"},null==m||null===(c=m.frontmatter)||void 0===c?void 0:c.date),o.createElement("section",{dangerouslySetInnerHTML:{__html:(null==m?void 0:m.html)||""},itemProp:"articleBody",className:"mt-3"})),o.createElement("div",{className:"mt-5 mb-5"},o.createElement(S,{url:(null==g?void 0:g.siteUrl)+"/blog"+(null==m||null===(u=m.fields)||void 0===u?void 0:u.slug),title:(null==m||null===(s=m.frontmatter)||void 0===s?void 0:s.title)+" - .ごっちの日記",className:"m-2"},o.createElement(P,{size:"32",round:!0})),o.createElement(_,{url:(null==g?void 0:g.siteUrl)+"/blog"+(null==m||null===(d=m.fields)||void 0===d?void 0:d.slug),title:(null==m||null===(f=m.frontmatter)||void 0===f?void 0:f.title)+" - .ごっちの日記",className:"m-2"},o.createElement(N,{size:"32",round:!0})))),o.createElement("div",{className:"lg:flex-none"},o.createElement(A.wp,null))),o.createElement("div",{className:"flex lg:justify-between lg:flex-row flex-col mb-4 mt-4",role:"navigation"},k&&o.createElement(A.ZP,{text:(null===(p=k.frontmatter)||void 0===p?void 0:p.title)||"",iconName:"angle-left",isLeft:!0,linkTo:(null===(h=k.fields)||void 0===h?void 0:h.slug)||"",rel:"prev"}),x&&o.createElement(A.ZP,{text:(null===(w=x.frontmatter)||void 0===w?void 0:w.title)||"",iconName:"angle-right",isLeft:!1,linkTo:(null===(v=x.fields)||void 0===v?void 0:v.slug)||"",rel:"next"})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-2c4d531549397370d249.js.map