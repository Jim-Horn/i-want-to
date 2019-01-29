import CodeCopy from "../../../CodeCopy";
import React from "react";
import { sortArticles } from "../../../utilities";

export default sortArticles([
  {
    section: "git",
    question: () => <span>Grab all changes from the remote</span>,
    answer: () => (
      <span>
        <p>This command `fetches` all changes, but does not apply them.</p>
        <CodeCopy>git fetch</CodeCopy>
      </span>
    )
  },
  {
    section: "git",
    seldom: false,
    question: () => <span>grab all changes from origin</span>,
    answer: () => (
      <span>
        <p />
        <CodeCopy>git fetch</CodeCopy>
      </span>
    )
  },
  {
    section: "git",
    seldom: false,
    question: () => (
      <span>update my current branch with changes from the remote</span>
    ),
    answer: () => (
      <span>
        <p>Works when your branch can be fast-forwarded</p>
        <CodeCopy>git pull</CodeCopy>
      </span>
    )
  },
  {
    section: "git",
    seldom: true,
    question: () => (
      <span>forcefully update my current branch to match the remote</span>
    ),
    answer: () => (
      <span>
        <p>
          This set of commands grabs all changes from origin, then in detached
          head mode, moves the local branch's commit pointer to the same
          position as that of the remote. This is more or less a hard reset of
          your local branch
        </p>
        <CodeCopy>git fetch</CodeCopy>
        <CodeCopy>git checkout origin/&lt;branch></CodeCopy>
        <CodeCopy>git branch -f &lt;branch></CodeCopy>
        <CodeCopy>git checkout &lt;branch></CodeCopy>
      </span>
    )
  }
]);
