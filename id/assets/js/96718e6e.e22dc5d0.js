"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7068],{819:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>b,frontMatter:()=>l,metadata:()=>h,toc:()=>d});var t=n(7462),i=(n(7294),n(3905));const o=n.p+"assets/images/zero_shot-2fcfd390293eb7bf9f7d8371c2f6f5a7.webp",r=n.p+"assets/images/zero_shot_example-f98e34cb8ed72c5520cfd08c3c1c2f44.webp";var s=n(9145);const l={sidebar_position:4},m="\ud83d\udfe2 Zero Shot Chain of Thought",h={unversionedId:"intermediate/zero_shot_cot",id:"intermediate/zero_shot_cot",title:"\ud83d\udfe2 Zero Shot Chain of Thought",description:'Zero Shot Chain of Thought (Zero-shot-CoT) memicu (@kojima2022large) adalah sebuah langkah lanjutan dari %%CoT prompting|CoT prompting%% (@wei2022chain), yang memperkenalkan sebuah zero shot prompt yang sangat sederhana. Mereka menemukan bahwa dengan menambahkan kata-kata "Mari kita berpikir langkah demi langkah." di akhir pertanyaan, LLM dapat menghasilkan rangkaian pemikiran yang menjawab pertanyaan. Dari chain of thought ini, mereka mampu mengambil jawaban yang lebih akurat.',source:"@site/i18n/id/docusaurus-plugin-content-docs/current/intermediate/zero_shot_cot.md",sourceDirName:"intermediate",slug:"/intermediate/zero_shot_cot",permalink:"/id/docs/intermediate/zero_shot_cot",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/zero_shot_cot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Chain of Thought Prompting",permalink:"/id/docs/intermediate/chain_of_thought"},next:{title:"\ud83d\udfe1 Self-Consistency",permalink:"/id/docs/intermediate/self_consistency"}},p={},d=[{value:"Contoh",id:"contoh",level:2},{value:"Salah",id:"salah",level:4},{value:"Benar",id:"benar",level:4},{value:"Hasil",id:"hasil",level:2},{value:"Ablasi Minat",id:"ablasi-minat",level:2},{value:"Catatan",id:"catatan",level:2}],k=(g="LazyLoadImage",function(a){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)});var g;const u={toc:d},c="wrapper";function b(a){let{components:e,...n}=a;return(0,i.kt)(c,(0,t.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-zero-shot-chain-of-thought"},"\ud83d\udfe2 Zero Shot Chain of Thought"),(0,i.kt)("p",null,"Zero Shot Chain of Thought (Zero-shot-CoT) memicu",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," adalah sebuah langkah lanjutan dari ",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_2_37_1690440135437","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT prompting"),(0,i.kt)(s.u,{anchorId:"CoT prompting_2_37_1690440135437",clickable:!0,mdxType:"Tooltip"}),(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),', yang memperkenalkan sebuah zero shot prompt yang sangat sederhana. Mereka menemukan bahwa dengan menambahkan kata-kata "',(0,i.kt)("strong",{parentName:"p"},"Mari kita berpikir langkah demi langkah."),'" di akhir pertanyaan, LLM dapat menghasilkan rangkaian pemikiran yang menjawab pertanyaan. Dari chain of thought ini, mereka mampu mengambil jawaban yang lebih akurat.'),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,style:{width:"500px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},"Zero Shot CoT (Kojima et al.)"),(0,i.kt)("p",null,"Secara teknis, proses Zero-shot-CoT lengkap melibatkan dua masukan/pesanan yang terpisah. Pada gambar di bawah ini, kotak atas di sebelah kiri menghasilkan chain of thought, sementara kotak atas di sebelah kanan mendapatkan output dari prompt pertama (termasuk prompt pertama itu sendiri), dan mengekstrak jawaban dari chin of thought. Prompt kedua ini adalah prompt yang bersifat self augmented. Prompt kedua ini adalah ",(0,i.kt)("em",{parentName:"p"},"self augmented")," prompt."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)(k,{src:r,style:{width:"500px"},mdxType:"LazyLoadImage"})),(0,i.kt)("div",{style:{textAlign:"center"}},"Proses CoT Zero Shot Seluruhnya (Kojima et al.)"),(0,i.kt)("h2",{id:"contoh"},"Contoh"),(0,i.kt)("p",null,"Berikut adalah beberapa demo (yang hanya melakukan ekstraksi penalaran). Demo pertama ini menunjukkan GPT-3 (davinci-003) gagal dalam sebuah pertanyaan matematika sederhana, sementara demo kedua menggunakan prompt Zero-shot-CoT dan berhasil memecahkan masalah. Anda bisa masukkan kunci API OpenAI Anda (Klik Generate) dan bermain-main dengan contohnya. Perhatikan betapa lebih sederhana prompt Zero-shot-CoT dibandingkan dengan prompt CoT."),(0,i.kt)("h4",{id:"salah"},"Salah"),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBoYXMgOCBwZWFycy4iLCJwcm9tcHQiOiJJZiBKb2huIGhhcyA1IHBlYXJzLCB0aGVuIGVhdHMgMiwgYW5kIGJ1eXMgNSBtb3JlLCB0aGVuIGdpdmVzIDMgdG8gaGlzIGZyaWVuZCwgaG93IG1hbnkgcGVhcnMgZG9lcyBoZSBoYXZlPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h4",{id:"benar"},"Benar"),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h2",{id:"hasil"},"Hasil"),(0,i.kt)("p",null,"Zero-shot-CoT juga efektif dalam meningkatkan hasil pada tugas aritmatika, berpikir common sense, dan simbolik. Namun, tidak mengherankan, biasanya tidak seefektif CoT prompting. Kasus penggunaan yang penting untuk Zero-shot-CoT adalah ketika mendapatkan beberapa contoh shot untuk CoT permintaan sulit."),(0,i.kt)("h2",{id:"ablasi-minat"},"Ablasi Minat"),(0,i.kt)("p",null,'Kojima et al. bereksperimen dengan beberapa prompt Zero-shot-CoT yang berbeda (misalnya "Mari kita selesaikan masalah ini dengan membaginya menjadi langkah-langkah." atau "Mari kita pikirkan ini secara logis."), tetapi mereka menemukan bahwa "Mari kita pikirkan langkah demi langkah" adalah yang paling efektif untuk tugas yang mereka pilih.'),(0,i.kt)("h2",{id:"catatan"},"Catatan"),(0,i.kt)("p",null,"Langkah ekstraksi sering kali harus khusus sesuai tugas, membuat Zero-Shot-CoT kurang dapat digeneralisasikan dibandingkan yang seolah-olah pada awalnya."),(0,i.kt)("p",null,"Menurut pengalaman saya, saya telah menemukan bahwa Zero-shot-CoT gaya rangsangan kadang-kadang efektif dalam meningkatkan panjang penyelesaian tugas generatif. Misalnya, pertimbangkan prompt standar ",(0,i.kt)("inlineCode",{parentName:"p"},"Tulis sebuah cerita tentang katak dan seekor jamur yang menjadi teman.")," Menambahkan kata-kata ",(0,i.kt)("inlineCode",{parentName:"p"},"Mari kita berpikir langkah demi langkah.")," di akhir prompt ini mengarah pada hasil yang lebih panjang."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0}}]);