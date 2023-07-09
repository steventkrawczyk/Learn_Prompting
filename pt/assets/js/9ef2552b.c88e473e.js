"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8820],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(t),d=a,f=l["".concat(p,".").concat(d)]||l[d]||m[d]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},24922:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:40},i="\ud83d\udfe2 Enclausuramento de Sequ\xeancia Aleat\xf3ria",s={unversionedId:"prompt_hacking/defensive_measures/random_sequence",id:"prompt_hacking/defensive_measures/random_sequence",title:"\ud83d\udfe2 Enclausuramento de Sequ\xeancia Aleat\xf3ria",description:"Outra forma de defesa \xe9 enclausurar a entrada do usu\xe1rio entre duas sequ\xeancias aleat\xf3rias de caracteres (@armstrong2022using). Tome este prompt como exemplo:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/prompt_hacking/defensive_measures/random_sequence.md",sourceDirName:"prompt_hacking/defensive_measures",slug:"/prompt_hacking/defensive_measures/random_sequence",permalink:"/pt/docs/prompt_hacking/defensive_measures/random_sequence",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/defensive_measures/random_sequence.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 P\xf3s-prompting",permalink:"/pt/docs/prompt_hacking/defensive_measures/post_prompting"},next:{title:"\ud83d\udfe2 Defesa do Tipo Sandu\xedche",permalink:"/pt/docs/prompt_hacking/defensive_measures/sandwich_defense"}},p={},u=[],c={toc:u},l="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(l,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-enclausuramento-de-sequ\xeancia-aleat\xf3ria"},"\ud83d\udfe2 Enclausuramento de Sequ\xeancia Aleat\xf3ria"),(0,a.kt)("p",null,"Outra forma de defesa \xe9 enclausurar a entrada do usu\xe1rio entre duas sequ\xeancias aleat\xf3rias de caracteres",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Tome este prompt como exemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Traduza a seguinte entrada do usu\xe1rio para o espanhol.\n\n{{user_input}}\n")),(0,a.kt)("p",null,"Ele pode ser aprimorado adicionando as sequ\xeancias aleat\xf3rias:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Traduza a seguinte entrada do usu\xe1rio para o espanhol (ela est\xe1 enclausurada em strings aleat\xf3rias).\n\nFJNKSJDNKFJOI\n{{user_input}}\nFJNKSJDNKFJOI\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Sequ\xeancias mais longas provavelmente ser\xe3o mais eficazes.")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Stuart Armstrong, R. G. (2022). Using GPT-Eliezer against ChatGPT Jailbreaking. https://www.alignmentforum.org/posts/pNcFYZnPdXyL2RfgA/using-gpt-eliezer-against-chatgpt-jailbreaking\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);