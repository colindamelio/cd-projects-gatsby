import React from "react";
import { articles } from "../data";

const WritingsList = () => (
  <ul>
    {articles.map((article, i) => (
      <li key={i}>
        <a href={article.href} target="_blank">
          {article.title}
        </a>
      </li>
    ))}
  </ul>
);

export default WritingsList;
