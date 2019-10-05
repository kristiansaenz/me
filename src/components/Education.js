import React, { Component } from 'react';
import ColoredLine from '../components/ColoredLine';


class Education extends Component {
    render() {
        return(
            <div id="EducationSection">
                <section class="section is-large">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-quarters">
                            <h1 class="title">Education</h1>
                            <ColoredLine />
                            <h2 class="subtitle">Texas A&M University Corpus Christi</h2>
                            <div class="columns is-centered">
                                <p>Bachelor of Computer Science <span class="bullet">•</span> Systems Programming</p>
                            </div>
                            <div class="columns is-centered">
                                <p>Graduated: 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Education;