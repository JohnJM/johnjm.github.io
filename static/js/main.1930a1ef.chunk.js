(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{55:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),i=s(20),n=s.n(i),o=s(7),l=s(2),r=s(17),d=s(26),m=s(21),j=s.n(m),h=[{id:0,title:"eRestore",subtitle:"2017 PHP MySQL College Project",imgs:["/cc2.png","/gallery3.PNG","/gallery4.PNG","/cc3.PNG"],listItems:["*Technologies used: PHP, MySQL, Javascript, HTML, CSS","*After creating an account users are able to browse the store as well as add products to the public store with an image","*User details were stored in MySQL server with password hashing (BCRYPT)","*Users can visit their profile page to check the products they have uploaded","*Distinction between admin and regular users - admins can delete any products from the store, admins have access to a page displaying recent searches on the store"],url:!1},{id:1,title:"Kino Reviews",subtitle:"2018 MEAN Stack College Project",imgs:["/kinoReviews.png","/mean/1.png","/mean/2.png","/mean/3.png"],listItems:["Technologies used: mongodb, mongoose, express, angular-cli, winston, mocha, node.js","After creating an account users are able to browse the public reviews page which will show all the film reviews in the database","User details were stored in mongo database, passwords were hashed using BCRYPT","REST API created using express.js - front end created with Angular CLI","Distinction between admin and regular users - admins can delete any reviews in the database. Have access to a page where they can demote users to read-only"],url:!1},{id:2,title:"National Museum of Scotland",subtitle:"2018 PHP MySQL College Project",imgs:["/gallery10.png","/DETnms.png","/gallery7.gif","/gallery6.PNG","/gallery11.png","/gallery12.PNG","/gallery13.PNG"],listItems:["Technologies used: PHP, MySQL, Dialogflow, Javascript, HTML ,CSS","After creating an account users are able to book tickets to exhibitions and rate exhibitions on a 1-10 scale","Users can visit their profile page to check which exhibitions they have booked tickets for / which they have rated.","User details were stored in MySQL server with password hashing (BCRYPT)","Website featured an interactive chatbot powered by dialogflow with a three.js animated front end","Distinction between admin and regular users - admins can edit exhibitions / cancel or delete exhibitions / moderate the exhibition comments section (ban users, delete comments)","Protip: login with username: div password: div for an admin account"],url:"https://nmsgradedunit2.000webhostapp.com/"}],b=(s(48),s(49),s(0)),u={dots:!0,arrows:!0,slidesToShow:1,slidesToScrol:1,autoplay:!1,autoplaySpeed:3e3,adaptiveHeight:!0};var g=function(){var e=Object(l.g)().id,t=Object(a.useState)(null),s=Object(d.a)(t,2),i=s[0],n=s[1];return Object(a.useEffect)((function(){n(h.find((function(t){return t.id===parseInt(e)}))||null)}),[e]),Object(a.useEffect)((function(){!function(){var e=document.getElementById("main"),t=document.getElementById("footer").offsetHeight;e.style.marginBottom="".concat(t,"px")}()}),[]),Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsxs)("nav",{className:"navbar navbar-default navbar-fixed-top detNav",children:[Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("img",{alt:"logo",className:"dlogo logo",src:"../img/JMwhite.png"})}),Object(b.jsx)("ul",{className:"col-11 nav align-self justify-content-end",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link myheader orangeUnderline2",to:"/",children:"Back To Portfolio"})})})]}),Object(b.jsx)("section",{id:"main",children:Object(b.jsx)("div",{className:"detSection",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"space"}),Object(b.jsx)("h1",{className:"underline mainHeaderText",children:i&&i.title}),Object(b.jsx)("h4",{className:"mainSubHeader",children:i&&i.subtitle}),Object(b.jsx)(j.a,Object(r.a)(Object(r.a)({},u),{},{children:i&&i.imgs.map((function(e,t){return Object(b.jsx)("div",{className:"flex justify-center",children:Object(b.jsx)("img",{className:"detImg",src:"../img/".concat(e),alt:e})},t)}))})),Object(b.jsx)("h3",{className:"detH3UnderImage",children:"The Project"}),Object(b.jsx)("ul",{className:"detUnderImageList",children:i&&i.listItems.map((function(e,t){return Object(b.jsxs)("li",{className:"detListItem",children:[Object(b.jsx)("span",{className:"bold",children:"*"}),e]},t)}))}),i&&i.url?Object(b.jsx)("a",{className:"inputButton",href:i.url,children:"View"}):Object(b.jsx)("button",{className:"inputButton disable",href:"#",children:"Not Currently live"}),Object(b.jsx)(o.b,{className:"inputButtonRed",to:"/",children:"Go back"}),Object(b.jsx)("div",{className:"LmarginBottom"})]})})}),Object(b.jsx)("section",{className:"detFooter",id:"footer",children:Object(b.jsxs)("div",{className:"footerContent",children:[Object(b.jsx)("img",{alt:"logo",className:"footerLogo",src:"../img/JMwhite.png"}),Object(b.jsx)("h5",{children:"Built by John Morley in 2021"})]})})]})},x=s(23),p=s.n(x),O={strings:["on node.js","react.js functional components.","react.js custom hooks.","reuseable front-end services.","single page web apps."],typeSpeed:40,backSpeed:30,loop:!0,backDelay:1700,startDelay:200},f=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useRef)(),i=Object(a.useRef)();window.onscroll=function(){(document.documentElement.scrollTop||document.body.scrollTop)>20&&document.getElementsByClassName("header")[0]?document.getElementsByClassName("header")[0].classList.add("headerScroll2"):document.getElementsByClassName("header")[0]&&document.getElementsByClassName("header")[0].classList.remove("headerScroll2")},Object(a.useEffect)((function(){new p.a(e.current,O).start(),document.querySelectorAll(".basicSkillsBox").forEach((function(e){e.addEventListener("mouseover",(function(){e.querySelector("img").classList.add("hvr-buzz-out")})),e.addEventListener("mouseleave",(function(){e.querySelector("img").classList.remove("hvr-buzz-out")}))})),document.querySelectorAll(".aboutMeBox").forEach((function(e){e.addEventListener("mouseover",(function(){document.querySelector(".JMIMG").classList.add("hvr-buzz-out")})),e.addEventListener("mouseleave",(function(){document.querySelector(".JMIMG").classList.remove("hvr-buzz-out")}))}))}),[]);var n=function(){return t.current.scrollIntoView({behavior:"smooth",block:"start"})};return Object(a.useEffect)((function(){!function(){var e=document.getElementById("main"),t=document.getElementById("footer").offsetHeight;e.style.marginBottom="".concat(t,"px")}()}),[]),Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsxs)("nav",{id:"nav",className:"navbar navbar-default fixed-top header",children:[Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("img",{className:"mr-3 nvlogo logo",id:"mainpagelogo",src:"img/JMwhite.png",alt:"logo"})}),Object(b.jsxs)("ul",{className:"col-11  nav align-self justify-content-end",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("button",{className:"nav-link myheader",onClick:n,children:"Skills"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("button",{className:"nav-link myheader",onClick:function(){var e=s.current.getBoundingClientRect().top+window.pageYOffset+-86;window.scrollTo({top:e,behavior:"smooth"})},children:"Projects"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("button",{className:"nav-link myheader",onClick:function(){var e=i.current.getBoundingClientRect().top+window.pageYOffset+-36;window.scrollTo({top:e,behavior:"smooth"})},children:"Contact"})})]})]}),Object(b.jsxs)("section",{id:"showcase",children:[Object(b.jsx)("h1",{className:"heroText qt1",children:"Hi, I'm John."}),Object(b.jsxs)("h2",{className:"heroText qt2",children:["I like building ",Object(b.jsx)("span",{ref:e})]}),Object(b.jsx)("div",{className:"showcaseLearnMoreBtn",onClick:n,children:Object(b.jsxs)("div",{className:"showcaseLearnMore",children:[Object(b.jsx)("p",{className:"showcaseFooter",children:"Click to find out more!"}),Object(b.jsx)("img",{className:"showcaseArrows",src:"img/whiteScrollDown.svg",alt:"arrows"})]})})]}),Object(b.jsx)("div",{ref:t}),Object(b.jsxs)("section",{id:"main",className:"LpaddingTop",children:[Object(b.jsxs)("div",{className:"container firstBox",children:[Object(b.jsx)("h1",{className:"underline mainHeaderText",children:"Skills"}),Object(b.jsx)("h4",{className:"mainSubHeader",children:"Full time Web Developer working since June 2019 for a marketing agency based in Glasgow."}),Object(b.jsxs)("div",{className:"basicSkillsBoxContainer",children:[Object(b.jsxs)("div",{className:"basicSkillsBox",children:[Object(b.jsx)("img",{className:"skillIcon",src:"img/dev.png",alt:"dev"}),Object(b.jsx)("h4",{children:"Front-End Development"}),Object(b.jsx)("p",{children:"HTML, SCSS, JavaScript & React.js are what I spend most of my time working with. I also have experience developing with Angular & TypeScript."})]}),Object(b.jsxs)("div",{className:"basicSkillsBox",children:[Object(b.jsx)("img",{className:"skillIcon",src:"img/psd.png",alt:"psd"}),Object(b.jsx)("h4",{children:"Design"}),Object(b.jsx)("p",{children:"Confident using Adobe Photoshop for general image editing. Some experience creating UX/UI conscious webpage storyboards / styleguides"})]}),Object(b.jsxs)("div",{className:"basicSkillsBox",children:[Object(b.jsx)("img",{className:"skillIcon",src:"img/sql.png",alt:"sql"}),Object(b.jsx)("h4",{children:"Back-End Development"}),Object(b.jsx)("p",{children:"Recent experience creating back-end services with mongodb & mongoose. Confident using PHP, MySQL & SQL server. Knowledge of advanced database modelling techniques (EER modeling, indexing, SQL views, creating document schema)"})]})]})]}),Object(b.jsx)("div",{ref:s}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"underlineBlue mainHeaderText",children:"Projects"}),Object(b.jsx)("h4",{className:"mainSubHeader",children:"Watch this space, there's more coming soon!"}),Object(b.jsxs)("div",{className:"portfolioContainer",children:[Object(b.jsxs)("div",{className:"portfolioBox",children:[Object(b.jsx)("img",{src:"img/jmgit.png",className:"leftPortfolioImg",id:"git",alt:"github"}),Object(b.jsxs)("div",{className:"portfolioTextBox",children:[Object(b.jsx)("h4",{children:"2020+ Projects"}),Object(b.jsx)("p",{className:"thinText",children:"More recently I've been working on a full stack MERN forum, advent of code 2020, an Angular project & more."}),Object(b.jsx)("a",{className:"inputButton",href:"https://github.com/JohnJM",children:"My Github"})]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"portfolioBox",children:[Object(b.jsx)("img",{src:"img/comida.png",className:"leftPortfolioImg",id:"comida",alt:"music online"}),Object(b.jsxs)("div",{className:"portfolioTextBox",children:[Object(b.jsx)("h4",{children:"Comida"}),Object(b.jsx)("p",{className:"thinText",children:"2019 Full Stack node.js, Firebase, Express, EJS - After creating an account, users can search through a database of fake restaurants and book tables at them. (Designed for mobile)."}),Object(b.jsx)("a",{href:"https://comida-group.herokuapp.com/",className:"inputButton LmarginBottom",children:"View Site"})]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"portfolioBox",children:[Object(b.jsx)("img",{src:"img/nms.png",className:"leftPortfolioImg",alt:"music online"}),Object(b.jsxs)("div",{className:"portfolioTextBox",children:[Object(b.jsx)("h4",{children:"National Museum of Scotland"}),Object(b.jsx)("p",{className:"thinText",children:"2018 Full stack PHP / MySQL - Users can book and rate exhibitions after they create an account. Website has lots of moderation tools and hidden admin account privillages."}),Object(b.jsx)(o.b,{className:"LmarginBottom inputButton",to:"/project/2",children:"More Info"})]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"portfolioBox",children:[Object(b.jsx)("img",{src:"img/kinoReviews.png",className:"leftPortfolioImg",id:"kinoReview",alt:"music online"}),Object(b.jsxs)("div",{className:"portfolioTextBox",children:[Object(b.jsx)("h4",{children:"Kino Reviews"}),Object(b.jsx)("p",{className:"thinText",children:"2017 - MEAN Stack - After creating an account users can post public film reviews and comment on existing reviews. Web application supports admin users who can moderate all reviews / comments. Developed with MVC architecture."}),Object(b.jsx)(o.b,{className:"LmarginBottom inputButton",to:"/project/1",children:"More Info"})]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"portfolioBox LmarginBottom",children:[Object(b.jsx)("img",{src:"img/cc2.png",className:"leftPortfolioImg",id:"eRestore",alt:"music online"}),Object(b.jsxs)("div",{className:"portfolioTextBox",children:[Object(b.jsx)("h4",{children:"eRestore"}),Object(b.jsx)("p",{className:"thinText",children:"2017 Full stack PHP / MySQL - After creating an account users can upload products to a public store which can be accessed by all users. Website contains some moderation tools / admin account privillages."}),Object(b.jsx)(o.b,{className:"LmarginBottom inputButton",to:"/project/0",children:"More Info"})]})]})]})]}),Object(b.jsx)("div",{className:"psychologyBox",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h3",{children:"I also have a BSc Honours in Psychology"}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"Which obviously raises some questions"})]})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"sctnAbout",children:[Object(b.jsxs)("div",{className:"textGallery",children:[Object(b.jsx)("h1",{className:"underline mainHeaderText paddingTop slw",children:"About me"}),Object(b.jsxs)("h4",{className:"mainSubHeader slw",children:["I will try to answer some of these questions here",Object(b.jsx)("br",{})]})]}),Object(b.jsxs)("div",{className:"portfolioBox aboutMeBox",children:[Object(b.jsx)("img",{className:"JMIMG",src:"img/jm.jpg",alt:"John Morley"}),Object(b.jsxs)("div",{className:"portfolioTextBox aboutMe",children:[Object(b.jsx)("h4",{children:"Psychology"}),Object(b.jsx)("p",{className:"thinText",children:"Immediately after high school I began my bachelor's degree in psychology, I found an interest in the subject during high school and felt pursuing a degree in the subject would be a good use of my time. I completed my degree in 2016 and immediately wanted to switch into something more technical."}),Object(b.jsx)("h4",{children:"Web Development"}),Object(b.jsx)("p",{className:"thinText",children:"After my psychology degree I wanted to develop my programming and web development knowledge further. I started a HND in web development at the City of Glasgow college, where I managed to get an 'A' grade for both years. I then completed a BSc in Web & Mobile Development."}),Object(b.jsx)("p",{className:"thinText LmarginBottom",children:"After graduating, I started working as a Web Developer full time. I also do some freelance web dev work."})]})]})]})}),Object(b.jsx)("div",{ref:i}),Object(b.jsxs)("div",{className:"contactContainer",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"mainHeaderText slw",children:"Contact"}),Object(b.jsx)("h4",{className:"mainSubHeader slw",children:"Complete the form if you want to send me an email!"}),Object(b.jsxs)("form",{className:"form",action:"send.php",method:"post",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",{type:"text",id:"frmName",required:"required"}),Object(b.jsx)("label",{className:"control-label",htmlFor:"frmName",children:"Name"}),Object(b.jsx)("i",{className:"bar"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",{type:"email",id:"frmEmail",required:"required"}),Object(b.jsx)("label",{className:"control-label",htmlFor:"frmEmail",children:"Email"}),Object(b.jsx)("i",{className:"bar"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",{type:"text",id:"frmSubject",required:"required"}),Object(b.jsx)("label",{className:"control-label",htmlFor:"frmSubject",children:"Subject"}),Object(b.jsx)("i",{className:"bar"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("textarea",{id:"textarea",required:"required"}),Object(b.jsx)("label",{className:"control-label",htmlFor:"textarea",children:"Message"}),Object(b.jsx)("i",{className:"bar"})]}),Object(b.jsx)("div",{className:"flexcenter",children:Object(b.jsx)("input",{className:"contactSubmit",disabled:!0,type:"submit",name:"submit",value:"Currently Disabled"})})]})]}),Object(b.jsx)("div",{className:"bluespace"}),Object(b.jsx)("div",{className:"bluespace"}),Object(b.jsx)("div",{className:"BtmContactHeader",children:Object(b.jsx)("p",{className:"socUnderline socUnderline2",children:"You can find me on these too:"})}),Object(b.jsxs)("div",{className:"socialMediaBox",children:[Object(b.jsx)("a",{href:"mailto:johnmorley13@gmail.com",children:Object(b.jsx)("img",{className:"socialMedia",src:"img/gmail.png",alt:"fb"})}),Object(b.jsx)("a",{href:"https://linkedin.com/in/johnjm",children:Object(b.jsx)("img",{className:"socialMedia",src:"img/li.png",alt:"li"})}),Object(b.jsx)("a",{href:"https://github.com/JohnJM/",children:Object(b.jsx)("img",{className:"socialMedia",src:"img/git.png",alt:"git"})})]})]})]}),Object(b.jsx)("section",{id:"footer",children:Object(b.jsxs)("div",{className:"footerContent",children:[Object(b.jsx)("img",{className:"footerLogo",src:"img/JMwhite.png",alt:"logo"}),Object(b.jsx)("h5",{children:"Built by John Morley in 2021"})]})})]})},v=s(24),N=s(25),w=s(28),y=s(27),S=function(e){Object(w.a)(s,e);var t=Object(y.a)(s);function s(){return Object(v.a)(this,s),t.apply(this,arguments)}return Object(N.a)(s,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),s}(c.a.Component),B=Object(l.h)(S);var k=function(){return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(B,{}),Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",exact:!0,component:f}),Object(b.jsx)(l.b,{path:"/project/:id",exact:!0,component:g}),Object(b.jsx)(l.a,{to:"/"})]})]})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,56)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))};n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),I()}},[[55,1,2]]]);
//# sourceMappingURL=main.1930a1ef.chunk.js.map