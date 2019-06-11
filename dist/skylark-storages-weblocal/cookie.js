/**
 * skylark-storages-weblocal - The skylarkjs web local storage classes library.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-langx/langx","./storages"],function(e,n){function t(){return t}return e.mixin(t,{get:function(e){return sKey&&this.has(e)?unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1")):null},has:function(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},list:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),n=0;n<e.length;n++)e[n]=unescape(e[n]);return e},remove:function(e,n){e&&this.has(e)&&(document.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; path="+n:""))},set:function(n,t,s,i,a,o){if(n&&!/^(?:expires|max\-age|path|domain|secure)$/i.test(n)){var c=e.type(s);if("number"===c){var r=Date.now();r.setTime(r.getTime()+24*expire*60*60*1e3),s=r}else"string"===c&&(s=new Date(Date.now()+e.parseMilliSeconds(s)));document.cookie=escape(n)+"="+escape(t)+(s?"; domain="+s.toGMTString():"")+(a?"; domain="+a:"")+(i?"; path="+i:"")+(o?"; secure":"")}}}),n.cookie=t});
//# sourceMappingURL=sourcemaps/cookie.js.map
