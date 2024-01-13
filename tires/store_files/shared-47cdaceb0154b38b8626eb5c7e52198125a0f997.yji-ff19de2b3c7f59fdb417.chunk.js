"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[78785],{217854:(e,t,r)=>{r.d(t,{v:()=>s});const s=e=>`${e.slice(0,2)}-${e.slice(-2).toUpperCase()}`},361475:(e,t,r)=>{r.d(t,{Z:()=>j,p:()=>g});r(87363);var s=r(182145),n=r(625198),a=r.n(n),i=r(826220);if(77845!=r.j)var o=r(689101);var l=r(305895),d=r(774554),u=r(731709);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},c.apply(this,arguments)}const p=s.ZP`
    ${i.ZP.fragments.location}

    fragment BusinessPassportSlimFields on Business {
        encid
        name
        alias
        primaryPhoto {
            encid
            photoUrl {
                url: url(size: SQUARE_MEDIUM)
            }
        }
        rating
        reviewCount
        location {
            ...BusinessPassportLocationFields
        }
    }
`,g=(e,{showAddress:t=!1}={})=>{const{alias:r,name:s,rating:n,primaryPhoto:i,reviewCount:l,location:d}=e;return a()(d,"location must be defined for BusinessPassportSlim fragment helper"),{businessUrl:`/biz/${r}`,name:s,photoSrc:i?.photoUrl?.url,rating:n,reviewCount:l,...t?{address:(0,o.wl)(d)}:{}}},m=e=>(0,u.jsx)(i.ZP,c({},e,{sections:[[d.Z.AVATAR],[d.Z.NAME,e.address?d.Z.ADDRESS:d.Z.RATING,d.Z.REACT_CHILDREN]],type:l.Z.SLIM}));m.fragments={...i.ZP.fragments,query:p},m.defaultProps={address:null,businessUrl:null,children:null,microformat:!0,photoSrc:null,reviewCount:null,showRecommended:!1,yelpGuaranteedStyle:null,suppressRatingAndReviewCount:!1};const j=77845!=r.j?m:null},652924:(e,t,r)=>{if(r.d(t,{Z:()=>n}),77845!=r.j)var s=r(361475);const n=77845!=r.j?s.Z:null},447288:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(87363);if(77845!=r.j)var n=r(412611);var a=r(731709);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},i.apply(this,arguments)}const o=77845!=r.j?({renderChildren:e,...t})=>{const[r,o]=s.useState(t.visible||!1);return{modalElement:(0,a.jsx)(n.Z,i({},t,{visible:r,onClose:()=>{o(!1)}}),e?e({closeModal:()=>{o(!1)}}):t.children),openModal:()=>{o(!0)}}}:null},159252:(e,t,r)=>{r.d(t,{Z:()=>O,y:()=>R});var s=r(54198),n=r(563798),a=r(87363),i=r.n(a),o=r(731709),l=r(182145),d=r(269703),u=r(89923),c=r(618639),p=r(473838),g=r(68850),m=r(682642),j=r(979186),h=r(90553),f=r(652924);if(77845!=r.j)var x=r(361475);var v=r(447288),w=r(116188),Z=r(377297);if(77845!=r.j)var b=r(472543);if(77845!=r.j)var y=r(856048);if(77845!=r.j)var C=r(217854);var S=r(625198),P=r.n(S);function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},T.apply(this,arguments)}const A=l.ZP`
    ${f.Z.fragments.query}

    fragment ReviewDraftFields on ReviewDraft {
        encid
        rating
        text
        timeCreated {
            utcDateTime
        }
        business {
            encid
            uploadedBusinessPhotosForLoggedInUser(first: 3) {
                edges {
                    node {
                        encid
                        photoUrl {
                            url(size: SQUARE_60)
                        }
                    }
                }
            }
            ...BusinessPassportSlimFields
        }
    }
`,R=({rating:e,text:t,timeCreated:r,business:s},n)=>(P()(s,"business must be defined for ReviewDraft fragment helper"),P()(r.utcDateTime,"utcDateTime should be defined for  ReviewDraft fragment helper"),{businessEncid:s.encid,rating:e,text:t,dateCreated:b._l.formatAbsoluteDate(r.utcDateTime,y.P.MEDIUM,(0,C.v)(n)),attachedPhotoUrls:(s.uploadedBusinessPhotosForLoggedInUser?.edges??[]).filter(Boolean).map((({node:e})=>(P()(e&&e.photoUrl&&e.photoUrl.url,"Review draft attached photo should be defined."),e.photoUrl.url))),businessPassportProps:(0,x.p)(s,{showAddress:!0})});var U={name:"8us2cu",styles:"white-space:pre-line;word-wrap:break-word;word-break:break-word !important;overflow-wrap:break-word !important;"},D={name:"1msjh1x",styles:"font-style:italic;"},_={name:"1ffap1c",styles:"display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;"};const k=({businessEncid:e,rating:t,text:r,dateCreated:a,attachedPhotoUrls:l,reviewOrigin:x,deleteReturnUrl:b,deleteCsrfToken:y,businessPassportProps:C,truncateText:S})=>{const P=b?new URLSearchParams({return_url:b}).toString():"",A=x?new URLSearchParams({review_origin:x}).toString():"",{modalElement:R,openModal:k}=(0,v.Z)({size:"small",title:(0,o.jsx)(n.Trans,{id:(0,d.ag)("Confirm remove review",{}).toString()}),renderChildren:({closeModal:t})=>(0,o.jsx)(w.Z,{action:`/writeareview/delete_draft?${P}`,method:"post","data-testid":"remove-review-draft-form"},(0,o.jsx)(Z.Z,{type:"hidden",value:e,name:"business_id"}),(0,o.jsx)(Z.Z,{type:"hidden",value:y,name:"csrftok"}),(0,o.jsx)(j.Z,null,(0,o.jsx)(g.Text,{paragraph:!0},(0,o.jsx)(n.Trans,{id:(0,d.ag)("Are you sure you want to remove this unfinished review?",{}).toString()}))),(0,o.jsx)(u.Z,{gutter:3,alignItems:"center",marginTop:2},(0,o.jsx)(c.Z,{grow:1,textAlign:"right"},(0,o.jsx)(m.Z,{htmlButtonType:"button",onClick:t,type:"link",text:(0,d.ag)("Cancel")})),(0,o.jsx)(c.Z,null,(0,o.jsx)(m.Z,{type:"primary",text:(0,d.ag)("Yes, remove review")}))))});return(0,o.jsx)(i().Fragment,null,R,(0,o.jsx)(u.Z,{direction:"column",gutter:1},(0,o.jsx)(c.Z,null,(0,o.jsx)(u.Z,{gutter:1},(0,o.jsx)(c.Z,{grow:1},C&&(0,o.jsx)(i().Fragment,null,(0,o.jsx)(j.Z,{marginBottom:2,displaySm:"none"},(0,o.jsx)(f.Z,T({},C,{suppressRatingAndReviewCount:!0}))),(0,o.jsx)(j.Z,{marginBottom:2,display:"none",displaySm:"block"},(0,o.jsx)(f.Z,T({},C,{suppressRatingAndReviewCount:!0,address:null}),(0,o.jsx)(g.Text,{color:"black-light"},(0,o.jsx)(n.Trans,{id:(0,d.ag)("Started on %{dateCreated}",{dateCreated:a}).toString()}))))),(0,o.jsx)(p.Z,{rating:t??0,size:"regular"})),(0,o.jsx)(c.Z,{displaySm:"none"},(0,o.jsx)(g.Text,{type:"timestamp",color:"black-light"},(0,o.jsx)(n.Trans,{id:(0,d.ag)("Started on %{dateCreated}",{dateCreated:a}).toString()}))))),(0,o.jsx)(c.Z,null,(0,o.jsx)(g.Text,{css:(0,s.Z)([U,!r&&D,S&&_],""),color:r?null:"black-light"},r||(0,o.jsx)(n.Trans,{id:(0,d.ag)("Add some text to this review…",{}).toString()}))),l&&l.length>0&&(0,o.jsx)(c.Z,null,(0,o.jsx)(u.Z,{gutter:1.5},l.map((e=>(0,o.jsx)(c.Z,{key:e},(0,o.jsx)(h.default,{src:e,width:60,height:60})))))),(0,o.jsx)(c.Z,{paddingTop:1},(0,o.jsx)(u.Z,{alignItems:"center",gutter:3},(0,o.jsx)(c.Z,null,(0,o.jsx)(m.Z,{type:"secondary",tagType:"link",text:(0,d.ag)("Finish my review"),href:`/writeareview/biz/${e}?${A}`})),(0,o.jsx)(c.Z,null,(0,o.jsx)(m.Z,{type:"link",onClick:k,text:(0,d.ag)("Remove draft")}))))))};k.defaultProps={truncateText:!1},k.fragments={query:A};const O=77845!=r.j?k:null},598848:(e,t,r)=>{if(r.d(t,{Z:()=>n}),77845!=r.j)var s=r(159252);const n=77845!=r.j?s.Z:null}}]);
//# sourceMappingURL=https://js-sourcemaps.yelpcorp.com/assets/public/shared-47cdaceb0154b38b8626eb5c7e52198125a0f997.yji-ff19de2b3c7f59fdb417.chunk.js.map