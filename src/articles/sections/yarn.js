import React from "react";
import CodeCopy from "../../components/CodeCopy";
import { sortArticles } from "../../utilities";

export default sortArticles([
  {
    section: "yarn",
    question: () => <span>Install dependencies</span>,
    answer: () => (
      <span>
        <p>Installs node_modules</p>
        <CodeCopy>yarn</CodeCopy>
      </span>
    )
  },
  {
    section: "yarn",
    question: () => <span>Add a new dependency</span>,
    answer: () => (
      <span>
        <p>
          Installs a new dependency to node_modules (and adds it to dependencies
          in the package.json file)
        </p>
        <CodeCopy>yarn add &lt;module_name&gt;</CodeCopy>
      </span>
    )
  },
  {
    section: "yarn",
    question: () => <span>Add a new dev dependency</span>,
    answer: () => (
      <span>
        <p>
          Installs a new dependency to node_modules (and adds it to{" "}
          <code>devDependencies</code> in the package.json file)
        </p>
        <CodeCopy>yarn add &lt;module_name&gt; --dev</CodeCopy>
      </span>
    )
  }
]);
