var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t){t.parentNode.removeChild(t)}let s;function a(t){s=t}const f=[],i=[],l=[],d=[],p=Promise.resolve();let $=!1;function h(t){l.push(t)}let m=!1;const g=new Set;function y(){if(!m){m=!0;do{for(let t=0;t<f.length;t+=1){const n=f[t];a(n),_(n.$$)}for(a(null),f.length=0;i.length;)i.pop()();for(let t=0;t<l.length;t+=1){const n=l[t];g.has(n)||(g.add(n),n())}l.length=0}while(f.length);for(;d.length;)d.pop()();$=!1,m=!1,g.clear()}}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(h)}}const b=new Set;function x(t,n){-1===t.$$.dirty[0]&&(f.push(t),$||($=!0,p.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function k(c,f,i,l,d,p,$,m=[-1]){const g=s;a(c);const _=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f.context||(g?g.$$.context:[])),callbacks:e(),dirty:m,skip_bound:!1,root:f.target||g.$$.root};$&&$(_.root);let k=!1;if(_.ctx=i?i(c,f.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return _.ctx&&d(_.ctx[t],_.ctx[t]=o)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](o),k&&x(c,t)),n})):[],_.update(),k=!0,o(_.before_update),_.fragment=!!l&&l(_.ctx),f.target){if(f.hydrate){const t=function(t){return Array.from(t.childNodes)}(f.target);_.fragment&&_.fragment.l(t),t.forEach(u)}else _.fragment&&_.fragment.c();f.intro&&((w=c.$$.fragment)&&w.i&&(b.delete(w),w.i(v))),function(t,e,c,u){const{fragment:s,on_mount:a,on_destroy:f,after_update:i}=t.$$;s&&s.m(e,c),u||h((()=>{const e=a.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(h)}(c,f.target,f.anchor,f.customElement),y()}var w,v;a(g)}function w(n){let e;return{c(){var t;t="main",e=document.createElement(t),e.innerHTML="<h1>Doorway אבטיפוס פרוייקט</h1>"},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),k(this,t,null,w,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
