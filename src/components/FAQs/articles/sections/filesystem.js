import React from "react";
import { sortArticles } from "../../../utilities";
export default sortArticles([
  {
    section: "filesystem",
    question: () => <span>create a new article</span>,
    answer: () => (
      <span>
        <p>
          Look under `FAQs/articles/sections/` for the file to add your changes
          to.
        </p>
      </span>
    )
  }
]);
