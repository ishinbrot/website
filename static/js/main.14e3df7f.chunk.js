(this.webpackJsonpishinbrot=this.webpackJsonpishinbrot||[]).push([[0],{107:function(e,t,a){e.exports=a(121)},112:function(e,t,a){},113:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),l=(a(112),a(113),a(24)),c=a(27),s=a(18),u=a(166),m=a(168),d=a(169),h=a(41),p=a(176),b=a(91),g=(a(3),a(183)),f=a(159),w=a(163),y=a(164),E=a(165),k=a(60),v=a.n(k),S=a(52),I=a.n(S),C=a(39),j=a.n(C),T=a(53),O=a.n(T),x=a(54),P=a.n(x),_=a(167),A=Object(u.a)({list:{width:250},fullList:{width:"auto"}}),N=function(e){var t=A(),a=o.a.useState({open:!1}),n=Object(s.a)(a,2),r=n[0],i=n[1],c=function(e){return function(e){i(Object(b.a)({},r,{open:!r.open}))}};return o.a.createElement("div",{onClick:c()},o.a.createElement(_.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(v.a,null)),o.a.createElement(g.a,{anchor:"left",open:r.open,onClose:c()},o.a.createElement("div",{role:"presentation",onClick:c(),onKeyDown:c()},o.a.createElement(f.a,null,o.a.createElement(w.a,{button:!0,key:"Home",component:l.c,to:"Home"},o.a.createElement(y.a,null,o.a.createElement(I.a,null)),o.a.createElement(E.a,{primary:"Home"})),o.a.createElement(w.a,{button:!0,key:"About",component:l.c,to:"About"},o.a.createElement(y.a,null,o.a.createElement(O.a,null)),o.a.createElement(E.a,{primary:"About"})),o.a.createElement(w.a,{button:!0,key:"Projects",component:l.c,to:"Projects"},o.a.createElement(y.a,null,o.a.createElement(j.a,null)),o.a.createElement(E.a,{primary:"Projects"})),o.a.createElement(w.a,{button:!0,key:"Poetry",component:l.c,to:"Poetry"},o.a.createElement(y.a,null,o.a.createElement(j.a,null)),o.a.createElement(E.a,{primary:"Poetry"})),o.a.createElement(w.a,{button:!0,key:"Contact",component:l.c,to:"Contact"},o.a.createElement(y.a,null,o.a.createElement(P.a,null)),o.a.createElement(E.a,{primary:"Contact"}))))))},W=a(170),D=a(175),H=a(172),M=a(174),B=a(171),L=a(182),z=a(173),G=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function R(e){var t=G(),a=Object(n.useState)(!1),r=Object(s.a)(a,2),i=(r[0],r[1],Object(c.f)());var l=1===i.pathname.length?"Home - Ian Shinbrot":i.pathname.substring(1,i.pathname.length)+" - Ian Shinbrot",u=Object(n.useState)(!1),b=Object(s.a)(u,2),g=b[0],f=b[1],w=Object(n.useState)(!1),y=Object(s.a)(w,2),E=y[0],k=y[1],v=function(){k(!1),f(!1)};return o.a.createElement("div",{className:t.root},o.a.createElement(m.a,{position:"fixed"},o.a.createElement(d.a,null,o.a.createElement(N,{click:e.click}),o.a.createElement(h.a,{variant:"h6",className:t.title},l),o.a.createElement("div",null))),o.a.createElement(W.a,{open:g,onClose:v,"aria-labelledby":"form-dialog-title"},"/*  ",o.a.createElement(B.a,{id:"form-dialog-title"},"Login"),o.a.createElement(H.a,null,E?o.a.createElement(z.a,null):o.a.createElement("div",null,o.a.createElement(M.a,null,"Please enter the username and password below"),o.a.createElement(L.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0}),o.a.createElement(L.a,{margin:"dense",id:"name",label:"Password",type:"password",fullWidth:!0})," ")),o.a.createElement(D.a,null,o.a.createElement(p.a,{onClick:v,disabled:E,color:"primary"},"Cancel"),o.a.createElement(p.a,{onClick:function(){k(!0)},disabled:E,color:"primary"},"Login"))))}function J(e){window.location.href=e}var F=a(81),q=a.n(F),U=a(180),Y=a(63),K=a.n(Y),V=a(179),Q=a(178),X=a(177),Z=a(82),$=a.n(Z),ee=function(e){return o.a.createElement(X.a,{className:$.a.root},o.a.createElement(Q.a,null,o.a.createElement(h.a,{variant:"h5",component:"h2"},e.title),o.a.createElement(h.a,{variant:"body2",component:"p"},e.description)),o.a.createElement(V.a,null,o.a.createElement(p.a,{size:"small",href:e.link,onClick:e.click},e.linkTitle)))},te=function(e){return o.a.createElement("div",null,o.a.createElement(U.a,{container:!0,spacing:3,className:K.a.container},e.cards.map((function(e){return o.a.createElement(U.a,{item:!0,xs:!0},o.a.createElement(ee,{className:K.a.cardComponent,title:e.title,description:e.description,linkTitle:e.linkTitle,click:e.click,link:e.link}))}))))},ae=a(92),ne=a(4),oe=a(83),re=a.n(oe),ie=Object(u.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),le=Object(ne.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,r=Object(ae.a)(e,["children","classes","onClose"]);return o.a.createElement(B.a,Object.assign({disableTypography:!0,className:a.root},r),o.a.createElement(h.a,{variant:"h6"},t),n?o.a.createElement(_.a,{"aria-label":"close",className:a.closeButton,onClick:n},o.a.createElement(re.a,null)):null)})),ce=Object(ne.a)((function(e){return{root:{padding:e.spacing(2)}}}))(H.a),se=function(e){ie();return o.a.createElement("div",null,o.a.createElement(W.a,{onClose:e.click,"aria-labelledby":"customized-dialog-title",open:e.display},o.a.createElement(le,{id:"customized-dialog-title",onClose:e.click},e.title),o.a.createElement(ce,{dividers:!0},o.a.createElement(h.a,{gutterBottom:!0},e.text))))},ue=o.a.createElement("p",{className:q.a.Summary},"Hello, My name is Ian Shinbrot. I am currently a Software Developer at Equisoft.",o.a.createElement("br",null),"I graduated from Drexel in June 2016 with a bachelors degree in Computer Science. I received a certification in Amazon Web Services Cloud Architect as of March 2021. I received a certification in Amazon Cloud Practicioner in December 2020.  ",o.a.createElement("br",null),"While I was at Drexel, I have completed three different co-ops, 6-month internships. My first co-op was at Independence Blue Cross, while my second and third co-op were both at NextDocs, which was acquired by Aurea during my third co-op. Please click one of the below links to learn more information."),me=o.a.createElement("div",null,o.a.createElement("h4",null,"Equisoft"),"I currently work at Equisoft as a Software Developer working as a software consultant on various clients for the OIPA (Oracle Insurance Administration for Life and Annuitites) product. I assist in mentoring new hires, as well as the various client teams in utilizing the OIPA application. I have assisted of SSO implementations utilizing both SAML and Microsoft Azure AD, as well as various RESTful and Soap services. I assist in managing the Nexus and ProGet The main languages and frameworks I worked on have been Spring, Hibernate, Java.",o.a.createElement("h4",null,"Lockheed Martin"),"I currently work at Lockheed Martin as an Associate Software Engineer working on the LRDR radar system. I work in an Agile Scrum Environment utilizing C++ as the primary language, while performing some tasks with bash scripting. My project utilizing GIT, Crucible, and Jenkins for our primary functions",o.a.createElement("h4",null,"NextDocs"),"I worked  at NextDocs for two of my co-ops, between March-September 2014-2015. NextDocs was acquired by Aurea during my third co-op in June 2015. At NextDocs I worked on the NextDocs Suite of Applications consisting of the Regulatory, SOP, and eTMF platforms. I was able to quickly learn C#, SQL, and improve my Javascript skills there. as well as my scripting skills.",o.a.createElement("h4",null,"Independence Blue Cross"),"I worked at Independence Blue Cross for 6 months where I performed manual testing of their mobile IBX application, used Adobe Photoshop to design Drug Labels to be used in the application, as well as initiate the move toward automated testing using a program called SeeTest."),de=function(e){var t=function(){l(!i)},a=Object(n.useState)(!1),r=Object(s.a)(a,2),i=r[0],l=r[1],c=[{title:"Work Experience",description:" I have worked at many companies throughout the years. Click to see more information.",linkTitle:"More Information",click:function(){t()}},{title:"Resume",description:"Please Check out my updated Resume",linkTitle:"RESUME",click:function(){return J("https://github.com/ishinbrot/website/raw/master/src/ianShinbrot_resume.pdf")}}];return o.a.createElement("div",null,ue,o.a.createElement(te,{cards:c}),o.a.createElement(se,{display:i,click:t,text:me,title:"Work Experience"}))},he=a(84),pe=a.n(he),be=o.a.createElement("p",{className:pe.a.Summary},"My email address is ianshinbro@gmail.com Stay tuned for updates to this page"),ge=[{title:"Contact Information",description:"Please click the link below to send me an email.",linkTitle:"Email",link:"mailto:ianshinbro@gmail.com?Subject=Website Feedback"}],fe=function(e){return o.a.createElement("div",null,be,o.a.createElement(te,{cards:ge}))},we=a(85),ye=a.n(we),Ee=o.a.createElement("p",{className:ye.a.Summary},"Hello, My name is Ian Shinbrot. I am currently an Software Developer at Equisoft.",o.a.createElement("br",null),"Welcome to my site. This site is continuously getting updated and has recently been updated using React and Material-UI (Last updated March 2021).",o.a.createElement("br",null)," If you have any feedback feel free to let me know so I can improve the site. Feel free to click any of the links above or from the navigation drawer to find more information."),ke=function(e){return o.a.createElement("div",null,Ee)},ve=a(40),Se=a.n(ve),Ie=a(181),Ce=o.a.createElement("div",{className:Se.a.Summary},o.a.createElement("h2",null,"Web Projects"),o.a.createElement("p",null,"Please check out some of my projects below")),je=[{title:"Virtual Pest",description:"The Virtual Pest is very similar to a Tamagotchi. The 'pest' has 5 different states that it can show based on the actions the user chooses. This utilized REACT.",linkTitle:"Virtual Pest",click:function(){return J("https://ishinbrot.github.io/virtual_pest/")}},{title:"CollegeSearch",description:"This is my senior project. I worked on the front-end of the application using both HTML and Angular Material 1.0.It is a college search application that allows you to search for colleges. It currently doesn't run on github pages.This links to the github location of the repository.",linkTitle:"CollegeSearch",click:function(){return J("https://github.com/DrexelSeniorDesign2016Team8/FrontEnd")}}],Te=o.a.createElement("div",{className:Se.a.Summary},o.a.createElement("h2",null,"ReactNative Applications"),o.a.createElement("p",{className:Se.a.Summary},"These are reactNative apps meant to be compatible with the iOS and Android OS. Only the Android APK will be able to be downloaded")),Oe=[{title:"SHOP",description:"This application allows you to add items to a shopping list and create new orders. The application supports multiple users and everything is stored on firebase.",linkTitle:"Download",click:function(){return J("https://github.com/ishinbrot/website/blob/master/src/Pages/Projects/SHOP.apk")}},{title:"Places",description:"This application allows you to take a picture and specify a location where the picture was taken. The phone is able to locate you by GPS, or you are able to select a location from google maps.",linkTitle:"Download",click:function(){return J("https://github.com/ishinbrot/website/blob/master/src/Pages/Projects/SHOP.apk")}}],xe=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:Se.a.Header},o.a.createElement("p",null,"This page is under active development. Please click the following button to be directed to my github page"),o.a.createElement(p.a,{className:Se.a.Header,variant:"outlined",onClick:function(){return window.location.href="https://github.com/ishinbrot"}},"LINK TO GITHUB")),Ce,o.a.createElement(te,{cards:je}),Te,o.a.createElement(te,{cards:Oe}),o.a.createElement(Ie.a,null))},Pe=a(86),_e=a.n(Pe),Ae=a(87),Ne=function e(t,a){Object(Ae.a)(this,e),this.title=t,this.text=a,this.linkTitle="display Poem"},We=[new Ne("The New Normal","Welcome to the New Normal\nSocial Distancing and wearing face masks\nLuckily we dont have to dress so formal\n We can get through this, we just have to watch our tracks\nAfter all we are all just mortal\nHopefully soon, we can give this virus the ax\nBut for now We are stuck unless we find a portal"),new Ne("Coronavirus Spring","Welcome to Coronavirus Spring\nEnjoy the weather getting hot\nBut be careful, of what going outside may bring\nGo close to someone you should not\n6 feet away you, keeping the distance may sting\nBut within 6 feet coronavirus may star it\u2019s plot\n"),new Ne("Thank you to the Nurses","Thank you to the nurses\nThe front-line workers who treat this bad disease\nYou are preventing this from getting any worse\nUnfortunately this isn\u2019t a breeze\nBut we will get through this, we just have to believe\n"),new Ne("New Day","Welcome to a new day\nIf you go outside don\u2019t forget a Mask\nWhat other options, there is nothing to weigh\nWhy is everything still closed, don\u2019t even ask\nAfter all, we are only still in May\nJust don\u2019t forget to wear a mask, your one task\n"),new Ne("Coronavirus Haircut","What has Coronavirus done\nAll of my hair has grown out\nI can put all of my hair in a bun\nIt has grown thick all throughout\nLet me try and go for a run\nWill my hair get in my face, I highly doubt"),new Ne("Case Count","The number of cases keeps shooting up\nThe increase is happening in every state\nIf you want to distract yourself just get a pup\nAt least the number of death is decreasing at a decent rate\nSome states like Florida are just blowing up\nWhile other states like Pennsylvania are closing the gates\nWe can just look at the numbers and go 'yup'\nAt this point we leave it up to the fates"),new Ne("Masks","Why are we recommended to wear a mask\nFor one simple reason and that\u2019s to stop the spread\nTo wear this on your face, is your one simple task\nWearing this mask won\u2019t cause you to drop dead\nPlease just wear it is all I ask\nSo we can work to stop the spread"),new Ne("The year everything was cancelled","While covid keeps spreading around\nOur country had started to act\nOlympics, Museums, Movie-theaters all shut-down\nAll the races such as broad street also had to react\nThere was nothing to do except go all the way downtown\nBut things started to open again, and people started to make contact\nCovid started to spread again, have we been let-down\nWear a mask to limit the spread, it\u2019s a fact"),new Ne("Camp and Coronavirus","It\u2019s nearing the end of summer break\nSummer camp is starting to end\nAnd what lies in it\u2019s wake\nCoronavirus test results are becoming a trend\nWere you at camp, hanging out by the lake\nYou probably got coronavirus and started a trend\nThat\u2019s when camp started to go on break")],De=o.a.createElement("p",{className:_e.a.Summary},"Here are some poems I created  during the 2020 coronavirus quarantine. "),He=function(e){We.map((function(e){e.click=function(){t(e)}}));var t=function(e){d(e.text),g(e.title),l(!i)},a=Object(n.useState)(!1),r=Object(s.a)(a,2),i=r[0],l=r[1],c=Object(n.useState)(),u=Object(s.a)(c,2),m=u[0],d=u[1],h=Object(n.useState)(),p=Object(s.a)(h,2),b=p[0],g=p[1];return o.a.createElement("div",null,De,o.a.createElement(te,{cards:We}),void 0===m?"":o.a.createElement(se,{display:i,click:t,text:o.a.createElement("p",null,m.split("\n").map((function(e){return o.a.createElement("div",null,e)}))),title:b}))},Me=function(e){return o.a.createElement(l.b,{basename:"/Home"},o.a.createElement(l.a,{className:"App",basename:"/website"},o.a.createElement(R,null),o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/Home",component:ke,exact:!0}),o.a.createElement(c.a,{path:"/About",component:de,exact:!0}),o.a.createElement(c.a,{path:"/Projects",component:xe,exact:!0}),o.a.createElement(c.a,{path:"/Poetry",component:He,exact:!0}),o.a.createElement(c.a,{path:"/Contact",component:fe,exact:!0}),o.a.createElement(c.a,{component:ke}))))},Be=(a(64),a(88),{token:null,userId:null}),Le=a(90),ze=a(46),Ge=Object(ze.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATE":return{token:t.token,userId:t.userId};case"LOGOUT":return Be;default:return e}}}),Re=Object(ze.c)(Ge),Je=function(e){return o.a.createElement(Le.a,{store:Re},o.a.createElement(Me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,a){e.exports={Header:"Projects_Header__ELa6x",Summary:"Projects_Summary__1IJcR",Divider:"Projects_Divider__2Uu8x"}},63:function(e,t,a){e.exports={root:"GridComponent_root__2Fbvb",bullet:"GridComponent_bullet__1ptQh",summary:"GridComponent_summary__1mYEF",container:"GridComponent_container__KaUTu"}},81:function(e,t,a){e.exports={Summary:"About_Summary__29BJH"}},82:function(e,t,a){e.exports={root:"CardComponent_root__1-gvx",container:"CardComponent_container__3cjLz"}},84:function(e,t,a){e.exports={Summary:"Contact_Summary__3ZYuY"}},85:function(e,t,a){e.exports={Summary:"Home_Summary__3xwXk"}},86:function(e,t,a){e.exports={Summary:"Poetry_Summary__3bcGs"}}},[[107,1,2]]]);
//# sourceMappingURL=main.14e3df7f.chunk.js.map