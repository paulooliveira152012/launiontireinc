"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[36824],{531064:(e,i,s)=>{s.r(i),s.d(i,{CLAIM_REMINDER_QUERY:()=>x,default:()=>k});var t=s(87363),r=s.n(t),n=s(182145),a=s(882189),l=s(982985),o=s(90627),c=s(352420),d=s(682642),m=s(979186),u=s(310103),b=s(68850),h=s(269703),_=s(353500),g=s(731709);const p={utm_campaign:"claim_business",utm_medium:"www",utm_source:"biz_page_unclaimed",utm_content:"biz_details_claim_reminder_react"};class C extends r().PureComponent{state={rejected:!1};submitUserAction=e=>{const{businessId:i}=this.props,s={business_id:i,...p};fetch(e,{credentials:"include",method:"POST",body:(0,l.Z)(s),headers:{"content-type":"application/x-www-form-urlencoded; charset=utf-8"}})};onClaimButtonClick=()=>{this.submitUserAction("/accept_claim_reminder")};onRejectLinkClick=e=>{e.preventDefault(),this.submitUserAction("/dismiss_claim_reminder"),this.setState({rejected:!0})};render(){const{rejected:e}=this.state,{localeCode:i,businessId:s}=this.props;if(e)return null;const t=((e,i)=>{const s=new _.Z(`https://biz.yelp.com/signup/${e}/account?hr=${i}`);return Object.keys(p).forEach((e=>{s.replaceQueryParam(e,p[e])})),s})(s,i).toString();return(0,g.jsx)(u.Z,{borderColor:"dark",borderRadius:"large",borderStyle:"dashed"},(0,g.jsx)(m.Z,{marginLeft:1,marginRight:1},(0,g.jsx)(o.Z,{gutter:2,marginTop:0,verticalAlign:"middle"},(0,g.jsx)(c.Z,{fill:!0},(0,g.jsx)(m.Z,{nowrap:!0,marginBottom:1},(0,g.jsx)(b.Heading,{level:4,noSpacing:!0},(0,h.ag)("Claim this business. It’s free."))),(0,g.jsx)(b.Text,{color:"black-light"},(0,h.ag)("Get access to Yelp’s free tools"))),(0,g.jsx)(c.Z,{textAlign:"right"},(0,g.jsx)(m.Z,{nowrap:!0,marginBottom:1},(0,g.jsx)(d.Z,{tagType:"link",type:"primary",size:"medium",href:t,onClick:this.onClaimButtonClick},(0,h.ag)("Claim This Free Business Page"))),(0,g.jsx)(b.Link,{role:"button",handleClick:this.onRejectLinkClick},(0,h.ag)("I don’t work here"))))))}}const j=C,x=n.ZP`
    query GetClaimReminder($BizEncId: String) {
        business(encid: $BizEncId) {
            claimability {
                isClaimable
            }
            hasClaimReminderForCurrentUser
        }
    }
`,k=({businessId:e,localeCode:i})=>{const{loading:s,error:t,data:r}=(0,a.aM)(x,{variables:{BizEncId:e}});if(t)throw t;return s?null:r.business.hasClaimReminderForCurrentUser&&r.business.claimability.isClaimable?(0,g.jsx)(j,{businessId:e,localeCode:i}):null}}}]);
//# sourceMappingURL=https://js-sourcemaps.yelpcorp.com/assets/public/ClaimReminderGQL.yji-d930cc662a57af803c0e.chunk.js.map