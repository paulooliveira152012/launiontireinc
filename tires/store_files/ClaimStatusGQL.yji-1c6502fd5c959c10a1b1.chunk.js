(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[94591],{556262:e=>{e.exports={"bullet--dark":"bullet--dark__09f24__iJ3M2","bullet--light":"bullet--light__09f24__TY0D4"}},31434:(e,a,s)=>{"use strict";s.r(a),s.d(a,{CLAIM_STATUS_QUERY:()=>D,default:()=>A});var i=s(87363),t=s.n(i),l=s(882189),r=s(182145),n=s(970938),o=s(925388),c=s(473550),d=s.n(c),u=s(979186),m=s(68850),b=s(657633),_=s(731709);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},g.apply(this,arguments)}const p=function(e){return(0,_.jsx)(b.Z,g({svg:'<svg width="16" height="16" class="icon_svg"><path d="M8 1.25A6.75 6.75 0 1 0 14.75 8 6.757 6.757 0 0 0 8 1.25Zm3.406 5.48-3.6 3.6a.75.75 0 0 1-1.06 0L5.099 8.684a.75.75 0 0 1 1.06-1.06l1.117 1.115 3.07-3.07a.75.75 0 0 1 1.06 1.061Z"/></svg>',name:"16x16_claim_filled_v2",v2:!0},e))};var h=s(442082);const x=function(e){return(0,_.jsx)(h.Z,e)};var C=s(269703),k=s(556262),y=s.n(k);const w=({isClaimableByLocalOwner:e,isClaimed:a,isDarkBackground:s,claimUrl:i})=>{const l=!a||e;let r,n,o;return a?(r=s?"dark-blue-light":"blue-dark",o=(0,C.ag)("Claimed"),n=(0,_.jsx)(p,{color:r})):(r=s?"white":"black-light",o=(0,C.ag)("Unclaimed"),n=(0,_.jsx)(x,{color:r})),(0,_.jsx)(u.Z,{nowrap:!0},(0,_.jsx)(m.Text,{bulletAfter:!0,className:d()({[y()["bullet--dark"]]:!s,[y()["bullet--light"]]:s}),color:r,inline:!0,size:"large",weight:"semibold"},a&&(0,_.jsx)(t().Fragment,null,n," "),l?(0,_.jsx)(m.Link,{href:i,color:"inherit",size:"inherit",target:"_blank"},o):o,!a&&(0,_.jsx)(t().Fragment,null," ",n)))};var j=s(563798),v=s(469526),L=s(658690);const f=({isClaimed:e,isClaimableByLocalOwner:a,claimUrl:s,localeCode:i,openModal:l})=>{const r=!e||a,n=(0,v.CH)(),o=(0,L.Z)();let c="status_quo";r&&(c=o("yelp.www.biz_details.show_value_proactively_to_unclaimed_business.variation"));const d=()=>["secondary_cta_link_to_y4b","secondary_cta_opens_modal"].includes(c),b=({cta:e,target:a})=>{n.logEvent(["biz","biz_details_unclaimed_cta_tracking","1.1.0"],{component:"claim_status",cta:e,target:a})};return(0,_.jsx)(u.Z,{style:{width:"300px"}},r?(0,_.jsx)(t().Fragment,null,(0,_.jsx)(m.Text,{paragraph:!0,bold:!0,color:"white"},e?(0,C.ag)("This business is eligible to be claimed by a local representative in addition to corporate."):(0,C.ag)("This business has not yet been claimed by the owner or a representative.")),(0,_.jsx)(j.Trans,{id:(0,C.ag)("<0><1>Claim this business </1>to view business statistics, receive messages from prospective customers, and respond to reviews.</0>",{}).toString(),components:[(0,_.jsx)(m.Text,{paragraph:d(),color:"white"}),(0,_.jsx)(m.Link,{href:s,target:"_blank",role:"link",handleClick:e=>{e.preventDefault(),"primary_cta_opens_modal"===c?(b({cta:"primary",target:"modal"}),l()):(b({cta:"primary",target:"claim"}),window.open(s,"_blank"))}})]}),d()&&(0,_.jsx)(j.Trans,{id:(0,C.ag)("<0><1>Explore benefits </1> to learn more.</0>",{}).toString(),components:[(0,_.jsx)(m.Text,{color:"white"}),(0,_.jsx)(m.Link,{href:"https://business.yelp.com/products/business-page/",target:"_blank",role:"link",handleClick:e=>{e.preventDefault(),"secondary_cta_opens_modal"===c?(b({cta:"secondary",target:"modal"}),l()):(b({cta:"secondary",target:"y4b"}),window.location.assign("https://business.yelp.com/products/business-page/"))}})]})):(0,_.jsx)(j.Trans,{id:(0,C.ag)("<0>This business has been claimed by the owner or a representative. <1>Learn more</1></0>",{}).toString(),components:[(0,_.jsx)(m.Text,{color:"white"}),(0,_.jsx)(m.Link,{href:`https://www.yelp-support.com/article/000032392?l=${i}`,target:"_blank"})]}))};var B=s(984235);const O=t().memo((e=>{const{businessId:a,isClaimableByLocalOwner:s,isClaimed:i,isDarkBackground:l,localeCode:r}=e,c=(0,o.Z)(a,r,"claim_status_link_react"),d=(0,o.Z)(a,r,"claim_status_hovercard_react"),[u,m]=t().useState(!1);return(0,_.jsx)(t().Fragment,null,u&&(0,_.jsx)(B.Z,{claimUrl:d,businessId:a,onClose:()=>m(!1)}),(0,_.jsx)(n.Z,{backgroundColor:"black-regular",zIndex:u?2:0,trigger:(0,_.jsx)(w,{claimUrl:c,isClaimableByLocalOwner:s,isClaimed:i,isDarkBackground:l})},(0,_.jsx)(f,{claimUrl:d,isClaimableByLocalOwner:s,isClaimed:i,localeCode:r,openModal:()=>m(!0)})))}));var T=s(924244);const D=r.ZP`
    query GetBusinessClaimability($BizEncId: String) {
        business(encid: $BizEncId) {
            claimability(useConsumerClaimability: true) {
                isClaimable
                reason
                isClaimed
            }
        }
    }
`,A=({businessId:e,localeCode:a,isDarkBackground:s})=>{const{loading:i,error:t,data:r}=(0,l.aM)(D,{variables:{BizEncId:e}});if(i)return(0,_.jsx)(T.Z,{isDarkBackground:s,uniqueKey:"claimStatus"});if(t)throw t;const n=r.business.claimability;if(!n.isClaimed&&!n.isClaimable)return null;const o=n.isClaimable&&"CLAIMABLE_BY_LOCAL_OWNER"===n.reason;return(0,_.jsx)(O,{businessId:e,isClaimableByLocalOwner:o,isClaimed:n.isClaimed,isDarkBackground:s,localeCode:a})}}}]);
//# sourceMappingURL=https://js-sourcemaps.yelpcorp.com/assets/public/ClaimStatusGQL.yji-1c6502fd5c959c10a1b1.chunk.js.map