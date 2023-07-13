import { defineRecipe } from "@pandacss/dev";

export const button: ReturnType<typeof defineRecipe> = defineRecipe({
	name: "button",
	description: "The styles for the Button component",
	jsx: ["Button"],
	base: {
		display: "flex",
	},
	variants: {
		visual: {
			funky: { bg: "red.300", color: "blue.800" },
			edgy: { border: "1px solid {colors.red.500}" },
		},
		size: {
			sm: { padding: "4", fontSize: "12px" },
			lg: { padding: "8", fontSize: "40px" },
		},
		shape: {
			square: { borderRadius: "0" },
			circle: { borderRadius: "full" },
		},
	},
	defaultVariants: {
		visual: "funky",
		size: "sm",
		shape: "circle",
	},
});
