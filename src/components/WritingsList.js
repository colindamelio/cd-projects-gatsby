import React from "react";
import styled from "styled-components";
import { articles } from "../data";

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
  <List>
    {articles.map((article, i) => (
      <ListItem key={i}>
        <a href={article.href} target="_blank">
          {article.title}
        </a>
        <p>{article.desc}</p>
      </ListItem>
    ))}
  </List>
);

export default WritingsList;
