(()=>{var R,f,Oe,yt,z,Me,xt,K={},Le=[],wt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function V(e,t){for(var n in t)e[n]=t[n];return e}function Ne(e){var t=e.parentNode;t&&t.removeChild(e)}function he(e,t,n){var o,s,i,_={};for(i in t)i=="key"?o=t[i]:i=="ref"?s=t[i]:_[i]=t[i];if(arguments.length>2&&(_.children=arguments.length>3?R.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)_[i]===void 0&&(_[i]=e.defaultProps[i]);return J(e,_,o,s,null)}function J(e,t,n,o,s){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++Oe};return s==null&&f.vnode!=null&&f.vnode(i),i}function E(e){return e.children}function X(e,t){this.props=e,this.context=t}function q(e,t){if(t==null)return e.__?q(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?q(e):null}function He(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return He(e)}}function je(e){(!e.__d&&(e.__d=!0)&&z.push(e)&&!Y.__r++||Me!==f.debounceRendering)&&((Me=f.debounceRendering)||setTimeout)(Y)}function Y(){for(var e;Y.__r=z.length;)e=z.sort(function(t,n){return t.__v.__b-n.__v.__b}),z=[],e.some(function(t){var n,o,s,i,_,a;t.__d&&(_=(i=(n=t).__v).__e,(a=n.__P)&&(o=[],(s=V({},i)).__v=i.__v+1,ve(a,i,s,n.__n,a.ownerSVGElement!==void 0,i.__h!=null?[_]:null,o,_??q(i),i.__h),Ue(o,i),i.__e!=_&&He(i)))})}function Ve(e,t,n,o,s,i,_,a,u,p){var r,m,d,h,v,x,l,k=o&&o.__k||Le,A=k.length;for(n.__k=[],r=0;r<t.length;r++)if((h=n.__k[r]=(h=t[r])==null||typeof h=="boolean"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?J(null,h,null,null,h):Array.isArray(h)?J(E,{children:h},null,null,null):h.__b>0?J(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)!=null){if(h.__=n,h.__b=n.__b+1,(d=k[r])===null||d&&h.key==d.key&&h.type===d.type)k[r]=void 0;else for(m=0;m<A;m++){if((d=k[m])&&h.key==d.key&&h.type===d.type){k[m]=void 0;break}d=null}ve(e,h,d=d||K,s,i,_,a,u,p),v=h.__e,(m=h.ref)&&d.ref!=m&&(l||(l=[]),d.ref&&l.push(d.ref,null,h),l.push(m,h.__c||v,h)),v!=null?(x==null&&(x=v),typeof h.type=="function"&&h.__k===d.__k?h.__d=u=Te(h,u,e):u=Fe(e,h,d,k,v,u),typeof n.type=="function"&&(n.__d=u)):u&&d.__e==u&&u.parentNode!=e&&(u=q(d))}for(n.__e=x,r=A;r--;)k[r]!=null&&ze(k[r],k[r]);if(l)for(r=0;r<l.length;r++)Be(l[r],l[++r],l[++r])}function Te(e,t,n){for(var o,s=e.__k,i=0;s&&i<s.length;i++)(o=s[i])&&(o.__=e,t=typeof o.type=="function"?Te(o,t,n):Fe(n,o,o,s,o.__e,t));return t}function Fe(e,t,n,o,s,i){var _,a,u;if(t.__d!==void 0)_=t.__d,t.__d=void 0;else if(n==null||s!=i||s.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(s),_=null;else{for(a=i,u=0;(a=a.nextSibling)&&u<o.length;u+=2)if(a==s)break e;e.insertBefore(s,i),_=i}return _!==void 0?_:s.nextSibling}function bt(e,t,n,o,s){var i;for(i in n)i==="children"||i==="key"||i in t||Q(e,i,null,n[i],o);for(i in t)s&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||Q(e,i,t[i],n[i],o)}function Se(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||wt.test(t)?n:n+"px"}function Q(e,t,n,o,s){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Se(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||Se(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?De:Pe,i):e.removeEventListener(t,i?De:Pe,i);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function Pe(e){this.l[e.type+!1](f.event?f.event(e):e)}function De(e){this.l[e.type+!0](f.event?f.event(e):e)}function ve(e,t,n,o,s,i,_,a,u){var p,r,m,d,h,v,x,l,k,A,S,N,P,C=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(u=n.__h,a=t.__e=n.__e,t.__h=null,i=[a]),(p=f.__b)&&p(t);try{e:if(typeof C=="function"){for(l=t.props,k=(p=C.contextType)&&o[p.__c],A=p?k?k.props.value:p.__:o,n.__c?x=(r=t.__c=n.__c).__=r.__E:("prototype"in C&&C.prototype.render?t.__c=r=new C(l,A):(t.__c=r=new X(l,A),r.constructor=C,r.render=Ct),k&&k.sub(r),r.props=l,r.state||(r.state={}),r.context=A,r.__n=o,m=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),C.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=V({},r.__s)),V(r.__s,C.getDerivedStateFromProps(l,r.__s))),d=r.props,h=r.state,p=0;p<r._sb.length;p++)r.__h.push(r._sb[p]),r._sb=[];if(m)C.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(C.getDerivedStateFromProps==null&&l!==d&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(l,A),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(l,r.__s,A)===!1||t.__v===n.__v){r.props=l,r.state=r.__s,t.__v!==n.__v&&(r.__d=!1),r.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(y){y&&(y.__=t)}),r.__h.length&&_.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(l,r.__s,A),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(d,h,v)})}if(r.context=A,r.props=l,r.__v=t,r.__P=e,S=f.__r,N=0,"prototype"in C&&C.prototype.render)r.state=r.__s,r.__d=!1,S&&S(t),p=r.render(r.props,r.state,r.context);else do r.__d=!1,S&&S(t),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++N<25);r.state=r.__s,r.getChildContext!=null&&(o=V(V({},o),r.getChildContext())),m||r.getSnapshotBeforeUpdate==null||(v=r.getSnapshotBeforeUpdate(d,h)),P=p!=null&&p.type===E&&p.key==null?p.props.children:p,Ve(e,Array.isArray(P)?P:[P],t,n,o,s,i,_,a,u),r.base=t.__e,t.__h=null,r.__h.length&&_.push(r),x&&(r.__E=r.__=null),r.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=kt(n.__e,t,n,o,s,i,_,u);(p=f.diffed)&&p(t)}catch(y){t.__v=null,(u||i!=null)&&(t.__e=a,t.__h=!!u,i[i.indexOf(a)]=null),f.__e(y,t,n)}}function Ue(e,t){f.__c&&f.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){f.__e(o,n.__v)}})}function kt(e,t,n,o,s,i,_,a){var u,p,r,m=n.props,d=t.props,h=t.type,v=0;if(h==="svg"&&(s=!0),i!=null){for(;v<i.length;v++)if((u=i[v])&&"setAttribute"in u==!!h&&(h?u.localName===h:u.nodeType===3)){e=u,i[v]=null;break}}if(e==null){if(h===null)return document.createTextNode(d);e=s?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,d.is&&d),i=null,a=!1}if(h===null)m===d||a&&e.data===d||(e.data=d);else{if(i=i&&R.call(e.childNodes),p=(m=n.props||K).dangerouslySetInnerHTML,r=d.dangerouslySetInnerHTML,!a){if(i!=null)for(m={},v=0;v<e.attributes.length;v++)m[e.attributes[v].name]=e.attributes[v].value;(r||p)&&(r&&(p&&r.__html==p.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(bt(e,d,m,s,a),r)t.__k=[];else if(v=t.props.children,Ve(e,Array.isArray(v)?v:[v],t,n,o,s&&h!=="foreignObject",i,_,i?i[0]:n.__k&&q(n,0),a),i!=null)for(v=i.length;v--;)i[v]!=null&&Ne(i[v]);a||("value"in d&&(v=d.value)!==void 0&&(v!==e.value||h==="progress"&&!v||h==="option"&&v!==m.value)&&Q(e,"value",v,m.value,!1),"checked"in d&&(v=d.checked)!==void 0&&v!==e.checked&&Q(e,"checked",v,m.checked,!1))}return e}function Be(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){f.__e(o,n)}}function ze(e,t,n){var o,s;if(f.unmount&&f.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Be(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){f.__e(i,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&ze(o[s],t,n||typeof e.type!="function");n||e.__e==null||Ne(e.__e),e.__=e.__e=e.__d=void 0}function Ct(e,t,n){return this.constructor(e,n)}function qe(e,t,n){var o,s,i;f.__&&f.__(e,t),s=(o=typeof n=="function")?null:n&&n.__k||t.__k,i=[],ve(t,e=(!o&&n||t).__k=he(E,null,[e]),s||K,K,t.ownerSVGElement!==void 0,!o&&n?[n]:s?null:t.firstChild?R.call(t.childNodes):null,i,!o&&n?n:s?s.__e:t.firstChild,o),Ue(i,e)}R=Le.slice,f={__e:function(e,t,n,o){for(var s,i,_;t=t.__;)if((s=t.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(e)),_=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,o||{}),_=s.__d),_)return s.__E=s}catch(a){e=a}throw e}},Oe=0,yt=function(e){return e!=null&&e.constructor===void 0},X.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=V({},this.state),typeof e=="function"&&(e=e(V({},n),this.props)),e&&V(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),je(this))},X.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),je(this))},X.prototype.render=E,z=[],Y.__r=0,xt=0;var oe,M,me,We,ne=0,Ke=[],ee=[],$e=f.__b,Ie=f.__r,Ge=f.diffed,Ze=f.__c,Je=f.unmount;function ye(e,t){f.__h&&f.__h(M,e,ne||t),ne=0;var n=M.__H||(M.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:ee}),n.__[e]}function F(e){return ne=1,At(Re,e)}function At(e,t,n){var o=ye(oe++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):Re(void 0,t),function(i){var _=o.__N?o.__N[0]:o.__[0],a=o.t(_,i);_!==a&&(o.__N=[a,o.__[1]],o.__c.setState({}))}],o.__c=M,!M.u)){M.u=!0;var s=M.shouldComponentUpdate;M.shouldComponentUpdate=function(i,_,a){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(r){return r.__c});if(u.every(function(r){return!r.__N}))return!s||s.call(this,i,_,a);var p=!1;return u.forEach(function(r){if(r.__N){var m=r.__[0];r.__=r.__N,r.__N=void 0,m!==r.__[0]&&(p=!0)}}),!(!p&&o.__c.props===i)&&(!s||s.call(this,i,_,a))}}return o.__N||o.__}function U(e,t){var n=ye(oe++,3);!f.__s&&Qe(n.__H,t)&&(n.__=e,n.i=t,M.__H.__h.push(n))}function Ye(e){return ne=5,Et(function(){return{current:e}},[])}function Et(e,t){var n=ye(oe++,7);return Qe(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Mt(){for(var e;e=Ke.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(te),e.__H.__h.forEach(ge),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){typeof e.type!="function"||e.__m||e.type===E?e.__m||(e.__m=e.__&&e.__.__m?e.__.__m:""):e.__m=(e.__&&e.__.__m?e.__.__m:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),M=null,$e&&$e(e)},f.__r=function(e){Ie&&Ie(e),oe=0;var t=(M=e.__c).__H;t&&(me===M?(t.__h=[],M.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ee,n.__N=n.i=void 0})):(t.__h.forEach(te),t.__h.forEach(ge),t.__h=[])),me=M},f.diffed=function(e){Ge&&Ge(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ke.push(t)!==1&&We===f.requestAnimationFrame||((We=f.requestAnimationFrame)||jt)(Mt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ee&&(n.__=n.__V),n.i=void 0,n.__V=ee})),me=M=null},f.__c=function(e,t){t.some(function(n){try{n.__h.forEach(te),n.__h=n.__h.filter(function(o){return!o.__||ge(o)})}catch(o){t.some(function(s){s.__h&&(s.__h=[])}),t=[],f.__e(o,n.__v)}}),Ze&&Ze(e,t)},f.unmount=function(e){Je&&Je(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{te(o)}catch(s){t=s}}),n.__H=void 0,t&&f.__e(t,n.__v))};var Xe=typeof requestAnimationFrame=="function";function jt(e){var t,n=function(){clearTimeout(o),Xe&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);Xe&&(t=requestAnimationFrame(n))}function te(e){var t=M,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),M=t}function ge(e){var t=M;e.__c=e.__(),M=t}function Qe(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Re(e,t){return typeof t=="function"?t(e):t}function et(e,t,n){t.split&&(t=t.split("."));for(var o=0,s=t.length,i=e,_,a;o<s&&(a=t[o++],!(a==="__proto__"||a==="constructor"||a==="prototype"));)i=i[a]=o===s?n:typeof(_=i[a])==typeof t?_:t[o]*0!==0||!!~(""+t[o]).indexOf(".")?{}:[]}var St=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,lt=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,re=/[\s\n\\/='"\0<>]/,at=/^xlink:?./,Pt=/["&<]/;function I(e){if(Pt.test(e+="")===!1)return e;for(var t=0,n=0,o="",s="";n<e.length;n++){switch(e.charCodeAt(n)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 60:s="&lt;";break;default:continue}n!==t&&(o+=e.slice(t,n)),o+=s,t=n+1}return n!==t&&(o+=e.slice(t,n)),o}var tt=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"	"))},nt=function(e,t,n){return String(e).length>(t||40)||!n&&String(e).indexOf(`
`)!==-1||String(e).indexOf("<")!==-1},ot={},Dt=/([A-Z])/g;function ct(e){var t="";for(var n in e){var o=e[n];o!=null&&o!==""&&(t&&(t+=" "),t+=n[0]=="-"?n:ot[n]||(ot[n]=n.replace(Dt,"-$1").toLowerCase()),t=typeof o=="number"&&St.test(n)===!1?t+": "+o+"px;":t+": "+o+";")}return t||void 0}function we(e,t){return Array.isArray(t)?t.reduce(we,e):t!=null&&t!==!1&&e.push(t),e}function rt(){this.__d=!0}function ut(e,t){return{__v:e,context:t,props:e.props,setState:rt,forceUpdate:rt,__d:!0,__h:[]}}function ie(e,t){var n=e.contextType,o=n&&t[n.__c];return n!=null?o?o.props.value:n.__:t}var xe=[];function W(e,t,n,o,s,i){if(e==null||typeof e=="boolean")return"";if(typeof e!="object")return typeof e=="function"?"":I(e);var _=n.pretty,a=_&&typeof _=="string"?_:"	";if(Array.isArray(e)){for(var u="",p=0;p<e.length;p++)_&&p>0&&(u+=`
`),u+=W(e[p],t,n,o,s,i);return u}if(e.constructor!==void 0)return"";var r,m=e.type,d=e.props,h=!1;if(typeof m=="function"){if(h=!0,!n.shallow||!o&&n.renderRootComponent!==!1){if(m===E){var v=[];return we(v,e.props.children),W(v,t,n,n.shallowHighOrder!==!1,s,i)}var x,l=e.__c=ut(e,t);f.__b&&f.__b(e);var k=f.__r;if(m.prototype&&typeof m.prototype.render=="function"){var A=ie(m,t);(l=e.__c=new m(d,A)).__v=e,l._dirty=l.__d=!0,l.props=d,l.state==null&&(l.state={}),l._nextState==null&&l.__s==null&&(l._nextState=l.__s=l.state),l.context=A,m.getDerivedStateFromProps?l.state=Object.assign({},l.state,m.getDerivedStateFromProps(l.props,l.state)):l.componentWillMount&&(l.componentWillMount(),l.state=l._nextState!==l.state?l._nextState:l.__s!==l.state?l.__s:l.state),k&&k(e),x=l.render(l.props,l.state,l.context)}else for(var S=ie(m,t),N=0;l.__d&&N++<25;)l.__d=!1,k&&k(e),x=m.call(e.__c,d,S);return l.getChildContext&&(t=Object.assign({},t,l.getChildContext())),f.diffed&&f.diffed(e),W(x,t,n,n.shallowHighOrder!==!1,s,i)}m=(r=m).displayName||r!==Function&&r.name||function(fe){var pe=(Function.prototype.toString.call(fe).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!pe){for(var Z=-1,de=xe.length;de--;)if(xe[de]===fe){Z=de;break}Z<0&&(Z=xe.push(fe)-1),pe="UnnamedComponent"+Z}return pe}(r)}var P,C,y="<"+m;if(d){var j=Object.keys(d);n&&n.sortAttributes===!0&&j.sort();for(var H=0;H<j.length;H++){var g=j[H],b=d[g];if(g!=="children"){if(!re.test(g)&&(n&&n.allAttributes||g!=="key"&&g!=="ref"&&g!=="__self"&&g!=="__source")){if(g==="defaultValue")g="value";else if(g==="defaultChecked")g="checked";else if(g==="defaultSelected")g="selected";else if(g==="className"){if(d.class!==void 0)continue;g="class"}else s&&at.test(g)&&(g=g.toLowerCase().replace(/^xlink:?/,"xlink:"));if(g==="htmlFor"){if(d.for)continue;g="for"}g==="style"&&b&&typeof b=="object"&&(b=ct(b)),g[0]==="a"&&g[1]==="r"&&typeof b=="boolean"&&(b=String(b));var w=n.attributeHook&&n.attributeHook(g,b,t,n,h);if(w||w==="")y+=w;else if(g==="dangerouslySetInnerHTML")C=b&&b.__html;else if(m==="textarea"&&g==="value")P=b;else if((b||b===0||b==="")&&typeof b!="function"){if(!(b!==!0&&b!==""||(b=g,n&&n.xml))){y=y+" "+g;continue}if(g==="value"){if(m==="select"){i=b;continue}m==="option"&&i==b&&d.selected===void 0&&(y+=" selected")}y=y+" "+g+'="'+I(b)+'"'}}}else P=b}}if(_){var O=y.replace(/\n\s*/," ");O===y||~O.indexOf(`
`)?_&&~y.indexOf(`
`)&&(y+=`
`):y=O}if(y+=">",re.test(m))throw new Error(m+" is not a valid HTML tag name in "+y);var B,gt=lt.test(m)||n.voidElements&&n.voidElements.test(m),L=[];if(C)_&&nt(C)&&(C=`
`+a+tt(C,a)),y+=C;else if(P!=null&&we(B=[],P).length){for(var le=_&&~y.indexOf(`
`),Ae=!1,ae=0;ae<B.length;ae++){var ce=B[ae];if(ce!=null&&ce!==!1){var T=W(ce,t,n,!0,m==="svg"||m!=="foreignObject"&&s,i);if(_&&!le&&nt(T)&&(le=!0),T)if(_){var Ee=T.length>0&&T[0]!="<";Ae&&Ee?L[L.length-1]+=T:L.push(T),Ae=Ee}else L.push(T)}}if(_&&le)for(var ue=L.length;ue--;)L[ue]=`
`+a+tt(L[ue],a)}if(L.length||C)y+=L.join("");else if(n&&n.xml)return y.substring(0,y.length-1)+" />";return!gt||B||C?(_&&~y.indexOf(`
`)&&(y+=`
`),y=y+"</"+m+">"):y=y.replace(/>$/," />"),y}var Ot={shallow:!0};G.render=G;var Lt=function(e,t){return G(e,t,Ot)},it=[];function G(e,t,n){t=t||{};var o=f.__s;f.__s=!0;var s,i=he(E,null);return i.__k=[e],s=n&&(n.pretty||n.voidElements||n.sortAttributes||n.shallow||n.allAttributes||n.xml||n.attributeHook)?W(e,t,n):$(e,t,!1,void 0,i),f.__c&&f.__c(e,it),f.__s=o,it.length=0,s}function Nt(e,t){return e==="className"?"class":e==="htmlFor"?"for":e==="defaultValue"?"value":e==="defaultChecked"?"checked":e==="defaultSelected"?"selected":t&&at.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function Ht(e,t){return e==="style"&&t!=null&&typeof t=="object"?ct(t):e[0]==="a"&&e[1]==="r"&&typeof t=="boolean"?String(t):t}var st=Array.isArray,_t=Object.assign;function $(e,t,n,o,s){if(e==null||e===!0||e===!1||e==="")return"";if(typeof e!="object")return typeof e=="function"?"":I(e);if(st(e)){var i="";s.__k=e;for(var _=0;_<e.length;_++)i+=$(e[_],t,n,o,s);return i}if(e.constructor!==void 0)return"";e.__=s,f.__b&&f.__b(e);var a=e.type,u=e.props;if(typeof a=="function"){var p;if(a===E)p=u.children;else{p=a.prototype&&typeof a.prototype.render=="function"?function(j,H){var g=j.type,b=ie(g,H),w=new g(j.props,b);j.__c=w,w.__v=j,w.__d=!0,w.props=j.props,w.state==null&&(w.state={}),w.__s==null&&(w.__s=w.state),w.context=b,g.getDerivedStateFromProps?w.state=_t({},w.state,g.getDerivedStateFromProps(w.props,w.state)):w.componentWillMount&&(w.componentWillMount(),w.state=w.__s!==w.state?w.__s:w.state);var O=f.__r;return O&&O(j),w.render(w.props,w.state,w.context)}(e,t):function(j,H){var g,b=ut(j,H),w=ie(j.type,H);j.__c=b;for(var O=f.__r,B=0;b.__d&&B++<25;)b.__d=!1,O&&O(j),g=j.type.call(b,j.props,w);return g}(e,t);var r=e.__c;r.getChildContext&&(t=_t({},t,r.getChildContext()))}var m=$(p=p!=null&&p.type===E&&p.key==null?p.props.children:p,t,n,o,e);return f.diffed&&f.diffed(e),e.__=void 0,f.unmount&&f.unmount(e),m}var d,h,v="<";if(v+=a,u)for(var x in d=u.children,u){var l=u[x];if(!(x==="key"||x==="ref"||x==="__self"||x==="__source"||x==="children"||x==="className"&&"class"in u||x==="htmlFor"&&"for"in u||re.test(x))){if(l=Ht(x=Nt(x,n),l),x==="dangerouslySetInnerHTML")h=l&&l.__html;else if(a==="textarea"&&x==="value")d=l;else if((l||l===0||l==="")&&typeof l!="function"){if(l===!0||l===""){l=x,v=v+" "+x;continue}if(x==="value"){if(a==="select"){o=l;continue}a!=="option"||o!=l||"selected"in u||(v+=" selected")}v=v+" "+x+'="'+I(l)+'"'}}}var k=v;if(v+=">",re.test(a))throw new Error(a+" is not a valid HTML tag name in "+v);var A="",S=!1;if(h)A+=h,S=!0;else if(typeof d=="string")A+=I(d),S=!0;else if(st(d)){e.__k=d;for(var N=0;N<d.length;N++){var P=d[N];if(P!=null&&P!==!1){var C=$(P,t,a==="svg"||a!=="foreignObject"&&n,o,e);C&&(A+=C,S=!0)}}}else if(d!=null&&d!==!1&&d!==!0){e.__k=[d];var y=$(d,t,a==="svg"||a!=="foreignObject"&&n,o,e);y&&(A+=y,S=!0)}if(f.diffed&&f.diffed(e),e.__=void 0,f.unmount&&f.unmount(e),S)v+=A;else if(lt.test(a))return k+" />";return v+"</"+a+">"}G.shallowRender=Lt;var se=G;function ft(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ft(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Vt(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=ft(e))&&(o&&(o+=" "),o+=t);return o}var D=Vt;var Tt=0;function c(e,t,n,o,s){var i,_,a={};for(_ in t)_=="ref"?i=t[_]:a[_]=t[_];var u={type:e,props:a,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Tt,__source:s,__self:o};if(typeof e=="function"&&(i=e.defaultProps))for(_ in i)a[_]===void 0&&(a[_]=i[_]);return f.vnode&&f.vnode(u),u}function be({components:e,selectedBlock:t,updateSelectedBlock:n}){let{name:o,description:s,icon:i,properties:_}=t?e[t.type]:{name:"",description:"",icon:""},a=(u,p,r)=>{let m={name:u,id:u,value:r,onChange:v=>n(u,v.target.value)},d=(()=>{if(typeof p=="string")return p.length>30?c("textarea",{...m,rows:"4",children:r}):c("input",{...m});if(typeof p=="number")return c("input",{...m,onChange:v=>n(u,parseInt(v.target.value)),type:"number"});if(typeof p=="boolean")return c(E,{children:[c("label",{class:D("h-8 w-max p-1 rounded-full cursor-pointer select-none",r?"bg-blue-200":"bg-gray-50"),for:u,children:c("span",{class:D("block bg-white rounded-full transition-all w-6 h-6",r?"ml-6":"mr-6")})}),c("input",{...m,onChange:v=>n(u,Boolean(v.target.checked)),checked:r,class:"hidden",type:"checkbox"})]});if(Array.isArray(p)&&typeof p[0]=="string")return c("div",{class:"bg-gray-50 p-2 h-10 flex gap-2",children:p.map(v=>c("button",{class:D("font-medium text-xs",r===v?"bg-blue-200":"bg-white"),onClick:x=>{x.preventDefault(),n(u,v)},children:v}))})})(),h=u.split(".");return c("div",{class:"pt-4 px-4 grid gap-2",children:[c("label",{class:"text-xs capitalize select-none",for:u,children:h.pop().split("_").join(" ")}),d]})};return c("div",{class:"h-full overflow-y-auto",children:[c("h1",{class:"p-4 pb-0 font-medium text-gray-700 text-xs  border-solid border-gray-200",children:"Section"}),t&&c(E,{children:[c("div",{class:"p-4 text-xs border-b border-solid border-gray-200 grid gap-2 cols-l",children:[c("div",{children:i}),c("div",{class:"grid gap-2",children:[c("span",{class:"font-medium ",children:o}),c("span",{class:"text-gray-700",children:s})]})]}),c("h2",{class:"p-4 pb-0 text-xs font-medium text-gray-800",children:"Properties"}),Object.entries(t.properties).map(([u,p])=>a(u,_[u],p))]})]})}function pt(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})})}function dt(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4",children:c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})})}function ht(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4",children:c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function vt(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4",children:c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}function Ft(e){let t={};return Object.entries(e).forEach(([n,o])=>{Array.isArray(o)&&typeof o[0]!="object"?t[n]=o[0]:t[n]=o}),t}function _e({components:e,onClick:t,open:n}){let[o,s]=F(!1),i=o||n;return U(()=>{if(o){let _=()=>s(!1);return document.addEventListener("click",_),()=>document.removeEventListener("click",_)}},[o]),c(E,{children:[c("button",{class:D("relative mx-16 z-20 w-[calc(100%-8rem)] py-2 px-0 grid justify-center text-transparent bg-opacity-50 -my-[21px] bg-transparent transition hover:text-black hover:bg-blue-100/50",i&&"!text-black !bg-blue-100/50"),onClick:()=>s(!0),children:c(pt,{})}),i&&c("div",{class:"relative mt-[35px] mb-4 flex justify-center z-50 w-full",children:c("div",{onClick:_=>_.stopPropagation(),class:"border border-solid border-gray-200 p-4 bg-white",children:[c("h1",{class:"mb-4 text-gray-800 text-xs",children:"Add Section"}),c("div",{class:"grid grid-cols-3 gap-2 max-h-64 overflow-y-auto",children:Object.entries(e).map(([_,{name:a,icon:u,properties:p}])=>c("button",{class:"hover:bg-gray-50 active:bg-gray-100 grid w-full",onClick:r=>{s(!1),r.stopPropagation(),t(JSON.parse(JSON.stringify({key:crypto.randomUUID(),type:_,properties:Ft(p)})))},children:[c("span",{class:"flex justify-center",children:u}),c("span",{class:"flex justify-center  text-sm",children:a})]}))})]})})]})}function ke({setSelectedBlock:e,isSelected:t,block:n,html:o}){let s=Ye(),[i,_]=F();return U(()=>{if(s.current){let a=s.current.attachShadow({mode:"open"}),u=document.createElement("link");u.setAttribute("href","style.css"),u.setAttribute("rel","stylesheet"),a.appendChild(u);let p=document.createElement("div");a.appendChild(p),_(p)}},[s]),U(()=>{i&&(i.innerHTML=o)},[i,o]),c("div",{ref:s,class:D("bg-white",t&&"outline outline-blue-200 z-10"),onClick:()=>{e(n)}})}function Ce({components:e,blocks:t,setBlocks:n,selectedBlock:o,setSelectedBlock:s}){let i=(_,a)=>{let u=t.slice();a!==void 0?u.splice(a,0,_):u.push(_),n(u),s(_)};return c("div",{class:"bg-gray-100 py-16 overflow-y-auto max-h-full",onClick:()=>{s(null)},children:[t.map((_,a)=>{let{type:u,properties:p}=_,{component:r,name:m}=e[u],d=o===_,h=()=>{let l=t.slice(),[k]=l.splice(a,1);l.splice(a-1,0,k),n(l)},v=()=>{let l=t.slice(),[k]=l.splice(a,1);l.splice(a+1,0,k),n(l)},x=()=>{if(window.confirm(`Delete '${m}' block?`)){d&&s(null);let l=t.slice();l.splice(a,1),n(l)}};return c(E,{children:[c(_e,{onClick:l=>i(l,a),components:e}),c("div",{class:"group grid grid-cols-[4rem,auto] mr-16",onClick:l=>l.stopPropagation(),children:[c("div",{class:D("relative grid justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity"),children:c("div",{class:"grid",children:[c("button",{onClick:h,children:c(dt,{})}),c("button",{onClick:x,class:"text-red-800",children:c(vt,{})}),c("button",{onClick:v,children:c(ht,{})})]})}),c(ke,{block:_,isSelected:d,setSelectedBlock:s,html:se(c(r,{...p}))})]})]},_.key)}),c(_e,{components:e,onClick:i,open:Boolean(!t.length)})]})}function mt({components:e,initialBlocks:t=[],setDataCallback:n,setHTMLCallback:o}){let[s,i]=F(t),[_,a]=F(null),u=(p,r)=>{et(_.properties,p,r),i(s.slice())};return U(()=>{n(()=>s),o(()=>s.map(({type:p,properties:r})=>{let{component:m}=e[p];return se(c(m,{...r}))}).join(""))},[s]),c("div",{class:"grid cols-r h-full",children:[c(Ce,{components:e,blocks:s,setBlocks:i,selectedBlock:_,setSelectedBlock:a}),c("div",{class:"w-[20vw] min-w-[350px] border-l border-solid border-gray-200",children:c(be,{components:e,selectedBlock:_,updateSelectedBlock:u})})]})}var Ut={cta:{name:"Call to Action",description:"Single column section with a title, paragraph and button.",component:({title:e,subtitle:t,label:n,align:o})=>{let s={left:"text-left",center:"text-center",right:"text-right"}[o],i={left:"justify-start",center:"justify-center",right:"justify-end"}[o];return c("section",{class:D("py-24 grid gap-8 px-6 md:px-[10%] lg:px-[20%]",s,i),children:[c("h1",{class:"font-display text-6xl max-w-lg",children:e}),c("p",{class:"text-sm max-w-lg",children:t}),c("div",{class:D("flex",i),children:c("button",{class:"font-medium border-gray-400 border border-solid",children:n})})]})},properties:{title:"Lorem ipsum dolor sit amet, consectetur",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",label:"Get Started",align:["left","center","right"]},icon:c("svg",{class:"w-6 h-6",width:"300",height:"300",viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c("rect",{x:"11",y:"52",width:"277",height:"55",fill:"currentColor"}),c("rect",{x:"11",y:"136",width:"219.074",height:"13.0574",fill:"currentColor"}),c("rect",{x:"11",y:"157",width:"177",height:"13",fill:"currentColor"}),c("rect",{x:"11",y:"178",width:"200",height:"13",fill:"currentColor"}),c("rect",{x:"11",y:"220",width:"94.3033",height:"27.5656",rx:"6",fill:"currentColor"})]})}};document.addEventListener("DOMContentLoaded",()=>{let e,t;document.getElementById("data-button").addEventListener("click",()=>{alert(JSON.stringify(t(),null,2))}),document.getElementById("html-button").addEventListener("click",()=>{alert(e())}),qe(c(mt,{components:Ut,setDataCallback:n=>{t=n},setHTMLCallback:n=>{e=n}}),document.getElementById("page-builder"))});})();
//# sourceMappingURL=builder.js.map
