(this.webpackJsonpishinbrot=this.webpackJsonpishinbrot||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),l=(a(111),a(112),a(24)),s=a(27),c=a(18),u=a(165),h=a(167),m=a(168),d=a(41),p=a(175),w=a(66),y=(a(3),a(182)),g=a(158),b=a(162),f=a(163),k=a(164),v=a(60),E=a.n(v),I=a(52),S=a.n(I),T=a(39),j=a.n(T),C=a(53),A=a.n(C),O=a(54),P=a.n(O),_=a(166),x=Object(u.a)({list:{width:250},fullList:{width:"auto"}}),W=function(){var e=x(),t=o.a.useState({open:!1}),a=Object(c.a)(t,2),n=a[0],r=a[1],i=function(e){return function(e){r(Object(w.a)(Object(w.a)({},n),{},{open:!n.open}))}};return o.a.createElement("div",{onClick:i()},o.a.createElement(_.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(E.a,null)),o.a.createElement(y.a,{anchor:"left",open:n.open,onClose:i()},o.a.createElement("div",{role:"presentation",onClick:i(),onKeyDown:i()},o.a.createElement(g.a,null,o.a.createElement(b.a,{button:!0,key:"Home",component:l.c,to:"Home"},o.a.createElement(f.a,null,o.a.createElement(S.a,null)),o.a.createElement(k.a,{primary:"Home"})),o.a.createElement(b.a,{button:!0,key:"About",component:l.c,to:"About"},o.a.createElement(f.a,null,o.a.createElement(A.a,null)),o.a.createElement(k.a,{primary:"About"})),o.a.createElement(b.a,{button:!0,key:"Projects",component:l.c,to:"Projects"},o.a.createElement(f.a,null,o.a.createElement(j.a,null)),o.a.createElement(k.a,{primary:"Projects"})),o.a.createElement(b.a,{button:!0,key:"Poetry",component:l.c,to:"Poetry"},o.a.createElement(f.a,null,o.a.createElement(j.a,null)),o.a.createElement(k.a,{primary:"Poetry"})),o.a.createElement(b.a,{button:!0,key:"Contact",component:l.c,to:"Contact"},o.a.createElement(f.a,null,o.a.createElement(P.a,null)),o.a.createElement(k.a,{primary:"Contact"}))))))},N=a(169),D=a(174),H=a(171),M=a(173),B=a(170),L=a(181),R=a(172),z=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function F(e){var t=z(),a=Object(n.useState)(!1),r=Object(c.a)(a,2),i=(r[0],r[1],Object(s.f)());var l=1===i.pathname.length?"Home - Ian Shinbrot":i.pathname.substring(1,i.pathname.length)+" - Ian Shinbrot",u=Object(n.useState)(!1),w=Object(c.a)(u,2),y=w[0],g=w[1],b=Object(n.useState)(!1),f=Object(c.a)(b,2),k=f[0],v=f[1],E=function(){v(!1),g(!1)};return o.a.createElement("div",{className:t.root},o.a.createElement(h.a,{position:"fixed"},o.a.createElement(m.a,null,o.a.createElement(W,{click:e.click}),o.a.createElement(d.a,{variant:"h6",className:t.title},l),o.a.createElement("div",null))),o.a.createElement(N.a,{open:y,onClose:E,"aria-labelledby":"form-dialog-title"},"/*  ",o.a.createElement(B.a,{id:"form-dialog-title"},"Login"),o.a.createElement(H.a,null,k?o.a.createElement(R.a,null):o.a.createElement("div",null,o.a.createElement(M.a,null,"Please enter the username and password below"),o.a.createElement(L.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0}),o.a.createElement(L.a,{margin:"dense",id:"name",label:"Password",type:"password",fullWidth:!0})," ")),o.a.createElement(D.a,null,o.a.createElement(p.a,{onClick:E,disabled:k,color:"primary"},"Cancel"),o.a.createElement(p.a,{onClick:function(){v(!0)},disabled:k,color:"primary"},"Login"))))}function G(e){window.location.href=e}var J=a(82),V=a.n(J),q=a(179),U=a(63),Y=a.n(U),K=a(178),Q=a(177),X=a(176),Z=a(83),$=a.n(Z),ee=function(e){return o.a.createElement(X.a,{className:$.a.root},o.a.createElement(Q.a,null,o.a.createElement(d.a,{variant:"h5",component:"h2"},e.title),o.a.createElement(d.a,{variant:"body2",component:"p"},e.description)),o.a.createElement(K.a,null,o.a.createElement(p.a,{size:"small",ref:e.link,onClick:e.click},e.linkTitle)))},te=function(e){return o.a.createElement("div",null,o.a.createElement(q.a,{container:!0,spacing:3,className:Y.a.container},e.cards.map((function(e){return o.a.createElement(q.a,{item:!0,xs:!0},o.a.createElement(ee,{className:Y.a.cardComponent,title:e.title,description:e.description,linkTitle:e.linkTitle,click:e.click,link:e.link}))}))))},ae=a(92),ne=a(4),oe=a(84),re=a.n(oe),ie=["children","classes","onClose"],le=Object(u.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),se=Object(ne.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,r=Object(ae.a)(e,ie);return o.a.createElement(B.a,Object.assign({disableTypography:!0,className:a.root},r),o.a.createElement(d.a,{variant:"h6"},t),n?o.a.createElement(_.a,{"aria-label":"close",className:a.closeButton,onClick:n},o.a.createElement(re.a,null)):null)})),ce=Object(ne.a)((function(e){return{root:{padding:e.spacing(2)}}}))(H.a),ue=function(e){le();return o.a.createElement("div",null,o.a.createElement(N.a,{onClose:e.click,"aria-labelledby":"customized-dialog-title",open:e.display},o.a.createElement(se,{id:"customized-dialog-title",onClose:e.click},e.title),o.a.createElement(ce,{dividers:!0},o.a.createElement(d.a,{gutterBottom:!0},e.text))))},he=o.a.createElement("p",{className:V.a.Summary},"Hello, My name is Ian Shinbrot. I am currently a Senior Consultant at CapTech Ventures.",o.a.createElement("br",null),"I graduated from Drexel in June 2016 with a bachelors degree in Computer Science. I received a certification in Amazon Web Services Cloud Architect as of March 2021. I received a certification in Amazon Cloud Practicioner in December 2020.  ",o.a.createElement("br",null),"I am curently purusing my Masters of Business Administration at Villanova and expect to graduate in 2024."),me=o.a.createElement("div",null,o.a.createElement("h4",null,"CapTech Ventures"),"I have recently started working at CapTech Ventures as a Senior Consultant. I will update in the near future.",o.a.createElement("h4",null,"Equisoft"),"I worked at Equisoft as a Software Developer working as a software consultant on various clients for the OIPA (Oracle Insurance Administration for Life and Annuitites) product. I assisted in mentoring new hires, as well as the various client teams in utilizing the OIPA application. I have assisted of SSO implementations utilizing both SAML and Microsoft Azure AD, as well as various RESTful and Soap services. The main languages and frameworks I worked on have been Spring, Hibernate, Java.",o.a.createElement("h4",null,"Lockheed Martin"),"I worked at Lockheed Martin as an Associate Software Engineer working on the LRDR radar system. I work in an Agile Scrum Environment utilizing C++ as the primary language, while performing some tasks with bash scripting. My project utilizing GIT, Crucible, and Jenkins for our primary functions",o.a.createElement("h4",null,"NextDocs"),"I worked at NextDocs  during the summers of March-September 2014-2015. NextDocs was acquired by Aurea during my third co-op in June 2015. At NextDocs I worked on the NextDocs Suite of Applications consisting of the Regulatory, SOP, and eTMF platforms. I was able to quickly learn C#, SQL, and improve my Javascript skills there. as well as my scripting skills."),de=function(e){var t=function(){l(!i)},a=Object(n.useState)(!1),r=Object(c.a)(a,2),i=r[0],l=r[1],s=[{title:"Work Experience",description:" I have worked at many companies throughout the years. Click to see more information.",linkTitle:"More Information",click:function(){t()}},{title:"Resume",description:"Please Check out my updated Resume",linkTitle:"RESUME",click:function(){return G("https://github.com/ishinbrot/website/raw/master/src/IanShinbrotResume.pdf")}}];return o.a.createElement("div",null,he,o.a.createElement(te,{cards:s}),o.a.createElement(ue,{display:i,click:t,text:me,title:"Work Experience"}))},pe=a(85),we=a.n(pe),ye=o.a.createElement("p",{className:we.a.Summary},"My email address is ianshinbro@gmail.com Stay tuned for updates to this page"),ge=[{title:"Contact Information",description:"Please click the link below to send me an email.",linkTitle:"Email",link:function(){return G("mailto:ianshinbro@gmail.com?Subject=Website Feedback")}}],be=function(e){return o.a.createElement("div",null,ye,o.a.createElement(te,{cards:ge}))},fe=a(86),ke=a.n(fe),ve=o.a.createElement("p",{className:ke.a.Summary},"Hello, My name is Ian Shinbrot. I am currently a Senior Consultant at CapTech Ventures.",o.a.createElement("br",null),"Welcome to my site. This site is continuously getting updated and has recently been updated using React and Material-UI (Last updated August 2021). I am in the process of migrating to typescript. Feel free to click any of the links in the navigation bar.",o.a.createElement("br",null)," If you have any feedback feel free to let me know so I can improve the site."),Ee=function(e){return o.a.createElement("div",null,ve)},Ie=a(40),Se=a.n(Ie),Te=a(180),je=o.a.createElement("div",{className:Se.a.Summary},o.a.createElement("h2",null,"Web Projects"),o.a.createElement("p",null,"Please check out some of my projects below")),Ce=[{title:"Virtual Pest",description:"The Virtual Pest is very similar to a Tamagotchi. The 'pest' has 5 different states that it can show based on the actions the user chooses. This utilizes REACT.",linkTitle:"Virtual Pest",click:function(){return G("https://ishinbrot.github.io/virtual_pest/")}},{title:"CollegeSearch",description:"This is my senior project. I worked on the front-end of the application using both HTML and Angular Material 1.0 based in Angular-JS.It is a college search application that allows you to search for colleges. It currently doesn't run on github pages.This links to the github location of the repository.",linkTitle:"CollegeSearch",click:function(){return G("https://github.com/DrexelSeniorDesign2016Team8/FrontEnd")}}],Ae=o.a.createElement("div",{className:Se.a.Summary},o.a.createElement("h2",null,"ReactNative Applications"),o.a.createElement("p",{className:Se.a.Summary},"These are reactNative apps meant to be compatible with the iOS and Android OS. Only the Android APK appears below")),Oe=[{title:"SHOP",description:"This application allows you to add items to a shopping list and create new orders. The application supports multiple users and everything is stored on firebase.",linkTitle:"Download",click:function(){return G("https://github.com/ishinbrot/website/blob/master/src/Pages/Projects/SHOP.apk")}},{title:"Places",description:"This application allows you to take a picture and specify a location where the picture was taken. The phone is able to locate you by GPS, or you are able to select a location from google maps.",linkTitle:"Download",click:function(){return G("https://github.com/ishinbrot/website/blob/master/src/Pages/Projects/SHOP.apk")}}],Pe=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:Se.a.Header},o.a.createElement("p",null,"This page is under active development. Please click the following button to be directed to my github page"),o.a.createElement(p.a,{className:Se.a.Header,variant:"outlined",onClick:function(){return window.location.href="https://github.com/ishinbrot"}},"LINK TO GITHUB")),je,o.a.createElement(te,{cards:Ce}),Ae,o.a.createElement(te,{cards:Oe}),o.a.createElement(Te.a,null))},_e=a(87),xe=a.n(_e),We=a(88),Ne=function e(t,a){Object(We.a)(this,e),this.title=t,this.text=a,this.linkTitle="display Poem"},De=[new Ne("The New Normal","Welcome to the New Normal\nSocial Distancing and wearing face masks\nLuckily we dont have to dress so formal\n We can get through this, we just have to watch our tracks\nAfter all we are all just mortal\nHopefully soon, we can give this virus the ax\nBut for now We are stuck unless we find a portal"),new Ne("Coronavirus Spring","Welcome to Coronavirus Spring\nEnjoy the weather getting hot\nBut be careful, of what going outside may bring\nGo close to someone you should not\n6 feet away you, keeping the distance may sting\nBut within 6 feet coronavirus may star it\u2019s plot\n"),new Ne("Thank you to the Nurses","Thank you to the nurses\nThe front-line workers who treat this bad disease\nYou are preventing this from getting any worse\nUnfortunately this isn\u2019t a breeze\nBut we will get through this, we just have to believe\n"),new Ne("New Day","Welcome to a new day\nIf you go outside don\u2019t forget a Mask\nWhat other options, there is nothing to weigh\nWhy is everything still closed, don\u2019t even ask\nAfter all, we are only still in May\nJust don\u2019t forget to wear a mask, your one task\n"),new Ne("COVID Hotspot Rotation","2020 has been a very interesting year\nPlaces have closed, and we have seen hotspot rotations\nDo you want to go out and get a beer\nCongratulations, your location is now the hotspot of the nation\nGive it a few weeks and you can lose your fear\nAs the hotspot moves, and hops on the train station\nThere\u2019s only one instance when we will all be in the clear\nAnd that\u2019s when the vaccine will turn COVID into obliteration"),new Ne("Coronavirus Haircut","What has Coronavirus done\nAll of my hair has grown out\nI can put all of my hair in a bun\nIt has grown thick all throughout\nLet me try and go for a run\nWill my hair get in my face, I highly doubt"),new Ne("Case Count","The number of cases keeps shooting up\nThe increase is happening in every state\nIf you want to distract yourself just get a pup\nAt least the number of death is decreasing at a decent rate\nSome states like Florida are just blowing up\nWhile other states like Pennsylvania are closing the gates\nWe can just look at the numbers and go 'yup'\nAt this point we leave it up to the fates"),new Ne("Welcome to the Summer Season","Welcome to the Summer season\nWant an event to go to, they have all been delayed\nNo movies, no baseball; there must be a reason\nForget about a refund, we have already paid\nInsurance policies don\u2019t cover pandemics, it isn\u2019t treason\nThis is a wonderful start to the new decade"),new Ne("Masks","Why are we recommended to wear a mask\nFor one simple reason and that\u2019s to stop the spread\nTo wear this on your face, is your one simple task\nWearing this mask won\u2019t cause you to drop dead\nPlease just wear it is all I ask\nSo we can work to stop the spread"),new Ne("The year everything was cancelled","While covid keeps spreading around\nOur country had started to act\nOlympics, Museums, Movie-theaters all shut-down\nAll the races such as broad street also had to react\nThere was nothing to do except go all the way downtown\nBut things started to open again, and people started to make contact\nCovid started to spread again, have we been let-down\nWear a mask to limit the spread, it\u2019s a fact"),new Ne("Camp and Coronavirus","It\u2019s nearing the end of summer break\nSummer camp is starting to end\nAnd what lies in it\u2019s wake\nCoronavirus test results are becoming a trend\nWere you at camp, hanging out by the lake\nYou probably got coronavirus and started a trend\nThat\u2019s when camp started to go on break"),new Ne("The coming of Vaccines","In December 2019 something vicious started to run amuck\nIt slowly spread throughout the world and it made a bit of a scene\nWe can all agree, the year 2020 just sucks\nThere may be hope in the future, we just need a vaccine\nIf the vaccine comes soon, it will just be our luck\nThe trial results for the vaccine are out, results have been seen\nI know it has moved fast, but do we really want to miss this puck\nI'll just take the vaccine and be like 'Yea, 2020 was an interesting scene'"),new Ne("Fall 2020","In the Fall of 2020 it is time for all students going to college to return\nAnd in 2020 that means social distancing and coronavirus tests\nThe first week may be fine, but then it slowly takes a turn\nOne person gets their test results and then it\u2019s like they\u2019re a pest\nBut if you think you\u2019ll only get one or two cases you have much to learn\nSuddenly there are an influx of cases, and let\u2019s see what they suggest\nLets do all online classes, and that\u2019s it; lets adjourn"),new Ne("Outdoor Dining 2020","Have you tried outdoor dining yet?\nIt seems to be the new rage these days\nWatch out for some rain, or you may get a little wet\nIs this outdoor dining just a phase\nEspecially with Winter coming, but not to fret\nOutdoor heating lamps seem to be coming, this isn\u2019t just some craze"),new Ne("2020 Reflection","As the end of the year comes up\nIt\u2019s time to remember what happened this year\nJanuary and February were normal parts of the line-up\nThen March came, and what followed took a bit of a veer\nCoronavirus suddenly came, and we all had to lockup\nThen the rioting and looting, this was a bad one; it became all clear\nAt least we all learned how to cleanup\nThe year is almost over, we will make it to the clear\nI wonder what 2021 will have in it\u2019s lineup"),new Ne("The New Handshake","Have you experienced the new handshake\nThere are a few who have perfected the elbow bump\nThere are also a few who smile like it\u2019s a piece of cake\nThen there are those who are confused, and in a slump\nAfter a year of lockdowns and masks, the traditional handshake is starting to quake"),new Ne("The Delta Variant","Have you heard of the new delta strain\nIt\u2019s not to be confused with your computer\u2019s delta updates\nThe delta variant passes through the air rapidly, just like the bullet train\nThe variant has gone throughout the country, it\u2019s in all the states\nWe all just need to get the vaccine and put up the vaccine in chains\nBecause after a past year of lockdowns we no longer want to put up the gates"),new Ne("The Boosters are coming","Do you remember in April, when you first got the vaccine\nActually it may have been May, because you likely got two shots\nIt\u2019s time to go out to your nearest pharmacy, haven\u2019t you seen\nThe booster shots are coming soon, who would have thought"),new Ne("Broad Street 2021","Are you ready for the broad street run\nGet ready for news, because there are some changes in the air\nFirstly, there are no spectators at the beginning or end; will that ruin the fun\nSecond, vaccines are required; but that is expected and fair\nAt least it haircut places are still open, I don\u2019t want my hair to be in a bun\nDon\u2019t forget the race is on October 10th, I will see you there"),new Ne("Trapped","What has IDA done?/nI am in my building, trapped/nI can\u2019t even walk around the city, it\u2019s no fun\nIt\u2019s like a new type of handicap\nLook at all this water, let it evaporate with the sun"),new Ne("The Schuylkill trail of Hurricane IDA","Do you ever go on the Schuylkill trail\nYou may go on it for a walk, or a quick run\nYesterday IDA came and changed the tale\nThe trail has been flooded, it is not fun\nThe trail is filled with water, it is definitely not pale\nIDA has left Philadelphia, it is now time for the sun"),new Ne("Why do I run?","Why do I run?\nIs it my way of working through stress\nOr do I run outside just for some fun\nIt started out with the stress, I must confess\nAnd now I enjoy, but I am always happy when I am done\n")],He=o.a.createElement("p",{className:xe.a.Summary},"Here are some poems I started during the 2020 coronavirus quarantine, and have continued throughout 2021.",o.a.createElement("br",null)," I have recently expanded into poetry un-related to the coronavirus pandemic.",o.a.createElement("br",null)," I hope you enjoy reading them!"),Me=function(){De.map((function(t){t.click=function(){e(t)}}));var e=function(e){h(e.text),w(e.title),i(!r)},t=Object(n.useState)(!1),a=Object(c.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)(""),s=Object(c.a)(l,2),u=s[0],h=s[1],m=Object(n.useState)(""),d=Object(c.a)(m,2),p=d[0],w=d[1];return o.a.createElement("div",null,He,o.a.createElement(te,{cards:De}),void 0===u?"":o.a.createElement(ue,{display:r,click:e,text:o.a.createElement("p",null,u.split("\n").map((function(e){return o.a.createElement("div",null,e)}))),title:p}))},Be=function(){return o.a.createElement(l.b,{basename:"/Home"},o.a.createElement(l.a,{basename:"/website"},o.a.createElement(F,null),o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/",component:Ee,exact:!0}),o.a.createElement(s.a,{path:"/About",component:de}),o.a.createElement(s.a,{path:"/Projects",component:Pe}),o.a.createElement(s.a,{path:"/Poetry",component:Me}),o.a.createElement(s.a,{path:"/Contact",component:be}),o.a.createElement(s.a,{component:Ee}))))},Le=(a(64),a(89),"LOGOUT"),Re="AUTHENTICATE",ze={token:null,userId:null},Fe=a(91),Ge=a(46),Je=Object(Ge.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return{token:t.token,userId:t.userId};case Le:return ze;default:return e}}}),Ve=Object(Ge.c)(Je),qe=function(e){return o.a.createElement(Fe.a,{store:Ve},o.a.createElement(Be,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,a){e.exports={Header:"Projects_Header__ELa6x",Summary:"Projects_Summary__1IJcR",Divider:"Projects_Divider__2Uu8x"}},63:function(e,t,a){e.exports={root:"GridComponent_root__2Fbvb",bullet:"GridComponent_bullet__1ptQh",summary:"GridComponent_summary__1mYEF",container:"GridComponent_container__KaUTu"}},82:function(e,t,a){e.exports={Summary:"About_Summary__29BJH"}},83:function(e,t,a){e.exports={root:"CardComponent_root__1-gvx",container:"CardComponent_container__3cjLz"}},85:function(e,t,a){e.exports={Summary:"Contact_Summary__3ZYuY"}},86:function(e,t,a){e.exports={Summary:"Home_Summary__3xwXk"}},87:function(e,t,a){e.exports={Summary:"Poetry_Summary__3bcGs"}}},[[120,1,2]]]);
//# sourceMappingURL=main.a85a8702.chunk.js.map