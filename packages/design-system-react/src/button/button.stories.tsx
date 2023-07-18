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

export const Funky: Story = {
	args: {
		visual: "funky",
		shape: "circle",
		size: "sm",
		children: "funky button",
	},
};

export const Edgy: Story = {
	args: {
		visual: "edgy",
		shape: "square",
		size: "sm",
		children: "edgy button",
	},
};

// export const Edgy: Story = {
// 	render: () => (
// 		<Button shape="square" visual="edgy" size="sm">
// 			edgy button
// 		</Button>
// 	),
// };

export const FunkyRenderStory: Story = {
	render: () => (
		<Button shape="square" visual="funky" size="lg">
			I'm a button!
		</Button>
	),
};
