(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{4214:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/characterdetail/Detail",function(){return s(6910)}])},367:function(e,t,s){"use strict";var l=s(5893),a=s(9332);s(7294),t.Z=()=>{let e=(0,a.useRouter)();return(0,l.jsxs)("div",{className:"flex fixed items-center w-full h-20 bg-white z-40 text-black",children:[(0,l.jsx)("img",{className:"w-32 ml-52 cursor-pointer",src:"https://genshin-impact-info.github.io/GenshinImpact_inform/images/logo.png",onClick:()=>e.push("/")}),(0,l.jsxs)("ul",{className:"flex ml-20",children:[(0,l.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/Character"),children:["Character",(0,l.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]}),(0,l.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/Weapons"),children:["Weapons",(0,l.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]}),(0,l.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/Artifacts"),children:["Artifacts",(0,l.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]}),(0,l.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/Boss"),children:["Boss",(0,l.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]}),(0,l.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/God"),children:["God",(0,l.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]}),(0,l.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/Universe"),children:["Universe",(0,l.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]})]})]})}},6910:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var l=s(5893),a=s(7294),n=s(6154),i=s(367);s(4685);var c=s(1163),r=s(701);function o(){let e=(0,c.useRouter)(),[t,s]=(0,a.useState)([]),[o,u]=(0,a.useState)(!1),[m,h]=(0,a.useState)(!1),[x,d]=(0,a.useState)(!1),[f,p]=(0,a.useState)(20),[g,w]=(0,a.useState)([]),[j,b]=(0,a.useState)(),[N,v]=(0,a.useState)([]),[k,y]=(0,a.useState)([]),[_,C]=(0,a.useState)([]),[S,E]=(0,a.useState)([]),[P,A]=(0,a.useState)(0);function Z(){u(!o)}function I(){h(!m)}function O(){d(!x)}async function z(){let{id:t,element:s}=e.query;try{let e=await n.Z.get("https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/view/fate?ele=".concat(s,"&id=").concat(t)),l=e.data;v(l.data),console.log(l.data[0].comment)}catch(e){console.error("Error fetching JSON:",e)}}async function F(){let{id:t,element:s}=e.query;try{let e=await n.Z.get("https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/view/characteristic?ele=".concat(s,"&id=").concat(t)),l=e.data;C(l.data),console.log(l.data[0].comment)}catch(e){console.error("Error fetching JSON:",e)}}async function J(t){if(t!==f){p(t);let{id:s,element:l}=e.query;try{await p(t);let e=await n.Z.get("https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/view/breakthrough?ele=".concat(l,"&id=").concat(s,"&level=").concat(t)),a=e.data;w(a.data.items),b(a.data),console.log(g)}catch(e){console.error("Error fetching JSON:",e)}}return"".concat(t)}return(0,a.useEffect)(()=>{if(P<=1){let{id:t,element:l}=e.query;console.log(t,l),n.Z.get("https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/view?ele=".concat(l,"&id=").concat(t)).then(e=>{let t=e.data;s(t.data),A(P+1)}).catch(e=>console.error("Error fetching JSON:",e)),n.Z.get("https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/view/breakthrough?ele=".concat(l,"&id=").concat(t,"&level=20")).then(e=>{let t=e.data;w(t.data.items)}).catch(e=>console.error("Error fetching JSON:",e)),z(),F()}},[t]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{}),(0,l.jsxs)("div",{className:"w-full h-[100vh] flex items-center",children:[(0,l.jsx)("img",{src:t.detail,className:"absolute w-full h-full bg-no-repeat z-[-1]"}),(0,l.jsxs)("div",{className:"flex w-auto min-w-[30%] h-full justify-center items-center",children:[(0,l.jsx)("img",{src:t.img,className:"w-auto h-[80%] pt-28"}),(0,l.jsx)("p",{className:"absolute text-[6vw] mt-[65vh] text-[#FF5C00] z-[1]",children:t.name}),(0,l.jsx)("p",{className:"absolute text-[6vw] mt-[66.5vh] ml-[0.75%] drop-shadow-[0_0px_25px_rgba(0,0,0,1)]",children:t.name})]}),(0,l.jsxs)("div",{className:"flex w-[70%] h-full p-8 pt-20 flex-col items-end justify-center",children:[(0,l.jsxs)("div",{name:"정보상자",className:"flex w-[80%] h-[20%] pt-4 justify-end items-center",children:[(0,l.jsx)("img",{src:"https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/break/break.png",className:"w-auto ml-12 h-[80%] drop-shadow-[0_0px_10px_rgba(0,0,0,1)] cursor-pointer transition-all ease-in-out duration-300 scale-100 hover:scale-110",onClick:()=>Z()}),(0,l.jsx)("img",{src:t.chapter,className:"w-auto ml-12 h-[80%] drop-shadow-[0_0px_10px_rgba(0,0,0,1)] cursor-pointer transition-all ease-in-out duration-300 scale-100 hover:scale-110",onClick:()=>I()}),(0,l.jsx)("img",{src:t.talent,className:"w-auto ml-12 h-[80%] drop-shadow-[0_0px_10px_rgba(0,0,0,1)] cursor-pointer transition-all ease-in-out duration-300 scale-100 hover:scale-110",onClick:()=>O()})]}),(0,l.jsxs)("div",{name:"소속상자",className:"flex justify-end items-center w-1/2 h-[10%]",children:[(0,l.jsx)("p",{className:"mr-4 text-[2.3vw] text-white drop-shadow-[0_0px_25px_rgba(0,0,0,1)]",children:"소속"}),(0,l.jsx)("img",{src:t.affiliation,className:"w-auto h-[70%] border-0 rounded-2xl bg-[#00bfa5] drop-shadow-[0_0px_10px_rgba(0,0,0,1)] cursor-pointer"})]}),(0,l.jsx)("p",{name:"캐릭터 한줄 대사",className:"text-[3vw] -mt-2 mb-20 text-end text-white drop-shadow-[0_0px_25px_rgba(0,0,0,1)]",children:t.text}),(0,l.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:"w-1/2",src:t.video})]})]}),o?(0,l.jsxs)("div",{className:"absolute inset-0 flex z-50 bg-black bg-opacity-70 backdrop-blur-sm w-full h-full",children:[(0,l.jsxs)("div",{className:"w-full h-32 flex justify-between items-center pr-12 text-5xl text-white cursor-pointer",children:[(0,l.jsx)("h2",{className:"font-thin pl-8 pt-0",children:"돌파재료"}),(0,l.jsx)("p",{onClick:Z,children:"X"})]}),(0,l.jsxs)("div",{className:"absolute w-4/6 h-1/2 mt-80 mx-auto flex flex-col items-center   left-1/2 -translate-x-1/2",children:[(0,l.jsxs)("h2",{className:" text-5xl text-white",children:["Level ",f]}),(0,l.jsx)(r.ZP,{className:"mt-4","aria-label":"Restricted values",defaultValue:20,getAriaValueText:J,step:null,marks:[{value:20},{value:40},{value:50},{value:60},{value:70},{value:80}],min:20,max:80,valueLabelDisplay:"on",sx:{color:"white",height:"10px",width:"920px"}}),(0,l.jsx)("div",{className:"w-full h-full mt-4 flex justify-center items-end",children:g.map((e,t)=>(0,l.jsxs)("div",{className:"h-full flex flex-col justify-center items-center mr-20 text-white text-lg",children:[(0,l.jsx)("img",{src:"".concat(e.img),className:"w-24 pb-10"}),(0,l.jsx)("p",{children:e.name+" "+e.count+"개"})]},t))})]})]}):null,m?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"absolute inset-0 flex-col z-50 bg-black bg-opacity-70 px-8 backdrop-blur-sm w-full h-full`",children:[(0,l.jsxs)("div",{className:"w-full h-1/6 flex justify-between items-center pr-12 text-5xl text-white cursor-pointer",children:[(0,l.jsx)("h2",{className:"font-thin pl-8 pt-0",children:"운명의자리"}),(0,l.jsx)("p",{onClick:I,children:"X"})]}),(0,l.jsxs)("div",{className:"w-full h-5/6 flex items-center",children:[(0,l.jsx)("div",{className:"h-5/6 w-2/12 flex flex-col justify-between items-center",children:N.map((e,t)=>(0,l.jsx)("div",{class:"mx-auto flex h-20 w-20 items-center justify-center",children:(0,l.jsx)("div",{class:"h-full w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5",children:(0,l.jsx)("div",{class:"flex h-full w-full rounded-full items-center justify-center bg-gray-800 back",children:(0,l.jsx)("img",{className:"cursor-pointer",src:e.img,onClick:()=>{y(N[t]),console.log(N[t])}})})})},t))}),(0,l.jsxs)("div",{className:"h-full w-10/12 flex flex-row items-center justify-between text-white pr-36",children:[(0,l.jsx)("div",{className:"flex flex-col justify-center items-center h-full w-2/6 mr-8",children:(0,l.jsx)("img",{className:"w-[150px]",src:k.img})}),(0,l.jsxs)("div",{className:"flex flex-col h-full w-4/6 justify-center",children:[(0,l.jsx)("p",{className:"text-5xl mb-8",children:k.name}),(0,l.jsx)("p",{className:"text-4xl",children:k.comment})]})]})]})]})}):null,x?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"absolute inset-0 flex-col z-50 bg-black bg-opacity-70 px-8 backdrop-blur-sm w-full h-full`",children:[(0,l.jsxs)("div",{className:"w-full h-1/6 flex justify-between items-center pr-12 text-5xl text-white cursor-pointer",children:[(0,l.jsx)("h2",{className:"font-thin pl-8 pt-0",children:"특성"}),(0,l.jsx)("p",{onClick:O,children:"X"})]}),(0,l.jsxs)("div",{className:"w-full h-5/6 flex items-center",children:[(0,l.jsx)("div",{className:"h-5/6 w-2/12 flex flex-col justify-between items-center",children:_.map((e,t)=>(0,l.jsx)("div",{class:"mx-auto flex h-20 w-20 items-center justify-center",children:(0,l.jsx)("div",{class:"h-full w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5",children:(0,l.jsx)("div",{class:"flex h-full w-full rounded-full items-center justify-center bg-gray-800 back",children:(0,l.jsx)("img",{className:"cursor-pointer",src:e.img,onClick:()=>{E(_[t]),console.log(_[t])}})})})},t))}),(0,l.jsxs)("div",{className:"h-full w-10/12 flex flex-row items-center justify-between text-white pr-36",children:[(0,l.jsx)("div",{className:"flex flex-col justify-center items-center h-full w-2/6 mr-8",children:(0,l.jsx)("img",{className:"w-[150px]",src:S.img})}),(0,l.jsxs)("div",{className:"flex flex-col h-full w-4/6 justify-center",children:[(0,l.jsx)("p",{className:"text-5xl mb-8",children:S.name}),(0,l.jsx)("p",{className:"text-4xl",children:S.comment})]})]})]})]})}):null]})}},4685:function(){}},function(e){e.O(0,[774,316,307,888,179],function(){return e(e.s=4214)}),_N_E=e.O()}]);