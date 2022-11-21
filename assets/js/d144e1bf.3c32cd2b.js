"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,locale:"en-us",style:"chicago"},i="More on Prompting",s={unversionedId:"basics/more_on_prompting",id:"basics/more_on_prompting",title:"More on Prompting",description:"Prompts that we saw in the prior examples consisted solely of a question. However, prompts can be much more complex than this; they can include context, instructions, multiple questions-answer",source:"@site/docs/basics/more_on_prompting.md",sourceDirName:"basics",slug:"/basics/more_on_prompting",permalink:"/promptgineering/docs/basics/more_on_prompting",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/docs/basics/more_on_prompting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,locale:"en-us",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/promptgineering/docs/category/tutorial---basics"},next:{title:'A "Standard" Prompt',permalink:"/promptgineering/docs/basics/standard_prompt"}},p={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"more-on-prompting"},"More on Prompting"),(0,o.kt)("p",null,"Prompts that we saw in the prior examples consisted solely of a question. However, prompts can be much more complex than this; they can include context, instructions, multiple questions-answer\nexamples, and even other prompts (what!?)."),(0,o.kt)("p",null,"Given the twitter sentiment analysis example, we could provide additional context,\nas well as examples of positive and negative tweets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Twitter is a social media platform where users can post short messages called "tweets".\nTweets can be positive or negative, and we would like to be able to classify tweets as\npositive or negative. Here are some examples of positive and negative tweets:\n\nQ: Tweet: "What a beautiful day!"\nIs this tweet positive or negative?\n\nA: positive\n\nQ: Tweet: "I hate this class"\nIs this tweet positive or negative?\n\nA: negative\n\nQ: Tweet: "I love pockets on jeans"\n\nA:\n')),(0,o.kt)("p",null,"With this additional context/examples LLMs are often able to perform better on the task."),(0,o.kt)("p",null,"Prompts inside of prompts, or self-augmented prompts",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," will be\ncovered in the next few sections."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);