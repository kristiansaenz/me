import React, { Component } from 'react';
import ColoredLine from '../components/ColoredLine';
import LinkedinLogo from '../images/LinkedinLogo.png';
import GithubLogo from '../images/GithubLogo.png';
import ArtstationLogo from '../images/ArtstationLogo.png';
import TrelloLogo from '../images/TrelloLogo.png';
import Marker from '../images/Marker.png';


class ContactMe extends Component {
    render(){
        return(
            <div id="ContactSection">
                <section class="section is-large">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-three-quarters">
                                <h1 class="title">Contact Me</h1>
                                <ColoredLine color="grey" />
                                    <ul id="contact-info">
                                        <li><span><img id="marker" src={Marker} alt=""></img></span>Currently: Texas</li>
                                        <li>Email: kristian.saenz49@gmail.com</li>
                                        <li>Cell: +1 (361) 232 - 9078</li>
                                    </ul>
                                <div class="columns is-centered">
                                    <div class="column is-one-third">
                                        <div class="columns is-mobile is-centered" id="social-links">
                                            <div class="column" id="githubLink">
                                                <figure class="image is-64x64">
                                                    <a href="https://github.com/kristiansaenz" class="image">
                                                    <img src={GithubLogo} alt="" class="responsive"></img>
                                                    </a>
                                                </figure>
                                            </div>
                                            <div class="column" id="linkedinLink">
                                                <figure class="image is-64x64">
                                                    <a href="https://www.linkedin.com/in/kristian-saenz-290aa5104/" class="image">
                                                    <img src={LinkedinLogo} alt=""></img>
                                                    </a>
                                                </figure>
                                            </div>
                                            <div class="column" id="artstationLink">
                                                <figure class="image is-64x64">
                                                    <a href="https://www.artstation.com/kristiansaenz" class="image">
                                                    <img src={ArtstationLogo} alt=""></img>
                                                    </a>
                                                </figure>
                                            </div>
                                            <div class="column" id="TrelloLink">
                                                <figure class="image is-64x64">
                                                    <a href="https://trello.com/kristiansaenz/boards" class="image">
                                                    <img src={TrelloLogo} alt=""></img>
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ContactMe;