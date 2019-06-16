import React from "react";
import HomeButton from "../components/HomeButton";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const ListItem = styled.li`
  font-size: 30px;
  padding: 20px 0;
  font-weight: 900;
  text-align: center;

  p {
    font-size: 20px;
    font-weight: normal;
    margin-top: 10px;
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
              {edge.node.frontmatter.title}
              <p>{edge.node.excerpt}</p>
              <Link to={`/writings${edge.node.frontmatter.slug}`}>
                Read More
              </Link>
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
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default WritingsList;
