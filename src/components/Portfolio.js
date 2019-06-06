import React, { Component } from 'react';


class Portfolio extends Component {
    render(){
        return(
            <div id="PortfolioSection">
                <section class="section is-large">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-quarters">
                            <h1 class="title">Portfolio</h1>
                            <div class="columns is-centered">
                                <div class="column is-one-third">
                                    <div class="box"></div>
                                </div>
                                <div class="column">
                                    <div class="box"></div>
                                </div>
                                <div class="column">
                                    <div class="box"></div>
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

export default Portfolio;