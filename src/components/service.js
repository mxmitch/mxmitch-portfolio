import React, { Component } from "react";
import Img from "gatsby-image";


export default class service extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="service section" id="Service">
        <div className="container">
          <div className="section-head">
            <h2>Services</h2>
          </div>
          <div className="row">
            {data.edges.map((item, index) => {
              return (
                <div key={index} className="col-md-4 mb-3">
                  <div className="service-main">
                    <img src={item.node.icon.file.url} alt="service icon" height="50px" style={{ paddingBottom: '15px'}}/>
                    <h3>{item.node.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
