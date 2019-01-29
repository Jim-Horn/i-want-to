import { Articles, isActive } from "./FAQs";
import React from "react";
import renderer from "react-test-renderer";
import CodeCopy from "../CodeCopy";

it("`isActive` returns what it should - defining active section", () => {
  expect(isActive(undefined, { section: "cmd", friendlyName: "cmd" }, 0)).toBe(
    true
  );

  expect(isActive("cmd", { section: "cmd", friendlyName: "cmd" }, 0)).toBe(
    true
  );

  expect(isActive("cmd", { section: "foo", friendlyName: "cmd" }, 1)).toBe(
    false
  );

  expect(isActive(undefined, { section: "foo", friendlyName: "cmd" }, 1)).toBe(
    false
  );

  expect(isActive(undefined, { section: "foo", friendlyName: "cmd" }, 99)).toBe(
    false
  );
});

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Articles
        articles={[
          {
            section: "cmd",
            question: <span>generate an ssh key</span>,
            answer: (
              <span>
                <CodeCopy>cd ~/.ssh</CodeCopy>
                <CodeCopy>
                  ssh-keygen -t rsa -C "&lt;your_email@example.com&gt;"
                </CodeCopy>
              </span>
            )
          }
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
