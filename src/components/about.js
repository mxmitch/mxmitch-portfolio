import React from "react";
import Img from "gatsby-image";

const Header = ({ data }) => (
  <div className="about section" id="About">
    <div className="container">
      <div className="about-main row">
        <div className="left col-md-5 col-lg-4 mb-3">
          <Img
            fixed={data.photo.fluid}
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <div className="left col-md-7 col-lg-8">
          <div className="about-details">
          <h2 className="sub-position">
         I build things for the web
          </h2>
            <div className="sub-position"
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html
              }}
            />
            <h3>Technical Skills</h3>
            <hr style={{borderTop:"1px solid black"}}></hr>
            <table>
              <tr> 
                <td><strong>Languages</strong></td>
                <td>JavaScript, HTML, CSS, Ruby</td>
              </tr>
              <tr> 
                <td><strong>Libraries/Frameworks</strong></td>
                <td>NodeJS, ReactJS, GatsbyJS, SASS, Rails, Ajax, Express, EJS, jQuery, Bootstrap</td>
              </tr>
              <tr> 
                <td><strong>Testing</strong></td>
                <td>Jest, Storybook, Cypress, Rspec, Capybara, Mocha, Chai</td>
              </tr>
              <tr> 
                <td><strong>Design Software</strong></td>
                <td>Photoshop, Illustrator, Sketch, After Effects, Invision</td>
              </tr>
              <tr> 
                <td><strong>Project Management</strong></td>
                <td>Agile, Scrum, Kanban, Jira </td>
              </tr>
            </table>  
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
