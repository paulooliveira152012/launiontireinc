(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[46048],{350600:e=>{e.exports={"no-questions-text":"no-questions-text__09f24__ext8X"}},208204:e=>{e.exports={answerText:"answerText__09f24__RZi5j"}},688691:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>D});var t=n(87363),r=n.n(t),i=n(882189),a=n(182145),o=n(277599),l=n.n(o),u=n(710852),m=n(847688),c=n(68850),x=n(979186),g=n(682642),p=n(269703),j=n(88472),d=n(999052),w=n(3951),h=n(731709);const A=function(e){return(0,h.jsx)(w.Z,e)};var b=n(685255),y=n(90627),f=n(352420);const T=({url:e,currentUserCanAnswer:s,hasPrimaryAnswer:n,totalNumAnswers:t})=>n?(0,h.jsx)(x.Z,{marginTop:1.5},(0,h.jsx)(g.Z,{tagType:"link",href:e,type:"tertiary",size:"small"},(e=>1===e?(0,p.ag)("See question details"):(0,p.nc)("See %{smart_count} more answer","See %{smart_count} more answers",e-1))(t))):s?(0,h.jsx)(c.Text,{size:"inherit",weight:"semibold",inline:!0}," ",(0,h.jsx)(c.Link,{size:"inherit",href:e,role:"link"},(0,p.ag)("Answer this question"))):(0,h.jsx)(x.Z,{marginTop:1.5},(0,h.jsx)(g.Z,{tagType:"link",type:"tertiary",size:"small",href:e},(0,p.ag)("See question details")));var _=n(374371);const Z=({answererDisplayName:e,consumerFacingRole:s,answererUrl:n,helpfulVoteCount:t,createdAtRelativeText:i})=>{const a=s?(0,_.n)(s):null;let o;return o=a?`${e}, ${a.toString()}`:n?(0,h.jsx)(c.Link,{href:n},e):e,(0,h.jsx)(y.Z,{gutter:.5,layoutStack:"small"},(0,h.jsx)(f.Z,{nowrap:!0},(0,h.jsx)(c.Text,{inline:!0,color:"black-light",weight:"semibold"},o," ")),(0,h.jsx)(f.Z,{fill:!0},(0,h.jsx)(c.Text,{inline:!0,color:"black-light"},i),Boolean(t)&&(0,h.jsx)(r().Fragment,null," ",(0,h.jsx)(c.Text,{inline:!0,bulletBefore:!0,color:"black-light"},(0,p.nc)("%{smart_count} person found this helpful","%{smart_count} people found this helpful",t)))))};var C=n(208204),k=n.n(C);const N=({truncatedContent:e,content:s,consumerFacingRole:n,answererName:i,timePosted:a,helpfulVoteCount:o})=>{const[l,u]=(0,t.useState)(!1),m=(0,h.jsx)(c.Text,{className:k().answerText,size:"large"},e," ",e!==s&&(0,h.jsx)(c.Text,{weight:"semibold",size:"inherit",inline:!0},(0,h.jsx)(c.Link,{role:"button",handleClick:e=>{e.preventDefault(),u(!0)},size:"inherit"},(0,p.ag)("more",{},"Expand truncated text")))),g=(0,h.jsx)(c.Text,{className:k().answerText,size:"large"},s," ",(0,h.jsx)(c.Text,{weight:"semibold",size:"inherit",inline:!0},(0,h.jsx)(c.Link,{role:"button",handleClick:e=>{e.preventDefault(),u(!1)},size:"inherit"},(0,p.ag)("less",{},"Collapse truncated text"))));return(0,h.jsx)(r().Fragment,null,l?g:m,(0,h.jsx)(x.Z,{marginTop:.5},(0,h.jsx)(Z,{answererDisplayName:i,consumerFacingRole:n,helpfulVoteCount:o,createdAtRelativeText:a})))};N.defaultProps={consumerFacingRole:null};const q=N,v=({primaryAnswer:e,totalAnswers:s})=>e?(0,h.jsx)(q,e):s?null:(0,h.jsx)(c.Text,{inline:!0,size:"large"},(0,p.ag)("No answers yet."));v.defaultProps={primaryAnswer:null};const z=v,E=({content:e,totalAnswers:s,currentUserCanAnswer:n,url:t,primaryAnswer:i})=>(0,h.jsx)(r().Fragment,null,(0,h.jsx)(x.Z,{marginTop:2,marginBottom:2},(0,h.jsx)(y.Z,{gutter:2,verticalAlign:"baseline"},(0,h.jsx)(f.Z,null,(0,h.jsx)(c.Text,{bold:!0,size:"large"},(0,p.ag)("Q:",{},"Biz Q&A - Abbreviation for a question (noun)"))),(0,h.jsx)(f.Z,{fill:!0},(0,h.jsx)(c.Text,{bold:!0,size:"large",weight:"semibold"},e)))),(0,h.jsx)(x.Z,{marginTop:2,marginBottom:2},(0,h.jsx)(y.Z,{gutter:2,verticalAlign:"baseline"},(0,h.jsx)(f.Z,null,(0,h.jsx)(c.Text,{bold:!0,size:"large"},(0,p.ag)("A:",{},"Biz Q&A - Abbreviation for an answer to a question (noun)"))),(0,h.jsx)(f.Z,{fill:!0},(0,h.jsx)(z,{primaryAnswer:i,totalAnswers:s}),(0,h.jsx)(T,{url:t,currentUserCanAnswer:n,hasPrimaryAnswer:Boolean(i),totalNumAnswers:s})))));E.defaultProps={primaryAnswer:null};const B=E;var R=n(350600),U=n.n(R);function S(){return S=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},S.apply(this,arguments)}const P=r().memo((({businessName:e,questions:s,totalQuestions:n,questionsUri:t})=>{const i=(a=s.length,n-a>0?(0,p.nc)("See %{smart_count} question","See all %{smart_count} questions",{smart_count:n}):null);var a;const o=n?(0,h.jsx)(r().Fragment,null,s.length?(0,h.jsx)(x.Z,null,(0,h.jsx)(j.Z,{useLegacyMargin:!0,noFinalSpacing:!0,type:"block",spacing:5},s.map((e=>(0,h.jsx)(B,S({key:e.url},e)))))):(0,h.jsx)(x.Z,null,(0,h.jsx)(x.Z,{marginBottom:2},(0,h.jsx)(c.Text,{size:"large",className:U()["no-questions-text"]},(0,h.jsx)(d.Z,null,(0,p.ag)("Got a question about <strong>%{businessName}</strong>? Ask the Yelp community!",{businessName:e}))))),i&&(0,h.jsx)(x.Z,{marginTop:4},(0,h.jsx)(g.Z,{tagType:"link",href:t},i))):(0,h.jsx)(r().Fragment,null,(0,h.jsx)(x.Z,null,(0,h.jsx)(c.Text,{size:"large",className:U()["no-questions-text"]},(0,h.jsx)(d.Z,null,(0,p.ag)("Yelp users haven’t asked any questions yet about <strong>%{businessName}</strong>.",{businessName:e}))))),l={linkText:"Ask a question",linkUrl:t,linkIcon:(0,h.jsx)(A,{color:"inherit"}),isExternalLink:!1};return(0,h.jsx)(b.Z,{title:(0,p.ag)("Ask the Community"),linkProps:l},o)})),F=a.ZP`
    query GetBizPageCommunityQuestionsData($businessEncid: String) {
        business(encid: $businessEncid) {
            name
            isCommunityQuestionsEnabled
            communityQuestions(first: 2) {
                totalCount
                edges {
                    node {
                        encid
                        text
                        answers(first: 1) {
                            totalCount
                        }
                        loggedInUserPermissions {
                            canAnswer
                        }
                        topAnswer {
                            text
                            createdAt {
                                humanRelativeDateTime
                            }
                            helpfulVoteCount
                            author {
                                __typename
                                ... on BizUser {
                                    displayName
                                    consumerFacingRole
                                }
                                ... on User {
                                    displayName
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`,D=r().memo((({businessEncid:e})=>{const{loading:s,error:n,data:t}=(0,i.aM)(F,{variables:{businessEncid:e}});if(n)throw l()(n);if(s||!t)return(0,h.jsx)(m.Z,{uniqueKey:"biz-questions-gql-shimmer"});const{business:{name:r,isCommunityQuestionsEnabled:a,communityQuestions:o}}=t;if(!a)return null;const{totalCount:c,edges:x}=o,g=x.map((({node:s})=>({content:s.text,totalAnswers:s.answers.totalCount,currentUserCanAnswer:!s.loggedInUserPermissions||s.loggedInUserPermissions.canAnswer,url:`/questions/${e}/${s.encid}`,primaryAnswer:s.topAnswer?{content:s.topAnswer.text,truncatedContent:(0,u.O)(s.topAnswer.text,250),timePosted:s.topAnswer.createdAt.humanRelativeDateTime,helpfulVoteCount:s.topAnswer.helpfulVoteCount,answererName:s.topAnswer.author.displayName,consumerFacingRole:"BizUser"===s.topAnswer.author.__typename?s.topAnswer.author.consumerFacingRole:null}:null}))),p=`/questions/${e}`;return(0,h.jsx)(P,{businessName:r,questions:g,totalQuestions:c,questionsUri:p})}))},374371:(e,s,n)=>{"use strict";n.d(s,{n:()=>i});var t=n(219561),r=n(269703);const i=e=>"CUSTOMER_SERVICE"===e?(0,r.ag)("Business Customer Service"):"EMPLOYEE"===e?(0,r.ag)("Business Employee"):"MANAGER"===e?(0,r.ag)("Business Manager"):"OWNER"===e?(0,r.ag)("Business Owner"):((0,t.TN)(new Error(`Missing display string for consumerFacingRole: ${e}`)),"")}}]);
//# sourceMappingURL=https://js-sourcemaps.yelpcorp.com/assets/public/components-BizQuestionsGQL.yji-732af256aa1799ce5176.chunk.js.map