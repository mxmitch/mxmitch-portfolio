import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="site-footer" id="footer">
        <div className="container">
          <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <a href="https://github.com/rohitguptab/rg-portfolio">RG-Portfolio</a> by{' '}
          <a href="https://rohitgupta.design/" rel="noopener noreferrer" target="_blank">
          Rohit Gupta
          </a>
        </span>
        </div>
      </div>
    );
  }
}
