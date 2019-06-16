import React, { Component } from "react";
import HomeButton from "../components/HomeButton";
import "./BlogLayout.css";
import { graphql } from "gatsby";

const BlogLayout = ({ data }) => (
  <div>
    <HomeButton path="/writings" />
    <div
      dangerouslySetInnerHTML={{
        __html: data.markdownRemark.html,
      }}
    />
  </div>
);

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;

export default BlogLayout;
