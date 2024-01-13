"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[11228],{858642:(e,t,n)=>{n.d(t,{Z:()=>o});n(87363);var l=n(657633),r=n(731709);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}const o=function(e){return(0,r.jsx)(l.Z,s({svg:'<svg width="24" height="24" class="icon_svg"><path d="M14.25 17.58a1 1 0 0 1-.71-.3L9 12.7a1 1 0 0 1 0-1.4l4.5-4.58A1 1 0 0 1 15 6.7a1 1 0 0 1 0 1.42L11.15 12 15 15.88a1 1 0 0 1 0 1.42 1 1 0 0 1-.75.28Z"/></svg>',name:"24x24_chevron_left_v2",v2:!0},e))}},210420:(e,t,n)=>{n.d(t,{Z:()=>S});var l=n(87363),r=n.n(l),s=n(89923),o=n(618639),i=n(979186),c=n(731709),a=n(54198),u=n(541833),f=n(886175),g=n(858642),d=n(529977),h=n(269703),m=n(898165),p=n(752720),b=n(492418);var v={name:"gehmpj",styles:"cursor:pointer;&:hover{opacity:1;}"},C={name:"lo9al",styles:"left:-0.05em;"},x={name:"xproi6",styles:"right:-0.1em;"};const R=({active:e=!1,direction:t,imageHeight:n=0,onClickFunction:l,position:r="centered",size:s="small"})=>{const o="top-right"===r?u.Jv.core.grayscaleGrayRegular:u.Jv.core.grayscaleSilverDark,i="large"===s?32:24,R="left"===t?g.Z:d.Z,y=e?"black-regular":"gray-regular";return(0,c.jsx)("button",{"aria-label":String("left"===t?(0,h.ag)("Previous"):(0,h.ag)("Next")),css:(0,a.Z)([(0,c.css)(m.Oo,";appearance:none;align-items:center;background-color:",u.Jv.core.grayscaleWhite.get({alpha:e?1:.3}),";border:1px solid ",o.get({alpha:e?1:.3}),";border-radius:50%;display:flex;height:",i,"px;justify-content:center;left:","left"===t?`${(0,p.r$)(1.5)}px`:"auto",";margin:",f.$5,";mix-blend-mode:normal;opacity:0.8;padding:",f.$5,";position:absolute;right:","right"===t?`${(0,p.r$)(1.5)}px`:"auto",";text-align:center;transition:background-color 0.8s ease,opacity 0.2s ease;transform:translateY(-50%);user-select:none;width:",i,"px;",(0,b.pY)(),";"),"top-right"===r&&(0,c.css)("box-shadow:none;display:inline-flex;margin-left:","right"===t?(0,p.r$)(1.5):0,"px;position:static;transform:translateY(0);"),e&&v],""),disabled:!e,onClick:l,style:{top:n?n/2+"px":"50%"},tabIndex:0,type:"button"},(0,c.jsx)(R,{color:y,colorHover:y,css:(0,a.Z)(["left"===t&&C,"right"===t&&"large"===s&&x],""),noAlign:!0}))};var y=n(831481);var j={name:"79elbk",styles:"position:relative;"};const D=({children:e,isLeftButtonEnabled:t,isRightButtonEnabled:n,onLeftButtonClick:l,onRightButtonClick:a,onWheel:u,scrollContainerRef:f,controlPosition:g,controlSize:d,hideControls:h,imageHeight:m,className:p,itemAlign:b,itemClassName:v,itemSpacing:C,title:x})=>{const D=()=>(0,c.jsx)(r().Fragment,null,(0,c.jsx)(R,{active:t,direction:"left",imageHeight:m,onClickFunction:l,position:g,size:d}),(0,c.jsx)(R,{active:n,direction:"right",imageHeight:m,onClickFunction:a,position:g,size:d}));return(0,c.jsx)(i.Z,{css:j},("top-right"===g||x)&&(0,c.jsx)(s.Z,{"data-testid":"top-controls",gutter:2,paddingBottom:2.5,alignItems:"center"},!!x&&(0,c.jsx)(o.Z,{fill:!0},x),!h&&"top-right"===g&&(0,c.jsx)(o.Z,null,(0,c.jsx)(i.Z,{nowrap:!0,textAlign:"right"},D()))),(0,c.jsx)(y.Z,{itemAlign:b,className:p,itemClassName:v,itemSpacing:C,onWheel:u,scrollContainerRef:f},e),!h&&"centered"===g&&D())};D.defaultProps={title:null};const E=D;var L=n(158218);const S=({autoProgressionDelay:e=0,children:t,controlPosition:n="centered",controlSize:l="small",hideControls:r=!1,imageHeight:s=0,isInfinite:o,className:i,itemAlign:a="middle",itemClassName:u=null,itemSpacing:f=2,onButtonLeftClick:g=null,onButtonRightClick:d=null,onScroll:h,scrollContainerRef:m,scrollOffset:p=null,title:b=null,disableResizeScrolling:v})=>(0,c.jsx)(L.Z,{autoProgressionDelay:e,carouselComponent:E,carouselComponentProps:{controlPosition:n,controlSize:l,hideControls:r,imageHeight:s,className:i,itemAlign:a,itemClassName:u,itemSpacing:f,title:b},isInfinite:o,onButtonLeftClick:g,onButtonRightClick:d,onScroll:h,scrollContainerRef:m,scrollOffset:p,disableResizeScrolling:v},t)},158218:(e,t,n)=>{n.d(t,{Z:()=>f});var l=n(87363),r=n.n(l);const s=(e,t,n)=>{const l={hasSetDimensions:!1,isLeftButtonEnabled:n,isRightButtonEnabled:n,scrollDistance:0,scrollEnd:0,scrollOffset:0},s=r().useRef(l),[o,i]=r().useReducer(((l,r)=>{s.current={...l,...r};const o=s.current,i=e.current;if(o.hasSetDimensions&&"scrollDistance"in r&&i){i.scrollLeft!==r.scrollDistance&&i&&"scrollTo"in i&&(i.scrollTo({behavior:"smooth",left:r.scrollDistance}),t&&void 0!==r.scrollDistance&&t(r.scrollDistance))}s.current.hasSetDimensions=!0;const c=n||o.scrollDistance>0&&o.scrollEnd>0;o.isLeftButtonEnabled!==c&&(s.current.isLeftButtonEnabled=c);const a=n||o.scrollDistance<o.scrollEnd;return o.isRightButtonEnabled!==a&&(s.current.isRightButtonEnabled=a),s.current}),l);return{...o,scrollStateRef:s,setScrollState:i}},o=(e,t)=>{const n=r().useRef(null),l=r().useCallback((()=>{n.current&&clearInterval(n.current)}),[]);return r().useEffect((()=>(e&&e>0&&(n.current=setInterval(t,e)),()=>{l()})),[l,e,t]),l},i=(e,t,n,l,s)=>{const o=r().useRef(null);return r().useCallback((r=>{const i=Math.abs(r.deltaX);i>0&&(o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{t.current&&l.current.scrollDistance!==t.current.scrollLeft&&(e({scrollDistance:t.current.scrollLeft}),s&&s(t.current.scrollLeft))}),20),i>3&&n())}),[n,t,e,l,s])},c=(e,t,l,s)=>{const o=r().useRef(null);r().useEffect((()=>{t.current&&(o.current=t.current.offsetWidth)}),[t]);r().useEffect((()=>{let r;return n.g.ResizeObserver&&!s&&(r=new ResizeObserver((()=>{(()=>{const{offsetWidth:n}=t.current||{offsetWidth:0};if(o.current){let t=o.current-n+e.current.scrollDistance;t<0&&(t=0),l(t)}o.current=n})()})),t.current&&r.observe(t.current)),()=>{r&&r.disconnect()}}),[])};var a=n(731709);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},u.apply(this,arguments)}const f=({autoProgressionDelay:e,carouselComponent:t,carouselComponentProps:n,children:r,isInfinite:f=!1,onButtonLeftClick:g,onButtonRightClick:d,onScroll:h,scrollContainerRef:m,scrollOffset:p,disableResizeScrolling:b=!1})=>{const v=l.useRef(null),C=m||v,{isLeftButtonEnabled:x,isRightButtonEnabled:R,scrollDistance:y,scrollEnd:j,scrollStateRef:D,setScrollState:E}=s(C,h,f),L=l.useCallback((()=>{C.current&&E({scrollDistance:f&&C.current.scrollLeft<=0?D.current.scrollEnd:C.current.scrollLeft-D.current.scrollOffset})}),[f,C,D,E]),S=l.useCallback((()=>{C.current&&E({scrollDistance:f&&C.current.scrollLeft>=D.current.scrollEnd?0:C.current.scrollLeft+D.current.scrollOffset})}),[f,C,D,E]),k=l.useCallback((e=>{if(C.current){const{scrollLeft:t,scrollWidth:n,offsetWidth:l}=C.current;E({scrollDistance:e??t,scrollOffset:p||l,scrollEnd:n-l})}}),[p,C,E]),B=o(e,S),O=i(E,C,B,D,h);c(D,C,k,b),l.useEffect((()=>{k()}),[r,p,k]),l.useEffect((()=>{y>=j&&!f&&B()}),[B,y,j,f]);return(0,a.jsx)(t,u({isLeftButtonEnabled:x,isRightButtonEnabled:R,onLeftButtonClick:()=>{B(),L(),"function"==typeof g&&g()},onRightButtonClick:()=>{B(),S(),"function"==typeof d&&d()},onWheel:O,scrollContainerRef:C},n),r)}},831481:(e,t,n)=>{n.d(t,{Z:()=>g});var l=n(87363),r=n.n(l),s=n(607764),o=n(731709),i=n(89923),c=n(618639);const a=e=>"equal-height"===e?"normal":"bottom"===e?"flex-end":"top"===e?"flex-start":"center";var u={name:"1rjq8gp",styles:"overflow:visible;position:relative;"},f={name:"16agjqd",styles:"overflow:hidden;width:100%;"};const g=({children:e,className:t,itemAlign:n="middle",itemClassName:l,itemSpacing:g,onWheel:d,scrollContainerRef:h})=>(0,o.jsx)("div",{css:u},(0,o.jsx)("div",{css:f},(0,o.jsx)(i.Z,{css:(0,o.css)("-ms-overflow-style:none;overflow-x:auto;scrollbar-width:none;&::-webkit-scrollbar{width:",s.e3,";height:",s.e3,";display:none;}"),className:t,"data-testid":"scroll-container",alignItems:a(n),onWheel:d,tagRef:h,gutter:g},r().Children.map(e,(e=>(0,o.jsx)(c.Z,{shrink:0,className:l},e))))))}}]);
//# sourceMappingURL=https://js-sourcemaps.yelpcorp.com/assets/public/module_yelp-frontend_shared-ed7c3aa84b83da79125c5d5a3dc8168cec708e0f.yji-2a021a8aa8aad0a5dde1.js.map