import React, { Component } from 'react';
import ColoredLine from '../components/ColoredLine';
import Me from '../images/meinmountians.png';


class AboutMe extends Component {
    render() {
        return(
            <div id="AboutSection">
                <section class="section is-medium">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-three-quarters">
                                <h2 class="title">About Me</h2>
                        <ColoredLine />
                        <div class="columns is-8 is-three-quarters">
                            <div class="column" id="PicOfMe">
                                <figure class="image is-4by5">
                                    <img src={Me} alt=""></img>
                                </figure>                              
                            </div>
                            <div class="column" id="Intro">
                                <p>
                                Hello. I am a software developer and love designing and developing web, mobile, 
                                and software applications. I have experience in full-stack development with 
                                writing Java utilizing the Spring framework and working with Restful API Services. I enjoy
                                all parts of development but have a big soft spot for front-end development. I like building 
                                responsive applications and learning about UI/UX design. I have a passion for <strong>learning, </strong> 
                                art, music, tech, the outdoors, and traveling. When it comes to developing, 
                                I enjoy working with others on a team, being challenged and being able to be creative.
                                </p>
                            </div>
                            <div class="column" id="Personal">
                                <h3>In my personal time, I like to:</h3>
                                <br />
                                <ul>
                                    <li>hike & camp</li><br/>
                                    <li>play guitar</li><br/>
                                    <li>make stuff</li><br/>
                                    <li>learn new things</li><br/>
                                    <li>be outside =)</li>
                                </ul>
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

export default AboutMe;