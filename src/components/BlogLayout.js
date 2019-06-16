import React from "react";
import HomeButton from "../components/HomeButton";
import "./BlogLayout.css";
import { graphql } from "gatsby";

const BlogLayout = ({ data }) => (
  <div>
    <HomeButton path="/writings" />
    <div
      style={{ backgroundColor: "#fff",
      color: "#24292e",
      fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      fontSize: "14px",
      lineHeight: "1.5",
      maxWidth: "700px",
      margin: '0 auto'
      }}
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
