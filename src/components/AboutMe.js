import React, { Component } from "react";
import ColoredLine from "../components/ColoredLine";
import Me from "../images/me.png";

class AboutMe extends Component {
  render() {
    return (
      <div id="AboutSection">
        <section class="section is-medium">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-three-quarters">
                <h2 class="title">About Me</h2>
                <ColoredLine />
                <div class="columns is-one-third">
                  <div class="column" id="PicOfMe">
                    <figure class="image is-4by5">
                      <img src={Me} alt=""></img>
                    </figure>
                  </div>
                  <div class="column" id="Intro">
                    <p>
                      Hi! I am a full-stack software developer who loves
                      designing and developing web, mobile, and software
                      applications. I enjoy all parts of development and have an
                      increasing interest in front-end development and UI/UX
                      design. I have a passion for tech, art, music,{" "}
                      <strong>learning, </strong>
                      the outdoors, and traveling. When it comes to developing,
                      I enjoy working with others on a team, being challenged
                      and being able to be creative.
                    </p>
                  </div>
                  {/* <div class="column" id="Personal">
                                <h3>I like to:</h3>
                                <br />
                                <ul>
                                    <li>draw</li><br/>
                                    <li>go camping</li><br/>
                                    <li>learn new things</li><br/>
                                    <li>explore</li><br/>
                                </ul>
                            </div> */}
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
