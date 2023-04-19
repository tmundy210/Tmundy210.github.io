"use strict";(self.webpackChunkmy_first_gatsby_site=self.webpackChunkmy_first_gatsby_site||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return W},_:function(){return l},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],x=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:s().object.isRequired,alt:N},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],I=new Set;let _,O;const P=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=l(e,T);const{width:y,height:b,layout:w}=n,v=c(y,b,w),{style:E,className:k}=v,L=l(v,j),C=(0,r.useRef)(),x=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const N=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(x);if(O&&I.has(x))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(i({isLoading:!0,isLoaded:I.has(x),image:n},h)),I.has(x)||(t=requestAnimationFrame((()=>{C.current&&(r=l(C.current,x,I,s,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{I.has(x)&&O&&(C.current.innerHTML=O(i({isLoading:I.has(x),isLoaded:I.has(x),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},L,{style:i({},E,s,{backgroundColor:u}),className:k+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(P,e):null}));R.propTypes=S,R.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,q);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const z=A((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=l(e,L);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=i({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:v,height:N,layout:S,images:T,placeholder:j,backgroundColor:I}=o,_=c(v,N,S),{style:O,className:P}=_,R=l(_,C),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?x(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>i({},e,{srcSet:x(e.srcSet)})))),r.createElement(t,i({},R,{style:i({},O,s,{backgroundColor:h}),className:P+(a?" "+a:"")}),r.createElement(g,{layout:S,width:v,height:N},r.createElement(E,i({},d(j,!1,S,v,N,I,y,b))),r.createElement(k,i({"data-gatsby-image-ssr":"",className:p},w,u("eager"===m,!1,q,m,f)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),K={src:s().string.isRequired,alt:N,width:M,height:M,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=K;const W=A(R);W.displayName="StaticImage",W.propTypes=K},5169:function(e,t,a){a.d(t,{Z:function(){return d}});var r={};a.r(r),a.d(r,{nC:function(){return i},nP:function(){return l},up:function(){return o},FV:function(){return c},y7:function(){return u}});var n=a(7294),s=a(1883),i="layout-module--container--8cb8c",l="layout-module--heading--032c0",o="layout-module--nav-link-item--fe234",c="layout-module--nav-links--fe802",u="layout-module--site-title--9a9b3";var d=e=>{let{pageTitle:t,children:a}=e;const d=(0,s.K2)("3159585216");return n.createElement("div",{className:i},n.createElement("header",{className:u},d.site.siteMetadata.title),n.createElement("nav",null,n.createElement("ul",{className:c},n.createElement("li",{className:o},n.createElement(s.rU,{to:"/",className:r.navLinkText},"Home")),n.createElement("li",{className:o},n.createElement(s.rU,{to:"/about",className:r.navLinkText},"About")),n.createElement("li",{className:o},n.createElement(s.rU,{to:"/blog",className:r.navLinkText},"Blog")))),n.createElement("main",null,n.createElement("h1",{className:l},t),a))}},1356:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{let{title:t}=e;const a=(0,n.K2)("3159585216");return r.createElement("title",null,t," | ",a.site.siteMetadata.title)}},6558:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l}});var r=a(7294),n=a(5169),s=a(8032),i=a(1356);const l=()=>r.createElement(i.Z,{title:"Home Page"});t.default=()=>r.createElement(n.Z,{pageTitle:"Home Page"},r.createElement("p",null,"I'm making this by following the Gatsby Tutorial."),r.createElement(s.S,{alt:"Not Clifford, just some angry pink blob",src:"../images/Kirby.jpg",__imageData:a(3254)}))},3254:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/reponame/static/f22d537d331b4bff485e0807c92c4e48/b3149/Kirby.jpg","srcSet":"/reponame/static/f22d537d331b4bff485e0807c92c4e48/52009/Kirby.jpg 270w,\\n/reponame/static/f22d537d331b4bff485e0807c92c4e48/a0705/Kirby.jpg 540w,\\n/reponame/static/f22d537d331b4bff485e0807c92c4e48/b3149/Kirby.jpg 1080w","sizes":"(min-width: 1080px) 1080px, 100vw"},"sources":[{"srcSet":"/reponame/static/f22d537d331b4bff485e0807c92c4e48/2dd30/Kirby.webp 270w,\\n/reponame/static/f22d537d331b4bff485e0807c92c4e48/04a13/Kirby.webp 540w,\\n/reponame/static/f22d537d331b4bff485e0807c92c4e48/2eb44/Kirby.webp 1080w","type":"image/webp","sizes":"(min-width: 1080px) 1080px, 100vw"}]},"width":1080,"height":1440}')}}]);
//# sourceMappingURL=component---src-pages-index-js-6b272ba2a925edee4e90.js.map