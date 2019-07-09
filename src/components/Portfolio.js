import React, { Component } from 'react';
import ColoredLine from './ColoredLine'


class Portfolio extends Component {
    render(){
        return(
            <div id="PortfolioSection">
                <section class="section is-medium">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-quarters">
                            <h1 class="title">Portfolio</h1>
                            <ColoredLine color="grey" />
                            <div class="columns is-centered">
                                <div class="column">
                                    {/* tiles start here --> ancester/parent/child heirarchy*/}
                                    <div class="tile is-ancestor">

                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                <h2 class="subtitle">Constellations<br/>(in works)</h2>
                                                <p class="subtitle">UI based app I designed.</p>
                                                    <figure class="image is-4by3">
                                                        <a href="https://ryanjalufka.github.io/Constellations/">
                                                            <img src="https://cdna.artstation.com/p/assets/images/images/019/042/700/large/kristian-saenz-screen-shot-2019-06-28-at-1-17-09-pm.jpg?1561746161"></img>
                                                        </a>
                                                    </figure>
                                                 </article>
                                            </div>

                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                <h2 class="subtitle">Blink</h2>
                                                <p class="subtitle">Dog character I created using Illustrator.</p>
                                                    <figure class="image is-4by3">
                                                        <a href="https://www.artstation.com/artwork/58oXeO">
                                                            <img src="https://cdnb.artstation.com/p/assets/images/images/019/042/003/large/kristian-saenz-asset-1-3x.jpg?1561743595"></img>
                                                        </a>
                                                    </figure><br/><br/>
                                                    <figure class="image is-16by9">
                                                        <a href="https://www.artstation.com/artwork/58oXeO">
                                                            <img src="https://cdnb.artstation.com/p/assets/images/images/019/042/039/large/kristian-saenz-asset-11-3x.jpg?1561743742"></img>
                                                        </a>
                                                    </figure>
                                                 </article>
                                            </div>

                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                <h2 class="subtitle">Desert Runners</h2>
                                                <p class="subtitle">Poster redesign I did for the documentary using Photoshop/Illustrator.</p>
                                                    <figure class="image is-3by5">
                                                        <a href="https://www.artstation.com/artwork/O9mDg">
                                                            <img src="https://cdnb.artstation.com/p/assets/images/images/008/932/081/large/kristian-saenz-docgdposterwhite.jpg?1516166209"></img>
                                                        </a>
                                                    </figure>
                                                 </article>
                                            </div>
                                    </div>

                                    {/* 2nd colm tiles start here --> ancester/parent/child heirarchy*/}
                                    <div class="tile is-ancestor">
                                            
                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                    <h2 class="subtitle">KOYO</h2>
                                                    <p class="subtitle">Owl logos I designed for friend's website.</p>
                                                    <figure class="image is-4by5">
                                                        <a href="https://www.artstation.com/artwork/PveqB">
                                                            <img src="https://cdna.artstation.com/p/assets/images/images/019/042/242/large/kristian-saenz-fullowl.jpg?1561744362"></img>
                                                        </a>
                                                    </figure><br/><br/>
                                                    <figure class="image is-4by3">
                                                        <a href="https://www.artstation.com/artwork/PveqB">
                                                            <img src="https://cdnb.artstation.com/p/assets/images/images/008/932/605/large/kristian-saenz-3owlstogether.jpg?1516170882"></img>
                                                        </a>
                                                    </figure>
                                                 </article>
                                            </div>

                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                <h2 class="subtitle">Runestone</h2>
                                                <p class="subtitle">Font I created with Fontlab Studios and Illustrator.</p>
                                                    <figure class="image is-3by5">
                                                        <a href="https://www.artstation.com/artwork/3GqwJ">
                                                            <img src="https://cdnb.artstation.com/p/assets/images/images/008/932/139/large/kristian-saenz-runestone.jpg?1516166965"></img>
                                                        </a>
                                                    </figure>
                                                 </article>
                                            </div>

                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                <h2 class="subtitle">Last Smoke Before the Snowstorm</h2>
                                                <p class="subtitle">Songbook I created using Photoshop/Illustrator/InDesign.</p>
                                                    <figure class="image is-1by1">
                                                        <a href="https://www.artstation.com/artwork/oOlAyW">
                                                            <img src="https://cdnb.artstation.com/p/assets/images/images/019/043/085/large/kristian-saenz-screen-shot-2019-06-28-at-1-58-27-pm.jpg?1561748352"></img>
                                                        </a>
                                                    </figure>
                                                    <figure class="image is-1by1">
                                                        <a href="https://www.artstation.com/artwork/oOlAyW">
                                                            <img src="https://cdna.artstation.com/p/assets/images/images/019/043/088/large/kristian-saenz-screen-shot-2019-06-28-at-1-50-23-pm.jpg?1561748358"></img>
                                                        </a>
                                                    </figure>
                                                 </article>
                                            </div>
                                    </div>
                                    {/* tiles end here */}
                                    
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