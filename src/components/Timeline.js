import React, { Component } from 'react';


class Timeline extends Component {
    render() {
        return(
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                        <h2>2019</h2>
                        <p>I did stuff</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>2018</h2>
                        <p>I did stuff</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h2>2017</h2>
                        <p>I did stuff</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>2017</h2>
                        <p>I did stuff</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timeline;