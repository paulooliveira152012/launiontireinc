"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[35119],{607683:(e,s,n)=>{n.r(s),n.d(s,{default:()=>g});var i=n(563798),r=(n(87363),n(882189)),o=n(182145),a=n(510832),d=n(68850),t=n(269703),l=n(625198),u=n.n(l),c=n(731709);const m=o.ZP`
    query GetUnconfirmedReviewAlertData($businessEncid: String!) {
        loggedInUser {
            hasUnconfirmedReviewForBusiness(businessEncid: $businessEncid)
            primaryEmail {
                emailAddress
                bounced
                confirmed
            }
        }
    }
`,g=({businessEncid:e})=>{const{loading:s,error:n,data:o}=(0,r.aM)(m,{variables:{businessEncid:e}});if(s)return null;if(n)throw n;if(!o?.loggedInUser||!o?.loggedInUser?.hasUnconfirmedReviewForBusiness)return null;const l=o?.loggedInUser?.primaryEmail,g="/profile_email_notifications";return u()(l,"Logged in user must have a primary email address."),(0,c.jsx)(a.Z,{type:"warning"},(0,c.jsx)(d.Text,{weight:"bold",inline:!0},(0,t.ag)("Your review has not been posted yet! To post it you must first confirm your email address.")," "),(0,c.jsx)(d.Text,{inline:!0},l.bounced?(0,c.jsx)(i.Trans,{id:(0,t.ag)("We noticed we can no longer send emails to %{0}. <0>Please confirm or update your email address.</0>",{0:l.emailAddress}).toString(),components:[(0,c.jsx)(d.Link,{href:g})]}):(0,c.jsx)(i.Trans,{id:(0,t.ag)("Check your inbox and spam folders for a confirmation email, or <0>click here to resend.</0>",{}).toString(),components:[(0,c.jsx)(d.Link,{href:g})]})))}}}]);
//# sourceMappingURL=https://js-sourcemaps.yelpcorp.com/assets/public/components-UnconfirmedReviewAlert.yji-af01e4e9b3e148d54e5b.chunk.js.map