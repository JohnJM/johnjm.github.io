import React, {useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';

import Typed from 'typed.js';
import $ from 'jquery';

let typedOptions = {
    strings: [
        ' reuseable front-end services', ' reactjs functional components ', ' single page web apps.', 'on node.js'
    ],
    typeSpeed: 30,
    backSpeed: 20,
    loop: true,
    backDelay: 2100,
    startDelay: 200
}

const Home = () => {
    const buildingEle = useRef();
    const about = useRef();
    const portfolio = useRef();
    const contact = useRef();

    useEffect(() => {
        let typed = new Typed(buildingEle.current, typedOptions);
        typed.start();

        $('.basicSkillsBox').mouseover(function (e) {
            $(this)
                .find('img')
                .addClass('hvr-buzz-out');
        });
        $('.basicSkillsBox').mouseleave(function (e) {
            $(this)
                .find('img')
                .removeClass('hvr-buzz-out');
        });
        //shake animation on about me container
        $('.aboutMeBox').mouseover(function (e) {
            $('.JMIMG').addClass('hvr-buzz-out');
        });

        $('.aboutMeBox').mouseleave(function (e) {
            $('.JMIMG').removeClass('hvr-buzz-out');
        });
    }, [])

    function siteFooter() {
        var siteContent = $('#main');
        var siteContentHeight = siteContent.height();
        var siteContentWidth = siteContent.width();

        var siteFooter = $('#footer');
        var siteFooterHeight = siteFooter.height();
        var siteFooterWidth = siteFooter.width();

        siteContent.css({"margin-bottom": siteFooterHeight});
    };

    const scrlAbout = () => about
        .current
        .scrollIntoView({behavior: 'smooth', block: 'start'});

    const scrlPortfolio = () => {
        const yOffset = -86;
        const y = portfolio
            .current
            .getBoundingClientRect()
            .top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    const scrlContact = () => {
        const yOffset = -36;
        const y = contact
            .current
            .getBoundingClientRect()
            .top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    useEffect(() => {
        siteFooter();
    }, [])

    return (
        <React.Fragment>
            <nav id="nav" className="navbar navbar-default fixed-top header">
                <div className="col-1">
                    <img
                        className="mr-3 nvlogo logo"
                        id="mainpagelogo"
                        src="img/JMwhite.png"
                        alt="logo"/>
                </div>
                <ul className="col-11  nav align-self justify-content-end">
                    <li className="nav-item">
                        <button className="nav-link myheader" onClick={scrlAbout}>Skills</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link myheader" onClick={scrlPortfolio}>Projects</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link myheader" onClick={scrlContact}>Contact</button>
                    </li>
                </ul>
            </nav>

            <section id="showcase">
                <h1 className="heroText qt1">Hi, I'm John.</h1>
                <h2 className="heroText qt2">I like building <span ref={buildingEle}></span>
                </h2>

                <div className="showcaseLearnMoreBtn" onClick={scrlAbout}>
                    <div className="showcaseLearnMore">
                        <p className="showcaseFooter">Click to find out more!</p>
                        <img className="showcaseArrows" src="img/whiteScrollDown.svg" alt="arrows"/>
                    </div>
                </div>
            </section>

            <div ref={about}></div>
            <section id="main" className="LpaddingTop">
                <div className="container firstBox">
                    <h1 className="underline mainHeaderText">Skills</h1>
                    <h4 className="mainSubHeader">Full time Web Developer working for a marketing agency based in Glasgow.</h4>
                    <div className="basicSkillsBoxContainer">
                        <div className="basicSkillsBox">
                            <img className="skillIcon" src="img/dev.png" alt="dev"/>
                            <h4>Front-End Development</h4>
                            <p>HTML, SCSS, JavaScript / ReactJS are what I spend most of my time
                                working with. I also have experience developing with TypeScript.</p>
                        </div>

                        <div className="basicSkillsBox">
                            <img className="skillIcon" src="img/psd.png" alt="psd"/>
                            <h4>Design</h4>
                            <p>Confident using Adobe Photoshop & Illustrator to create UX/UI conscious
                                storyboards, icons. Some experience with general image editing.</p>
                        </div>

                        <div className="basicSkillsBox">
                            <img className="skillIcon" src="img/sql.png" alt="sql"/>
                            <h4>Back-End Development</h4>
                            <p>Experience in creating back-end services with mongodb & mongoose. Confident
                                using PHP to perform CRUD on MySQL databases. Knowledge of advanced database
                                modelling techniques (EER modeling, indexing, SQL views, creating document
                                schema)</p>
                        </div>
                    </div>
                </div>

                <div ref={portfolio}></div>
                <div className="container">
                    <h1 className="underlineBlue mainHeaderText">Projects</h1>
                    <h4 className="mainSubHeader">Watch this space, there's more coming soon!
                        {/* <a href="https://github.com/MorleyWebDev/lastfm-api-angular">
                            soon</a> */}
                    </h4>

                    <div className="portfolioContainer">

                        <div className="portfolioBox">
                        <img
                                src="img/jmgit.png"
                                className="leftPortfolioImg"
                                id="git"
                                alt="github"/>
                            <div className="portfolioTextBox">
                                <h4>2020+ Projects</h4>
                                <p className="thinText">More recently I've been working on a full stack MERN
                                    forum, advent of code 2020, an Angular 7 project & more.</p>
                                <a className="inputButton" href="https://github.com/JohnJM">My Github</a>
                            </div>
                        </div>
                        <hr/>

                        <div className="portfolioBox">
                            <img
                                src="img/comida.png"
                                className="leftPortfolioImg"
                                id="comida"
                                alt="music online"/>
                            <div className="portfolioTextBox">
                                <h4>Comida</h4>
                                <p className="thinText">2019 Full Stack node.js, Firebase, Express, EJS - After
                                    creating an account, users can search through a database of fake restaurants and
                                    book tables at them. (Designed for mobile).</p>
                                <a
                                    href="https://comida-group.herokuapp.com/"
                                    className="inputButton LmarginBottom">View Site</a>
                            </div>
                        </div>
                        <hr/>

                        <div className="portfolioBox">
                            <img src="img/nms.png" className="leftPortfolioImg" alt="music online"/>
                            <div className="portfolioTextBox">
                                <h4>National Museum of Scotland</h4>
                                <p className="thinText">2018 Full stack PHP / MySQL - Users can book and rate
                                    exhibitions after they create an account. Website has lots of moderation tools
                                    and hidden admin account privillages.</p>
                                <NavLink className="LmarginBottom inputButton" to="/project/2">More Info</NavLink>

                            </div>
                        </div>
                        <hr/>

                        <div className="portfolioBox">
                            <img
                                src="img/kinoReviews.png"
                                className="leftPortfolioImg"
                                id="kinoReview"
                                alt="music online"/>
                            <div className="portfolioTextBox">
                                <h4>Kino Reviews</h4>
                                <p className="thinText">2017 - MEAN Stack - After creating an account users can
                                    post public film reviews and comment on existing reviews. Web application
                                    supports admin users who can moderate all reviews / comments. Developed with MVC
                                    architecture.</p>
                                <NavLink className="LmarginBottom inputButton" to="/project/1">More Info</NavLink>
                            </div>
                        </div>
                        <hr/>

                        <div className="portfolioBox LmarginBottom">
                            <img
                                src="img/cc2.png"
                                className="leftPortfolioImg"
                                id="eRestore"
                                alt="music online"/>
                            <div className="portfolioTextBox">
                                <h4>eRestore</h4>
                                <p className="thinText">2017 Full stack PHP / MySQL - After creating an account
                                    users can upload products to a public store which can be accessed by all users.
                                    Website contains some moderation tools / admin account privillages.</p>
                                <NavLink className="LmarginBottom inputButton" to="/project/0">More Info</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="psychologyBox">
                    <div className="container">
                        <h3>I also have a BSc Honours in Psychology</h3><br/>
                        <h3>Which obviously raises some questions</h3>
                    </div>
                </div>

                <div className="container">
                    <div className="sctnAbout">
                        <div className="textGallery">
                            <h1 className="underline mainHeaderText paddingTop slw">About me</h1>
                            <h4 className="mainSubHeader slw">I will try to answer some of these questions here<br/></h4>
                        </div>
                        <div className="portfolioBox aboutMeBox">
                            <img className="JMIMG" src="img/jm.jpg" alt="John Morley"/>
                            <div className="portfolioTextBox aboutMe">
                                <h4>Psychology</h4>
                                <p className="thinText">Immediately after high school I began my bachelor's
                                    degree in psychology, I found an interest in the subject during high school and
                                    felt pursuing a degree in the subject would be a good use of my time. I
                                    completed my degree in 2016 and immediately wanted to switch into something more
                                    technical.</p>
                                <h4>Web Development</h4>
                                <p className="thinText">After my psychology degree I wanted to develop my
                                    programming and web development knowledge further. I started a HND in web
                                    development at the City of Glasgow college, where I managed to get an 'A' grade
                                    for both years. I then completed a BSc in Web & Mobile Development.</p>
                                <p className="thinText LmarginBottom">After graduating, I started working as a Web Developer full time. I also do some freelance web dev work.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={contact}></div>
                <div className="contactContainer">
                    <div className="container">

                        <h1 className="mainHeaderText slw">Contact</h1>
                        <h4 className="mainSubHeader slw">Complete the form if you want to send me an email!</h4>

                        <form className="form" action="send.php" method="post">
                            <div className="form-group">
                                <input type="text" id="frmName" required="required"/>
                                <label className="control-label" htmlFor="frmName">Name</label>
                                <i className="bar"></i>
                            </div>

                            <div className="form-group">
                                <input type="email" id="frmEmail" required="required"/>
                                <label className="control-label" htmlFor="frmEmail">Email</label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <input type="text" id="frmSubject" required="required"/>
                                <label className="control-label" htmlFor="frmSubject">Subject</label>
                                <i className="bar"></i>
                            </div>

                            <div className="form-group">
                                <textarea id="textarea" required="required"></textarea>
                                <label className="control-label" htmlFor="textarea">Message</label>
                                <i className="bar"></i>
                            </div>
                            <div className="flexcenter"><input
                                className="contactSubmit"
                                disabled
                                type="submit"
                                name="submit"
                                value="Currently Disabled"/></div>

                        </form>
                    </div>

                    <div className="bluespace"></div>
                    <div className="bluespace"></div>
                    <div className="BtmContactHeader">
                        <p className="socUnderline socUnderline2">You can find me on these too:</p>
                    </div>
                    <div className="socialMediaBox">
                        <a href="mailto:johnmorley13@gmail.com"><img className="socialMedia" src="img/gmail.png" alt="fb"/></a>
                        <a href="#"><img className="socialMedia" src="img/li.png" alt="li"/></a>
                        <a href="https://github.com/JohnJM/"><img className="socialMedia" src="img/git.png" alt="git"/></a>
                    </div>
                </div>
            </section>

            <section id="footer">
                <div className="footerContent">
                    <img className="footerLogo" src="img/JMwhite.png" alt="logo"/>
                    <h5>Built by John Morley in 2018</h5>
                </div>
            </section>
        </React.Fragment>

    )
}

export default Home;