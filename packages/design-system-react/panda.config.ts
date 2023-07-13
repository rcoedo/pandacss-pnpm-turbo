import { defineConfig } from "@pandacss/dev";

import monoPreset from "./preset";

export default defineConfig({
  jsxFramework: "react",

  emitPackage: true,
  outdir: "@mono/mono-panda",
  clean: true,

  preflight: true,
  presets: ["@pandacss/dev/presets", monoPreset],

  include: ["./src/**/*.{ts,tsx}"],
  exclude: [],
});
