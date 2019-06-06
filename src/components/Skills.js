import React, {Component} from 'react';
import ColoredLine from '../components/ColoredLine';


class Skills extends Component {
    render(){
        return(
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
                                    <div class="level-item">React.js</div>                                
                                    <div class="level-item">Java</div>
                                    <div class="level-item">Javascript</div>
                                    <div class="level-item">Node.js</div>
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
                                    </ul>
                                </div>
                                <div class="column">
                                    <h2 class="subtitle">Front-End</h2>
                                    <ul>
                                        <li>Bulma</li>
                                        <li>Bootstrap</li>
                                        <li>VS Code</li>
                                        <li>Codepen</li>
                                        <li>Github</li>
                                        <li>Gitlab</li>
                                        <li>Terminal</li>
                                    </ul>
                                </div>
                                <div class="column">
                                    <h2 class="subtitle">Back-End</h2>
                                    <ul>
                                        <li>RESTful Services</li>
                                        <li>JSON Api</li>
                                        <li>Couchbase</li>
                                        <li>Springboot</li>
                                        <li>Kafka</li>
                                        <li>Docker</li>
                                        <li>Talon</li>
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