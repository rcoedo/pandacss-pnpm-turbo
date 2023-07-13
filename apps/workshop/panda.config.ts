import { defineConfig } from "@pandacss/dev";
import monoPreset from "@mono/design-system-react/preset";

export default defineConfig({
  jsxFramework: "react",

  emitPackage: true,
  outdir: "@mono/mono-panda",
  clean: true,

  preflight: true,
  presets: ["@pandacss/dev/presets", monoPreset],

  include: [
    "./node_modules/@mono/design-system-react/src/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  exclude: [],

  hooks: {
    "config:change": (ctx) => {
      console.log(
        "[WORKSHOP] config changed. funky visuals are now: ",
        JSON.stringify(
          ctx.theme?.recipes?.button?.variants?.visual?.funky,
          null,
          5,
        ),
      );
    },
  },
});
