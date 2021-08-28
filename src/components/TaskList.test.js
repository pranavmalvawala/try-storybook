import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as TaskListStories from "./TaskList.stories";

const { WithPinnedTask } = composeStories(TaskListStories);

it("renders pinned task at the start of the list", () => {
  const { container } = render(<WithPinnedTask />);

  expect(container.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')).not.toBe(null);
});
