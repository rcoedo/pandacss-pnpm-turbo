import { definePreset } from "@pandacss/dev";

import { button } from "./src/button/button.recipe";

const monoPreset: ReturnType<typeof definePreset> = definePreset({
	theme: {
		extend: {
			recipes: {
				button,
			},
		},
	},
});

export default monoPreset;
