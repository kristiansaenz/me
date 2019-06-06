import React, { Component } from 'react';


class Timeline2 extends Component {
    render() {
        return(
            <div class="container">
                <div class="column is-left">
                    <div class="content">
                        <h2>2019</h2>
                        <p>I did stuff</p>
                    </div>
                </div>
                <div class="column is-right">
                    <div class="level-item">
                        <h2>2018</h2>
                        <p>I did stuff</p>
                    </div>
                </div>
                <div class="level-left">
                <div class="level-item">
                    <h2>2019</h2>
                    <p>I did stuff</p>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <h2>2018</h2>
                    <p>I did stuff</p>
                </div>
            </div>
            </div>
        );
    }
}

export default Timeline2;