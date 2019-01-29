import CodeCopy from "../../../CodeCopy";
import React from "react";
import { sortArticles } from "../../../utilities";

export default sortArticles([
  {
    section: "docker",
    question: () => <span>Run Asurion.com locally</span>,
    answer: () => (
      <span>
        <p>Starts the site in background mode</p>
        <CodeCopy>yarn local-start</CodeCopy>
      </span>
    )
  },
  {
    section: "docker",
    question: () => <span>Stop Docker</span>,
    answer: () => (
      <span>
        <p>Stop Docker and remove all containers</p>
        <CodeCopy>yarn local-stop</CodeCopy>
      </span>
    )
  },
  {
    section: "docker",
    seldom: true,
    question: () => <span>Install the wp cli</span>,
    answer: () => (
      <span>
        <p>Step 1 in preparing to apply version press updates</p>
        <CodeCopy>cd /var/www/html && ~/bin/docker/install-wp-cli</CodeCopy>
      </span>
    )
  },
  {
    section: "docker",
    question: () => <span>Apply version press changes</span>,
    answer: () => (
      <span>
        <p>
          After pulling from the repo or checking out a branch, run this command
        </p>
        <CodeCopy>wp --allow-root vp apply-changes</CodeCopy>
      </span>
    )
  },
  {
    section: "docker",
    question: () => <span>Rebuild the container(s)</span>,
    seldom: true,
    answer: () => (
      <span>
        <p>Used when there are changes to the dockerFile</p>
        <CodeCopy>yarn local-build</CodeCopy>
      </span>
    )
  },
  {
    section: "docker",
    question: () => <span>Start the site and keep the process attached</span>,
    answer: () => (
      <span>
        <p>Takes control of the terminal process in which it's launched.</p>
        <p>Can be stopped with âc</p>
        <CodeCopy>yarn local-run</CodeCopy>
      </span>
    )
  },
  {
    section: "docker",
    question: () => <span>List running containers</span>,
    answer: () => (
      <span>
        <p>Lists all containers which are currently running on your system</p>
        <CodeCopy>docker ps</CodeCopy>
      </span>
    )
  },
  {
    section: "docker",
    question: () => <span>Start shell in docker container</span>,
    answer: () => (
      <span>
        <CodeCopy>docker exec -it &lt;name or id> bash</CodeCopy>
      </span>
    )
  }
]);
