(self.webpackChunkcarlos_vz=self.webpackChunkcarlos_vz||[]).push([[179],{5579:function(t,e,n){"use strict";n(9826),n(7915);var i=n(8419),o=n.n(i),r=(n(7082),n(9755)),a=n.n(r),s=(n(9755),n(9755));window.$=a(),function(t){var e=document.querySelectorAll(".sticky");o().add(e),t(".nav-item a").on("click",(function(e){if(""!==this.hash){e.preventDefault();var n=this.hash;t("html, body").animate({scrollTop:t(n).offset().top},800,(function(){window.location.hash=n}))}}));var n=t(".page-section"),i=t(".nav-menu");t(window).on("scroll",(function(){var e=t(this).scrollTop()+200;n.each((function(){var n=t(this).offset().top,o=n+t(this).outerHeight();e>=n&&e<=o&&(e<=o&&i.find("li").removeClass("active"),i.find('a[href="#'+t(this).attr("id")+'"]').parent("li").addClass("active")),e<300&&t(".nav-menu ul:first li:first").addClass("active")}))})),t(document).on("click",'[data-toggle="lightbox"]',(function(e){e.preventDefault(),t(this).ekkoLightbox()}));var r=t("#button"),a=t(".navsec");t(window).scroll((function(){t(window).scrollTop()>300?(r.addClass("show"),a.addClass("show")):(r.removeClass("show"),a.removeClass("show"))})),r.on("click",(function(e){e.preventDefault(),t("html, body").animate({scrollTop:0},"300")}))}(s)},9662:function(t,e,n){var i=n(614),o=n(6330);t.exports=function(t){if(i(t))return t;throw TypeError(o(t)+" is not a function")}},1223:function(t,e,n){var i=n(5112),o=n(30),r=n(3070),a=i("unscopables"),s=Array.prototype;null==s[a]&&r.f(s,a,{configurable:!0,value:o(null)}),t.exports=function(t){s[a][t]=!0}},9670:function(t,e,n){var i=n(111);t.exports=function(t){if(i(t))return t;throw TypeError(String(t)+" is not an object")}},1318:function(t,e,n){var i=n(5656),o=n(1400),r=n(6244),a=function(t){return function(e,n,a){var s,l=i(e),c=r(l),u=o(a,c);if(t&&n!=n){for(;c>u;)if((s=l[u++])!=s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:function(t,e,n){var i=n(9974),o=n(8361),r=n(7908),a=n(6244),s=n(5417),l=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,u=4==t,h=6==t,f=7==t,d=5==t||h;return function(g,m,p,v){for(var _,y,b=r(g),w=o(b),x=i(m,p,3),k=a(w),$=0,I=v||s,C=e?I(g,k):n||f?I(g,0):void 0;k>$;$++)if((d||$ in w)&&(y=x(_=w[$],$,b),t))if(e)C[$]=y;else if(y)switch(t){case 3:return!0;case 5:return _;case 6:return $;case 2:l.call(C,_)}else switch(t){case 4:return!1;case 7:l.call(C,_)}return h?-1:c||u?u:C}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},7475:function(t,e,n){var i=n(3157),o=n(4411),r=n(111),a=n(5112)("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,(o(e)&&(e===Array||i(e.prototype))||r(e)&&null===(e=e[a]))&&(e=void 0)),void 0===e?Array:e}},5417:function(t,e,n){var i=n(7475);t.exports=function(t,e){return new(i(t))(0===e?0:e)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:function(t,e,n){var i=n(1694),o=n(614),r=n(4326),a=n(5112)("toStringTag"),s="Arguments"==r(function(){return arguments}());t.exports=i?r:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),a))?n:s?r(e):"Object"==(i=r(e))&&o(e.callee)?"Arguments":i}},9920:function(t,e,n){var i=n(2597),o=n(3887),r=n(1236),a=n(3070);t.exports=function(t,e){for(var n=o(e),s=a.f,l=r.f,c=0;c<n.length;c++){var u=n[c];i(t,u)||s(t,u,l(e,u))}}},8880:function(t,e,n){var i=n(9781),o=n(3070),r=n(9114);t.exports=i?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var i=n(7854),o=n(111),r=i.document,a=o(r)&&o(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},8113:function(t,e,n){var i=n(5005);t.exports=i("navigator","userAgent")||""},7392:function(t,e,n){var i,o,r=n(7854),a=n(8113),s=r.process,l=r.Deno,c=s&&s.versions||l&&l.version,u=c&&c.v8;u?o=(i=u.split("."))[0]<4?1:i[0]+i[1]:a&&(!(i=a.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=a.match(/Chrome\/(\d+)/))&&(o=i[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var i=n(7854),o=n(1236).f,r=n(8880),a=n(1320),s=n(3505),l=n(9920),c=n(4705);t.exports=function(t,e){var n,u,h,f,d,g=t.target,m=t.global,p=t.stat;if(n=m?i:p?i[g]||s(g,{}):(i[g]||{}).prototype)for(u in e){if(f=e[u],h=t.noTargetGet?(d=o(n,u))&&d.value:n[u],!c(m?u:g+(p?".":"#")+u,t.forced)&&void 0!==h){if(typeof f==typeof h)continue;l(f,h)}(t.sham||h&&h.sham)&&r(f,"sham",!0),a(n,u,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,e,n){var i=n(9662);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,o){return t.call(e,n,i,o)}}return function(){return t.apply(e,arguments)}}},6530:function(t,e,n){var i=n(9781),o=n(2597),r=Function.prototype,a=i&&Object.getOwnPropertyDescriptor,s=o(r,"name"),l=s&&"something"===function(){}.name,c=s&&(!i||i&&a(r,"name").configurable);t.exports={EXISTS:s,PROPER:l,CONFIGURABLE:c}},5005:function(t,e,n){var i=n(7854),o=n(614),r=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?r(i[t]):i[t]&&i[t][e]}},8173:function(t,e,n){var i=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:i(n)}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var i=n(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var i=n(5005);t.exports=i("document","documentElement")},4664:function(t,e,n){var i=n(9781),o=n(7293),r=n(317);t.exports=!i&&!o((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(7293),o=n(4326),r="".split;t.exports=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?r.call(t,""):Object(t)}:Object},2788:function(t,e,n){var i=n(614),o=n(5465),r=Function.toString;i(o.inspectSource)||(o.inspectSource=function(t){return r.call(t)}),t.exports=o.inspectSource},9909:function(t,e,n){var i,o,r,a=n(8536),s=n(7854),l=n(111),c=n(8880),u=n(2597),h=n(5465),f=n(6200),d=n(3501),g="Object already initialized",m=s.WeakMap;if(a||h.state){var p=h.state||(h.state=new m),v=p.get,_=p.has,y=p.set;i=function(t,e){if(_.call(p,t))throw new TypeError(g);return e.facade=t,y.call(p,t,e),e},o=function(t){return v.call(p,t)||{}},r=function(t){return _.call(p,t)}}else{var b=f("state");d[b]=!0,i=function(t,e){if(u(t,b))throw new TypeError(g);return e.facade=t,c(t,b,e),e},o=function(t){return u(t,b)?t[b]:{}},r=function(t){return u(t,b)}}t.exports={set:i,get:o,has:r,enforce:function(t){return r(t)?o(t):i(t,{})},getterFor:function(t){return function(e){var n;if(!l(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},3157:function(t,e,n){var i=n(4326);t.exports=Array.isArray||function(t){return"Array"==i(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,n){var i=n(7293),o=n(614),r=n(648),a=n(5005),s=n(2788),l=[],c=a("Reflect","construct"),u=/^\s*(?:class|function)\b/,h=u.exec,f=!u.exec((function(){})),d=function(t){if(!o(t))return!1;try{return c(Object,l,t),!0}catch(t){return!1}};t.exports=!c||i((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?function(t){if(!o(t))return!1;switch(r(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return f||!!h.call(u,s(t))}:d},4705:function(t,e,n){var i=n(7293),o=n(614),r=/#|\.prototype\./,a=function(t,e){var n=l[s(t)];return n==u||n!=c&&(o(e)?i(e):!!e)},s=a.normalize=function(t){return String(t).replace(r,".").toLowerCase()},l=a.data={},c=a.NATIVE="N",u=a.POLYFILL="P";t.exports=a},111:function(t,e,n){var i=n(614);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(614),o=n(5005),r=n(3307);t.exports=r?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&Object(t)instanceof e}},6244:function(t,e,n){var i=n(7466);t.exports=function(t){return i(t.length)}},133:function(t,e,n){var i=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(t,e,n){var i=n(7854),o=n(614),r=n(2788),a=i.WeakMap;t.exports=o(a)&&/native code/.test(r(a))},30:function(t,e,n){var i,o=n(9670),r=n(6048),a=n(748),s=n(3501),l=n(490),c=n(317),u=n(6200),h=u("IE_PROTO"),f=function(){},d=function(t){return"<script>"+t+"</"+"script>"},g=function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e},m=function(){try{i=new ActiveXObject("htmlfile")}catch(t){}var t,e;m="undefined"!=typeof document?document.domain&&i?g(i):((e=c("iframe")).style.display="none",l.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F):g(i);for(var n=a.length;n--;)delete m.prototype[a[n]];return m()};s[h]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=o(t),n=new f,f.prototype=null,n[h]=t):n=m(),void 0===e?n:r(n,e)}},6048:function(t,e,n){var i=n(9781),o=n(3070),r=n(9670),a=n(1956);t.exports=i?Object.defineProperties:function(t,e){r(t);for(var n,i=a(e),s=i.length,l=0;s>l;)o.f(t,n=i[l++],e[n]);return t}},3070:function(t,e,n){var i=n(9781),o=n(4664),r=n(9670),a=n(4948),s=Object.defineProperty;e.f=i?s:function(t,e,n){if(r(t),e=a(e),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),o=n(5296),r=n(9114),a=n(5656),s=n(4948),l=n(2597),c=n(4664),u=Object.getOwnPropertyDescriptor;e.f=i?u:function(t,e){if(t=a(t),e=s(e),c)try{return u(t,e)}catch(t){}if(l(t,e))return r(!o.f.call(t,e),t[e])}},8006:function(t,e,n){var i=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,n){var i=n(2597),o=n(5656),r=n(1318).indexOf,a=n(3501);t.exports=function(t,e){var n,s=o(t),l=0,c=[];for(n in s)!i(a,n)&&i(s,n)&&c.push(n);for(;e.length>l;)i(s,n=e[l++])&&(~r(c,n)||c.push(n));return c}},1956:function(t,e,n){var i=n(6324),o=n(748);t.exports=Object.keys||function(t){return i(t,o)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!n.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var i=n(614),o=n(111);t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!o(r=n.call(t)))return r;if(i(n=t.valueOf)&&!o(r=n.call(t)))return r;if("string"!==e&&i(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),o=n(8006),r=n(5181),a=n(9670);t.exports=i("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=r.f;return n?e.concat(n(t)):e}},1320:function(t,e,n){var i=n(7854),o=n(614),r=n(2597),a=n(8880),s=n(3505),l=n(2788),c=n(9909),u=n(6530).CONFIGURABLE,h=c.get,f=c.enforce,d=String(String).split("String");(t.exports=function(t,e,n,l){var c,h=!!l&&!!l.unsafe,g=!!l&&!!l.enumerable,m=!!l&&!!l.noTargetGet,p=l&&void 0!==l.name?l.name:e;o(n)&&("Symbol("===String(p).slice(0,7)&&(p="["+String(p).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!r(n,"name")||u&&n.name!==p)&&a(n,"name",p),(c=f(n)).source||(c.source=d.join("string"==typeof p?p:""))),t!==i?(h?!m&&t[e]&&(g=!0):delete t[e],g?t[e]=n:a(t,e,n)):g?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return o(this)&&h(this).source||l(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,n){var i=n(7854);t.exports=function(t,e){try{Object.defineProperty(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},6200:function(t,e,n){var i=n(2309),o=n(9711),r=i("keys");t.exports=function(t){return r[t]||(r[t]=o(t))}},5465:function(t,e,n){var i=n(7854),o=n(3505),r="__core-js_shared__",a=i[r]||o(r,{});t.exports=a},2309:function(t,e,n){var i=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.3",mode:i?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,n){var i=n(9303),o=Math.max,r=Math.min;t.exports=function(t,e){var n=i(t);return n<0?o(n+e,0):r(n,e)}},5656:function(t,e,n){var i=n(8361),o=n(4488);t.exports=function(t){return i(o(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var i=+t;return i!=i||0===i?0:(i>0?n:e)(i)}},7466:function(t,e,n){var i=n(9303),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(4488);t.exports=function(t){return Object(i(t))}},7593:function(t,e,n){var i=n(111),o=n(2190),r=n(8173),a=n(2140),s=n(5112)("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,l=r(t,s);if(l){if(void 0===e&&(e="default"),n=l.call(t,e),!i(n)||o(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var i=n(7593),o=n(2190);t.exports=function(t){var e=i(t,"string");return o(e)?e:String(e)}},1694:function(t,e,n){var i={};i[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(i)},6330:function(t){t.exports=function(t){try{return String(t)}catch(t){return"Object"}}},9711:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},3307:function(t,e,n){var i=n(133);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var i=n(7854),o=n(2309),r=n(2597),a=n(9711),s=n(133),l=n(3307),c=o("wks"),u=i.Symbol,h=l?u:u&&u.withoutSetter||a;t.exports=function(t){return r(c,t)&&(s||"string"==typeof c[t])||(s&&r(u,t)?c[t]=u[t]:c[t]=h("Symbol."+t)),c[t]}},9826:function(t,e,n){"use strict";var i=n(2109),o=n(2092).find,r=n(1223),a="find",s=!0;a in[]&&Array(1).find((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},7082:function(t,e,n){var i=n(9755);!function(t){"use strict";var e=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();!function(t){var n="ekkoLightbox",o=t.fn[n],r={title:"",footer:"",maxWidth:9999,maxHeight:9999,showArrows:!0,wrapping:!0,type:null,alwaysShowClose:!1,loadingMessage:'<div class="ekko-lightbox-loader"><div><div></div><div></div></div></div>',leftArrow:"<span>&#10094;</span>",rightArrow:"<span>&#10095;</span>",strings:{close:"Close",fail:"Failed to load image:",type:"Could not detect remote target type. Force the type using data-type"},doc:document,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){},onNavigate:function(){},onContentLoaded:function(){}},a=function(){function n(e,o){var a=this;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,n),this._config=t.extend({},r,o),this._$modalArrows=null,this._galleryIndex=0,this._galleryName=null,this._padding=null,this._border=null,this._titleIsShown=!1,this._footerIsShown=!1,this._wantedWidth=0,this._wantedHeight=0,this._touchstartX=0,this._touchendX=0,this._modalId="ekkoLightbox-"+Math.floor(1e3*Math.random()+1),this._$element=e instanceof i?e:t(e),this._isBootstrap3=3==t.fn.modal.Constructor.VERSION[0];var s='<h4 class="modal-title">'+(this._config.title||"&nbsp;")+"</h4>",l='<button type="button" class="close" data-dismiss="modal" aria-label="'+this._config.strings.close+'"><span aria-hidden="true">&times;</span></button>',c='<div class="modal-dialog" role="document"><div class="modal-content">'+('<div class="modal-header'+(this._config.title||this._config.alwaysShowClose?"":" hide")+'">'+(this._isBootstrap3?l+s:s+l)+"</div>")+'<div class="modal-body"><div class="ekko-lightbox-container"><div class="ekko-lightbox-item fade in show"></div><div class="ekko-lightbox-item fade"></div></div></div>'+('<div class="modal-footer'+(this._config.footer?"":" hide")+'">'+(this._config.footer||"&nbsp;")+"</div>")+"</div></div>";t(this._config.doc.body).append('<div id="'+this._modalId+'" class="ekko-lightbox modal fade" tabindex="-1" tabindex="-1" role="dialog" aria-hidden="true">'+c+"</div>"),this._$modal=t("#"+this._modalId,this._config.doc),this._$modalDialog=this._$modal.find(".modal-dialog").first(),this._$modalContent=this._$modal.find(".modal-content").first(),this._$modalBody=this._$modal.find(".modal-body").first(),this._$modalHeader=this._$modal.find(".modal-header").first(),this._$modalFooter=this._$modal.find(".modal-footer").first(),this._$lightboxContainer=this._$modalBody.find(".ekko-lightbox-container").first(),this._$lightboxBodyOne=this._$lightboxContainer.find("> div:first-child").first(),this._$lightboxBodyTwo=this._$lightboxContainer.find("> div:last-child").first(),this._border=this._calculateBorders(),this._padding=this._calculatePadding(),this._galleryName=this._$element.data("gallery"),this._galleryName&&(this._$galleryItems=t(document.body).find('*[data-gallery="'+this._galleryName+'"]'),this._galleryIndex=this._$galleryItems.index(this._$element),t(document).on("keydown.ekkoLightbox",this._navigationalBinder.bind(this)),this._config.showArrows&&this._$galleryItems.length>1&&(this._$lightboxContainer.append('<div class="ekko-lightbox-nav-overlay"><a href="#">'+this._config.leftArrow+'</a><a href="#">'+this._config.rightArrow+"</a></div>"),this._$modalArrows=this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay").first(),this._$lightboxContainer.on("click","a:first-child",(function(t){return t.preventDefault(),a.navigateLeft()})),this._$lightboxContainer.on("click","a:last-child",(function(t){return t.preventDefault(),a.navigateRight()})),this.updateNavigation())),this._$modal.on("show.bs.modal",this._config.onShow.bind(this)).on("shown.bs.modal",(function(){return a._toggleLoading(!0),a._handle(),a._config.onShown.call(a)})).on("hide.bs.modal",this._config.onHide.bind(this)).on("hidden.bs.modal",(function(){return a._galleryName&&(t(document).off("keydown.ekkoLightbox"),t(window).off("resize.ekkoLightbox")),a._$modal.remove(),a._config.onHidden.call(a)})).modal(this._config),t(window).on("resize.ekkoLightbox",(function(){a._resize(a._wantedWidth,a._wantedHeight)})),this._$lightboxContainer.on("touchstart",(function(){a._touchstartX=event.changedTouches[0].screenX})).on("touchend",(function(){a._touchendX=event.changedTouches[0].screenX,a._swipeGesure()}))}return e(n,null,[{key:"Default",get:function(){return r}}]),e(n,[{key:"element",value:function(){return this._$element}},{key:"modal",value:function(){return this._$modal}},{key:"navigateTo",value:function(e){return e<0||e>this._$galleryItems.length-1?this:(this._galleryIndex=e,this.updateNavigation(),this._$element=t(this._$galleryItems.get(this._galleryIndex)),void this._handle())}},{key:"navigateLeft",value:function(){if(this._$galleryItems&&1!==this._$galleryItems.length){if(0===this._galleryIndex){if(!this._config.wrapping)return;this._galleryIndex=this._$galleryItems.length-1}else this._galleryIndex--;return this._config.onNavigate.call(this,"left",this._galleryIndex),this.navigateTo(this._galleryIndex)}}},{key:"navigateRight",value:function(){if(this._$galleryItems&&1!==this._$galleryItems.length){if(this._galleryIndex===this._$galleryItems.length-1){if(!this._config.wrapping)return;this._galleryIndex=0}else this._galleryIndex++;return this._config.onNavigate.call(this,"right",this._galleryIndex),this.navigateTo(this._galleryIndex)}}},{key:"updateNavigation",value:function(){if(!this._config.wrapping){var t=this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay");0===this._galleryIndex?t.find("a:first-child").addClass("disabled"):t.find("a:first-child").removeClass("disabled"),this._galleryIndex===this._$galleryItems.length-1?t.find("a:last-child").addClass("disabled"):t.find("a:last-child").removeClass("disabled")}}},{key:"close",value:function(){return this._$modal.modal("hide")}},{key:"_navigationalBinder",value:function(t){return 39===(t=t||window.event).keyCode?this.navigateRight():37===t.keyCode?this.navigateLeft():void 0}},{key:"_detectRemoteType",value:function(t,e){return!(e=e||!1)&&this._isImage(t)&&(e="image"),!e&&this._getYoutubeId(t)&&(e="youtube"),!e&&this._getVimeoId(t)&&(e="vimeo"),!e&&this._getInstagramId(t)&&(e="instagram"),(!e||["image","youtube","vimeo","instagram","video","url"].indexOf(e)<0)&&(e="url"),e}},{key:"_isImage",value:function(t){return t&&t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)}},{key:"_containerToUse",value:function(){var t=this,e=this._$lightboxBodyTwo,n=this._$lightboxBodyOne;return this._$lightboxBodyTwo.hasClass("in")&&(e=this._$lightboxBodyOne,n=this._$lightboxBodyTwo),n.removeClass("in show"),setTimeout((function(){t._$lightboxBodyTwo.hasClass("in")||t._$lightboxBodyTwo.empty(),t._$lightboxBodyOne.hasClass("in")||t._$lightboxBodyOne.empty()}),500),e.addClass("in show"),e}},{key:"_handle",value:function(){var t=this._containerToUse();this._updateTitleAndFooter();var e=this._$element.attr("data-remote")||this._$element.attr("href"),n=this._detectRemoteType(e,this._$element.attr("data-type")||!1);if(["image","youtube","vimeo","instagram","video","url"].indexOf(n)<0)return this._error(this._config.strings.type);switch(n){case"image":this._preloadImage(e,t),this._preloadImageByIndex(this._galleryIndex,3);break;case"youtube":this._showYoutubeVideo(e,t);break;case"vimeo":this._showVimeoVideo(this._getVimeoId(e),t);break;case"instagram":this._showInstagramVideo(this._getInstagramId(e),t);break;case"video":this._showHtml5Video(e,t);break;default:this._loadRemoteContent(e,t)}return this}},{key:"_getYoutubeId",value:function(t){if(!t)return!1;var e=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return!(!e||11!==e[2].length)&&e[2]}},{key:"_getVimeoId",value:function(t){return!!(t&&t.indexOf("vimeo")>0)&&t}},{key:"_getInstagramId",value:function(t){return!!(t&&t.indexOf("instagram")>0)&&t}},{key:"_toggleLoading",value:function(e){return(e=e||!1)?(this._$modalDialog.css("display","none"),this._$modal.removeClass("in show"),t(".modal-backdrop").append(this._config.loadingMessage)):(this._$modalDialog.css("display","block"),this._$modal.addClass("in show"),t(".modal-backdrop").find(".ekko-lightbox-loader").remove()),this}},{key:"_calculateBorders",value:function(){return{top:this._totalCssByAttribute("border-top-width"),right:this._totalCssByAttribute("border-right-width"),bottom:this._totalCssByAttribute("border-bottom-width"),left:this._totalCssByAttribute("border-left-width")}}},{key:"_calculatePadding",value:function(){return{top:this._totalCssByAttribute("padding-top"),right:this._totalCssByAttribute("padding-right"),bottom:this._totalCssByAttribute("padding-bottom"),left:this._totalCssByAttribute("padding-left")}}},{key:"_totalCssByAttribute",value:function(t){return parseInt(this._$modalDialog.css(t),10)+parseInt(this._$modalContent.css(t),10)+parseInt(this._$modalBody.css(t),10)}},{key:"_updateTitleAndFooter",value:function(){var t=this._$element.data("title")||"",e=this._$element.data("footer")||"";return this._titleIsShown=!1,t||this._config.alwaysShowClose?(this._titleIsShown=!0,this._$modalHeader.css("display","").find(".modal-title").html(t||"&nbsp;")):this._$modalHeader.css("display","none"),this._footerIsShown=!1,e?(this._footerIsShown=!0,this._$modalFooter.css("display","").html(e)):this._$modalFooter.css("display","none"),this}},{key:"_showYoutubeVideo",value:function(t,e){var n=this._getYoutubeId(t),i=t.indexOf("&")>0?t.substr(t.indexOf("&")):"",o=this._$element.data("width")||560,r=this._$element.data("height")||o/(560/315);return this._showVideoIframe("//www.youtube.com/embed/"+n+"?badge=0&autoplay=1&html5=1"+i,o,r,e)}},{key:"_showVimeoVideo",value:function(t,e){var n=this._$element.data("width")||500,i=this._$element.data("height")||n/(560/315);return this._showVideoIframe(t+"?autoplay=1",n,i,e)}},{key:"_showInstagramVideo",value:function(t,e){var n=this._$element.data("width")||612,i=n+80;return t="/"!==t.substr(-1)?t+"/":t,e.html('<iframe width="'+n+'" height="'+i+'" src="'+t+'embed/" frameborder="0" allowfullscreen></iframe>'),this._resize(n,i),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}},{key:"_showVideoIframe",value:function(t,e,n,i){return n=n||e,i.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="'+e+'" height="'+n+'" src="'+t+'" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>'),this._resize(e,n),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}},{key:"_showHtml5Video",value:function(t,e){var n=this._$element.data("width")||560,i=this._$element.data("height")||n/(560/315);return e.html('<div class="embed-responsive embed-responsive-16by9"><video width="'+n+'" height="'+i+'" src="'+t+'" preload="auto" autoplay controls class="embed-responsive-item"></video></div>'),this._resize(n,i),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}},{key:"_loadRemoteContent",value:function(e,n){var i=this,o=this._$element.data("width")||560,r=this._$element.data("height")||560,a=this._$element.data("disableExternalCheck")||!1;return this._toggleLoading(!1),a||this._isExternal(e)?(n.html('<iframe src="'+e+'" frameborder="0" allowfullscreen></iframe>'),this._config.onContentLoaded.call(this)):n.load(e,t.proxy((function(){return i._$element.trigger("loaded.bs.modal")}))),this._$modalArrows&&this._$modalArrows.css("display","none"),this._resize(o,r),this}},{key:"_isExternal",value:function(t){var e=t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof e[1]&&e[1].length>0&&e[1].toLowerCase()!==location.protocol||"string"==typeof e[2]&&e[2].length>0&&e[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"),"")!==location.host}},{key:"_error",value:function(t){return this._containerToUse().html(t),this._resize(300,300),this}},{key:"_preloadImageByIndex",value:function(e,n){if(this._$galleryItems){var i=t(this._$galleryItems.get(e),!1);if(void 0!==i){var o=i.attr("data-remote")||i.attr("href");return("image"===i.attr("data-type")||this._isImage(o))&&this._preloadImage(o,!1),n>0?this._preloadImageByIndex(e+1,n-1):void 0}}}},{key:"_preloadImage",value:function(e,n){var i=this;n=n||!1;var o=new Image;return n&&function(){var r=setTimeout((function(){n.append(i._config.loadingMessage)}),200);o.onload=function(){r&&clearTimeout(r),r=null;var e=t("<img />");return e.attr("src",o.src),e.addClass("img-fluid"),e.css("width","100%"),n.html(e),i._$modalArrows&&i._$modalArrows.css("display",""),i._resize(o.width,o.height),i._toggleLoading(!1),i._config.onContentLoaded.call(i)},o.onerror=function(){return i._toggleLoading(!1),i._error(i._config.strings.fail+"  "+e)}}(),o.src=e,o}},{key:"_swipeGesure",value:function(){return this._touchendX<this._touchstartX?this.navigateRight():this._touchendX>this._touchstartX?this.navigateLeft():void 0}},{key:"_resize",value:function(e,n){n=n||e,this._wantedWidth=e,this._wantedHeight=n;var i=e/n,o=this._padding.left+this._padding.right+this._border.left+this._border.right,r=this._config.doc.body.clientWidth>575?20:0,a=this._config.doc.body.clientWidth>575?0:20,s=Math.min(e+o,this._config.doc.body.clientWidth-r,this._config.maxWidth);e+o>s?(n=(s-o-a)/i,e=s):e+=o;var l=0,c=0;this._footerIsShown&&(c=this._$modalFooter.outerHeight(!0)||55),this._titleIsShown&&(l=this._$modalHeader.outerHeight(!0)||67);var u=this._padding.top+this._padding.bottom+this._border.bottom+this._border.top,h=parseFloat(this._$modalDialog.css("margin-top"))+parseFloat(this._$modalDialog.css("margin-bottom")),f=Math.min(n,t(window).height()-u-h-l-c,this._config.maxHeight-u-l-c);n>f&&(e=Math.ceil(f*i)+o),this._$lightboxContainer.css("height",f),this._$modalDialog.css("flex",1).css("maxWidth",e);var d=this._$modal.data("bs.modal");if(d)try{d._handleUpdate()}catch(t){d.handleUpdate()}return this}}],[{key:"_jQueryInterface",value:function(e){var i=this;return e=e||{},this.each((function(){var o=t(i),r=t.extend({},n.Default,o.data(),"object"==typeof e&&e);new n(i,r)}))}}]),n}();t.fn[n]=a._jQueryInterface,t.fn[n].Constructor=a,t.fn[n].noConflict=function(){return t.fn[n]=o,a._jQueryInterface}}(i)}()},8419:function(t){!function(e,n){"use strict";var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var o,r=!1,a=void 0!==e;a&&e.getComputedStyle?(o=n.createElement("div"),["","-webkit-","-moz-","-ms-"].some((function(t){try{o.style.position=t+"sticky"}catch(t){}return""!=o.style.position}))&&(r=!0)):r=!0;var s=!1,l="undefined"!=typeof ShadowRoot,c={top:null,left:null},u=[];function h(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}function f(t){return parseFloat(t)||0}function d(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e}var g=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!(e instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(u.some((function(t){return t._node===e})))throw new Error("Stickyfill is already applied to this node");this._node=e,this._stickyMode=null,this._active=!1,u.push(this),this.refresh()}return i(t,[{key:"refresh",value:function(){if(!r&&!this._removed){this._active&&this._deactivate();var t=this._node,i=getComputedStyle(t),o={position:i.position,top:i.top,display:i.display,marginTop:i.marginTop,marginBottom:i.marginBottom,marginLeft:i.marginLeft,marginRight:i.marginRight,cssFloat:i.cssFloat};if(!isNaN(parseFloat(o.top))&&"table-cell"!=o.display&&"none"!=o.display){this._active=!0;var a=t.style.position;"sticky"!=i.position&&"-webkit-sticky"!=i.position||(t.style.position="static");var s=t.parentNode,c=l&&s instanceof ShadowRoot?s.host:s,u=t.getBoundingClientRect(),g=c.getBoundingClientRect(),m=getComputedStyle(c);this._parent={node:c,styles:{position:c.style.position},offsetHeight:c.offsetHeight},this._offsetToWindow={left:u.left,right:n.documentElement.clientWidth-u.right},this._offsetToParent={top:u.top-g.top-f(m.borderTopWidth),left:u.left-g.left-f(m.borderLeftWidth),right:-u.right+g.right-f(m.borderRightWidth)},this._styles={position:a,top:t.style.top,bottom:t.style.bottom,left:t.style.left,right:t.style.right,width:t.style.width,marginTop:t.style.marginTop,marginLeft:t.style.marginLeft,marginRight:t.style.marginRight};var p=f(o.top);this._limits={start:u.top+e.pageYOffset-p,end:g.top+e.pageYOffset+c.offsetHeight-f(m.borderBottomWidth)-t.offsetHeight-p-f(o.marginBottom)};var v=m.position;"absolute"!=v&&"relative"!=v&&(c.style.position="relative"),this._recalcPosition();var _=this._clone={};_.node=n.createElement("div"),h(_.node.style,{width:u.right-u.left+"px",height:u.bottom-u.top+"px",marginTop:o.marginTop,marginBottom:o.marginBottom,marginLeft:o.marginLeft,marginRight:o.marginRight,cssFloat:o.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),s.insertBefore(_.node,t),_.docOffsetTop=d(_.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var t=c.top<=this._limits.start?"start":c.top>=this._limits.end?"end":"middle";if(this._stickyMode!=t){switch(t){case"start":h(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":h(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":h(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=t}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(d(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var t=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,h(this._node.style,this._styles),delete this._styles,u.some((function(e){return e!==t&&e._parent&&e._parent.node===t._parent.node}))||h(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var t=this;this._deactivate(),u.some((function(e,n){if(e._node===t._node)return u.splice(n,1),!0})),this._removed=!0}}]),t}(),m={stickies:u,Sticky:g,forceSticky:function(){r=!1,p(),this.refreshAll()},addOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}for(var e=0;e<u.length;e++)if(u[e]._node===t)return u[e];return new g(t)},add:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length){for(var e=[],n=function(n){var i=t[n];return i instanceof HTMLElement?u.some((function(t){if(t._node===i)return e.push(t),!0}))?"continue":void e.push(new g(i)):(e.push(void 0),"continue")},i=0;i<t.length;i++)n(i);return e}},refreshAll:function(){u.forEach((function(t){return t.refresh()}))},removeOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}u.some((function(e){if(e._node===t)return e.remove(),!0}))},remove:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length)for(var e=function(e){var n=t[e];u.some((function(t){if(t._node===n)return t.remove(),!0}))},n=0;n<t.length;n++)e(n)},removeAll:function(){for(;u.length;)u[0].remove()}};function p(){if(!s){s=!0,r(),e.addEventListener("scroll",r),e.addEventListener("resize",m.refreshAll),e.addEventListener("orientationchange",m.refreshAll);var t=void 0,i=void 0,o=void 0;"hidden"in n?(i="hidden",o="visibilitychange"):"webkitHidden"in n&&(i="webkitHidden",o="webkitvisibilitychange"),o?(n[i]||a(),n.addEventListener(o,(function(){n[i]?clearInterval(t):a()}))):a()}function r(){e.pageXOffset!=c.left?(c.top=e.pageYOffset,c.left=e.pageXOffset,m.refreshAll()):e.pageYOffset!=c.top&&(c.top=e.pageYOffset,c.left=e.pageXOffset,u.forEach((function(t){return t._recalcPosition()})))}function a(){t=setInterval((function(){u.forEach((function(t){return t._fastCheck()}))}),500)}}r||p(),t.exports?t.exports=m:a&&(e.Stickyfill=m)}(window,document)}},function(t){"use strict";var e;e=5579,t(t.s=e)}]);