(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~302e525c"],{"228a":function(e,n,t){"use strict";function r(e,n,t){t=t||2;var r,i,o,u,v,f,h,l=n&&n.length,p=l?n[0]*t:e.length,w=x(e,0,p,t,!0),s=[];if(!w||w.next===w.prev)return s;if(l&&(w=y(e,n,w,t)),e.length>80*t){r=o=e[0],i=u=e[1];for(var c=t;c<p;c+=t)v=e[c],f=e[c+1],v<r&&(r=v),f<i&&(i=f),v>o&&(o=v),f>u&&(u=f);h=Math.max(o-r,u-i),h=0!==h?1/h:0}return a(w,s,t,r,i,h),s}function x(e,n,t,r,x){var i,a;if(x===H(e,n,t,r)>0)for(i=n;i<t;i+=r)a=U(i,e[i],e[i+1],a);else for(i=t-r;i>=n;i-=r)a=U(i,e[i],e[i+1],a);return a&&A(a,a.next)&&(F(a),a=a.next),a}function i(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!A(r,r.next)&&0!==m(r.prev,r,r.next))r=r.next;else{if(F(r),r=n=r.prev,r===r.next)break;t=!0}}while(t||r!==n);return n}function a(e,n,t,r,x,y,h){if(e){!h&&y&&s(e,r,x,y);var l,p,w=e;while(e.prev!==e.next)if(l=e.prev,p=e.next,y?u(e,r,x,y):o(e))n.push(l.i/t),n.push(e.i/t),n.push(p.i/t),F(e),e=p.next,w=p.next;else if(e=p,e===w){h?1===h?(e=v(i(e),n,t),a(e,n,t,r,x,y,2)):2===h&&f(e,n,t,r,x,y):a(i(e),n,t,r,x,y,1);break}}}function o(e){var n=e.prev,t=e,r=e.next;if(m(n,t,r)>=0)return!1;var x=e.next.next;while(x!==e.prev){if(Z(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&m(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function u(e,n,t,r){var x=e.prev,i=e,a=e.next;if(m(x,i,a)>=0)return!1;var o=x.x<i.x?x.x<a.x?x.x:a.x:i.x<a.x?i.x:a.x,u=x.y<i.y?x.y<a.y?x.y:a.y:i.y<a.y?i.y:a.y,v=x.x>i.x?x.x>a.x?x.x:a.x:i.x>a.x?i.x:a.x,f=x.y>i.y?x.y>a.y?x.y:a.y:i.y>a.y?i.y:a.y,y=d(o,u,n,t,r),h=d(v,f,n,t,r),l=e.prevZ,p=e.nextZ;while(l&&l.z>=y&&p&&p.z<=h){if(l!==e.prev&&l!==e.next&&Z(x.x,x.y,i.x,i.y,a.x,a.y,l.x,l.y)&&m(l.prev,l,l.next)>=0)return!1;if(l=l.prevZ,p!==e.prev&&p!==e.next&&Z(x.x,x.y,i.x,i.y,a.x,a.y,p.x,p.y)&&m(p.prev,p,p.next)>=0)return!1;p=p.nextZ}while(l&&l.z>=y){if(l!==e.prev&&l!==e.next&&Z(x.x,x.y,i.x,i.y,a.x,a.y,l.x,l.y)&&m(l.prev,l,l.next)>=0)return!1;l=l.prevZ}while(p&&p.z<=h){if(p!==e.prev&&p!==e.next&&Z(x.x,x.y,i.x,i.y,a.x,a.y,p.x,p.y)&&m(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function v(e,n,t){var r=e;do{var x=r.prev,a=r.next.next;!A(x,a)&&b(x,r,r.next,a)&&k(x,a)&&k(a,x)&&(n.push(x.i/t),n.push(r.i/t),n.push(a.i/t),F(r),F(r.next),r=e=a),r=r.next}while(r!==e);return i(r)}function f(e,n,t,r,x,o){var u=e;do{var v=u.next.next;while(v!==u.prev){if(u.i!==v.i&&M(u,v)){var f=I(u,v);return u=i(u,u.next),f=i(f,f.next),a(u,n,t,r,x,o),void a(f,n,t,r,x,o)}v=v.next}u=u.next}while(u!==e)}function y(e,n,t,r){var a,o,u,v,f,y=[];for(a=0,o=n.length;a<o;a++)u=n[a]*r,v=a<o-1?n[a+1]*r:e.length,f=x(e,u,v,r,!1),f===f.next&&(f.steiner=!0),y.push(g(f));for(y.sort(h),a=0;a<y.length;a++)l(y[a],t),t=i(t,t.next);return t}function h(e,n){return e.x-n.x}function l(e,n){if(n=p(e,n),n){var t=I(n,e);i(t,t.next)}}function p(e,n){var t,r=n,x=e.x,i=e.y,a=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var o=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=x&&o>a){if(a=o,o===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===a)return t;var u,v=t,f=t.x,y=t.y,h=1/0;r=t;do{x>=r.x&&r.x>=f&&x!==r.x&&Z(i<y?x:a,i,f,y,i<y?a:x,i,r.x,r.y)&&(u=Math.abs(i-r.y)/(x-r.x),k(r,e)&&(u<h||u===h&&(r.x>t.x||r.x===t.x&&w(t,r)))&&(t=r,h=u)),r=r.next}while(r!==v);return t}function w(e,n){return m(e.prev,e,n.prev)<0&&m(n.next,e,e.next)<0}function s(e,n,t,r){var x=e;do{null===x.z&&(x.z=d(x.x,x.y,n,t,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,c(x)}function c(e){var n,t,r,x,i,a,o,u,v=1;do{t=e,e=null,i=null,a=0;while(t){for(a++,r=t,o=0,n=0;n<v;n++)if(o++,r=r.nextZ,!r)break;u=v;while(o>0||u>0&&r)0!==o&&(0===u||!r||t.z<=r.z)?(x=t,t=t.nextZ,o--):(x=r,r=r.nextZ,u--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,v*=2}while(a>1);return e}function d(e,n,t,r,x){return e=32767*(e-t)*x,n=32767*(n-r)*x,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),n=16711935&(n|n<<8),n=252645135&(n|n<<4),n=858993459&(n|n<<2),n=1431655765&(n|n<<1),e|n<<1}function g(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function Z(e,n,t,r,x,i,a,o){return(x-a)*(n-o)-(e-a)*(i-o)>=0&&(e-a)*(r-o)-(t-a)*(n-o)>=0&&(t-a)*(i-o)-(x-a)*(r-o)>=0}function M(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!D(e,n)&&(k(e,n)&&k(n,e)&&E(e,n)&&(m(e.prev,e,n.prev)||m(e,n.prev,n))||A(e,n)&&m(e.prev,e,e.next)>0&&m(n.prev,n,n.next)>0)}function m(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function A(e,n){return e.x===n.x&&e.y===n.y}function b(e,n,t,r){var x=z(m(e,n,t)),i=z(m(e,n,r)),a=z(m(t,r,e)),o=z(m(t,r,n));return x!==i&&a!==o||(!(0!==x||!C(e,t,n))||(!(0!==i||!C(e,r,n))||(!(0!==a||!C(t,e,r))||!(0!==o||!C(t,n,r)))))}function C(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function z(e){return e>0?1:e<0?-1:0}function D(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&b(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function k(e,n){return m(e.prev,e,e.next)<0?m(e,n,e.next)>=0&&m(e,e.prev,n)>=0:m(e,n,e.prev)<0||m(e,e.next,n)<0}function E(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!==t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}function I(e,n){var t=new R(e.i,e.x,e.y),r=new R(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function U(e,n,t,r){var x=new R(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function F(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function R(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function H(e,n,t,r){for(var x=0,i=n,a=t-r;i<t;i+=r)x+=(e[a]-e[i])*(e[i+1]+e[a+1]),a=i;return x}r.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,a=Math.abs(H(e,0,i,t));if(x)for(var o=0,u=n.length;o<u;o++){var v=n[o]*t,f=o<u-1?n[o+1]*t:e.length;a-=Math.abs(H(e,v,f,t))}var y=0;for(o=0;o<r.length;o+=3){var h=r[o]*t,l=r[o+1]*t,p=r[o+2]*t;y+=Math.abs((e[h]-e[p])*(e[l+1]-e[h+1])-(e[h]-e[l])*(e[p+1]-e[h+1]))}return 0===a&&0===y?0:Math.abs((y-a)/a)},r.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var a=0;a<n;a++)t.vertices.push(e[x][i][a]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t},n["a"]=r},9710:function(e,n,t){"use strict";var r=1e20;function x(e,n,t){return n<t?e<n?n:e>t?t:e:e<t?t:e>n?n:e}function i(e,n){n||(n={});var t,i,o,u,v,f,y,h,l,p,w,s=null==n.cutoff?.25:n.cutoff,c=null==n.radius?8:n.radius,d=n.channel||0;if(ArrayBuffer.isView(e)||Array.isArray(e)){if(!n.width||!n.height)throw Error("For raw data width and height should be provided by options");t=n.width,i=n.height,u=e,f=n.stride?n.stride:Math.floor(e.length/t/i)}else window.HTMLCanvasElement&&e instanceof window.HTMLCanvasElement?(h=e,y=h.getContext("2d"),t=h.width,i=h.height,l=y.getImageData(0,0,t,i),u=l.data,f=4):window.CanvasRenderingContext2D&&e instanceof window.CanvasRenderingContext2D?(h=e.canvas,y=e,t=h.width,i=h.height,l=y.getImageData(0,0,t,i),u=l.data,f=4):window.ImageData&&e instanceof window.ImageData&&(l=e,t=e.width,i=e.height,u=l.data,f=4);if(o=Math.max(t,i),window.Uint8ClampedArray&&u instanceof window.Uint8ClampedArray||window.Uint8Array&&u instanceof window.Uint8Array)for(v=u,u=Array(t*i),p=0,w=v.length;p<w;p++)u[p]=v[p*f+d]/255;else if(1!==f)throw Error("Raw data can have only 1 value per pixel");var g=Array(t*i),Z=Array(t*i),M=Array(o),m=Array(o),A=Array(o+1),b=Array(o);for(p=0,w=t*i;p<w;p++){var C=u[p];g[p]=1===C?0:0===C?r:Math.pow(Math.max(0,.5-C),2),Z[p]=1===C?r:0===C?0:Math.pow(Math.max(0,C-.5),2)}a(g,t,i,M,m,b,A),a(Z,t,i,M,m,b,A);var z=window.Float32Array?new Float32Array(t*i):new Array(t*i);for(p=0,w=t*i;p<w;p++)z[p]=x(1-((g[p]-Z[p])/c+s),0,1);return z}function a(e,n,t,r,x,i,a){for(var u=0;u<n;u++){for(var v=0;v<t;v++)r[v]=e[v*n+u];for(o(r,x,i,a,t),v=0;v<t;v++)e[v*n+u]=x[v]}for(v=0;v<t;v++){for(u=0;u<n;u++)r[u]=e[v*n+u];for(o(r,x,i,a,n),u=0;u<n;u++)e[v*n+u]=Math.sqrt(x[u])}}function o(e,n,t,x,i){t[0]=0,x[0]=-r,x[1]=+r;for(var a=1,o=0;a<i;a++){var u=(e[a]+a*a-(e[t[o]]+t[o]*t[o]))/(2*a-2*t[o]);while(u<=x[o])o--,u=(e[a]+a*a-(e[t[o]]+t[o]*t[o]))/(2*a-2*t[o]);o++,t[o]=a,x[o]=u,x[o+1]=+r}for(a=0,o=0;a<i;a++){while(x[o+1]<a)o++;n[a]=(a-t[o])*(a-t[o])+e[t[o]]}}n["a"]=i}}]);