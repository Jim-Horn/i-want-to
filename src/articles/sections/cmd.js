import React from "react";
import CodeCopy from "../../components/CodeCopy";
import { sortArticles } from "../../utilities";
export default sortArticles(
  [
    {
      section: "cmd",
      question: () => <span>generate an ssh key</span>,
      answer: () => (
        <span>
          <CodeCopy>cd ~/.ssh</CodeCopy>
          <CodeCopy>
            ssh-keygen -t rsa -C "&lt;your_email@example.com&gt;"
          </CodeCopy>
        </span>
      )
    },
    {
      section: "cmd",
      question: () => <span>Add an SSH key to </span>,
      answer: () => (
        <span>
          <p>Ensure ssh-agent is enabled, then ...</p>
          <CodeCopy>ssh-add ~/.ssh/&lt;key-name&gt;</CodeCopy>
        </span>
      )
    }
  ],
  "question"
);
