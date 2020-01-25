;
/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);
;
var waitForFinalEvent = function(){var b={};return function(c,d,a){a||(a="Don't call this twice without a uniqueId");b[a]&&clearTimeout(b[a]);b[a]=setTimeout(c,d)}}();

// masked input 
;(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){a(require("jquery"))}else{a(jQuery)}}}(function(e){var d=navigator.userAgent,c=/iphone/i.test(d),a=/chrome/i.test(d),b=/android/i.test(d),f;e.mask={definitions:{"9":"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:true,dataName:"rawMaskFn",placeholder:"_"};e.fn.extend({caret:function(i,g){var h;if(this.length===0||this.is(":hidden")||this.get(0)!==document.activeElement){return}if(typeof i=="number"){g=(typeof g==="number")?g:i;return this.each(function(){if(this.setSelectionRange){this.setSelectionRange(i,g)}else{if(this.createTextRange){h=this.createTextRange();h.collapse(true);h.moveEnd("character",g);h.moveStart("character",i);h.select()}}})}else{if(this[0].setSelectionRange){i=this[0].selectionStart;g=this[0].selectionEnd}else{if(document.selection&&document.selection.createRange){h=document.selection.createRange();i=0-h.duplicate().moveStart("character",-100000);g=i+h.text.length}}return{begin:i,end:g}}},unmask:function(){return this.trigger("unmask")},mask:function(q,j){var n,k,h,i,p,g,l,o;if(!q&&this.length>0){n=e(this[0]);var m=n.data(e.mask.dataName);return m?m():undefined}j=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},j);k=e.mask.definitions;h=[];i=l=q.length;p=null;q=String(q);e.each(q.split(""),function(r,s){if(s=="?"){l--;i=r}else{if(k[s]){h.push(new RegExp(k[s]));if(p===null){p=h.length-1}if(r<i){g=h.length-1}}else{h.push(null)}}});return this.trigger("unmask").each(function(){var F=e(this),w=e.map(q.split(""),function(J,I){if(J!="?"){return k[J]?E(I):J}}),B=w.join(""),H=F.val();function s(){if(!j.completed){return}for(var I=p;I<=g;I++){if(h[I]&&w[I]===E(I)){return}}j.completed.call(F)}function E(I){if(I<j.placeholder.length){return j.placeholder.charAt(I)}return j.placeholder.charAt(0)}function D(I){while(++I<l&&!h[I]){}return I}function y(I){while(--I>=0&&!h[I]){}return I}function v(L,I){var K,J;if(L<0){return}for(K=L,J=D(I);K<l;K++){if(h[K]){if(J<l&&h[K].test(w[J])){w[K]=w[J];w[J]=E(J)}else{break}J=D(J)}}C();F.caret(Math.max(p,L))}function r(M){var K,L,I,J;for(K=M,L=E(M);K<l;K++){if(h[K]){I=D(K);J=w[K];w[K]=L;if(I<l&&h[I].test(J)){L=J}else{break}}}}function A(L){var J=F.val();var M=F.caret();if(o&&o.length&&o.length>J.length){u(true);while(M.begin>0&&!h[M.begin-1]){M.begin--}if(M.begin===0){while(M.begin<p&&!h[M.begin]){M.begin++}}F.caret(M.begin,M.begin)}else{var I=u(true);var K=J.charAt(M.begin);if(M.begin<l){if(!h[M.begin]){M.begin++;if(h[M.begin].test(K)){M.begin++}}else{if(h[M.begin].test(K)){M.begin++}}}F.caret(M.begin,M.begin)}s()}function x(I){u();if(F.val()!=H){F.change()}}function z(L){if(F.prop("readonly")){return}var J=L.which||L.keyCode,M,K,I;o=F.val();if(J===8||J===46||(c&&J===127)){M=F.caret();K=M.begin;I=M.end;if(I-K===0){K=J!==46?y(K):(I=D(K-1));I=J===46?D(I):I}t(K,I);v(K,I-1);L.preventDefault()}else{if(J===13){x.call(this,L)}else{if(J===27){F.val(H);F.caret(0,u());L.preventDefault()}}}}function G(M){if(F.prop("readonly")){return}var I=M.which||M.keyCode,O=F.caret(),L,N,K;if(M.ctrlKey||M.altKey||M.metaKey||I<32){return}else{if(I&&I!==13){if(O.end-O.begin!==0){t(O.begin,O.end);v(O.begin,O.end-1)}L=D(O.begin-1);if(L<l){N=String.fromCharCode(I);if(h[L].test(N)){r(L);w[L]=N;C();K=D(L);if(b){var J=function(){e.proxy(e.fn.caret,F,K)()};setTimeout(J,0)}else{F.caret(K)}if(O.begin<=g){s()}}}M.preventDefault()}}}function t(K,I){var J;for(J=K;J<I&&J<l;J++){if(h[J]){w[J]=E(J)}}}function C(){F.val(w.join(""))}function u(J){var N=F.val(),M=-1,I,L,K;for(I=0,K=0;I<l;I++){if(h[I]){w[I]=E(I);while(K++<N.length){L=N.charAt(K-1);if(h[I].test(L)){w[I]=L;M=I;break}}if(K>N.length){t(I+1,l);break}}else{if(w[I]===N.charAt(K)){K++}if(I<i){M=I}}}if(J){C()}else{if(M+1<i){if(j.autoclear||w.join("")===B){if(F.val()){F.val("")}t(0,l)}else{C()}}else{C();F.val(F.val().substring(0,M+1))}}return(i?I:p)}F.data(e.mask.dataName,function(){return e.map(w,function(J,I){return h[I]&&J!=E(I)?J:null}).join("")});F.one("unmask",function(){F.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(F.prop("readonly")){return}clearTimeout(f);var I;H=F.val();I=u();f=setTimeout(function(){if(F.get(0)!==document.activeElement){return}C();if(I==q.replace("?","").length){F.caret(0,I)}else{F.caret(I)}},10)}).on("blur.mask",x).on("keydown.mask",z).on("keypress.mask",G).on("input.mask paste.mask",function(){if(F.prop("readonly")){return}setTimeout(function(){var I=u(true);F.caret(I);s()},0)});if(a&&b){F.off("input.mask").on("input.mask",A)}u()})}})}));
/**
*  $(function() {
*  	$('.item').matchHeight(options);
*  });
* data-mh="key"
*/
;(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof module!=="undefined"&&module.exports){module.exports=a(require("jquery"))}else{a(jQuery)}}})(function(h){var b=-1,g=-1;var e=function(i){return parseFloat(i)||0};var f=function(m){var i=1,k=h(m),j=null,l=[];k.each(function(){var n=h(this),p=n.offset().top-e(n.css("margin-top")),o=l.length>0?l[l.length-1]:null;if(o===null){l.push(n)}else{if(Math.floor(Math.abs(j-p))<=i){l[l.length-1]=o.add(n)}else{l.push(n)}}j=p});return l};var d=function(i){var j={byRow:true,property:"height",target:null,remove:false};if(typeof i==="object"){return h.extend(j,i)}if(typeof i==="boolean"){j.byRow=i}else{if(i==="remove"){j.remove=true}}return j};var a=h.fn.matchHeight=function(i){var k=d(i);if(k.remove){var j=this;this.css(k.property,"");h.each(a._groups,function(l,m){m.elements=m.elements.not(j)});return this}if(this.length<=1&&!k.target){return this}a._groups.push({elements:this,options:k});a._apply(this,k);return this};a.version="master";a._groups=[];a._throttle=80;a._maintainScroll=false;a._beforeUpdate=null;a._afterUpdate=null;a._rows=f;a._parse=e;a._parseOptions=d;a._apply=function(o,k){var m=d(k),l=h(o),n=[l];var p=h(window).scrollTop(),j=h("html").outerHeight(true);var i=l.parents().filter(":hidden");i.each(function(){var q=h(this);q.data("style-cache",q.attr("style"))});i.css("display","block");if(m.byRow&&!m.target){l.each(function(){var q=h(this),r=q.css("display");if(r!=="inline-block"&&r!=="flex"&&r!=="inline-flex"){r="block"}q.data("style-cache",q.attr("style"));q.css({display:r,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})});n=f(l);l.each(function(){var q=h(this);q.attr("style",q.data("style-cache")||"")})}h.each(n,function(s,t){var r=h(t),q=0;if(!m.target){if(m.byRow&&r.length<=1){r.css(m.property,"");return}r.each(function(){var u=h(this),w=u.css("display");if(w!=="inline-block"&&w!=="flex"&&w!=="inline-flex"){w="block"}var v={display:w};v[m.property]="";u.css(v);if(u.outerHeight(false)>q){q=u.outerHeight(false)}u.css("display","")})}else{q=m.target.outerHeight(false)}r.each(function(){var v=h(this),u=0;if(m.target&&v.is(m.target)){return}if(v.css("box-sizing")!=="border-box"){u+=e(v.css("border-top-width"))+e(v.css("border-bottom-width"));u+=e(v.css("padding-top"))+e(v.css("padding-bottom"))}v.css(m.property,(q-u)+"px")})});i.each(function(){var q=h(this);q.attr("style",q.data("style-cache")||null)});if(a._maintainScroll){h(window).scrollTop((p/j)*h("html").outerHeight(true))}return this};a._applyDataApi=function(){var i={};h("[data-match-height], [data-mh]").each(function(){var k=h(this),j=k.attr("data-mh")||k.attr("data-match-height");if(j in i){i[j]=i[j].add(k)}else{i[j]=k}});h.each(i,function(){this.matchHeight(true)})};var c=function(i){if(a._beforeUpdate){a._beforeUpdate(i,a._groups)}h.each(a._groups,function(){a._apply(this.elements,this.options)});if(a._afterUpdate){a._afterUpdate(i,a._groups)}};a._update=function(k,j){if(j&&j.type==="resize"){var i=h(window).width();if(i===b){return}b=i}if(!k){c(j)}else{if(g===-1){g=setTimeout(function(){c(j);g=-1},a._throttle)}}};h(a._applyDataApi);h(window).bind("load",function(i){a._update(false,i)});h(window).bind("resize orientationchange",function(i){a._update(true,i)})});
  
/**  ScrollTo
* $('header nav a').on('click', function(e){
*     $('body, html').scrollTo( ($( $(this).attr("href") ).offset().top + 5)+'px', 800 );
*     e.preventDefault();
*     return false;
* });
*/
// ;(function(k){'use strict';k(['jquery'],function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:!0};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}}return j})}(typeof define==='function'&&define.amd?define:function(a,b){if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});

;
/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
;

/* vars */
var currentScroll = 0;
var winWidth = 0;

$(document).ready(function() {
  
    $(document).on('click', 'a[href="#"]', function(event){
        event.preventDefault();
        return false;
    });  
  
    $(window).on('load', function() {
        winWidth = document.documentElement.clientWidth;
        $('.win-width').text(winWidth); //remove on release
        waitForFinalEvent(function(){
           //onLoadFix();
        }, 10, new Date().getTime());        
    }); // --- window.load
    
    $(window).on('resize', function() {
      console.log('resize');
        winWidth = document.documentElement.clientWidth;
        $('.win-width').text(winWidth); //remove on release
        waitForFinalEvent(function(){
           //onLoadFix();
        }, 10, new Date().getTime());        
    }); // --- window.resize
    
    $(window).on('scroll', function(e) {
      currentScroll = $(window).scrollTop();
      
      if(currentScroll > 450) {
        $('.go-top').css('opacity', 1);
      } else {
        $('.go-top').css('opacity', 0);        
      }
    }); // --- window.scroll
    
/*    $(window).on("DOMMouseScroll mousewheel",function(e){  
       scrollDelta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);
    }); */
  
/* ------------------------------------------------------------------------------------------------------------------------ */
$('input:text').on('keypress', function(event) {
   if (event.which == 0) return true;
   var trg = event.target;
   var res = 0;
   if ($(trg).hasClass('digit')) if (!in_array(event.which, [8, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57])) res++;
   if ($(trg).hasClass('ceil')) if (!in_array(event.which, [8, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57])) res++;
   if ($(trg).hasClass('positive')) if (!in_array(event.which, [8, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57])) res++;
   if ($(trg).hasClass('phone')) if (!in_array(event.which, [8, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 41, 40, 32, 45])) res++;
   if (res > 0) {
      event.keyCode = 0;
      return false;
   }
});

/* ------------------------------------------------------------------------------------------------------------------------ */
if ($('form').length) {
  $('form').each(function(i) {
    var frmId = $(this).attr('id');
    var firstInput = $(this).find('input.required').get(0);
    if (firstInput) {
      $(firstInput).keyup(function() {
        var preHuman = $('#' + frmId).find('input[name="ahuman"]');
        if (!($(preHuman).length)) {
          var hiHuman = '<input type="hidden" name="ahuman" value="' + frmId + '" />';
          $('#' + frmId).append(hiHuman);
        }
      });
      $(firstInput).mouseup(function() {
        var preHuman = $('#' + frmId).find('input[name="ahuman"]');
        if (!($(preHuman).length)) {
          var hiHuman = '<input type="hidden" name="ahuman" value="' + frmId + '" />';
          $('#' + frmId).append(hiHuman);
        }
      });
      $(firstInput).focus(function() {
        var preHuman = $('#' + frmId).find('input[name="ahuman"]');
        if (!($(preHuman).length)) {
          var hiHuman = '<input type="hidden" name="ahuman" value="' + frmId + '" />';
          $('#' + frmId).append(hiHuman);
        }
      });
    }
  });
}

/* ------------------------------------------------------------------------------------------------------------------------ */
$('#order-form').validate({ // заказать
    rules: {
        //quantity: "required",
        //youinn: "required",
        phone: "required"
       /* mail: {
            required: true,
            email: true
        },   */     
    },
    messages: {

    },
    errorPlacement: function($error, $element) {
        // $element.parent().find('code.err').eq(0).text( $error.text() ).css('display', 'inline-block');
    },
    highlight: function(element, errorClass, validClass) {
        $(element).closest('div, label').addClass('error').removeClass('success');
        $(element).addClass('error').removeClass('success');
    },
    unhighlight: function(element, errorClass, validClass) {
        $(element).closest('div, label').addClass('success').removeClass('error');
        $(element).addClass('success').removeClass('error');
        $(element).closest('div, label').find('.err').hide(120);
    },
    submitHandler: function(form) {
        $(form).ajaxSubmit({
            dataType: "json",
            success: function(data) {
                $('.postMessage').html(data.message);
                $('form input[type="text"], form input[type="email"], form textarea').val('');
                $('#modalOrder').modal('hide');
                $('#modalSuccess').modal('show');               
            }
        });
    }
}); // заказать


/* ------------------------------------------------------------------------------------------------------------------------ */
$('#get-price').validate({ // получить счёт
    rules: {
        //marka: "required",
        //quantity: "required",
        //youinn: "required",
        phone: "required"
        /*mail: {
            required: true,
            email: true
        }  */    
    },
    messages: {

    },
    errorPlacement: function($error, $element) {
        // $element.parent().find('code.err').eq(0).text( $error.text() ).css('display', 'inline-block');
    },
    highlight: function(element, errorClass, validClass) {
        $(element).closest('div, label').addClass('error').removeClass('success');
        $(element).addClass('error').removeClass('success');
    },
    unhighlight: function(element, errorClass, validClass) {
        $(element).closest('div, label').addClass('success').removeClass('error');
        $(element).addClass('success').removeClass('error');
        $(element).closest('div, label').find('.err').hide(120);
    },
    submitHandler: function(form) {
        $(form).ajaxSubmit({
            dataType: "json",
            success: function(data) {
                $('.postMessage').html(data.message);
                $('form input[type="text"], form input[type="email"], form textarea').val('');
                $('#modalSuccess').modal('show');               
            }
        });
    }
}); // получить счёт

/* ------------------------------------------------------------------------------------------------------------------------ */
$('#message-form').validate({ // написать нам
    rules: {
        //name: "required",
        //phone: "required",
        mail: {
            required: true,
            email: true
        }
        //message: "required"
    },
    messages: {
        //name: "Укажите имя",
        //phone: "Укажите телефон",
        mail: {
            required: "We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
        }
        //message: "Введите текст сообщения"
    },
    errorPlacement: function($error, $element) {
        // $element.parent().find('code.err').eq(0).text( $error.text() ).css('display', 'inline-block');
    },
    highlight: function(element, errorClass, validClass) {
        $(element).closest('div, label').addClass('error').removeClass('success');
        $(element).addClass('error').removeClass('success');
    },
    unhighlight: function(element, errorClass, validClass) {
        $(element).closest('div, label').addClass('success').removeClass('error');
        $(element).addClass('success').removeClass('error');
        $(element).closest('div, label').find('.err').hide(120);
    },
    submitHandler: function(form) {
        $(form).ajaxSubmit({
            dataType: "json",
            success: function(data) {
                $('.postMessage').html(data.message);
                $('form input[type="text"], form input[type="email"], form textarea').val('');
                $('#modalMessage').modal('hide');
                $('#modalSuccess').modal('show');
                /*$('#thanks-box').lightbox_me({
                    centered: true,
                    closeSelector: '.popup-close',
                });*/
                
            }
        });
    }
}); // написать нам 

/* ------------------------------------------------------------------------------------------------------------------------ */
$('#writeus-form').validate({ // связаться с нами
    rules: {
        //name: "required",
        //phone: "required",
        mail: {
            required: true,
            email: true
        }
        //message: "required"
    },
    messages: {
       // name: "Укажите имя",
       // phone: "Укажите телефон",
        mail: {
            required: "We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
        }
        //message: "Введите текст сообщения"
    },
    errorPlacement: function($error, $element) {
        // $element.parent().find('code.err').eq(0).text( $error.text() ).css('display', 'inline-block');
    },
    highlight: function(element, errorClass, validClass) {
        $(element).closest('div, label').addClass('error').removeClass('success');
        $(element).addClass('error').removeClass('success');
    },
    unhighlight: function(element, errorClass, validClass) {
        $(element).closest('div, label').addClass('success').removeClass('error');
        $(element).addClass('success').removeClass('error');
        $(element).closest('div, label').find('.err').hide(120);
    },
    submitHandler: function(form) {
        $(form).ajaxSubmit({
            dataType: "json",
            success: function(data) {
                $('.postMessage').html(data.message);
                $('form input[type="text"], form input[type="email"], form textarea').val('');
                $('#modalWriteus').modal('hide');
                $('#modalSuccess').modal('show');
                /*$('#thanks-box').lightbox_me({
                    centered: true,
                    closeSelector: '.popup-close',
                });*/
                
            }
        });
    }
}); // связаться с нами

/* ------------------------------------------------------------------------------------------------------------------------ */
$('.go-top').on('click', function(event){
  $('body, html').scrollTo( '0px', 500 );
  return false;
});

$('.modalOpen').on('click', function(){
   var thSubj = $(this).data('subj'); 
   var thPerson = $(this).data('person');
   var isOrder = $(this).closest('.orders-tile').length;
   //console.log('subj = '+thSubj);
   $('#message-form input[name="subj"]').val(thSubj);
   $('#message-form input[name="person"]').val(thPerson);
   if(isOrder) {
      //console.log(265);
      $('#modalOrder .modal-title').text(thSubj);    
      $('#order-form input[name="subj"]').val(thSubj);
      $('#order-form input[name="person"]').val(thPerson);      
   } else {
      //console.log(270);
      $('#message-form input[name="subj"]').val(thSubj);
      $('#message-form input[name="person"]').val(thPerson);    
      $('#modalMessage .modal-title').text(thSubj);
   }
    return true;
});

      $.cartonbox({
        wrap:   '',
        source: 'cartonbox',
      });

$('input.tel, input.phone').mask('+9 (999) 999-99-99');
    
    $(window).trigger('scroll').trigger('resize');

}); // ---- /document.ready ---------------------------------------------------------------------------------------------


function onLoadFix(){
  //$('.page-footer').css('margin-top', '-'+$('.page-footer').height()+'px');
  //$('.pre-footer').css('padding-bottom', ($('.page-footer').height()+22)+'px');  
}

function in_array(what, where) {
    for(var i=0; i<where.length; i++)
        if(what == where[i])
            return true;
    return false;
}


