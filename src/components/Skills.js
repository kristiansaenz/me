import React, { Component } from "react";
import ColoredLine from "../components/ColoredLine";

class Skills extends Component {
  render() {
    return (
      <div id="SkillsSection">
        <section class="section is-medium">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-three-quarters">
                <h1 class="title">Technical Skills</h1>
                <ColoredLine color="grey" />
                <div class="columns is-centered">
                  <div class="column is-three-quarters">
                    <nav class="level">
                      <div class="level-item">React</div>
                      <div class="level-item">Java</div>
                      <div class="level-item">Javascript</div>
                      <div class="level-item">Node</div>
                      <div class="level-item">HTML</div>
                      <div class="level-item">CSS</div>
                      <div class="level-item">SQL</div>
                      <div class="level-item">C#</div>
                      <div class="level-item">C++</div>
                    </nav>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-one-third">
                    <h2 class="subtitle">Design</h2>
                    <ul>
                      <li>Sketch</li>
                      <li>Adobe Photoshop</li>
                      <li>Adobe Illustrator</li>
                      <li>Adobe Xd</li>
                      <li>Afinity Designer</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h2 class="subtitle">Front-End</h2>
                    <ul>
                      <li>Bulma</li>
                      <li>SASS</li>
                      <li>Bootstrap</li>
                      <li>SVG</li>
                      <li>VS Code</li>
                      <li>Codepen</li>
                      <li>Git</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h2 class="subtitle">Back-End</h2>
                    <ul>
                      <li>RestAPI</li>
                      <li>JSON</li>
                      <li>CouchbaseDB</li>
                      <li>Express</li>
                      <li>Docker</li>
                      <li>Spring</li>
                      <li>MongoDB</li>
                      <li>OpenShift</li>
                      <li>Kafka</li>
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

export default Skills;
