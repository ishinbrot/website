(this.webpackJsonpishinbrot=this.webpackJsonpishinbrot||[]).push([[0],{20:function(e,t,a){e.exports={Summary:"Projects_Summary__2q0Ct",Divider:"Projects_Divider__3yjAO"}},47:function(e,t,a){e.exports={root:"GridComponent_root__1oWpn",bullet:"GridComponent_bullet__1umaW",summary:"GridComponent_summary__XWeAC",container:"GridComponent_container__336u0"}},59:function(e,t,a){e.exports={Summary:"About_Summary__JLLf3"}},60:function(e,t,a){e.exports={root:"CardComponent_root__2uXO_",container:"CardComponent_container__2Rhd9"}},61:function(e,t,a){e.exports={Summary:"Contact_Summary__A6aic"}},62:function(e,t,a){e.exports={Summary:"Home_Summary__35Hgy"}},74:function(e,t,a){e.exports=a(87)},79:function(e,t,a){},80:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),l=(a(79),a(80),a(19)),c=a(23),s=a(21),m=a(117),u=a(119),p=a(120),d=a(42),h=a(63),f=(a(3),a(128)),E=a(112),b=a(129),y=a(115),k=a(116),g=a(44),w=a.n(g),S=a(38),v=a.n(S),C=a(40),T=a.n(C),_=a(39),A=a.n(_),I=a(41),x=a.n(I),j=a(118),N=Object(m.a)({list:{width:250},fullList:{width:"auto"}}),P=function(e){var t=N(),a=o.a.useState({open:!1}),n=Object(s.a)(a,2),r=n[0],i=n[1],c=function(e){return function(e){i(Object(h.a)({},r,{open:!r.open}))}};return o.a.createElement("div",{onClick:c()},o.a.createElement(j.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(w.a,null)),o.a.createElement(f.a,{anchor:"left",open:r.open,onClose:c()},o.a.createElement("div",{role:"presentation",onClick:c(),onKeyDown:c()},o.a.createElement(E.a,null,o.a.createElement(b.a,{button:!0,key:"Home",component:l.c,to:"Home"},o.a.createElement(y.a,null,o.a.createElement(v.a,null)),o.a.createElement(k.a,{primary:"Home"})),o.a.createElement(b.a,{button:!0,key:"About",component:l.c,to:"About"},o.a.createElement(y.a,null,o.a.createElement(A.a,null)),o.a.createElement(k.a,{primary:"About"})),o.a.createElement(b.a,{button:!0,key:"Projects",component:l.c,to:"Projects"},o.a.createElement(y.a,null,o.a.createElement(T.a,null)),o.a.createElement(k.a,{primary:"Projects"})),o.a.createElement(b.a,{button:!0,key:"Contact",component:l.c,to:"Contact"},o.a.createElement(y.a,null,o.a.createElement(x.a,null)),o.a.createElement(k.a,{primary:"Contact"}))))))},O=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function D(e){var t=O(),a=Object(n.useState)(!1),r=Object(s.a)(a,2),i=(r[0],r[1],Object(c.f)());var l=i.pathname.includes("website")?"About - Ian Shinbrot":i.pathname.replace("/","")+"   -   Ian Shinbrot";return o.a.createElement("div",{className:t.root},o.a.createElement(u.a,{position:"fixed"},o.a.createElement(p.a,null,o.a.createElement(P,{click:e.click}),o.a.createElement(d.a,{variant:"h6",className:t.title},l))))}function M(e){window.location.href=e}var L=a(59),B=a.n(L),H=a(125),R=a(47),G=a.n(R),W=a(123),q=a(122),J=a(124),F=a(121),K=a(60),z=a.n(K),U=function(e){return o.a.createElement(F.a,{className:z.a.root},o.a.createElement(q.a,null,o.a.createElement(d.a,{variant:"h5",component:"h2"},e.title),o.a.createElement(d.a,{variant:"body2",component:"p"},e.description)),o.a.createElement(W.a,null,o.a.createElement(J.a,{size:"small",onClick:e.click},e.linkTitle)))},V=function(e){return o.a.createElement("div",{className:G.a.container},e.cards.map((function(e){return o.a.createElement(H.a,{container:!0,spacing:1,className:G.a.container},o.a.createElement(H.a,{container:!0,item:!0,xs:12,spacing:3},o.a.createElement(U,{title:e.title,description:e.description,linkTitle:e.linkTitle,click:e.click})))})))},X=a(127);function Q(){return Math.round(20*Math.random())-10}function $(){var e=50+Q(),t=50+Q();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var Y=Object(m.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),Z=function(e){var t=Y(),a=o.a.useState($),n=Object(s.a)(a,1)[0],r=o.a.createElement("div",{style:n,className:t.paper},o.a.createElement("h2",{id:"simple-modal-title"},e.title),e.text,o.a.createElement(J.a,{onClick:e.click},"CLOSE"));return o.a.createElement("div",null,o.a.createElement(X.a,{open:e.display,onClose:e.click,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r))},ee=o.a.createElement("p",{className:B.a.Summary},"Hello, My name is Ian Shinbrot. I am currently an Software Developer at Equisoft.",o.a.createElement("br",null),"I graduated from Drexel in June 2016 with a bachelors degree in Computer Science. At Drexel, I have completed three different co-ops, 6-month internships. My first co-op was at Independence Blue Cross, while my second and third co-op were both at NextDocs, which was acquired by Aurea during my third co-op. Please click one of the below links to learn more information."),te=o.a.createElement("div",null,o.a.createElement("h4",null,"Equisoft"),"I currently work at Equisoft as a Software Developer working as a software cons",o.a.createElement("h4",null,"Lockheed Martin"),"I currently work at Lockheed Martin as an Associate Software Engineer working on the LRDR radar system. I work in an Agile Scrum Environment utilizing C++ as the primary language, while performing some tasks with bash scripting. My project utilizing GIT, Crucible, and Jenkins for our primary functions",o.a.createElement("h4",null,"NextDocs"),"I worked  at NextDocs for two of my co-ops, between March-September 2014-2015. NextDocs was acquired by Aurea during my third co-op in June 2015. At NextDocs I worked on the NextDocs Suite of Applications consisting of the Regulatory, SOP, and eTMF platforms. I was able to quickly learn C#, SQL, and improve my Javascript skills there. as well as my scripting skills.",o.a.createElement("h4",null,"Independence Blue Cross"),"I worked at Independence Blue Cross for 6 months where I performed manual testing of their mobile IBX application, used Adobe Photoshop to design Drug Labels to be used in the application, as well as initiate the move toward automated testing using a program called SeeTest."),ae=function(e){var t=function(){l(!i)},a=Object(n.useState)(!1),r=Object(s.a)(a,2),i=r[0],l=r[1],c=[{title:"Work Experience",description:" I have worked at many companies throughout the years. Click to see more information.",linkTitle:"More Information",click:function(){t()}},{title:"Projects",description:"Click to view my projects",linkTitle:"Projects",click:function(){M("Projects")}},{title:"Resume",description:"Please Check out my updated Resume",linkTitle:"RESUME",click:function(){return M("https://ishinbrot.github.io/ishinbrot/ianShinbrot_resume.pdf")}}];return o.a.createElement("div",null,ee,o.a.createElement(V,{cards:c}),o.a.createElement(Z,{display:i,click:t,text:te,title:"Work Experience"}))},ne=a(61),oe=a.n(ne),re=o.a.createElement("p",{className:oe.a.Summary},"My email address is ianshinbro@gmail.com Stay tuned for updates to this page"),ie=[{title:"Contact Information",description:"Please click the link below to send me an email.",linkTitle:"Email"}],le=function(e){return o.a.createElement("div",null,re,o.a.createElement(V,{cards:ie}))},ce=a(62),se=a.n(ce),me=o.a.createElement("p",{className:se.a.Summary},"Hello, My name is Ian Shinbrot. I am currently an Software Developer at Equisoft.",o.a.createElement("br",null),"Welcome to my site. This site is continuously getting updated. (Last updated March 2020) If you have any feedback feel free to let me know so I can improve the site. Feel free to click any of the links above or from the navigation drawer to find more information."),ue=function(e){return o.a.createElement("div",null,me)},pe=a(20),de=a.n(pe),he=a(126),fe=o.a.createElement("div",{className:de.a.Summary},o.a.createElement("h2",null,"Web Projects"),o.a.createElement("p",{className:de.a.Summary},"Please check out some of my projects below")),Ee=[{title:"Virtual Pest",description:"The Virtual Pest is very similar to a Tamagotchi. The 'pest' has 5 different states that it can show based on the actions the user chooses.",linkTitle:"Virtual Pest"},{title:"CollegeSearch",description:"This is my senior project. I worked on the front-end of the application using both HTML and Angular Material 1.0.It is a college search application that allows you to search for colleges. It currently doesn't run on github pages.This links to the github location of the repository.",linkTitle:"CollegeSearch",click:function(){return M("https://github.com/DrexelSeniorDesign2016Team8/FrontEnd")}}],be=o.a.createElement("div",{className:de.a.Summary},o.a.createElement("h2",null,"ReactNative Applications"),o.a.createElement("p",{className:de.a.Summary},"These are reactNative apps meant to be compatible with the iOS and Android OS. Only the Android APK will be able to be downloaded")),ye=[{title:"GuessANumber",description:"This application is a basic game that is two players. On the initial screen you are prompted to enter a number. On the second screen you can guess if the number is greater or lower",linkTitle:"Download"}],ke=o.a.createElement("div",{className:de.a.Summary},o.a.createElement("h2",null,"Android Applications"),o.a.createElement("p",{className:de.a.Summary},"These Android Applications must be downloaded and installed on an Android phone to run. Make sure you check 'Unknown Sources' in the Security Settings so the applications can be installed.")),ge=[{title:"Septa Train Finder",description:"This application allows a user to find upcoming trains between two Septa stations. Septa is the Philadelphia Subway System. The user will select a starting station and ending station. Hitting TrainInfo will display the upcoming trains between the two stations. Long pressing a train will also inform you of the estimated arrival time, and actual time..",linkTitle:"CS275_A2",click:function(){return M("Projects/CS275_A2.apk)")}},{title:"Parking Lot Database",description:"This program allows a user to add a custom parking lot to a database stored on cloudmine. The application can also display the list of lots added, edit the already existing lots, or find lots within 100 miles of the current location..",linkTitle:"CS275_LAB3",click:function(){return M("Projects/CS275_lab3.apk")}},{title:"trackerBat",description:"This program allows a user to track a baseball players progress. The application allows a player to have multiple games, and multiple at bats. As of January 2017 the application supports saving and full database functionality. If you download my application please leave any comments for the app from the contact page.",linkTitle:"TRACKERBAT",click:function(){return M("Projects/trackerBat.apk")}}],we=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:de.a.Summary},o.a.createElement("p",null,"This page is under active development. Please click the following button to be directed to my github page"),o.a.createElement(J.a,{className:de.a.Summary,variant:"outlined",onClick:function(){return window.location.href="https://github.com/ishinbrot"}},"LINK TO GITHUB")),fe,o.a.createElement(V,{cards:Ee}),o.a.createElement(he.a,null),be,o.a.createElement(V,{cards:ye}),o.a.createElement(he.a,null),ke,o.a.createElement(V,{cards:ge}),o.a.createElement(he.a,null))},Se=function(e){return o.a.createElement(l.b,{basename:"/Home"},o.a.createElement(l.a,{className:"App"},o.a.createElement(D,null),o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/Home",component:ue,exact:!0}),o.a.createElement(c.a,{path:"/About",component:ae,exact:!0}),o.a.createElement(c.a,{path:"/Projects",component:we,exact:!0}),o.a.createElement(c.a,{path:"/Contact",component:le,exact:!0}),o.a.createElement(c.a,{component:ue}))))},ve=function(e){return o.a.createElement(Se,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.b0b099e8.chunk.js.map