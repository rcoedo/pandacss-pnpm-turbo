import { Meta, StoryObj } from "@mono/workshop";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Mono/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    shape: { control: "text" },
    visual: { control: "text" },
    size: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Login: Story = {
  args: {
    children: "log in",
  },
};

export const Logout: Story = {
  args: {
    shape: "square",
    size: "sm",
    children: "log out",
  },
};

export const RenderStory: Story = {
  render: () => (
    <Button shape="square" visual="funky" size="lg">
      I'm a button!
    </Button>
  ),
};
