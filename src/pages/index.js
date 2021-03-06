import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import About from "../components/about";
import Service from "../components/service";
import Blogs from "../components/blogs";
// import Work from "../components/work";
// import Testimonial from "../components/testimonial";
// import Photos from "../components/photos";
import Contact from "../components/contact";
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.contentfulAboutMe.designation}
      keywords={[`Mitch Lum`, `Frontend Developer`, `Web Developer`]}
      image="../images/homepage.png"
    />
    <Banner data={data.contentfulAboutMe}></Banner>

    {data.contentfulSiteInformation.menus
      .filter(item => item === "About")
      .map(t => {
        return <About data={data.contentfulAboutMe}></About>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Service")
      .map(t => {
        return <Service data={data.allContentfulService}></Service>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Blogs")
      .map(t => {
        return <Blogs data={data.allContentfulBlogs}></Blogs>;
      })}

    {/* data.contentfulSiteInformation.menus
      .filter(item => item === "Work")
      .map(t => {
        return <Work data={data.allContentfulWorks}></Work>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Testimonials")
      .map(t => {
        return (
          <Testimonial data={data.allContentfulTestimonials}></Testimonial>
        );
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Photos")
      .map(t => {
        return <Photos data={data.contentfulPhotos}></Photos>;
      }) */}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Contact")
      .map(t => {
        return <Contact data={data.contentfulAboutMe.gmail}></Contact>;
      })}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      age
      github
      gmail
      id
      linkdin
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      bannerList
    }
    allContentfulService {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          icon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulBlogs(limit: 5, sort: {fields: slug, order: ASC}) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt
        }
      }
    }
    # allContentfulTestimonials {
    #   edges {
    #     node {
    #       name
    #       subTitle
    #       description {
    #         childMarkdownRemark {
    #           html
    #         }
    #       }
    #       avatarImage {
    #         fluid(maxWidth: 200) {
    #           base64
    #           aspectRatio
    #           src
    #           srcSet
    #           srcWebp
    #           srcSetWebp
    #           sizes
    #         }
    #       }
    #     }
    #   }
    # }
    # allContentfulWorks {
    #   edges {
    #     node {
    #       siteName
    #       url
    #       image {
    #         fluid(maxWidth: 600) {
    #           base64
    #           aspectRatio
    #           src
    #           srcSet
    #           srcWebp
    #           srcSetWebp
    #           sizes
    #         }
    #       }
    #     }
    #   }
    # }
    # contentfulPhotos {
    #   photos {
    #     fluid(maxWidth: 600) {
    #       base64
    #       aspectRatio
    #       src
    #       srcSet
    #       srcWebp
    #       srcSetWebp
    #       sizes
    #     }
    #   }
    # }
    contentfulSiteInformation {
      menus
    }
  }
`;
