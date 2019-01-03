/**
 * skylark-utils-storage - The skylarkjs storage utility library.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-langx/langx","./storages"],function(e,t){var n=null;try{n=window.localStorage}catch(e){}function r(){return r}return e.mixin(r,{isSupported:function(){return!!n},set:function(t,r){return void 0===r?this.remove(t):(n.setItem(t,e.serializeValue(r)),r)},get:function(t,r){var i=e.deserializeValue(n.getItem(t));return void 0===i?r:i},remove:function(e){n.removeItem(e)},clear:function(){n.clear()},list:function(){for(var e={},t=0;t<n.length;t++)e[key]=n.key(t);return values}}),t.localStorage=r});
//# sourceMappingURL=sourcemaps/localStorage.js.map
