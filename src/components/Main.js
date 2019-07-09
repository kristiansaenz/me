import React from 'react';
import Name from '../images/SecName.png';
import Mountain from '../images/mountain.png';

function Main() {
    return(
        <div classname="name">
            <section class="hero is-fullheight-with-navbar" id="main">
            <div class="hero-body">
            <div class="container">
                {/* <h1 class="title" id="myName">Kristian Saenz</h1>
                <h2 class="subtitle">Front-End Developer</h2> */}
                <div class="columns is-centered">
                    <div class="column is-one-quarter">
                        <figure class="image is-2by1">
                            <img src={Name} alt=""></img>
                        </figure>
                    </div>
                </div>
                {/*<div class="columns is-centered">
                    <div class="column">
                        <figure class="image is-3by1">
                            <img src={Mountain} alt=""></img>
                        </figure>
                    </div>
                </div>
                <div class="backstretch">
                    <img src={Mountain} 
                    style="position: absolute; margin: 0px; padding: 0px; border: none; width: 1898.67px; height: 1068px; max-height: none; max-width: none; z-index: -999999; left: -241.833px; top: 0px;">
                    </img>
                </div>*/}
            </div>
            </div>
            </section>
        </div>
    );
}

export default Main;