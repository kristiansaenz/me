import React, { Component } from 'react';


const ColoredLine = ({color}) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 4
        }}
    />
);

export default ColoredLine;