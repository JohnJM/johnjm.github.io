import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import Slider from "react-slick";

import {getProjects} from '../service';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typed from 'typed.js';
import $ from 'jquery';

const sliderSettings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScrol: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    
};

function siteFooter() {
    var siteContent = $('#main');

    var siteFooter = $('#footer');
    var siteFooterHeight = siteFooter.height();

    siteContent.css({"margin-bottom": siteFooterHeight});
};

const Project = () => {
    const {id} = useParams();
    const [proj,
        setProj] = useState(null);

    useEffect(() => {
        const projects = getProjects();
        setProj(projects.find(proj => proj.id === parseInt(id)) || null);
    }, [id])

    useEffect(() => {
        siteFooter();
    }, [])

    return (
        <React.Fragment>
            <nav className="navbar navbar-default navbar-fixed-top detNav">
                <div className="col-1"><img alt="logo" className="dlogo logo" src="../img/JMwhite.png"/></div>
                <ul className="col-11 nav align-self justify-content-end">
                    <li className="nav-item">
                        <NavLink className="nav-link myheader orangeUnderline2" to="/">Back To Portfolio</NavLink>
                    </li>
                </ul>
            </nav>
            <section id="main">
                <div className="detSection">
                    <div className="container">
                        <div className="space"></div>
                        <h1 className="underline mainHeaderText">{proj && proj.title}</h1>
                        <h4 className="mainSubHeader">{proj && proj.subtitle}</h4>

                        <Slider {...sliderSettings}>
                            {proj && proj
                                .imgs
                                .map((value, index) => {
                                    return <div className="flex justify-center" key={index}><img className="detImg" src={`../img/${value}`} alt={value}/></div>
                                })}
                        </Slider>

                        <h3 className="detH3UnderImage">The Project</h3>
                        <ul className="detUnderImageList">

                            {proj && proj
                                .listItems
                                .map((value, index) => {
                                    return <li key={index} className="detListItem">
                                        <span className="bold">*</span>
                                        {value}
                                    </li>
                                })
                            }
                        </ul>

                        {proj && proj.url
                            ? <a className="inputButton" href={proj.url}>View</a>
                            : <button
                                className="inputButton disable"
                                href="#">Not Currently live</button>}

                        <NavLink className="inputButtonRed" to="/">Go back</NavLink>
                        <div className="LmarginBottom"></div>
                    </div>
                </div>
            </section>
            <section className="detFooter" id="footer">
                <div className="footerContent">
                    <img alt="logo" className="footerLogo" src="../img/JMwhite.png"/>
                    <h5>Built by John Morley in 2018</h5>
                </div>
            </section>

        </React.Fragment>

    )
}

export default Project;