"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6174],{9561:(a,i,I)=>{I.r(i),I.d(i,{assets:()=>m,contentTitle:()=>c,default:()=>o,frontMatter:()=>e,metadata:()=>b,toc:()=>G});var l=I(7462),d=(I(7294),I(3905));const g=I.p+"assets/images/least_to_most_formal-486e9639afd8c95f3b069b29872d9dfd.webp";var n=I(9145);const e={sidebar_position:7,locale:"en-us",style:"chicago"},c="\ud83d\udfe1 Least to Most Prompting",b={unversionedId:"intermediate/least_to_most",id:"intermediate/least_to_most",title:"\ud83d\udfe1 Least to Most Prompting",description:"Prompting Terendah ke Tertinggi (LtM)(@zhou2022leasttomost) mengambil %%CoT prompting|CoT prompting%% lebih jauh dengan pertama-tama memecah masalah menjadi submasalah kemudian menyelesaikan masing-masing. Ini adalah teknik yang terinspirasi dari strategi pendidikan dunia nyata untuk anak-anak.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/intermediate/least_to_most.md",sourceDirName:"intermediate",slug:"/intermediate/least_to_most",permalink:"/id/docs/intermediate/least_to_most",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/least_to_most.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,locale:"en-us",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Pengetahuan yang Dihasilkan",permalink:"/id/docs/intermediate/generated_knowledge"},next:{title:"\ud83d\udfe1 Dealing With Long Form Content",permalink:"/id/docs/intermediate/long_form_content"}},m={},G=[{value:"Contoh: Respon Pertanyaan Pelanggan",id:"contoh-respon-pertanyaan-pelanggan",level:2},{value:"Contoh: penggabungan huruf",id:"contoh-penggabungan-huruf",level:2},{value:"Percobaan pertama: Standar",id:"percobaan-pertama-standar",level:3},{value:"Percobaan kedua: Chain of Thought",id:"percobaan-kedua-chain-of-thought",level:3},{value:"Percobaan ketiga: Paling sedikit hingga paling banyak (prompt tunggal)",id:"percobaan-ketiga-paling-sedikit-hingga-paling-banyak-prompt-tunggal",level:3},{value:"Hasil",id:"hasil",level:3},{value:"Contoh: generalisasi komposisi (SCAN)",id:"contoh-generalisasi-komposisi-scan",level:2},{value:"Percobaan pertama: Prompt Standar",id:"percobaan-pertama-prompt-standar",level:3},{value:"Percobaan kedua: Least to Most, langkah pertama - Reduksi",id:"percobaan-kedua-least-to-most-langkah-pertama---reduksi",level:3},{value:"Upaya kedua: Least to Most, langkah kedua - Pemetaan",id:"upaya-kedua-least-to-most-langkah-kedua---pemetaan",level:3},{value:"Hasil",id:"hasil-1",level:3}],B={toc:G},t="wrapper";function o(a){let{components:i,...I}=a;return(0,d.kt)(t,(0,l.Z)({},B,I,{components:i,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"-least-to-most-prompting"},"\ud83d\udfe1 Least to Most Prompting"),(0,d.kt)("p",null,"Prompting Terendah ke Tertinggi (LtM)",(0,d.kt)("sup",{parentName:"p",id:"fnref-1"},(0,d.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," mengambil ",(0,d.kt)("a",{parentName:"p",id:"CoT prompting_2_11_1690440124751","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT prompting"),(0,d.kt)(n.u,{anchorId:"CoT prompting_2_11_1690440124751",clickable:!0,mdxType:"Tooltip"})," lebih jauh dengan pertama-tama memecah masalah menjadi submasalah kemudian menyelesaikan masing-masing. Ini adalah teknik yang terinspirasi dari strategi pendidikan dunia nyata untuk anak-anak."),(0,d.kt)("p",null,"Seperti dalam CoT yang memicu, masalah yang harus dipecahkan didekomposisi dalam serangkaian submasalah yang saling membangun. Dalam langkah kedua, submasalah ini diselesaikan satu per satu. Bertentangan dengan CoT, solusi dari submasalah sebelumnya dimasukkan ke dalam perintah mencoba menyelesaikan masalah berikutnya."),(0,d.kt)("div",{style:{textAlign:"center"}},(0,d.kt)("img",{src:g,style:{width:"600px"},alt:"Diagram prompt least to most"})),(0,d.kt)("div",{style:{textAlign:"center"}},"Diagram dari Least to Most prompting"),(0,d.kt)("h2",{id:"contoh-respon-pertanyaan-pelanggan"},"Contoh: Respon Pertanyaan Pelanggan"),(0,d.kt)("p",null,"Marilah kita ajukan pertanyaan layanan pelanggan yang agak rumit:"),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiVGhhbmsgeW91IGZvciB5b3VyIGlucXVpcnkuIFVuZm9ydHVuYXRlbHksIHNpbmNlIHlvdSBwdXJjaGFzZWQgdGhlIHNoaXJ0IG9uIE1hcmNoIDFzdCwgaXQgaXMgb3V0c2lkZSBvZiBvdXIgMzAtZGF5IHJldHVybiBwb2xpY3kuIEhvd2V2ZXIsIHdlIGRvIGhhdmUgYSA1MCUgZGlzY291bnQgb24gYWxsIHNoaXJ0cyBjdXJyZW50bHksIHNvIHlvdSBjb3VsZCBwdXJjaGFzZSB0d28gc2hpcnRzIHdpdGggdGhlIHNhbWUgYW1vdW50IG9mIHN0b3JlIGNyZWRpdC4gUHJpY2VzIGZvciBvdXIgc2hpcnRzIHJhbmdlIGZyb20gJDE4LSQxMDAuIFBsZWFzZSBsZXQgdXMga25vdyBpZiB5b3UgaGF2ZSBhbnkgb3RoZXIgcXVlc3Rpb25zLiIsInByb21wdCI6IkNVU1RPTUVSIElOUVVJUlk6XG5JIGp1c3QgYm91Z2h0IGEgVC1zaGlydCBmcm9tIHlvdXIgQXJub2xkIGNvbGxlY3Rpb24gb24gTWFyY2ggMXN0LiBJIHNhdyB0aGF0IGl0IHdhcyBvbiBkaXNjb3VudCwgc28gYm91Z2h0IGEgc2hpcnQgdGhhdCB3YXMgb3JpZ2luYWxsICQzMCwgYW5kIGdvdCA0MCUgb2ZmLiBJIHNhdyB0aGF0IHlvdSBoYXZlIGEgbmV3IGRpc2NvdW50IGZvciBzaGlydHMgYXQgNTAlLiBJJ20gd29uZGVyaW5nIGlmIEkgY2FuIHJldHVybiB0aGUgc2hpcnQgYW5kIGhhdmUgZW5vdWdoIHN0b3JlIGNyZWRpdCB0byBidXkgdHdvIG9mIHlvdXIgc2hpcnRzP1xuXG5JTlNUUlVDVElPTlM6XG5Zb3UgYXJlIGEgY3VzdG9tZXIgc2VydmljZSBhZ2VudCB0YXNrZWQgd2l0aCBraW5kbHkgcmVzcG9uZGluZyB0byBjdXN0b21lciBpbnF1aXJpZXMuIFJldHVybnMgYXJlIGFsbG93ZWQgd2l0aGluIDMwIGRheXMuIFRvZGF5J3MgZGF0ZSBpcyBNYXJjaCAyOXRoLiBUaGVyZSBpcyBjdXJyZW50bHkgYSA1MCUgZGlzY291bnQgb24gYWxsIHNoaXJ0cy4gU2hpcnQgcHJpY2VzIHJhbmdlIGZyb20gJDE4LSQxMDAgYXQgeW91ciBzdG9yZS4gRG8gbm90IG1ha2UgdXAgYW55IGluZm9ybWF0aW9uIGFib3V0IGRpc2NvdW50IHBvbGljaWVzLkNVU1RPTUVSIElOUVVJUlk6XG5JIGp1c3QgYm91Z2h0IGEgVC1zaGlydCBmcm9tIHlvdXIgQXJub2xkIGNvbGxlY3Rpb24gb24gTWFyY2ggMXN0LiBJIHNhdyB0aGF0IGl0IHdhcyBvbiBkaXNjb3VudCwgc28gYm91Z2h0IGEgc2hpcnQgdGhhdCB3YXMgb3JpZ2luYWxsICQzMCwgYW5kIGdvdCA0MCUgb2ZmLiBJIHNhdyB0aGF0IHlvdSBoYXZlIGEgbmV3IGRpc2NvdW50IGZvciBzaGlydHMgYXQgNTAlLiBJJ20gd29uZGVyaW5nIGlmIEkgY2FuIHJldHVybiB0aGUgc2hpcnQgYW5kIGhhdmUgZW5vdWdoIHN0b3JlIGNyZWRpdCB0byBidXkgdHdvIG9mIHlvdXIgc2hpcnRzP1xuXG5JTlNUUlVDVElPTlM6XG5Zb3UgYXJlIGEgY3VzdG9tZXIgc2VydmljZSBhZ2VudCB0YXNrZWQgd2l0aCBraW5kbHkgcmVzcG9uZGluZyB0byBjdXN0b21lciBpbnF1aXJpZXMuIFJldHVybnMgYXJlIGFsbG93ZWQgd2l0aGluIDMwIGRheXMuIFRvZGF5J3MgZGF0ZSBpcyBNYXJjaCAyOXRoLiBUaGVyZSBpcyBjdXJyZW50bHkgYSA1MCUgZGlzY291bnQgb24gYWxsIHNoaXJ0cy4gU2hpcnQgcHJpY2VzIHJhbmdlIGZyb20gJDE4LSQxMDAgYXQgeW91ciBzdG9yZS4gRG8gbm90IG1ha2UgdXAgYW55IGluZm9ybWF0aW9uIGFib3V0IGRpc2NvdW50IHBvbGljaWVzLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("br",null),"Hasilnya gagal (kami masih dalam waktu pengembalian), jadi mari kita coba memecahnya menjadi submasalah:",(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiMS4gRGV0ZXJtaW5lIGlmIHRoZSBjdXN0b21lciBpcyB3aXRoaW4gdGhlIDMwLWRheSByZXR1cm4gd2luZG93LlxuMi4gQ2FsY3VsYXRlIHRoZSBhbW91bnQgb2Ygc3RvcmUgY3JlZGl0IHRoZSBjdXN0b21lciB3b3VsZCByZWNlaXZlIGlmIHRoZXkgcmV0dXJuZWQgdGhlIHNoaXJ0LlxuMy4gQ2FsY3VsYXRlIHRoZSBjb3N0IG9mIHR3byBzaGlydHMgYXQgdGhlIGN1cnJlbnQgNTAlIGRpc2NvdW50LlxuNC4gRGV0ZXJtaW5lIGlmIHRoZSBjdXN0b21lciBoYXMgZW5vdWdoIHN0b3JlIGNyZWRpdCB0byBwdXJjaGFzZSB0d28gc2hpcnRzLiIsInByb21wdCI6IkNVU1RPTUVSIElOUVVJUlk6XG5JIGp1c3QgYm91Z2h0IGEgVC1zaGlydCBmcm9tIHlvdXIgQXJub2xkIGNvbGxlY3Rpb24gb24gTWFyY2ggMXN0LiBJIHNhdyB0aGF0IGl0IHdhcyBvbiBkaXNjb3VudCwgc28gYm91Z2h0IGEgc2hpcnQgdGhhdCB3YXMgb3JpZ2luYWxsICQzMCwgYW5kIGdvdCA0MCUgb2ZmLiBJIHNhdyB0aGF0IHlvdSBoYXZlIGEgbmV3IGRpc2NvdW50IGZvciBzaGlydHMgYXQgNTAlLiBJJ20gd29uZGVyaW5nIGlmIEkgY2FuIHJldHVybiB0aGUgc2hpcnQgYW5kIGhhdmUgZW5vdWdoIHN0b3JlIGNyZWRpdCB0byBidXkgdHdvIG9mIHlvdXIgc2hpcnRzP1xuXG5JTlNUUlVDVElPTlM6XG5Zb3UgYXJlIGEgY3VzdG9tZXIgc2VydmljZSBhZ2VudCB0YXNrZWQgd2l0aCBraW5kbHkgcmVzcG9uZGluZyB0byBjdXN0b21lciBpbnF1aXJpZXMuIFJldHVybnMgYXJlIGFsbG93ZWQgd2l0aGluIDMwIGRheXMuIFRvZGF5J3MgZGF0ZSBpcyBNYXJjaCAyOXRoLiBUaGVyZSBpcyBjdXJyZW50bHkgYSA1MCUgZGlzY291bnQgb24gYWxsIHNoaXJ0cy4gU2hpcnQgcHJpY2VzIHJhbmdlIGZyb20gJDE4LSQxMDAgYXQgeW91ciBzdG9yZS4gRG8gbm90IG1ha2UgdXAgYW55IGluZm9ybWF0aW9uIGFib3V0IGRpc2NvdW50IHBvbGljaWVzLlxuV2hhdCBzdWJwcm9ibGVtcyBtdXN0IGJlIHNvbHZlZCBiZWZvcmUgYW5zd2VyaW5nIHRoZSBpbnF1aXJ5PyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("br",null),"Ayo kita coba menyelesaikan submasalah pertama:",(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiWWVzLCB0aGUgY3VzdG9tZXIgaXMgd2l0aGluIHRoZSAzMC1kYXkgcmV0dXJuIHdpbmRvdy4gVGhlIGN1c3RvbWVyIHB1cmNoYXNlZCB0aGUgc2hpcnQgb24gTWFyY2ggMXN0LCBhbmQgdG9kYXkncyBkYXRlIGlzIE1hcmNoIDI5dGgsIHdoaWNoIGlzIHdpdGhpbiB0aGUgMzAtZGF5IHJldHVybiB3aW5kb3cuIFxuXG5UaGVyZWZvcmUsIHRoZSBjdXN0b21lciBpcyBlbGlnaWJsZSB0byByZXR1cm4gdGhlIHNoaXJ0IGFuZCByZWNlaXZlIHN0b3JlIGNyZWRpdCBmb3IgdGhlIHB1cmNoYXNlLiBUaGUgY3VzdG9tZXIgY2FuIHVzZSB0aGUgc3RvcmUgY3JlZGl0IHRvIHB1cmNoYXNlIHR3byBzaGlydHMgYXQgdGhlIGN1cnJlbnQgNTAlIGRpc2NvdW50LiIsInByb21wdCI6IkNVU1RPTUVSIElOUVVJUlk6XG5JIGp1c3QgYm91Z2h0IGEgVC1zaGlydCBmcm9tIHlvdXIgQXJub2xkIGNvbGxlY3Rpb24gb24gTWFyY2ggMXN0LiBJIHNhdyB0aGF0IGl0IHdhcyBvbiBkaXNjb3VudCwgc28gYm91Z2h0IGEgc2hpcnQgdGhhdCB3YXMgb3JpZ2luYWxseSAkMzAsIGFuZCBnb3QgNDAlIG9mZi4gSSBzYXcgdGhhdCB5b3UgaGF2ZSBhIG5ldyBkaXNjb3VudCBmb3Igc2hpcnRzIGF0IDUwJS4gSSdtIHdvbmRlcmluZyBpZiBJIGNhbiByZXR1cm4gdGhlIHNoaXJ0IGFuZCBoYXZlIGVub3VnaCBzdG9yZSBjcmVkaXQgdG8gYnV5IHR3byBvZiB5b3VyIHNoaXJ0cz9cblxuSU5TVFJVQ1RJT05TOlxuWW91IGFyZSBhIGN1c3RvbWVyIHNlcnZpY2UgYWdlbnQgdGFza2VkIHdpdGgga2luZGx5IHJlc3BvbmRpbmcgdG8gY3VzdG9tZXIgaW5xdWlyaWVzLiBSZXR1cm5zIGFyZSBhbGxvd2VkIHdpdGhpbiAzMCBkYXlzLiBUb2RheSdzIGRhdGUgaXMgTWFyY2ggMjl0aC4gVGhlcmUgaXMgY3VycmVudGx5IGEgNTAlIGRpc2NvdW50IG9uIGFsbCBzaGlydHMuIFNoaXJ0IHByaWNlcyByYW5nZSBmcm9tICQxOC0kMTAwIGF0IHlvdXIgc3RvcmUuIERvIG5vdCBtYWtlIHVwIGFueSBpbmZvcm1hdGlvbiBhYm91dCBkaXNjb3VudCBwb2xpY2llcy5cbkRldGVybWluZSBpZiB0aGUgY3VzdG9tZXIgaXMgd2l0aGluIHRoZSAzMC1kYXkgcmV0dXJuIHdpbmRvdy4gTGV0J3MgZ28gc3RlcCBieSBzdGVwLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("p",null,"Dengan hanya menyelesaikan submasalah pertama, kami dapat menyelesaikan seluruh masalah. Jika GPT-3 tidak mengembalikan jawaban secara langsung, kita bisa menyelesaikan submasalah berikutnya dan seterusnya sampai dia mengembalikan jawaban. Perhatikan bahwa kami menggunakan ",(0,d.kt)("inlineCode",{parentName:"p"},"Let's go step by step."),". Penambahan frase ini tidak selalu diperlukan, tetapi ini membantu untuk contoh ini."),(0,d.kt)("h2",{id:"contoh-penggabungan-huruf"},"Contoh: penggabungan huruf"),(0,d.kt)("p",null,"LtM awalnya diperkenalkan menggunakan sedikit dorongan di awal, bukan instruksi eksplisit untuk memecah masalah menjadi beberapa langkah (seperti yang terlihat di atas). Selain itu, kadang-kadang dapat diimplementasikan dengan satu prompt saja daripada prompt yang dihubungkan. Mari kita telaah masalah penggabungan huruf terakhir dari kata-kata individu",(0,d.kt)("sup",{parentName:"p",id:"fnref-2"},(0,d.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," (misalnya, diberikan ",(0,d.kt)("inlineCode",{parentName:"p"},"cake, etymology")," sebagai kata masukan, hasilnya haruslah ",(0,d.kt)("inlineCode",{parentName:"p"},"ey"),")."),(0,d.kt)("h3",{id:"percobaan-pertama-standar"},"Percobaan pertama: Standar"),(0,d.kt)("p",null,"Prompt standar dengan contoh-contoh few-shot berperforma sangat buruk, bahkan dengan model yang lebih canggih seperti text-davinci-003."),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoibGlwIiwicHJvbXB0IjoiUTogdGhpbmssIG1hY2hpbmVcbkE6IGtlXG5cblE6IGxlYXJuaW5nLCByZWFzb25pbmcsIGdlbmVyYWxpemF0aW9uXG5BOiBnZ25cblxuUTogYXJ0aWZpY2lhbCwgaW50ZWxsaWdlbmNlXG5BOiBsZVxuXG5ROiB0cmFuc2Zvcm1lciwgbGFuZ3VhZ2UsIHZpc2lvblxuQTogcmVuXG5cblE6IGZvbyxiYXIsYmF6LGJsaXBcbkE6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"percobaan-kedua-chain-of-thought"},"Percobaan kedua: Chain of Thought"),(0,d.kt)("p",null,"Chain of Thought tampil lebih baik dibandingkan dengan prompt standar. Hal ini karena sekarang memungkinkan model untuk mempertimbangkan mengekstraksi huruf terakhir setiap kata secara terpisah, mengurangi kompleksitasnya menjadi operasi pengelompokan huruf yang sebelumnya telah dikumpulkan. Namun, hal ini mulai terabaikan pada ukuran yang lebih besar."),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiVGhlIGxhc3QgbGV0dGVyIG9mIFwiZm9vXCIgaXMgXCJvXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImJhclwiIGlzIFwiclwiLiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJiYXpcIiBpcyBcInpcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwiYmxpcFwiIGlzIFwicFwiLiBTbyBcImZvbyxiYXIsYmF6LGJsaXBcIiBpcyBcIm9yenBcIi4iLCJwcm9tcHQiOiJROiB0aGluaywgbWFjaGluZVxuQTogVGhlIGxhc3QgbGV0dGVyIG9mIFwidGhpbmtcIiBpcyBcImtcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwibWFjaGluZVwiIGlzIFwiZVwiLiBTbyBcInRoaW5rLCBtYWNoaW5lXCIgaXMgXCJrZVwiLlxuXG5ROiBsZWFybmluZywgcmVhc29uaW5nLCBnZW5lcmFsaXphdGlvblxuQTogVGhlIGxhc3QgbGV0dGVyIG9mIFwibGVhcm5pbmdcIiBpcyBcImdcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwicmVhc29uaW5nXCIgaXMgXCJuXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImdlbmVyYWxpemF0aW9uXCIgaXMgXCJuXCIuIFNvIFwibGVhcm5pbmcsIHJlYXNvbmluZywgZ2VuZXJhbGl6YXRpb25cIiBpcyBcImdnblwiLlxuXG5ROiBhcnRpZmljaWFsLCBpbnRlbGxpZ2VuY2VcbkE6IFRoZSBsYXN0IGxldHRlciBvZiBcImFydGlmaWNpYWxcIiBpcyBcImxcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwiaW50ZWxsaWdlbmNlXCIgaXMgXCJlXCIuIFNvIFwiYXJ0aWZpY2lhbCwgaW50ZWxsaWdlbmNlXCIgaXMgXCJsZVwiLlxuXG5ROiB0cmFuc2Zvcm1lciwgbGFuZ3VhZ2UsIHZpc2lvblxuQTogVGhlIGxhc3QgbGV0dGVyIG9mIFwidHJhbnNmb3JtZXJcIiBpcyBcInJcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwibGFuZ3VhZ2VcIiBpcyBcImVcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwidmlzaW9uXCIgaXMgXCJuXCIuIFNvIFwidHJhbnNmb3JtZXIsIGxhbmd1YWdlLCB2aXNpb25cIiBpcyBcInJlblwiLlxuXG5ROiBmb28sYmFyLGJheixibGlwXG5BOiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"percobaan-ketiga-paling-sedikit-hingga-paling-banyak-prompt-tunggal"},"Percobaan ketiga: Paling sedikit hingga paling banyak (prompt tunggal)"),(0,d.kt)("p",null,"Dengan Memberikan Panduan Minimal hingga Maksimal, kami meningkatkan konsep Rantai Berpikir dengan merumuskan kembali langkah-langkah individu untuk menyatakan kembali hasil yang sebelumnya digabungkan. Ini menyederhanakan setiap langkah hanya dengan menggabungkan satu huruf baru saja. Hal ini menghasilkan kinerja bagus hingga 12 kata atau lebih."),(0,d.kt)("p",null,'Pendekatan ini mungkin terlihat sangat mirip dengan Chain of Thought, tetapi secara konseptual sangat berbeda. Di sini, setiap langkah, kami memperkenalkan konkatenasi sebelumnya. Dalam kasus "berpikir, mesin, pembelajaran", alih-alih menggabungkan huruf-huruf "k", "e", "g" secara individu, itu akan menggabungkan "k" dan "e", kemudian "ke" dan "g". Sebagai hasil dari reintroduksi pekerjaan sebelumnya, model ini sekarang dapat menggeneralisasi ke rantai yang jauh lebih panjang karena ia membawa hasil secara bertahap dan hanya perlu melakukan sedikit kerja pada setiap langkah.'),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiVGhlIGxhc3QgbGV0dGVyIG9mIFwiZm9vXCIgaXMgXCJvXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImJhclwiIGlzIFwiclwiLiBDb25jYXRlbmF0aW5nIFwib1wiIGFuZCBcInJcIiBnaXZlcyBcIm9yXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImJhelwiIGlzIFwielwiLiBDb25jYXRlbmF0aW5nIFwib3JcIiBhbmQgXCJ6XCIgZ2l2ZXMgXCJvcnpcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwiYmxpcFwiIGlzIFwicFwiLiBDb25jYXRlbmF0aW5nIFwib3J6XCIgYW5kIFwicFwiIGdpdmVzIFwib3J6cFwiLiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJsZWFyblwiIGlzIFwiblwiLiBDb25jYXRlbmF0aW5nIFwib3J6cFwiIGFuZCBcIm5cIiBnaXZlcyBcIm9yenBuXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcInByb21wdGluZ1wiIGlzIFwiZ1wiLiBDb25jYXRlbmF0aW5nIFwib3J6cG5cIiBhbmQgXCJnXCIgZ2l2ZXMgXCJvcnpwbmdcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwid29ybGRcIiBpcyBcImRcIi4gQ29uY2F0ZW5hdGluZyBcIm9yenBuZ1wiIGFuZCBcImRcIiBnaXZlcyBcIm9yenBuZ2RcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwic2hha2luZ1wiIGlzIFwiZ1wiLiBDb25jYXRlbmF0aW5nIFwib3J6cG5nZFwiIGFuZCBcImdcIiBnaXZlcyBcIm9yenBuZ2RnXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImV2ZW50XCIgaXMgXCJ0XCIuIENvbmNhdGVuYXRpbmcgXCJvcnpwbmdkZ1wiIGFuZCBcInRcIiBnaXZlcyBcIm9yenBuZ2RndFwiLiIsInByb21wdCI6IlE6IHRoaW5rLCBtYWNoaW5lXG5BOiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJ0aGlua1wiIGlzIFwia1wiLiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJtYWNoaW5lXCIgaXMgXCJlXCIuIENvbmNhdGVuYXRpbmcgXCJrXCIgYW5kIFwiZVwiIGdpdmVzIFwia2VcIi4gU28gXCJ0aGluaywgbWFjaGluZVwiIG91dHB1dCBcImtlXCIuXG5cblE6IHRoaW5rLCBtYWNoaW5lLCBsZWFybmluZ1xuQTogXCJ0aGluaywgbWFjaGluZVwiIG91dHB1dHMgXCJrZVwiLiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJsZWFybmluZ1wiIGlzIFwiZ1wiLiBDb25jYXRlbmF0aW5nIFwia2VcIiBhbmQgXCJnXCIgZ2l2ZXMgXCJrZWdcIi4gU28gXCJ0aGluaywgbWFjaGluZSwgbGVhcm5pbmdcIiBpcyBcImtlZ1wiLlxuXG5ROiB0cmFuc2Zvcm1lciwgbGFuZ3VhZ2VcbkE6IFRoZSBsYXN0IGxldHRlciBvZiBcInRyYW5zZm9ybWVyXCIgaXMgXCJyXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImxhbmd1YWdlXCIgaXMgXCJlXCIuIENvbmNhdGVuYXRpbmcgXCJyXCIgYW5kIFwiZVwiIGdpdmVzIFwicmVcIi4gU28gXCJ0cmFuc2Zvcm1lciwgbGFuZ3VhZ2VcIiBpcyBcInJlXCIuXG5cblE6IHRyYW5zZm9ybWVyLCBsYW5ndWFnZSwgdmlzaW9uXG5BOiBcInRyYW5zZm9ybWVyLCBsYW5ndWFnZVwiIG91dHB1dHMgXCJyZVwiLiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJ2aXNpb25cIiBpcyBcIm5cIi4gQ29uY2F0ZW5hdGluZyBcInJlXCIgYW5kIFwiblwiIGdpdmVzIFwicmVuXCIuIFNvIFwidHJhbnNmb3JtZXIsIGxhbmd1YWdlLCB2aXNpb25cIiBpcyBcInJlblwiLlxuXG5ROiBmb28sYmFyLGJheixibGlwLGxlYXJuLHByb21wdGluZyx3b3JsZCxzaGFraW5nLGV2ZW50LGRhbmNlZmxvb3IscHJpc21hLGdpcmFmZmVcbkE6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"hasil"},"Hasil"),(0,d.kt)("p",null,"Pada masalah penggabungan huruf terakhir dengan 12 kata, Chain of Thought memiliki akurasi 34%, sementara dari yang Paling Sedikit ke yang Paling Banyak memiliki akurasi 74% (dalam makalah ini menggunakan model text-davinci-002)."),(0,d.kt)("h2",{id:"contoh-generalisasi-komposisi-scan"},"Contoh: generalisasi komposisi (SCAN)"),(0,d.kt)("p",null,"Benchmark SCAN",(0,d.kt)("sup",{parentName:"p",id:"fnref-3"},(0,d.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),' mengharuskan model untuk mengubah bahasa alami menjadi urutan tindakan. Sebagai contoh, kalimat "berjalan ke kiri dan berjalan dua kali" akan diterjemahkan menjadi "BERBELOK KE KIRI + BERLARI + BERJALAN * 2". Model bahasa tampil sangat buruk ketika dihadapkan dengan urutan yang lebih panjang daripada yang ada di set pelatihan.'),(0,d.kt)("h3",{id:"percobaan-pertama-prompt-standar"},"Percobaan pertama: Prompt Standar"),(0,d.kt)("p",null,"Menggunakan prompt sederhana standar, text-davinci-003 dapat mencapai hasil yang mengesankan, tetapi masih gagal."),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiKFRVUk4gTEVGVCAqIDIgKyBXQUxLKSAqIDMgKyAoVFVSTiBMRUZUICsgSlVNUCkgKiAyIiwicHJvbXB0IjoiUTogdHVybiBsZWZ0XG5BOiBUVVJOIExFRlRcblxuUTogdHVybiByaWdodFxuQTogVFVSTiBSSUdIVFxuXG5ROiBqdW1wIGxlZnRcbkE6IFRVUk4gTEVGVCArIEpVTVBcblxuUTogcnVuIHJpZ2h0XG5BOiBUVVJOIFJJR0hUICsgUlVOXG5cblE6IGxvb2sgdHdpY2VcbkE6IExPT0sgKiAyXG5cblE6IHJ1biBhbmQgbG9vayB0d2ljZVxuQTogUlVOICsgTE9PSyAqIDJcblxuUToganVtcCByaWdodCB0aHJpY2VcbkE6IChUVVJOIFJJR0hUICsgSlVNUCkgKiAzXG5cblE6IHdhbGsgYWZ0ZXIgcnVuXG5BOiBSVU4gKyBXQUxLXG5cblE6IHR1cm4gb3Bwb3NpdGUgbGVmdFxuQTogVFVSTiBMRUZUICogMlxuXG5ROiB0dXJuIGFyb3VuZCBsZWZ0XG5BOiBUVVJOIExFRlQgKiA0XG5cblE6IHR1cm4gb3Bwb3NpdGUgcmlnaHRcbkE6IFRVUk4gUklHSFQgKiAyXG5cblE6IHR1cm4gYXJvdW5kIHJpZ2h0XG5BOiBUVVJOIFJJR0hUICogNFxuXG5ROiB3YWxrIG9wcG9zaXRlIGxlZnRcbkE6IFRVUk4gTEVGVCAqIDIgKyBXQUxLXG5cblE6IHdhbGsgYXJvdW5kIGxlZnRcbkE6IChUVVJOIExFRlQgKyBXQUxLKSAqIDRcblxuUTogXCJqdW1wIGFyb3VuZCBsZWZ0IHR3aWNlIGFmdGVyIHdhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIiBcbkE6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"percobaan-kedua-least-to-most-langkah-pertama---reduksi"},"Percobaan kedua: Least to Most, langkah pertama - Reduksi"),(0,d.kt)("p",null,"Di sini, kita bekerja dengan 2 prompt yang berbeda. Prompt pertama digunakan untuk mengurangi masalah input menjadi urutan langkah yang lebih sederhana. Promp kedua digunakan untuk memetakan urutan langkah yang disederhanakan ini ke dalam tindakan nyata."),(0,d.kt)("p",null,"Kedua prompt ini cukup panjang dan menggunakan notasi python yang dikompres untuk tindakan meminimalkan penggunaan token."),(0,d.kt)("p",null,'Langkah pertama memecah deskripsi bahasa alami menjadi bahasa yang lebih eksplisit, namun tetap mirip dengan bahasa manusia. Ini akan membantu tahapan pemetaan mencari tahu urutan hal-hal. Sebagai contoh, "lompat ke kiri dua kali" dikurangi menjadi "lompat kiri" -> ',(0,d.kt)("inlineCode",{parentName:"p"},"TURN_LEFT + JUMP"),' dan "lompat ke kiri" -> ',(0,d.kt)("inlineCode",{parentName:"p"},"(TURN_LEFT + JUMP) * 4"),". Demikian juga, langkah pengurangan adalah yang digunakan untuk menjelaskan konsep pengulangan (dua kali, tiga kali, dll...)."),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiXCJqdW1wIGFyb3VuZCBsZWZ0IHR3aWNlXCIgY2FuIGJlIHNvbHZlZCBieTogXCJqdW1wIGxlZnRcIiwgXCJqdW1wIGFyb3VuZCBsZWZ0XCIsIFwianVtcCBhcm91bmQgbGVmdCB0d2ljZVwiLiBcIndhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIiBjYW4gYmUgc29sdmVkIGJ5OiBcIndhbGsgb3Bwb3NpdGUgbGVmdFwiLCBcIndhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIi4gU28sIFwianVtcCBhcm91bmQgbGVmdCB0d2ljZSBhZnRlciB3YWxrIG9wcG9zaXRlIGxlZnQgdGhyaWNlXCIgY2FuIGJlIHNvbHZlZCBieTogXCJqdW1wIGxlZnRcIiwgXCJqdW1wIGFyb3VuZCBsZWZ0XCIsIFwianVtcCBhcm91bmQgbGVmdCB0d2ljZVwiLCBcIndhbGsgb3Bwb3NpdGUgbGVmdFwiLCBcIndhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIi4iLCJwcm9tcHQiOiJROiBsb29rIHJpZ2h0IGFmdGVyIGxvb2sgdHdpY2VcbkE6IFwibG9vayByaWdodCBhZnRlciBsb29rIHR3aWNlXCIgY2FuIGJlIHNvbHZlZCBieTogXCJsb29rIHJpZ2h0XCIsIFwibG9vayB0d2ljZVwiLlxuXG5ROiBqdW1wIG9wcG9zaXRlIHJpZ2h0IHRocmljZSBhbmQgd2Fsa1xuQTogXCJqdW1wIG9wcG9zaXRlIHJpZ2h0IHRocmljZVwiIGNhbiBiZSBzb2x2ZWQgYnk6IFwianVtcCBvcHBvc2l0ZSByaWdodFwiLCBcImp1bXAgb3Bwb3NpdGUgcmlnaHQgdGhyaWNlXCIuIFwid2Fsa1wiIGNhbiBiZSBzb2x2ZWQgYnk6IFwid2Fsa1wiLiBTbywgXCJqdW1wIG9wcG9zaXRlIHJpZ2h0IHRocmljZSBhbmQgd2Fsa1wiIGNhbiBiZSBzb2x2ZWQgYnk6IFwianVtcCBvcHBvc2l0ZSByaWdodFwiLCBcImp1bXAgb3Bwb3NpdGUgcmlnaHQgdGhyaWNlXCIsIFwid2Fsa1wiLlxuXG5ROiBydW4gbGVmdCB0d2ljZSBhbmQgcnVuIHJpZ2h0XG5BOiBcInJ1biBsZWZ0IHR3aWNlXCIgY2FuIGJlIHNvbHZlZCBieTogXCJydW4gbGVmdFwiLCBcInJ1biBsZWZ0IHR3aWNlXCIuIFwicnVuIHJpZ2h0XCIgY2FuIGJlIHNvbHZlZCBieSBcInJ1biByaWdodFwiLiBTbywgXCJydW4gbGVmdCB0d2ljZSBhbmQgcnVuIHJpZ2h0XCIgY2FuIGJlIHNvbHZlZCBieTogXCJydW4gbGVmdFwiLCBcInJ1biBsZWZ0IHR3aWNlXCIsIFwicnVuIHJpZ2h0XCIuXG5cblE6IHJ1biBvcHBvc2l0ZSByaWdodFxuQTogXCJydW4gb3Bwb3NpdGUgcmlnaHRcIiBjYW4gYmUgc29sdmVkIGJ5IFwicnVuIG9wcG9zaXRlIHJpZ2h0XCIuXG5cblE6IGxvb2sgb3Bwb3NpdGUgcmlnaHQgdGhyaWNlIGFmdGVyIHdhbGtcbkE6IFwibG9vayBvcHBvc2l0ZSByaWdodCB0aHJpY2VcIiBjYW4gYmUgc29sdmVkIGJ5OiBcImxvb2sgb3Bwb3NpdGUgcmlnaHRcIiwgXCJsb29rIG9wcG9zaXRlIHJpZ2h0IHRocmljZVwiLiBcIndhbGtcIiBjYW4gYmUgc29sdmVkIGJ5IFwid2Fsa1wiLiBTbywgXCJsb29rIG9wcG9zaXRlIHJpZ2h0IHRocmljZSBhZnRlciB3YWxrXCIgY2FuIGJlIHNvbHZlZCBieTogXCJsb29rIG9wcG9zaXRlIHJpZ2h0XCIsIFwibG9vayBvcHBvc2l0ZSByaWdodCB0aHJpY2VcIiwgXCJ3YWxrXCIuXG5cblE6IGp1bXAgYXJvdW5kIHJpZ2h0XG5BOiBcImp1bXAgYXJvdW5kIHJpZ2h0XCIgY2FuIGJlIHNvbHZlZCBieTogXCJqdW1wIHJpZ2h0XCIsIFwianVtcCBhcm91bmQgcmlnaHRcIi4gU28sIFwianVtcCBhcm91bmQgcmlnaHRcIiBjYW4gYmUgc29sdmVkIGJ5OiBcImp1bXAgcmlnaHRcIiwgXCJqdW1wIGFyb3VuZCByaWdodFwiLlxuXG5ROiBsb29rIGFyb3VuZCByaWdodCB0aHJpY2UgYW5kIHdhbGtcbkE6IFwibG9vayBhcm91bmQgcmlnaHQgdGhyaWNlXCIgY2FuIGJlIHNvbHZlZCBieTogXCJsb29rIHJpZ2h0XCIsIFwibG9vayBhcm91bmQgcmlnaHRcIiwgXCJsb29rIGFyb3VuZCByaWdodCB0aHJpY2VcIi4gXCJ3YWxrXCIgY2FuIGJlIHNvbHZlZCBieSBcIndhbGtcIi4gU28sIFwibG9vayBhcm91bmQgcmlnaHQgdGhyaWNlIGFuZCB3YWxrXCIgY2FuIGJlIHNvbHZlZCBieTogXCJsb29rIHJpZ2h0XCIsIFwibG9vayBhcm91bmQgcmlnaHRcIiwgXCJsb29rIGFyb3VuZCByaWdodCB0aHJpY2VcIiwgXCJ3YWxrXCIuXG5cblE6IHR1cm4gcmlnaHQgYWZ0ZXIgcnVuIHJpZ2h0IHRocmljZVxuQTogXCJ0dXJuIHJpZ2h0XCIgY2FuIGJlIHNvbHZlZCBieTogXCJ0dXJuIHJpZ2h0XCIuIFwicnVuIHJpZ2h0IHRocmljZVwiIGNhbiBiZSBzb2x2ZWQgYnk6IFwicnVuIHJpZ2h0XCIsIFwicnVuIHJpZ2h0IHRocmljZVwiLiBTbywgXCJ0dXJuIHJpZ2h0IGFmdGVyIHJ1biByaWdodCB0aHJpY2VcIiBjYW4gYmUgc29sdmVkIGJ5OiBcInR1cm4gcmlnaHRcIiwgXCJydW4gcmlnaHRcIiwgXCJydW4gcmlnaHQgdGhyaWNlXCIuXG5cblE6IGp1bXAgYXJvdW5kIGxlZnQgdHdpY2UgYWZ0ZXIgd2FsayBvcHBvc2l0ZSBsZWZ0IHRocmljZVxuQToiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"upaya-kedua-least-to-most-langkah-kedua---pemetaan"},"Upaya kedua: Least to Most, langkah kedua - Pemetaan"),(0,d.kt)("p",null,"Pada langkah kedua, kami menggunakan output dari reduksi, dan lagi menggunakan prompt yang cukup panjang (14 kasus) untuk menerjemahkan deskripsi bahasa alami yang telah direduksi menjadi urutan tindakan."),(0,d.kt)("p",null,"Di sini, kita menyuntikkan output langkah pertama:"),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},'"melompatlah ke sebelah kiri dua kali" bisa diselesaikan dengan: "melompat ke kiri", "melompat mengelilingi ke kiri", "melompat mengelilingi ke kiri dua kali". "berjalan ke arah berlawanan ke kiri tiga kali" dapat diselesaikan dengan: "berjalan ke arah berlawanan ke kiri", "berjalan ke arah berlawanan ke kiri tiga kali". Jadi, "melompat ke kiri dua kali setelah berjalan ke seberang kiri tiga kali" dapat dipecahkan dengan: "melompat ke kiri", "melompat ke sekitar kiri", "melompat ke sekitar kiri dua kali", "berjalan ke seberang kiri", "berjalan ke seberang kiri tiga kali".')),(0,d.kt)("p",null,"ke dalam LLM."),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiVGhlIG91dHB1dCBvZiBcImp1bXAgYXJvdW5kIGxlZnQgdHdpY2UgYWZ0ZXIgd2FsayBvcHBvc2l0ZSBsZWZ0IHRocmljZVwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcIndhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIiwgdGhlIG91dHB1dCBvZiBcImp1bXAgYXJvdW5kIGxlZnQgdHdpY2VcIi4gXCJ3YWxrIG9wcG9zaXRlIGxlZnQgdGhyaWNlXCIgb3V0cHV0cyBcIlRVUk4gTEVGVFwiICogMiArIFwiV0FMS1wiICogMy4gXCJqdW1wIGFyb3VuZCBsZWZ0IHR3aWNlXCIgb3V0cHV0cyAoXCJUVVJOIExFRlRcIiArIFwiSlVNUFwiKSAqIDQuIFNvIGNvbmNhdGVuYXRpbmcgdGhlIG91dHB1dCBvZiBcIndhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIiBhbmQgdGhlIG91dHB1dCBvZiBcImp1bXAgYXJvdW5kIGxlZnQgdHdpY2VcIiBsZWFkcyB0byBcIlRVUk4gTEVGVFwiICogMiArIFwiV0FMS1wiICogMyArIChcIlRVUk4gTEVGVFwiICsgXCJKVU1QXCIpICogNC4gU28gdGhlIG91dHB1dCBvZiBcImp1bXAgYXJvdW5kIGxlZnQgdHdpY2UgYWZ0ZXIgd2FsayBvcHBvc2l0ZSBsZWZ0IHRocmljZVwiIGlzIFwiVFVSTiBMRUZUXCIgKiAyICsgXCJXQUxLXCIgKiAzICsgKFwiVFVSTiBMRUZUXCIgKyBcIkpVTVBcIikgKiA0LiIsInByb21wdCI6IlE6IHR1cm4gbGVmdFxuQTogXCJ0dXJuIGxlZnRcIiBvdXRwdXRzIFwiVFVSTiBMRUZUXCIuXG5cblE6IHR1cm4gcmlnaHRcbkE6IFwidHVybiByaWdodFwiIG91dHB1dHMgXCJUVVJOIFJJR0hUXCIuXG5cblE6IGp1bXAgbGVmdFxuQTogVGhlIG91dHB1dCBvZiBcImp1bXAgbGVmdFwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInR1cm4gbGVmdFwiLCB0aGUgb3V0cHV0IG9mIFwianVtcFwiLiBcInR1cm4gbGVmdFwiIG91dHB1dHMgXCJUVVJOIExFRlRcIi4gXCJqdW1wXCIgb3V0cHV0cyBcIkpVTVBcIi4gU28gY29uY2F0ZW5hdGluZyB0aGUgb3V0cHV0IG9mIFwidHVybiBsZWZ0XCIgYW5kIHRoZSBvdXQtIHB1dCBvZiBcImp1bXBcIiBsZWFkcyB0byBcIlRVUk4gTEVGVFwiICsgXCJKVU1QXCIuIFNvIHRoZSBvdXRwdXQgb2YgXCJqdW1wIGxlZnRcIiBpcyBcIlRVUk4gTEVGVFwiICsgXCJKVU1QXCIuXG5cblE6IHJ1biByaWdodFxuQTogVGhlIG91dHB1dCBvZiBcInJ1biByaWdodFwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIiwgdGhlIG91dHB1dCBvZiBcInJ1blwiLiBcInR1cm4gcmlnaHRcIiBvdXRwdXRzIFwiVFVSTiBSSUdIVFwiLiBcInJ1blwiIG91dHB1dHMgXCJSVU5cIi4gU28gY29uY2F0ZW5hdGluZyB0aGUgb3V0cHV0IG9mIFwidHVybiByaWdodFwiIGFuZCB0aGUgb3V0cHV0IG9mIFwicnVuXCIgbGVhZHMgdG8gXCJUVVJOIFJJR0hUXCIgKyBcIlJVTlwiLiBTbyB0aGUgb3V0cHV0IG9mIFwicnVuIHJpZ2h0XCIgaXMgXCJUVVJOIFJJR0hUXCIgKyBcIlJVTlwiLlxuXG5ROiBsb29rIHR3aWNlXG5BOiBUaGUgb3V0cHV0IG9mIFwibG9vayB0d2ljZVwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcImxvb2tcIiwgdGhlIG91dHB1dCBvZiBcImxvb2tcIi4gXCJsb29rXCIgb3V0cHV0cyBcIkxPT0tcIi4gU28gcmVwZWF0aW5nIHRoZSBvdXRwdXQgb2YgXCJsb29rXCIgdHdvIHRpbWVzIGxlYWRzIHRvIFwiTE9PS1wiICogMi4gU28gdGhlIG91dHB1dCBvZiBcImxvb2sgdHdpY2VcIiBpcyBcIkxPT0tcIiAqIDIuXG5cblE6IHJ1biBhbmQgbG9vayB0d2ljZVxuQTogVGhlIG91dHB1dCBvZiBcInJ1biBhbmQgbG9vayB0d2ljZVwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInJ1blwiLCB0aGUgb3V0cHV0IG9mIFwibG9vayB0d2ljZVwiLiBcInJ1blwiIG91dHB1dHMgXCJSVU5cIi4gXCJsb29rIHR3aWNlXCIgb3V0cHV0cyBcIkxPT0tcIiAqIDIuIFNvIGNvbmNhdGVuYXRpbmcgdGhlIG91dHB1dCBvZiBcInJ1blwiIGFuZCB0aGUgb3V0cHV0IG9mIFwibG9vayB0d2ljZVwiIGxlYWRzIHRvIFwiUlVOXCIgKyBcIkxPT0tcIiAqIDIuIFNvIHRoZSBvdXRwdXQgb2YgXCJydW4gYW5kIGxvb2sgdHdpY2VcIiBpcyBcIlJVTlwiICsgXCJMT09LXCIgKiAyLlxuXG5ROiBqdW1wIHJpZ2h0IHRocmljZVxuQTogVGhlIG91dHB1dCBvZiBcImp1bXAgcmlnaHQgdGhyaWNlXCIgY29uY2F0ZW5hdGVzOiB0aGUgb3V0cHV0IG9mIFwianVtcCByaWdodFwiLCB0aGUgb3V0cHV0IG9mIFwianVtcCByaWdodFwiLCB0aGUgb3V0cHV0IG9mIFwianVtcCByaWdodFwiLiBcImp1bXAgcmlnaHRcIiBvdXRwdXRzIFwiVFVSTiBSSUdIVFwiICsgXCJKVU1QXCIuIFNvIHJlcGVhdGluZyB0aGUgb3V0cHV0IG9mIFwianVtcCByaWdodFwiIHRocmVlIHRpbWVzIGxlYWRzIHRvIChcIlRVUk4gUklHSFRcIiArIFwiSlVNUFwiKSAqIDMuIFNvIHRoZSBvdXRwdXQgb2YgXCJqdW1wIHJpZ2h0IHRocmljZVwiIGlzIChcIlRVUk4gUklHSFRcIiArIFwiSlVNUFwiKSAqIDMuXG5cblE6IHdhbGsgYWZ0ZXIgcnVuXG5BOiBUaGUgb3V0cHV0IG9mIFwid2FsayBhZnRlciBydW5cIiBjb25jYXRlbmF0ZXM6IHRoZSBvdXRwdXQgb2YgXCJydW5cIiwgdGhlIG91dHB1dCBvZiBcIndhbGtcIi4gXCJydW5cIiBvdXRwdXRzIFwiUlVOXCIuIFwid2Fsa1wiIG91dHB1dHMgXCJXQUxLXCIuIFNvIGNvbmNhdGVuYXRpbmcgdGhlIG91dHB1dCBvZiBcInJ1blwiIGFuZCB0aGUgb3V0cHV0IG9mIFwid2Fsa1wiIGxlYWRzIHRvIFwiUlVOXCIgKyBcIldBTEtcIi4gU28gdGhlIG91dHB1dCBvZiBcIndhbGsgYWZ0ZXIgcnVuXCIgaXMgXCJSVU5cIiArIFwiV0FMS1wiLlxuXG5ROiB0dXJuIG9wcG9zaXRlIGxlZnRcbkE6IFRoZSBvdXRwdXQgb2YgXCJ0dXJuIG9wcG9zaXRlIGxlZnRcIiBjb25jYXRlbmF0ZXM6IHRoZSBvdXRwdXQgb2YgXCJ0dXJuIGxlZnRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gbGVmdFwiLiBcInR1cm4gbGVmdFwiIG91dHB1dHMgXCJUVVJOIExFRlRcIi4gU28gcmVwZWF0aW5nIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIGxlZnRcIiB0d2ljZSBsZWFkcyB0byBcIlRVUk4gTEVGVFwiICogMi4gU28gdGhlIG91dHB1dCBvZiBcInR1cm4gb3Bwb3NpdGUgbGVmdFwiIGlzIFwiVFVSTiBMRUZUXCIgKiAyLlxuXG5ROiB0dXJuIGFyb3VuZCBsZWZ0XG5BOiBUaGUgb3V0cHV0IG9mIFwidHVybiBhcm91bmQgbGVmdFwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInR1cm4gbGVmdFwiLCB0aGUgb3V0cHV0IG9mIFwidHVybiBsZWZ0XCIsIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIGxlZnRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gbGVmdFwiLiBcInR1cm4gbGVmdFwiIG91dHB1dHMgXCJUVVJOIExFRlRcIi4gU28gcmVwZWF0aW5nIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIGxlZnRcIiBmb3VyIHRpbWVzIGxlYWRzIHRvIFwiVFVSTiBMRUZUXCIgKiA0LiBTbyB0aGUgb3V0cHV0IG9mIFwidHVybiBhcm91bmQgbGVmdFwiIGlzIFwiVFVSTiBMRUZUXCIgKiA0LlxuXG5ROiB0dXJuIG9wcG9zaXRlIHJpZ2h0XG5BOiBUaGUgb3V0cHV0IG9mIFwidHVybiBvcHBvc2l0ZSByaWdodFwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIi4gXCJ0dXJuIHJpZ2h0XCIgb3V0cHV0cyBcIlRVUk4gUklHSFRcIi4gU28gcmVwZWF0aW5nIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIHJpZ2h0XCIgdHdpY2UgbGVhZHMgdG8gXCJUVVJOIFJJR0hUXCIgKiAyLiBTbyB0aGUgb3V0cHV0IG9mIFwidHVybiBvcHBvc2l0ZSByaWdodFwiIGlzIFwiVFVSTiBSSUdIVFwiICogMi5cblxuUTogdHVybiBhcm91bmQgcmlnaHRcbkE6IFRoZSBvdXRwdXQgb2YgXCJ0dXJuIGFyb3VuZCByaWdodFwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIi4gXCJ0dXJuIHJpZ2h0XCIgb3V0cHV0cyBcIlRVUk4gUklHSFRcIi4gU28gcmVwZWF0aW5nIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIHJpZ2h0XCIgZm91ciB0aW1lcyBsZWFkcyB0byBcIlRVUk4gUklHSFRcIiAqIDQuIFNvIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIGFyb3VuZCByaWdodFwiIGlzIFwiVFVSTiBSSUdIVFwiICogNC5cblxuUTogd2FsayBvcHBvc2l0ZSBsZWZ0XG5BOiBUaGUgb3V0cHV0IG9mIFwid2FsayBvcHBvc2l0ZSBsZWZ0XCIgY29uY2F0ZW5hdGVzOiB0aGUgb3V0cHV0IG9mIFwidHVybiBvcHBvc2l0ZSBsZWZ0XCIsIHRoZSBvdXRwdXQgb2YgXCJ3YWxrXCIuIFwidHVybiBvcHBvc2l0ZSBsZWZ0XCIgb3V0cHV0cyBcIlRVUk4gTEVGVFwiICogMi4gXCJ3YWxrXCIgb3V0cHV0cyBcIldBTEtcIi4gU28gY29uY2F0ZW5hdGluZyB0aGUgb3V0cHV0IG9mIFwidHVybiBvcHBvc2l0ZSBsZWZ0XCIgYW5kIHRoZSBvdXRwdXQgb2YgXCJ3YWxrXCIgbGVhZHMgdG8gXCJUVVJOIExFRlRcIiAqIDIgKyBcIldBTEtcIi4gU28gdGhlIG91dHB1dCBvZiBcIndhbGsgb3Bwb3NpdGUgbGVmdFwiIGlzIFwiVFVSTiBMRUZUXCIgKiAyICsgXCJXQUxLXCIuXG5cblE6IHdhbGsgYXJvdW5kIGxlZnRcbkE6IFRoZSBvdXRwdXQgb2YgXCJ3YWxrIGFyb3VuZCBsZWZ0XCIgY29uY2F0ZW5hdGVzOiB0aGUgb3V0cHV0IG9mIFwid2FsayBsZWZ0XCIsIHRoZSBvdXRwdXQgb2YgXCJ3YWxrIGxlZnRcIiwgdGhlIG91dHB1dCBvZiBcIndhbGsgbGVmdFwiLCB0aGUgb3V0cHV0IG9mIFwid2FsayBsZWZ0XCIuIFwid2FsayBsZWZ0XCIgb3V0cHV0cyBcIlRVUk4gTEVGVFwiICsgXCJXQUxLXCIuIFNvIHJlcGVhdGluZyB0aGUgb3V0cHV0IG9mIFwid2FsayBhcm91bmQgbGVmdFwiIGZvdXIgdGltZXMgbGVhZHMgdG8gKFwiVFVSTiBMRUZUXCIgKyBcIldBTEtcIikgKiA0LiBTbyB0aGUgb3V0cHV0IG9mIFwid2FsayBhcm91bmQgbGVmdFwiIGlzIChcIlRVUk4gTEVGVFwiICsgXCJXQUxLXCIpICogNC5cblxuUTogXCJqdW1wIGFyb3VuZCBsZWZ0IHR3aWNlIGFmdGVyIHdhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIiBcbkE6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"hasil-1"},"Hasil"),(0,d.kt)("p",null,"LtM menghasilkan beberapa perbaikan:"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"akurasi yang meningkat dibandingkan dengan Chain of Thought"),(0,d.kt)("li",{parentName:"ul"},"generalisasi yang meningkat pada masalah yang lebih sulit dibanding yang ada dalam petunjuk"),(0,d.kt)("li",{parentName:"ul"},"performa yang meningkat secara dramatis dalam generalisasi komposisi, khususnya pada benchmark SCAN",(0,d.kt)("sup",{parentName:"li",id:"fnref-3"},(0,d.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")))),(0,d.kt)("p",null,"Standard memancing dengan teks-dewa-002 (model yang digunakan dalam kertas) menghasilkan 6% masalah SCAN berhasil diselesaikan, sedangkan memancing dari Sedikit ke Banyak menghasilkan tingkat keberhasilan 76% yang mengesankan. Hasilnya jauh lebih signifikan dengan kode-davinci-002, di mana Prompting dari Paling Sedikit ke Paling Banyak mencapai tingkat keberhasilan 99,7%."),(0,d.kt)("div",{className:"footnotes"},(0,d.kt)("hr",{parentName:"div"}),(0,d.kt)("ol",{parentName:"div"},(0,d.kt)("li",{parentName:"ol",id:"fn-1"},"Zhou, D., Sch\xe4rli, N., Hou, L., Wei, J., Scales, N., Wang, X., Schuurmans, D., Cui, C., Bousquet, O., Le, Q., & Chi, E. (2022). Least-to-Most Prompting Enables Complex Reasoning in Large Language Models.\n",(0,d.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,d.kt)("li",{parentName:"ol",id:"fn-2"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,d.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,d.kt)("li",{parentName:"ol",id:"fn-3"},"Lake, B. M., & Baroni, M. (2018). Generalization without Systematicity: On the Compositional Skills of Sequence-to-Sequence Recurrent Networks. https://doi.org/10.48550/arXiv.1711.00350\n",(0,d.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}o.isMDXComponent=!0}}]);