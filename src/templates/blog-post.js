import React, { Component } from "react";
import { graphql } from "gatsby";
import moment from "moment";
import Img from "gatsby-image/withIEPolyfill";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Share from "../components/share";

export default class blogPost extends Component {
  render() {
    const data = this.props.data.contentfulBlogs;

    const siteurl = this.props.data.contentfulSiteInformation.siteUrl + "/";
    const twiteerhandle = this.props.data.contentfulSiteInformation
      .twiteerHandle;
    const socialConfigss = {
      site: {
        siteMetadata: { siteurl, twiteerhandle }
      },
      title: data.title,
      slug: data.slug
    };

    return (
      <Layout>
        <SEO
          title={data.title}
          keywords={[
            `Mitch Lum`,
            `Frontend Developer`,
            `Web Developer`,
            `${data.title}`
          ]}
        />
        <div className="site-container blog-post">
          <div className="container">
            {data.imageSlider[0] ? (
              <Carousel fade={false}>
                {data.imageSlider.map(photo => {
                  return (
                    <Carousel.Item style={{backgroundColor: "#333", color:"#333"}}>
                    
                      <Img
                        className="feature-img"
                        fluid={photo.fluid}
                        width="100%"
                        height="100%"
                        objectFit="contain"
                        alt={data.slug}
                      /> 
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            ) : (
              <div className="no-image"></div>
            )}

            <div className="details">
              <h1 className="title">{data.title}</h1>
              <span className="date">
                <i class="fas fa-calendar-alt"></i>{" "}
                {moment(data.createdAt).format("LL")}
              </span>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html
                }}
              />
            </div>
            <Share
              socialConfig={{
                ...socialConfigss.site.siteMetadata.twiteerhandletitle,
                config: {
                  url: `${siteurl}${socialConfigss.slug}`,
                  title: `${socialConfigss.title}`
                }
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      id
      title
      slug
      imageSlider {
        fluid(maxWidth: 1500) {
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      featureImage {
        fluid(maxWidth: 1500) {
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      createdAt
    }
    contentfulSiteInformation {
      siteUrl
      twiteerHandle
    }
  }
`;
