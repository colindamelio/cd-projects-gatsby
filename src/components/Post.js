import React, { Fragment } from "react";
import styled from "styled-components";
import HomeButton from "./HomeButton";
import "./Post.css";
import { graphql } from "gatsby";

const PostTitle = styled.h1`
  text-align: center;
`;
const PostContent = styled.div`
  p {
    margin-bottom: 15px;
  }
`;

const Post = ({ data }) => (
  <Fragment>
    <HomeButton path="/writings" />
    <PostTitle>{data.markdownRemark.frontmatter.title}</PostTitle>
    <PostContent
      style={{
        color: "#24292e",
        fontFamily:
          "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
        fontSize: "14px",
        lineHeight: "1.5",
        maxWidth: "700px",
        margin: "30px auto",
      }}
      dangerouslySetInnerHTML={{
        __html: data.markdownRemark.html,
      }}
    />
  </Fragment>
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

export default Post;
