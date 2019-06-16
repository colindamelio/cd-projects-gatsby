import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";

const List = styled.ul`
  max-width: 600px;
  margin: 25px auto;
  padding: 30px;
  font-family: "Open Sans", sans-serif;
`;

const PostLink = styled(Link)`
  font-size: 23px;
  font-weight: 700;
`;

const Date = styled.em`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Excerpt = styled.p`
  margin: 10px 0;
  font-weight: 300;
`;

const ListItem = styled.li`
  margin: 35px 0;
`;

const Disclaimer = styled.p`
  font-size: 14px;
  a {
    color: #e44e48;
  }
`;

const WritingsList = () => (
  <div>
    <StaticQuery
      query={POST_LIST_QUERY}
      render={({ allMarkdownRemark }) => (
        <List>
          {allMarkdownRemark.edges.map(edge => (
            <ListItem key={edge.node.frontmatter.slug}>
              <PostLink to={`/writings${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </PostLink>
              <Date>{edge.node.frontmatter.date}</Date>
              <Excerpt>{edge.node.excerpt}</Excerpt>
              <Disclaimer>
                Part of series at{" "}
                <a href={edge.node.frontmatter.src}>@hackerYou</a>
              </Disclaimer>
            </ListItem>
          ))}
        </List>
      )}
    />
  </div>
);

const POST_LIST_QUERY = graphql`
  query blogPosts {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          frontmatter {
            title
            src
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default WritingsList;
