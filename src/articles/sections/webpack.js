import React from "react";
import CodeCopy from "../../components/CodeCopy";
import { sortArticles } from "../../utilities";

export default sortArticles([
  {
    section: "webpack",
    question: () => <span>Compile js & scss in development mode</span>,
    answer: () => (
      <span>
        <p>
          Run this in the root of the project. Compiles both frontend js and
          Gutenberg blocks with source maps
        </p>
        <CodeCopy>yarn dev</CodeCopy>
      </span>
    )
  },
  {
    section: "webpack",
    question: () => <span>Compile js & scss for production</span>,
    answer: () => (
      <span>
        <p>
          Run this in the root of the project. Compiles both frontend js and
          Gutenberg blocks minified and with no source maps
        </p>
        <CodeCopy>yarn build</CodeCopy>
      </span>
    )
  }
]);
